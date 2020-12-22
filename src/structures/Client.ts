import { Collection, Client, Message } from 'discord.js'

interface IBaseCommand {
  config: {
    name: string
    aliases: string[]
    description: string
    createdAt: Date
    createdTimestamp: number
    version: string
    releasesNotes: Collection<string, {
      version: string
      name: string
      description: string
      createdAt: Date
      createdTimestamp: number
    }>
  };
  run: (params: {
    client?: NewClient
    message?: Message
    args?: string[]
  }) => void
}

class NewClient extends Client {
  events: Collection<string, (client: NewClient, ...params: any) => void>
  commands: Collection<string, IBaseCommand>
  aliases: Collection<string, IBaseCommand>
  
  constructor() {
    super()
    this.events = new Collection()
    this.commands = new Collection()
    this.aliases = new Collection()
  }
}

export { NewClient }