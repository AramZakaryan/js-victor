// Theme 02. Array Methods (Part regarding method FILTER) 

const student = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 85,
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
    },
]

// Universal Function: Filter Array by using callback for each element
const getFilteredArray = (arr, callBack) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        callBack(arr[i]) && res.push(arr[i])
    }
    return res
}

console.log(getFilteredArray(student, el => el.scores > 86))
console.log(getFilteredArray(student, el => el.age >= 21))