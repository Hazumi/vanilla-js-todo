const form = document.querySelector('#todo-form');
const list = document.querySelector('#list');
const input = document.querySelector('#task-input');
const addBtn = document.querySelector('#add');

const addTask = () => {
  if (input.value) {
    let newElm = document.createElement('li');
    newElm.textContent = input.value;
    addLiBtns(newElm);
    list.appendChild(newElm);
    input.value = '';
  }
}

const addLiBtns = li => {
  let xBtn = document.createElement('span');
  xBtn.innerHTML = ' <i class="fa fa-times-circle x"></i>';
  li.appendChild(xBtn);

  let downBtn = document.createElement('span');
  downBtn.innerHTML = ' <i class="fa fa-arrow-down down"></i>';
  li.appendChild(downBtn);

  let upBtn = document.createElement('span');
  upBtn.innerHTML = ' <i class="fa fa-arrow-up up"></i>';
  li.appendChild(upBtn);
}

for(let i = 0; i < list.children.length; i++) {
  addLiBtns(list.children[i]);
}

addBtn.addEventListener('click', () => addTask());
document.addEventListener('keypress', (e) => {
  if (e.keyCode == 13) {
    addTask();
  }
});

list.addEventListener('click', (e) => {
  if (e.target.tagName == 'LI') {
    e.target.classList.toggle('done');
  } else if (e.target.tagName == 'I') {
    let elmClassList = e.target.classList;
    let li = e.target.parentNode.parentNode;
    let prevLi = li.previousElementSibling;
    let nextLi = li.nextElementSibling;
    if (elmClassList.contains('up') && prevLi) {
      list.insertBefore(li, prevLi);
    } else if (elmClassList.contains('down') && nextLi) {
      list.insertBefore(nextLi, li);
    } else if (elmClassList.contains('x')) {
      list.removeChild(li);
    }
  }
});
