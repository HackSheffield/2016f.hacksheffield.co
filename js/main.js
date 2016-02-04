/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// Google Maps JS API

var map;
function initMap() {
    var diamond = {
        lat: 53.381584,
        lng: -1.481796
    }
    var center_loc = {
            lat: diamond.lat + 0.05,
            lng: diamond.lng
        },
        map = new google.maps.Map(document.getElementById('map'), {
            center: center_loc,
            zoom: 16,
            streetViewControl: !1,
            scrollwheel: false
        });

    var contentString = '<div id="content">'+
        '<h2 id="firstHeading" class="firstHeading">The Diamond<span class="hidden-xs">, University of Sheffield</span></h2>'+
        '<div id="bodyContent">'+
        '<p><b>Address</b><br />' +
        '32 Leavygreave Rd<br>' +
        'Sheffield S3 7RD</p>' +
        '<p><a href="https://goo.gl/maps/UWuiQf3ssJt" target="_blank">Open in Google Maps</a></p>' +
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: diamond,
        map: map,
        title: 'The Diamond'
    });

    infowindow.open(map, marker);
}

// Google Analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-72763689-1', 'auto');
ga('send', 'pageview');