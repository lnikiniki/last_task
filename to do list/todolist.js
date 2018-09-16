var list = document.getElementsByTagName("LI");
for (var i = 0; i < list.length; i++) {
    var btn = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    btn.className = "delete";
    btn.appendChild(txt);
    list[i].appendChild(btn);
}

var dlt = document.getElementsByClassName("delete");
for (var i = 0; i < dlt.length; i++) {
    dlt[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var wholeList = document.querySelector('ul');
wholeList.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false);

function newNode() {
    var li = document.createElement("li");
    var textValue = document.getElementById("input").value;
    var t = document.createTextNode(textValue);
    li.appendChild(t);
    if (textValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("input").value = "";

    var btn = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    btn.className = "delete";
    btn.appendChild(txt);
    li.appendChild(btn);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}