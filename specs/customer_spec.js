var assert = require('assert');
var Record = require('../record');
<<<<<<< HEAD
var RecordStore = require('../record_store')
=======
>>>>>>> feature/refactor_test_describes
var Customer = require('../customer');
var Inventory = require('../inventory');

describe("Customer", function(){
<<<<<<< HEAD
    var record1, record2, record3, customer, inventory, recordStore;

    beforeEach(function(){
        inventory = new Inventory();
        inventory2 = new Inventory();

        recordStore = new RecordStore("Big Als", "Big Als", 5000, inventory2);
        customer = new Customer("Terry", inventory, 500);

=======
    var record1, record2, record3, customer, inventory;

    beforeEach(function(){
        inventory = new Inventory();
        customer = new Customer("Terry", inventory, 500);
>>>>>>> feature/refactor_test_describes
        record1 = new Record("Black Album", "Metallica", "Metal", 5);
        record2 = new Record("Brothers", "The Black Keys", "Rock", 10);
        record3 = new Record("Paranoid", "Black Sabbath", "Metal", 20);
    })

    it("should have a name", function(){
        assert.strictEqual(customer.name, "Terry");
    })

<<<<<<< HEAD
    it("should have balance", function(){
        assert.strictEqual(customer.balance, 500);
    })

    it("should be able to buy a record", function(){
        recordStore.buy(record1);
        customer.buy(record1, recordStore);

        assert.strictEqual(customer.balance, 495);
        assert.strictEqual(recordStore.balance, 5000);

        assert.deepStrictEqual(recordStore.getInventory(), []);
        assert.deepStrictEqual(customer.getInventory(), [record1]);
    })

    it("should not be able to buy if doesn't have enough balance", function(){
        var record4 = new Record("Expensive Record", "RichPeople", "Expensiveness", 501);
        recordStore.buy(record4);
        customer.buy(record4, recordStore);

        assert.strictEqual(customer.balance, 500);
        assert.deepStrictEqual(customer.getInventory(), []);
=======
    it("should have funds", function(){
        assert.strictEqual(customer.funds, 500);
    })

    it("should be able to buy a record", function(){
        customer.buy(record1);
        assert.strictEqual(customer.funds, 495);
        assert.deepStrictEqual(customer.getInventory(), [record1]);
    })

    it("should not be able to buy if doesn't have enough funds", function(){
        var record3 = new Record("Expensive Record", "RichPeople", "Expensiveness", 501);
        customer.buy(record3);
        assert.strictEqual(customer.funds, 500);
        assert.deepStrictEqual(customer.inventory.stock, []);
>>>>>>> feature/refactor_test_describes
    })

    it("should be able to compare value of their collection with value of another", function(){
        inventory2 = new Inventory();
        customer2 = new Customer("Nadine", inventory2, 500);
<<<<<<< HEAD
        recordStore.buy(record1);
        recordStore.buy(record2);
        recordStore.buy(record3);

        customer2.buy(record1, recordStore);

        customer.buy(record3, recordStore);
        customer.buy(record2, recordStore);

        assert.strictEqual(customer.compareTotalValue(customer2), "Terry: 30, Nadine: 5");
=======
        customer2.buy(record1);

        customer.buy(record1);
        customer.buy(record3);
        customer.buy(record2);

        assert.strictEqual(customer.compareTotalValue(customer2), "Terry: 35, Nadine: 5");
>>>>>>> feature/refactor_test_describes
    })

    it("should return true or false if value greater than comparator", function(){
        inventory2 = new Inventory();
        customer2 = new Customer("Nadine", inventory2, 500);
<<<<<<< HEAD
        recordStore.buy(record1);
        recordStore.buy(record2);
        recordStore.buy(record3);

        customer2.buy(record2, recordStore);

        customer.buy(record1, recordStore);
        customer.buy(record3, recordStore);
=======
        customer2.buy(record1);

        customer.buy(record1);
        customer.buy(record3);
        customer.buy(record2);
>>>>>>> feature/refactor_test_describes

        assert.strictEqual(customer.isValueGreater(customer2), true);
        assert.strictEqual(customer2.isValueGreater(customer), false);
    })

    it("should be able to sell a record", function(){
<<<<<<< HEAD
        recordStore.buy(record1);
        customer.buy(record1, recordStore);
        customer.sell(record1, recordStore);
        assert.strictEqual(customer.balance, 500);
=======
        customer.buy(record1);
        customer.sell(record1);
        assert.strictEqual(customer.funds, 500);
>>>>>>> feature/refactor_test_describes
    })

describe("Customer Inventory", function(){
    beforeEach(function(){
<<<<<<< HEAD
        recordStore.buy(record1);
        recordStore.buy(record2);
        recordStore.buy(record3);
        customer.buy(record1, recordStore);
        customer.buy(record2, recordStore);
        customer.buy(record3, recordStore);
    })

    it("should be able to return all records of inventory", function(){
        assert.deepStrictEqual(customer.getInventory(), [record1, record2, record3]);
    })

    it("should be able to calculate total value of inventory", function(){
        assert.strictEqual(customer.calculateTotal(), 35);
    })

    it("should be able to calculate total by genre of inventory", function(){
=======
        inventory = new Inventory();
        customer = new Customer("Terry", inventory, 500);
        record1 = new Record("Black Album", "Metallica", "Metal", 5);
        record2 = new Record("Brothers", "The Black Keys", "Rock", 10);
        record3 = new Record("Paranoid", "Black Sabbath", "Metal", 20);
    })

    it("should be able to return all records of inventory", function(){
        customer.inventory.add(record1);
        assert.deepStrictEqual(customer.getInventory(), [record1]);
    })

    it("should be able to calculate total value of inventory", function(){
        customer.buy(record1);
        customer.buy(record2);
        assert.strictEqual(customer.calculateTotal(), 15);
    })

    it("should be able to calculate total by genre of inventory", function(){
        customer.buy(record1);
        customer.buy(record2);
        customer.buy(record3);
>>>>>>> feature/refactor_test_describes
        assert.strictEqual(customer.getTotalByGenre("Metal"), 25);
    })

    it("should be able to view the most valuable record", function(){
<<<<<<< HEAD
=======
        customer.buy(record1);
        customer.buy(record2);
        customer.buy(record3);
>>>>>>> feature/refactor_test_describes
        assert.strictEqual(customer.getMostValuable(), "Paranoid by Black Sabbath: Metal: 20")
    })

    it("should be able to sort records by value", function(){
<<<<<<< HEAD
=======
        customer.buy(record1);
        customer.buy(record3);
        customer.buy(record2);
>>>>>>> feature/refactor_test_describes
        assert.deepStrictEqual(customer.sortByValue(), [record3, record2, record1]);
    })

})
})
