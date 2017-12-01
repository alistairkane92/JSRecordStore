var assert = require('assert');
var Record = require('../record');
var RecordStore = require('../record_store');

describe("RecordStore", function(){
    beforeEach(function(){
        recordStore = new RecordStore("Big Als", "Glasgow", 5000);
        record1 = new Record("Black Album", "Metallica", "Metal", 5);
        record2 = new Record("Brothers", "The Black Keys", "Rock", 10);
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

    it("should have an inventory",function(){
        assert.deepStrictEqual(recordStore.inventory, []);
    })

    it("should be able to add records to inventory", function(){
        recordStore.add(record1);
        assert.deepStrictEqual(recordStore.inventory, [record1]);
    })

    it("should be able to remove a record from inventory", function(){
        recordStore.add(record1);
        recordStore.remove(record1);
        assert.deepStrictEqual(recordStore.inventory, []);
    })

    it("should be able to display all records of inventory", function(){
        recordStore.add(record1);
        recordStore.add(record2);
        assert.deepStrictEqual(recordStore.getInventory(), [record1, record2]);
    })

    it("should be able to sell a record", function(){
        recordStore.add(record1);
        recordStore.sell(record1);
        assert.strictEqual(recordStore.balance, 4995);
    })

    it("should be able to calculate the total value of inventory", function(){
        recordStore.add(record1);
        recordStore.add(record2);
        assert.strictEqual(recordStore.calculateTotal(), 15);
    })
    it("should be able to return finances + total value of inventory")
    it("should be able to return all records by a specific genre")

})
