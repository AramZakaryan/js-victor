// Theme 02. Array Methods (Part regarding method MAP)

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
// const studentNames = arr => {
//     const callBackFunction = st => st.name // Function: returns name of each student
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         res[i] = callBackFunction(arr[i])
//     }
//     return res
// }
// console.log(studentNames(student))

// Function: Adds in Array "isStudent" for all students
const addIsStudentAll = arr => {
    const callBackFunction = st => ({...st, isStudent: true}) // Function: adds "isStudent" of each student
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res[i] = callBackFunction(arr[i])
    }
    return res
}
// console.log(addIsStudentAll(student))


////////////////////////////////////////


// Universal Function: Transforms Array by using callback for each element
const callBackForName = st => st.name // Function: returns name of each student
const callBackForIsStudent = st => ({...st, isStudent: true}) // Function: adds "isStudent" of each student
 

const getTransformedArray = (arr, callBack) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res[i] = callBack(arr[i])
    }
    return res
}

// console.log(getTransformedArray(student, callBackForName))
// console.log(getTransformedArray(student, callBackForIsStudent))

// Calling getTransformedArray in a way we call method MAP
// (by writing arrow anonymous function expression)
console.log(getTransformedArray(student, el=>el.scores))
console.log(getTransformedArray(student, el=>el.isMarried))
console.log(getTransformedArray(student, el=>({...el, isStudent:true})))
console.log(getTransformedArray(student, el=>({...el, isArmenien:false})))