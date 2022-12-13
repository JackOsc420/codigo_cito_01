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
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    99,
    robotbit.Motors.M1B,
    0
    )
}
function Parar () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M1B,
    0
    )
}
function adelante () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    99,
    robotbit.Motors.M1B,
    99
    )
}
function atras () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -90,
    robotbit.Motors.M1B,
    -90
    )
}
function izquierda () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M1B,
    99
    )
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
