(function () {
  function decode(csv) {
    return csv.split(',').map(n => String.fromCharCode(parseInt(n.trim(), 10))).join('')
  }

  document.addEventListener('click', (e) => {
    const link = e.target.closest('#reveal_email')
    if (!link) return

    e.preventDefault()
    const user = decode(link.dataset.u || '')
    const dom  = decode(link.dataset.d || '')
    if (!user || !dom) return

    const addr = `${user}@${dom}`
    link.textContent = addr
    link.href = `mailto:${addr}`
    link.setAttribute('rel', 'noopener noreferrer')
  })
})()
