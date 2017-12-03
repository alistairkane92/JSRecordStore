var Customer = function(name, inventory, funds){
    this.name = name;
    this.inventory = inventory;
    this.funds = funds;
}

Customer.prototype = {
    getInventory: function(){
        return this.inventory.getStock();
    },
    buy: function(record){
        if (this.funds > record.price){
            this.inventory.add(record);
            this.funds -= record.price;
        }
    },
    sell: function(record){
        this.inventory.remove(record);
        this.funds += record.price;
    },
    calculateTotal: function(){
        return this.inventory.calculateTotal();
    }
}

module.exports = Customer;
