function startFun(){
    //log for debugging 
    console.log("startFun() started");
    //turn off start button 
    document.getElementById("startButton").disabled = true;
    //turn on stop buttion 
    document.getElementById("stopButton").disabled = false;
    //start marquee 
    document.getElementById("myMarquee").start();
}


function stopFun(){
    //log for debugging 
    console.log("stopFun() started");
    //turn off stop button
    document.getElementById("stopButton").disabled = true;
    //turn on start button
    document.getElementById("startButton").disabled = false;
    //stop marquee
    document.getElementById("myMarquee").stop();
}