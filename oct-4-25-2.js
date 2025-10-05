setcpm(102/4)
$: sound("<[bd:4]*4>").duckorbit("2")
$: sound("[~ oh:5]*4").dec(.3)
$: sound("[hh:2 ~ ~@ ~ ~ ~ hh:7]*2")
$: sound("[~ cp:2]*2").dec(".3")
$: sound("[~ <~ <~ <~ lt>>>]*8").speed("4")
$: sound("cb*8").speed("~ ~ ~ <~ .5*2>").dec(".1")

$: note("<[[~ 25]*2 25 37 37] [[~ 25]*2 ~ 37]*2 [[~ 25]*2  25 37 37] [[~ 23]*2 ~ 35]*2 >")
  .sound("gm_synth_bass_2:4")
  .dec(".4  1 1 .4 ")
  .lpf("100")
  .lpe("4 2 16 4")
  .lpd(".1")
  .lpq("[1 1@ 1 8]")
  .dist(3)
  .gain(.6).orbit(2)


// $: note("<[[~ 25]*2 25 37 37] [[~ 25]*2 ~ 37]*2 [[~ 25]*2 25 37 37] [[~ 23]*2 ~ 35]*2 >").dist(2)

$: note("<[[~ ~]*2 ~ ~ <37, 52>] [[~ ~]*2 ~ <37, 52>]*2 [[~ ~]*2 ~ ~ <37, 52>] [[~ ~]*2 ~ <35, 51>]*2 >")
  .sound("gm_synth_choir:3")
  .dist(1)
  .hpf(200)
  .room(.6).spiral().orbit(2)

// $: sound("[hh hh hh@ hh]*4").duckorbit(4).duckdepth(10).gain(0)

// $: note("56, 61, 68").sound("gm_blown_bottle").orbit(4)



