const header = document.querySelector('.js-header')
const hero = document.querySelector('.js-hero')

const headerHeight = () => {
  return header.offsetHeight
}

const heroHeight = () => {
  return hero.offsetHeight
}

function debounce (func, wait, immediate = false) {
  let timeout

  return function() {
    const context = this
    const args = arguments
    const later = () => {
      timeout = null

      if (!immediate) {
        func.apply(context, args)
      }
    }

    const callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    if (callNow) func.apply(context, args)
  }
}

const isHome = () => {
  const bodyClasses = document.body.classList
  return /app index/.test(bodyClasses)
}

const trianglify = () => {
  const pattern = Trianglify({
    width: 2000,
    height: 1200,
    x_colors: ['#144052', '#33a1cc', '#144052'],
    y_colors: ['#144052', '#000000']
  })
  const canvas = pattern.canvas()
  const background = document.querySelector('.js-hero-background')

  background.appendChild(canvas)

  setTimeout(function() {
    document.body.classList.add('is-trianglified')
  }, 350)
}

const calcHeaderState = () => {
  const scrollTop = window.scrollY

  const distance = heroHeight() - (scrollTop + headerHeight())

  if (distance < 0) {
    document.body.classList.add('has-solid-header')
  } else {
    document.body.classList.remove('has-solid-header')
  }
}

const headerBindings = () => {
  const updateHeaderState = debounce(calcHeaderState, 17)

  document.addEventListener('touchmove', updateHeaderState)
  window.addEventListener('scroll', updateHeaderState)
  window.addEventListener('resize', updateHeaderState)
}

const shevy = () => {
  if (isHome()) {
    trianglify()
    headerBindings()
  }
}

const ready = (fn) => {
  if (document.readyState != 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

ready(shevy())
