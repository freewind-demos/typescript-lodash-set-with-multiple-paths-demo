import set from 'lodash/fp/set'

function mergeWithMultiplePaths(obj: any, config: { [key: string]: any }) {
  return Object.entries(config).reduce((a, [key, value]) => {
    return set(key, value, a)
  }, obj)
}

const ori = {
  aaa: {
    aaa: 0
  }
};

const merged = mergeWithMultiplePaths(ori,
  {
    'aaa.bbb': 111,
    'aaa.ccc': 222,
  }
)

console.log(ori)
console.log(merged)
