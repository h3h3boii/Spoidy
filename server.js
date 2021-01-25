const dbd = require("dbd.js");
const fs = require("fs");
const bot = new dbd.Bot({
  token: process.env.TOKEN,
  prefix: "S!"
});

bot.status({
  text: "$serverCount Servers || S!help",
  type: "WATCHING",
  status: "dnd",
  time: 12
});

bot.onMessage();
const reader = fs
  .readdirSync("./commands/")
  .filter(file => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./commands/${file}`);
  bot.command({
    name: command.name,
    aliases: command.aliases,
    code: command.code
  });
}

bot.variables({
  warn: "0"
});

bot.command({
name: "skin",
code: `$image[https://minotar.net/body/$replaceText[$message; ;+;-1]]
$color[ffffff]`
})