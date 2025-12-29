import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("error fetching api data: ", error);
    throw error;
  }
}



// import axios from "axios";

// const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
// const BASE_URL = "https://youtube138.p.rapidapi.com";

// const options = {
//   headers: {
//     "x-rapidapi-key": API_KEY,
//     "x-rapidapi-host": "youtube138.p.rapidapi.com",
//   },
// };

// export const fetchData = async (url) => {
//   try {
//     const fullUrl = `${BASE_URL}/${url}`;
//     console.log("Calling:", fullUrl);

//     const response = await axios.get(fullUrl, options);
//     console.log("API RAW RESPONSE:", response);

//     return response.data;
//   } catch (error) {
//     console.error("API ERROR:", error.response?.data || error.message);
//     throw error;
//   }
// };

// import axios from "axios";

// const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
// const BASE_URL = "https://youtube138.p.rapidapi.com";

// const options = {
//   headers: {
//     "x-rapidapi-key": API_KEY,
//     "x-rapidapi-host": "youtube138.p.rapidapi.com",
//   },
// };

// export const fetchData = async (url) => {
//   try {
//     const fullUrl = `${BASE_URL}/${url}`;          // 🔹 added only for logging
//     console.log("Calling:", fullUrl);              // 🔹 added

//     const { data } = await axios.get(fullUrl, options);
//     console.log("Response data:", data);           // 🔹 added

//     return data;
//   } catch (error) {
//     console.error(
//       "error fetching api data:",
//       error.response?.data || error.message
//     );                                             // 🔹 slightly improved
//     throw error;
//   }
// };



// import axios from "axios";

// const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
// const BASE_URL = "https://youtube138.p.rapidapi.com"

// const options = {
//   headers: {
//     'x-rapidapi-key': API_KEY,
//     'x-rapidapi-host': 'youtube138.p.rapidapi.com'
//   },
// };

// export const fetchData = async (url) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//     return data;
//   } catch (error) {
//     console.error("error fetching api data: ", error);
//     throw error;
//   }
// }
 