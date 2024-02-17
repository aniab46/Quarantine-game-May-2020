
function sleep(ms) {
    
    return new Promise(resolve => setTimeout(resolve,ms));
}

function ranNumber() {
    var ran=Math.ceil(Math.random()*6);
    return ran;
    
    
}


var ranUp=0;
var score=12;
const click=new Audio("sounds/boxapp.mp3");
const scoreSound=new Audio("sounds/bigelevatoractivate.mp3");
const congratulationSound=new Audio("sounds/menu_levelup.mp3");
async function quarantineGame() {

    if(ranUp<275){
        
        click.play();
        var ball=document.getElementById('clickBody').classList;
        var ballClasslist=ball.add('clickTransition');
        await sleep(500);

        ball.remove('clickTransition');
        var ranScore=ranNumber();
        document.getElementById('scorePoint').innerHTML=ranScore;

        ranUp+=ranScore*19;
        score--;

        var image=document.getElementById('gameMainBodys').getElementsByTagName('img');
        image[0].style.marginBottom=ranUp;
        scoreSound.play();
        
        
    }
    else {
        
        document.getElementById('congratulation').style.display='block';
        congratulationSound.play();
        
    }
    
    document.getElementById('scoreMy').textContent=score;
    
    console.log(score);
    
}
