const Discord = require('discord.js');
const client = new Discord.Client();
const keys = require("./keys.json");

client.on("ready", () => {
	console.log("Bot Ready.")
	console.log(`Successfully logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
    if(msg.author.bot) return;
    else{
		var ctent = msg.content;
		if(ctent[0]=="!") ctent = ctent.slice(1)
		
		if(ctent.includes("info")){
			msg.channel.send("BFKKuTuBot Version 1.0");
		}else if(ctent.includes("clear")){
			const amount = ctent.slice(6);
 
			if (!amount) return msg.reply('AN ERROR OCCURED ON APP.JS! amount is not defined!');
			if (isNaN(amount)) return msg.reply('AN ERROR OCCURED ON APP.JS! amount is should be a number!');
	
			if (amount < 1) return msg.reply('AN ERROR OCCURED ON APP.JS! amount is should be bigger than 1!');
			
			async function clear() {
				msg.delete();
				const fetched = await msg.channel.messages.fetch({limit: amount});
				msg.channel.bulkDelete(fetched).catch(console.log)
			}
			clear();
			msg.reply(`${amount} of messages were deleted!`)
		}
	}
});

client.login(keys.token);