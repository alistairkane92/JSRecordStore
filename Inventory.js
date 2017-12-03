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
    calculateTotal: function(){
        return _.sumBy(this.stock, function(record){
            return record.price;
        })
    },
    getByGenre: function(genre){
        return _.filter(this.stock, {"genre" : genre});
    },
    getTotalByGenre: function(genre){
        return _.sumBy(this.getByGenre(genre), "price");
    },
    getMostValuable: function(){
        return (this.sortByValue())[0].getRecord();
    },
    sortByValue: function(){
        return _.orderBy(this.stock, ["price"], ["desc"]);
    },

}
module.exports = Inventory;
