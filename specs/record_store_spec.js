var assert = require('assert');
var Record = require('../record');
var RecordStore = require('../record_store');
var Inventory = require('../inventory');

describe("RecordStore", function(){
    var record1, record2, recordStore, inventory;

    beforeEach(function(){
        recordStore = new RecordStore("Big Als", "Glasgow", 5000, inventory);
        record1 = new Record("Black Album", "Metallica", "Metal", 5);
        record2 = new Record("Brothers", "The Black Keys", "Rock", 10);
        inventory = new Inventory();
    })

    it("should have a name", function(){
        assert.strictEqual(recordStore.name, "Big Als");
    })

    it("should have a city", function(){
        assert.strictEqual(recordStore.city, "Glasgow");
    })

    it("should have a balance", function(){
        assert.strictEqual(recordStore.balance, 5000);
    })

    it("should be able to sell a record", function(){
        recordStore.buy(record1);
        recordStore.sell(record1);
        assert.strictEqual(recordStore.balance, 5000);
    })

    it("should be able to buy a record", function(){
        recordStore.buy(record1);
        assert.strictEqual(recordStore.balance, 4995);
        assert.deepStrictEqual(recordStore.getInventory(), [record1]);
    })

    it("should be able to return finances + total value of inventory", function(){
        recordStore.buy(record1);
        recordStore.buy(record2);
        assert.strictEqual(recordStore.getFinances(), "Balance : 4985, Value : 15")
    })



describe("Record Store Inventory", function(){
    beforeEach(function(){
        record3 = new Record("BigMetal", "MetalBand", "Metal", 100);
        recordStore.buy(record1);
        recordStore.buy(record2);
        recordStore.buy(record3);
    })

    it("should be able to get all records of inventory", function(){
        assert.deepStrictEqual(recordStore.getInventory(), [record1, record2, record3]);
    })

    it("should be able to return the total value of inventory", function(){
        assert.strictEqual(recordStore.calculateTotal(), 115);
    })

    it("should be able to return all by genre", function(){
        assert.deepStrictEqual(recordStore.getByGenre("Metal"), [record1, record3]);
    })

    it("should be able to view most valuable record", function(){
        assert.strictEqual(recordStore.getMostValuable(), "BigMetal by MetalBand: Metal: 100");
    })

    it("should be able to sort by value", function(){
        assert.deepStrictEqual(recordStore.sortByValue(), [record3, record2, record1]);
    })
})

})
