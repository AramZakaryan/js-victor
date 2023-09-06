//1. Реализуйте функцию, которая принимает параметром подсторку, 
// число повторов и разделитель, а возвращает сторку, 
// состоящую из указанного количества повторов подстроки 
// с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

const repeatString = (str1, num, str2) => (str1 + str2).repeat(num).slice(0, -1)

// console.log(repeatString("yo", 3, " "))
// console.log(repeatString("yo", 3, ","))


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, 
// а возвращает true, если строка начинается с указанной подстроки, 
// в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

const checkStart = (str1, str2) => str1.toLowerCase().indexOf(str2.toLowerCase()) > -1

// console.log(checkStart("Incubator", "inc"))
// console.log(checkStart("Incubator", "Inc"))
// console.log(checkStart("Incubator", "yo") )


//3. Реализуйте функцию, которая принимает параметром 
// строку и число (количество символов), 
// а возвращает строку из параметров, 
// обрезанную до указанного количества символов 
// и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, num) => str.slice(0, num) + "..."

// console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))


//4. Реализуйте функцию, которая принимает параметром 
// сторку (предложение) и возвращает самое короткое слово в предложении, 
// если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()


const getMinLengthWord = str => !str
    ? null
    : str
        .split(" ")
        .reduce((acc, el) => el.length < acc.length ? el : acc)

// console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
// console.log(getMinLengthWord(""))


//5. Реализуйте функцию, которая принимает параметром сторку (предложение)
// и возвращает то же предложение, где все слова написаны строчными, 
// но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") 
// => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = str => str
    .toLowerCase()
    .split(" ")
    .map(el => el.charAt(0).toUpperCase() + el.slice(1))
    .join(" ")

// console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))


//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. 
// Если все символы подстроки содержаться в стороке - возвращает true, 
// если нет - возвращает false. Проверка проводится без учёта регистра и 
// без учётом повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

const isIncludes = (str1, str2) =>
    str2
        .toLowerCase()
        .split("")
        .reduce((acc, el) =>
                acc && str1.toLowerCase().indexOf(el) > -1
                    ? true
                    : false
            , true)

// console.log(isIncludes("Incubator", "Cut"))
// console.log(isIncludes("Incubator", "table"))
// console.log(isIncludes("Incubator", "inbba"))
// console.log(isIncludes("Incubator", "inba"))
// console.log(isIncludes("Incubator", "Incubatorrr"))

