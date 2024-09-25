const Mysql = require("mysql2")
const ERROR = require("./ERROR")
var ERROR_Activeted = false
module.exports = function(User,IDString,Mensagem){
    var ID = Number(IDString)
    var Connection = Mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "123123",
        database: "discord"
    })

    Connection.connect(err=>{
        if (err && ERROR_Activeted == false){
            ERROR_Activeted = true
            ERROR.push("Problema ao tentar Conectar ao Banco de dados")
            console.log(`Algo deu errado, para ver todos os Erros Digite o seguinte comando: /error`)
            return;
        }else{
            Connection.query(`INSERT INTO comandos(Usuario,UserID,Mensagem) value ("${User}",${ID},"${Mensagem}")`)
            return;
        }
    })


}