const Discord = require('discord.js');
var min=1;
var max=4;

module.exports.run = async(client, message, args) => 
{
    var randomBot = Math.floor(Math.random() * (max - min)) + min; 

    if(!args[0]) return message.channel.send("Tu dois mettre un nombre entre 1 & 3 (1 = :page_facing_up:, 2 = :rock:, 3 = :scissors:");
    
    if(isNaN(args[0])) return message.channel.send("Tu dois mettre un nombre entre 1 & 3 (1 = :page_facing_up:, 2 = :rock:, 3 = :scissors:"); 

    // 1 = feuille :page_facing_up:
    // 2 = caillou :rock:
    // 3 = ciseaux :scissors:

    if(args[0] == 1 & randomBot == 1)
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`Egalité ! Tu as fait :page_facing_up: et Automa a aussi fait :page_facing_up:`,
            }
        });
    } else
    if(args[0] == 1 & randomBot == 2)
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`Tu as gagné ! Tu as fait :page_facing_up: et Automa a fait :rock:`,
            }
        });
        
    } else
    if(args[0] == 1 & randomBot == 3)
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`Tu as perdu ! Tu as fait :page_facing_up: et Automa a fait :scissors:`,
            }
        });
    } else
    if(args[0] == 2 & randomBot == 1)
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`Tu as perdu ! Tu as fait :rock: et Automa a fait :page_facing_up:`,
            }
        });
    } else
    if(args[0] == 2 & randomBot == 2)
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`Egalité ! Tu as fait :rock: et Automa a aussi fait :rock:`,
            }
        });
    } else
    if(args[0] == 2 & randomBot == 3)
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`Tu as gagné ! Tu as fait :rock: et Automa a fait :scissors:`,
            }
        });
    } else
    if(args[0] == 3 & randomBot == 1)
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`Tu as gagné ! Tu as fait :scissors: et Automa a fait :page_facing_up:`,
            }
        });
    } else
    if(args[0] == 3 & randomBot == 2)
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`Tu as perdu ! Tu as fait :scissors: et Automa a fait :rock:`,
            }
        });
    } else
    if(args[0] == 3 & randomBot == 3)
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`Egalité ! Tu as fait :scissors: et Automa a aussi fait :scissors:`,
            }
        });
    } 
};

module.exports.help = {
    name: "fcs"
}