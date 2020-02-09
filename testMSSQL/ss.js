var sql = require("mssql");

var dbConfig = {
    server : "localhost",
    database: "test",
    user: "SA",
    password: "<YourStrong@Passw0rd>",
    port: 1433
};

function getEmp() {
    var conn = new sql.ConnectionPool(dbConfig);
    var req = new sql.Request(conn);

    conn.connect(function (err) {
        if (err){
            console.log(err);
            return;
        }
        req.query("SELECT * FROM AGENTS" , function (err ,recordset) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(recordset);
            }
            conn.close();
        });
    });
}

getEmp();