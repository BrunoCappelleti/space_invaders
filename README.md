# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | 
|---|---| 
|Day 1:| Game Idea|
|Day 2:| Wireframes and Priority Matrix|
|Day 3:| Pseudocode\actual code|
|Day 4:| Basic Clickable Model |
|Day 5:| Working Prototype |
|Day 6:| Game Completed / Slides |
|Day 7:| Project Presentations |

## Project Description
The idea behind this project was to use HTML, CSS, and Javascript to create a Space Invaders clone. The player will have to elimate all the invaders before the time runs out to win. If the player is unable to complete the game within the time limit, they will lose. At the center of my project will be code that will allow the player to make valid moves accross the screen and fire at the incoming invaders. The goal is that if the player's project is detected as a hit, the div that recieved the collision will be removed from the DOM. The game will check after each successful shot if there are any enemies remaining. If not the game ends and the player wins.

## Priority Matrix

Need to upload

## MVP 
 - Complete core game with basic shapes to ensure all game logic is working
 - Set up unit collision that will result in removing the object hit
 - The game should be lost if the time limit is exceeded
 - Ensure the win condition is working as intended and notifies the player
 - Make the game replayable with a restart option

## POST MVP
 - Apply a good skin to the game making it feel more interactive
 - Make it so that enemies can fire back and have a second condition to lose based on amount of lives left
 - Add barriers that are destroyed by enemies that can protect the player
 - Create multiple levels with greater difficulty (maybe an endless mode)
 
## Wireframes

Need to upload

## Game Components

### Landing Page
On page load, the user should see a basic outline of the game with the actual play space in the middle. Rules will be displayed on the left side along with another box that will outline the game name with any subtitles and possible menu buttons (this is were pause could be added). On the right will be a score based on how many enemies the user has destroyed (different enemies will be different amounts of points). At the center in the game space is a start button that the user can press to initially launch the game.

### Game Initialization
When the game begins, the page will mostly remain the same, but the center div containing the start button will change to show the playing field. the user then takes control of the ship and begins to fire at the invaders. The timer should begin to count down at this point, and the user can play the game as outlined in the rules section.

### Playing The Game
The player should be able to move their ship left to right along the screen within the boundaries of the game area. The invaders will also slowly move left and right and every so often will drop down closer to the player's ship. Durring this time the player can fire at the invaders attempting to elimate all the invading ships. 

### Winning/Losing The Game
To win the game, the player must eliminate all the enemies before time expires. If they fail to do so they will lose. Regardless of this, the center div containing the game space will change to display a message telling the player if they won or lost. Below that will be a snapshot of the players score, the time remaining, and a message that will either praise their acts of heroism or inform them of the planets doom.

### Game Reset
After each game, the player will be given the choice to restart. This will make it so that game will will be a compeltely fresh restart as though the page was just loaded again.

## Functional Components

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Wireframe / Basic page structure | H | 5hrs| / | / |
| Setting up all movements and ability to shoot projectile | H | 8hrs| / | / |
| Setting up timer, unit collision, and ensuring game Logic works | H | 10hrs| / | / |
| Improving overall look of the game | M | 5hrs| / | / |
| Adding additional features | L | 5hrs| / | / |
| Total Time | / | 28hrs| / | / |

## Additional Libraries
Not sure if I'll have to use any additional Libraries

## Code Snippet
Save this for later

## Change Log
Save this for later

## Issues and Resolutions
Save this for later