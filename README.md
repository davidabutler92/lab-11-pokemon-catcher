# lab-11-pokemon-catcher

// HTML elements 

DOM ELEMTNS

    //wrap radio buttons in a label tag 
    // 3 radio buttons with empty image tags
    // each having the same have same name 
    //give them values 
    // button to to cath the pokemon
    //div to display caught pokemon
    A single, individual user session (which the user can click a clear button to play again)


INITIAL STATE
    //Pokemon data stored in a variable
    //Have initial state, pokeon json data 
    //Set a counter for clicks (totalTracker)

ON CLIKC EVENT LISTENER 
On click of catch button 
//track users clicks ++ when users click reach 10 - go to results. 
//Grab the value of user choice
//Incriment encountered && incriment captured(write a function for this)
//Write a function that randomizes pokemon images
//refresh radio butons on click "catch"

RESULTS PAGE 

//list of encountered pokemon and how many times they were caught
//Reset button 




First, you will select three random photos from the available pokemon and display them side-by-side-by-side in the browser window.
Then, you'll want to be able to receive clicks on those displayed pokemon images, and track those clicks for each pokemon. You'll also want to track how many times each pokemon is displayed and each time each pokemon is clicked. Do this for:
When the user clicks on a pokemon, three new non-duplicating random 
 pokemon images need to be automatically displayed. The three pokemon images that are displayed should contain no duplicates.
[AS A PRETTY FREAKING HARD STRETCH GOAL: nor should they duplicate with any pokemon images that we displayed immediately before (you may want to layer in this second requirement after the first is working)].
Additional stretch: Below each image, show how many of this kind of pokemon the user has encountered already, and how many they'ver already captured.
At the top of the page, it should tell the user how many total pokemon they've caught so far.