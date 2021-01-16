# Assignment 2 - Web API.

Name: Cillín Ivory

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Feature 1 - Fully implmented favourites so that users can add faviourites and be saved to thier profile.
 + Feature 2 - Upcoming view to show the most recent movies to come out
 + Feature 3 - Popular view to show the most popular movies
 + Feature 4 - Top rated view to show the highest rated movies
 + Feature 5 - Movie details, will show the details of the movie
 + Feature 6 - Shows movie reviews to see what people think of the movie

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

Node 14.15.4, npm, mongoDB.

followed by installation

Mongo Download : https://www.mongodb.com/try/download/community

Simply follow the link above and then select the options that suit your OS and then follow the wizard

Node Download : https://nodejs.org/en/download/

Simply choose the option in the link above which suits your OS and then follow the wizard. This install also inlcudes npm


## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY=<<TMDB key>>
mongoDB=mongodbLink
SEED_DB=true
SECRET=<<Random phrase>>


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies | Gets a list of movies | N/A | N/A |
| /api/movies/upcoming | Gets upcoming movies | N/A | N/A |
| /api/movies/trending | Gets popular movies | N/A | N/A |
| /api/movies/toprated | Gets highest rated movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | N/A | N/A | N/A |
| /api/user/ | Gets all users | Createds a user/ authenticates | N/A |
| /api/user/:id | N/A | N/A | Updates a user |
| /api/user/:username/favourites | returns the users favourites | adds a favourite movie to the user | N/A |
| ... | ... | ... | ... | ...

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

N/A

## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

JWT are used to authenticate users.
All routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

ReactApp Link : https://github.com/CillinIv/movieAPIAssignment

The following api call will return the trending movies

~~~Javascript
  export const getTrendingMovies = () => {
    return fetch(
      `/api/movies/trending`,{headers:{
        'Authorization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json())
  };
~~~

## Extra features

N/A

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  

N/A
