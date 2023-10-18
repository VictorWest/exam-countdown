var deadLine = new Date("dec 4, 2023, 8:00:00").getTime();

var x = setInterval(function(){
    var currentDate = new Date().getTime();
    var d = deadLine - currentDate;

    var days = Math.floor(d / (1000 * 60 * 60 * 24));
    console.log(days);
    document.querySelector(".firstRow").innerHTML = `${days}`;
    var hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours);
    document.querySelector(".secondRow").innerHTML = `${hours}`;
    var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes);
    document.querySelector(".thirdRow").innerHTML = `${minutes}`;
    var seconds = Math.floor((d % (1000 * 60)) / (1000));
    console.log(seconds);
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
            console.log((document.querySelectorAll("p")).length);
        }
        
    }
}, 1000);


