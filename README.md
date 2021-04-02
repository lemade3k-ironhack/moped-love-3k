# :purple_heart::black_heart::purple_heart: MopedLove3k :purple_heart::black_heart::purple_heart:

[Play the game now!]()

## Description
:purple_heart::black_heart::purple_heart: MopedLove3k :purple_heart::black_heart::purple_heart: is a simple html5/javascript side scroller game in which the player just wants to ride home after a long day on her beloved moped. In the process, she has to dodge various barricades on the road and escape the police.  
The game is over if she crashes or is caught by the police. The goal is to get home unharmed. It seems to be an endless journey...


## MVP

* splash screen 
* game screen: 
  * side scroller game
  * background music
  * moped moves: 
    * up and down the road
    * left and right 
  * randomly appearing barricades on the road
  * increasing dificulty
  * score board
* game over screen with reload function

## Backlog
* the police pursue the player
  * game over when police chases the player
  * extra points if the police crash or the player escapes them
* choose your Moped!!! :purple_heart::black_heart::purple_heart:
* different types of barricades
* random background music 

## Data structure

### main.js
* buildSplashScreen () {}
* buildGameScreen () {}
* buildGameOverScreen () {}

### barricades.js
...

### moped.js
...

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen


## Task
- [ ] main - buildDom
- [ ] main - buildSplashScreen
- [ ] main - addEventListener
- [ ] main - buildGameScreen
- [ ] main - buildGameOverScreen
- [ ] game - startLoop
- [ ] game - buildCanvas
- [ ] game - updateCanvas
- [ ] game - drawCanvas
- [ ] barricade - draw
- [ ] barricade - move
- [ ] game - addBarricade
- [ ] moped - draw
- [ ] moped - move
- [ ] game - addMoped
- [ ] game - checkCollision
- [ ] game - GameOver
- [ ] game - addEventListener

... t.b.a (see also [Kanban Project Board](#kanban) ) 

## Additional Links
[Play the game]()

### <a name="kanban"></a> Kanban Board
[Link to Kanban Board](https://github.com/lemade3k/moped-love-3k/projects/1?fullscreen=true)


### Slides
... coming soon ...