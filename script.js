// Theme 02. Array Mathods 

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

// Function: Creates Array from names of students
const studentNames = arr => {
    const getStudentName = st => st.name // Function: returns name of each student
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res[i] = getStudentName(arr[i])
    }
    return res
}
console.log(studentNames(student))

// Function: Adds in Array "isStudent" for all students
const addIsStudentAll = arr => {
    const addIsStudent = st => { // Function: adds "isStudent" of each student
        return {...st, isStudent: true}
    } 
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res[i] = addIsStudent(arr[i])
    }
    return res
}
console.log(addIsStudentAll(student))
