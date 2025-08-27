// Generate Bussiness Name

/*

Adejectives : Crazy, Shiny, Awesome, Corporate, Innovative
Shop Names : Solutions, Tech, Vision, Services, Products
Another Word : Hub, Center, Point, Place, Spot

*/

function generateBusinessName() {
    const adjectives = ["Crazy", "Shiny", "Awesome", "Corporate", "Innovative"];
    const shopNames = ["Solutions", "Tech", "Vision", "Services", "Products"];
    const anotherWords = ["Hub", "Center", "Point", "Place", "Spot"];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomShopName = shopNames[Math.floor(Math.random() * shopNames.length)];
    const randomAnotherWord = anotherWords[Math.floor(Math.random() * anotherWords.length)];

    return `${randomAdjective} ${randomShopName} ${randomAnotherWord}`;
}
console.log("Business Name:", generateBusinessName());
