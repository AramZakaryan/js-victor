// const students = ["Vzgo", "vzgo", "Seroj","seroj" , "Gago", "gago", "Peto", "peto"]
//
// console.log(students.map(el=>el.toLowerCase()).sort())


// const numbers = [349, 194, 643, 45, 22, -88]

// console.log(numbers.toSorted((a, b) => a > b ? 123 : -123))
// console.log(numbers)

// console.log(numbers)
// console.log(numbers)


// const people = [
//     {
//         name: "Gurgen",
//         age: 36
//     },
//     {
//         name: "Valod",
//         age: 26
//     },
//     {
//         name: "Seroj",
//         age: 18
//     },
//     {
//         name: "Mesrop",
//         age: 45
//     },
//     {
//         name: "Anush",
//         age: 18
//     },
// ]
//
// console.log(people.sort((a,b)=> a.age-b.age))


const num = [349, 194, 643, 45, 22, -88, 89, 1000, 2000, 3000]

let count =0
for (let j = 0; j < num.length-1; j++) {
    let isSorted = true
    for (let i = 0; i < num.length-1-j; i++) {
        if (num[i] > num[i + 1]) {
            isSorted=false
            let temp = num[i + 1]
            num[i + 1] = num[i]
            num[i] = temp
        } 
        if (isSorted) break
    }
}

console.log(num, count)