//////if process.argv[2] = movie
var axios = require("axios");
var movie = ifMovieBlank();

function ifMovieBlank() {
  if (process.argv.length < 4) {
    return "Mr. Nobody";
  } else {
    return process.argv[3];
  }
}

axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy")
.then(function(response) {
    console.log("Title: " + response.data.Title);
    console.log("Year: " + response.data.Year);
    console.log("IMDB: " + response.data.Ratings);
    console.log("Rotten Tomatoes: " + response.data.Ratings);
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
  }
);

///////////////////////////////////////////////////////////////////

////// if process.argv[2] = 'spotify'
// require("dotenv").config();
// var keys = require("./keys");
// var Spotify = require("node-spotify-api");
// var spotify = new Spotify(keys.spotify);

// var queryType = "track";
// var limitValue = 1;
// var queryValue = ifSpotifyBlank();

// function ifSpotifyBlank() {
//   if (process.argv.length < 4) {
//     return "The Sign Ace of Base";
//   } else {
//     return process.argv[3];
//   }
// }

// spotify.search(
//   { type: queryType, query: queryValue, limit: limitValue },
//   function(err, data) {
//     if (err) {
//       return console.log("Error occurred: " + err);
//     }
//     console.log("Artist: " + data.tracks.items[0].artists[0].name);
//     console.log("Song: " + data.tracks.items[0].name);
//     console.log("Link: " + data.tracks.items[0].external_urls.spotify);
//     console.log("Album: " + data.tracks.items[0].album.name);
//   }
// );
