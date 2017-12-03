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
        recordStore.add(record1);
        recordStore.sell(record1);
        assert.strictEqual(recordStore.balance, 5000);
    })

    it("should be able to return finances + total value of inventory", function(){
        recordStore.add(record1);
        recordStore.add(record2);
        assert.strictEqual(recordStore.getFinances(), "Balance : 4985, Value : 15")
    })



describe("Record Store Inventory", function(){

    it("should be able to get all records of inventory", function(){
        recordStore.add(record1);
        recordStore.add(record2);
        assert.deepStrictEqual(recordStore.getInventory(), [record1, record2]);
    })

    it("should be able to return the total value of inventory", function(){
        recordStore.add(record1);
        recordStore.add(record2);
        assert.strictEqual(recordStore.calculateTotal(), 15);
    })

    it("should be able to return all by genre", function(){
        record3 = new Record("test", "test", "Metal", 10);
        recordStore.add(record1);
        recordStore.add(record2);
        recordStore.add(record3);
        assert.deepStrictEqual(recordStore.getByGenre("Metal"), [record1, record3]);
    })

    it("should be able to view most valuable record", function(){
        record3 = new Record("BigMetal", "MetalBand", "Metal", 100);
        recordStore.add(record1);
        recordStore.add(record2);
        recordStore.add(record3);
        assert.strictEqual(recordStore.getMostValuable(), "BigMetal by MetalBand: Metal: 100");
    })

    it("should be able to sort by value", function(){
        record3 = new Record("BigMetal", "MetalBand", "Metal", 100);
        recordStore.add(record1);
        recordStore.add(record3);
        recordStore.add(record2);
        assert.deepStrictEqual(recordStore.sortByValue(), [record3, record2, record1]);
    })

})

})
