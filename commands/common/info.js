 module.exports = {
  name: "info",
  aliases: ["i", "botinfo"],
  code: `$title[$customEmoji[spoidyhelp] **Suparmin's Information**]
$color[$getVar[embedc]]
$addField[$customEmoji[sdeveloper] **Developers**;<@!829594806774267924>]
$addField[$customEmoji[sDISCORD] **Members**;$allMembersCount]
$addField[$customEmoji[sserver] **Servers**;$serverCount]
$addField[$customEmoji[sinfinite] **Uptime**;$uptime]
$addField[$customEmoji[swifi] **Ping**;$ping MS]`
};
