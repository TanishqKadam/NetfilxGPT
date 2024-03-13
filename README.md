Features - 

-->Login/signup - 1) sign in / sign up form 2) login redirect to browse page.

-->Browse page (after authentication) - 1)Header 2) Main Movie -  Trailer in background , Movie Title & description 3) MovieSuggestions- movies list * N.

-->NetfilxGPT - 1) serach bar for movie suggestions 

# Netflix-Gpt
- create-react-app
- configured tailwind css
- header
- routing of app
- login form
- sign up form
- form validations 
- useRef hook
- firebase setup 
- deploying app to firebase. production
- create sign up user in firebase.
- created redux store with userSlice.
- dispatch user when user sign in / sign out / sign up using firebase api ( signout feature ) --> updated profile name,photoUrl
- /browse page - use tmdb api for latest movie api's netflix apis are not public need authentication for that. (fetch from tmdb movies)
- bugfix- sign up user displayName and profile update
- bugfix- if user is not logged in redirect /browse to login page and vice versa
- unsubscribed to the onAuthStateChange callback 
- keep constant url at one place constant.js
- rigester for tmdb api and create api and get data from tmdb now playing movie list 
- custome hooks for nowPlayingMovie 
- update store with movieData 
- planning for main and secondary container
- fetch data for trailer video
- update store with trailer video data
- embedded utube video and make it autoplay and mute
- tailwind css make main container to look awesome.
