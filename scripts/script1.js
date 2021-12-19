/**
 * Initial page
 */
var gridSize = 16;
createGrid(gridSize);

/**
 * Event Handlers
 */
//Clear the grid when Clear button is clicked
var clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', function() {
    createGrid(gridSize);
});

/**
 * Slider
 */
var slider = document.getElementById('sliderRange');
var output = document.getElementById('demo');
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  gridSize = this.value;
  output.innerHTML = this.value;
  createGrid(this.value);
}

/**
 * Functions
 */
function createGrid(gridSize) {
    //Remove any existing gridSquares
    var existingGridSquares = document.getElementsByClassName('gridSquare');
    while(existingGridSquares.length > 0)
    {
        existingGridSquares[0].parentNode.removeChild(existingGridSquares[0]);
    }

    var container = document.getElementById('container');

    //Set max column for grid
    container.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr)';

    //Create grid
    for(let i = 0; i < gridSize*gridSize; i++)
    {
        var square = document.createElement('div');
        square.setAttribute('class', 'gridSquare');
        container.appendChild(square);
    }
    setMouseOverEffect();
}

function setMouseOverEffect() {
    var gridSquares = document.querySelectorAll('.gridSquare');
    gridSquares.forEach((div) => {
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'black';
        });
    });
}