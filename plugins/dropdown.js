export default () => {
  document.body.addEventListener('click', function (e) {
    if (!e.target.matches('.dropbtn')) {
      const opened = document.querySelectorAll('.show')
      opened.forEach(element => {
        element.classList.remove('show')
      });
    }
  })
}
