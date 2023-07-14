// Theme 02. Array Methods (Part regarding method INCLUDES) 


const studentNames = [
    'Bob', 'Alex', 'Nick', 'John'
]

const bobikName = 'Bob'

// Function like method INCLUDES
const myIncludes = (arr, el) => {
    // Alternative version02:
    // let res
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            return true
            // Alternative version02:
            // res = true
            // break
        }
    }
    return false
    // Alternative version02:
    // return res
}

console.log(myIncludes(studentNames, bobikName))