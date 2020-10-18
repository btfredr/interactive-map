// code for displaying bus terminals
document.querySelectorAll(`[id^= "terminal_"]`)
    .forEach(function (terminalElem) {
        // create popup
        const popupId = "popup_" + terminalElem.id.split("_")[1];
        // select popup on page
        const popupElem = document.getElementById(popupId);
        // set up hover element
        terminalElem.addEventListener("mouseover", function (event) {
            popupElem.classList.add("popup");
        });
        // removing popup class when the user removes their cursor
        terminalElem.addEventListener("mouseout", function (event) {
            popupElem.classList.remove("popup");
        });

    });


// highlighting the selected bus route
document.querySelectorAll(`[id^= "routeline_"]`).forEach(function (route) {
    route.addEventListener("mouseover", function (event) {
        // move this line to the front
        event.currentTarget.parentElement.append(event.currentTarget);
    });
});

