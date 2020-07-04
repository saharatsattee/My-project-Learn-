const expect = require('chai').expect;
const Calculate = require('../src/sum.js');
describe('Test class Calculate', () => { //คำอธิบายว่าเราจะ Test เรื่องอะไร
  let calculate;
  beforeEach(() => { //before คือ เราจะทำ function นี่ก่อนทำ Test case ครั้งแรกครั้งเดียว
    calculate = new Calculate();
  })
  it('should be success when value1 = 10, value2 = 15, expected 25', done => {
    // arrange
    const value1 = 10;
    const value2 = 15;
    // act
    const total = calculate.sum(value1, value2);
    // assert
    expect(24).to.equal(total);
    done()
  });
});

// afterEach เมื่อจบ Test case แต่ละ Test case เราจะทำ function นี้
// after เมื่อจบทุก Test case ถึงจะทำ function นี้