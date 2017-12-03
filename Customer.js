var _ = require("Lodash");

var Customer = function(name, inventory, funds){
    this.name = name;
    this.inventory = inventory;
    this.funds = funds;
}

Customer.prototype = {
    getInventory: function(){
        return this.inventory.stock;
    },
    buy: function(record, recordStore){
        if (this.funds >= record.price && _.includes(recordStore.getInventory(), record)){
            this.funds -= record.price;
            this.inventory.add(record);
            recordStore.sell(record);
        }
    },
    sell: function(record){
        this.inventory.remove(record);
        this.funds += record.price;
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
