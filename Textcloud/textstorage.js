const a = localStorage.getItem("text1")
const b = localStorage.getItem("text2")
const c = localStorage.getItem("text3")
const d = localStorage.getItem("text4")
const e = localStorage.getItem("text5")
const f = localStorage.getItem("text6")
const g = localStorage.getItem("text7")
function text1(){
    const text1 = document.getElementById("w3review").value

    localStorage.setItem("text1", text1)

}
function text2(){
    const text2 = document.getElementById("w4review").value

    localStorage.setItem("text2", text2)

}
function text3(){
    const text3 = document.getElementById("w5review").value

    localStorage.setItem("text3", text3)

}
function text4(){
    const text4 = document.getElementById("w6review").value

    localStorage.setItem("text4", text4)

}
function text5(){
    const text5 = document.getElementById("w7review").value

    localStorage.setItem("text5", text5)

}
function text6(){
    const text6 = document.getElementById("w8review").value

    localStorage.setItem("text6", text6)

}
function text7(){
    const text7 = document.getElementById("w9review").value

    localStorage.setItem("text7", text7)

}

document.getElementById("w3review").value += a
document.getElementById("w4review").value += b
document.getElementById("w5review").value += c
document.getElementById("w6review").value += d
document.getElementById("w7review").value += e
document.getElementById("w8review").value += f
document.getElementById("w9review").value += g

