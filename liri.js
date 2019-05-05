if (process.argv[2] == 'movie') {
  additionToFile();
  movie();
} else if (process.argv[2] == 'spotify') {
  additionToFile();
  spotify();
} else if (process.argv[2] == 'concert') {
  additionToFile();
  concert();
} else {
  error();
}

function additionToFile() {
  var fs = require("fs");
  fs.appendFile("random.txt", ", " + process.argv[2] + " " + '"' + process.argv[3] + '"\n', function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Content Added!")
  });
}

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
      console.log("IMDB: " + response.data.imdbRating);
      console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
    });
}

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

function concert() {
  var axios = require("axios");
  var moment = require("moment");
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
      console.log("Date: " + moment(response.data[0].datetime).format('L')); // Date of the Event (use moment to format this as "MM/DD/YYYY")
    });
}

function error() {
  var fs = require("fs");
  fs.readFile("random.txt", "utf8", function (error, data) {
      if (error) {
          return console.log(error);
      }
      var dataArr = data.split(",");
      var dataArr2 = dataArr[0].split(' ')
      appSelector = dataArr2[0];
      var dataArr3 = dataArr[0].split('"');
      console.log(dataArr3[1]);
      input = dataArr[0];

      if (appSelector == "spotify") {
          spotify(); //run the dataArr3[1] value through the spotify function
      }
      else if (appSelector == "concert") {
          concerts();
      }
      else if (appSelector == "movie") {
          movie();
      }
  });
}

