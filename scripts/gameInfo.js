const imgs = [
    "images/borderlands.png",
    "images/cod.png",
    "images/cyberpunk.png",
    "images/destiny.png",
    "images/fallout.png",
    "images/halo.png",
    "images/l4d.png",
    "images/metro.png",
    "images/prey.png",
    "images/skyrim.png",
];


function start(){
    const URL = "https://jsonplaceholder.typicode.com/posts";

    const request = new XMLHttpRequest();
    request.onload = onLoad;
    request.open("GET",URL);
    request.send();

}

function onLoad(){
    const grid = document.getElementsByClassName("grid")[0];
    var arr = JSON.parse(this.response);
    for(i = 0; i < arr.length; i++){
        var obj = arr[i];
        var headerText = obj["title"];
        var bodyText = obj["body"];

        var tile = createTile(headerText, bodyText);
        grid.append(tile);
    }
}   

function createTile(headerText, contentText){
    var container = document.createElement("div");
        container.classList.add("tile");
    
    var imgContainer = document.createElement("div");
        imgContainer.classList.add("tileContent")
    
    var headerContainer = document.createElement("div");
        headerContainer.classList.add("tileContent");

    var textContainer = document.createElement("div");
        textContainer.classList.add("tileContent");
    
    var footerContainer = document.createElement("div");
        footerContainer.classList.add("tileFooter");

    container.append(imgContainer, headerContainer, textContainer, footerContainer);

    var image = document.createElement("img");
        image.classList.add("tileImage");
        image.setAttribute("src",imgs[Math.floor(Math.random()*10)]);

    var header = document.createElement("h2");
        header.innerText = headerText;

    var text = document.createElement("p");
        text.innerText = contentText;

    var footer = engagementBar();

    imgContainer.append(image);
    headerContainer.append(header);
    textContainer.append(text);
    footerContainer.append(footer);

    return container;
}

function engagementBar(){
    var container = document.createElement("div");
        container.classList.add("engagementBarContainer");

    var likesContainer = document.createElement("div");
        likesContainer.classList.add("engagementBarColumn");

    var commentsContainer = document.createElement("div");
        commentsContainer.classList.add("engagementBarColumn");

    var sharesContainer = document.createElement("div");
        sharesContainer.classList.add("engagementBarColumn");

    container.append(likesContainer, commentsContainer, sharesContainer);

    var likeImg = document.createElement("img");
        likeImg.classList.add("engagementBarContentImage");
        likeImg.setAttribute("src","images/icons/like.png");
    
    var commentImg = document.createElement("img");
        commentImg.classList.add("engagementBarContentImage");
        commentImg.setAttribute("src","images/icons/comment.png");

    var shareImg = document.createElement("img");
        shareImg.classList.add("engagementBarContentImage");
        shareImg.setAttribute("src","images/icons/share.png");

    var likesText = document.createElement("p");
        likesText.classList.add("engagementBarContentText");
        likesText.innerText = Math.floor( Math.random()*1000 );

    var commentsText = document.createElement("p");
        commentsText.classList.add("engagementBarContentText");
        commentsText.innerText = Math.floor( Math.random()*100 );

    var sharesText = document.createElement("p");
        sharesText.classList.add("engagementBarContentText");
        sharesText.innerText = Math.floor( Math.random()*500 );

    likesContainer.append(likeImg,likesText);
    commentsContainer.append(commentImg,commentsText);
    sharesContainer.append(shareImg,sharesText);

    return container;
}

window.onload = start;