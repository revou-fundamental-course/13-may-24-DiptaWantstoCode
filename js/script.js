document.getElementById("switch-keliling").onclick = function(){
    document.getElementById("keliling").scrollIntoView();
}
//Luas

document.getElementById("hitung-btn").onclick = function(){
    
    var a = document.getElementById("inputAlas").value;
    var t = document.getElementById("inputTinggi").value;

    var hitung = (a * t)/2;

    document.getElementById("hasil").innerHTML = "L = 1/2 x alas x tinggi <br> L = " + hitung;
}   

//Keliling

document.getElementById("hitung-keliling").onclick = function(){
    
    var s1 = document.getElementById("inputS1").value;
    var s2 = document.getElementById("inputS2").value;
    var s3 = document.getElementById("inputS3").value;

    var hitungkel = parseInt(s1) + parseInt(s2) + parseInt(s3);

    document.getElementById("hasil-keliling").innerHTML = "K = S1 + S2 + S3 <br> K = " + hitungkel;
}   

document.getElementById("reset-btn").onclick = function(){
    document.getElementById("inputAlas").value = ""
    document.getElementById("inputTinggi").value = ""
    
}

document.getElementById("reset-keliling").onclick = function (){
    document.getElementById("inputS1").value = ""
    document.getElementById("inputS2").value = ""
    document.getElementById("inputS3").value = ""
}