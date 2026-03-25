// import {Pool} from "pg"

// const pool = new Pool({
//     user:"postgres",
//     password:"omgarg",
//     host:"localhost",
//     port:5432,
//     database:"postgres"
// })


// export default pool;

import { Pool } from "pg";
import dotenv from "dotenv"

dotenv.config({path: "../.env"});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;