function init() {

    let landButton = document.getElementById("landing");
    let takeoffButton = document.getElementById("takeoff");
    let missionAbort = document.getElementById("missionAbort");
    let upButton = document.getElementById("upButton");
    let downButton = document.getElementById("downButton");
    let leftButton = document.getElementById("leftButton");
    let rightButton = document.getElementById("rightButton");
    let rocket = document.getElementById("rocket");
    let positionX = 0;
    let positionY = 0;

    let response = window.confirm("Confirm that the shuttle is ready for takeoff")
        if (response === true) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight"
            document.getElementById("shuttleBackground").style.backgroundColor = "blue"
            document.getElementById("spaceShuttleHeight").innerHTML = "10000"
         };

    landButton.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed."
        document.getElementById("shuttleBackground").style.backgroundColor = "green"
        document.getElementById("spaceShuttleHeight").innerHTML = "0"
        });

    missionAbort.addEventListener("click", function () {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response === true) {
        document.getElementById("flightStatus").innerHTML = "Mission aborted."
        document.getElementById("shuttleBackground").style.backgroundColor = "green"
        document.getElementById("spaceShuttleHeight").innerHTML = "0"
        }
    });



    upButton.addEventListener("click", function () {
        let shuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML)
        shuttleHeight += 10000
        document.getElementById("spaceShuttleHeight").innerHTML = String(shuttleHeight)
        moveRocket (0, -10)
        });

    downButton.addEventListener("click", function () {
        let shuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML)
        shuttleHeight -= 10000
        document.getElementById("spaceShuttleHeight").innerHTML = String(shuttleHeight)
         moveRocket (0, 10)   
         });

    leftButton.addEventListener("click", function () {
         moveRocket (-10, 0)                 
         });

    rightButton.addEventListener("click", function () {
        moveRocket (10, 0)
        });

    function moveRocket(moveX, moveY){
        positionX += moveX;
        positionY += moveY;
        rocket.style.transform = `translate(${positionX}px, ${positionY}px)`;
    };


}


window.onload = init;