
module.exports = {
    name: "ann",
    cooldown: 6,
    aliases: ['get-in'],

    run: async function(client, message, args) {
       if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "You need administration in this server to use this command"
      );
       }
      let channel = message.mentions.channels.first();
      if(!channel) return message.reply("Please provide a **valid** channel")
      let txt = args.join(" ")
      let Content = txt.slice(22);
      if (!Content)
      
      return message.channel.send({
                embed: {
                    title: 'WRONG',
                    description: `Oh come on man say something`,
                    color: ('RANDOM')
                }
            })
    



       message.delete();
            channel.send({
                embed: {
                    title: 'ANNOUNCEMENT',
                    description: `${Content}`,



image: {
		url: 'https://i.imgur.com/AfFp7pu.png',
	},

                  author: {
		name: (`${message.guild.name}`),
                    icon_url: (`${message.guild.iconURL({ dynamic: true })}`),
		url: 'https://i.imgur.com/AfFp7pu.png',
	},
                  
                  
                  timestamp: new Date().toISOString(),
                  
                  thumbnail: {
		url: (`${message.guild.iconURL({ dynamic: true })}`)
	},
                  footer: {
		text: (`announced By ${message.author.tag}`),
		icon_url: (`${message.author.displayAvatarURL({ dynamic: true })}`),
	},
            
                  
        color: ('RANDOM')
                
                }
            })
      message.channel.send(`message successful sent on ${channel}`);
         color: ('RANDOM')
}
}
