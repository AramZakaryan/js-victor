// Theme 02. Array Methods (Part regarding method FILTER) 

const student1 = [
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

const student2 = [
    {
        name: 'Gago',
        age: 52,
        isMarried: true,
        scores: 65,
    },
    {
        name: 'Valod',
        age: 45,
        isMarried: true,
        scores: 79,
    },
]

const myConcut = (arr1, arr2) => {
    let res = [...arr1] // to copy the array this is effective, and just res = arr1 does not work
    if (Array.isArray(arr2)) { // if arr2 is array
        for (let i = 0; i < arr2.length; i++) {
            res.push(arr2[i])
        }

    } else { // if arr2 is NOT array
        res.push(arr2)
    }
    return res
}

console.log(myConcut(student1, student2))
console.log(myConcut(student1, "hay"))