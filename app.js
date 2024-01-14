const scriptURL = 'https://script.google.com/macros/s/AKfycbx5VopEOpWzUsD_lIIm7Tvne4_fnm3oY3c7Z2-M_4yOE0FS0tZdisum_6T-VbwRjCTU/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})