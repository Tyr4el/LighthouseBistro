$(document).ready(function() {
    // Add the class from the CSS when the mouse enters the cell and remove the class when it leaves
    $(".description").mouseenter(function() {
        $(this).addClass("yellow");
    });
    
    $(".description").mouseleave(function() {
        $(this).removeClass("yellow");
    });
});
                            