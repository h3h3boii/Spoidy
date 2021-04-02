module.exports = ({
    name: "play",
    code: `
    $author[Added Song]
    $description[Added **$playSong[$noMentionMessage;1h;yes;yes;{title:Error} {description:Something went wrong!} {color:$getVar[embedc]}] **onto queue!]
    $color[$getVar[embedc]]
    $footer[Requested by $userTag[$authorID]]
    $onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:$getVar[embedc]}]`
    });