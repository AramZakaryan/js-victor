// Theme 02. Array Methods (Part regarding method MAP)

const studentEven = [
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

const studentOdd = [
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
    {
        name: 'Gago',
        age: 59,
        isMarried: false,
        scores: 800,
    },
]

// Function: Reverse Array elements
const myReverse = (arr) => {
    let res = []
    for (let i = arr.length-1; i >= 0; i--) {
        res.push(arr[i])
    }
    return res
}

console.log(myReverse(studentEven))
console.log(myReverse(studentOdd))

// Function: Reverse Array elements (Victor version)
// without creating new Array
const myReverse2 = (arr) => {
    let temp // temporary variable
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        temp = arr[i]
        arr[i] = arr[arr.length -1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

console.log(myReverse2(studentEven))
console.log(myReverse2(studentOdd))
