basic.forever(function () {
    if (input.lightLevel() > 150) {
        basic.showString("D")
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        basic.showString("N")
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
