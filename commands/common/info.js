 module.exports = {
  name: "info",
  aliases: ["i", "botinfo"],
  code: `$title[$customEmoji[spoidyhelp] **Spoidy's Information**]
$color[$getVar[embedc]]
$addField[$customEmoji[sdeveloper] **Developers**;<@!613963112726659092>]
$addField[$customEmoji[sDISCORD] **Members**;$allMembersCount]
$addField[$customEmoji[sserver] **Servers**;$serverCount]
$addField[$customEmoji[sinfinite] **Uptime**;$uptime]
$addField[$customEmoji[swifi] **Ping**;$ping MS]`
};
