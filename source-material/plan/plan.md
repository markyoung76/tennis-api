# BUILDING A TENNIS API WEB PAGE

### To allow the user to search and display information about an ATP or WTA tennis player's statistical data.

## PLAN

1. Look for and research a tennis API that fulfils our requirements and enables us to use a fetch request to retrieve data and display it inside our bespoke tennis stats web build.
2. Once the correct API is sourced, sign-up to use it and get the relevant security key to allow our web page to function properly.
3. Come up with a general design concept for our bespoke web page and create a low-fidelity wireframe to show how the basic design and layout will look, using Excalidraw (VS Code plug-in).
4. Build upon our low-fidelity design by sourcing a suitable colour scheme using the Coolors website to generate a palette. When we are happy with our choices, take a screenshot and include it in the README.md file. Our inspiration for the colour palette stems from the colours associated with Wimbledon AELTC (All England Lawn Tennis Club).
5. Create a suitable high-fidelity wireframe to incorporate the above (featuring a before & after representation of our design). Take screenshots and add to README.md.
6. Set-up our HTML, CSS and JavaScript files and link everything accordingly to the HTML document, so that it all operates as it should.
7. Create a source material folder and an image subfolder to store all of our wireframe designs and any other artwork that we will be making use of for our web page.
8. Also, create a further subfolder for any planning to be considered and implemented (inside this plan.md file).
9. Start coding. Build-up the HTML & CSS elements to establish a functioning web page.
10. Use semantic HTML and CSS styling to create the header and borders in-line with our original wireframe design.
11. Build the 'stats/info display area' by importing the tennis court background image and positioning appropriately to the borders.
12. Apply a linear gradient filter on top of the background image and size/position as required to achieve the desired appearance (as per our Figma wireframe design).
13. Code and create our navigation bar and search component (that includes a dropdown selector, input field (rank number), search button and 2 x search navigation buttons for moving backwards or forwards through pages of player rankings, in increments of 100 results per page).
14. Add all three opaque green information display panels and size/postion them according to fit within the background appropriately.
15. Add the three different panel headers (e.g. RANK & PROFILE, PLAYER DATA, TOUR DATA).
16. Starting with the PLAYER DATA & TOUR DATA panels, add and style the panel subheaders and information placeholders.
17. Do the same with the RANK & PROFILE panel, adding the necessary, 'rank number', 'player profile photo' and 'short name' placeholders.
18. Commence with the required JavaScript to fetch data from the API and present it inside all of the information placeholders.
19. Work on getting the input field to take a 'rank number' and present the relevant search data from the API on the web page.
20. Make the 'search' button operational by triggering the fetch function when clicked... done by adding an event listener to the search button and Math.floor Math.random to our JS to generate a different set of player data from the API/per click.
21. Do research on how to connect our input field to our search button, so that when a user inputs a number there will be relevant data fetched and displayed from the API inside the information display panel placeholders.
22. Need to find a solution to delay keypress until after user has finished typing, to prevent multiple fetch requests occurring.
23. Work on editing the url for the search parameters, with reference to the dropdown (ATP/WTA), to allow the user to select between the men's or women's player statistics being displayed.
