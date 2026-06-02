input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(0, 2))
    basic.pause(5000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 2))
    basic.pause(5000)
    basic.clearScreen()
})
