const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.channel.send({
        embed: {
            color: 0x00adcf,
            title:`Liste des commandes pour les braquages dans GTA Online`,
            fields:[
                {
                    name: "Le Casse de la Fleeca Bank",
                    value: "+braquage fleecabank"
                },
                {
                    name: "Sortie de prison",
                    value: "+braquage prison"
                },
                {
                    name: "Raid sur les laboratoires Humane",
                    value: "+braquage raid"
                },
                {
                    name: "Capital de départ",
                    value: "+braquage capital"
                },
                {
                    name: "Le casse de la Pacific Standard",
                    value: "+braquage pacific"
                }
            ],   
        }
    }); else
    if(args[0] == "fleecabank") 
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`Le braquage de **FLEECA BANK**`,
                fields:[
                    {
                        name: "Prerequis :",
                        value: "Pour commencer les braquages il faut tout d'abord avoir atteint le rang 12 et avoir un appartement de luxe. Les joueurs recevront un appel de Lester, il faudra ensuite aller le voir pour qu'il présente le braquage. Une fois le braquage terminé il est possible de le rappeler pour rejouer un braquage."
                    },
                    {
                        name: "Investissement :",
                        value: "11500 GTA$"
                    },
                    {
                        name: "Gains :",
                        value: "57500 GTA$ (Facile) 115000 GTA$ (Normal) 143750 GTA$ (Difficile)"
                    },
                    {
                        name: "Mission no 1",
                        value: "Conduire Lester à la banque puis retourner à l'entrepôt."
                    },
                    {
                        name: "Mission no 2",
                        value: "Voler la Kuruma auprès des gangsters puis la ramener à l'entrepôt."
                    }
                ],   
            }
        });
    }
    if(args[0] == "raid") 
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`**Raid sur les laboratoires Humane**`,
                fields:[
                    {
                        name: "Prerequis :",
                        value: "Pour commencer les braquages il faut tout d'abord avoir atteint le rang 12 et avoir un appartement de luxe. Les joueurs recevront un appel de Lester, il faudra ensuite aller le voir pour qu'il présente le braquage. Une fois le braquage terminé il est possible de le rappeler pour rejouer un braquage."
                    },
                    {
                        name: "Investissement :",
                        value: "54000 GTA$"
                    },
                    {
                        name: "Gains :",
                        value: "270000 GTA$ (Facile) 575000 GTA$ (Normal) 675000 GTA$ (Difficile)"
                    },
                    {
                        name: "Mission no 1",
                        value: "Deux joueurs doivent récupérer la carte d'accès auprès d'un contact."
                    },
                    {
                        name: "Mission no 2",
                        value: "Voler deux Insurgent auprès de Merryweather."
                    },
                    {
                        name: "Mission no 3",
                        value: "Voler un EMP situé dans le nez d'un Hydra sur un porte-avion puis ramener l'Hydra au point de rencontre."
                    },
                    {
                        name: "Mission no 4",
                        value: "Voler une Valkyrie de la base de Merryweather."
                    },
                    {
                        name: "Mission no 5",
                        value: "Conduire l'Insurgent avec l'EMP vers les laboratoires Humane puis garer le véhicule en toute discrétion."
                    }
                ],   
            }
        });
    }
    if(args[0] == "capital") 
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`**Capital de départ**`,
                fields:[
                    {
                        name: "Prerequis :",
                        value: "Pour commencer les braquages il faut tout d'abord avoir atteint le rang 12 et avoir un appartement de luxe. Les joueurs recevront un appel de Lester, il faudra ensuite aller le voir pour qu'il présente le braquage. Une fois le braquage terminé il est possible de le rappeler pour rejouer un braquage."
                    },
                    {
                        name: "Investissement :",
                        value: "40400 GTA$"
                    },
                    {
                        name: "Gains :",
                        value: "202000 GTA$ (Facile) 404000 GTA$ (Normal) 505000 GTA$ (Difficile)"
                    },
                    {
                        name: "Mission no 1",
                        value: "Aborder un yacht pour voler des paquets de drogue."
                    },
                    {
                        name: "Mission no 2",
                        value: "Voler un camion-poubelle et collecter des sacs tout en faisant attention en vagues d'aversaires."
                    },
                    {
                        name: "Mission no 3",
                        value: "Voler un van du camp de motards près du lac."
                    },
                    {
                        name: "Mission no 4",
                        value: "Voler des camions."
                    },
                    {
                        name: "Mission no 5",
                        value: "Voler un véhicule à la ferme."
                    }
                ],   
            }
        });
    }
    if(args[0] == "prison") 
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`**Sortie de prison**`,
                fields:[
                    {
                        name: "Prerequis :",
                        value: "Pour commencer les braquages il faut tout d'abord avoir atteint le rang 12 et avoir un appartement de luxe. Les joueurs recevront un appel de Lester, il faudra ensuite aller le voir pour qu'il présente le braquage. Une fois le braquage terminé il est possible de le rappeler pour rejouer un braquage."
                    },
                    {
                        name: "Investissement :",
                        value: "40000 GTA$"
                    },
                    {
                        name: "Gains :",
                        value: "200000 GTA$ (Facile) 400000 GTA$ (Normal) 500000 GTA$ (Difficile)"
                    },
                    {
                        name: "Mission no 1",
                        value: "Se confronter aux Vagos pour qu'un pilote puisse récupérer un avion et l'apporter à l'aéroport de Los Santos."
                    },
                    {
                        name: "Mission no 2",
                        value: "Voler un bus de prison et échapper à la police."
                    },
                    {
                        name: "Mission no 3",
                        value: "Un groupe de joueurs doit s'infiltrer et voler les horaires de transfert de prisonniers. Un autre groupe doit récupérer la voiture de Rashkovsky."
                    },
                    {
                        name: "Mission no 4",
                        value: "Pendant qu'un groupe se charge de l'associé, un autre doit abattre les avocats et récupérer leurs dépositions."
                    }
                ],   
            }
        });
    }
    if(args[0] == "pacific") 
    {
        message.channel.send({
            embed: {
                color: 0x00adcf,
                title:`**Le casse de la Pacific Standard**`,
                fields:[
                    {
                        name: "Prerequis :",
                        value: "Pour commencer les braquages il faut tout d'abord avoir atteint le rang 12 et avoir un appartement de luxe. Les joueurs recevront un appel de Lester, il faudra ensuite aller le voir pour qu'il présente le braquage. Une fois le braquage terminé il est possible de le rappeler pour rejouer un braquage."
                    },
                    {
                        name: "Investissement :",
                        value: "100000 GTA$"
                    },
                    {
                        name: "Gains :",
                        value: "500000 GTA$ (Facile) 1000000 GTA$ (Normal) 1250000 GTA$ (Difficile)"
                    },
                    {
                        name: "Mission no 1",
                        value: "Les joueurs disposeront d'un système de localisation et devront trouver un van en particulier pour le voler."
                    },
                    {
                        name: "Mission no 2",
                        value: "l faudra amener un objet à Avi Schwartzman sur une île. Emmenez ensuite Avi sur le bateau puis conduisez rapidement jusqu'au lac. Une fois la police semée, conduiserz Avi au point désigné. Attention une partie de cette mission est chronométrée."
                    },
                    {
                        name: "Mission no 3",
                        value: "Récupérer un van blanc à Vinewood puis faire diversion avec un van noir en attendant que le van blanc atteigne son but."
                    },
                    {
                        name: "Mission no 4",
                        value: "Le but sera de voler un véhicule militaire en tendant une embusade à un convoi de l'armée."
                    },
                    {
                        name: "Mission no 5",
                        value: "Voler de motos au club de motards des Lost."
                    }
                ],   
            }
        });
    }

};
module.exports.help = {
    name: "braquage"
}