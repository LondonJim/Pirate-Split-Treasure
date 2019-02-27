class SplitTreasure {

  split(arr, n) {
    let piratesTotals = []
    let pirates = []

    for (let i = 0; i < n; i++) {
      pirates.push([0])
      piratesTotals.push(0)
    }

    arr = this._sortArr(arr)

    arr.forEach((el) => {
      let minIndex = this._findMinimumIndex(piratesTotals, el)
      pirates[minIndex].push(el)
      let index = 0
      pirates.forEach((pirate) => {
        piratesTotals[index] = pirate.reduce(this._getSum)
        index++
      })

    })
    return this._checkOutcome(pirates, piratesTotals)
  }

  _checkOutcome(pirates, pirateTotals) {
    if (!!pirateTotals.reduce(function(a, b){ return (a === b) ? a : NaN; })) {
      console.log("Even Split Possible!")
      console.log(this._showSplit(pirates))
      return true
    } else {
      console.log("Even Split not Possible!")
      console.log(this._showSplit(pirates))
      return false
    }
  }

  _getSum(total, num) {
    return total + num
  }

  _findMinimumIndex(totals, el) {
    let index = 0
    totals.forEach((total) => {
      totals[index] = totals[index] + el
      index++
    })
    return totals.indexOf(Math.min.apply(null, totals))
  }

  _sortArr(array) {
    return array.sort((a, b) => b - a)
  }

  _showSplit(pirates) {
    console.log("Pirate splits:")
    pirates.forEach((pirate) => {
      pirate.shift()
      console.log(pirate)
    })
  }

}


module.exports = SplitTreasure
