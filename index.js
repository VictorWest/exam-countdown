var deadLine = new Date("mar 18, 2024, 8:00:00").getTime();

document.querySelector(".copyright").innerText = `Association of Computer Engineering Students \u00A9 ${new Date().getFullYear()}`

var x = setInterval(function(){
    var currentDate = new Date().getTime();
    var d = deadLine - currentDate;

    var days = Math.floor(d / (1000 * 60 * 60 * 24));
    document.querySelector(".firstRow").innerHTML = `${days}`;
    var hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector(".secondRow").innerHTML = `${hours}`;
    var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector(".thirdRow").innerHTML = `${minutes}`;
    var seconds = Math.floor((d % (1000 * 60)) / (1000));
    document.querySelector(".fourthRow").innerHTML = `${seconds}`;

    if(d < 0){
        clearInterval(x);
        document.getElementById("heading").innerHTML = `SUCCESS IN YOUR EXAMS`;
        document.querySelector(".firstRow").innerHTML = `...`;
        document.querySelector(".secondRow").innerHTML = `...`;
        document.querySelector(".thirdRow").innerHTML = `...`;
        document.querySelector(".fourthRow").innerHTML = `...`;
        for(var i = 0; i < (document.querySelectorAll("p")).length; i++){
            document.querySelectorAll("p")[i].innerHTML = "";
        }
    }
}, 1000);

