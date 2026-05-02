# banco-api-performance

## 📌 Introdução
Este repositório contém testes de performance desenvolvidos utilizando **JavaScript** e a ferramenta **k6**, com o objetivo de avaliar a estabilidade, escalabilidade e tempo de resposta de APIs.

Os testes utilizam a variável de ambiente `BASE_URL`, permitindo executar os cenários em diferentes ambientes (local, homologação, produção) sem necessidade de alterar o código-fonte.

---

## 🚀 Tecnologias

- JavaScript (ES6+)
- k6
- Node.js (opcional)

---

## 📁 Estrutura do Repositório

├── config/
│   ├── config.js
│
├── fixtures/
│   └── postLogin.js
│
├── helpers/
│   ├── autenticacao.js
│
├── test/
│   └── login.test.json
│   └── tranferencias.test.json
│
├── utils/
│   └── variaveis.js
│
└── README.md

---

## 🎯 Objetivo de cada grupo de arquivos

### config/
Centraliza a variável BASE_URL

### fixtures/
Possui dados para login (massa de testes)

### helpers/
Funções reutilizáveis

### test/
validações do código

### utils/
Variaveis do ambiemte

---

## 🛠️ Modo de instalação

git clone https://github.com/monteirohebert/banco-api-performance.git
cd banco-api-performance

Instalar k6:
- Windows: choco install k6
- Mac: brew install k6
- Linux: sudo apt install k6

---

## ▶️ Execução do projeto

BASE_URL=https://api.exemplo.com k6 run tests/load/test.js

---

## 📊 Execução com dashboard e exportação

K6_WEB_DASHBOARD=true \
K6_WEB_DASHBOARD_EXPORT=html-report.html \
BASE_URL=https://api.exemplo.com \
k6 run tests/login.test.js

---

## 📎 Observações

- Definir BASE_URL
- Garantir ambiente disponível
