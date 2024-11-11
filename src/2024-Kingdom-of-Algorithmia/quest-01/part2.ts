import * as fs from 'node:fs'

namespace day1part2 {
  const input = fs.readFileSync('./inputs/part2.txt', 'utf-8')

  const enemyValues = {
    x: 0,
    A: 0,
    B: 1,
    C: 3,
    D: 5,
  }

  const calcEnemyValue = (enemyOne: string, enemyTwo: string) => {
    const enemyOneValue = enemyValues[enemyOne as keyof typeof enemyValues]
    const enemyTwoValue = enemyValues[enemyTwo as keyof typeof enemyValues]

    if (enemyOne === 'x') {
      return enemyTwoValue
    }

    if (enemyTwo === 'x') {
      return enemyOneValue
    }

    return enemyOneValue + enemyTwoValue + 2
  }

  const getPotionsRequired = (enemies: string) => {
    const enemiesArray = enemies.match(/.{1,2}/g)!

    let totalPotions = 0

    for (const enemyPair of enemiesArray) {
      const enemiesSplit = enemyPair.split('')
      const enemyOne = enemiesSplit[0]
      const enemyTwo = enemiesSplit[1]

      totalPotions += calcEnemyValue(enemyOne, enemyTwo)
    }

    return totalPotions
  }

  console.log(getPotionsRequired(input))
}
