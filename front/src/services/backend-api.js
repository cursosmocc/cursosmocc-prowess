import axios from "axios";
const url = "http://localhost:3012/mocc";

export const getCourses = async () => {
  try {
    const courses = await axios.get(`${url}/courses`);
    return courses.data.courses;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCoursesByCategory = async (id) => {
  try {
    const courses = await axios.get(`${url}/courses/${id}`);
    return courses.data.courses;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCourse = async (id) => {
  try {
    const courses = await axios.get(`${url}/courses/${id}`);
    return courses.data.courses;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCatagories = async () => {
  try {
    const categories = await axios.get(`${url}/categories`);
    return categories.data.categories;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const postUser = async (user) => {
  try {
    const response = await axios.post(`${url}/users`, user);
    return response.data;
  } catch (error) {
    console.log(error);
    return { message: "Error al crear el usuario" };
  }
};
