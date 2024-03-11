
$(document).ready(function(){

    //giving smooth scroll effect for navbar and landing button
    $('.nav').localScroll();
    $('.landing-btn').localScroll();
    
    //Navbar scroll effect
    $(window).scroll(function() {//Gets fired when the user scrolls
        if($(document).scrollTop() > 50) {
            /* ScrollTop()>50 becomes true once an user scrolls to a certain extent.The navbar-fade class gives a 
            opaque black background and decreases the size of navbar. So we have to add the navbar-fade class
            and remove navbar-custom class which gives a transaparent navbar*/
            $('nav').addClass('navbar-fade');//adding navbar-fade class to nav
            $('nav').removeClass('navbar-custom');//removing navbar-custom class to nav
        }
        else {
            /*When the user comes to the top of the page then we add the transparency to navbar. Also the size of
             the branding in the navbar. The navbar-custom has all those CSS properties so we just have to add
             it. Also, the navbar-fade class has to be removed just in case to prevent overriding of properties.*/
            $('nav').removeClass('navbar-fade');//removing navbar-fade class to nav
            $('nav').addClass('navbar-custom');//adding navbar-custom class to nav
        }
    });
    //Form Validation
    /*A JQuery plugin by the name of validate is added. It is used to ease of form validation
    process where each form element can have classes that can be detected by the plugin. One 
    such class is called as required which when added to a form element makes that form element
    a required field. JQuery Validate takes care of the validation. To activate the plugin,
    we need to call the validate() function along with the form that has to be validated.*/ 
    $('#contact-form').validate();

});


//scroll effect for items on page
window.sr = new ScrollReveal();
sr.reveal(".navbar", {
    duration : 1500,
    origin : "bottom"
});
sr.reveal(".header-content", {
    duration : 1500,
    origin : "top",
    distance : "300px"
});
sr.reveal(".service", {
    duration : 1500,
    origin : "left",
    distance : "300px"
});
sr.reveal("#about-me .section-heading", {
    duration : 1000,
    origin : "top",
    distance : "300px"
});
sr.reveal("#about-me p", {
    duration : 1000,
    origin : "left",
    // distance : "50px"
});
sr.reveal(".social", {
    duration : 1000,
    origin : "left",
    // distance : "100px"
});
sr.reveal(".portfolio-image", {
    duration : 1000,
    origin : "right",
    distance : "50px"
});
sr.reveal(".portfolio-name", {
    duration : 1000,
    origin : "right",
    distance : "100px"
});