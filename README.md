# 🗺️ HobbyMap

> Plataforma completa para descobrir, reservar e gerenciar atividades e hobbies locais

---

## 📖 **SOBRE O PROJETO**

**HobbyMap** é uma plataforma que conecta pessoas a atividades, hobbies e experiências em sua região. Seja para encontrar uma aula de yoga, um curso de violão, uma quadra de futebol ou um workshop de pintura - tudo em um só lugar!

### **Problema que Resolve:**
- 😕 Difícil encontrar atividades e hobbies próximos
- 📱 Informações espalhadas em várias plataformas
- 🤷 Não sabe o que está disponível na sua região
- 📅 Complicado reservar e gerenciar atividades

### **Solução:**
- 🔍 **Descoberta fácil** com busca geolocalizada
- 🗺️ **Mapa interativo** com todos os estabelecimentos
- 📅 **Reservas simples** direto pelo app
- ⭐ **Reviews** de outros usuários
- 🎯 **Recomendações personalizadas** baseadas em seus interesses

---

## 🎯 **PÚBLICO-ALVO**

### **👥 Usuários Finais:**
- Pessoas buscando novos hobbies e atividades
- Quem quer sair da rotina e experimentar algo novo
- Pais procurando atividades para os filhos
- Iniciantes e experientes em diversas áreas

### **🏢 Provedores/Estabelecimentos:**
- Academias, estúdios, escolas de esportes
- Professores particulares e instrutores
- Espaços culturais e centros comunitários
- Organizadores de eventos e workshops

---

## 🏗️ **ARQUITETURA DO SISTEMA**

```
┌─────────────────────────────────────────────────────────────┐
│                    🗺️ HOBBYMAP PLATFORM                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐       │
│  │  📱 Mobile  │  │ 🌐 Web App  │  │ ⚙️  Backend  │       │
│  │             │  │             │  │              │       │
│  │ React       │  │   React     │  │   Django     │       │
│  │  Native     │  │    +        │  │    REST      │       │
│  │   (Expo)    │  │  Vite       │  │  Framework   │       │
│  │             │  │             │  │              │       │
│  │ • Usuários  │  │ • Admin     │  │ • REST API   │       │
│  │ • Descobrir │  │ • Gestão    │  │ • PostGIS    │       │
│  │ • Reservar  │  │ • Público   │  │ • JWT Auth   │       │
│  └──────┬──────┘  └──────┬──────┘  └──────┬───────┘       │
│         │                │                │               │
│         └────────────────┴────────────────┘               │
│                          │                                │
│                  ┌───────▼────────┐                       │
│                  │  🗄️ PostgreSQL  │                       │
│                  │   + PostGIS    │                       │
│                  │   (Geoespacial) │                       │
│                  └────────────────┘                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📂 **ESTRUTURA DO PROJETO**

```
HobbyMap/
│
├── 📱 mobile/                    # App Mobile (React Native + Expo)
│   ├── src/
│   │   ├── screens/             # Telas do app
│   │   ├── components/          # Componentes reutilizáveis
│   │   ├── navigation/          # Rotas e navegação
│   │   ├── services/            # API e serviços
│   │   └── hooks/               # Custom hooks
│   ├── App.js
│   ├── package.json
│   └── README.md
│
├── 🌐 frontend/                  # Web App (React.js + Vite)
│   ├── src/
│   │   ├── admin/               # Interface administrativa
│   │   │   ├── apps/           # Módulos (users, activities, etc)
│   │   │   ├── shared/         # Componentes compartilhados
│   │   │   └── routes/         # Rotas do admin
│   │   │
│   │   └── app/                 # Interface pública (usuários)
│   │       ├── components/      # Componentes reutilizáveis
│   │       │   ├── cards/      # ActivityCard, ProviderCard, ReviewCard
│   │       │   ├── carousels/  # Carrosséis de conteúdo
│   │       │   ├── filters/    # Filtros de busca
│   │       │   ├── common/     # Button, Input, Modal, Loading
│   │       │   └── navigation/ # Navbar, BottomNav, Sidebar
│   │       │
│   │       ├── shared/          # Componentes compartilhados entre contextos
│   │       │   ├── ActivityDetails/  # Shared entre público e gestão
│   │       │   │   └── components/
│   │       │   │       ├── ImageSection/
│   │       │   │       ├── AboutSection/
│   │       │   │       ├── ScheduleSection/
│   │       │   │       ├── ReviewsSection/
│   │       │   │       ├── PricingSection/
│   │       │   │       └── InstructorSection/
│   │       │   │
│   │       │   └── ProviderDetails/ # Shared entre público e gestão
│   │       │       └── components/
│   │       │           ├── ImageSection/
│   │       │           ├── AboutSection/
│   │       │           ├── LocationSection/
│   │       │           ├── ActivitiesSection/
│   │       │           ├── TeamSection/
│   │       │           └── StatsSection/
│   │       │
│   │       ├── views/           # Páginas públicas
│   │       │   ├── home/
│   │       │   ├── search/
│   │       │   ├── details/
│   │       │   │   ├── ActivityDetails/
│   │       │   │   └── ProviderDetails/
│   │       │   ├── profile/
│   │       │   ├── favorites/
│   │       │   └── auth/
│   │       │
│   │       ├── management/      # Área de gestão (providers/funcionários)
│   │       │   ├── components/  # Componentes exclusivos do management
│   │       │   │   ├── TeamMemberCard/
│   │       │   │   ├── StatCard/
│   │       │   │   └── ActivityFormCard/
│   │       │   │
│   │       │   ├── views/
│   │       │   │   ├── Dashboard/
│   │       │   │   ├── MyActivities/
│   │       │   │   ├── Details/
│   │       │   │   │   ├── ActivityDetails/
│   │       │   │   │   │   ├── View/       # ViewActivity (read-only)
│   │       │   │   │   │   ├── Edit/       # EditActivity (editable)
│   │       │   │   │   │   └── New/        # NewActivity (create)
│   │       │   │   │   │
│   │       │   │   │   └── ProviderDetails/
│   │       │   │   │       ├── View/       # ViewProvider (read-only)
│   │       │   │   │       └── Edit/       # EditProvider (editable)
│   │       │   │   │
│   │       │   │   ├── TeamManagement/
│   │       │   │   └── ProviderSelection/
│   │       │   │
│   │       │   └── shared/
│   │       │       └── contexts/
│   │       │           └── ProviderContext.jsx
│   │       │
│   │       ├── services/        # Serviços de API
│   │       ├── hooks/           # Custom hooks
│   │       ├── contexts/        # Contextos globais
│   │       ├── utils/           # Funções utilitárias
│   │       ├── routes/
│   │       └── styles/          # Estilos globais
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── ⚙️  backend/                  # API Backend (Django REST)
│   ├── config/                  # Configurações do projeto
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   │
│   ├── apps/                    # Apps Django
│   │   ├── users/              # Usuários e autenticação
│   │   ├── categories/         # Categorias de atividades
│   │   ├── hobbies/            # Hobbies específicos
│   │   ├── providers/          # Estabelecimentos/Provedores
│   │   ├── activities/         # Atividades e horários
│   │   ├── reviews/            # Avaliações
│   │   ├── favorite/           # Favoritos
│   │   ├── management/         # Gestão de equipes
│   │   ├── audit/              # Log de auditoria
│   │   └── core/               # Soft delete e lixeira
│   │
│   ├── manage.py
│   ├── requirements.txt
│   └── README.md
│
├── 📄 arquivosmd/                # Documentação técnica
│   ├── PROXIMAS_IMPLEMENTACOES.md
│   ├── ARQUITETURA_FRONTEND.md   # Documentação detalhada da arquitetura
│   ├── apps/
│   └── ...
│
└── 📋 README.md                  # Este arquivo
```

---

## 🏛️ **ARQUITETURA FRONTEND - COMPONENTIZAÇÃO**

### **🎯 Conceito Principal: Duas Áreas com Componentes Compartilhados**

O HobbyMap possui **duas interfaces distintas** que compartilham componentes:

1. **Área Pública** (`app/views/`) - Usuários finais descobrindo atividades
2. **Área de Gestão** (`app/management/`) - Provedores gerenciando suas atividades

**Componentes são organizados em 3 níveis:**

#### **1. Components Reutilizáveis** (`app/components/`)
Componentes usados em **múltiplas páginas diferentes**:
- **cards/** - ActivityCard (Big, Medium, Small), ProviderCard, ReviewCard
- **carousels/** - Carrosséis de Activities, Providers, Categories
- **filters/** - Filtros de Hobbies, Activities, Schedule
- **common/** - Button, Input, Modal, Loading (componentes básicos)
- **navigation/** - Navbar, BottomNav, Sidebar

#### **2. Shared Components** (`app/shared/`)
Componentes **compartilhados entre público e gestão**:

**ActivityDetails/components/**
- `ImageDisplay.jsx` - Apenas visualização
- `ImageUpload.jsx` - Upload + preview
- `ImageGallery.jsx` - Galeria completa editável
- `AboutDisplay.jsx` - Informações read-only
- `AboutEdit.jsx` - Informações editáveis
- `ScheduleDisplay.jsx` - Horários read-only
- `ScheduleEdit.jsx` - Horários editáveis
- `ReviewsSection/` - Lista de avaliações
- `PricingSection/` - Informações de preço
- `InstructorSection/` - Informações do instrutor

**ProviderDetails/components/**
- Mesma lógica, mas para Provider
- `ImageSection/`, `AboutSection/`, `LocationSection/`
- `ActivitiesSection/`, `TeamSection/`, `StatsSection/`

#### **3. Views** (Páginas que **consomem** os componentes)

**Área Pública** (`app/views/`):
- `ActivityDetails.jsx` → USA `shared/ActivityDetails/components` (modo read-only)
- `ProviderDetails.jsx` → USA `shared/ProviderDetails/components` (modo read-only)

**Área de Gestão** (`app/management/views/Details/`):
- `ViewActivity.jsx` → USA `shared/ActivityDetails/components` (modo read-only)
- `EditActivity.jsx` → USA `shared/ActivityDetails/components` (modo editable)
- `NewActivity.jsx` → USA `shared/ActivityDetails/components` (modo create)
- `ViewProvider.jsx` → USA `shared/ProviderDetails/components` (modo read-only)
- `EditProvider.jsx` → USA `shared/ProviderDetails/components` (modo editable)

### **📦 Exemplo de Reutilização:**

```jsx
// ===== Componente Shared =====
// app/shared/ActivityDetails/components/ImageSection/ImageDisplay.jsx
export const ImageDisplay = ({ coverPhoto, gallery }) => {
  return (
    <div className="image-display">
      <img src={coverPhoto} alt="Cover" className="cover" />
      <div className="gallery">
        {gallery.map(img => <img key={img.id} src={img.url} />)}
      </div>
    </div>
  );
};

// app/shared/ActivityDetails/components/ImageSection/ImageUpload.jsx
export const ImageUpload = ({ onUpload, currentImage }) => {
  return (
    <div className="image-upload">
      <input type="file" onChange={onUpload} />
      {currentImage && <img src={currentImage} className="preview" />}
    </div>
  );
};

// ===== Uso na Área Pública (read-only) =====
// app/views/details/ActivityDetails/ActivityDetails.jsx
import { ImageDisplay } from '@/shared/ActivityDetails/components/ImageSection';

<ImageDisplay coverPhoto={activity.cover_photo_url} gallery={activity.photos} />

// ===== Uso na Gestão (editable) =====
// app/management/views/Details/ActivityDetails/Edit/EditActivity.jsx
import { ImageUpload, ImageDisplay } from '@/shared/ActivityDetails/components/ImageSection';

<ImageUpload onUpload={handleUpload} currentImage={activity.cover_photo_url} />
<ImageDisplay coverPhoto={activity.cover_photo_url} gallery={activity.photos} />
```

### **🎨 Benefícios desta Arquitetura:**

✅ **DRY (Don't Repeat Yourself)** - Componentes reutilizados entre público e gestão
✅ **Manutenção fácil** - Alterar um componente atualiza todas as áreas
✅ **Consistência visual** - Mesma aparência em diferentes contextos
✅ **Componentização inteligente** - Separação clara de responsabilidades
✅ **Escalabilidade** - Fácil adicionar novas views usando componentes existentes

### **📐 Sistema de Detalhes Reutilizáveis:**

O sistema possui **páginas de detalhes compartilhadas** que são reutilizadas em diferentes contextos:

#### **ActivityDetails** - Mesmos componentes, 4 contextos diferentes:

1. **Área Pública** (`app/views/details/ActivityDetails/`)
   - **Modo:** Read-only (apenas visualização)
   - **Usuário:** Qualquer pessoa navegando no site
   - **Componentes usados:** `ImageDisplay`, `AboutDisplay`, `ScheduleDisplay`

2. **Gestão - Ver Atividade** (`app/management/views/Details/ActivityDetails/View/`)
   - **Modo:** Read-only (visualização para o provedor)
   - **Usuário:** Provedor vendo sua própria atividade
   - **Componentes usados:** `ImageDisplay`, `AboutDisplay`, `ScheduleDisplay`
   - **Diferença:** Botões de ação (Editar, Duplicar, Excluir)

3. **Gestão - Editar Atividade** (`app/management/views/Details/ActivityDetails/Edit/`)
   - **Modo:** Editable (formulários editáveis)
   - **Usuário:** Provedor editando atividade existente
   - **Componentes usados:** `ImageUpload`, `AboutEdit`, `ScheduleEdit`
   - **Funcionalidade:** Salvar alterações via API

4. **Gestão - Nova Atividade** (`app/management/views/Details/ActivityDetails/New/`)
   - **Modo:** Create (formulários vazios)
   - **Usuário:** Provedor criando nova atividade
   - **Componentes usados:** `ImageUpload`, `AboutEdit`, `ScheduleEdit`
   - **Funcionalidade:** Criar nova atividade via API

#### **ProviderDetails** - Mesmos componentes, 3 contextos diferentes:

1. **Área Pública** - Ver estabelecimento (read-only)
2. **Gestão - Ver Provider** - Ver seu próprio estabelecimento (read-only)
3. **Gestão - Editar Provider** - Editar informações do estabelecimento (editable)

**Vantagem:** Alterando 1 componente (ex: `AboutSection`), todas as 4 telas são atualizadas automaticamente!

### **🎨 DESIGN SYSTEM**

**⚠️ IMPORTANTE:** O sistema de cores, fontes e layout será implementado **com calma e de forma guiada**, seguindo **estritamente o design criado no Figma**.

#### **Abordagem de Implementação:**

1. **Design-First Approach:**
   - Todo o design visual está no **Figma**
   - Nada será feito de forma "avulsa" ou improvisada
   - Implementação será **pixel-perfect** seguindo o Figma

2. **Processo de Implementação:**
   ```
   Figma Design
        ↓
   Extrair tokens de design (cores, fontes, espaçamentos)
        ↓
   Criar variáveis CSS (variables.css)
        ↓
   Implementar componentes seguindo o design
        ↓
   Revisar e ajustar com base no Figma
   ```

3. **Elementos que seguirão o Figma:**
   - **Cores:** Paleta de cores exata do design
   - **Tipografia:** Famílias de fontes, tamanhos, pesos
   - **Espaçamentos:** Padding, margin, gaps
   - **Bordas:** Border-radius, espessuras
   - **Sombras:** Box-shadows conforme design
   - **Ícones:** Escolha e uso de ícones
   - **Layout:** Grid, flexbox, dimensões
   - **Animações:** Transições e micro-interações

4. **Variáveis CSS (exemplo):**
   ```css
   /* styles/variables.css - Será preenchido com valores do Figma */
   :root {
     /* Cores Primárias (do Figma) */
     --primary: #667EEA;
     --secondary: #FF6B35;
     --success: #10B981;
     --error: #EF4444;

     /* Tipografia (do Figma) */
     --font-primary: 'Poppins', sans-serif;
     --font-secondary: 'Inter', sans-serif;
     --text-base: 16px;
     --text-lg: 18px;

     /* Espaçamentos (do Figma) */
     --spacing-xs: 4px;
     --spacing-sm: 8px;
     --spacing-md: 16px;
     --spacing-lg: 24px;

     /* Bordas (do Figma) */
     --radius-sm: 4px;
     --radius-md: 8px;
     --radius-lg: 16px;
   }
   ```

5. **Implementação Componente a Componente:**
   - Cada componente será implementado seguindo seu design no Figma
   - Validação visual comparando com o Figma
   - Ajustes finos até ficar idêntico

**Metodologia:** Não vamos "chutar" cores ou espaçamentos. Tudo será **extraído do Figma e implementado com precisão**.

### **🔄 Fluxo Completo de Reutilização:**

```
┌─────────────────────────────────────────────────────────────────┐
│                    COMPONENTES SHARED                           │
│                                                                 │
│  shared/ActivityDetails/components/                             │
│    ├── ImageSection/                                            │
│    │   ├── ImageDisplay.jsx      (read-only)                   │
│    │   ├── ImageUpload.jsx       (editable)                    │
│    │   └── ImageGallery.jsx      (editable)                    │
│    │                                                             │
│    ├── AboutSection/                                            │
│    │   ├── AboutDisplay.jsx      (read-only)                   │
│    │   └── AboutEdit.jsx         (editable)                    │
│    │                                                             │
│    └── ScheduleSection/                                         │
│        ├── ScheduleDisplay.jsx   (read-only)                   │
│        └── ScheduleEdit.jsx      (editable)                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                    ↓                ↓                ↓
        ┌───────────┴────────┬───────┴────────┬───────┴───────────┐
        │                    │                │                   │
        ▼                    ▼                ▼                   ▼
  ┌──────────┐        ┌──────────┐    ┌──────────┐       ┌──────────┐
  │  Público │        │   Ver    │    │  Editar  │       │   Nova   │
  │ (usuário)│        │(provedor)│    │(provedor)│       │(provedor)│
  └──────────┘        └──────────┘    └──────────┘       └──────────┘
       │                    │                │                   │
       ▼                    ▼                ▼                   ▼
  ImageDisplay        ImageDisplay      ImageUpload        ImageUpload
  AboutDisplay        AboutDisplay      AboutEdit          AboutEdit
  ScheduleDisplay     ScheduleDisplay   ScheduleEdit       ScheduleEdit
       │                    │                │                   │
  (read-only)         (read-only)       (editable)         (create)
```

**Exemplo Prático:**

Se você mudar a cor de fundo do `AboutDisplay.jsx`:
- ✅ Atualiza automaticamente na **página pública** (usuário vendo atividade)
- ✅ Atualiza automaticamente na **gestão/ver** (provedor vendo sua atividade)

Se você adicionar um novo campo no `AboutEdit.jsx`:
- ✅ Aparece automaticamente na **gestão/editar** (provedor editando)
- ✅ Aparece automaticamente na **gestão/nova** (provedor criando)

**Isso é DRY na prática!** 🚀

---

## 🛠️ **TECNOLOGIAS UTILIZADAS**

### **Backend:**
| Tecnologia | Versão | Uso |
|------------|--------|-----|
| Python | 3.12+ | Linguagem principal |
| Django | 5.1.3 | Framework web |
| Django REST Framework | 3.15.2 | API REST |
| PostgreSQL | 16+ | Banco de dados |
| PostGIS | 3.4+ | Extensão geoespacial |
| JWT | - | Autenticação |

### **Frontend Web:**
| Tecnologia | Versão | Uso |
|------------|--------|-----|
| React | 19.1.1 | UI Framework |
| Vite | 7.1.6 | Build tool |
| React Router | 7.2.0 | Roteamento |
| Axios | 1.7.9 | Cliente HTTP |
| CSS Modules | - | Estilização |

### **Mobile:**
| Tecnologia | Versão | Uso |
|------------|--------|-----|
| React Native | 0.74+ | Framework mobile |
| Expo | 51+ | Toolchain |
| React Navigation | 6+ | Navegação |
| React Native Maps | - | Mapas |
| Axios | - | Cliente HTTP |

---

## 🚀 **GETTING STARTED**

### **Pré-requisitos:**
- Node.js 20+
- Python 3.12+
- PostgreSQL 16+ com PostGIS
- Git

### **1. Clonar o Repositório:**
```bash
git clone <url-do-repo>
cd HobbyMap
```

### **2. Setup do Backend:**
```bash
cd backend

# Criar ambiente virtual
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Instalar dependências
pip install -r requirements.txt

# Configurar banco de dados (.env)
cp .env.example .env
# Edite o .env com suas credenciais

# Rodar migrations
python manage.py migrate

# Criar superusuário
python manage.py createsuperuser

# Iniciar servidor
python manage.py runserver
```

### **3. Setup do Frontend Web:**
```bash
cd frontend

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o .env se necessário

# Iniciar dev server
npm run dev
```

### **4. Setup do Mobile:**
```bash
cd mobile

# Instalar dependências
npm install

# Configurar .env
cp .env.example .env

# Iniciar Expo
npx expo start
```

---

## 📊 **MODELO DE DADOS PRINCIPAL**

```
┌──────────────┐
│   Category   │  (Esporte, Arte, Bem-Estar, etc.)
└───────┬──────┘
        │ 1:N
        │
┌───────▼──────┐
│    Hobby     │  (Futebol, Yoga, Violão, etc.)
└───────┬──────┘
        │ N:M (users_hobbies)
        │
┌───────▼──────────┐       ┌─────────────┐
│    Provider      │◄──────│    User     │
│  (Estabelecimento)│  N:M  │  (Usuário)  │
└────────┬─────────┘       └──────┬──────┘
         │ 1:N                     │
         │                         │ 1:N
┌────────▼─────────┐              │
│    Activity      │              │
│   (Atividade)    │              │
└────────┬─────────┘              │
         │ 1:N                    │
         │                        │
┌────────▼─────────┐       ┌──────▼──────┐
│ ActivitySchedule │       │   Review    │
│    (Horários)    │       │ (Avaliação) │
└──────────────────┘       └─────────────┘
```

---

## 🎯 **FUNCIONALIDADES PRINCIPAIS**

### **Para Usuários:**
- ✅ Cadastro e autenticação (JWT)
- ✅ Busca de atividades por categoria, localização, preço
- ✅ Visualização em mapa (geolocalização)
- ✅ Detalhes completos de atividades
- ✅ Sistema de favoritos
- ✅ Avaliações e reviews com fotos
- ✅ Perfil personalizado com hobbies
- ✅ Agenda de horários disponíveis
- 🔄 Sistema de reservas (em desenvolvimento)
- 🔄 Notificações (em desenvolvimento)

### **Para Provedores:**
- ✅ Dashboard administrativo completo
- ✅ Gestão de atividades e horários
- ✅ Sistema de equipes (owners, managers, instrutores)
- ✅ Gerenciamento de salas/espaços
- ✅ Calendário estilo Google Calendar
- ✅ Exceções de horários (cancelamentos, reagendamentos)
- ✅ Galeria de fotos
- ✅ Estatísticas e métricas
- 🔄 Resposta a avaliações (em desenvolvimento)

### **Para Administradores:**
- ✅ CRUD completo de todas entidades
- ✅ Gestão de usuários e permissões
- ✅ Categorias e hobbies
- ✅ Moderação de reviews
- ✅ Auditoria (logs de ações)
- ✅ Lixeira (soft delete)
- ✅ Histórico de alterações

---

## 🔐 **AUTENTICAÇÃO E SEGURANÇA**

- **JWT (JSON Web Tokens)** para autenticação stateless
- **Refresh tokens** para renovação automática
- **Permissões granulares** por role (owner, manager, instructor, staff)
- **Soft delete** para recuperação de dados
- **Audit log** de todas as ações importantes
- **CORS** configurado para segurança
- **HTTPS** obrigatório em produção

---

## 🗺️ **GEOLOCALIZAÇÃO (PostGIS)**

O sistema usa **PostGIS** para funcionalidades geoespaciais:

- Busca de atividades próximas (raio em km)
- Ordenação por distância
- Exibição em mapa interativo
- Cálculo de rotas
- Filtros por região/cidade/bairro

**Exemplo de busca:**
```python
# Buscar atividades num raio de 5km
GET /api/activities/nearby/?lat=-22.9&lng=-43.1&radius=5
```

---

## 📱 **SISTEMA DE DUAL ICONS**

O projeto usa um sistema inteligente de ícones:

- **Emoji (icon):** Para interface administrativa (visual, fácil de escolher)
- **Font Awesome (icon_class):** Para frontend público (profissional, customizável)

**Exemplo:**
```json
{
  "name": "Esportes",
  "icon": "🏃",
  "icon_class": "fa-running",
  "color": "#FF6B35"
}
```

---

## 🧪 **TESTES**

```bash
# Backend - Testes unitários
cd backend
python manage.py test

# Frontend - Testes com Vitest
cd frontend
npm test

# Mobile - Testes E2E
cd mobile
npm run test:e2e
```

---

## 📦 **DEPLOY**

### **Backend (Django):**
- **Opções:** Railway, Render, DigitalOcean, AWS
- **Banco:** PostgreSQL com PostGIS habilitado
- **Servidor:** Gunicorn + Nginx

### **Frontend Web:**
- **Opções:** Vercel, Netlify, Railway
- **Build:** `npm run build`
- **SPA:** Configurar rewrites para React Router

### **Mobile:**
- **Expo EAS Build** para build cloud
- **Google Play Store** (Android)
- **Apple App Store** (iOS - requer conta Developer)

---

## 🐛 **TROUBLESHOOTING COMUM**

### **Backend não inicia:**
```bash
# Verificar se PostgreSQL está rodando
sudo service postgresql status

# Verificar migrations
python manage.py showmigrations

# Recriar banco (CUIDADO: apaga dados!)
python manage.py flush
python manage.py migrate
```

### **Frontend erro de CORS:**
- Verificar `CORS_ALLOWED_ORIGINS` no settings.py do Django
- Verificar `.env` do frontend com URL correta da API

### **Mobile não conecta na API:**
- Android Emulator: usar `10.0.2.2:8000` ao invés de `localhost`
- Dispositivo físico: usar IP local da máquina (ex: `192.168.1.10:8000`)

---

## 📚 **DOCUMENTAÇÃO ADICIONAL**

- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)
- [Mobile README](./mobile/README.md)
- [Arquitetura Frontend](./arquivosmd/ARQUITETURA_FRONTEND.md)
- [Próximas Implementações](./arquivosmd/PROXIMAS_IMPLEMENTACOES.md)
- [Documentação de Apps](./arquivosmd/apps/)

---

## 🔄 **GIT & GITHUB - WORKFLOW**

### **📦 Configuração Inicial do Repositório**

```bash
# 1. No GitHub (navegador):
# - Criar novo repositório "HobbyMap"
# - Marcar como Private ou Public
# - NÃO adicionar README (já temos)

# 2. Na pasta local (casa):
cd /mnt/c/Users/felip_x6n9d9e/OneDrive/Documentos/FELIPE/PROGRAMAÇÃO/HobbyMap

# Inicializar Git (se necessário)
git init

# Adicionar remote (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/HobbyMap.git

# Verificar remote
git remote -v

# Adicionar todos os arquivos
git add .

# Primeiro commit
git commit -m "🚀 Initial commit - HobbyMap platform

- Backend Django com PostGIS
- Frontend React com área pública e administrativa
- Sistema de dual icons (emoji + Font Awesome)
- Gestão de provedores e atividades
- Documentação completa"

# Renomear branch para main (se necessário)
git branch -M main

# Enviar para GitHub
git push -u origin main
```

### **🏢 Sincronização Casa ↔ Empresa**

#### **Em Casa (antes de ir para empresa):**
```bash
# Verificar status
git status

# Adicionar arquivos modificados
git add .

# Commit com mensagem descritiva
git commit -m "feat: implementação de carrossel de atividades"

# Enviar para GitHub
git push origin main
```

#### **Na Empresa (ao chegar):**
```bash
# Clone inicial (apenas primeira vez):
git clone https://github.com/SEU_USUARIO/HobbyMap.git
cd HobbyMap

# OU atualizar (se já clonou antes):
git pull origin main

# Instalar dependências backend
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt

# Configurar .env
cp .env.example .env
# Editar .env com credenciais da empresa

# Rodar migrations
python manage.py migrate

# Instalar dependências frontend
cd ../frontend
npm install

# Iniciar dev servers
npm run dev  # Frontend
# EM OUTRO TERMINAL: python manage.py runserver  # Backend
```

#### **Na Empresa (antes de ir embora):**
```bash
# Adicionar e commitar mudanças
git add .
git commit -m "fix: correção no filtro de hobbies"
git push origin main
```

#### **Em Casa (ao voltar):**
```bash
# Puxar mudanças da empresa
git pull origin main
```

### **📝 Convenção de Commits (Semantic Commits)**

```bash
# Tipos de commit:
feat:     # Nova funcionalidade
fix:      # Correção de bug
docs:     # Documentação
style:    # Formatação, sem mudança de lógica
refactor: # Refatoração de código
test:     # Adição de testes
chore:    # Tarefas de manutenção

# Exemplos:
git commit -m "feat: adicionar filtro de categorias na home"
git commit -m "fix: corrigir erro no upload de imagem"
git commit -m "docs: atualizar README com arquitetura frontend"
git commit -m "refactor: reorganizar componentes shared"
git commit -m "style: aplicar formatação no código"
```

### **🌿 Branches (Opcional para trabalho solo)**

```bash
# Criar branch para nova feature
git checkout -b feature/sistema-reservas

# Trabalhar na branch
git add .
git commit -m "feat: adicionar modelo de reserva"

# Voltar para main e fazer merge
git checkout main
git merge feature/sistema-reservas

# Deletar branch (após merge)
git branch -d feature/sistema-reservas
```

### **⚠️ Arquivos Ignorados (.gitignore)**

O projeto já possui `.gitignore` configurado para ignorar:
- `__pycache__/`, `*.pyc` (Python)
- `venv/`, `env/` (Ambientes virtuais)
- `.env`, `.env.local` (Variáveis de ambiente)
- `node_modules/` (Node.js)
- `db.sqlite3` (Banco de desenvolvimento)
- `media/`, `staticfiles/` (Arquivos gerados)
- `.vscode/`, `.idea/` (IDEs)

---

## 🛣️ **ROADMAP**

### **✅ Fase 1 - MVP (Concluída):**
- Sistema de usuários e autenticação
- CRUD de categorias, hobbies e atividades
- Sistema de provedores com equipes
- Busca e filtros
- Favoritos e reviews
- Admin panel completo

### **🔄 Fase 2 - Core Features (Em Andamento):**
- [ ] App Mobile React Native
- [ ] Sistema de reservas e pagamentos
- [ ] Notificações push
- [ ] Chat entre usuários e provedores
- [ ] Gamificação (XP, badges, níveis)

### **🔮 Fase 3 - Avançado (Futuro):**
- [ ] Recomendações com Machine Learning
- [ ] Integração com calendários (Google, Apple)
- [ ] Sistema de vouchers e cupons
- [ ] Programa de fidelidade
- [ ] Analytics avançado
- [ ] Multi-idioma

---

## 👨‍💻 **DESENVOLVEDOR**

**Felipe**
- 📧 Email: [seu-email]
- 💼 LinkedIn: [seu-linkedin]
- 🐙 GitHub: [seu-github]

---

## 📄 **LICENÇA**

Este projeto é de uso pessoal/educacional.

---

## 🙏 **AGRADECIMENTOS**

Desenvolvido com auxílio de:
- Claude AI (Anthropic)
- Comunidade React/Django
- Stack Overflow
- Documentações oficiais

---

## 📈 **ESTATÍSTICAS DO PROJETO**

```
Linguagens:
  Python     45%
  JavaScript 40%
  CSS        10%
  Outros     5%

Linhas de Código: ~50.000+
Commits: [em construção]
Duração: Novembro 2024 - Presente
```

---

**Desenvolvido com ❤️ para ajudar pessoas a descobrirem novos hobbies e atividades!**

🗺️ **HobbyMap - Descubra, Reserve, Viva!**
