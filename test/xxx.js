// const CarouselComponent = require("../src/index.js");
// const jsdom = require("jsdom");
// const {JSDOM} = jsdom;
// const dom = new JSDOM("<!DOCTYPE html><div id='carousel'></div>");
// const test = require("ava");
// const window = dom.window;
// const document = window.document;
// global.document = document;
// global.window = window;

// test("1. Component is a class", t => {
//  const regClass=/^class/;
//  const isClass = obj => regClass.test(obj.toString());

//  t.is(typeof CarouselComponent, "function");
//  t.is(isClass(CarouselComponent), true);
// });

// test("2. Component throws an error if options argument is not provided", t => {
//  const arity = CarouselComponent.length;
//  t.is(arity, 1);
//  // t.throws(() => new CarouselComponent(), "Missing options");
// });


// test("3. Options contain DOM element", t => {
//  const domElement = dom.window.document.getElementById("carousel");
//  const component = new CarouselComponent({
//    "domElement": domElement
//  });
//  t.is(component.domElement, domElement);
// });

// test("5 domElement is a 'HTMLElement'", t => {
//  const $el = dom.window.document.getElementById("carousel");
//  const component = new CarouselComponent({
//    "domElement": $el
//  });

//  t.is(component instanceof CarouselComponent, true);
//  // t.throws(() => new CarouselComponent({
//  //   "domElement": "any string"

//  // }, "Is not HTML element"));
// });

// test("5 domElement is a 'HTMLElement' throws an error", t => {
//  const $el = dom.window.document.getElementById("carousel");
//  const component = new CarouselComponent({
//    "domElement": $el
//  });

//  t.throws(() => new CarouselComponent({
//    "domElement": "any string"

//  }, "Is not HTML element"));
// });


// test("7 Component accepts images", t => {
//  const $el = dom.window.document.getElementById("carousel");
//  const component = new CarouselComponent({
//    "domElement": $el
//  });

//  const compareArr = (arr1, arr2) => {
//    let a = arr1.every(item => {
//      return arr2.includes(item);
//    });

//    let b = arr2.every(item => {
//      return arr1.includes(item);
//    });
//    return a && b;
//  }

//  const images = [];

//  component.getImages(images);

//  t.is(compareArr(component.images, images), true);
// });


// test("8 Carousel renders the first element", t => {
//  const $el = dom.window.document.getElementById("carousel");
//  const component = new CarouselComponent({
//    "domElement": $el
//  });

//  const img1 = "C:/Users/Kasia/Desktop/Zdjecia/ja.jpg"
//  const images = [img1];

//  component.getImages(images);
//  component.render();

//  t.is(dom.window.document.getElementById("currentImage").src.toLowerCase(), img1.toLowerCase());
//  t.is(component.image, 0);
// });