var shouldRedirect = true;

var currentURL = window.location.href;
var newURL = null;

if (currentURL.includes("m.blog.naver")) {
    if (currentURL.includes("/clip") || currentURL.includes("/moment")) {
        shouldRedirect = false; // Not redirect for clip
    }

    newURL = currentURL;
    if (newURL.includes("PostView.naver")) {
        newURL = newURL.replace("PostView.naver", "PostView.nhn");
    }
    newURL = newURL.replace("m.blog.naver", "blog.naver");

} else if (currentURL.includes("m.cafe.naver")) {
    newURL = currentURL.replace("m.cafe.naver", "cafe.naver");

} else if (currentURL.includes("m.map.naver")) {
    newURL = currentURL.replace("m.map.naver", "map.naver");

} else if (currentURL.endsWith("://m.naver.com/")) {
    newURL = currentURL.replace("://m.naver", "://www.naver");

} else {
    shouldRedirect = false; // No redirection rule found
}

if (shouldRedirect && newURL != null) {
    window.location.replace(newURL);
}