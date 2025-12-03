# Requirements Frontend - Sistema LAFAC

## 1. Autenticação e Perfil de Usuário

### 1.1 Tela de Login
- [ ] Formulário de login com email e senha
- [ ] Validação de campos em tempo real
- [ ] Botão "Entrar"
- [ ] Link "Esqueci minha senha"
- [ ] Feedback visual de erros
- [ ] Loading state durante autenticação
- [ ] Redirecionamento após login bem-sucedido

### 1.2 Perfil de Usuário
- [ ] Exibir avatar com inicial do nome
- [ ] Exibir nome completo e email
- [ ] Exibir badge de função (Superadmin, President, Vice-President)
- [ ] Criar abas de navegação: Perfil, Segurança, Atividade
- [ ] Formulário de edição de perfil com campos:
  - [ ] Nome Completo (validação de texto)
  - [ ] Email (validação de formato)
  - [ ] Telefone (máscara de telefone)
  - [ ] Data de Nascimento (date picker)
  - [ ] Matrícula (validação de formato)
  - [ ] CPF (validação e máscara)
  - [ ] Instituição (dropdown ou texto)
  - [ ] Período (dropdown)
- [ ] Botão "Editar Perfil" para habilitar edição
- [ ] Botão "Salvar" alterações
- [ ] Botão "Cancelar" edição
- [ ] Feedback visual ao salvar (success/error)
- [ ] Exibir informações da conta:
  - [ ] Data de membro desde (formatada)
  - [ ] Último login (data e hora formatadas)
  - [ ] Total de logins

## 2. Layout Global

### 2.1 Header
- [ X ] Logo LAFAC no canto superior esquerdo (clicável)
- [ X ] Subtítulo "Liga Acadêmica"
- [ X ] Menu de navegação horizontal responsivo
- [ X ] Itens do menu com ícones:
  - [ X ] 📅 DashBoard
  - [ X ] 🎯 Atividades
  - [ X ] 🎪 Eventos
  - [ X ] 👥 Membros
  - [ X ] 💬 Projetos
  - [ X ] 📚 Grupos de Estudo
  - [ X ] 📋 Processo Seletivo
  - [ X ] 👤 Perfil
  - [ X ] Sair
- [ ] Highlight do menu item ativo
- [ ] Ícone de notificações (sino) com badge contador
- [ ] Avatar do usuário logado (clicável)
- [ X ] Nome do usuário logado
- [ ] Badge de função do usuário
- [ ] Dropdown menu do usuário (logout, configurações)
- [ ] Menu hamburger para mobile

### 2.2 Design System
- [ ] Paleta de cores definida:
  - [ ] Vermelho (#FF0000 ou similar) para "Atrasado"
  - [ ] Laranja (#FFA500 ou similar) para "Urgente"
  - [ ] Azul (#0066FF ou similar) para "Em Andamento"
  - [ ] Verde (#00CC00 ou similar) para "Concluído"
  - [ ] Amarelo (#FFD700 ou similar) para "In Production"
- [ ] Componente Card reutilizável
- [ ] Componente Badge reutilizável
- [ ] Componente Button com variantes (primary, secondary, danger)
- [ ] Componente Avatar com iniciais
- [ ] Componente Modal reutilizável
- [ ] Componente Dropdown reutilizável
- [ ] Componente Input com validação
- [ ] Componente Date/Time Picker
- [ ] Sistema de Grid responsivo
- [ ] Breakpoints para mobile, tablet, desktop
- [ ] Animações e transições suaves
- [ ] Estados de hover/focus/active

### 2.3 Componentes Globais
- [ ] Loading spinner/skeleton
- [ ] Toast notifications (success, error, warning, info)
- [ ] Confirmation dialog
- [ ] Empty state illustrations
- [ ] Error boundary
- [ ] 404 page
- [ ] 403 (unauthorized) page

## 3. Calendário

### 3.1 Visualização
- [ ] Grid de calendário mensal
- [ ] Cabeçalho com dias da semana (Dom-Sáb)
- [ ] Células para cada dia do mês
- [ ] Destacar dia atual (borda ou background diferente)
- [ ] Exibir nome do mês e ano no topo
- [ ] Toggle button "Semanal" / "Mensal"
- [ ] Setas de navegação (← mês anterior / próximo mês →)
- [ ] Animação ao trocar de mês
- [ ] Visualização semanal alternativa

### 3.2 Informações de Timezone
- [ ] Badge mostrando fuso horário (Brasil GMT-3)
- [ ] Relógio digital mostrando hora atual
- [ ] Atualização do relógio em tempo real

### 3.3 Eventos no Calendário
- [ ] Renderizar eventos como pills/badges nas células
- [ ] Código de cores por tipo:
  - [ ] Laranja para Deadlines
  - [ ] Verde para Study Groups
  - [ ] Azul para eventos gerais
- [ ] Título do evento (truncado com "..." se necessário)
- [ ] Tooltip ao fazer hover mostrando detalhes
- [ ] Click para abrir modal de detalhes
- [ ] Indicador de múltiplos eventos no mesmo dia
- [ ] Scroll/overflow para dias com muitos eventos

### 3.4 Modal de Evento
- [ ] Visualizar detalhes completos do evento
- [ ] Título, data, hora, local, descrição
- [ ] Lista de participantes
- [ ] Botão "Editar"
- [ ] Botão "Excluir"
- [ ] Botão "Fechar"

### 3.5 Criação/Edição de Eventos
- [ ] Botão "+ Criar Evento" destacado
- [ ] Modal/form para novo evento
- [ ] Campos:
  - [ ] Título (input text)
  - [ ] Tipo (dropdown: Deadline, Study Group, etc.)
  - [ ] Data (date picker)
  - [ ] Hora (time picker)
  - [ ] Descrição (textarea)
  - [ ] Participantes (multi-select)
- [ ] Validação de campos obrigatórios
- [ ] Botão "Salvar"
- [ ] Botão "Cancelar"
- [ ] Feedback visual ao salvar

## 4. Rastreamento de Atividades

### 4.1 Dashboard de Atividades
- [ ] Grid de 4 cards de resumo:
  - [ ] Card "Atrasadas" (vermelho, ícone ⚠️)
  - [ ] Card "Urgentes" (laranja, ícone ⏰)
  - [ ] Card "Em Andamento" (azul, ícone 🔄)
  - [ ] Card "Concluídas" (verde, ícone ✓)
- [ ] Contador numérico em cada card
- [ ] Click no card para filtrar lista
- [ ] Botão "Lembrar Urgentes" (laranja, destacado)

### 4.2 Lista de Atividades
- [ ] Cards de atividade com barra lateral colorida (por status)
- [ ] Layout de cada card:
  - [ ] Título (h3, bold)
  - [ ] Badges de status (Overdue, URGENT)
  - [ ] Descrição (texto secundário)
  - [ ] Tempo de atraso (ex: "13d atrasado", cor vermelha)
  - [ ] Ícone + número de atribuídos
  - [ ] Avatares dos membros (máx 3-4 visíveis, + contador)
- [ ] Hover effects nos cards
- [ ] Botão "✓ Concluir" (verde)
- [ ] Botão "🔔 Lembrar" (azul)
- [ ] Ordenação por prioridade/data
- [ ] Filtros (status, responsável, data)
- [ ] Campo de busca por título
- [ ] Paginação ou infinite scroll
- [ ] Empty state quando não há atividades

### 4.3 Modal de Atividade
- [ ] Visualizar detalhes completos
- [ ] Editar inline (se tiver permissão)
- [ ] Histórico de alterações
- [ ] Comentários/notas

### 4.4 Criação/Edição de Atividades
- [ ] Botão "+ Nova Atividade"
- [ ] Modal/form com campos:
  - [ ] Título (input text)
  - [ ] Descrição (textarea, rich text)
  - [ ] Prazo (date picker)
  - [ ] Prioridade (dropdown: Baixa, Média, Alta, Urgente)
  - [ ] Atribuir membros (multi-select com avatares)
- [ ] Validação de campos
- [ ] Botão "Criar/Salvar"
- [ ] Botão "Cancelar"
- [ ] Feedback visual

### 4.5 Ações Rápidas
- [ ] Checkbox para marcar como concluída
- [ ] Ícone de lembrete (envia notificação)
- [ ] Menu de ações (⋮): editar, duplicar, excluir
- [ ] Confirmação antes de excluir

## 5. Gestão de Membros

### 5.1 Dashboard de Membros
- [ ] Grid de 4 cards de resumo:
  - [ ] Membros Ativos (verde, ícone 👥)
  - [ ] Membros Inativos (vermelho, ícone 👤)
  - [ ] Diretoria (roxo, ícone 👑)
  - [ ] Total de Membros (azul, ícone 📊)
- [ ] Contador numérico em cada card
- [ ] Click para filtrar lista

### 5.2 Busca e Filtros
- [ ] Campo de busca com ícone 🔍
- [ ] Placeholder "Buscar por nome ou email..."
- [ ] Busca em tempo real (debounced)
- [ ] Filtro dropdown "Todas as Funções"
  - [ ] President
  - [ ] Vice-President
  - [ ] Member
  - [ ] etc.
- [ ] Filtro dropdown "Status"
  - [ ] Todos
  - [ ] Ativos
  - [ ] Inativos
- [ ] Botão "Limpar filtros"

### 5.3 Lista de Membros
- [ ] Grid/lista de cards de membros
- [ ] Layout de cada card:
  - [ ] Avatar com iniciais (colorido)
  - [ ] Nome completo (h3)
  - [ ] Cargo/função com ícone badge
  - [ ] Email (com ícone 📧)
  - [ ] Telefone (com ícone 📱)
  - [ ] Data de membro desde (com ícone 📅)
- [ ] Ícones de ação:
  - [ ] 👁️ Visualizar
  - [ ] ✏️ Editar
- [ ] Hover effects
- [ ] Ordenação (nome, data, cargo)
- [ ] Paginação

### 5.4 Modal de Membro
- [ ] Visualizar perfil completo
- [ ] Informações detalhadas
- [ ] Histórico de atividades
- [ ] Botão "Editar"

### 5.5 Criação/Edição de Membros
- [ ] Botão "+ Adicionar Membro" (azul, destacado)
- [ ] Modal/form com campos:
  - [ ] Nome completo
  - [ ] Email
  - [ ] Telefone
  - [ ] Cargo/função (dropdown)
  - [ ] Data de entrada (date picker)
  - [ ] Status (toggle ativo/inativo)
  - [ ] Upload de foto (opcional)
- [ ] Validação de campos
- [ ] Botão "Salvar"
- [ ] Botão "Cancelar"
- [ ] Confirmação antes de desativar/excluir

## 6. Postagens (Social Media)

### 6.1 Header da Página
- [ ] Título "Posts" com contador (ex: "14 posts")
- [ ] Botão "+ Criar Post" (azul, destacado)

### 6.2 Filtros de Status
- [ ] Chips/tabs de filtro:
  - [ ] Todos (padrão)
  - [ ] 🟡 In Production
  - [ ] 🔵 Posted
  - [ ] 🔴 Expired
  - [ ] 🟢 Done
- [ ] Highlight do filtro ativo
- [ ] Contador por status

### 6.3 Cards de Postagens
- [ ] Grid de cards (2 colunas)
- [ ] Layout de cada card:
  - [ ] Título (h3)
  - [ ] Badges de status e tipo
  - [ ] Descrição/resumo
  - [ ] Prazo com ícone 📅
  - [ ] Seção "Funções Atribuídas":
    - [ ] Ícone da função (🎨 designer, 🔬 researcher, 🎬 editor)
    - [ ] Nome do responsável
    - [ ] Status indicator (⚫ amarelo/verde)
  - [ ] Links relacionados (se houver)
- [ ] Ícones de ação no canto:
  - [ ] ✏️ Editar
  - [ ] 🗑️ Excluir
- [ ] Borda colorida por status

### 6.4 Modal de Postagem
- [ ] Visualizar detalhes completos
- [ ] Preview do conteúdo
- [ ] Histórico de alterações
- [ ] Comentários da equipe

### 6.5 Criação/Edição de Postagens
- [ ] Modal/form com campos:
  - [ ] Título
  - [ ] Tipo (Feed Post, Story, Reels, etc.)
  - [ ] Descrição/caption (textarea, contador de caracteres)
  - [ ] Prazo (date picker)
  - [ ] Plataformas (checkboxes: Instagram, Facebook, etc.)
  - [ ] Atribuir funções:
    - [ ] Designer (select member)
    - [ ] Researcher (select member)
    - [ ] Video Editor (select member)
  - [ ] Links relacionados (input múltiplo)
  - [ ] Upload de arquivos/imagens
- [ ] Preview do post
- [ ] Botão "Salvar"
- [ ] Botão "Publicar agora"
- [ ] Botão "Agendar"

## 7. Grupos de Estudo

### 7.1 Header da Página
- [ ] Título "Grupos de Estudo"
- [ ] Botão "+ Criar Grupo de Estudo" (azul)

### 7.2 Lista de Grupos
- [ ] Grid de cards (2 colunas)
- [ ] Layout de cada card:
  - [ ] Título (h3)
  - [ ] Badges de status (Done, Finished/Unfinished)
  - [ ] Ministrante com ícone 👨‍🏫
  - [ ] Modo (Online 💻 / Presencial 🏢)
  - [ ] Data e horário (📅 + 🕐 + timezone)
  - [ ] Seção "Atribuições":
    - [ ] 📊 Pesquisa/PowerPoint → Nome
    - [ ] 📝 Quizzes/Material → Nome
  - [ ] Seção "Materiais":
    - [ ] Lista de arquivos ou "Nenhum material enviado ainda"
  - [ ] Ícone de favorito ⭐ (toggle)
- [ ] Menu de ações (⋮)

### 7.3 Modal de Grupo
- [ ] Visualizar detalhes completos
- [ ] Download de materiais
- [ ] Lista de participantes
- [ ] Botão "Editar"

### 7.4 Criação/Edição de Grupos
- [ ] Modal/form com campos:
  - [ ] Título
  - [ ] Ministrante (select member)
  - [ ] Modo (radio: Online/Presencial)
  - [ ] Data (date picker)
  - [ ] Horário (time picker)
  - [ ] Local (input, se presencial)
  - [ ] Link da reunião (input, se online)
  - [ ] Atribuições:
    - [ ] Pesquisa/PowerPoint (select member)
    - [ ] Quizzes/Material (select member)
  - [ ] Upload de materiais
- [ ] Validação
- [ ] Botões de ação

### 7.5 Gerenciamento de Materiais
- [ ] Área de upload (drag & drop)
- [ ] Lista de materiais anexados
- [ ] Preview de arquivos
- [ ] Download individual
- [ ] Excluir material

## 8. Eventos

### 8.1 Header da Página
- [ ] Título "Eventos"
- [ ] Botão "+ Criar Evento" (azul)

### 8.2 Filtros por Tipo
- [ ] Chips/tabs de filtro:
  - [ ] Todos
  - [ ] Simpósio
  - [ ] Palestra
  - [ ] Workshop
  - [ ] Ação
  - [ ] Minicurso
  - [ ] Outro
- [ ] Highlight do filtro ativo

### 8.3 Cards de Eventos
- [ ] Grid de cards (2 colunas)
- [ ] Layout de cada card:
  - [ ] Título (h3)
  - [ ] Badge de tipo (colorido)
  - [ ] Status com checkmark ✓ (se completado)
  - [ ] Data e horário (📅 + 🕐 + GMT-3)
  - [ ] Local/endereço (📍)
  - [ ] Número de membros atribuídos (👥 + número)
  - [ ] Descrição adicional (texto secundário)
- [ ] Ícones de ação:
  - [ ] ✏️ Editar
  - [ ] 🗑️ Excluir
- [ ] Indicador visual de eventos passados vs futuros

### 8.4 Modal de Evento
- [ ] Visualizar detalhes completos
- [ ] Lista de participantes
- [ ] Mapa do local (se presencial)
- [ ] Botão "Adicionar ao calendário"
- [ ] Botão "Editar"

### 8.5 Criação/Edição de Eventos
- [ ] Modal/form com campos:
  - [ ] Título
  - [ ] Tipo (dropdown)
  - [ ] Data (date picker)
  - [ ] Horário (time picker)
  - [ ] Local/endereço (input com autocomplete)
  - [ ] Descrição (textarea, rich text)
  - [ ] Atribuir membros (multi-select)
  - [ ] Upload de banner/capa
- [ ] Validação
- [ ] Botão "Criar/Salvar"
- [ ] Botão "Cancelar"
- [ ] Checkbox "Marcar como concluído"

## 9. Processo Seletivo

### 9.1 Header da Página
- [ ] Título "Processo Seletivo"
- [ ] Botões de ação:
  - [ ] "👥 Entrevistadores" (roxo)
  - [ ] "✓ Ativar Processo" / "✕ Desativar Processo" (verde/vermelho)
  - [ ] "⚖️ Pesos" (cinza)
  - [ ] "+ Adicionar Candidato" (azul)

### 9.2 Status do Processo
- [ ] Alert/banner de status:
  - [ ] Vermelho quando INATIVO
  - [ ] Verde quando ATIVO
- [ ] Mensagem clara sobre aceitação de inscrições
- [ ] Ícone de status

### 9.3 Modal de Configuração de Pesos
- [ ] Título "Pesos Atuais das Notas"
- [ ] Sliders ou inputs:
  - [ ] Peso do Teste (0-100%)
  - [ ] Peso da Entrevista (0-100%)
- [ ] Validação (soma = 100%)
- [ ] Fórmula exibida:
  - [ ] Nota Final = (Teste × 0%) + (Média Entrevista × 100%)
- [ ] Preview do cálculo
- [ ] Botão "Salvar"
- [ ] Botão "Cancelar"

### 9.4 Lista de Candidatos
- [ ] Cards de candidatos
- [ ] Layout de cada card:
  - [ ] Nome completo (h3)
  - [ ] Email (📧)
  - [ ] Badge de status (Approved 🟢 / Rejected 🔴 / Pending 🟡)
  - [ ] Instituição (🏫)
  - [ ] Período (📚)
  - [ ] Matrícula (🎓)
  - [ ] Data de nascimento (🎂)
  - [ ] Carta de motivação (expandível/colapsável)
  - [ ] Dropdown de status (select)
  - [ ] Botão "📝 Entrevista"
  - [ ] Data de inscrição (📅)
- [ ] Filtros por status
- [ ] Campo de busca
- [ ] Ordenação (data, nome, status)

### 9.5 Modal de Entrevista
- [ ] Nome do candidato
- [ ] Data e horário (schedulable)
- [ ] Entrevistadores (multi-select)
- [ ] Formulário de avaliação:
  - [ ] Critérios com notas (0-10)
  - [ ] Observações (textarea)
- [ ] Cálculo automático da média
- [ ] Botão "Salvar Avaliação"

### 9.6 Modal de Entrevistadores
- [ ] Lista de membros que são entrevistadores
- [ ] Adicionar/remover entrevistadores
- [ ] Visualizar candidatos atribuídos
- [ ] Estatísticas (nº de entrevistas realizadas)

### 9.7 Modal de Adicionar Candidato
- [ ] Form com campos:
  - [ ] Nome completo
  - [ ] Email
  - [ ] Telefone
  - [ ] Instituição
  - [ ] Período
  - [ ] Matrícula
  - [ ] Data de nascimento
  - [ ] Carta de motivação (textarea, contador)
  - [ ] Upload de currículo/documentos
- [ ] Validação de campos
- [ ] Botão "Adicionar"

## 10. Sistema de Notificações

### 10.1 Dropdown de Notificações
- [ ] Ícone de sino no header
- [ ] Badge com contador (vermelho)
- [ ] Click abre dropdown
- [ ] Lista de notificações:
  - [ ] Ícone por tipo
  - [ ] Título da notificação
  - [ ] Timestamp relativo (ex: "há 2 horas")
  - [ ] Status lida/não lida (bold se não lida)
- [ ] Marcar como lida (click na notificação)
- [ ] Botão "Marcar todas como lidas"
- [ ] Link "Ver todas" (página de notificações)
- [ ] Empty state: "Nenhuma notificação"
- [ ] Scroll infinito ou paginação

### 10.2 Página de Notificações
- [ ] Lista completa de notificações
- [ ] Filtros (todas, não lidas, por tipo)
- [ ] Marcar como lida/não lida
- [ ] Excluir notificação
- [ ] Paginação

### 10.3 Tipos de Notificações
- [ ] 🎯 Atividade atribuída
- [ ] ⏰ Atividade próxima do prazo
- [ ] ⚠️ Atividade atrasada
- [ ] 🎪 Novo evento criado
- [ ] 📅 Evento próximo (lembrete)
- [ ] 📚 Novo grupo de estudo
- [ ] 💬 Nova postagem atribuída
- [ ] 👤 Candidato inscrito
- [ ] 📝 Entrevista agendada

## 11. Funcionalidades Transversais

### 11.1 Responsividade
- [ ] Layout adaptativo para mobile (< 768px)
- [ ] Layout adaptativo para tablet (768-1024px)
- [ ] Layout adaptativo para desktop (> 1024px)
- [ ] Menu hamburger em mobile
- [ ] Tabelas responsivas (scroll horizontal)
- [ ] Cards empilháveis em mobile
- [ ] Touch gestures (swipe, etc.)

### 11.2 Acessibilidade
- [ ] Navegação por teclado (Tab, Enter, Esc)
- [ ] ARIA labels em elementos interativos
- [ ] Contraste adequado de cores
- [ ] Foco visível em elementos
- [ ] Texto alternativo em imagens
- [ ] Estrutura semântica de HTML
- [ ] Skip links

### 11.3 Estados e Feedback
- [ ] Loading states (spinners, skeletons)
- [ ] Empty states (ilustrações + mensagens)
- [ ] Error states (mensagens amigáveis)
- [ ] Success feedback (toasts, checkmarks)
- [ ] Disabled states (campos, botões)
- [ ] Hover states
- [ ] Active states
- [ ] Focus states

### 11.4 Validação de Formulários
- [ ] Validação em tempo real
- [ ] Mensagens de erro claras
- [ ] Campos obrigatórios marcados (*)
- [ ] Máscaras de input (telefone, CPF, data)
- [ ] Contador de caracteres (textareas)
- [ ] Confirmação de senhas
- [ ] Validação de email
- [ ] Validação de CPF

### 11.5 Performance
- [ ] Lazy loading de imagens
- [ ] Code splitting por rota
- [ ] Debounce em campos de busca
- [ ] Virtual scrolling em listas longas
- [ ] Memoização de componentes pesados
- [ ] Otimização de re-renders
- [ ] Cache de requisições

### 11.6 Gerenciamento de Estado
- [ ] Estado global (Redux, Zustand, Context API)
- [ ] Estado de autenticação
- [ ] Estado de notificações
- [ ] Estado de UI (modals, sidebars)
- [ ] Sincronização com backend
- [ ] Persistência em localStorage (opcional)

## 12. Funcionalidades Futuras (Opcionais)

- [ ] Modo escuro (dark mode)
- [ ] Customização de tema (cores, fontes)
- [ ] Atalhos de teclado (hotkeys)
- [ ] Drag & drop para reordenar
- [ ] Edição inline
- [ ] Preview antes de publicar
- [ ] Histórico de alterações (timeline)
- [ ] Chat interno
- [ ] Videochamada integrada
- [ ] Compartilhamento de tela
- [ ] Export de relatórios (PDF, Excel)
- [ ] Impressão otimizada
- [ ] PWA (Progressive Web App)
- [ ] Push notifications
- [ ] Offline mode
- [ ] Sincronização em tempo real (WebSockets)
- [ ] Multi-idioma (i18n)
- [ ] Tour guiado para novos usuários
- [ ] Analytics e métricas