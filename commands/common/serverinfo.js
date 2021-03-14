module.exports = {
  name: "serverinfo",
  aliases: ["si", "serverinfo"],
  code: `$title[**$serverName[$guildID]**]
 $thumbnail[$serverIcon]
 $color[00FCFF]

 $addField[**Creation Date:**;$creationDate[$guildID]] 
 
 $addField[**Region:**;$serverRegion]
  
 $addField[**Channels:**;$channelCount]

 $addField[**Roles:**;$roleCount]

 $addField[**Members:**;$membersCount]

 $addField[**Server Owner:**;<@$ownerID>;yes]`
};
