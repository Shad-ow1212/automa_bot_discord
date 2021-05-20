const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    message.channel.send({
        embed: {
            color: 0x00adcf,
            title:`Information sur le Bot Automa !`,
            fields:[
                {
                    name: "Créateur :",
                    value: "Shad_ow1212#2709"
                },
                {
                    name: "Codé en :",
                    value: `JavaScript avec NodeJS et le module "Discord.js" `
                },
                {
                    name: "Server de Automa :",
                    value: `https://discord.gg/TXmdRsdp2y`
                },
                {
                    name: "Des Questions?",
                    value: `https://discord.gg/FWbEBq49z3`
                },
                {
                    name: "Version :",
                    value: `1.2.0 (les version ultérieurs étaient déstinées à des test et usages privés.)`
                }
            ],  
        }
    })
};
module.exports.help = {
    name: "infobot"
}