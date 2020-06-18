$(function () {
    $.ajax({
        type: 'GET',
        url: 'https://graph.facebook.com/v3.0/17841405957250416?fields=name%2Cmedia.limit(3)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Ctimestamp%2Cusername%7D&access_token=EAAD3tnavw0wBAMeKAoSiWwLZAUvZACpalH2epKj949WwnNB0kjsZC3v49nlz1v1mwZAkoeQNEWB1l2iajRkzBZAKMZCi0HGMj0cDKpBHpsLO1U4cTYpRUIuaHFy74ag2n42mlBsnNBS7tFsdGXQgNc1x21pLXbZBiZCyiXkeZCrm9EymGiy8yy5NZC',
        dataType: 'json',
        success: function (json) {
            console.log(json);
            var html = '';
            var insta = json.media.data;
            var p = $('<p></p>');
            // var p1 = $('<p></p>');

            for (var i = 0; i < insta.length; i++) {
                var caption = p.html(insta[i].caption)[0].textContent;
                // var like_count = p1.html(insta[i].like_count)[0].textContent;
                if (insta[i].media_url.indexOf('video') > 0) {
                    html += '<div class="insta-bandle" ><a href="' + insta[i].permalink + '" target="_blank"><div class="instaImage"><video class="content_img" src="' + insta[i].media_url + '"></div><div class="insta_captionbandle"><p class="insta_caption">' + caption + '</p></div><button type ="button" class="btn-flat-border">READ MORE</button></a></div>';
                } else {
                    html += '<div class="insta-bandle" ><a href="' + insta[i].permalink + '" target="_blank"><div class="instaImage"><img class="content_img" src="' + insta[i].media_url + '"></div><div class="insta_captionbandle"><p class="insta_caption">' + caption + '</p></div><button type ="button" class="btn-flat-border">READ MORE</button></a></div>';
                }
            }
            $("#instafeed").append(html);
        },
        error: function () {

            alert("you failed load some instagram picture")
        }
    });
});