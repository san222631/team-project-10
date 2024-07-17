var cityName = "";

// handle user input
function highlightCity(cityName) {
    const p = document.querySelectorAll("path");

    p.forEach(function(item) {
        const dataName = item.getAttribute("data-name");
        if (dataName === cityName) {
            item.classList.add("highlight"); 
        } else {
            item.classList.remove("highlight"); 
        }
    });
}

// delete this one when merge location 
function getUserInputAndHighlight() {
    const userInput = prompt("你在哪個城市？"); 
    if (userInput) {
        highlightCity(userInput);
    }
}

// if user click map 
const p = document.querySelectorAll("path");
p.forEach(function(item) {
    item.addEventListener("click", function() {
        cityName = item.getAttribute("data-name");
        console.log(cityName);
        highlightCity(cityName);  
    });
});

// Trigger user input prompt on load
getUserInputAndHighlight();

  

