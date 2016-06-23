var normalImgElt;
var imgelt;
var zoomedDiv;
var zoomedDivHeight;
var zoomedDivWidth;
var zoomedimgHeight;
var zoomedimgWidth;
var normalImgHeight;
var normalImgWidth;

function refreshImage(thumbnailImg) {
    normalImgElt.src = thumbnailImg.src;
}

function displayZoomDiv(normalImg) {
    zoomedDiv.style.display = 'block';
    imgelt.src = normalImg.src;
}

function hideZoomDiv() {
    zoomedDiv.style.display = 'none';
}

function zoomImage(elt, e) {
    var mouseX = elt.offsetLeft - e.pageX;
    var mouseY = elt.offsetTop - e.pageY;
    if ((mouseY * 2) > -450)
        imgelt.style.top = (mouseY * 2) + "px";
    if ((mouseX * 2) > -800)
        imgelt.style.left = (mouseX * 2) + "px";
}

window.onload = function() {
    normalImgElt = document.getElementsByClassName('normal-img')[0];
    imgelt = document.getElementsByClassName('zoomed-img')[0];
    zoomedDiv = document.getElementById("zoom-div");
    zoomedDivHeight = zoomedDiv.clientHeight;
    zoomedDivWidth = zoomedDiv.clientWidth;

    normalImgHeight = normalImgElt.height;
    normalImgWidth = normalImgElt.width;
    zoomedimgHeight = imgelt.height = normalImgElt.height * 2;
    zoomedimgWidth = imgelt.width = normalImgElt.width * 2;
    imgelt.style.top = "0px";
    imgelt.style.left = "0px";
    document.getElementById("zoom-div").style.display = 'none';
}