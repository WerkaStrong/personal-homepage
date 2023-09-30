import axios from "axios";

export const getRepos = async (username) => {
    console.log('hshsh')
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch repositories");
  }
};
