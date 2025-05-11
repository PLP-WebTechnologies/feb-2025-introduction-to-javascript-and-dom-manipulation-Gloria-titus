// Wait for DOM to be fully loaded before executing script
document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Change text content dynamically
    const textChangerBtn = document.getElementById('text-changer');
    const dynamicText = document.getElementById('dynamic-text');
    
    textChangerBtn.addEventListener('click', function() {
        dynamicText.textContent = "Hooray!😊😊You succeeded!";
        dynamicText.style.color = "#4CAF50";
        dynamicText.style.fontWeight = "bold";
    });
    
    // Task 2: Modify CSS styles via JavaScript
    const styleChangerBtn = document.getElementById('style-changer');
    const styleDemo = document.getElementById('style-demo');
    
    styleChangerBtn.addEventListener('click', function() {
        // Toggle between two different styles
        if (styleDemo.style.backgroundColor !== 'lightblue') {
            styleDemo.style.backgroundColor = 'lightblue';
            styleDemo.style.width = '300px';
            styleDemo.style.height = '150px';
            styleDemo.style.color = 'darkblue';
        } else {
            styleDemo.style.backgroundColor = '#f0f0f0';
            styleDemo.style.width = '200px';
            styleDemo.style.height = '100px';
            styleDemo.style.color = '#333';
        }
    });
    
    // Task 3: Add or remove an element when a button is clicked
    const toggleElementBtn = document.getElementById('toggle-element');
    const elementContainer = document.getElementById('element-container');
    let newElementExists = false;
    let newElement = null;
    
    toggleElementBtn.addEventListener('click', function() {
        if (!newElementExists) {
            // Create new element
            newElement = document.createElement('div');
            newElement.className = 'box';
            newElement.textContent = 'I am a dynamically created element!';
            elementContainer.appendChild(newElement);
            toggleElementBtn.textContent = 'Remove Element';
            newElementExists = true;
        } else {
            // Remove the element
            elementContainer.removeChild(newElement);
            toggleElementBtn.textContent = 'Add Element';
            newElementExists = false;
        }
    });
    
    //Change heading color on hover
    const mainHeading = document.getElementById('main-heading');
    
    mainHeading.addEventListener('mouseover', function() {
        mainHeading.style.color = '#4CAF50';
    });
    
    mainHeading.addEventListener('mouseout', function() {
        mainHeading.style.color = '#333';
    });
});