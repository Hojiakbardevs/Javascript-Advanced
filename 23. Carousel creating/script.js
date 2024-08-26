document.addEventListener("DOMContentLoaded", function () {
    var p = document.querySelector('.text_effect p');
    var maxLines = 3;
    var lineHeight = parseFloat(getComputedStyle(p).lineHeight);
    var maxHeight = lineHeight * maxLines;
    
    if (p.scrollHeight > maxHeight) {
        var text = p.textContent;
        while (p.scrollHeight > maxHeight) {
            text = text.slice(0, -1);
            p.textContent = text + '...';
        }
    }
});
