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
        assert.strictEqual(recordStore.balance, 4995);
    })

    it("should be able to return finances + total value of inventory", function(){
        recordStore.add(record1);
        recordStore.add(record2);
        assert.strictEqual(recordStore.getFinances(), "Balance : 5000, Value : 15")
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

})

})
