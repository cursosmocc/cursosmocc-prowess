import Moodle from "moodle-client";
import dotenv from "dotenv";
dotenv.config();

const wwwroot = process.env.WWWROOT;
const token = process.env.TOKEN;

if (!wwwroot || !token) {
  throw new Error("Missing Moodle credentials");
}

const moodle = Moodle.init({
  wwwroot,
  token,
});

export default moodle;
