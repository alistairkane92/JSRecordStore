var _ = require("Lodash");

var RecordStore = function(name, city, balance, inventory){
    this.name = name;
    this.city = city;
    this.balance = balance;
    this.inventory = inventory;
}

RecordStore.prototype = {
    add: function(record){
        this.inventory.add(record);
    },
    remove: function(record){
        this.inventory.remove(record);
    },
    getInventory: function(){
        return this.inventory.getStock();
    },
    sell: function(record){
        this.inventory.remove(record);
        this.balance -= record.price;
    },
    calculateTotal: function(){
        return this.inventory.calculateTotal();
    },
    getFinances: function(){
        return "Balance : " + this.balance + ", Value : " + this.calculateTotal();
    },
    getByGenre: function(genre){
        return _.filter(this.inventory, {"genre" : genre});
    }
}

module.exports = RecordStore;
