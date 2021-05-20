const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {
    const membre = message.member;
    if(!args[0]) return message.channel.send(
        {embed: {
            color: 0x00adcf,
            title:`Tu dois écrire ta phrase que Automa va ensuite dire !`, 
        } 
    });
    message.channel.bulkDelete(1);
    message.channel.send({
        embed: {
            color: 0x00adcf,
            title:`${args.join(' ')}`,
            footer: {
                text: `Message demandé par ${membre.user.username}`
            }    
        }
    })
};
module.exports.help = {
    name: "say"
}