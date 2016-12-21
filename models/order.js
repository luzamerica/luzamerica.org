/**
 * Created by vadim on 20.12.2016.
 */
var mongoose = require('mongoose');
var orderSchema = mongoose.Schema({});
var Order = mongoose.model('Order', orderSchema);
module.exports = Order;