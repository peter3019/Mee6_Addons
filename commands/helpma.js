const Discord = require('discord.js')
module.exports = {
    name: 'helpma',
    category: 'Help',
    description: `Helps`,
    commands: ['hma'],
    permissionError: 'You need Administrator power to use this command', 
    syntaxError: `Please only put command it self.`,
    cooldown: '60s',
    callback: (message)  => {

        if (message.member.hasPermission('ADMINIRATOR')){
        const embed = new Discord.MessageEmbed()
        .setTitle(`**Here are my supported commands for now:**`)
        .setAuthor('Mee6_Addons Help')
        .setThumbnail('https://static.wikia.nocookie.net/discord/images/e/e6/Mee6.png/revision/latest/scale-to-width-down/200?cb=20201028153812')
        .setColor('#00eaff')
        .setFooter('(More Comming Soon >_<)')
        .addFields(
            { name: '   Help',value: '    **!helpma** or **!hma** - Displays the help menu'},
            { name: '\u200B', value: '\u200B' }, //blank line
            { name: '   Clear Channel ',value: '    m!cc to clear channel '},
            { name: '\u200B', value: '\u200B' }, //blank line
                )
            
        
        message.channel.send(embed)
        }
    }  
}