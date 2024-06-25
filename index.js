function distanceFromHqInBlocks(blocks) {
    let distance;
    if (blocks > 42){
        distance = blocks - 42
    }
    else if (blocks < 42){
        distance = 42 - blocks
    }
    return distance;
}
function distanceFromHqInFeet(blocks) {
    let distanceInFeet;
    distanceInFeet =  distanceFromHqInBlocks(blocks) * 264;
    return distanceInFeet;   
}
function distanceTravelledInFeet(start, fin) {
    let distanceTravelled;
    if (start > fin){
        distanceTravelled = (start - fin) * 264;
    }
    if (fin > start){
        distanceTravelled = (fin - start) * 264;
    }
    return distanceTravelled;
}
function calculatesFarePrice(start, fin) {
    let distanceTravelledF;
    if (start > fin){
        distanceTravelledF = (start - fin) * 264;
    }
    if (fin > start){
        distanceTravelledF = (fin - start) * 264;
    }
    let fare;
    if (distanceTravelledF <= 400){
        fare = 0;
    }
    else if (distanceTravelledF > 400 && distanceTravelledF <= 2000){
        fare = (distanceTravelledF - 400) * 0.02;
    }
    else if (distanceTravelledF > 2000 && distanceTravelledF <= 2500){
        fare = 25;
    }
    else {
        fare = "cannot travel that far";
    }
    return fare;
}