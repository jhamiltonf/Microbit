let red = 0
let green = 0
let blue = 0
basic.forever(function () {
    red = input.soundLevel()
    green = 128 - input.soundLevel() / 2
    blue = 255 - input.soundLevel()
    basic.clearScreen()
    for (let índice = 0; índice <= Math.trunc(red / 50); índice++) {
        led.plot(0, índice)
    }
    for (let índice = 0; índice <= Math.trunc(green / 50); índice++) {
        led.plot(2, índice)
    }
    for (let índice = 0; índice <= Math.trunc(blue / 50); índice++) {
        led.plot(4, índice)
    }
    pins.analogWritePin(AnalogPin.P0, 4 * red)
    pins.analogWritePin(AnalogPin.P1, 4 * green)
    pins.analogWritePin(AnalogPin.P2, 4 * blue)
})
