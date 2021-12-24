var button = document.getElementById("btn");
btn.onclick = function() {
    let a = document.getElementById("a").value;
    //let b = document.getElementById("b").value;
    if (a == "Da" || a == "da" || a == "Dạ" || a == "dạ") {
        alert("QUÀ TẶNG CHO EM NÈ");

    }
}

// function ptb1(a, b) {
//     if (a == 0 && b == 0) {
//         alert('Phuong trinh vo so nghiem');
//     } else if (a == 0 && b != 0) {
//         alert('Phuong trinh vo nghiem');
//     } else if (a != 0 && b == 0) {
//         alert('Nghiem cua phuong trinh la: 0');
//     } else if (a != 0 && b != 0) {
//         alert('Nghiem cua phuong trinh la:' + (-b / a));
//     }
// }