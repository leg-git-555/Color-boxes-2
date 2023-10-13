document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the box-8 element
    const box8 = document.querySelector('.box-8');

    // Add a click event listener to box-8
    box8.addEventListener('click', changeColor);

    // Function to change the color of box-8
    function changeColor() {
        // Debugging log
        console.log('Box clicked!');

        // Generate a random color
        const randomColor = getRandomColor();

        // Apply the random color to box-8
        box8.style.backgroundColor = randomColor;
    }

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

