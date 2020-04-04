


const APIKEY = "e3f2eb568a44846e3e8c3bb859efc5e0";
const url = "https://api.themoviedb.org/3/movie/now_playing?";
var obj;
export function getMovieList() {
    var url = makeURL();
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, true);
    xmlHttp.responseType = 'json';
    //var obj;
    xmlHttp.onload = () => {
        var status = xmlHttp.status;
        if (status === 200) {
            obj = xmlHttp.response.results;
            var size = xmlHttp.response.size;
            console.log(1235);
        }
        return obj;
    };
    xmlHttp.send();
}


function makeURL() {
    return url + "api_key=" + APIKEY + "&" + "language=ko&page=1&region=KR";
}