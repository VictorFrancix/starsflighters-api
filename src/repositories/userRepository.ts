import connection from "./../config/db.js"

async function insertUser(username: string){
    
    await connection.query(
        `INSERT INTO fighters ("username","wins","losses","draws")
        VALUES ($1, 0, 0, 0)`,
        [username]);

    return {username, wins: 0, losses: 0, draws: 0};
}

async function getUser(username: string){
    const { rows } = await connection.query(
        `SELECT * FROM fighters 
        WHERE username = $1`, [username]
    )

    return rows
}

async function getRanking(){
    const { rows } = await connection.query(
        `SELECT * FROM fighters
        ORDER BY wins DESC, draws DESC`
    )

    return rows;
}

export const userRepository: {
    insertUser: Function,
    getUser: Function,
    getRanking: Function
} = {
    insertUser,
    getUser,
    getRanking
};