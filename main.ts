radio.onReceivedNumber(function (receivedNumber) {
    comando = receivedNumber
    if (comando == 1) {
        izquierda()
    }
    if (comando == 2) {
        derecha()
    }
    if (comando == 3) {
        adelante()
    }
    if (comando == 4) {
        Parar()
    }
    if (comando == 5) {
        atras()
    }
})
function derecha () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P2, 100)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P1, 0)
}
function Parar () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P1, 0)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P2, 0)
}
function adelante () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P2, 100)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P1, 100)
}
function atras () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P1, 100)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P2, 100)
}
function izquierda () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P1, 100)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P2, 0)
}
let comando = 0
radio.setGroup(1)
basic.showIcon(IconNames.StickFigure)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        comando = 1
        radio.sendNumber(comando)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        comando = 2
        radio.sendNumber(comando)
    }
    if (input.buttonIsPressed(Button.A)) {
        comando = 3
        radio.sendNumber(comando)
    }
    if (input.isGesture(Gesture.Shake)) {
        comando = 4
        radio.sendNumber(comando)
    }
    if (input.buttonIsPressed(Button.B)) {
        comando = 5
        radio.sendNumber(comando)
    }
})
