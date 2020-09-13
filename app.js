const $climate = document.getElementById("climate");
const $consumption = document.getElementById("consumption");
const $resources = document.getElementById("resources");
const $people = document.getElementById("people");
$climate.onclick = () => {
    document.body.style.background = "url('https://i1.faceprep.in/prograd-junior/climate-change-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $climate.style.backgroundColor = "#2f80ed";
    $consumption.style.backgroundColor = "transparent";
    $resources.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "2,911,343,321";
    document.getElementById("cause").innerHTML = "Tons of CO2 emitted in the atmosphere";
}
$consumption.onclick = () => {
    document.body.style.background = "url('https://i1.faceprep.in/prograd-junior/food-wastage-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $climate.style.backgroundColor = "transparent";
    $consumption.style.backgroundColor = "#27ae60";
    $resources.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "878,262,909";
    document.getElementById("cause").innerHTML = "Tons of food lost or wasted";
}
$resources.onclick = () => {
    document.body.style.background = "url('https://i1.faceprep.in/prograd-junior/natural-resources-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $climate.style.backgroundColor = "transparent";
    $consumption.style.backgroundColor = "#27ae60";
    $resources.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "878,262,909";
    document.getElementById("cause").innerHTML = "Tons of food lost or wasted";
}