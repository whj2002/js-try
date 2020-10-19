function b1() {document.getElementById("a1").innerHTML = "嘿";}
function b2() {window.alert(5*9+65);}
function b3() {document.write(404);}
function b4() 
    {
        var a,b,c;
        a="a";
        b="b";
        c=a+b;
        document.getElementById("a1").innerHTML=c;
    }
function b5() 
    {
        var a="选课人数未发生变化";
        window.alert(a);
    }
function b6()
    {
        var j = 8;
        j %= 7;
        document.getElementById("a2").innerHTML= j;
    }
function b7()
    {
        var x2 = 8;
        x2 = x2 + 7;
        document.getElementById("a3").innerHTML= x2;
    }
function b8()
    {
        document.getElementById("a4").innerHTML=Date();
    }