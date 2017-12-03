var assert = require('assert');
var Record = require('../record.js')
var Inventory = require('../inventory.js')

describe("Inventory", function(){
    var inventory, record1, record2;

    beforeEach(function(){
        inventory = new Inventory();
        record1 = new Record("Black Album", "Metallica", "Metal", 5);
        record2 = new Record("Brothers", "The Black Keys", "Rock", 10);
    });

    it("should be able to add records to stock", function(){
        inventory.add(record1);
        assert.deepStrictEqual(inventory.stock, [record1]);
    })

    it("should be able to remove a record from stock", function(){
        inventory.add(record1);
        inventory.remove(record1);
        assert.deepStrictEqual(inventory.stock, []);
    })

    it("should be able to display all records in stock", function(){
        inventory.add(record1);
        inventory.add(record2);
        assert.deepStrictEqual(inventory.getStock(), [record1, record2]);
    })

    it("should be able to calculate the total value of stock", function(){
        inventory.add(record1);
        inventory.add(record2);
        assert.deepStrictEqual(inventory.calculateTotal(), 15);
    })

    it("should be able to return all records by a specific genre", function(){
        var record3 = new Record("From Mars to Sirius", "Gojira", "Metal", 3);

        inventory.add(record1);
        inventory.add(record2);
        inventory.add(record3);
        assert.deepStrictEqual(inventory.getByGenre("Metal"), [record1, record3]);
    })

    it("should be able to calculate total by genre", function(){
        var record3 = new Record("From Mars to Sirius", "Gojira", "Metal", 20);

        inventory.add(record1);
        inventory.add(record2);
        inventory.add(record3);
        assert.strictEqual(inventory.getTotalByGenre("Metal"), 25);
    })
})
