import * as fs from 'node:fs'

namespace day1part2 {
  const input = fs.readFileSync('./inputs/part3.txt', 'utf-8')

  const enemyValues = {
    x: 0,
    A: 0,
    B: 1,
    C: 3,
    D: 5,
  }

  const calcEnemyValue = (enemies: string[]) => {
    const numberOfXs = enemies.filter((enemy) => enemy === 'x').length
    const modifier = 2 - numberOfXs

    let total = 0
    for (const enemy of enemies) {
      const value = enemyValues[enemy as keyof typeof enemyValues]

      if (enemy !== 'x') {
        total += value + modifier
      }
    }

    return total
  }

  const getPotionsRequired = (enemies: string) => {
    const enemiesArray = enemies.match(/.{1,3}/g)!

    let totalPotions = 0

    for (const enemyPair of enemiesArray) {
      const enemiesSplit = enemyPair.split('')

      totalPotions += calcEnemyValue(enemiesSplit)
    }

    return totalPotions
  }

  console.log(getPotionsRequired(input))
}
