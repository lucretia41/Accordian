let myAccordion = new Accordion("Click to see inside", "Here's a bunch of text inside the accordion")
myAccordion.appendTo(document.querySelector("main"))



users.forEach((user) => {
    let currentAcc = new Accordion(user.name, user)
    currentAcc.appendTo(document.querySelector('main'))
})