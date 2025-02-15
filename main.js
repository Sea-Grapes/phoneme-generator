import graphemes_raw from './grapheme.txt'

let graphemes = graphemes_raw.split(/[\r\n]+/)

let phon_const = graphemes[0].split(',')
let phon_vowel = graphemes[1].split(',')




const rand = array => array[Math.floor(Math.random() * array.length)]

function rand_phon() {
  let bool = Math.random() < 0.5

  return bool ? rand(phon_const) : rand(phon_vowel)
}

function rand_word(length) {
  return Array.from({length}, e => rand_phon()).join('')
}

window.rand_word = rand_word

function build(parent, type, call) {
  const res = document.createElement(type)
  parent.append(res)
  if (call) call(res)
  return res
}

const display = document.querySelector('#display')
const btn_generate = document.querySelector('#generate')

function generate() {
  display.innerHTML = ''

  Array.from({length: 100}, e => rand_word(3)).forEach(word => {
    let res = build(display, 'div')
    res.textContent = word
  })
}
generate()

btn_generate.addEventListener('click', generate)