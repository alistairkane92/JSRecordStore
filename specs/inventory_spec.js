var assert = require('assert');
var Record = require('../record.js')
var Inventory = require('../inventory.js')

describe("Inventory", function(){
    beforeEach(function(){
        inventory = new Inventory();
        record1 = new Record("Black Album", "Metallica", "Metal", 5);
        record2 = new Record("Brothers", "The Black Keys", "Rock", 10);
    });

    it("should be able to add records to stock", function(){
        inventory.add(record1)
        assert.deepStrictEqual(inventory.stock, [record1])
    })

    it("should be able to remove a record from stock", function(){
        inventory.add(record1);
        inventory.remove(record1);
        assert.deepStrictEqual(inventory.stock, [])
    })
    
    it("should be able to display all records in stock")
    it("should be able to calculate the total value of stock")
    it("should be able to return all records by a specific stock")
})
