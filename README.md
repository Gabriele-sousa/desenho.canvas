# desenho.canvas
## Desenho.canvas

 Essa é uma atividade passada em aula utilizando HTML e JavaScript. O objetivo do projeto é usar as formas no canvas e fazer um desenho utilizando JavaScript.
 
### Estrutura do projeto

 O projeto é composto pelos seguintes arquivos e pastas:
 * kirby.html-Página inicial site.
 * img/-Pasta de imagens com  o processo do projeto.
 * js/index.html- Arquivo JavaScript para desenhar no canvas.
  
### Desenvolvimento

Para criar o desenho, foram ultilizados os seguites passos:

1. estrutura do site:
 - Criar a estrutura básica do html e adicinar a tag canvas.
 - Adicionar o JavaScript.

2. Pegando id:
 - Foi pego o id do canvas com o nome de 'kirby', e depois foi pego o contexto 2d do canvas.
 - O canvas foi deixado do tamanho da tela.

3. Criando o corpo:
 
 - Primeiro foi criado um circulo com o 'ctx.arc' com a cor base `#FFCBF6` e a cor do stroke sendo `#ff7fe9`.
 <img src="img/1.png"/>
 
 - Depois foi feitas duas curvas com o 'ctx.bezierCurveTo' ligados ao circulo para criar os braços.
 <img src="img/2.png"/>
 
 - depois foi adicionas mais duas curvas ligadas ao circulo com a cor base `f30000` e a cor do stroke sendo `c40000` para criar os pés.
 <img src="img/3.png"/>
 
4. Criando o rosto:
 - foi adicionado um circulo pequeno mais a direita com a cor base `#000000` e a cor do stroke sendo `#000000` para criar o olho, e um circulo mais pequeno com a cor base `white` para fazer o brilho do olho.
 - depois 
