const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")
const lnk = document.getElementById("lnk")

const handler1 = (ev) => {
    console.log(ev.currentTarget.id)
    ev.stopPropagation()
}
const handler2 = (ev) => {
    console.log(ev.currentTarget.id)
}

const handler3 = (ev) => {
    console.log(ev.currentTarget.id)
}


const handler4 = (ev) => {
    ev.preventDefault()
    console.log(ev.currentTarget.id)
}

sm.addEventListener("click", handler1);
md.addEventListener("click", handler2);
bg.addEventListener("click", handler3);

lnk.addEventListener("click", handler4)

