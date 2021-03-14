module.exports = ({
 name: "ping",
 aliases: ["p"],
 code: `$if[$ping<51]
 $title[:ping_pong: Ping!]
 $description[:white_circle: = $pingms]
 $color[dadada]
$elseIf[$ping<150]
$title[:ping_pong: Ping!]
 $description[:green_circle: = $pingms]
 $color[GREEN]
$endelseif
$elseIf[$ping<300]
$title[:ping_pong: Ping!]
 $description[:yellow_circle: = $pingms]
 $color[YELLOW]
$endelseif
$elseIf[$ping<500]
$title[:ping_pong: Ping!]
 $description[:orange_circle: = $pingms]
 $color[ORANGE]
$endelseif
$elseIf[$ping<1000]
$title[:ping_pong: Ping!]
 $description[:red_circle: = $pingms]
 $color[RED]
$endelseif
$elseif[$ping>1000]
$title[:ping_pong: Ping!]
 $description[:black_circle: = $pingms]
 $color[BLACK]
$endelseif
$endif`
});