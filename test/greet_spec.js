/**
 * Created by samael on 15-6-9.
 */
//var expect = require("chai").expect

var greet = require('../index')

describe('greet', function(){
    it("is a dummy success case", function(){
        expect(1).to.eql(1);
    });
});

describe('greet samael', function(){
    it("should greet a person by name", function(){
        expect(greet("samael")).to.eql("hello samael");
    });
});


describe('greet samael --drunk', function(){
    it("should greet a person flirtatiously if drunk", function(){
        expect(greet("samael", "drunk")).to.eql("hello samael, you look sexy today");
    });
});