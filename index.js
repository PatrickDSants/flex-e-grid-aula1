const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

const inicio = document.querySelector('.menu-lateral__link--inicio')
const videos = document.querySelector('.menu-lateral__link--videos')
const picos = document.querySelector('.menu-lateral__link--picos')
const integrantes = document.querySelector('.menu-lateral__link--integrantes')
const camisas = document.querySelector('.menu-lateral__link--camisas')
const pinturas = document.querySelector('.menu-lateral__link--pinturas')

inicio.addEventListener('click', () => {
    inicio.classList.toggle('menu-lateral__link--ativo')
} )

videos.addEventListener('click', () => {
    videos.classList.toggle('menu-lateral__link--ativo')
})

picos.addEventListener('click', () => {
    picos.classList.toggle('menu-lateral__link--ativo')
})

integrantes.addEventListener('click', () => {
    integrantes.classList.toggle('menu-lateral__link--ativo')
})

camisas.addEventListener('click', () => {
    camisas.classList.toggle('menu-lateral__link--ativo')
})

pinturas.addEventListener('click', () => {
    pinturas.classList.toggle('menu-lateral__link--ativo')
})


