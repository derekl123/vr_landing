const toggle = document.querySelector('.toggle');
const li_choice = document.querySelectorAll('.li_choice');



function navIcon() {
  let target = event.currentTarget;

  console.log(target);
  if (target.className === 'toggle') {
    // list.style.display = 'block';
    li_choice.forEach(x => {
      x.style.display = 'block';
    })
    setTimeout(function() {
      toggle.style.display = 'none';
    }, 0)
  } else {
    toggle.style.display = 'block';
    li_choice.forEach(x => {
      x.style.display = 'none';
    })
  }

}





toggle.addEventListener('click', navIcon)
li_choice.forEach(x => {
  x.addEventListener('click', navIcon);
})