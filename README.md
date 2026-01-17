# Lumis Pokédex

Pokédex interativa desenvolvida em **Vanilla JavaScript**, consumindo a **PokéAPI**, com busca global, paginação e layout responsivo baseado no design fornecido no Figma.

---

## 📌 Funcionalidades

- Listagem de Pokémon com dados da PokéAPI
- Busca global por nome (independente da página)
- Paginação dinâmica
- Paginação numérica conforme layout do Figma
- Layout responsivo (desktop, tablet e mobile)
- Destaque visual por tipo de Pokémon

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox e Grid)
- JavaScript (Vanilla JS)
- PokéAPI
- Google Fonts (DM Sans)
- Google Material Icons

---

## ▶️ Como executar o projeto

### Opção 1 — Live Server (recomendado)

1. Abra o projeto no **VS Code**
2. Clique com o botão direito no `index.html`
3. Selecione **“Open with Live Server”**

### Opção 2 — Abrir diretamente

Também é possível abrir o arquivo `index.html` diretamente no navegador  
*(recomenda-se Live Server por conta do uso de ES Modules)*

---

## Notas Explicativas (Decisões Técnicas)

- O projeto foi desenvolvido em **Vanilla JavaScript** .
- A estrutura de arquivos foi mantida simples (`api.js` e `main.js`), separando claramente a lógica de comunicação com a API da lógica da interface.
- A busca foi implementada de forma **global**, utilizando o endpoint de Pokémon por nome da PokéAPI.
- O layout prioriza a estrutura visual sugerida no Figma e responsividade.
- As cores dos tipos de Pokémon foram aplicadas dinamicamente de acordo com sua categoria.

---


