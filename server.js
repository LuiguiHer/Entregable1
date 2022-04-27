const app = require(".");
const db = require("./db/Connecter");


db.authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });

db.sync({ force: false })
    .then(() => {
        console.log("Database has been synced");
    })
    .catch(err => {
        console.error("Unable to sync database:", err);
    });


const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});



