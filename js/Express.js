const App = require("express")()
const Config = require("../config.json")
const Express = {
    Express_Activaty:function(client){
        App.use(require("express").static(`${__dirname}/html`))
        App.get("/",(req,res)=>{
            res.sendFile(`${__dirname}./html/index.html`)
        })
        
        App.get("/Enviar/*",(req,res)=>{
            const Dados = {
                Mensagem:decodeURIComponent(req.url.substring(req.url.indexOf("Mensagem=") + "Mensagem=".length,req.url.indexOf("&Email"))).replace(/\+/g, ' '),
                Email:decodeURIComponent(req.url.substring(req.url.indexOf("Email=") + "Email=".length))
            }
            console.log("Dados Recebidos")
            var Channel = client.channels.cache.get(Config.Warning_channel)
            if (Channel){
                Channel.send(`O Usuario **${Dados.Email}** Enviou a seguinte Mensagem ||${Dados.Mensagem}||`)
            }
            res.send("Dado Enviado Com Exito!")
        })
        
        
        
        App.listen(50000,()=>{
            console.log("O Site foi inicializado com exito!")
        })
        
    }
}

module.exports = {Express}