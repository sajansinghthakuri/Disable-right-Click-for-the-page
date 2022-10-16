// Disable right click
document.addEventListener(
  'contextmenu',
  function (e) {
    e.preventDefault()
  },
  false
)

// Disable shortcut keys
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.keyCode == 123) {
    e.stopPropagation()
    e.preventDefault()
  }
})
