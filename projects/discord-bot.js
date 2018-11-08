const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('MapleStory 2', { type: 'PLAYING' })
});

client.on('message', msg => {
	const taggedUser = msg.mentions.users.first();

	if(msg.content == `${config.prefix}help`) {
		msg.reply("Alright, check your DM")
		msg.author.send("No.")

 } else if(msg.content.startsWith(`${config.prefix}whip`)) {
    msg.reply('Yeet nae nae');

  } else if (msg.content.startsWith(`${config.prefix}game`) && taggedUser.presence.game != undefined) {
    msg.channel.send(`${taggedUser.username} is playing: ${taggedUser.presence.game.name}`);

} else if (msg.content.startsWith(`${config.prefix}game`) && taggedUser.presence.game == undefined) {
	msg.channel.send(`${taggedUser.username} is not playing anything. What a nerd!`)

} else if (msg.content.startsWith(`${config.prefix}L`)) {
	msg.channel.send(`${taggedUser.username} just took a fat L. NERD!`)

} else if (msg.content.startsWith(`${config.prefix}blame`)) {
	msg.channel.send(`It's a programming issue.`)

} else if (msg.content.startsWith(`${config.prefix}F`)) {
	msg.channel.send(`${msg.author.username} just paid respect to ${taggedUser.username}.`)

} else if (msg.content == (`${config.prefix}oof`)) {
	msg.channel.send(`${msg.author.username} has recieved one oof from... Themself?! Oof, I guess.`)

} else if (msg.content.startsWith(`${config.prefix}oof`) && taggedUser.username != undefined) {
	msg.channel.send(`${taggedUser.username} has recieved one oof from ${msg.author.username}. Oof.`)

} else if (msg.content === `${config.prefix}server`) {
    msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);

}
});

client.login(config.token);