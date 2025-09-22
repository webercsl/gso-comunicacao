# Sistema de Comunicação Interna Empresarial
Este repositório contém o código-fonte de um sistema de comunicação interno desenvolvido para facilitar a colaboração e troca de informações entre os membros de uma organização. O sistema oferece funcionalidades avançadas de chat em tempo real, incluindo canais, mensagens diretas, threads e reações, promovendo um ambiente produtivo e eficiente para equipes de trabalho.

## Funcionalidades

- Espaços de Trabalho: Cada usuário pode participar de múltiplos espaços de trabalho para organizar suas comunicações por departamentos ou projetos;
- Canais: Criação de canais públicos ou privados para facilitar a comunicação em grupo;
- Mensagens Diretas: Comunicação individual entre usuários dentro do sistema;
- Threads: Organização de conversas dentro de tópicos específicos para evitar confusão em discussões de grupo;
- Reações às Mensagens: Usuários podem reagir às mensagens com emojis para uma comunicação mais dinâmica e informal;
- Edição e Exclusão de Mensagens: Os usuários têm controle sobre as mensagens enviadas, podendo editá-las ou excluí-las quando necessário;
- Gestão de Membros: Funções de administrador e controle de permissões para garantir a segurança e a organização dentro dos espaços de trabalho.

## Stack utilizada

**Front-end:** Next, React, Typescript, TailwindCSS, Shadcn Ui

**Back-end:** Convex, Node


## Rodando localmente

Certifique-se de ter os seguintes softwares instalados em sua máquina:

- Node.js (versão 18 ou superior)
- npm

1. Clone o repositório
```bash
  git clone https://github.com/webercsl/gso-comunicacao.git nome-do-repositorio
  cd nome-do-repositorio
```

2. Entre no diretório do projeto

```bash
  cd nome-do-repositorio
```

3. Instale as dependências

```bash
  npm install
```

4. Rodar o projeto

```bash
  npm run dev
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`NEXT_PUBLIC_CONVEX_URL=URL_DO_CONVEX`

`MONGO_URI=URL_DO_MONGODB`


## Roadmap

- Adicionar chamada de video interna;

- Integração com o workspace Jira;


## Estrutura do Projeto

/**pages**: Contém as rotas da aplicação e o layout principal.
\
/**components**: Componentes reutilizáveis da interface de usuário.
\
/**lib**: Funções auxiliares e integrações com o backend (Convex, MongoDB).
\
/**styles**: Estilos globais e configurações de Tailwind CSS.
\
/**public**: Arquivos estáticos, como ícones e imagens.
## Deploy

O projeto está configurado para ser deployado na Vercel. Para fazer o deploy, basta conectar o repositório ao Vercel e configurar as variáveis de ambiente.


## Contribuindo

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.


