
var button = document.querySelector("button");
button.addEventListener("mousedown", function(event){
    if (event.which === 1)   {
        console.log("Left button");
    } else if (event.which === 2)   {
        console.log("Middle button");
    } else if (event.which === 3)   {
        console.log("Right button");
    }
});
var para = document.querySelector("p");

para.addEventListener("mousedown", function(event){
    console.log("Handler for paragraph");
});

button.addEventListener("mousedown", function(event){
    console.log("Handler for bittpm");
    if (event.which === 3 ) {
        event.stopPropagation();
    }
});

document.body.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
        console.log("clicked", event.target.textContent);
    }
});

para.addEventListener("keydown", function(event) {
    if (event.keyCode == 88) {
        document.body.style.background = "violet";
    }
})

para.addEventListener("keyup", function(event) {
    if (event.keyCode == 88) {
        document.body.style.background = "";
    }
})

var lastX;
var rect = document.querySelector("div");
rect.addEventListener("mousedown", function(e){
    if (e.which === 1) {
        lastX = e.pageX;
        addEventListener("mousemove", moved);
        e.preventDefault();
    }
});
function buttonPressed(e){
    if (e.buttons === null) {
        return e.which != 0;
    } else {
        return e.buttons != 0;
    }
}

function moved (e) {
    if (! buttonPressed(e)) {
        removeEventListener("mousemove", moved);
    } else {
        var dist = event.pageX - lastX;
        var newWidth = Math.max(10, rect.offsetWidth + dist);
        rect.style.width = newWidth + "px";
        lastX = event.pageX;
    }
}

function isInside(node, target) {
    for (; node != null; node = node.parentNode) {
        if (node === target) return true;
    }
}
para.addEventListener("mouseover", function(e){
    if (!isInside(event.relatedTarget, para)) {
        para.style.color = "red";
    }
})

para.addEventListener("mouseout", function(e){
    if (!isInside(event.relatedTarget, para)) {
        para.style.color = "";
    }
})

addEventListener("scroll", function(){
    var max = document.body.scrollHeight - innerHeight;
    var percent = (pageYOffset / max)  * 100;
    bar.style.width = percent + "%";
})

var help = document.querySelector("#help");
var fields = document.querySelectorAll("input");

for (var i=0; i<fields.length; i++) {
    fields[i].addEventListener("focus", function(e){
        var text = e.target.getAttribute("data-help");
        help.textContent = text;
    });
    fields[i].addEventListener("blur", function(e){
        help.textContent = "";
    })
}

addEventListener("message", function(e){
    postMessage(e.data * e.data);
});

var squareWorker = new Worker("code/squareWorker.js");
squareWorker.addEventListener("message", function(e) {
    console.log("The worker responded: ", e.data);
});

squareWorker.postMessage(10);
squareWorker.postMessage(24);


var bombTimer = setTimeout(function(){
    console.log("BOOM!")
}, 500);

if (Math.random() < 0.5) {
    console.log("Defused");
    clearTimeout(bombTimer);
}

var ticks = 0;
var clock = setInterval(function(){
    console.log("tick", ticks++);
    if (ticks === 10) {
        clearInterval(clock);
        console.log("stop")
    }
}, 200);

var textarea = document.querySelector("textarea");
var timeout;
textarea.addEventListener("keydown", function(){
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        console.log("you stoppped typing");
    })
})


function displayCoords(e) {
    document.body.textContent =
        "Mouse is " + e.pageX + ", " + e.pageY;
}

var scheduled = false, lastEvent;

addEventListener("mousemove", function(e){
    lastEvent = e;
    if (!scheduled) {
        scheduled = true;
        setTimeout(function(){
            scheduled = false;
            displayCoords(lastEvent)
        }, 250)
    }
})
