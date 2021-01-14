const config = require('../config.json')

module.exports = (client, triggerText, replyText) => {
    
    
    client.on('message', (message) =>{
        if (message.content.includes(config.invite)) {
            //message includes discord link
            let { guild } = message
            const msdm = (`Please don't self promote on ${guild.name}` )
            message.delete()
            console.log('Message_Deleted')
            message.author.send(msdm)
        }
    })
}