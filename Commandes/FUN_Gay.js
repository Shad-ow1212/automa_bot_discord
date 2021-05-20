const Discord = require('discord.js');
var min=1;
var max=101;

module.exports.run = async(client, message, args) => 
{
    var GayCounter = Math.floor(Math.random() * (max - min)) + min;
    const membre = message.mentions.members.first() || message.member;
    message.channel.send({
        embed: {
            color: 0x00adcf,
            title: `**${membre.user.username}**, tu es gay à ${GayCounter}% ! :rainbow_flag:`,
        }
    })
};

module.exports.help = {
    name: "gay"
}