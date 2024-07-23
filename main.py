@namespace
class SpriteKind:
    mushroom = SpriteKind.create()
mushroom2: Sprite = None
coin: Sprite = None
luigi: Sprite = None

def on_overlap_tile(sprite9, location8):
    global mushroom2
    mushroom2 = sprites.create(img("""
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
                    . . . . 1 1 1 1 1 1 1 1 . . . . 
                    . . . . 1 1 1 1 1 1 6 1 . . . . 
                    . . . . 1 1 1 1 1 1 6 1 . . . . 
                    . . . . . 1 1 1 1 6 1 . . . . .
        """),
        SpriteKind.mushroom)
    tiles.place_on_tile(mushroom2, tiles.get_tile_location(73, 9))
    tiles.set_tile_at(location8, assets.tile("""
        myTile4
    """))
    mushroom2.set_velocity(85, 0)
    mushroom2.ay = 150
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile28
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite, location):
    global coin
    coin = sprites.create(img("""
            e . . f f . . e 
                    . . f e e f . . 
                    . f e 5 5 e f . 
                    . f e 5 5 e f . 
                    . f e 5 5 e f . 
                    . f e 5 5 e f . 
                    . . f e e f . . 
                    e . . f f . . e
        """),
        SpriteKind.food)
    tiles.place_on_tile(coin, location)
    tiles.set_tile_at(location, assets.tile("""
        myTile4
    """))
    coin.follow(luigi)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile2)

def on_on_overlap(sprite6, otherSprite):
    sprites.destroy(otherSprite)
    info.change_score_by(500)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_b_pressed():
    luigi.set_image(assets.image("""
        myImage3
    """))
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_overlap_tile3(sprite7, location6):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile27
    """),
    on_overlap_tile3)

def on_on_overlap2(sprite62, otherSprite3):
    sprites.destroy(otherSprite3)
    info.change_life_by(1)
    info.change_score_by(1000)
sprites.on_overlap(SpriteKind.player, SpriteKind.mushroom, on_on_overlap2)

def on_a_pressed():
    luigi.vy = -200
    luigi.set_image(assets.image("""
        myImage1
    """))
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    luigi.set_image(img("""
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
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile4(sprite8, location7):
    info.change_score_by(2000)
    tiles.set_tile_at(tiles.get_tile_location(243, 7),
        assets.tile("""
            myTile24
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 8),
        assets.tile("""
            myTile26
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 9),
        assets.tile("""
            myTile26
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 10),
        assets.tile("""
            myTile26
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 11),
        assets.tile("""
            myTile25
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 12),
        assets.tile("""
            myTile25
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 13),
        assets.tile("""
            myTile25
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile23
    """),
    on_overlap_tile4)

def on_overlap_tile5(sprite4, location4):
    info.change_score_by(5000)
    tiles.set_tile_at(tiles.get_tile_location(243, 7),
        assets.tile("""
            myTile24
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 8),
        assets.tile("""
            myTile26
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 9),
        assets.tile("""
            myTile26
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 10),
        assets.tile("""
            myTile26
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 11),
        assets.tile("""
            myTile25
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 12),
        assets.tile("""
            myTile25
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 13),
        assets.tile("""
            myTile25
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile9
    """),
    on_overlap_tile5)

def on_overlap_tile6(sprite5, location5):
    info.change_score_by(500)
    tiles.set_tile_at(tiles.get_tile_location(243, 7),
        assets.tile("""
            myTile24
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 8),
        assets.tile("""
            myTile26
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 9),
        assets.tile("""
            myTile26
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 10),
        assets.tile("""
            myTile26
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 11),
        assets.tile("""
            myTile25
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 12),
        assets.tile("""
            myTile25
        """))
    tiles.set_tile_at(tiles.get_tile_location(243, 13),
        assets.tile("""
            myTile25
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile8
    """),
    on_overlap_tile6)

def on_on_overlap3(sprite10, otherSprite2):
    mushroom2.destroy()
    if luigi.y < mushroom2.x:
        info.change_score_by(100)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap3)

def on_overlap_tile7(sprite2, location2):
    tiles.set_tile_at(location2, assets.tile("""
        myTile5
    """))
    info.change_score_by(500)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile6
    """),
    on_overlap_tile7)

def on_overlap_tile8(sprite3, location3):
    effects.confetti.start_screen_effect()
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile15
    """),
    on_overlap_tile8)

def on_update_interval():
    luigi.set_image(img("""
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
    """))
    if luigi.vy < 0:
        luigi.set_image(assets.image("""
            myImage1
        """))
    if luigi.vx < 0:
        luigi.image.flip_x()
game.on_update_interval(2000, on_update_interval)
