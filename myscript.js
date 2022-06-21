const rows = ['a','b','c','d','e','f','g','h','i','j','k',
'l','m','n','o','p','q','r','s','t'];

let html = "";
let counter = 1;

rows.forEach((row) =>{
    html += `<div class="label">${row}</div>`;
    for(let i = 0; i < 3; i++){
        html += `<div id="${row+counter}">${counter}</div>`;
        counter++;
    }
    counter = counter + 12; // add to be numbers correct;
});

document.getElementById('left').innerHTML = html;

html = "";
counter = 1;
rows.forEach((row) =>{
    
    counter = counter + 12;
    for(let i = 0; i < 3; i++){
        html += `<div id="${row+counter}">${counter}</div>`;
        counter++;
    }
    html += `<div class="label">${row}</div>`;
});

document.getElementById('right').innerHTML = html;

html = "";
counter = 1;
rows.forEach((row) =>{
    
    counter = counter + 3;
    for(let i = 0; i < 9; i++){
        html += `<div id="${row+counter}">${counter}</div>`;
        counter++;
    }
    counter = counter + 3;
});

document.getElementById('middle').innerHTML = html;