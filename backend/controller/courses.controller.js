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
          if (!courses) {
            return res.status(404).json({
              message: "No courses found",
            });
          }
          return res.status(200).json(courses);
        })
        .catch((error) => {
          return res.status(500).json({
            message: "Internal server error",
          });
        });
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
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

export const enrolUser = (req, res) => {
  try {
    MoodleConnect.then((client) => {
      client
        .call({
          wsfunction: "enrol_manual_enrol_users",
          args: {
            enrolments: [
              {
                roleid: 5,
                userid: req.body.userid,
                courseid: req.body.courseid,
              },
            ],
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
