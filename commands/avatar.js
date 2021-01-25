module.exports = {
    name: "avatar",
    aliases: ["av", "avatar"],
    code: `$title[$username[$mentioned[1]]’s Avatar:]
$color[ffffff]
$image[$userAvatar[$mentioned[1]]]
$suppressErrors[You Must Mention Someone!]`
}