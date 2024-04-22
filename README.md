### The App logic corresponds to the description of use, which is attached to the layout in Figma.

**Sign in, Sign up**

- The user is prompted to enter their email and password, if they are already registered, and click "Sign In".
- If the user has not yet registered, he needs to click "Sign Up".
- If the user puts incorrect data, an error message appears.
- The "Sign In" button becomes inactive and displays the message.

- On the registration screen, the user comes up with a name, email and password. After that, he clicks "Sign Up".
- If the user realizes that they already have an account, they can click "Sign In" and return to the "Sign In" screen.
- After registration, the user is again taken to the "Sign In" start screen, where he enters his login and password again.
- If you enter incorrect data or if the user does not fill in one of the fields, an error message appears.
- The "Sign In" button becomes inactive and displays the message.


**Main page**

- After filling in the data and clicking on the "Sign In" button, the user is taken to the main page "/tracks/".
- Main page consists of playlist, filters, searchbar, navigation menu, and sidebar.


**Playlists**

- User can navigate to three different playlists that take tracks from different API sources "/tracks/[1, 2, 3]".


**My Playlist**

- User can navigate to a private playlist that take tracks from a special API source "/myplaylist/".
- If the user is not signed in, he can't navigate to My Playlist. Instead, he will be navigated to Sign In page.


**Likes**

- User can like a track. It will be saved to "My Playlist".
- If the user is not signed in, the track name will be changed to a message "You are not signed in. Enter your account." with a link to Sign In page.


### The App design matches the layout, styling is done using Styled Components.


### All files have formatting applied and there are no errors or linter warnings.


### The logic for interacting with the API works correctly, errors are processed and displayed to the user.


### The App runs without errors in the console.