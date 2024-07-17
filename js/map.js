// Function to handle highlighting based on user input
function highlightCity(cityName) {
  const p = document.querySelectorAll("path");

  p.forEach(function(item) {
      const dataName = item.getAttribute("data-name");
      if (dataName === cityName.toLowerCase()) {
          item.classList.add("highlight"); 
      } else {
          item.classList.remove("highlight"); 
      }
  });
}

// Function to get user input and trigger highlighting
function getUserInputAndHighlight() {
  const userInput = prompt("你在哪個城市？"); 
  if (userInput) {
      highlightCity(userInput);
  }
}

// Event listener for path clicks 

const p = document.querySelectorAll("path");
var cityName="";
p.forEach(function(item) {
  
  item.addEventListener("click", function() {
      cityName = item.getAttribute("data-name");
      console.log(cityName)
      return cityName;
  });
  return cityName;
});


getUserInputAndHighlight();
