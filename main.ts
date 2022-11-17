let light_level = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("2A19 Ray Lee")
    light_level = input.lightLevel()
    basic.showString("" + (light_level))
    if (light_level < 50) {
        led.setBrightness(255)
    }
    if (light_level >= 50) {
        led.setBrightness(128)
    }
    if (light_level >= 100) {
        led.setBrightness(64)
    }
    if (light_level >= 200) {
        led.setBrightness(0)
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
basic.forever(function () {
	
})
