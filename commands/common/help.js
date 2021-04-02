module.exports = {
  name: "help",
  aliases: ["h", "help"],
  code: `$title[$customEmoji[spoidyhelp] **Spoidy Help Commands**]
  
$description[**╔═ ≪ °❈° ≫ ═╗**
    $customEmoji[sprefix] **Prefix: $getServerVar[prefix]**
**╚═ ≪ °❈° ≫ ═╝**
$customEmoji[helpcommon] **$getServerVar[prefix]helpcommon**
Common Commands List

$customEmoji[helpmod]  **$getServerVar[prefix]helpmod**
Moderation Commands List

$customEmoji[helpsettings] **$getServerVar[prefix]helpsettings**
ServerSettings Commands List

$customEmoji[smusic] **$getServerVar[prefix]helpmusic**
Music Commans List

$customEmoji[helpfun] **$getServerVar[prefix]helpfun**
Fun Commands List
]
$color[$getVar[embedc]]`
};
