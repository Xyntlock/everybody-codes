import * as fs from 'node:fs'

namespace day1part1 {
  const input = fs.readFileSync('../inputs/part1.txt', 'utf-8')

  const getPotionsRequired = (enemies: string) => {
    const enemiesArray = enemies.split('')

    let totalPotions = 0

    for (const enemy of enemiesArray) {
      switch (enemy) {
        case 'B':
          totalPotions += 1
          break
        case 'C':
          totalPotions += 3
          break
        default:
          break
      }
    }

    return totalPotions
  }

  console.log(getPotionsRequired(input))
}
