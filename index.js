const csv = require('csvtojson')

const award = [
  'เสื้อฮู้ด 1',
  'เสื้อฮู้ด 2',
  'เสื้อฮู้ด 3',
  'เสื้อฮู้ด 4',
  'เสื้อฮู้ด 5',
  'เสื้อฮู้ด 6',
  'เสื้อฮู้ด 7',
  'เสื้อฮู้ด 8',
  'เสื้อฮู้ด 9',
  'เสื้อฮู้ด 10',
  'Keyboard 1',
  'Keyboard 2',
  'Keyboard 3',
  'Keyboard 4',
  'Keyboard 5',
  'Monitor 1',
  'Monitor 2',
]
let randomCount = 0
let winner = 0
csv()
  .fromFile('./survey.csv')
  .then(candidates => {
    setInterval(() => {
      winner = Math.floor(Math.random() * candidates.length)
      if (randomCount < 17) {
        console.log(
          `ผู้โชคดีท่านที่ ${randomCount + 1}: คุณ ${
            candidates[winner]['email']
          } ได้รับ ${award[randomCount]}`
        )
        randomCount++
      }
    }, 5000)
  })
