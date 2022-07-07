import pg from 'pg';
import dotenv from "dotenv";

dotenv.config();

const {Pool} = pg;

const connection = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgres://postgres:74762510@localhost:5432/starfighters'
});

export default connection;