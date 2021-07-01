const { Plugin } = require('powercord/entities')
const { inject, uninject} = require('powercord/injector')
const { getModule } = require('powercord/webpack')

let zeroWidth = ['​', '‍', '‌']

function randzerowidth(length){
  let randString = ''
  for (let i = 0; i <= length; i++) {
    randString = randString + zeroWidth[(Math.floor(Math.random() * 3))]
  }
  return randString
}

module.exports = class antilog extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'antilog',
      aliases: ['al', 'alog'],
      description: 'adds 2000 zero width characters, thus messages cannot be displayed in the log, requires nitro',
      usage: '{c} [text]',
      executor: (args) => ({
        send: true, 
        result: args + randzerowidth(2000)
      })
    })
  }

  pluginWillUnload () {
    uninject('antilog') 
    powercord.api.commands.unregisterCommand('antilog')
  }
}
