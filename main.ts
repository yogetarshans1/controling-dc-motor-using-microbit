let item = 0
let distance = 0
led.enable(true)
basic.forever(function () {
    let distancecm = 0
    pins.digitalWritePin(DigitalPin.P2, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P2, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P2, 0)
    distance = pins.pulseIn(DigitalPin.P1, PulseValue.High) / 58
    basic.showNumber(distance)
    basic.pause(50)
    serial.writeValue("distance", distance)
    item = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(item)
    basic.pause(50)
    serial.writeValue("distance(cm)", item)
    if (distancecm == 2) {
    	
    }
})
