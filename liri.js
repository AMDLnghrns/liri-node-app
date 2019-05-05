if (process.argv[2] == 'movie') {
  movie();
} else if (process.argv[2] == 'spotify') {
  spotify();
} else if (process.argv[2] == 'concert') {
  concert();
}


//////if process.argv[2] = 'movie'
function movie() {
  var axios = require("axios");
  var movie = ifMovieBlank();

  function ifMovieBlank() {
    if (process.argv.length < 4) {
      return "Mr. Nobody";
    } else {
      return process.argv[3];
    }
  }

  axios
    .get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy")
    .then(function(response) {
      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.Year);
      console.log("IMDB: " + response.data.Ratings);
      console.log("Rotten Tomatoes: " + response.data.Ratings);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
    });
}
/////////////////////////////////////////////////////////////////

////// if process.argv[2] = 'spotify'
function spotify() {
  require("dotenv").config();
  var keys = require("./keys");
  var Spotify = require("node-spotify-api");
  var spotify = new Spotify(keys.spotify);

  var queryType = "track";
  var limitValue = 1;
  var queryValue = ifSpotifyBlank();

  function ifSpotifyBlank() {
    if (process.argv.length < 4) {
      return "The Sign Ace of Base";
    } else {
      return process.argv[3];
    }
  }

  spotify.search(
    { type: queryType, query: queryValue, limit: limitValue },
    function(err, data) {
      if (err) {
        return console.log("Error occurred: " + err);
      }
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Song: " + data.tracks.items[0].name);
      console.log("Link: " + data.tracks.items[0].external_urls.spotify);
      console.log("Album: " + data.tracks.items[0].album.name);
    }
  );
}
///////////////////////////////////////////////////////////////////

//////if process.argv[2] = 'concert'
function concert() {
  var axios = require("axios");
  var artist = ifArtistBlank();
  // var artist = 'Phantogram';

  function ifArtistBlank() {
    if (process.argv.length < 4) {
      console.log("Input a band");
    } else {
      return process.argv[3];
    }
  }

  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        artist +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response) {
      console.log("Name: " + response.data[0].venue.name);
      console.log(
        "City: " +
          response.data[0].venue.city +
          ", " +
          response.data[0].venue.region
      );
      console.log("Date: " + response.data[0].datetime); // Date of the Event (use moment to format this as "MM/DD/YYYY")
    });
}
