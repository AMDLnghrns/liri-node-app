require("dotenv").config();
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var queryType = "track";
var limitValue = 1;
var queryValue = process.argv[3];
var queryValue = ifBlank();

function ifBlank() {
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
