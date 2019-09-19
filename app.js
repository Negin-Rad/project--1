var hotel = { city: "tehran", name: "espinas", star: "5" }
var property = prompt("Enter property to see the result..");
var result = prompt("The value of " + property + " is  " + hotel[property] + "  Do you want to update ?");
(result == "yes") ? hotel[property] = prompt("Enter Your New Value"): i++;
console.log(hotel);