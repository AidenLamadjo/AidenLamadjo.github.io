$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".header__hamburger-menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".header__hamburger-menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });
    
    $( ".cross" ).click(function() {
    $( ".header__hamburger-menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });
    
});