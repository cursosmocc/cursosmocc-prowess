import MoodleConnect from "../utility/moodle-connect.js";

export const getCourses = (req, res) => {
  try {
    MoodleConnect.then((client) => {
      client
        .call({
          wsfunction: "core_course_get_courses_by_field",
          args: {
            field: "",
          },
        })
        .then(function (courses) {
          return res.status(200).json(courses);
        });
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getCoursesByCategory = (req, res) => {
  try {
    MoodleConnect.then((client) => {
      client
        .call({
          wsfunction: "core_course_get_courses_by_field",
          args: {
            field: "category",
            value: req.params.id,
          },
        })
        .then(function (courses) {
          return res.status(200).json(courses);
        });
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getCourse = (req, res) => {
  try {
    MoodleConnect.then((client) => {
      client
        .call({
          wsfunction: "core_course_get_courses_by_field",
          args: {
            field: "id",
            value: req.params.id,
          },
        })
        .then(function (course) {
          return res.status(200).json(course);
        });
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};
