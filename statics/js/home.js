(function(w) {
    function enterLine() {
        document.getElementById("btnEnter1").onclick = function() {
            window.open('https://www.igao12.com', "_self");
        }
        document.getElementById("btnEnter2").onclick = function() {
            window.open('https://www.igao13.com', "_self");
        }
        document.getElementById("btnEnter3").onclick = function() {
            window.open('https://www.igao14.com', "_self");
        }
        document.getElementById("btnEnter4").onclick = function() {
            window.open('https://www.igao15.com', "_self");
        }
        document.getElementById("btnEnter6").onclick = function() {
            window.open('http://www.meizuhui.com/', "_blank");
        }
    }
    function init() {
        enterLine();
    }
    window.addEventListener("DOMContentLoaded", init, !1);
})(window);
