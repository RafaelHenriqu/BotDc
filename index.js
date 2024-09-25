const discord = require("discord.js")
const client = new discord.Client({intents:["MessageContent","GuildMessages","Guilds","GuildMembers","AutoModerationConfiguration","AutoModerationExecution","GuildVoiceStates","GuildIntegrations","DirectMessagePolls"]})
const config = require("./config.json")
const Comandos = require("./js/Comandos")
const Express = require("./js/Express")
const Mysql_Starting = require("./js/Mysql_Starting")
const ERROR = require("./js/ERROR")

client.once("ready",(bot)=>{ // Quando o bot ligar! //
    console.log(`${bot.user.tag} Agora está online`)
    Express.Express.Express_Activaty(client)
})

client.on("messageCreate",(Mensagem)=>{ // Quando uma mensagem é enviada no chat //
    const Commands = Mensagem.content.slice(config.Prefix.length).trim().split(/ +/g).shift().toLowerCase() // Verificando se a mensagem tem o prefix, Removendo ele & tirando os espaços do comando //
    if (Mensagem.author.bot || Mensagem.channel.type==="dm" || Mensagem.content[0] != config.Prefix) return // Verificação de segurança
    
    switch(Commands){
        case 'clear':
            Comandos.Simple_Commands.Clear(Mensagem.content.split(" ")[1],Mensagem.channel)
            return;
        case 'error':
            console.log(ERROR)
            return;
        case 'code':
            Comandos.Simple_Commands.Code(Mensagem.content.split(" ")[1],Mensagem.channel)
            return;
        
 /*       case 'radio_play':
            Comandos.Simple_Commands.Radio(Mensagem.member.voice.channel,Mensagem)
            return;*/
        default:
            Mensagem.channel.send("O Comando digitado não existe ou está com defeito.")
            break
    }


    
    Mysql_Starting(Mensagem.author.username,Mensagem.author.id,Mensagem.content.substring(1))








    

})

client.login(config.Token)


/*
    switch(Commands){
        case 'clear':
            Comandos.Clear(SegundaParte,Mensagem.channel)
            break

        default:
        console.log("Algo deu errado ou está ausente.")
    }

*/