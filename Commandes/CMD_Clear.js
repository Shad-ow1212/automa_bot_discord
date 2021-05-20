const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas les permissions !`).catch(console.error);
    
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Je n'ai pas la permission !`).catch(console.error);
    
    if(!args[0]) return message.channel.send("Vous devez spécifiez un nombre de message à supprimer (entre 2 & 99) !");
    
    if(isNaN(args[0])) return message.channel.send("Veuillez spécifier un nombre (entre 2 & 99) !"); 

    message.channel.bulkDelete(args[0]);

    message.channel.send({
        embed: {
            color: 0x00adcf,
            title:`${args[0]} messages ont été supprimés !`,
        }
    });
};

module.exports.help = {
   
    name: "clear"
}