const { Client, Message } = require('discord.js')

export interface Command {
    name: String
    msg: Message
}