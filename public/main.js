function addUrl(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}

function deleteUrl(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.getElementById(candidate.value);
    ul.removeChild(li);
}

function getURl(urlValue){
    let urlValues = new URLSearchParams(window.location.search)
    return urlValues.get(urlValue);
}

function loadUrl(){
    history.pushState({},"",urlValue)
}