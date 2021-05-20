const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    let début = Date.now();
    await message.channel.send("Attends un instant :)").then(async(m) => await m.edit({
        embed: {
            color: 0x00adcf,
            title:`Commande de ping effectuée avec succès !`,
            fields:[
                {
                    name: "Ton ping est de :",
                    value: `${Date.now() - début}ms`
                }
            ],  
        }
    }));
};

module.exports.help = {
    name: "ping"
}