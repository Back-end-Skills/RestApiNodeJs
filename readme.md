<h1 text-align:"center">REST API NODE JS </h1>
<img src="./node-js-api.png" />
## O que é Express e Node ?
<p>Node (ou formalmente Node.js) é um ambiente em tempo de execução open-source (código aberto) e multiplataforma que permite aos desenvolvedores criarem todo tipo de aplicativos e ferramentas do lado servidor (backend) em JavaScript.</p> 
<p> Node é usado fora do contexto de um navegador (ou seja executado diretamente no computador ou no servidor). Como tal, o ambiente omite APIs JavaScript específicas do navegador e adiciona suporte para APIs de sistema operacional mais tradicionais, incluindo bibliotecas de sistemas HTTP e arquivos.</p>

// Carrega o modulo HTTP do Node
`var http = require("http");`

// Cria um servidor HTTP e uma escuta de requisições para a porta 8000
`http.createServer(function(request, response) {`

  // Configura o cabeçalho da resposta com um status HTTP e um Tipo de Conteúdo
  `response.writeHead(200, {'Content-Type': 'text/plain'});`

   // Manda o corpo da resposta "Olá Mundo"
   `response.end('Olá Mundo\n');}).listen(8000, '127.0.0.1');`

// Imprime no console a URL de acesso ao servidor
`console.log('Servidor executando em http://127.0.0.1:8000/');`

## Express
<p> 
Express é o framework Node mais popular e a biblioteca subjacente para uma série de outros frameworks do Node. O Express oferece soluções para:</p>
<p> 
Gerenciar requisições de diferentes verbos HTTP em diferentes URLs.</p>
<p> Integrar "view engines" para inserir dados nos templates.</p>
<p> Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.</p>
<p> Adicionar novos processos de requisição por meio de "middleware" em qualquer ponto da "fila" de requisições.</p>
<p> O Express é bastante minimalista, no entanto, os desenvolvedores têm liberdade para criar pacotes de middleware específicos com o objetivo de resolver problemas específicos que surgem no desenvolvimento de uma aplicação. </p>Há bibliotecas para trabalhar com cookies, sessões, login de usuários, parâmetros de URL, dados em requisições POST, cabeçalho de segurança e tantos outros. Você pode achar uma lista de pacotes de middleware mantidos pela equipe Express em Express Middleware (juntamente com uma lista de pacotes populares desenvolvidos por terceiros).</p>

`var express = require('express');`
`var app = express();`

`app.get('/', function(req, res) {`
  `res.send('Olá Mundo!');`
`});`

`app.listen(3000, function() {`
 ` console.log('App de Exemplo escutando na porta 3000!');`
`});`

## Pacotes
`npm install --save express`

2. Atualização automática
`npm install --save-dev nodemon`

3. Usando Morgan para salvar log das requests
`npm install morgan`



<p>Referências:</p>

https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction

