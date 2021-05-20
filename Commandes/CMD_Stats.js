const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    //if(!membre) return message.channel.send(`Veuillez mentionner un utilisateur !`);
    message.channel.send({
        embed: {
            color: 0x00adcf,
            title:`Statisques de **${membre.user.username}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields:[
                {
                name: "> ID :",
                value: membre.id 
                },
                {
                    name: "> Crée le :",
                    value: moment.utc(membre.user.createdAt).format("LLL")
                },
                {
                    name: "> Jeu :",
                    value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "Aucun jeu"}`
                },
                {
                    name: "> A rejoins le :",
                    value: moment.utc(membre.joinedAt).format("LLL")
                }
            ],
            footer: {
                text: `Informations de l'utilisateur ${membre.user.username}`
            }    
        }
    })
};
module.exports.help = {
    name: "stats"
}