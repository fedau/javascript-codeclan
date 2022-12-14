const assert = require('assert');
const Taxi = require('../taxi.js');

describe('taxi', function(){
    let taxi;
    beforeEach(function(){
        taxi = new Taxi ('Toyota', 'Prius', 'Joplin',[])
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
        it('should return number of passengers', function(){
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 0);
        });
        it('add passengers', function(){
            taxi.addPassenger('William');
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 1);
        });
        it('remove passenger by name', function(){
            taxi.addPassenger('William');
            taxi.addPassenger('Lily');
            taxi.removePassengerByName('William');
            const expected = ['Lily'];
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, expected);
        });
        it('remove all passengers', function(){
            taxi.addPassenger('William');
            taxi.addPassenger('Lily');
            taxi.removeAllPassengers();
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 0);
        })
    })
});