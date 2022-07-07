import axios from "axios";

async function getUserStars(userName: string) {
    const URL = `https://api.github.com/users/${userName}/repos`;
    const { data: userData } = await axios.get(URL);
    let stars = 0;
    userData.forEach((user: { stargazers_count: number }) => {
        stars += user.stargazers_count;
    });
    return { stars };
}

async function getUserInfo(username: string) {
    const userRows = await userRepository.getUser(username);
    let user: { username: string; wins: number; losses: number; draws: number };
    if (userRows.length === 0) {
        user = await userRepository.insertUser(username);
    } else {
        user = userRows[0];
    }

    return user;
}



import { userRepository } from "../repositories/userRepository.js";

async function getRanking(){
    const ranking = await userRepository.getRanking();

    ranking.forEach((user: { id: number }) => delete user.id);

    return { fighters: ranking };
}


export const userServices: {
    getRanking: Function,
    getUserStars: Function,
    getUserInfo: Function
} = {
    getRanking,
    getUserStars,
    getUserInfo
}