'use strict'

const disciplinas = [
    {nome:'PWDE', cor: 'red', icon: 'PWDE.png'},
    {nome:'PWFE', cor: 'purple', icon: 'PWFE.png'},
    {nome:'PPDM', cor: 'blue', icon: 'PPDM.png'},
    {nome:'PRO', cor: 'black', icon: 'PRO.png'}
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
//__________________________________________atividade CARDS



const cardContainer = document.getElementById('card-container');
const cards = [
    { imagem: 'img1.jpg', titulo: 'Gilmore Girls', descricao: 'A dupla mãe e filha Lorelai e Rory se unem em tudo o que fazem e são essencialmente inseparáveis. Suas vidas dependem uma da outra na maior parte do tempo e, até certo ponto, de seus amigos próximos.' },
    { imagem: 'img2.jpg', titulo: 'Como perder um homem em 10 dias', descricao: 'Andie, uma escritora de revista, conhece seu par Benjamin, um executivo de marketing, depois que ela decide escrever uma coluna especial enquanto ele faz uma aposta. Sem saber de suas reais intenções, eles se apaixonam.' },
    { imagem: 'img3.jpg', titulo: '10 coisas que eu odeio em você', descricao: 'Assim que Cameron, um novato na Padua High School, encontra Bianca, ele se apaixona por ela. No entanto, para namorar Bianca, ele deve primeiro fazer com que sua irmã mais velha, Kate, uma feminista malvada, namore alguém.'},
    { imagem: 'img4.jpg', titulo: 'Como eu era antes de você', descricao: 'Louisa Clark aceita o trabalho de ser cuidadora de Will Traynor, um homem rígido que tem paralisia. No entanto, sua vida se transforma à medida que os dois, gradualmente, formam um vínculo e depois se apaixonam.'},
    { imagem: 'img5.jpg', titulo: 'As patricinhas de Bervelly Hills', descricao: 'Cher é uma estudante rica do ensino médio que está aprendendo a lidar com a adolescência e seus problemas. Ela também ajuda um novo aluno a ganhar popularidade e, no processo, descobre seus próprios sentimentos por alguém.' }
];

cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    
    const imgElement = document.createElement('img');
    imgElement.src = `./img/${card.imagem}`;
    imgElement.alt = 'Imagem do Card';
    
    const titleElement = document.createElement('h3');
    titleElement.textContent = card.titulo;  
    
    const descElement = document.createElement('p');
    descElement.textContent = card.descricao;
    
    cardElement.appendChild(imgElement);
    cardElement.appendChild(titleElement); 
    cardElement.appendChild(descElement);
    cardContainer.appendChild(cardElement);
});