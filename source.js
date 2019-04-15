
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const staff_id = require("./staff.json");

client.on("ready", () => {
  console.log(`Services has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} server.`); 
  client.user.setGame(`with the source.`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});


client.on("message", async message => {
  //Add listener for the basic "I need halp pl0x" messages.
  const contentWithAuthor = message.author + `: ` + message.content;
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "links") {
	message.author.send("`No links to show at this time.`");
  }
  
  if(command === "help") {
	message.author.send("RE-ADD PLEASE.");
  }
  if(command === "staff") {
	message.author.send("RE-ADD PLEASE.");
  }
  
  if(command === "send") {
	message.author.send("RE-ADD PLEASE.");
  }
});

client.login(config.token);