module.exports = {
  name: "unlock", 
  code: `$modifyChannelPerms[$channelID;+sendmessages;$guildID]
$color[ffffff]
$title[**Channel Has Been UnLocked | :white_check_mark:**]
$description[**<#$channelID> Has Been Unlocked By $username**]
$onlyPerms[managechannels;You cannot use this command]
`
}