//grab core http module
const http = require("http")

//loaded from db
let menu_items = [
    {
        "name": "Spaghetti",
        "price": 4.99
    },
    {
        "name": "Pizza",
        "price": 8.99
    }
    ,
    {
        "name": "Garlic Knots",
        "price": 2.99
    }
]
const server = http.createServer(function(req, res) {
    //request object
    // console.log(req);
    
    res.writeHeader(404)
    let uiElements = "<ul>"
    for (let index = 0; index < menu_items.length; index++) {
        let item = menu_items[index];
        uiElements += `<li>${item.name} : $${item.price}</li>`
    }
    uiElements += "</ul>"
    res.write(`
        <body>
            <h1 style='color:blue'> Hello From Server</h1>
            ${uiElements}
        </body>`);

    // res.write(menu_items.toString())

    res.end();
})

const PORT = 3000;
server.listen(PORT, function(){
    console.log("Running on port", PORT)
})

