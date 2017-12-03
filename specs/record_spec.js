var assert = require('assert');
var Record = require('../record');

describe("Record", function(){
    beforeEach(function(){
        record1 = new Record("Black Album", "Metallica", "Metal", 5);
    })

    it("should have a title", function(){
        assert.strictEqual(record1.title, "Black Album");
    })

    it("should have an artist", function(){
        assert.strictEqual(record1.artist, "Metallica");
    })

    it("should have a genre", function(){
        assert.strictEqual(record1.genre, "Metal");
    })

    it("should have a price", function(){
        assert.strictEqual(record1.price, 5);
    })

    it("should be able to display a record as string", function(){
        assert.deepStrictEqual(record1.getRecord(record1), "Black Album by Metallica: Metal: 5");
    })

})
