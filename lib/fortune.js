/**
 * Created by vadim on 11.12.2016.
 */
var fortunes = ["Win your fairs","Vadim","Maxim"];

exports.getFortune = function () {
    var idx = Math.floor(Math.random()* fortunes.length);
    return fortunes[idx];
};