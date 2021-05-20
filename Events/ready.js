//console.log(`ready.js démarrer`);
module.exports = async(client) => {
    client.user.setPresence({
        activity: {
            name:"Mettre le fun dans la pièce"
        }
    })
};