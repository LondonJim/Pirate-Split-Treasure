var expect = require('chai').expect
var splitTreasure = require('./splitTreasure')

describe('splitTreasure()', () => {

  it('split the array based on number of elements', () => {

    let arr = [4, 4, 4]

    let result = splitTreasure(arr)

    expect(result).to.be.equal(3)
  })



})
