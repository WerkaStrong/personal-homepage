import axios from "axios";

export const getRepos = async (username) => {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${username}/repos`
        );
        const repos = response.data;

        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        return repos;
    } catch (error) {
        throw new Error("Failed to fetch repositories");
    }
};
