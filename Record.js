var Record = function(title, artist, genre, price){
    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.price = price;
}

Record.prototype = {
    getRecord: function(record){
        return record.title + ", " + record.artist + ", " + record.genre + ", " + record.price;
    }
}

module.exports = Record;
