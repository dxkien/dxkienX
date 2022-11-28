document.getElementById("but1").onclick= ()=> {
    document.getElementById("kq1").innerHTML= findOppositeNumber(document.getElementById("so1").value, document.getElementById("so2").value)
}
document.getElementById("but2").onclick= ()=> {
    document.getElementById("kq2").innerHTML= merge2String(document.getElementById("chuoi1").value, document.getElementById("chuoi2").value)
}
function findOppositeNumber(n, inputNumber) {
if(parseInt(inputNumber) +( parseInt(n) / 2 )> parseInt(n)) {
    return parseInt(inputNumber) +( parseInt(n) / 2) - parseInt(n)
} 
else {
    return parseInt(inputNumber) + (parseInt(n) / 2)
}
}

function merge2String(str1, str2) {
let result= []
if(str1.length < str2.length) {
    let a= str2.slice(str1.length)
    let a1= str2.slice(0, str1.length) 
    str1.split("").map((item, key)=> {
        return result.push(str1[key], a1[key])
    })
    result.push(a)
    return result.join("")
}
else { 
    let a= str1.slice(str2.length) 
    let a1= str1.slice(0, str2.length) 
    str2.split("").map((item, key)=> {
        return result.push(a1[key], str2[key])
    })
    result.push(a)
    return result.join("")
}
}