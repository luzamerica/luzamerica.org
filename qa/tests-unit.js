/**
 * Created by vadim on 13.12.2016.
 */
var fortune = require('../lib/fortune.js');
var expect = require('chai').expect;

suite('Tests fortune', function () {
    test('getFortune() should return a prediction', function () {
        expect(typeof fortune.getFortune() === 'string');
    });
});