var assert = require('assert');
var Record = require('../record');
var Customer = require('../customer');
var Inventory = require('../inventory');

describe("Customer", function(){
    beforeEach(function(){
        inventory = new Inventory();
        customer = new Customer("Terry", inventory, 500);
        record1 = new Record("Black Album", "Metallica", "Metal", 5);
    })

    it("should have a name", function(){
        assert.strictEqual(customer.name, "Terry");
    })

    it("should have funds", function(){
        assert.strictEqual(customer.funds, 500);
    })

    it("should be able to return all records of inventory", function(){
        customer.inventory.add(record1);
        assert.deepStrictEqual(customer.getInventory(), [record1]);
    })

    it("should be able to buy a record", function(){
        customer.buy(record1);
        assert.strictEqual(customer.funds, 495);
        assert.deepStrictEqual(customer.getInventory(), [record1]);
    })

    it("should be able to sell a record")
    it("should not be able to buy if doesn't have enough funds")
    it("should be able to view total value of inventory")
    it("should be able to calculate total value of inventory")
    it("should be able to calculate total by genre of inventory")
    it("should be able to view the most valuable record")
    it("should be able to sort records by value")
    it("should be able to compare value of their collection with value of another")
})
