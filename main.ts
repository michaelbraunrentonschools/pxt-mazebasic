enum SpriteKindLegacy {
    Player,
    Food,
    Enemy,
    Projectile
}
scene.setTileMap(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 c 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 4 
4 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 8 8 8 8 7 7 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 8 8 7 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
// when turned on, player cannot move to this color.
// there is a color texture to add to the orange
scene.setTile(4, img`
4 4 4 4 4 4 4 4 4 4 4 e e e e e 
4 4 e 4 4 4 4 4 4 4 4 e 4 4 4 e 
4 4 e 4 4 4 4 4 4 4 4 e 4 4 4 e 
4 4 4 4 e e 4 4 4 4 4 e e 4 4 e 
4 4 4 4 4 4 4 e e 4 4 4 e 4 4 e 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 e e e 4 4 4 4 4 4 4 e 
4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 e 
4 4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 
4 4 4 4 4 4 4 e e 4 4 4 e 4 4 4 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e e e e e e e 4 4 4 4 4 4 4 4 4 
`, true)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 5 5 7 7 7 7 7 7 7 5 7 7 
7 7 7 7 5 5 7 7 7 7 7 7 7 5 7 7 
7 7 7 5 5 5 7 7 7 7 7 7 7 5 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 5 5 7 7 7 7 7 7 7 7 5 5 7 7 
7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, false)
scene.setTile(8, img`
8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 
8 8 8 8 8 6 8 8 6 6 6 6 6 8 8 8 
6 6 6 8 8 8 8 8 8 8 8 6 6 8 8 8 
6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 6 8 8 8 8 8 8 8 6 6 8 8 8 8 
8 8 8 8 8 8 8 8 6 8 6 6 6 8 8 8 
8 8 8 6 6 8 8 6 8 8 6 6 8 6 8 8 
8 8 8 6 8 8 8 6 8 8 8 6 6 8 8 8 
8 8 8 6 8 8 8 6 8 8 8 8 8 8 6 8 
8 8 8 6 6 6 6 6 6 6 8 6 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 
8 8 8 8 8 6 6 6 6 6 6 6 6 8 8 8 
8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 
`, true)
scene.setTile(10, img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a 5 5 5 5 a a a a a 5 5 a a a a 
a 5 a a a a a a a a a a 5 a a a 
a 5 a a a a a a a a a a 5 a a a 
a a a a a a a a a a a a 5 a a a 
a a a a a a a a a a a 5 5 a a a 
a a a a 5 5 5 a a a 5 a a a a a 
a 5 5 5 5 a a a a a a a a a a a 
a 5 a a a a a a a a a a a a a a 
5 a a a a a a 5 a a a a a a a a 
5 a a a a a a a 5 5 a a a 5 5 a 
5 a a 5 a a a a a a 5 5 5 5 a a 
a a a a 5 a a a a a a a a a a a 
a a a a a 5 5 5 a a a a a a a a 
a a a a a a a a a a a a a a a a 
`, true)
let mySprite = sprites.create(img`
. . . . . f f 1 1 1 f . . . . . 
. . . . f 1 1 1 1 1 1 1 . . . . 
. . . f 1 1 1 1 1 1 1 1 f . . . 
. . f 1 1 1 1 1 1 1 1 1 1 f . . 
. . f 1 1 1 1 1 1 1 1 1 1 f . . 
. f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
. f 1 1 f f 1 1 1 1 f f 1 1 f . 
. f 1 1 f 1 f 1 1 f 1 f 1 1 f . 
. f 1 1 1 1 f 1 1 f 1 1 1 1 f . 
f f 1 1 f 1 1 1 1 1 1 f 1 1 f f 
f 1 1 1 f f 1 1 1 1 f f f 1 1 f 
. f 1 1 f 1 1 1 1 1 1 f 1 1 f . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . 1 f 1 1 1 1 1 1 1 1 f 1 . . 
. . . f f 1 1 1 1 1 1 f f . . . 
. . . . . f f 1 1 f f . . . . . 
`, SpriteKindLegacy.Player)
// controls the sprite
controller.moveSprite(mySprite)
// camera follows sprite throughout game
scene.cameraFollowSprite(mySprite)
