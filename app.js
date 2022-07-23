console.log("HELLO welcome to out shop");

const q1= prompt("would you like a coffe or a tea ?");

if(q1=="coffee"){
    const q2 = prompt("would you like cookies with your coffe ?");
    if(q2=="yes"){
        console.log("you have order coffe and cookies");
    } else if(q2 !=  "yes"){
        console.log("You have only order coffee");
    }
}else if(q1=="tea") {
    const q3 = console.log("would you like a cookies with your tea ?");
    if(q3=="yse"){
        console.log("You have order tean and cookies");
    } else if(q3 !=="yes") {
        console.log("You have only order tea");
    }
} else {
    console.log("Okay have a good day");
}

