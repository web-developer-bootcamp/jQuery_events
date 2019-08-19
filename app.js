//These jQuery is 90% used by developers.

//Click function
$("button").click(function () {
    var text = $(this).text();
    alert("you clicked: " + text)
});

//Keypress function
$("input").keypress(function (event) {
    if (event.which === 13) {
        alert("press enter")
    }
    console.log(event);
});

//On function
$("h1").on("click", function () {
    $(this).css("color", "red")
});

$("button").on("mouseenter", function(){
    $(this).css("font-weight", "bold")
});

$("button").on("mouseleave", function(){
    $(this).css("font-weight", "normal")
});