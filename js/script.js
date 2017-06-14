$(document).ready(function(){

    $("#content-div").load("home.html");

    $("#home-nav").click(function(){
        $("#content-div").load("home.html");
        $("li").removeClass("active");
        $("#home-nav").addClass("active");
        $("#")
    });
    $("#about-nav").click(function(){
        $("#content-div").load("about.html");
        $("li").removeClass("active");
        $("#about-nav").addClass("active");

    });
    $("#portfolio-nav").click(function(){
        $("#content-div").load("portfolio.html");
        $("li").removeClass("active");
        $("#portfolio-nav").addClass("active")

        // Activate Carousel
        $("#myCarousel").carousel();

        // Enable Carousel Indicators
        $(".item").click(function(){
            $("#myCarousel").carousel(1);
        });

        // Enable Carousel Controls
        $(".left").click(function(){
            $("#myCarousel").carousel("prev");
        });
    });

});
