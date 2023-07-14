// Theme 02. Array Methods (Part regarding method INDEXOF) 

const studentNames = [
    'Bob', 'Alex', 'Nick', 'John'
]

const bobikName = 'Bob'

console.log(studentNames.indexOf("Alex"))
console.log(studentNames.indexOf("Alexik"))


const myIndexOf = (arr, el) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===el) {
            return i
        }
    }
    return -1
}

console.log(myIndexOf(studentNames, "Alex"));
console.log(myIndexOf(studentNames, "Alexik"));