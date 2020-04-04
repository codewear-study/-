const APIKEY = "e3f2eb568a44846e3e8c3bb859efc5e0";
const url = "https://api.themoviedb.org/3/movie/now_playing?";

var obj;
var objIndex = 0;
function getMovieList() {
    var url = makeURL();
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, true);
    xmlHttp.responseType = 'json';
    xmlHttp.onload = () => {
        var status = xmlHttp.status;
        if (status === 200) {
            obj = xmlHttp.response.results;
            document.querySelector('.' + 'title').innerText
                = obj[0].title;
            document.querySelector('.' + 'year').innerText
                = obj[0].release_date;
            document.querySelector('.' + 'description').innerText
                = obj[0].overview;
            const url = "https://image.tmdb.org/t/p/w45/" + obj[0].poster_path;
            document.querySelector('.' + 'image').src = url;
        }
    };
    xmlHttp.send();
    return obj;
}


function makeURL() {
    return url + "api_key=" + APIKEY + "&" + "language=ko&page=1&region=KR";
}