document.getElementById("loadCover").onclick = function getCover() {
        var request = new XMLHttpRequest();
        request.open("GET","http://openlibrary.org/search.json?q=the+lord+of+the+rings", false);
        request.send();
        console.log(request.responseText);
    };