const boite2 = document.getElementById('color-container');
const seat = document.getElementById('seat');

function place(){
    const boite = document.getElementById('color-container');
    boite.requestFullscreen();
    //boite.style.width = max-content;
    //boite.style.height = max-content;
    console.log(seat.value[0]);
    console.log(seat);
    if (seat.value[0]==="f"){
        boite.style.backgroundColor = 'red';
    }
    if (seat.value[0]==='p'){
        boite.style.backgroundColor = 'yellow';
    }
}