var dbd = require("dbd.js");
var fs = require("fs");
var bot = new dbd.Bot({
  token: "NzQ5MTMzNDM1Nzc5NTQ3MTg4.X0ni4Q.8yjc-89r9FvmTqZxLW69YVI-wuQ",
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
  name: "<@749133435779547188>",
  code: `$color[b200ff]
$title[My Prefix In This Server Is  **S!**]`,
  nonPrefixed: true
});

bot.command({
  name: "help",
  code: `$reactionCollector[$splitText[1];everyone;1m;1️⃣,2️⃣,3️⃣;awaitReaction1,awaitReaction2,awaitReaction3,awaitReaction4;yes]
$textSplit[$sendMessage[{title: Spoidy Help Commands} {description:

**S!warn <user>**
Warns A Member
 
**S!mute <user>**
Mutes A user

**S!unmute <user>**
Unmutes a user

**S!tempmute <user> <time>**
Temporarily Mutes a User

**S!ban <user>**
Bans A User From The Server

**S!unban <userID>**
Unbans A User From The Server

**S!kick <user>**
Kicks A User From The Server

**S!clear <amount>**
Clears an Amount Of Messages} {color:b200ff};yes]; ]`
});

bot.awaitedCommand({
  name: "awaitReaction1",
  code: `$editMessage[$message[1];{title:Spoidy Moderation Commands} {description:
**S!warn <user>**
Warns A Member
 
**S!mute <user>**
Mutes A user

**S!unmute <user>**
Unmutes a user

**S!ban <user>**
Bans A User From The Server

**S!unban <userID>**
Unbans A User From The Server

**S!kick <user>**
Kicks A User From The Server

**S!clear <amount>**
Clears an Amount Of Messages} {color:b200ff}
]
`
});

bot.awaitedCommand({
  name: "awaitReaction2",
  code: `
 $editMessage[$message[1];{title:Spoidy Fun Commands} {description:
 **S!lovecheck <@user>**
Check Love Between You And The User

**Respects: <press F>**

**S!say <message>**
Make The Bot Say For You

**S!embed <message>**
Make The Bot Say For You In Embed

**S!hack <user>**
Hacks A User For Fun

**S!rps**
Play Rock,Paper,Scissors With The Bot } {color:b200ff}
]
 `
});

bot.awaitedCommand({
  name: "awaitReaction3",
  code: `
 $editMessage[$message[1];
{title:Spoidy Inforormation Commands} {description:
**S!help** 
Shows The Help Commands

**S!stats**
Shows iSteal's Stats

**S!botinfo**
Shows What Is The Bot About

**S!support**
Gives Link To Support Server

**S!invite**
Gives Invite Link For iSteal
} {color:b200ff}]
 `
});
