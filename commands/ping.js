module.exports = {
    name: 'ping',
    description: 'Responds with "pong" whenever the user types "-ping"',
    execute(message) {
        message.reply({
            content: 'pong'
        })
    }
}



// client.on('messageCreate', (message) => {
//     if(message.content === 'Hello HuskyBot') {
//         message.reply({
//             content: 'Hello ' + message.author.username + '!'
//         })
//     }
    
//     if(message.content === 'ping') {
//         message.reply({
//             content: 'pong',
//         })
//     }
// })