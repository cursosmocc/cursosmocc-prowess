import MoodleConnect from "../utility/moodle-connect.js";

export const getCategories = async (req, res) => {
  try {
    const client = await MoodleConnect;
    const categories = await client.call({
      wsfunction: "core_course_get_categories",
    });
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).json(error);
  }
};
