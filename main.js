let countNumber = document.getElementById("count_number");
let timer;
let [sec, min, houre] = ["00", "00", "00"];

function stopWatch() {
    sec++;
    if(sec == 60){
        sec = "00";
         min++;
         if(min == 60){
            min = "00";
             houre++;
         }
    }

    let h, m, s;

    h = houre < 10 && houre > 0  ? "0" + houre : houre;
    m = min < 10 && min > 0  ? "0" + min : min;
    s = sec < 10 && sec > 0  ? "0" + sec : sec;
    
    countNumber.innerHTML = `${h}:${m}:${s}`
}

function play(){
    if(timer != null){
        clearInterval(timer)
    }
    timer = setInterval(stopWatch, 1000);
}

function pose() {
    clearInterval(timer);
}

function resate() {
    clearInterval(timer);
    [sec, min, houre] = ["00", "00", "00"];
    countNumber.innerHTML = `${houre}:${min}:${sec}`
}