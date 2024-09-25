const Warn = require("../json/pt-br.json")
const ytdl_core = require("ytdl-core")
const fs = require("fs")
const Universal_Code = require("universal-code")
const Dados = []
const Simple_Commands = {
    Clear:function(Quantidade=1,Canal){
        Quantidade = parseInt(Quantidade)
        if (isNaN(Quantidade)){
             Canal.send(Warn.ERROR)
             return 
        }
        if (Quantidade > 99){Quantidade = 99}
        if (Quantidade < 1){Quantidade = 1}
        Canal.bulkDelete(Quantidade+1).catch(error =>{
            Canal.send(Warn.Time_has_expired)
        })

    },

    Radio:function(VoiceChannel){
        if (!VoiceChannel){
            console.log("Entre em um canal de voz")    
        }else{
            
        }
        

        
        
     /*   fetch("http://localhost:5000",{method:"GET"}).then(Response => Response.json()).then(data =>{
            
            
            console.log(data)
        
        
        })
    
    */
    
    },



    Code:function(Code,Canal){
        fetch("http://localhost:5000/").then(Response => Response.json().then(data=>{
            data.forEach(date=>{
                if (Code == date){
                    if (Dados.includes(date)){
                        return;
                    }else{
                        Dados.push(date)
                        console.log("Codigo Utilizado Com Exito!!")
                    }
                }
            })
        }))

    }
}
// 



 
    

  
module.exports = {Simple_Commands}