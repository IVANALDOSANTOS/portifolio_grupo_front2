
/// Biblioteca de animação 




/// Método trim para reomver os espaços antes e após uma string - .trim()

///////////// Variáveis que armazenam a classe e o id que estão no HTML
let containerSelect = document.querySelector('#container')
var containerElemento = document.querySelector('.cards')
var novaPostagemElemento = document.querySelector('#novaPostagem')

///////////// variaveis para armazenar os dados do input
let inputBanner = document.querySelector('#banner')
let inputGithub = document.querySelector('#github')
let inputNome = document.querySelector('#nome')
let inputOcupacao = document.querySelector('#ocupacao')
let inputTelefone = document.querySelector('#telefone')
let inputEmail = document.querySelector('#email')
let inputPortifolio = document.querySelector('#portifolio')
let inputCidade = document.querySelector('#cidade')
let inputInstagram = document.querySelector('#instagram')
let inputLinkedin = document.querySelector('#linkedin')

///////Inserindo posts principais que serão carregados na página ao ser acessada
let postsPrincipais = [
  {
    campoBanner:"https://media4.giphy.com/media/mWeDPFbZvTc2303gHC/200w.webp?cid=ecf05e47p0o2otg4ospo90gy3g5qfmr2ikm9d8kzt26lnag0&rid=200w.webp&ct=g",
    campoGithubFoto:"https://avatars.githubusercontent.com/u/88914865?v=4",
    campoNome:"João Francisco",
    campoOcupacao:"Desenvolvedor Front End",
    campoTelefone:" 00- 2222-3333",
    campoEmail:"João Francisco@gmail.com",
    campoPortifolio:"https://github.com/jfamigo",
    campoCidade:"Belo Horizonte",
    campoGithub:"https://github.com/jfamigo",
    campoInstagram:"",
    campoLinkedin:"https://www.linkedin.com/in/joao-francisco-amigo/"
  },
  {
    campoBanner:"https://media2.giphy.com/media/20XFN3vWiU79fBQgBc/200w.webp?cid=ecf05e47tzaj7pc9hfo92cekjl3fdf4ftjdahnw1zps76g0m&rid=200w.webp&ct=g",
    campoGithubFoto:"https://avatars.githubusercontent.com/u/62851597?v=4",
    campoNome:"Ivanaldo Santos",
    campoOcupacao:"Desenvolvedor Front End",
    campoTelefone:" 11 - 0000-0000",
    campoEmail:"ivanaldo594@gmail.com",
    campoPortifolio:"https://www.linkedin.com/in/ivanaldo-silva-3482926a/",
    campoCidade:"São Paulo",
    campoGithub:"https://github.com/IVANALDOSANTOS",
    campoInstagram:"",
    campoLinkedin:"https://www.linkedin.com/in/ivanaldo-silva-3482926a/"
  },
  {
    campoBanner:"https://phoneky.co.uk/thumbs/screensavers/down/games/diabloiiis_uw2f2284.gif",
    campoGithubFoto:"https://braulioportela.com/me.jpg",
    campoNome:"Braulio",
    campoOcupacao:"Desenvolvedor Front End",
    campoTelefone:"11 5555-5555",
    campoEmail:"braulio@gmail",
    campoPortifolio:"",
    campoCidade:" Blumenau",
    campoGithub:"https://github.com/braulioportela79",
   
    campoLinkedin:"https://www.linkedin.com/in/braulio-portela-699603228/"
  },
  {  
    campoBanner:"https://static1-br.millenium.gg/articles/1/60/91/@/96281-3-31-21-gweninsightsarticle-11-gwen-ult-1-gif-article_m-1.gif",
    campoGithubFoto:"https://avatars.githubusercontent.com/u/99299721?v=4",
    campoNome:"Paulo Henrique Santos",
    campoOcupacao:"Desenvolvedor Front End",
    campoTelefone:" 11 - 0000-0000",
    campoEmail:"paulo@gmail.com",
    campoPortifolio:"https://lvs1981.github.io/lvs1981-Ckeckpoint_II_Front_I/",
    campoCidade:"Santa Catarina",
    campoGithub:"https://github.com/paulinhodeveloper",
    campoInstagram:"https://github.com/paulinhodeveloper",
    campoLinkedin:"https://www.linkedin.com/in/paulo-henrique-santos-borges-027413205/"
  },
  {
    campoBanner:"https://media2.giphy.com/media/20XFN3vWiU79fBQgBc/200w.webp?cid=ecf05e47tzaj7pc9hfo92cekjl3fdf4ftjdahnw1zps76g0m&rid=200w.webp&ct=g",
    campoGithubFoto:"https://media-exp1.licdn.com/dms/image/C5603AQFkKeUFOcuyrw/profile-displayphoto-shrink_200_200/0/1617066547740?e=1669852800&v=beta&t=4HONo1azoXMrF7NMrD65x2jt1VTvhLdqdo_L1F2HvCg",
    campoNome:"Áderson Costa ",
    campoOcupacao:"Desenvolvedor Front End",
    campoTelefone:" 11 - 0000-0000",
    campoEmail:"ÁdersonCosta@gmail.com",
    campoPortifolio:"https://www.linkedin.com/in/adersoncc/",
    campoCidade:"São Luís",
    campoGithub:"",
    campoInstagram:"",
    campoLinkedin:"https://www.linkedin.com/in/adersoncc/"
  },
]
for(var postPrincipal of postsPrincipais){
  containerElemento.innerHTML += `
  <div class="card">
    <div class="banner" style="background-image: url('${postPrincipal.campoBanner}');"></div>

    <div class="img-github">
      <img src="${postPrincipal.campoGithubFoto}" alt="" />
    </div>

    <div class="apresentacao">
      <h2>${postPrincipal.campoNome} </h2>
      <h3>${postPrincipal.campoOcupacao}</h3>
    </div>
    <div class="info">
      <i class="fa-solid fa-envelope"> <span>${postPrincipal.campoEmail}</span></i>
      <i class="fa-solid fa-phone-flip"> <span>+55${postPrincipal.campoTelefone}</span></i>
      <i class="fa-solid fa-globe"> <span><a href="${postPrincipal.campoPortifolio}" target ="blanc_">Site / Portifólio</a> </span></i>
      <i class="fa-solid fa-location-dot"> <span>${postPrincipal.campoCidade}</span></i>
    </div>

    <div class="redes">
      <a class="fa-brands fa-github" href="${postPrincipal.campoGithub}" target="_blank"></a>
      <a class="fa-brands fa-instagram" href="${postPrincipal.campoInstagram}" target="_blank"></a>
      <a class="fa-brands fa-linkedin" href="${postPrincipal.campoLinkedin}" target="_blank"></a>
    </div>
  </div>
        `

}



///////////// Inserindo um novo post depois de preencher o formulário
// Utilizando o event listenner para adicionar. E nessa caso, foi removido o onclick do botao lá no html

novaPostagemElemento.addEventListener('click', event => {
  // Para evitar o recarregamento da página no momento em que o botão de dentro do formulário é clicado.
  event.preventDefault()



  if(inputBanner.value == ''){ inputBanner.value = 'https://i.gifer.com/4V2C.gif' }
  if(inputGithub.value == ''){ inputGithub.value = 'dracula' }
  if(inputNome.value == ''){ inputNome.value = 'Dracula' }
  if(inputOcupacao.value == ''){ inputOcupacao.value = 'Theme VsCode' }
  if(inputEmail.value == ''){ inputEmail.value = 'zeno@draculatheme.com' }
  if(inputTelefone.value == ''){ inputTelefone.value = ' 11 99999-9999' }
  if(inputPortifolio.value == ''){ inputPortifolio.value = 'https://draculatheme.com/about' }
  if(inputCidade.value == ''){ inputCidade.value = 'Dracula é do Brasil' }
  if(inputInstagram.value == ''){ inputInstagram.value = 'https://www.instagram.com/explore/tags/draculatheme/' }
  if(inputInstagram.value == ''){ inputInstagram.value = 'https://www.linkedin.com/' }
  


  containerElemento.innerHTML += `
  <div class="card">
    <div class="banner" style="background-image: url('${inputBanner.value}');"></div>

    <div class="img-github">
      <img src="https://www.github.com/${inputGithub.value}.png" alt="" />
    </div>

    <div class="apresentacao">
      <h2>${inputNome.value} </h2>
      <h3>${inputOcupacao.value}</h3>
    </div>
    <div class="info">
      <i class="fa-solid fa-envelope"> <span>${inputEmail.value}</span></i>
      <i class="fa-solid fa-phone-flip"> <span>+55${inputTelefone.value}</span></i>
      <i class="fa-solid fa-globe"> <span><a href="${inputPortifolio.value}" target ="blanc_">Site / Portifólio </a> </span></i>
      <i class="fa-solid fa-location-dot"> <span>${inputCidade.value}</span></i>
    </div>

    <div class="redes">
      <a class="fa-brands fa-github" href="https://www.github.com/${inputGithub.value}" target="_blank"></a>
      <a class="fa-brands fa-instagram" href="${inputInstagram.value}" target="_blank"></a>
      <a class="fa-brands fa-linkedin" href="${inputLinkedin.value}" target="_blank"></a>
    </div>
  </div>
        `

  //////////// Para limpar os campos de inout depois de enviar

  inputBanner.value = ""
  inputGithub.value = ""
  inputNome.value = ""
  inputOcupacao.value = ""
  inputTelefone.value = ""
  inputEmail.value = ""
  inputPortifolio.value = ""
  inputCidade.value = ""
  inputInstagram.value = ""
  inputLinkedin.value = ""
})
