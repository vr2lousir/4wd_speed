let TimeTaken = 0
let time_t = 0
let time = 0
let state = 0
makerbit.clearLcd1602()
makerbit.connectLcd(63)
makerbit.showStringOnLcd1602("Initialized", makerbit.position1602(LcdPosition1602.Pos1), 16, TextOption.AlignCenter)
let sensor = 1
let sensor_t = 1
basic.forever(function () {
    sensor = pins.digitalReadPin(DigitalPin.P1)
    basic.pause(0)
    if (sensor_t - sensor == 1 && state == 0) {
        makerbit.clearLcd1602()
        makerbit.showStringOnLcd1602("Start", makerbit.position1602(LcdPosition1602.Pos6), 14)
        time = input.runningTime()
        state = 1
    } else if (sensor_t - sensor == 1 && state == 1) {
        if (input.runningTime() - time > 0) {
            time_t = input.runningTime()
            TimeTaken = time_t - time
            makerbit.clearLcd1602()
            makerbit.showStringOnLcd1602("Time Taken", makerbit.position1602(LcdPosition1602.Pos4), 16)
            makerbit.showStringOnLcd1602("" + TimeTaken / 1000 + "s", makerbit.position1602(LcdPosition1602.Pos17), 16)
            time = input.runningTime()
        }
    }
    sensor_t = sensor
})
