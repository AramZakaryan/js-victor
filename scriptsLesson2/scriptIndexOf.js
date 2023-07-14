// Theme 02. Array Methods (Part regarding method INDEXOF) 

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


const mySlice = (arr, indStart, indEnd) => {
    let res = []
    for (let i = indStart; i < indEnd; i++) {
        res.push(arr[i])
    }
    return res
}

console.log(mySlice(student, 1, 3));