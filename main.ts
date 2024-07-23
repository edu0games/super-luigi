namespace SpriteKind {
    export const mushroom2 = SpriteKind.create()
    export const mushroom = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    coin = sprites.create(img`
        . . . f f . . . 
        . . f e e f . . 
        . f e 5 5 e f . 
        . f e 5 5 e f . 
        . f e 5 5 e f . 
        . f e 5 5 e f . 
        . . f e e f . . 
        . . . f f . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(coin, location)
    tiles.setTileAt(location, assets.tile`myTile4`)
    coin.follow(luigi)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite6, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(500)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    luigi.setImage(assets.image`myImage3`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite7, location6) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile5`)
    tiles.setTileAt(tiles.getTileLocation(225, 13), assets.tile`myTile`)
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    luigi.vy = -200
    luigi.setImage(assets.image`myImage1`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    luigi.setImage(img`
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        ......777777.....
        ....777777777....
        ......9299222....
        ....9992999292...
        ...99929992292...
        ....2222999922...
        .....9999999.....
        .......777877....
        ....7778778777...
        ...777788887777..
        ...9978e88e8799..
        ...999888888999..
        ...998888888899..
        .....888..888....
        ....777...777....
        ...7777..7777....
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite8, location7) {
    info.changeScoreBy(2000)
    tiles.setTileAt(tiles.getTileLocation(243, 7), assets.tile`myTile24`)
    tiles.setTileAt(tiles.getTileLocation(243, 8), assets.tile`myTile26`)
    tiles.setTileAt(tiles.getTileLocation(243, 9), assets.tile`myTile26`)
    tiles.setTileAt(tiles.getTileLocation(243, 10), assets.tile`myTile26`)
    tiles.setTileAt(tiles.getTileLocation(243, 11), assets.tile`myTile25`)
    tiles.setTileAt(tiles.getTileLocation(243, 12), assets.tile`myTile25`)
    tiles.setTileAt(tiles.getTileLocation(243, 13), assets.tile`myTile25`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.mushroom, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(1)
    info.changeScoreBy(1000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite4, location4) {
    info.changeScoreBy(5000)
    tiles.setTileAt(tiles.getTileLocation(243, 7), assets.tile`myTile24`)
    tiles.setTileAt(tiles.getTileLocation(243, 8), assets.tile`myTile26`)
    tiles.setTileAt(tiles.getTileLocation(243, 9), assets.tile`myTile26`)
    tiles.setTileAt(tiles.getTileLocation(243, 10), assets.tile`myTile26`)
    tiles.setTileAt(tiles.getTileLocation(243, 11), assets.tile`myTile25`)
    tiles.setTileAt(tiles.getTileLocation(243, 12), assets.tile`myTile25`)
    tiles.setTileAt(tiles.getTileLocation(243, 13), assets.tile`myTile25`)
})
info.onLifeZero(function () {
    game.splash("oh noooooooooo", "")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite5, location5) {
    info.changeScoreBy(500)
    tiles.setTileAt(tiles.getTileLocation(243, 7), assets.tile`myTile24`)
    tiles.setTileAt(tiles.getTileLocation(243, 8), assets.tile`myTile26`)
    tiles.setTileAt(tiles.getTileLocation(243, 9), assets.tile`myTile26`)
    tiles.setTileAt(tiles.getTileLocation(243, 10), assets.tile`myTile26`)
    tiles.setTileAt(tiles.getTileLocation(243, 11), assets.tile`myTile25`)
    tiles.setTileAt(tiles.getTileLocation(243, 12), assets.tile`myTile25`)
    tiles.setTileAt(tiles.getTileLocation(243, 13), assets.tile`myTile25`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile5`)
    tiles.setTileAt(tiles.getTileLocation(211, 13), assets.tile`myTile`)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite10, otherSprite2) {
    mushroom.destroy()
    info.changeScoreBy(100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite2, location2) {
    tiles.setTileAt(location2, assets.tile`myTile5`)
    info.changeScoreBy(500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite3, location3) {
    effects.confetti.startScreenEffect()
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    mushroom = sprites.create(img`
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . 6 6 6 6 7 7 . . . . . 
        . . . . 6 6 6 6 7 7 7 7 . . . . 
        . . . 6 6 6 6 6 7 7 7 7 7 . . . 
        . . 6 6 6 6 6 6 6 7 7 7 6 6 . . 
        . 6 6 7 7 7 6 6 6 6 6 6 6 6 6 . 
        . 6 7 7 7 7 7 6 6 6 6 6 6 6 6 . 
        6 6 7 7 7 7 7 6 6 6 6 6 7 7 6 6 
        6 6 7 7 7 7 7 6 6 6 6 6 7 7 7 6 
        6 6 6 7 7 7 6 6 6 6 6 6 6 7 7 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        . 6 7 7 7 1 1 1 1 1 1 7 7 7 6 . 
        . . . d 1 1 1 1 1 1 1 1 d . . . 
        . . . d 1 1 1 1 1 1 6 1 d . . . 
        . . . d 1 1 1 1 1 1 6 1 d . . . 
        . . . . d 1 1 1 1 6 1 d . . . . 
        `, SpriteKind.mushroom)
    tiles.placeOnTile(mushroom, tiles.getTileLocation(73, 9))
    tiles.setTileAt(location, assets.tile`myTile4`)
    mushroom.setVelocity(85, 0)
    mushroom.ay = 150
})
let mushroom: Sprite = null
let coin: Sprite = null
let luigi: Sprite = null
luigi = sprites.create(img`
    .................
    .................
    .................
    .................
    .................
    .................
    .................
    .................
    .................
    .................
    .................
    .................
    .................
    .................
    .....777777......
    ....777777777....
    ....2229929......
    ...2929992999....
    ...29229992999...
    ...2299992222....
    .....9999999.....
    ....778777.......
    ...7778778777....
    ..777788887777...
    ..9978e88e8799...
    ..999888888999...
    ..998888888899...
    ....888..888.....
    ....777...777....
    ....7777..7777...
    `, SpriteKind.Player)
controller.moveSprite(luigi, 100, 0)
luigi.ay = 410
tiles.setCurrentTilemap(tilemap`level 1 world 1    1-1`)
scene.cameraFollowSprite(luigi)
tiles.placeOnTile(luigi, tiles.getTileLocation(53, 13))
info.setLife(1)
game.onUpdateInterval(2000, function () {
    luigi.setImage(img`
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        .................
        .....777777......
        ....777777777....
        ....2229929......
        ...2929992999....
        ...29229992999...
        ...2299992222....
        .....9999999.....
        ....778777.......
        ...7778778777....
        ..777788887777...
        ..9978e88e8799...
        ..999888888999...
        ..998888888899...
        ....888..888.....
        ....777...777....
        ....7777..7777...
        `)
    if (luigi.vy < 0) {
        luigi.setImage(assets.image`myImage1`)
    }
    if (luigi.vx < 0) {
        luigi.image.flipX()
    }
})
