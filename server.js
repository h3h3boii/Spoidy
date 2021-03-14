const dbd = require("dbd.js");

const bot = new dbd.Bot({
  token: process.env.TOKEN,
  prefix: "$getServerVar[prefix]"
});

bot.status({
  text: "$serverCount Servers || :help",
  type: "WATCHING",
  time: 12
});

bot.status({
  text: "My Owner is VISHU",
  type: "PLAYING",
  time: 12
});

bot.onMessage();

bot.loadCommands("./commands/");

bot.variables({
  warn: "0",
  prefix: ":",
});

bot.command({
 name: "$alwaysExecute",
 code: `My Prefix In This Server Is **$getServerVar[prefix]**
 $onlyIf[$checkContains[$message;797694673857806357]==true]`
})

bot.command({
  name: "setprefix",
  code: `
The Prefix For This Server Has Been Successfully Changed To **$message**
$setServerVar[prefix;$message]
$onlyIf[$checkContains[$message;@everyone;@here]==false;You cant put the prefix as mentions!]
$argsCheck[>1;Please Provide Prefix. ] 
$onlyPerms[manageserver;❌ To change the bot's prefix on this guild you will require \`MANAGE_GUILD\` permissions.]
`
});
//ty bh