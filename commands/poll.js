const PREFIX = '-'
const COMMAND_TYPE = 'poll'

/*
    1. Recognize message with prefix "p!" and split the message
    2. Make a switch case with two outcomes:
        a) Gives user instruction on how to use the command if
        only "p!poll" is written
        b) If the command is used correctly display the question
*/

module.exports = {
    name: 'poll',
    description: 'A simple yes or no poll created by user',
    execute(message, ctx, MessageEmbed) {
        let question = message.content.substring(PREFIX.length + COMMAND_TYPE.length).split(' ')
        console.log('message content = ' + message.content)
        console.log('ctx = ' + ctx)
        console.log('question[1] = ' + question[1])
        console.log('question = ' + question)
        console.log('message content[0] = ' + message.content[1])


        const newEmbed = new MessageEmbed()

        if(!question[1]) {
            newEmbed.setColor('#0x223BC9')
            .setTitle('Initiate Poll')
            .setDescription('"-poll" to initiate a simple yes or no poll')
        }
        else if(question[1]) {
            newEmbed.setColor('#0x223BC9')
            .setTitle('Poll')
            .setDescription(ctx.toString().replace(/,/g, ' '))
        }
        message.channel.send({ embeds: [newEmbed]})
    }
}

// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName('Poll')
//         .setDescription('Creates a simple yes or no poll for a user defined question'),
//     async execute(ctx) {
//         let splitMessage = ctx.split(" ")
//     } 
// }

// client.on('messageCreate', (question) => {
//     let args = question.content.substring(PREFIX.length).split(" ")

//     switch(args[0]) {
//         case "poll":
//             const exampleEmbed = new MessageEmbed()
//             .setColor('#0x223BC9')
//             .setTitle("Initiate Poll")
//             .setDescription("p!poll to initiate a simple yes or no poll")

//             if(!args[1]){
//                 //question.channel.send(exampleEmbed)
//                 question.channel.send({ embeds: [exampleEmbed]})
//             }

//             //let msgArgs = args.slice(1).join(" ")
//         break;
//     }
// })