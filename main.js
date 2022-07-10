// Includes necessary libraries and API's
require('dotenv').config()
const fs = require('fs')
const path = require('path')
const Discord = require('discord.js')
const { Client, Collection, Intents} = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { prefix } = require('./config.json')

const PREFIX = '-'

// Intents for what the bot will be used for
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
    ]
})

// Makes a "map" where commands can be stored 
client.commands = new Collection();

// Adds commands to map
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}

client.on('ready', () => {
    console.log('HuskyBot is online')
    console.log('The prefix is ' + prefix)
})


client.on('messageCreate', message => {
    if(!message.content.startsWith(PREFIX)) return

    const ctx = message.content.substring(PREFIX.length).split(" ")
    const command = ctx.shift().toLowerCase()
    if(command === 'ping') {
        client.commands.get('ping').execute(message)

    }
    if(command === 'poll') {
        client.commands.get('poll').execute(message, ctx,  MessageEmbed)
    }
})

client.login(process.env.TOKEN)