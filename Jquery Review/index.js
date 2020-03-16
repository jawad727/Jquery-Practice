// console.log("asdasd")

$(function() { // These are all basic Jquery commands

    // $(".num1").hide(300).show(1000)

    // $(".num1").slideUp(1000).delay(1000).slideDown(1000)

    // $(".num1").fadeOut(1000).delay(1000).fadeIn(1000)

    // $(".num1").css({
    //     color: "red", 
    //     fontWeight: "bold"
    // })

    // $(".panel1 p").html("text changed!")

})

$(function() { // Event Binding (NOT DRY)

    // $("#btn1").on("click", function() {
    //     $(".panel1").slideToggle(200);
    // });

    // $("#btn2").on("click", function() {
    //     $(".panel2").slideToggle(200);
    // });

    // $("#btn3").on("click", function() {
    //     $(".panel3").slideToggle(200);
    // });

    // $("#btn4").on("click", function() {
    //     $(".panel4").slideToggle(200);
    // });


})

$(function() { // Event Binding DRY

    $(".buttn").on("click", function() {
        var panelId = $(this).attr('data-panelID') //this is the data attribute on the element
        $("." + panelId).slideToggle(200)
    });

})