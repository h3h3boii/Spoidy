const dbd = require("dbd.js");
const fs = require("fs");
const bot = new dbd.Bot({
  token: process.env.TOKEN,
  prefix: "S!"
});

bot.status({
  text: "$serverCount Servers || S!help",
  type: "WATCHING",
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
    rch: "",
    rmsg: "Congrats {user.tag}, you leveled up to level {level}",
    lvl: "0",
    exp: "0",
    rexp: "40",
    rsystem: "0",
    warn: "0",
    word: "no",
})

bot.command({
    name: "setrank",
    code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
$color[ffffff]
$setServerVar[rch;$mentionedChannels[1;yes]]
$setServerVar[rsystem;1]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ffffff}]
$cooldown[5s;Please wait **%time%**]`
}) 

bot.command({
    name: "resetrank",
    code: `$description[Leveling system is __disabled__ on this server]
$color[ffffff]
$setServerVar[rch;]
$setServerVar[rmsg;$getVar[rmsg]]
$setServerVar[rsystem;0]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__ on this server}{color:ffffff}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ffffff}]
$cooldown[5s;Please wait **%time%**]`
}) 

bot.command({
    name: "$alwaysExecute",
    code: `$useChannel[$getServerVar[rch]]
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyForServers[$guildID;]`    
}) 

bot.command({
    name: "$alwaysExecute",
    code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]`
}) 

bot.awaitedCommand({
    name: "errorrank",
    code: `$setServerVar[rch;]
$onlyForServers[$guildID;]`
}) 

bot.command({
    name: "setrankmsg",
    code: `$description[You have been setted the message to:
**$message**]
$color[ffffff]
$setServerVar[rmsg;$message]
$onlyIf[$message!=;You can also use this variables:
\`\`\`
{user.tag} = $userTag
{user.mention} = <@$authorID>
{level} = 1
{exp} = 25
\`\`\`
Current msg is:
\`$getServerVar[rmsg]\`]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ffffff}]
$cooldown[5s;Please wait **%time%**]`
}) 

bot.command({
    name: "rank",
    aliases: ["level"],
    code: `$color[303136]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/775757240648466452/791348420844716052/1608742528817.jpg&xpcolor=ffffff&isboosting=true]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__}{color:ffffff}]
$cooldown[5s;]`
}) 

bot.command({
    name: "$alwaysExecute",
    nonPrefixed: true,
    code: `$deletecommand
    $onlyIfMessageContains[$message;https;//;]
    $onlyIf[$hasPerms[$authorID;managemessages]==false;]
    $onlyIf[$getServerVar[word]==true;]
    <@$authorID> You can not send link into **$serverName**
    `
})

bot.command({
    name: "automodon",
    code: `$setServerVar[word;true]
    $onlyBotPerms[managemessages;Bot missing permission **MANAGE MESSAGES**]
    $onlyPerms[managemessages;You require **MAANAGEMESSAGES** permission]
    $title[Automod System Has Been Enabled By **$username**]
    $addTimestamp
    $color[ffffff]
`
})

bot.command({
    name: "automodoff",
    code: `$setServerVar[word;no]
     $onlyBotPerms[managemessages;Bot missing permission **MANAGE MESSAGES**]
    $onlyPerms[managemessages;You are not a moderator]
    $title[Automod System Has Been Disabled By**$username**]
    $addTimestamp
    $color[ffffff]
    `
})

bot.command({
name: "skin",
code: `$image[https://minotar.net/body/$replaceText[$message; ;+;-1]]
$color[ffffff]` 
})