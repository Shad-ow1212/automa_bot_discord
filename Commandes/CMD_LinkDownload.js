const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    message.channel.send({
        embed: {
            color: 0x00adcf,
            title:`Lien pour télécharger l'application Discord sur OSX ou Windows 10`,
            fields:[
                {
                    name: "Lien direct",
                    value: "https://discord.com/download"
                }
            ],  
        }
    })
};
module.exports.help = {
    name: "linkdiscord"
}