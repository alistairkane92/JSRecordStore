var _ = require("Lodash");

var RecordStore = function(name, city, balance){
    this.name = name;
    this.city = city;
    this.balance = balance;
    this.inventory = [];
}

RecordStore.prototype = {
    add: function(record){
        this.inventory.push(record);
    },
    remove: function(record){
        _.remove(this.inventory, record);
    }
}

module.exports = RecordStore;
