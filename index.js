const canvas = getElementById('board');
const canvaswrap = getElementById('canvas-w')

document.getElementById('date').innerHTML = Date();

const newDiv = document.createElement('div');
newDiv.innerHTML = "I'm a new div!";

function newdiv(){
    Object.assign(newDiv.style, {
        position: 'absolute',
        left:  '100px',
        top: '100px',
        backgroundColor: 'rgba(255, 255, 0, 0.8)',
        padding: '5px',
        border: '1px solid black',
        pointerEvents: 'none'
    });

    canvaswrap.appendChild(newDiv);
}