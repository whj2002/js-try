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
function b8()
    {
        document.getElementById("a4").innerHTML=Date();
    }
function b4()
    {
        var a = Math.floor(Math.random()*100) + 1;
        if (a <= 5) {var b = "无敌"}
        else    if (a <= 25) {var b = "欧皇"}
                else    if (a <= 50) {var b = "较好"}
                        else    if (a <= 75) {var b = "普通"}
                                else    if (a <= 95) {var b = "较差"}
                                        else {var b = "非酋"}
        var c = Math.floor(Math.random()*100) + 1;
        if (c <= 5) {var d = "完全听懂并觉得有点简单"}
        else    if (c <= 25) {var d = "勉强听懂"}
                else    if (c <= 50) {var d = "大部分听懂了"}
                        else    if (c <= 75) {var d = "半懂半不懂"}
                                else    if (c <= 95) {var d = "完全不懂"}
                                        else {var d = "不但没听懂，还在课上出糗"}
        document.getElementById("a5").innerHTML="您今天的运气怎么样呢：" + "“" + b + "”";
        document.getElementById("a6").innerHTML="您明天的课怎么样呢：" + d;
    }