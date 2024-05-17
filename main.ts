input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    radio.sendString("chat:microbit")
})
radio.onReceivedString(function (receivedString) {
    radio.setGroup(1)
    basic.showString(receivedString)
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("chat:microbit")
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
