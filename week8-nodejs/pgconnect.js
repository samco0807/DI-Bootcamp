const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "alliance",
    database: "products",
    port: 5432,
  },
});

app.set("products", db);

db.select("id","name","price")
.from(products)
.then((rows)=>{
    (console.log(rows))
    });
.catch((err) => {
    console.log(err)
});

db.("product")
.del()
.where({id:2})
.then(())