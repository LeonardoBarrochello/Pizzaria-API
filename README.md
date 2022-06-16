# Pizzaria-API

Este é um projeto backend de Pedidos de Pizza feito referente  ao seguinte desafio : https://github.com/AmbulnzLLC/fullstack-challenge/tree/master/backend 

O desafio  consiste em construir uma api que posteriormente seria consumido por um client onde é possível :  
- consultar e cadastrar pizzas , 
- consultar e efetuar pedidos com base nas pizzas cadastrada

## Como rodar a aplicação

- Certifique que tenha o Nodejs instalado em sua máquina
- Clone o projeto e na raiz rode o comando npm install ou yarn para instalar todas as dependencias
- rode o comando 'yarn prisma migrate dev' para rodar todas as migrations e criar o banco de dados local na pasta **database** dentro de **src**
- rode o comand o 'yarn dev' ou 'npm run dev' para rodar a aplicação
- importe o arquivo json de documentação das requisições que está na raiz do projeto no insomnia
- você consegue visualizar os registros sendo cadastrados no banco rodando o prisma studio : 'yarn prisma studio' ou 'npx prisma studio' 
