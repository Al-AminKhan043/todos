let input = prompt("what whould you like to add?");
const todos = ['valorant', 'star wars'];
while (input !== 'quit') {
    if (input === 'list') {
        console.log("****************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }

        console.log("****************");
    }
    else if (input === 'new') {
        const newtodo = prompt("okay, what is the new todo list?");
        todos.push(newtodo);
        console.log("new todo added!");

    }
    else if (input === 'delete') {
        const index = parseInt(prompt("ok, enter an index: "));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
        }
        else {
            console.log("unknown index!");
        }


    }

    input = prompt("what whould you like to add?");
}
console.log("quit the app!");