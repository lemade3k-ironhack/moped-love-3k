# :purple_heart::black_heart::purple_heart: MopedLove3k :purple_heart::black_heart::purple_heart:

[Play the game now!](https://lemade3k.github.io/moped-love-3k/index.html)

## Description
:purple_heart::black_heart::purple_heart: MopedLove3k :purple_heart::black_heart::purple_heart: is a simple html5/javascript side scroller game in which the player just wants to ride home on her beloved moped after a long day. In the process, she has to dodge various barricades on the road and escape the police.  
The game is over if she crashes or is caught by the police. The goal is to get home unharmed (and make it to the top five) and collect as many stars on her way as possible. For every collected star you get some bonus time on the end of the game. 

It seems to be an endless journey...


## MVP
* splash screen 
* game screen: 
  * side scroller game
  * background music
  * choose your Moped!!! :purple_heart::black_heart::purple_heart:
  * moped moves: 
    * up and down the road
    * left and right 
  * randomly appearing barricades on the road
  * score board (timer)
  * increasing dificulty
* game over screen with reload function

## Backlog
* the police pursue the player
  * game over when police chases the player
  * extra points if the police crash or the player escapes them
* different types of barricades
* random background music 

## Data structure

### game.js
* initGame () {}
* moveDriver () {}
* toggleMusic () {}

### background.js
...

### barricades.js
...

### driver.js
...

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen


## Task
- [x] main - buildDom
- [x] main - buildSplashScreen
- [x] main - addEventListener
- [x] main - buildGameScreen
- [x] main - buildGameOverScreen
- [x] game - startLoop
- [x] game - drawCanvas
- [x] game - animateCanvas
- [x] barricade - draw
- [x] barricade - move
- [x] game - addBarricade
- [x] moped - draw
- [x] moped - move
- [x] game - addMoped
- [x] game - checkCollision
- [x] game - GameOver
- [x] game - addEventListener

... t.b.a (see also [Kanban Project Board](#kanban) ) 

## Additional Links
[Play the game](https://lemade3k.github.io/moped-love-3k/index.html)

### <a name="kanban"></a> Kanban Board
[Link to Kanban Board](https://github.com/lemade3k/moped-love-3k/projects/1?fullscreen=true)
