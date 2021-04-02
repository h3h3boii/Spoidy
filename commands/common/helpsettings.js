module.exports = {
name: "helpsettings",
aliases: ["hsettings"],
code: `$title[$customEmoji[helpsettings] Spoidy ServerSettings Commands]
$description[**$getServerVar[prefix]setprefix <new_prefix>**
Change the prefix of Spoidy

**$getServerVar[prefix]automodon**
Enable Automod in your server

**$getServerVar[prefix]automodoff**
Disable Automod in your server

**$getServerVar[prefix]nuke**
Nukes the channel

**$getServerVar[prefix]lock**
Lock the channel

**$getServerVar[prefix]unlock**
Unlock the channel]
$color[$getVar[embedc]]`
}