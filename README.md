Sistema de Comunicação Interna Empresarial
Este repositório contém o código-fonte de um sistema de comunicação interno desenvolvido para facilitar a colaboração e troca de informações entre os membros de uma organização. O sistema oferece funcionalidades avançadas de chat em tempo real, incluindo canais, mensagens diretas, threads e reações, promovendo um ambiente produtivo e eficiente para equipes de trabalho.

Funcionalidades
Espaços de Trabalho: Cada usuário pode participar de múltiplos espaços de trabalho para organizar suas comunicações por departamentos ou projetos.
Canais: Criação de canais públicos ou privados para facilitar a comunicação em grupo.
Mensagens Diretas: Comunicação individual entre usuários dentro do sistema.
Threads: Organização de conversas dentro de tópicos específicos para evitar confusão em discussões de grupo.
Reações às Mensagens: Usuários podem reagir às mensagens com emojis para uma comunicação mais dinâmica e informal.
Edição e Exclusão de Mensagens: Os usuários têm controle sobre as mensagens enviadas, podendo editá-las ou excluí-las quando necessário.
Gestão de Membros: Funções de administrador e controle de permissões para garantir a segurança e a organização dentro dos espaços de trabalho.
Tecnologias Utilizadas
Este projeto foi construído com as seguintes tecnologias:

Next.js: Framework React para renderização e geração de páginas estáticas ou dinâmicas.
React: Biblioteca JavaScript para construção da interface do usuário.
TypeScript: Utilizado para garantir tipagem estática e aumentar a confiabilidade do código.
Tailwind CSS: Framework CSS para estilização rápida e responsiva.
Shadcn UI: Design system para componentes UI reutilizáveis.
Convex: Utilizado como banco de dados e para a implementação da lógica de backend em tempo real, além de ser responsável pelo armazenamento de imagens de forma serverless.
MongoDB: Banco de dados NoSQL utilizado para armazenamento de informações estruturadas.
Node.js: Backend do sistema, utilizado para manipulação de dados e operações assíncronas.
Requisitos para Rodar o Projeto Localmente
Para rodar este projeto localmente, siga os passos abaixo:

1. Pré-requisitos
Certifique-se de ter os seguintes softwares instalados em sua máquina:

Node.js (versão 18 ou superior)
npm (ou yarn)
2. Clonar o Repositório
bash
Copiar código
git clone https://github.com/seuusuario/nome-do-repositorio.git
cd nome-do-repositorio
3. Instalar Dependências
bash
Copiar código
npm install
4. Configuração das Variáveis de Ambiente
Crie um arquivo .env.local na raiz do projeto e adicione as seguintes variáveis de ambiente:

bash
Copiar código
NEXT_PUBLIC_CONVEX_URL=URL_DO_CONVEX
MONGO_URI=URL_DO_MONGODB
5. Rodar o Projeto
bash
Copiar código
npm run dev
O projeto estará disponível em http://localhost:3000.

Estrutura do Projeto
/pages: Contém as rotas da aplicação e o layout principal.
/components: Componentes reutilizáveis da interface de usuário.
/lib: Funções auxiliares e integrações com o backend (Convex, MongoDB).
/styles: Estilos globais e configurações de Tailwind CSS.
/public: Arquivos estáticos, como ícones e imagens.
Deploy
O projeto está configurado para ser deployado na Vercel. Para fazer o deploy, basta conectar o repositório ao Vercel e configurar as variáveis de ambiente.

Contribuição
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto é licenciado sob a MIT License.
