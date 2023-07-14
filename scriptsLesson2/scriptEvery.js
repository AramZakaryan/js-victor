// Theme 02. Array Methods (Part regarding method EVERY) 


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

const myEvery = (arr, callBack) => {
    for (let i = 0; i < arr.length; i++) {
        if(!callBack(arr[i])){return false}
    }
    return true
}

console.log(myEvery(student, el => el.age > 18))
console.log(myEvery(student, el => el.age > 20))
console.log(myEvery(student, el => el.isMarried))