# Split the treasure

A crew of treasure hunters have acquired a chest of valuable gems. However they are so progressive they will only take the treasure if it can be split equally between them, otherwise they will just bury it again.

Each gem are represented by an integer which represents its value (in your choice of currency) and the treasure chest can be represented by a list of all the values.

E.g. [4, 4, 4] represents three gems each of value 4

The code takes the original array of gems and then sorts them from highest to lowest value. A new array is created with nested arrays representing each pirate . Gems are placed into these nested arrays one at time checking that the gems placed are going into the nested array with the lowest gem worth. Once all gems are placed the totals are checked and if they are all equal then an even split can occur.

* refactoring still to take place as some functions can be reduced in size

## Installation

`git clone git@github.com:LondonJim/Pirate-Split-Treasure.git`

`cd Pirate-Split-Treasure`

`npm install`

## Executing

Run the code within Node:

`node`

`let SplitTreasure = require('./splitTreasure')`

`splitTreasure = new SplitTreasure`

`splitTreasure.split([6, 3, 2, 4, 1],2)`

Output:
```
Even Split Possible!
Pirate splits:
[ 6, 2 ]
[ 4, 3, 1 ]
true
```

## Testing

All tests are written using Mocha/Chai

Run tests:
`npm test`


## Example chests

[4,4,4] can be split between three treasure seekers with each one receive one gem

[27,7,20] can only be split between two treasure seekers

[6,3,2,4,1] can be split between two treasure seekers (8 each, [6, 2], [3,4,1]) but not between three or four

[3,2,7,7,14,5,3,4,9,2] can be split between four treasure seekers.

## Bonus question

Given four treasure seekers and a chest with the following gems: [3,3,3,3,2,2,2,2,2,2,2,2]. Can the treasure be split?
