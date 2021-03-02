
input = "";
items = [];
numItems = 0;
while (input !== "quit") {
    input = prompt("What would you like to do?");
    if (input === "new") {
        input = prompt("Enter new todo");
        items.push(input);
        numItems++;
        console.log(`${input} added to list`);
    }
    else if (input === "list") {
        console.log("***********");
        for (let i = 0; i < items.length; i++) {
            console.log(`${i}: ${items[i]}`);
        }
        console.log("***********");
    }
    else if (input === "delete") {
        input = prompt("Enter item to delete");
        items.splice(items.indexOf(input), 1);
        console.log(`${input} removed from list`);
    }
}