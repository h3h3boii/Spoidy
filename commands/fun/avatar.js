module.exports = ({
    name:"avatar",
    aliases: ["avatar", "av"],
    code:`$author[Avatar for $userTag[$findUser[$message]]]
    $image[$replaceText[$userAvatar[$findUser[$message]];size=2048;size=1024]]
    $color[ffffff]`
})