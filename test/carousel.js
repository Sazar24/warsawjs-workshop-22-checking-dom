const test = require('vav')
const Carousel = require('../src/Carousel/myComponent');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM();
const window = dom.window;
const document = window.document;
global.document = document;

test('should be class type', (assert) => {

    const classAsString = Carousel.toString();
    const isClass = /^class/.classAsString;
    assert.is(isClass);
    // assert.isClass(Carousel);
});

test('should be function type', (assert) => {

    const isFunction = (typeof (Carousel) === 'function');
    assert.is(isFunction);
    assert.isFunction(Carousel);
    // nie być arrow function
    // ????
});

test('should have argument in constructor', (assert) => {
    let constructorArguements = Carousel.length;
    assert.is(constructorArguements === 1);

});

test('argument passed to constructor has property', () => {
    // const testMyCarousel = new Carousel({ arg });

});

test('6 ', () => {
    const c = new testCarousel({
        
    })

});