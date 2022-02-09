
# API DE AUTENTICAÇÃO

Neste projeto iremos criar um microserviço de autenticação que poderá compor a sua caixinha de ferramentas e ser muito útil no seu dia a dia. 🔨🔧

## Pacotes instalados

        npm install -g typescript
        npm install --save-dev typescript
        npm install --save-dev @types/node
        npm install --save espress
        npm install --save-dev @types/express
        npm install --save-dev ts-node-dev
        npm install --save http-status-code

## Dificulades do projeto

Inicialmente faltava um pouco de compreensão mais aprofundada do assunto, mas, durante a prática foi sendo mais fácil entener o que estava acontecendo, e no desenvolver sinto que compreende um pouco mais sobre o node.js e a criação de uma API.

## Composição do nosso projeto

Neste projeto Temos alguns **Endpoints Base** que podem ser extendidos da forma mais adequada para seu contexto. 

São eles:

### Usuários

* GET /users
* GET /users/:uuid
* POST /users
* PUT /users/:uuid
* DELETE /users/:uuid

### Autenticação

* POST /token
* POST /token/validate



