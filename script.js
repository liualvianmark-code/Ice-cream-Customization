let pricePerScoop = 2.00; // Price per scoop
let conePrice = 0.50; // Price for cone
let cupPrice = 0.00; // Price for cup

function updatePrice() {
    let scoops = document.getElementById("scoops").value;
    let flavors = document.querySelectorAll('input[type="checkbox"]:checked');
    let container = document.querySelector('input[name="container"]:checked');

    let totalPrice = 0;

    // Calculate price based on scoops
    totalPrice += scoops * pricePerScoop;

    // Add container price
    if (container) {
        totalPrice += container.value === "Cone" ? conePrice : cupPrice;
    }

    // Update summary
    let selectedFlavors = Array.from(flavors).map(flavor => flavor.value).join(", ");
    document.getElementById("summary").innerText = `Scoops: ${scoops}, Flavors: ${selectedFlavors}, Container: ${container ? container.value : 'None'}`;
    
    // Update price display
    document.getElementById("price").innerText = `Total Price: $${totalPrice.toFixed(2)}`;
}

function addToCart() {
    alert("Your ice cream has been added to the cart!");
}



