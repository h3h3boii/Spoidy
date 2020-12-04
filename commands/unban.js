module.exports = {
    name: "unban",
    code: `
$unban[$noMentionMessage]
$username[$noMentionMessage] Has Been Unbanned! 
$argsCheck[>1;Please Provide User ID To Unban] 
$suppressErrors[I can't find this user ID or I don't have enough permissions] 
$onlyPerms[admin;You Are Missing Administrator Permissions] `
}
