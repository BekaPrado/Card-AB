'use strict'

const disciplinas = [
    {nome:'PWDE', cor: 'red', icon: 'PWDE.png'},
    {nome:'PWFE', cor: 'pink', icon: 'PWFE.png'},
    {nome:'PPDM', cor: 'blue', icon: 'PPDM.png'},
    {nome:'PRO', cor: 'white', icon: 'PRO.png'}
]

function criarItemMenu (disciplina) {
    const listaMenu = document.getElementById('menu')
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const novoImagem = document.createElement('img')

    novoLink.href = '#'
    novoLink.textContent = disciplina.nome
    novoLink.style = `--cor-hover: ${disciplina.cor}`


    novoImagem.src = `./icon/${disciplina.icon}`

    novoItem.appendChild(novoImagem)
    novoItem.appendChild(novoLink)

    listaMenu.appendChild(novoItem)

}

disciplinas.forEach(criarItemMenu)
