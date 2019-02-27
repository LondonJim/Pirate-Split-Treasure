var expect = require('chai').expect
var SplitTreasure = require('./splitTreasure')

describe('SplitTreasure', () => {

  beforeEach(() => {
    splitTreasure = new SplitTreasure
  })

  describe('#split', () => {

    // True outcome
    it('split the array evenly 4 ways based on number and total of elements', () => {
      let arr = [4, 4, 4, 4]

      expect(splitTreasure.split(arr, 4)).to.be.equal(true)
    })

    it('split the array evenly 2 ways based on number and total of elements', () => {
      let arr = [27, 7, 20]

      expect(splitTreasure.split(arr, 2)).to.be.equal(true)
    })

    it('split the array evenly 2 ways based on number and total of elements', () => {
      let arr = [6, 3, 2, 4, 1]

      expect(splitTreasure.split(arr, 2)).to.be.equal(true)
    })

    it('split the array evenly 4 ways based on number and total of elements', () => {
      let arr = [3, 2, 7, 7, 14, 5, 3, 4, 9, 2]

      expect(splitTreasure.split(arr, 4)).to.be.equal(true)
    })

    it('split the array evenly 4 ways based on number and total of elements', () => {
      let arr = [3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2]

      expect(splitTreasure.split(arr, 4)).to.be.equal(true)
    })

    // False outcome
    it('split the array evenly 4 ways based on number and total of elements', () => {
      let arr = [4, 4, 4, 4, 4]

      expect(splitTreasure.split(arr, 4)).to.be.equal(false)
    })

    it('split the array evenly 2 ways based on number and total of elements', () => {
      let arr = [27, 7, 20, 3]

      expect(splitTreasure.split(arr, 2)).to.be.equal(false)
    })

    it('split the array evenly 2 ways based on number and total of elements', () => {
      let arr = [6, 3, 2, 4, 1, 1]

      expect(splitTreasure.split(arr, 2)).to.be.equal(false)
    })

    it('split the array evenly 4 ways based on number and total of elements', () => {
      let arr = [3, 2, 7, 7, 14, 5, 3, 4, 9, 2, 1]

      expect(splitTreasure.split(arr, 4)).to.be.equal(false)
    })

    it('split the array evenly 4 ways based on number and total of elements', () => {
      let arr = [3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2]

      expect(splitTreasure.split(arr, 4)).to.be.equal(false)
    })

  })

})
