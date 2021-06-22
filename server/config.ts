const sql = require("mssql");
require("dotenv").config();

var config = {
  //driver: "msnodesqlv8",
  //driver: "FreeTDS",
  server: process.env.DB_SERVER,
  database: "PRDCBAPV42",
  domain: process.env.DB_DOMAIN,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: true,
    trustServerCertificate: true, //solve certificate issue
    trustedConnection: true, //for windows auth
  },
};

sql.on("error", (err) => {
  console.log(err);
});
const dbConn = sql.connect(config); //a promise
export default dbConn;
