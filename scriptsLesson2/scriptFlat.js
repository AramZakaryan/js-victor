// Theme 02. Array Methods (Part regarding method FLAT)


const myArr = [0, 1, 2, 3, 4, 5]
const myArr1 = [0, 1, 2, [3, 4, 5], 6, 7]
const myArr2 = [0, 1, 2, [3, [4, 5, 6,], 7], 8, 9]
const myArr3 = [0, 1, 2, [3, [4, [5, 6,], 7], 8], 9, 10]
const myArr4 = [0, 1, 2, [3, [4, [5, [6, 7], 8], 9], 10, 11], 12, 13]


// Function like method FLAT (with Recursion)
const myFlat = (arr, level = 1) => {

    let res = [] // Array will be generated if level is 1
    let resFinal = [] // Array to return

    // loop to generate res (in case of level 1)
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                res.push(arr[i][j])
            }
        } else {
            res.push(arr[i])
        }
    }

    // Checking of condition for recursion (if level is more than 1)
    if (level > 1) {
        resFinal = myFlat(res, level - 1) // Recursive function
    } else {
        resFinal = res
    }
    return resFinal
}

console.log(myArr2.flat(2))
console.log(myFlat(myArr2, 2))

console.log(myArr3.flat(3))
console.log(myFlat(myArr3, 3))

console.log(myArr4.flat(4))
console.log(myFlat(myArr4, 4))




// Function like method FLAT (withOUT Recursion)
const myFlat1 = (arr, level = 1) => {

    let res = []
    res[level + 1] = [...arr]

    for (let l = level; l > 0; l--) {
        res[l] = []
        for (let i = 0; i < res[l + 1].length; i++) {
            if (Array.isArray(res[l + 1][i])) {
                for (let j = 0; j < res[l + 1][i].length; j++) {
                    res[l].push(res[l + 1][i][j])
                }
            } else {
                res[l].push(res[l + 1][i])
            }
        }
    }
    return res[1]
}

console.log(myArr2.flat(2))
console.log(myFlat1(myArr2, 2))

console.log(myArr3.flat(3))
console.log(myFlat1(myArr3, 3))

console.log(myArr4.flat(4))
console.log(myFlat1(myArr4, 4))