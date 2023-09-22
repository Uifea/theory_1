# theory_1

const arr = [10, 12, 15, 21];

arr.forEach((item) => {
    setTimeout(() => {
        console.log( item > 13 ? `Good: ${item}` : `Bad: ${item}`);
    }, 3000)
})

arr.forEach((item) => {
    setTimeout(() => {
        if (item > 13) {
            console.log("Good: " + item);
        } else {
            console.log("Bad: " + item);
        }
    }, 3000)
})
