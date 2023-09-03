const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];


const user = {
    name: "Bob",
    age: 23, isMarried: false,
    friends: ["Alex", "Nick", "John"],
};


// https://www.dev-notes.ru/articles/deep-copying-using-structured-clone/


//1. Поверхностная копия student

const copyUser = {...user}; // Object
// console.log(user === copyUser);
// console.log(user.friends === copyUser.friends);


//2. Полная (глубокая) копия student

const deepCopyStudent = {...user, friends: [...user.friends]}
// console.log(user === deepCopyStudent);
// console.log(user.friends === deepCopyStudent.friends);


// //3. Поверхностная копия students

// version 1
// const copyStudents = [...students]

// version 2
const copyStudents = students.slice()

// console.log(students === copyStudents);
// console.log(students[0] === copyStudents[0]);


//4*. Полная (глубокая) копия students

const deepCopyStudents = students.map(st => ({...st}))

// console.log(students === deepCopyStudents);
// console.log(students[0] === deepCopyStudents[0]);
// console.log(students);
// console.log(deepCopyStudents);


//Далее все преобразования выполняем не модифицируя исходный массив students


//5. Отсортируйте студентов по успеваемости (лучший идёт первым)

// console.log(deepCopyStudents.sort( (a,b)=>b.scores-a.scores))


//5a. Отсортируйте студентов по алфавиту

// console.log(deepCopyStudents.sort( (a,b)=>a.name>b.name?1:-1))


// Another version

// function sortByName(a, b) {
//     switch (a.name > b.name) {
//         case true:
//             return 1;
//         case false:
//             return -1;
//         default:
//             return 0;
//     }
// }
// const sortedByName = deepCopyStudents.sort((a, b) => a.name >= b.name ? 1 : -1);
// const sortedByName = students.sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortedByName);


//6. Сформируйте массив студентов, у которых 100 и более баллов

// console.log(deepCopyStudents.filter(st=>st.scores>=100)) 


//6a.Сформируйте массив из трёх лучших студентов

// console.log(deepCopyStudents.sort((st1,st2)=>st2.scores-st1.scores).slice(0,3)) 

// Victor's Version
// const topStudents = deepCopyStudents.splice(0, 3);
// console.log(topStudents);
// console.log(deepCopyStudents);


//6b. Объедините массивы deepCopyStudents и topStudents так,

// const studentsSortedBuScores = deepCopyStudents.sort((stA, stB) => stB.scores - stA.scores)
// const topStudents = studentsSortedBuScores.slice(0, 3)

// console.log([...topStudents, ...studentsSortedBuScores])


//7. Сформируйте массив холостых студентов

// console.log(deepCopyStudents.filter(st=>!st.isMarried))


//8. Сформируйте массив имён студентов

// console.log(deepCopyStudents.map(st=>st.name))


//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
// - запятой

// console.log(deepCopyStudents.map(st=>st.name).join(" "))
// console.log(deepCopyStudents.map(st=>st.name).join(","))


//9. Добавьте всем студентам свойство "isStudent" со значением true

// console.log(deepCopyStudents.map(st=>({...st, isStudent: true})))


//10. Nick женился. Выполните преобразование массива students

// console.log(deepCopyStudents.map(st=>st.name==="Nick"?{...st, isMarried:true}:st))


//11. Найдите Студентку по имени Ann

// console.log(deepCopyStudents.find(st=>st.name==="Ann"))


//12. Найдите студента с самым высоким баллом

// Version 1
// console.log(deepCopyStudents.sort((stA, stB) => stB.scores - stA.scores)[0])

// Version 2 (Like the Victor's Solution)
// console.log(deepCopyStudents.reduce((acc, st) => st.scores > acc.scores ? acc = st : acc))


//12a. Найдите 2 студента с самым высоким баллом

const bestStudent1 = deepCopyStudents.reduce(
    (acc, st) => st.scores > acc.scores ? acc = st : acc
)
const bestStudent2 = deepCopyStudents.reduce(
    (acc, st) => (st.scores > acc.scores && st !== bestStudent1) ? acc = st : acc
)
// console.log(bestStudent1, bestStudent2)


// Victor's Version
// let bestStudent = students[0];
// let bestStudent2 = students[1];
// for (let i = 1; i < students.length; i++) {
//     if (bestStudent.scores > bestStudent2.scores) {
//         if (students[i].scores > bestStudent2.scores) {
//             bestStudent2 = students[i];
//         }
//     } else {
//         if (students[i].scores > bestStudent.scores) {
//             bestStudent = students[i];
//         }
//     }
//
// }
// let best1 = students[0]
// let best2 = students[0]
//
// for (let i = 0; i < students.length; i++) {
//     if (students[i].scores > best1.scores) {
//         best1 = students[i]
//
//     } else if (students[i].scores > best2.scores) {
//         best2 = students[i]
//     }
//
// }


//13. Найдите сумму баллов всех студентов

// console.log(deepCopyStudents.reduce((acc, st) => acc + st.scores, 0))


// 14.Напишите функцию addFriends, которая принимает параметром массив students 
// и возвращает новый массив, при этом добавляет в каждому студенту 
// свойство .friends, значением которого является массив имён 
// всех остальных студентов из массива, за исключением собственного имени студента. 
// Т.е. в друзьях у Боба Боба быть не должно.


const friendsNames = students.map(st => st.name)
// console.log(students.map(st => (
//         {
//             ...st,
//             friends: friendsNames.filter(frName => frName !== st.name)
//         }
//     )
// ))

