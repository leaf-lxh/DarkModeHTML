
var light = true;

window.onload = function(){
    var button = document.getElementById("change-button");
    button.onclick = function () {
        var styleRef = document.getElementById("theme-control");
        if (light === true){
            styleRef.href = "dark.css";
        }else{
            styleRef.href = "light.css";
        }
        light = !light;
    };
};


