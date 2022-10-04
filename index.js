import './styles.scss';
const data = [
'série 1',
'le lit',
'le',
'la',
'l\'',
'dans',
'il y a',
'',
'série 2',
'un',
'une',
'un rat',
'',
'série 3',
'une',
'mamie',
'elle',
'',
'série 4',
'salut',
'sur',
'il est'
];


const lines = document.querySelector("#lines");
const template = document.querySelector('#line-template');

data.forEach(text => {
    const clone = template.content.cloneNode(true);
    let span = clone.querySelector("span");
    span.textContent = text;

    for(let i=1; i<4; i++) {
        let content = clone.querySelector("#content").cloneNode(true);
        content.style = `left: ${(i*48)+20}mm;`
        clone.querySelector("#line").appendChild(content);    
    }

    lines.appendChild(clone);
});