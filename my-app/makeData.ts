import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    type: 
      statusChance > 0.66
        ? 'TBP初期開発'
        : statusChance > 0.33
        ? '初期開発'
        : '開発運用',
    cat: 
      statusChance > 0.66
        ? '企画費'
        : statusChance > 0.33
        ? 'デザイン費'
        : '開発費',
    company: 
      statusChance > 0.50
        ? namor.generate() + '株式会社'
        : '株式会社' + namor.generate(),
    tag: 
      statusChance > 0.66
      ? '#デザイン費'
      : statusChance > 0.33
      ? '#イニシャル'
      : '#コンサル費',
    price: Math.floor(Math.random() * 10000000) + '円',
    status:
      statusChance > 0.66
        ? '未'
        : statusChance > 0.33
        ? '決'
        : '入',
  }
}
// type: 'TBP初期開発',
//     cat: '企画費',
//     company: '株式会社四月一日企画',
//     tag: '',
//     price: '100,000円',
//     status: '未'
export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}