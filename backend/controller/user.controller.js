import moodleConnect from "../utility/moodle-connect.js";

export const signupUser = async (req, res) => {
  try {
    const _user = req.body;
    const client = await moodleConnect;
    const user = await client.call({
      wsfunction: "auth_email_signup_user",
      args: {
        username: _user.username,
        password: _user.password,
        firstname: _user.firstname,
        lastname: _user.lastname,
        email: _user.email,
        city: _user.city,
        country: _user.country,
      },
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const client = await moodleConnect;
    const users = await client.call({
      wsfunction: "core_user_get_users",
      args: {
        criteria: [
          {
            key: "username",
            value: req.params.username,
          },
        ],
      },
    });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(error);
  }
};
