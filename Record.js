var Record = function(title, artist, genre, price){
    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.price = price;
}

Record.prototype = {
    getRecord: function(){
        return this.title + " by " + this.artist + ": " + this.genre + ": " + this.price;
    }
}

module.exports = Record;
