function myFunction() {
    var x = document.getElementById("menu-button-Solutions");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 

  const btn = document.getElementById('menu-btn')
  const nav = document.getElementById('menu')

  btn.addEventListener('click', () => {
    btn.classList.toggle('open')
  })
  
