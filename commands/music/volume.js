module.exports = {
name: "volume",
code: `$author[Volume Changed!]
    $volume[$message[1]]
    $description[<@$authorID> Changed The Volume Of The Songs To $message[1]%!]
    $color[$getVar[embedc]]
    $footer[Requested by $userTag[$authorID]]
    $onlyIf[$isNumber[$message[1]]==true;Thats not a number!]
    $argsCheck[1;Please Enter A Number!]
    $onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:$getVar[embedc]}]
    $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {color:$getVar[embedc]}]
$onlyIf[$voiceID[$clientID]!=; {title: Nothing Is Being Played Now!} {color: $getVar[embedc]}]
`
}