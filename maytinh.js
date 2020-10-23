let inketqua = " "
let nhapketqua
let nha
let chi
let con
let tr
let so1 = null
let so2

function bay() {
    inketqua = inketqua + "7"
    document.getElementById("ketqua").innerText = inketqua

}
function nhan() {
    inketqua = inketqua + "x"
    document.getElementById("ketqua").innerText = inketqua
    nha = inketqua.split("x");
    if (so1 ==null) {
        so1=nha[0]
       
    }
    else  {
        so2=nha[1]                      
    }
}
function tam() {
    inketqua = inketqua + "8"
    document.getElementById("ketqua").innerText = inketqua
}
function chin() {
    inketqua = inketqua + "9"
    document.getElementById("ketqua").innerText = inketqua
}

/*function del() {
    inketqua = inketqua
    document.getElementById("ketqua").innerText = inketqua
}*/
// chưa biết làm nút del

function ac() {
    inketqua = "_"
    document.getElementById("ketqua").innerText = inketqua
}

function bon() {
    inketqua = inketqua + "4"
    document.getElementById("ketqua").innerText = inketqua
}

function nam() {
    inketqua = inketqua + "5"
    document.getElementById("ketqua").innerText = inketqua
}

function sau() {
    inketqua = inketqua + "6"
    document.getElementById("ketqua").innerText = inketqua

}

function chia() {
    inketqua = inketqua + ":"
    document.getElementById("ketqua").innerText = inketqua

}
function mot() {
    inketqua = inketqua + "1"
    document.getElementById("ketqua").innerText = inketqua

}
function hai() {
    inketqua = inketqua + "2"
    document.getElementById("ketqua").innerText = inketqua

}
function ba() {
    inketqua = inketqua + "3"
    document.getElementById("ketqua").innerText = inketqua

}
function cong() {
    inketqua = inketqua + "+"
    document.getElementById("ketqua").innerText = inketqua

}
function tru() {
    inketqua = inketqua + "-"
    document.getElementById("ketqua").innerText = inketqua

}
function khong() {
    inketqua = inketqua + "0"
    document.getElementById("ketqua").innerText = inketqua

}
function phay() {
    inketqua = inketqua + "."
    document.getElementById("ketqua").innerText = inketqua

}
function pi() {
    inketqua = inketqua + "pi"
    document.getElementById("ketqua").innerText = inketqua
}
function bang() {
    // chi= nha.split(":");
    // con= chi.split("+");
    // tr= con.split("-");
    // console.log(tr)

}
