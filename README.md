### <div align="center">Escolha seu idioma | Choose your language </div>

<div align="center">

[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/edilan-ribeiro/project-github-api/blob/main/README.md) 
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/edilan-ribeiro/project-github-api/blob/main/README.en.md)
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

</div>
<br>
<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/edilan-ribeiro/project-github-api">
    <img src="./src/images/readme/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Projeto com fetch e GitHub api</h3>

  <p align="center">
    Projeto que busca os dados de usuário no github e retorna informações importantes
  </p>
  
  <a href="https://edilan-ribeiro.github.io/project-github-api">Clique aqui para abrir o projeto online</a>
</div>

<br>

<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
        <li><a href="#notas-de-destaque">Notas de destaque</a></li>
        <li><a href="#desafios-e-aprendizados">Desafios e aprendizados</a></li>
        </ul>
    </li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<br><br>

## Sobre o projeto

<img src="./src/images/readme/desktop.gif" alt="page on large desktop" width="350" height="320">

<br>

Este projeto permite uma busca aos dados de usuário no github e retorna informações como nome, bio, seguidores, imagem e dados de repositórios.

Uma API, ou Interface de Programação de Aplicativos, é um conjunto de regras e protocolos que permite que diferentes softwares se comuniquem e interajam entre si de maneira eficiente. Elas são essenciais para o desenvolvimento de aplicativos modernos, especialmente quando se trata de criar serviços complexos e escaláveis.


<br>
<strong>Como ficou no mobile</strong>:

<br>

<img src="./src/images/readme/mobile.gif" alt="page on mobile" width="150" height="300">

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Feito com


![HTML5](https://img.shields.io/badge/HTML5%20-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br>

## Notas de destaque

<br>

Layout inicial fornecido por devemdobro no github
<a href="https://github.com/devemdobro/projeto-inicial-fetch-github-api" target="_blank"> você pode conferir esse layout base clicando aqui</a>

<br>

Os destaques desta página incluem:

- Layout responsivo
- Busca por nome de usuário
- Mensagens de erro em caso de falha
- Eventos recentes no perfil github
- Informações adicionais sobre os repositórios

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Desafios e aprendizados

🗨 Inserir dados por javascript usando tags HTML ao invés de colocar apenas o texto no elemento HTML já pronto certamente foi uma novidade adicionada ao cinto de utilidades deste dev.

🤯 Quando o código estava pronto excluí um repositório e para minha surpresa as coisas pararam de funcionar! Isso me permitiu capturar um erro que era inesperado pelo código até o momento. 

Quando um repositório é excluído recentemente do github a API continua informando o repositório apagado em atividade recente, mas não informa os seus eventos, como a mensagem dos eventos depende de ler o array em  ```repoEvent.payload.commits[0].message``` o código para a execução.

Para solucionar esse problema é necessário identificar a existência do array ANTES de tentar ler ele, desta forma:
<br>

``` 
repoEvent.payload.commits?.[0]?.message ?? '⚠ Não há mensagem de commit!'

```

😵 A documentação um pouco confusa da API leva a um novo problema, repositórios que de fork aonde não foi feito nenhum commit não retornam informação da linguagem de programação usada quando claramente foi utilizada uma linguagem de programação, além disso infelizmente não fazem distinção entre repositórios de com programação e repositorios apenas com readme.


Deu para aprender:
 - Inserção de tags HTML através do JavaScript 
 - Divisão de responsabilidades nem sempre sai como o planejado
 - Librarys e frameworks podem ajudar muito em determinadas funções (apesar de não terem sido usados aqui)


## Contato

💌 Para me mandar uma mensagem basta usar um dos botões abaixo!<br>

  <a href = "mailto:edilanbusiness@gmail.com" target="_blank"><img src="https://img.shields.io/badge/-gmail-333333?style=flat&logo=gmail&logoColor=EA4335" height="25"></a>
  <a href="https://www.linkedin.com/in/edilan-ribeiro-santos" target="_blank"><img src="https://img.shields.io/badge/-linkedin-333333?style=flat&logo=linkedin&logoColor=0A66C2" height="25"></a> 
  <a href="https://whatsa.me/5561983769634/?t=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20GitHub!" target="_blank">
  <img src="https://img.shields.io/badge/-whatsapp-333333?style=flat&logo=whatsapp&logoColor=25D366" height="25"></a>



<p align="right">(<a href="#readme-top">back to top</a>)</p>