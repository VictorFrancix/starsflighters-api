import axios from "axios";


import { userRepository } from "../repositories/userRepository.js";

async function getRanking(){
    const ranking = await userRepository.getRanking();

    ranking.forEach((user: { id: number }) => delete user.id);

    return { fighters: ranking };
}


export const userServices: {
    getRanking: Function;
} = {
    getRanking
}