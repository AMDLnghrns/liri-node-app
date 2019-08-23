# liri-node-app

This is my CLI "LIRI Bot." LIRI is similar to iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data, then archives the response on the random.txt file.

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

Type in 
    node liri.js <value1>, "<value2>" 
    
Value1 is either "spotify", "concert", or "movie". 
Value2 is the typed in item you would like to search. (Note the quotation marks.)

If you choose "spotify" for value1, but leave value2 blank, you will receive the default Ace of Base song "The Sign".
If you choose "movie" for value1, but leave value2 blank, you will receive the default movie "Mr. Nobody".
If you choose "concert" for value1, but leave value2 blank, you will be asked to input a band and receive an error message.
If you leave value1 and value 2 blank, you will be given the first response in the archive history.

