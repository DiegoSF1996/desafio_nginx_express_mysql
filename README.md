# Projeto: Stack NGINX + Node.js + MySQL com Docker

Este projeto configura um ambiente Docker com três containers:

- **Nginx**: atuando como proxy reverso
- **Node.js**: aplicação ExpressJS que faz `SELECT` no banco de dados
- **MySQL**: banco de dados persistente

## 🌐 Fluxo de funcionamento

1. O **Nginx** recebe requisições HTTP na porta 8032.
2. Ele redireciona para o container do **Node.js** (porta 80).
3. O **Node.js** executa um `SELECT` no **MySQL** e retorna os dados em JSON.
