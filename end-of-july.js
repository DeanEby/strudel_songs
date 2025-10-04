stack(
  note("[<[55.3 55]> <55.4 55 55.4 55*8> 55] 70 - 77*4, <[31, 46] [31, 46] [29, 48] [27, 43]>")
    .sound("saw")
    .lpf(sine.range(2500, 3000))
    .dec(.3)
    .room(.5)
    .gain(.6)
    .phaser(.2)
    .distort(.8)
    .pitchwheel(), 
  
  s("hh*16")
    .bank("tr909")
    .gain("<.4 .4 .5>*16")
    .dec("<.05 .06 0.6 1>*16")
  ,
  s("<- <- hh/4 - oh> - <- oh>>*8")
    .bank("tr909")
    .gain("<.2 .2 .3>*16")
    .dec("<.05 .06 0.6 1>*16"),
  
  s("[- - sd - - - - sd]")
    .bank("tr909")
    .dec(".04")
    .echo(4, 3/16, .5),
  
  s("bd - - - - <- bd>- <bd - bd/1.2 - >")
    .bank("tr909")
    .distort(.7)
    .speed(".6")
    .dec(.2),
  
  // note("67 67 67 67 <[63] [63] [63 60] [63]>")
  //   .sound("sine")
  //   .dec(.2)
  //   .room(3)
  //   .gain(.7),
  
  // note("-*.05 70 [<67/1.01 67 65 60>- 72]")
  //   .dec(.2)
  //   .echo(50, 1/16, .4)
  //   ._punchcard(),
  
  note("<[31, 43.4, 58] [24, 36, 55.3, 60.4]>*.5")
    .sound("triangle")
    .vib(".2: 0.2")
    ._punchcard()
)

