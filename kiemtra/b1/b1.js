 function ktketQua(n) {
    var flag = true;
    if (n < 2) {
        flag = false
    }
    else {
        for (var i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                flag = false
                break;
            }
        }
    }
    return flag
}

function ketQua() {
    let list = document.getElementById("myList");
    const a = document.getElementById("soA").value;
    const b = document.getElementById("soB").value;
    var sum = 0;
    for (i = a; i < b; i++) {
        var isSNT = ktketQua(i);
        if (isSNT == true) {
            sum += i;
        }
    } 
    let li = document.createElement("li");
    li.innerText = sum;
    list.appendChild(li);
}