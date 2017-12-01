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
    },
    getInventory: function(){
        return _.forEach(this.inventory, function(record){
            record.getRecord();
        })
    },
    sell: function(record){
        this.remove(record);
        this.balance -= record.price;
    },
    calculateTotal: function(){
        return _.sumBy(this.inventory, function(record){
            return record.price;
        })
    }
}

module.exports = RecordStore;
