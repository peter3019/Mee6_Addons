



module.exports = (client) => {
    client.on('message', (message) =>{
        if (message.content.includes("m!help")) {
            message.delete()
            
        }
        console.log(`${message.content}`);        
    })
}