'use-strict'

const stars = document.getElementById('stars')
stars.firstElementChild.classList.remove
stars.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.add('active-star');
    let sibling = e.target.previousElementSibling;
    while (sibling) {
      sibling.classList.add('active-star');
      sibling = sibling.previousElementSibling;
    }
  }
})

stars.addEventListener('click', e => {
  // Clear all styles
  for (let i = 0; i < stars.children.length; i++) {
    stars.children.item(i).classList.remove('click-star')
  }

  const t = e.target;
  t.classList.add('click-star')
  let sibling = t.previousElementSibling;
  
  while(sibling) {
    sibling.classList.add('click-star');
    sibling = sibling.previousElementSibling;
  }
})

stars.addEventListener('mouseout', (e) => {
  const t = e.target;

  if (t.tagName === 'LI' && t.classList.contains('active-star')) {
    t.classList.remove('active-star');
  }

  for (let i = 0; i < stars.children.length; i++) {
    stars.children.item(i).classList.remove('active-star');
  }
})