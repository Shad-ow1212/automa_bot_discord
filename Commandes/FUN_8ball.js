const Discord = require('discord.js');
var min=1;
var max=11;

module.exports.run = async(client, message, args) => 
{
    var ProbCounter = Math.floor(Math.random() * (max - min)) + min;
    let Prob;

    if(!args[0]) return message.channel.send(
        {embed: {
            color: 0x00adcf,
            title:`Tu dois poser ta question !`, 
        } 
    });

    if(ProbCounter == 1)
    {
        prob = "Bien sur !"
    };
    if(ProbCounter == 2)
    {
        prob = "Non."
    };
    if(ProbCounter == 3)
    {
        prob = "Une chance sur deux..."
    };
    if(ProbCounter == 4)
    {
        prob = "Flemme de répondre..."
    };
    if(ProbCounter == 5)
    {
        prob = "N'y pense même pas !"
    };
    if(ProbCounter == 6)
    {
        prob = "Impossible !"
    };
    if(ProbCounter == 7)
    {
        prob = "Même pas en rêve !"
    };
    if(ProbCounter == 8)
    {
        prob = "Oui."
    };
    if(ProbCounter == 9)
    {
        prob = "Affirmatif"
    };
    if(ProbCounter == 10)
    {
        prob = "100% de chance !"
    };

    message.channel.send({
        embed: {
            color: 0x00adcf,
            title:`LA 8BALL MAGIQUE !`,
            fields:[
                {
                name: "Ta question :",
                value: `${args.join(' ')}`
                },
                {
                    name: "Ta réponse :",
                    value: `${prob}`
                }
            ],   
        }
    })
};

module.exports.help = {
    name: "8ball"
}