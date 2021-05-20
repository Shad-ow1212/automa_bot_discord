const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.channel.send({
        embed: {
            color: 0x00adcf,
            title:`Liste des catégories de commandes d'**Automa**`,
            fields:[
                {
                    name: "Commandes Pratiques",
                    value: "+help cmd"
                },
                {
                    name: "Commandes Funs",
                    value: "+help fun"
                }
            ],   
        }
    }); else
    if(args[0] == "cmd") 
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`Liste des commandes pratiques d'**Automa**`,
                fields:[
                    {
                        name: "Avoir l'avatar d'un membre",
                        value: "+avatar (+ nolink si tu veux directement avoir l'image"
                    },
                    {
                        name: "Effacer des messages (il faut avoir les perms !)",
                        value: "+clear"
                    },
                    {
                        name: "Avoir le lien pour télécharger l'application Discord sur OSX ou Windows 10",
                        value: "+link"
                    },
                    {
                        name: "Savoir son ping",
                        value: "+ping"
                    },
                    {
                        name: "Savoir ses stats sur le server Discord",
                        value: "+stats"
                    },
                    {
                        name: "Dire quelque chose à travers Automa ",
                        value: "+say ( + ce que tu veux dire)"
                    },
                    {
                        name: "Avoir les infos de Automa",
                        value: "+infobot"
                    }
                ],   
            }
        });
    }
    if(args[0] == "fun") 
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`Liste des commandes funs d'**Automa**`,
                fields:[
                    {
                        name: "Avoir son certificat Caneton/Biatche",
                        value: "+certificat (+ caneton / biatche)"
                    },
                    {
                        name: "Savoir ton pourcentage de gay",
                        value: "+gay"
                    },
                    {
                        name: "Faire un feuille caillou ciseau avec Automa",
                        value: "+fcs"
                    },
                    {
                        name: "Demander une question a la 8ball légendaire",
                        value: "+8ball ( + ta question)"
                    }
                ],   
            }
        });
    }
};
module.exports.help = {
    name: "help"
}