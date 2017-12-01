var assert = require('assert');
var Record = require('../record');

describe("Record", function(){
    beforeEach(function(){
        record1 = new Record("Black Album", "Metallica", "Metal", 5);
    })

    it("should have a title", function(){
        assert.strictEqual(record1.title, "Black Album");
    })

    it("should have an artist")
    it("should have a genre")
    it("should have a price")

})
