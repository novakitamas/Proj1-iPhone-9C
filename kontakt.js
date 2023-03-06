// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else
        alert("Köszönjük a visszajelzést, hamarosan felvesszük önnel a kapcsolatot!")
      form.classList.add('was-validated')
    }, false)
  })
})()
document.querySelector("#zip").addEventListener("keypress", function (evt) {
  if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
  {
      evt.preventDefault();
  }
});

  