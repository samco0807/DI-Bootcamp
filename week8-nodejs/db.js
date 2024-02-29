import knex from "knex";

export const db=knex({
    client:"pg",
    connectiion:{
        host:"localhost",
        port:5433,
        user:"postgres",
        database: "cours",
        password:"123456"
    }
})
console.log(db);