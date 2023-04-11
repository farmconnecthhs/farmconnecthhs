import { Dialect, Sequelize} from "sequelize";

//These get populated from the .env file
//See the .env.example file for more info
const database = process.env.DB_DATABASE as string;
const username = process.env.DB_USER as string;
const password = process.env.DB_PASS as string;
const host = process.env.DB_HOST as string;
const port = parseInt(process.env.DB_PORT as string);
const dialect = process.env.DB_DIALECT as Dialect

console.log(database, username, password, host, port, dialect);
const sequelize = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: dialect,
});

export default sequelize;