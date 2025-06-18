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

} else if (currentURL.includes("m.place.naver")) {
    // 정규식을 사용하여 ID 부분 추출 (예: "1836609417")
    const idMatch = currentURL.match(/m\.place\.naver\.com\/restaurant\/(\d+)/);
    if (idMatch && idMatch[1]) {
        const placeId = idMatch[1];
        const protocol = currentURL.split(":")[0];
        newURL = `${protocol}://map.naver.com/p/entry/place/${placeId}`;
    }
} else {
    shouldRedirect = false; // No redirection rule found
}

if (shouldRedirect && newURL != null) {
    window.location.replace(newURL);
}