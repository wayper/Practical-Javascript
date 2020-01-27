document.querySelector('#elastic').oninput = function() {
    let val = this.value.trim();
    let elasticItem = document.querySelectorAll('.elastic li');
    console.log(elasticItem);
    if (val != '') {
        elasticItem.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            }
            else {
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
            }
        });
    }
    else {
        elasticItem.forEach(function(elem) {
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerText;
        });
    }
}

function insertMark(str, position, len){
    return str.slice(0, position) + '<mark>' + str.slice(position, position + len) + '</mark>'+str.slice(position+len);
}