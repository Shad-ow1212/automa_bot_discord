const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    const membre = message.mentions.members.first() || message.member;

    if(args[0] === "caneton") {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`Certificat de membre officiel du cercle privé de l'Aliance des Canetons Supreme`,
                fields:[
                    {
                        name: `Voila ton certificat ${membre.user.username} :`,
                        value: `Tu es officielement devenu(e) un membre de **l'Aliance des Canetons Supreme**`
                    }
                ],  
            }
        });
    }
    if(args[0] === "biatche") {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`Certificat de membre officiel du cercle privé de l'Aliance des Biatches Supreme`,
                fields:[
                    {
                        name: `Voila ton certificat ${membre.user.username} :`,
                        value: `Tu es officielement devenu(e) un membre de **l'Aliance des Biatches Supreme**`
                    }
                ],  
            }
        });
    }
};

module.exports.help = {
    name: "certificat"
}