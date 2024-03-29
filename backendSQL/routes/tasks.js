const router = require("express").Router();
const db = require("../util/db");
const { v4: uuidv4 } = require("uuid");
const e = require("express");

/* GET ALL TASKS */
router.route("/").get((req, res) => {
  let sql = "SELECT * FROM tasks";

  let query = db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      throw err;
    }
    res.json({ result: results });
  });
});

/* ADD A NEW TASK */
router.route("/add").post((req, res) => {
  const newTask = {
    _id: uuidv4(),
    text: req.body.text,
    reminder: req.body.reminder,
    day: req.body.day,
  };

  let sql = "INSERT INTO tasks SET ?";

  let query = db.query(sql, newTask, (err) => {
    if (err) throw err;
    res.json({ result: newTask });
  });
});

/* GET A TASK */
router.route("/:id").get((req, res) => {
  // write this method yourself
  let sql = "SELECT :id FROM tasks"

  let query = db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      throw err;
    }
    res.json({ result: results });
  });

});

/* DELETE A TASK */
router.route("/:id").delete((req, res) => {
// write this method yourself
  let sql = "DELETE * FROM tasks"

  let query = db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      throw err;
    }
    res.json({ result: results });
  });

});


/* UPDATE A TASK */
router.route("/update/:id").post((req, res) => {
  // write this method yourself
});

module.exports = router;
