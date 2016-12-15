/**
 * Created by mitchell_verter on 8/8/16.
 */
function talksAbout(node, string) {
    if (node.nodeType === document.ELEMENT_NODE) {
        for (var i = 0; i < node.childNodes.length; i++) {
            if (talksAbout(node.childNodes[i], string)) {
                return true;
            }
        }
        return false;
    } else if (node.nodeType == document.TEXT_NODE) {
        return node.nodeValue.indexOf(string) > -1;
    }
}

function replaceImages(){
    var images = document.body.getElementsByTagName("img");
    for (var i=images.length -1; i >=0;i--) {
        var image = images[1];
        if (image.alt) {
            var text = document.createTextNode(image.alt);
            image.parentNode.replaceChild(text, image);
        }
    }
}

function makeElement(type) {
    var node = document.createElement(type);
    for (var i = 1; i < arguments.length; i++) {
        var child = arguments[i];
        if (typeof chile === "string") {
            child = document.createTextNode(child);
        }
        node.appendChild(child);
    }
    return node;
}
console.log(talksAbout(document.body, "book"));

document.getElementById('someDiv').appendChild(
    makeElement("footer", "-",
        makeElement("strong", "KarlPopper"),
        " Prefact to book ",
        makeElement("em", " i am a big dumb book")
    ));

var paras = document.body.getElementsByTagName("p");
Array.prototype.forEach.call(paras, function(para){
    if (para.getAttribute("data-classified") === "secret") {
        para.parentNode.removeChild(para);
    }
})

function highlightCode(node, keywords) {
    var text = node.textContent;
    node.textContent = "";

    var match, pos = 0;
    while (match = keywords.exec(text)) {
        var before = text.slice(pos, match.index);
        node.appendChild(document.createTextNode(before));
        var strong = document.createElement("strong");
        strong.appendChild(document.createTextNode(match[0]));
        node.appendChild(strong);
        pos = keywords.lastIndex;
    }
    var after = text.slice(pos);
    node.appendChild(document.createTextNode(after));
}

var languages = {
    javascript: /\b(function|return|var)\b/g
}
function highlightAllCode() {
    var pres = document.body.getElementsByTagName("pre");
    for (var i = 0; i<pres.length; i++){
        var pre = pres[i];
        var lang = pre.getAttribute("data-language");
        if (languages.hasOwnProperty(lang)) {
            highlightCode(pre, languages[lang])
        }
    }
}

function time(name, action) {
    var start = Date.now();
    action();
    console.log(name, " took ", Date.now() - start, 'ms');
}

time('naive', function(){
    var target = document.getElementById("one");
    while (target.offsetWidth < 2000) {
        target.appendChild(document.createTextNode("X"))
    }
});

time("clever", function(){
    var target = document.getElementById("two");
    target.appendChild(document.createTextNode("XXXX"));
    var total = Math.ceil(2000 / (target.offsetWidth / 5));
    for (var i =5; i <total; i++) {
        target.appendChild(document.createTextNode("X"));
    }
})
var cat = document.querySelector("img");
var angle = 0, lastTime = null;

function animateCat(time) {
    if (lastTime != null ) {
        angle += (time - lastTime) * 0.01;
    }
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(animateCat);
}



requestAnimationFrame(animateCat);