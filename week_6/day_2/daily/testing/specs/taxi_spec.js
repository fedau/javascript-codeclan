const assert = require('assert');
const Taxi = require('../taxi.js');

describe('taxi', function(){
    let taxi;
    beforeEach(function(){
        taxi = new Taxi ('Toyota', 'Prius', 'Joplin')
    })
    it('should have a manufacturer',function(){
        const actual = taxi.manufacturer;
        assert.strictEqual(actual, 'Toyota')
    });
    it('should have a model', function(){
        const actual = taxi.model;
        assert.strictEqual(actual, 'Prius')

    });
    it('should have a driver', function(){
        const actual = taxi.driver
        assert.strictEqual(actual, 'Joplin')
    })

    describe('passengers', function(){
        it('should start with no passengers', function(){
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, []);
        });
    })
});