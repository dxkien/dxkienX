function getNum() {
    let inNer=document.getElementById("in");
    let inNer1=document.getElementById("in1");
    let inNer2=document.getElementById("in2");
    let luachon=document.getElementById("input").value;
    let a= Math.floor(Math.random() * 10);
    inNer.innerHTML='Số may mắn:'+a+''
   
    console.log(a);
    if (luachon>10) {
        inNer1.innerHTML="Mời Bạn Nhập lại!"
        return false;
        
    }
    else  if (luachon==a) {
    console.log("Chúc mừng bạn đã đoán đúng");
    inNer2.innerHTML="Chúc mừng bạn đã đoán đúng"
}
    else  {
        console.log("chúc bạn may mắn lần sau");
        inNer2.innerHTML="Chúc bạn may mắn lần sau";
        
        
}

}     
