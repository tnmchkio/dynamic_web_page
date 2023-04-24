function añadir_1 (a) {
    const input = a.previousElementSibling;
    const lista = input.previousElementSibling;
    const li = document.createElement('li');
    li.innerHTML += input.value;;
    lista.appendChild(li);
    input.value = '';
    input.focus();
}

function remove(e) {
    e.parentNode.parentNode.removeChild(e.parentNode); 
}

function añadir_2 (a) {
    const input = a.previousElementSibling;
    const textArea = a.nextElementSibling;
    const container = input.previousElementSibling;

    const section = document.createElement('section');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');

    const btn = document.createElement('button');
    btn.setAttribute('onclick', 'remove(this)');
    btn.innerHTML = 'x';
    
    h4.innerHTML += input.value;
    p.innerHTML = textArea.value;

    section.appendChild(h4);
    section.appendChild(p);
    section .appendChild(btn);

    container.appendChild(section);

    input.value = '';
    input.focus();
    textArea.value = '';
    textArea.focus();
}
