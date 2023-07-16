const students = [
    {
        id: "1",
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: "2",
        name: 'Alex',
        age: 16,
        isMarried: true,
        scores: 89,
    },
    {
        id: "3",
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 85,
    },
    {
        id: "4",
        name: 'John',
        age: 29,
        isMarried: false,
        scores: 100,
    },
]

// const stsObject = {}
//
// for (let i = 0; i < students.length; i++) {
//     stsObject[students[i].id] = students[i]
//     delete stsObject[students[i].id].id
// }

// console.log(stsObject)

// stsObject = {
// 1: {name: 'Bob', age: 22, isMarried: true, scores: 85}
// 2: {name: 'Alex', age: 21, isMarried: true, scores: 89}
// 3: {name: 'Nick', age: 20, isMarried: false, scores: 85}
// 4: {name: 'John', age: 19, isMarried: false, scores: 100}
// }


// const ages = {}
// ages = {
//     "19": 2,
//     "20": 1,
//     "22": 1
// }


// for (let i = 0; i < students.length; i++) {
//     Object.keys(ages).includes(String(students[i].age)) ?
//         ages[students[i].age] += 1 :
//         ages[students[i].age] = 1
//
// }


// const agesFull = {}
//
// for (let i = 0; i < students.length; i++) {
//     Object.keys(agesFull).includes(String(students[i].age)) ?
//         agesFull[students[i].age].push(students[i]) :
//         agesFull[students[i].age] = [students[i]]
//
// }

let oldest = students[0]
let youngest = students[0]
for (let i = 1; i < students.length; i++) {
    if (oldest.age < students[i].age ) oldest=students[i] 
    if (youngest.age > students[i].age ) oldest=students[i]
}


console.log(
    oldest, youngest
)