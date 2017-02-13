
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


    var nytUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    nytUrl += '?' + $.param({
        'api-key': "24c783fdface474fb022155f11637cb7",
        'q': city
    });

    $.getJSON( nytUrl, function( data ) {

        $nytHeaderElem.text('New York Times Articles About ' + city);

    articles = data.response.docs;
    for (var i = 0; i < articles.length; i++) {
        var article = articles[i];
        $nytElem.append('<li class="article">' +
            '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
            '<p>' + article.snippet + '</p>'+
            '</li>');
    }

    console.log(data);


    });


    return false;
};

$('#form-container').submit(loadData);
