const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin123",
  database: "student_list",
});

app.post("/datainsert", (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const phone_number = req.body.phone_number;
  const address = req.body.address;
  const old_student = req.body.old_tudent;
  const reason = req.body.reason;

  con.query(
    " INSERT INTO student_info (first_name, last_name, email, phone_number,address, old_student, reason) VALUES (?,?,?,?,?,?,?) ",
    [first_name, last_name, email, phone_number, address, old_student, reason],
    (err, results) => {
      console.log(results);
      try {
        if (results.affectedRows > 0) {
          res.json({ message: "Data has been added!" });
        } else {
          res.json({ message: "Something went wrong!" });
        }
      } catch (err) {
        res.json({ message: err });
      }
    }
  );
});

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
