const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`L'avatar de **${membre.user.username}**`,
                fields:[
                    {
                    name: `L'avatar de **${membre.user.username}** est :`,
                    value: message.author.displayAvatarURL(),
                    }
                ],   
            }
        })
    }

};
module.exports.help = {
    name: "avatar"
}