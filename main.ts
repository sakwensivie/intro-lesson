input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showIcon(IconNames.Asleep)
        basic.pause(500)
        basic.showIcon(IconNames.House)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        basic.showIcon(IconNames.Heart)
        basic.pause(20)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(300)
    }
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # # # # #
    . . . . .
    `)
basic.pause(500)
basic.forever(function () {
	
})
