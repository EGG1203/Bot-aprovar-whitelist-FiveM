// Servidor de suporte: https://discord.gg/sgZAMyM3st
// Codado por É GG#1203 (714143339368415294)
// Github: https://github.com/EGG1203
//Aqui é o requerimento das "extensões"

const Discord = require('discord.js'); 

const client = new Discord.Client({
    autoReconnect: true,
    messageCacheMaxSize: 4048,
    fetchAllMembers: false,
    disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking'],
    messageCacheLifetime: 1680,
    disableEveryone: false
});

//Aqui quando o bot estiver online vai registrar no console as seguintes informações abaixos!
client.on("ready", () => {
  process.title = "Bot de whitelist desenvolvido por É GG#1203"
  console.log(`Servidores:${client.guilds.size}\nUsuários:${client.users.size}\nEmojis:${client.emojis.size}`);
});

let prefix = "!" //prefix do bot

client.on("message", message => {

    if(message.content.startsWith(prefix + 'aprovar')) { //nome do comando
        const mysql = require('mysql'); 
        //Entrando na mysql
        const connection = mysql.createConnection({ //Info da database, para conectar
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'vrp'
        });
        connection.connect((err) => {
        });
        if(!message.guild.member(message.author.id).hasPermission("BAN_MEMBERS")) return message.channel.send({ //Só é liberado o comando caso a pessoa tenha a permissão de banir
            embed:{title: 'Você não tem permissão para usar este comando!',color: 0xFFFF00}
          })
    
const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const sayMessage = args.slice(1).join(" ");

          setInterval(function () {
            connection.query('SELECT 1');
          }, 5000);
      
        
            connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${sayMessage}'`, (err, rows) => { //atualizando a whitelist do servidor
    
            message.reply(`**o id ${sayMessage} foi aprovado**`) //Falando q o id foi ativado
    
            var usuario = new Discord.RichEmbed()
            .setTitle("<Servidor> Roleplay | Aprovado ")
            .setDescription(`O id **${sayMessage}** foi aprovado na **whitelist** com sucesso\n pelo staff **${message.author.username}!**`)
            .setColor(0xFFFF00)
            .setTimestamp(new Date())
            .setThumbnail('') //<GIF OU FOTO DO SERVIDOR>
                client.guilds.get('').channels.get('').send(usuario); //id do servidor/canal
          })
      
    }
    })

client.on("message", message => {

if(message.channel.type == "dm") return 
})

client.login(""); //Token do bot