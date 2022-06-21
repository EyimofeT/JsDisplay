const name=document.getElementById('name')
const height=document.getElementById('height')
const country=document.getElementById('country')
const form = document.getElementById('form')

// form.addEventListener('submit', (e) => {
//     alert("click")
//     e.preventDefault()
// })

function logSubmit(event) {

    alert("Hello "+name.value + ", i see you are "+height.value
    +" meters tall, Brilliant!. Also i noticed you are from the country "
    +country.options[country.selectedIndex].innerText+",Phenominal!")
    // country.options[country.selectedIndex].value.innerText
  }

  form.addEventListener('submit', logSubmit);