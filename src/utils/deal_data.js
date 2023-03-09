// 一般是接受一个数组arr [{[keyName]:[...]},{[keyName]:[...]}]
// [{name:'yk',id:1},{name:'hy',id:2}] => { "1":[{name:'yk,id:1}],"2":[{name:'hy,id:2}]}
export function handleDataByGroup(arr, keyName) {
  const groupedObject = {}

  for (let item of arr) {
    const value = groupedObject[item[keyName]]
    if (!value) {
      groupedObject[item[keyName]] = []
    }
    groupedObject[item[keyName]].push(item)
  }
  return groupedObject
}
