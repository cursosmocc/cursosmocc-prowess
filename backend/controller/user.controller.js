import moodleConnect from "../utility/moodle-connect.js";

export const createUser = async (req, res) => {
  try {
    const _user = req.body;
    const client = await moodleConnect;
    const user = await client.call({
      wsfunction: "core_user_create_users",
      args: {
        users: [_user],
      },
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};
