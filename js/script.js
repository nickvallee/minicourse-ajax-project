
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");


    // load streetview

    // YOUR CODE GOES HERE!
    var city = $('#city').val();
    var street = $('#street').val();

    var streetViewKey = 'AIzaSyCqR2LxrLZSeEM3rkVDavwFuhEGJ43Xvqs';

    var streetViewURL = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + street + '&' + location + '&key=' + streetViewKey;


    $body.append('<img class="bgimg" src="' + streetViewURL + '">');


    return false;
};

$('#form-container').submit(loadData);
