module.exports = {
name: "helpmod",
aliases: ["hmod"],
code: `$title[$customEmoji[helpmod] Spoidy Moderation Commands]
$description[**$getServerVar[prefix]warn <user>**
Warns A Member
 
**$getServerVar[prefix]mute <user>**
Mutes A user

**$getServerVar[prefix]unmute <user>**
Unmutes a user

**$getServerVar[prefix]tempmute <user>**
Temporarily Mutes A User

**$getServerVar[prefix]ban <user>**
Bans A User From The Server

**$getServerVar[prefix]unban <userID>**
Unbans A User From The Server

**$getServerVar[prefix]kick <user>**
Kicks A User From The Server

**$getServerVar[prefix]clear <amount>**
Clears an Amount Of Messages]
$color[$getVar[embedc]]`
}