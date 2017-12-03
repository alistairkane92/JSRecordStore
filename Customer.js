var _ = require("Lodash");

var Customer = function(name, inventory, balance){
    this.name = name;
    this.inventory = inventory;
    this.balance = balance;
}

Customer.prototype = {
    getInventory: function(){
        return this.inventory.stock;
    },
    buy: function(record, recordStore){
        if (this.balance >= record.price && _.includes(recordStore.getInventory(), record)){
            this.balance -= record.price;
            this.inventory.add(record);
            recordStore.sell(record);
        }
    },
    sell: function(record, purchaser){
        if (purchaser.balance > record.price && _.includes(this.getInventory(), record)){
            purchaser.sell(record);
            this.balance += record.price;
        }
    },
    compareTotalValue: function(customer){
        return this.name + ": " + this.calculateTotal() + ", "
        + customer.name + ": " + customer.calculateTotal();
    },
    isValueGreater: function(customer){
        if (this.calculateTotal() > customer.calculateTotal()){
            return true;
        } return false;
    },
    calculateTotal: function(){
        return this.inventory.calculateTotal();
    },
    getByGenre: function(genre){
        return this.inventory.getByGenre(genre);
    },
    getTotalByGenre: function(genre){
        return this.inventory.getTotalByGenre(genre);
    },
    getMostValuable: function(){
        return this.inventory.getMostValuable();
    },
    sortByValue: function(){
        return this.inventory.sortByValue();
    },
    compareTotalValue: function(customer){
        return this.name + ": " + this.calculateTotal() + ", "
        + customer.name + ": " + customer.calculateTotal();
    },
    isValueGreater: function(customer){
        if (this.calculateTotal() > customer.calculateTotal()){
            return true;
        } return false;
    }
}

module.exports = Customer;
