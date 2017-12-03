var _ = require("Lodash");

var Inventory = function(){
    this.stock = []
}

Inventory.prototype = {
    add: function(record){
        this.stock.push(record);
    },
    remove: function(record){
        _.remove(this.stock, record);
    },
    getStock: function(){
        return _.forEach(this.stock, function(record){
            record.getRecord();
        })
    },
    calculateTotal: function(){
        return _.sumBy(this.stock, function(record){
            return record.price;
        })
    },
    getByGenre: function(genre){
        return _.filter(this.stock, {"genre" : genre});
    }
}
module.exports = Inventory;
