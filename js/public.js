window.onload = function() {
    var oBtn = document.querySelector('.clickEle');
    var oBox = document.querySelector('.slide-nav');
    var oMask = document.querySelector('.mask');
    oBtn.onclick = function() {
        oBox.style.right = 0;
        oMask.style.display = 'block';
        oMask.style.opacity = 1;
    }
    oMask.onclick = function() {
        oBox.style.right = -20 + '%';
        this.style.opacity = 0;
        this.style.display = 'none;';
    }
}

