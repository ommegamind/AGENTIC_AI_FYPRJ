import Pool from "pg"

const pool = new Pool({
    user:"postgres",
    password:"omgarg",
    host:"localhost",
    port:5432,
    database:"tiral"
})

export default pool;