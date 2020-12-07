
var dbd = require("dbd.js");
var fs = require("fs");
var bot = new dbd.Bot({
  token: "SPOIDY_TOKEN",
  prefix: "S!"
});

bot.status({
  text: "$serverCount Servers || S!help",
  type: "WATCHING",
  time: 12
});

bot.onMessage();
var reader = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./commands/${file}`);
  bot.command({
    name: command.name,
    code: command.code
  });
}

bot.command({
  name: "hello",
  code: `Hi! I am **Spoidy**!`
})

bot.command({
  name: "afk",
  code: `$setUserVar[afk;true] $setUserVar[afkwhy;$noMentionMessage]
**$username** You Are Now AFK For $noMentionMessage`
});

bot.command({
  name: "$alwaysExecute",
  code: `**$username** You are now no longer AFK! 
$setUserVar[afk;false]
$setUserVar[afkwhy;No reason given.]
$onlyIf[$getUserVar[afk]==true;]`
});

bot.command({
  name: "$alwaysExecute",
  code: `
**$username[$mentioned[1]]** is Currently AFK For $getUserVar[afkwhy;$mentioned[1]]
$onlyIf[$getUserVar[afk;$mentioned[1]]==true;]`,
  nonPrefixed: true
});

bot.command({
  name: "<@749133435779547188>",
  code: `$color[b200ff]
$title[My Prefix In This Server Is  **S!**]`,
  nonPrefixed: true
});

bot.variables({
  warn: "0",
  afk: "false",
  afkwhy: "No reason given."
});
bot.command({
  name: "help",
  code: `$reactionCollector[$splitText[1];everyone;1m;1️⃣,2️⃣,3️⃣;awaitReaction1,awaitReaction2,awaitReaction3,awaitReaction4;yes]
$textSplit[$sendMessage[{title: Spoidy Misc. Commands} {description:
**S!help** 
Shows The Help Commands

**S!info**
Shows Spoidy's Stats

**S!support**
Gives Link To Support Server

**S!invite**
Gives Invite Link For Spoidy

**S!github**
Gives The GitHub Link To Spoidy

**S!reminder <time> <message>**
Reminds You In The Given Time

**S!afk <reason>**
Sets AFK For User} {color:b200ff};yes]; ]`
});

bot.awaitedCommand({
  name: "awaitReaction1",
  code: `$editMessage[$message[1];{title:Spoidy Misc. Commands} {description:
**S!help** 
Shows The Help Commands

**S!info**
Shows Spoidy's Stats

**S!support**
Gives Link To Support Server

**S!invite**
Gives Invite Link For Spoidy

**S!github**
Gives The GitHub Link To Spoidy

**S!reminder <time> <message>**
Reminds You In The Given Time

**S!afk <reason>**
Sets AFK For User} {color:b200ff}
]
`
});

bot.awaitedCommand({
  name: "awaitReaction2",
  code: `
 $editMessage[$message[1];{title:Spoidy Moderation Commands} {description:
**S!warn <user>**
Warns A Member
 
**S!mute <user>**
Mutes A user

**S!unmute <user>**
Unmutes a user

**S!tempmute <user>**
Temporarily Mutes A User

**S!ban <user>**
Bans A User From The Server

**S!unban <userID>**
Unbans A User From The Server

**S!kick <user>**
Kicks A User From The Server

**S!clear <amount>**
Clears an Amount Of Messages } {color:b200ff}
]
 `
});

bot.awaitedCommand({
  name: "awaitReaction3",
  code: `
 $editMessage[$message[1];
{title:Spoidy Fun Commands} {description:
**S!lovecheck <@user>**
Check Love Between You And The Username

**S!say <message>**
Make The Bot Say For You

**S!embed <message>**
Make The Bot Say For You In Embed

**S!hack <user>**
Hacks A User For Fun

**S!rps**
Play Rock,Paper,Scissors With The Bot
} {color:b200ff}]
 `
});
