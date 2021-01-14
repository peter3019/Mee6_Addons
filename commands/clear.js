module.exports = {
    name: 'clear',
    category: 'Clean',
    description: 'clear channel command',
    commands: ['cc'],
    permissionError: 'You need Administrator power to use this command', 
    callback: (message) => {
        if (message.member.hasPermission('ADMINISTRATOR')
        )   {
            message.channel.messages.fetch().then((results) =>{
            message.channel.bulkDelete(results);
            console.log(`Channel Cleared`)
            
            })
        } else if ( message.member.hasPermission('MANAGE_MESSAGES')
        )   {
            message.channel.messages.fetch().then((results) =>{
            message.channel.bulkDelete(results);
            console.log(`Channel Cleared`)
            
            })
        }
    }
}