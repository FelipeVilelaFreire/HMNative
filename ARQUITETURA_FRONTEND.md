# 🏛️ Arquitetura Frontend - HobbyMap

> Documentação completa da arquitetura de componentização e reutilização do frontend

---

## 📋 **ÍNDICE**

1. [Visão Geral](#visão-geral)
2. [Conceito de Duas Áreas](#conceito-de-duas-áreas)
3. [Estrutura de Pastas Completa](#estrutura-de-pastas-completa)
4. [Níveis de Componentização](#níveis-de-componentização)
5. [Componentes Shared (Compartilhados)](#componentes-shared-compartilhados)
6. [Exemplos Práticos de Uso](#exemplos-práticos-de-uso)
7. [Padrões e Convenções](#padrões-e-convenções)
8. [Fluxo de Dados](#fluxo-de-dados)

---

## 🎯 **VISÃO GERAL**

O HobbyMap é uma plataforma que conecta pessoas a atividades e hobbies locais. O diferencial da arquitetura do frontend é a **reutilização inteligente de componentes** entre duas áreas distintas:

### **Duas Áreas do Sistema:**

1. **Área Pública** (`app/views/`)
   - Para **usuários finais** descobrindo atividades
   - Foco em **visualização** e **descoberta**
   - Componentes em **modo read-only**

2. **Área de Gestão** (`app/management/`)
   - Para **provedores/funcionários** gerenciando atividades
   - Foco em **CRUD** e **gestão**
   - Componentes em **modo editable**

### **Problema que a Arquitetura Resolve:**

❌ **Sem componentização:**
- Código duplicado entre área pública e gestão
- Inconsistência visual entre interfaces
- Manutenção difícil (alterar em 2+ lugares)
- Desperdício de tempo

✅ **Com componentização shared:**
- **DRY (Don't Repeat Yourself)** - Componentes reutilizados
- **Consistência visual** - Mesma aparência em diferentes contextos
- **Manutenção fácil** - Alterar 1 componente atualiza todas as áreas
- **Escalabilidade** - Fácil adicionar novas views

---

## 🗂️ **CONCEITO DE DUAS ÁREAS**

### **🌐 Área Pública**

**Usuários:**
- Pessoas buscando hobbies e atividades
- Visitantes sem cadastro (guest)
- Usuários cadastrados

**Funcionalidades:**
- Ver detalhes de atividades (read-only)
- Ver detalhes de provedores (read-only)
- Buscar e filtrar atividades
- Favoritar atividades
- Deixar reviews

**Views principais:**
- `app/views/home/` - Home com carrosséis
- `app/views/search/` - Busca e filtros
- `app/views/details/ActivityDetails/` - **Detalhes da atividade (read-only)**
- `app/views/details/ProviderDetails/` - **Detalhes do provedor (read-only)**
- `app/views/profile/` - Perfil do usuário
- `app/views/favorites/` - Favoritos

### **👔 Área de Gestão (Management)**

**Usuários:**
- Owners (donos de estabelecimentos)
- Managers (gerentes)
- Instrutores
- Staff (equipe)

**Funcionalidades:**
- Dashboard com estatísticas
- CRUD de atividades (criar, editar, deletar)
- CRUD de provedores (editar informações)
- Gerenciar equipe
- Ver e responder reviews
- Gerenciar horários e agenda

**Views principais:**
- `app/management/views/Dashboard/` - Dashboard com stats
- `app/management/views/MyActivities/` - Lista de atividades
- `app/management/views/Details/ActivityDetails/View/` - **Ver atividade (read-only)**
- `app/management/views/Details/ActivityDetails/Edit/` - **Editar atividade (editable)**
- `app/management/views/Details/ActivityDetails/New/` - **Nova atividade (create)**
- `app/management/views/Details/ProviderDetails/View/` - **Ver provedor (read-only)**
- `app/management/views/Details/ProviderDetails/Edit/` - **Editar provedor (editable)**
- `app/management/views/TeamManagement/` - Gestão de equipe

---

## 📂 **ESTRUTURA DE PASTAS COMPLETA**

```
frontend/src/app/
│
├── components/                   # 🔵 NÍVEL 1: Componentes Reutilizáveis Globais
│   ├── cards/
│   │   ├── ActivityCard/
│   │   │   ├── ActivityCardBig.jsx
│   │   │   ├── ActivityCardBig.css
│   │   │   ├── ActivityCardMedium.jsx
│   │   │   ├── ActivityCardMedium.css
│   │   │   ├── ActivityCardSmall.jsx
│   │   │   ├── ActivityCardSmall.css
│   │   │   └── index.js          # Export all variants
│   │   │
│   │   ├── ProviderCard/
│   │   │   ├── ProviderCardBig.jsx
│   │   │   ├── ProviderCardMedium.jsx
│   │   │   ├── ProviderCardSmall.jsx
│   │   │   └── index.js
│   │   │
│   │   └── ReviewCard/
│   │       ├── ReviewCard.jsx
│   │       └── ReviewCard.css
│   │
│   ├── carousels/
│   │   ├── ActivityCarousel/
│   │   │   ├── ActivityCarousel.jsx
│   │   │   └── ActivityCarousel.css
│   │   │
│   │   ├── ProviderCarousel/
│   │   │   ├── ProviderCarousel.jsx
│   │   │   └── ProviderCarousel.css
│   │   │
│   │   └── CategoryCarousel/
│   │       ├── CategoryCarousel.jsx
│   │       └── CategoryCarousel.css
│   │
│   ├── filters/
│   │   ├── HobbyFilter/
│   │   │   ├── HobbyFilter.jsx
│   │   │   └── HobbyFilter.css
│   │   │
│   │   ├── ActivityFilter/
│   │   │   ├── ActivityFilter.jsx
│   │   │   └── ActivityFilter.css
│   │   │
│   │   └── ScheduleFilter/
│   │       ├── ScheduleFilter.jsx
│   │       └── ScheduleFilter.css
│   │
│   ├── common/                   # Componentes básicos
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.css
│   │   │
│   │   ├── Input/
│   │   │   ├── Input.jsx
│   │   │   └── Input.css
│   │   │
│   │   ├── Modal/
│   │   │   ├── Modal.jsx
│   │   │   └── Modal.css
│   │   │
│   │   ├── Loading/
│   │   │   ├── Loading.jsx
│   │   │   └── Loading.css
│   │   │
│   │   └── ErrorBoundary/
│   │       └── ErrorBoundary.jsx
│   │
│   └── navigation/
│       ├── Navbar/
│       │   ├── Navbar.jsx
│       │   └── Navbar.css
│       │
│       ├── BottomNav/
│       │   ├── BottomNav.jsx
│       │   └── BottomNav.css
│       │
│       └── Sidebar/
│           ├── Sidebar.jsx
│           └── Sidebar.css
│
├── shared/                       # 🟢 NÍVEL 2: Componentes Compartilhados (Público + Gestão)
│   ├── ActivityDetails/
│   │   ├── components/
│   │   │   ├── ImageSection/
│   │   │   │   ├── ImageDisplay.jsx       # Read-only: apenas mostra
│   │   │   │   ├── ImageUpload.jsx        # Editable: upload + preview
│   │   │   │   ├── ImageGallery.jsx       # Editable: galeria completa
│   │   │   │   ├── ImageSection.css
│   │   │   │   └── index.js
│   │   │   │
│   │   │   ├── AboutSection/
│   │   │   │   ├── AboutDisplay.jsx       # Read-only
│   │   │   │   ├── AboutEdit.jsx          # Editable
│   │   │   │   ├── AboutSection.css
│   │   │   │   └── index.js
│   │   │   │
│   │   │   ├── ScheduleSection/
│   │   │   │   ├── ScheduleDisplay.jsx    # Read-only
│   │   │   │   ├── ScheduleEdit.jsx       # Editable (Google Calendar-like)
│   │   │   │   ├── ScheduleSection.css
│   │   │   │   └── index.js
│   │   │   │
│   │   │   ├── ReviewsSection/
│   │   │   │   ├── ReviewsList.jsx        # Lista de reviews
│   │   │   │   ├── ReviewForm.jsx         # Formulário de review
│   │   │   │   ├── ReviewsSection.css
│   │   │   │   └── index.js
│   │   │   │
│   │   │   ├── PricingSection/
│   │   │   │   ├── PricingDisplay.jsx     # Read-only
│   │   │   │   ├── PricingEdit.jsx        # Editable
│   │   │   │   ├── PricingSection.css
│   │   │   │   └── index.js
│   │   │   │
│   │   │   └── InstructorSection/
│   │   │       ├── InstructorDisplay.jsx  # Read-only
│   │   │       ├── InstructorEdit.jsx     # Editable
│   │   │       ├── InstructorSection.css
│   │   │       └── index.js
│   │   │
│   │   └── index.js              # Export all components
│   │
│   └── ProviderDetails/
│       ├── components/
│       │   ├── ImageSection/
│       │   │   ├── ImageDisplay.jsx
│       │   │   ├── ImageUpload.jsx
│       │   │   ├── ImageGallery.jsx
│       │   │   ├── ImageSection.css
│       │   │   └── index.js
│       │   │
│       │   ├── AboutSection/
│       │   │   ├── AboutDisplay.jsx
│       │   │   ├── AboutEdit.jsx
│       │   │   ├── AboutSection.css
│       │   │   └── index.js
│       │   │
│       │   ├── LocationSection/
│       │   │   ├── LocationDisplay.jsx
│       │   │   ├── LocationEdit.jsx
│       │   │   ├── LocationSection.css
│       │   │   └── index.js
│       │   │
│       │   ├── ActivitiesSection/
│       │   │   ├── ActivitiesList.jsx
│       │   │   ├── ActivitiesSection.css
│       │   │   └── index.js
│       │   │
│       │   ├── TeamSection/
│       │   │   ├── TeamMemberCard.jsx
│       │   │   ├── TeamList.jsx
│       │   │   ├── TeamSection.css
│       │   │   └── index.js
│       │   │
│       │   └── StatsSection/
│       │       ├── StatsDisplay.jsx
│       │       ├── StatsSection.css
│       │       └── index.js
│       │
│       └── index.js
│
├── views/                        # 🔴 NÍVEL 3: Views da Área Pública
│   ├── home/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   └── components/
│   │       ├── HeroSection.jsx
│   │       └── CategoriesGrid.jsx
│   │
│   ├── search/
│   │   ├── Search.jsx
│   │   ├── Search.css
│   │   └── components/
│   │       ├── SearchBar.jsx
│   │       ├── FilterPanel.jsx
│   │       └── ResultsGrid.jsx
│   │
│   ├── details/
│   │   ├── ActivityDetails/
│   │   │   ├── ActivityDetails.jsx    # USA: shared/ActivityDetails/components (read-only)
│   │   │   └── ActivityDetails.css
│   │   │
│   │   └── ProviderDetails/
│   │       ├── ProviderDetails.jsx    # USA: shared/ProviderDetails/components (read-only)
│   │       └── ProviderDetails.css
│   │
│   ├── profile/
│   │   ├── Profile.jsx
│   │   ├── Profile.css
│   │   └── components/
│   │       ├── MyHobbies/
│   │       ├── MySchedule/
│   │       └── MyBookings/
│   │
│   ├── favorites/
│   │   ├── Favorites.jsx
│   │   └── Favorites.css
│   │
│   └── auth/
│       ├── Login.jsx
│       ├── Register.jsx
│       └── Auth.css
│
├── management/                   # 🟡 NÍVEL 3: Views da Área de Gestão
│   ├── components/               # Componentes EXCLUSIVOS do management
│   │   ├── TeamMemberCard/
│   │   │   ├── TeamMemberCard.jsx
│   │   │   └── TeamMemberCard.css
│   │   │
│   │   ├── StatCard/
│   │   │   ├── StatCard.jsx
│   │   │   └── StatCard.css
│   │   │
│   │   └── ActivityFormCard/
│   │       ├── ActivityFormCard.jsx
│   │       └── ActivityFormCard.css
│   │
│   ├── views/
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.jsx          # USA: shared/ProviderDetails (stats mode)
│   │   │   ├── Dashboard.css
│   │   │   └── components/
│   │   │       ├── StatsGrid.jsx
│   │   │       └── RecentActivities.jsx
│   │   │
│   │   ├── MyActivities/
│   │   │   ├── MyActivities.jsx
│   │   │   ├── MyActivities.css
│   │   │   └── components/
│   │   │       ├── ActivitiesFilter.jsx
│   │   │       └── ActivitiesList.jsx
│   │   │
│   │   ├── Details/
│   │   │   ├── ActivityDetails/
│   │   │   │   ├── View/
│   │   │   │   │   ├── ViewActivity.jsx      # USA: shared/ActivityDetails (read-only)
│   │   │   │   │   └── ViewActivity.css
│   │   │   │   │
│   │   │   │   ├── Edit/
│   │   │   │   │   ├── EditActivity.jsx      # USA: shared/ActivityDetails (editable)
│   │   │   │   │   └── EditActivity.css
│   │   │   │   │
│   │   │   │   └── New/
│   │   │   │       ├── NewActivity.jsx       # USA: shared/ActivityDetails (create)
│   │   │   │       └── NewActivity.css
│   │   │   │
│   │   │   └── ProviderDetails/
│   │   │       ├── View/
│   │   │       │   ├── ViewProvider.jsx      # USA: shared/ProviderDetails (read-only)
│   │   │       │   └── ViewProvider.css
│   │   │       │
│   │   │       └── Edit/
│   │   │           ├── EditProvider.jsx      # USA: shared/ProviderDetails (editable)
│   │   │           └── EditProvider.css
│   │   │
│   │   ├── TeamManagement/
│   │   │   ├── TeamManagement.jsx
│   │   │   ├── TeamManagement.css
│   │   │   └── components/
│   │   │       ├── MembersList.jsx
│   │   │       └── AddMemberModal.jsx
│   │   │
│   │   └── ProviderSelection/
│   │       ├── ProviderSelection.jsx
│   │       └── ProviderSelection.css
│   │
│   └── shared/
│       └── contexts/
│           └── ProviderContext.jsx    # Contexto do provider atual
│
├── services/                     # Serviços de API
│   ├── api.js
│   ├── authService.js
│   ├── activitiesService.js
│   ├── providersService.js
│   ├── categoriesService.js
│   ├── hobbiesService.js
│   ├── favoritesService.js
│   └── reviewsService.js
│
├── hooks/                        # Custom React hooks
│   ├── useAuth.js
│   ├── useActivities.js
│   ├── useProviders.js
│   ├── useFavorites.js
│   └── useGeolocation.js
│
├── contexts/                     # Contextos globais
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
│
├── utils/                        # Funções utilitárias
│   ├── formatters.js
│   ├── validators.js
│   └── constants.js
│
├── routes/
│   └── AppRoutes.jsx
│
└── styles/                       # Estilos globais
    ├── global.css
    ├── variables.css
    └── reset.css
```

---

## 📊 **NÍVEIS DE COMPONENTIZAÇÃO**

### **🔵 NÍVEL 1: Components (Reutilizáveis Globais)**

**Localização:** `app/components/`

**Definição:** Componentes usados em **múltiplas páginas diferentes** em **ambas as áreas** (pública e gestão).

**Características:**
- Genéricos e agnósticos de contexto
- Não conhecem a lógica de negócio
- Recebem dados via props
- Altamente reutilizáveis

**Exemplos:**

#### **Cards**
```jsx
// components/cards/ActivityCard/ActivityCardBig.jsx
export const ActivityCardBig = ({ activity, onClick }) => {
  return (
    <div className="activity-card-big" onClick={() => onClick(activity.id)}>
      <img src={activity.cover_photo_url} alt={activity.name} />
      <h3>{activity.name}</h3>
      <p>{activity.description}</p>
      <span className="price">{activity.price}</span>
      <div className="rating">
        ⭐ {activity.rating} ({activity.reviews_count} reviews)
      </div>
    </div>
  );
};

// USO em Home (área pública):
import { ActivityCardBig } from '@/components/cards/ActivityCard';
<ActivityCardBig activity={activity} onClick={handleClick} />

// USO em MyActivities (gestão):
import { ActivityCardMedium } from '@/components/cards/ActivityCard';
<ActivityCardMedium activity={activity} onClick={handleEdit} />
```

#### **Carousels**
```jsx
// components/carousels/ActivityCarousel/ActivityCarousel.jsx
import { ActivityCardMedium } from '@/components/cards/ActivityCard';

export const ActivityCarousel = ({ activities, onCardClick, title }) => {
  return (
    <div className="carousel">
      <h2>{title}</h2>
      <div className="carousel-track">
        {activities.map(activity => (
          <ActivityCardMedium
            key={activity.id}
            activity={activity}
            onClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
};

// USO:
<ActivityCarousel
  activities={recentActivities}
  onCardClick={goToActivity}
  title="Atividades Recentes"
/>
```

#### **Filters**
```jsx
// components/filters/HobbyFilter/HobbyFilter.jsx
export const HobbyFilter = ({ hobbies, selected, onChange }) => {
  return (
    <div className="hobby-filter">
      {hobbies.map(hobby => (
        <button
          key={hobby.id}
          className={`chip ${selected.includes(hobby.id) ? 'active' : ''}`}
          onClick={() => onChange(hobby.id)}
          style={{ borderColor: hobby.color }}
        >
          <span className="icon">{hobby.icon}</span>
          {hobby.name}
        </button>
      ))}
    </div>
  );
};
```

---

### **🟢 NÍVEL 2: Shared (Compartilhados entre Público e Gestão)**

**Localização:** `app/shared/`

**Definição:** Componentes **específicos de domínio** compartilhados entre **área pública e gestão**, com **variações read-only e editable**.

**Características:**
- Específicos de ActivityDetails ou ProviderDetails
- Possuem versões Display (read-only) e Edit (editable)
- Conhecem a estrutura de dados do backend
- Reutilizados em diferentes contextos

**Estrutura padrão:**
```
shared/ActivityDetails/
└── components/
    └── ImageSection/
        ├── ImageDisplay.jsx     # Read-only (público)
        ├── ImageUpload.jsx      # Editable (gestão - upload)
        ├── ImageGallery.jsx     # Editable (gestão - galeria)
        ├── ImageSection.css
        └── index.js
```

**Exemplos:**

#### **ImageSection**

```jsx
// shared/ActivityDetails/components/ImageSection/ImageDisplay.jsx
export const ImageDisplay = ({ coverPhoto, gallery }) => {
  return (
    <div className="image-display">
      <div className="cover-wrapper">
        <img src={coverPhoto} alt="Cover" className="cover" />
      </div>
      {gallery && gallery.length > 0 && (
        <div className="gallery">
          {gallery.map(img => (
            <img key={img.id} src={img.url} alt={img.caption} />
          ))}
        </div>
      )}
    </div>
  );
};

// shared/ActivityDetails/components/ImageSection/ImageUpload.jsx
export const ImageUpload = ({ onUpload, currentImage, uploading }) => {
  return (
    <div className="image-upload">
      <label htmlFor="cover-upload" className="upload-btn">
        📷 {currentImage ? 'Alterar Foto' : 'Adicionar Foto'}
      </label>
      <input
        id="cover-upload"
        type="file"
        accept="image/*"
        onChange={onUpload}
        disabled={uploading}
      />
      {currentImage && (
        <div className="preview">
          <img src={currentImage} alt="Preview" />
        </div>
      )}
      {uploading && <div className="loading">Uploading...</div>}
    </div>
  );
};

// shared/ActivityDetails/components/ImageSection/index.js
export { ImageDisplay } from './ImageDisplay';
export { ImageUpload } from './ImageUpload';
export { ImageGallery } from './ImageGallery';
```

#### **AboutSection**

```jsx
// shared/ActivityDetails/components/AboutSection/AboutDisplay.jsx
export const AboutDisplay = ({ name, description, category, hobbies, provider }) => {
  return (
    <div className="about-display">
      <h1>{name}</h1>
      <div className="meta">
        <span className="category" style={{ borderColor: category.color }}>
          {category.icon} {category.name}
        </span>
        <div className="hobbies">
          {hobbies.map(hobby => (
            <span key={hobby.id} className="hobby" style={{ borderColor: hobby.color }}>
              {hobby.icon} {hobby.name}
            </span>
          ))}
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="provider-info">
        <img src={provider.logo_url} alt={provider.name} />
        <div>
          <strong>{provider.name}</strong>
          <p>{provider.address}</p>
        </div>
      </div>
    </div>
  );
};

// shared/ActivityDetails/components/AboutSection/AboutEdit.jsx
export const AboutEdit = ({ data, onChange, errors }) => {
  return (
    <div className="about-edit">
      <input
        type="text"
        value={data.name}
        onChange={(e) => onChange('name', e.target.value)}
        placeholder="Nome da atividade"
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <select
        value={data.category}
        onChange={(e) => onChange('category', e.target.value)}
      >
        <option value="">Selecione a categoria</option>
        {/* Options... */}
      </select>

      <textarea
        value={data.description}
        onChange={(e) => onChange('description', e.target.value)}
        placeholder="Descrição da atividade"
        rows={5}
      />
      {errors.description && <span className="error">{errors.description}</span>}
    </div>
  );
};
```

#### **ScheduleSection**

```jsx
// shared/ActivityDetails/components/ScheduleSection/ScheduleDisplay.jsx
export const ScheduleDisplay = ({ schedules }) => {
  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (
    <div className="schedule-display">
      <h3>📅 Horários Disponíveis</h3>
      <div className="schedule-grid">
        {days.map((day, index) => {
          const daySchedules = schedules.filter(s => s.day_of_week === index);
          return (
            <div key={day} className="day-column">
              <div className="day-header">{day}</div>
              <div className="time-slots">
                {daySchedules.length > 0 ? (
                  daySchedules.map(schedule => (
                    <div key={schedule.id} className="slot">
                      {schedule.start_time} - {schedule.end_time}
                      <span className="room">{schedule.room_name}</span>
                    </div>
                  ))
                ) : (
                  <span className="no-schedule">-</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// shared/ActivityDetails/components/ScheduleSection/ScheduleEdit.jsx
export const ScheduleEdit = ({ schedules, onChange, onAdd, onDelete }) => {
  // Google Calendar-like interface
  return (
    <div className="schedule-edit">
      <button onClick={onAdd} className="add-schedule-btn">
        ➕ Adicionar Horário
      </button>
      <div className="schedule-calendar">
        {/* Calendar grid with drag-and-drop, edit, delete */}
      </div>
    </div>
  );
};
```

---

### **🔴 NÍVEL 3: Views (Páginas que Consomem Componentes)**

**Localização:** `app/views/` (público) e `app/management/views/` (gestão)

**Definição:** Páginas finais que **orquestram** os componentes, fazem requisições à API e gerenciam estado.

**Características:**
- Fazem requisições à API
- Gerenciam estado local (useState, useReducer)
- Orquestram componentes shared e reutilizáveis
- Definem layout da página

**Exemplo: ActivityDetails Público (Read-only)**

```jsx
// app/views/details/ActivityDetails/ActivityDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActivityById } from '@/services/activitiesService';
import {
  ImageDisplay,
  AboutDisplay,
  ScheduleDisplay,
  PricingDisplay,
  InstructorDisplay
} from '@/shared/ActivityDetails/components';
import { ReviewsList } from '@/shared/ActivityDetails/components/ReviewsSection';
import { Loading } from '@/components/common/Loading';

export const ActivityDetails = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const data = await getActivityById(id);
        setActivity(data);
      } catch (error) {
        console.error('Error fetching activity:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [id]);

  if (loading) return <Loading />;
  if (!activity) return <div>Activity not found</div>;

  return (
    <div className="activity-details-page">
      {/* Header com botões de ação */}
      <div className="header">
        <button className="favorite-btn">❤️ Favoritar</button>
        <button className="share-btn">🔗 Compartilhar</button>
      </div>

      {/* Imagens (READ-ONLY) */}
      <ImageDisplay
        coverPhoto={activity.cover_photo_url}
        gallery={activity.photos}
      />

      {/* Sobre (READ-ONLY) */}
      <AboutDisplay
        name={activity.name}
        description={activity.description}
        category={activity.category}
        hobbies={activity.hobbies}
        provider={activity.provider}
      />

      {/* Horários (READ-ONLY) */}
      <ScheduleDisplay schedules={activity.schedules} />

      {/* Preço (READ-ONLY) */}
      <PricingDisplay pricing={activity.pricing} />

      {/* Instrutor (READ-ONLY) */}
      <InstructorDisplay instructor={activity.instructor} />

      {/* Reviews */}
      <ReviewsList reviews={activity.reviews} activityId={id} />
    </div>
  );
};
```

**Exemplo: EditActivity Gestão (Editable)**

```jsx
// app/management/views/Details/ActivityDetails/Edit/EditActivity.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getActivityById, updateActivity } from '@/services/activitiesService';
import {
  ImageUpload,
  ImageGallery,
  AboutEdit,
  ScheduleEdit,
  PricingEdit,
  InstructorEdit
} from '@/shared/ActivityDetails/components';
import { Loading } from '@/components/common/Loading';

export const EditActivity = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const data = await getActivityById(id);
        setActivity(data);
      } catch (error) {
        console.error('Error fetching activity:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [id]);

  const handleChange = (field, value) => {
    setActivity({ ...activity, [field]: value });
    // Clear error for this field
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      await updateActivity(id, activity);
      alert('Atividade atualizada com sucesso!');
      navigate(`/management/activities/${id}`);
    } catch (error) {
      console.error('Error updating activity:', error);
      setErrors(error.response?.data || {});
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Loading />;
  if (!activity) return <div>Activity not found</div>;

  return (
    <div className="edit-activity-page">
      {/* Header com botões */}
      <div className="header">
        <button onClick={() => navigate(-1)} className="cancel-btn">
          ❌ Cancelar
        </button>
        <button onClick={handleSave} className="save-btn" disabled={saving}>
          {saving ? 'Salvando...' : '✅ Salvar'}
        </button>
      </div>

      {/* Imagens (EDITABLE) */}
      <section>
        <h2>📷 Imagens</h2>
        <ImageUpload
          currentImage={activity.cover_photo_url}
          onUpload={(file) => handleChange('cover_photo', file)}
          uploading={false}
        />
        <ImageGallery
          photos={activity.photos}
          onAdd={(photo) => {/* Add to gallery */}}
          onDelete={(photoId) => {/* Delete from gallery */}}
        />
      </section>

      {/* Sobre (EDITABLE) */}
      <section>
        <h2>ℹ️ Informações</h2>
        <AboutEdit
          data={activity}
          onChange={handleChange}
          errors={errors}
        />
      </section>

      {/* Horários (EDITABLE) */}
      <section>
        <h2>📅 Horários</h2>
        <ScheduleEdit
          schedules={activity.schedules}
          onChange={(schedules) => handleChange('schedules', schedules)}
          onAdd={(schedule) => {/* Add schedule */}}
          onDelete={(scheduleId) => {/* Delete schedule */}}
        />
      </section>

      {/* Preço (EDITABLE) */}
      <section>
        <h2>💰 Preços</h2>
        <PricingEdit
          pricing={activity.pricing}
          onChange={(pricing) => handleChange('pricing', pricing)}
          errors={errors}
        />
      </section>

      {/* Instrutor (EDITABLE) */}
      <section>
        <h2>👨‍🏫 Instrutor</h2>
        <InstructorEdit
          instructor={activity.instructor}
          onChange={(instructor) => handleChange('instructor', instructor)}
          errors={errors}
        />
      </section>
    </div>
  );
};
```

**Exemplo: NewActivity Gestão (Create Mode)**

```jsx
// app/management/views/Details/ActivityDetails/New/NewActivity.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createActivity } from '@/services/activitiesService';
import { AboutEdit, ScheduleEdit, PricingEdit } from '@/shared/ActivityDetails/components';

export const NewActivity = () => {
  const navigate = useNavigate();
  const [activity, setActivity] = useState({
    name: '',
    description: '',
    category: '',
    hobbies: [],
    schedules: [],
    pricing: {},
    instructor: null
  });
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setActivity({ ...activity, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const handleCreate = async () => {
    try {
      setSaving(true);
      const newActivity = await createActivity(activity);
      alert('Atividade criada com sucesso!');
      navigate(`/management/activities/${newActivity.id}`);
    } catch (error) {
      console.error('Error creating activity:', error);
      setErrors(error.response?.data || {});
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="new-activity-page">
      <div className="header">
        <h1>➕ Nova Atividade</h1>
        <div className="actions">
          <button onClick={() => navigate(-1)} className="cancel-btn">
            Cancelar
          </button>
          <button onClick={handleCreate} className="save-btn" disabled={saving}>
            {saving ? 'Criando...' : 'Criar Atividade'}
          </button>
        </div>
      </div>

      {/* Usa os mesmos componentes Edit do EditActivity */}
      <AboutEdit data={activity} onChange={handleChange} errors={errors} />
      <ScheduleEdit schedules={activity.schedules} onChange={(s) => handleChange('schedules', s)} />
      <PricingEdit pricing={activity.pricing} onChange={(p) => handleChange('pricing', p)} errors={errors} />
    </div>
  );
};
```

---

## 🔄 **FLUXO DE DADOS**

### **Área Pública (Read-only)**

```
API
 ↓
ActivityDetails (View)
 ↓
useState (activity)
 ↓
Componentes Shared (Display)
 ↓
Props (coverPhoto, description, etc.)
```

### **Área de Gestão (Editable)**

```
API
 ↓
EditActivity (View)
 ↓
useState (activity, errors, saving)
 ↓
handleChange (field, value)
 ↓
Componentes Shared (Edit)
 ↓
Props (data, onChange, errors)
 ↓
User input
 ↓
onChange callback
 ↓
Update state
 ↓
handleSave → API
```

---

## 🎨 **PADRÕES E CONVENÇÕES**

### **1. Nomenclatura de Componentes**

```
✅ BOM:
- ActivityCardBig, ActivityCardMedium, ActivityCardSmall
- ImageDisplay, ImageUpload, ImageGallery
- AboutDisplay, AboutEdit
- ScheduleDisplay, ScheduleEdit

❌ EVITAR:
- BigActivityCard (ordem errada)
- DisplayImage (ordem errada)
- ActivityAboutDisplay (redundante)
```

### **2. Estrutura de Props**

**Display components (read-only):**
```jsx
export const AboutDisplay = ({ name, description, category, hobbies }) => {
  // ...
};
```

**Edit components (editable):**
```jsx
export const AboutEdit = ({ data, onChange, errors }) => {
  // data: objeto completo
  // onChange: callback (field, value)
  // errors: objeto de erros do backend
};
```

### **3. Export pattern**

```jsx
// Cada pasta de componente tem index.js:
// shared/ActivityDetails/components/ImageSection/index.js
export { ImageDisplay } from './ImageDisplay';
export { ImageUpload } from './ImageUpload';
export { ImageGallery } from './ImageGallery';

// Uso:
import { ImageDisplay, ImageUpload } from '@/shared/ActivityDetails/components/ImageSection';
```

### **4. CSS Modules vs CSS normal**

**Opção 1: CSS Modules** (recomendado)
```jsx
import styles from './ActivityCard.module.css';

<div className={styles.card}>
  <h3 className={styles.title}>{name}</h3>
</div>
```

**Opção 2: CSS normal com BEM**
```jsx
import './ActivityCard.css';

<div className="activity-card">
  <h3 className="activity-card__title">{name}</h3>
</div>
```

---

## ✅ **BENEFÍCIOS FINAIS**

| Benefício | Descrição |
|-----------|-----------|
| **DRY** | Componentes reutilizados entre público e gestão |
| **Manutenção** | Alterar 1 componente atualiza todas as áreas |
| **Consistência** | Mesma aparência em diferentes contextos |
| **Escalabilidade** | Fácil adicionar novas views |
| **Testabilidade** | Componentes isolados são fáceis de testar |
| **Performance** | Code splitting por rota |
| **Organização** | Estrutura clara e previsível |

---

## 🚀 **PRÓXIMOS PASSOS**

1. **Implementar componentes básicos** (Button, Input, Modal)
2. **Criar ActivityCard** (Big, Medium, Small)
3. **Implementar shared/ActivityDetails**
4. **Criar views públicas** (usando componentes Display)
5. **Criar views de gestão** (usando componentes Edit)
6. **Adicionar testes unitários**
7. **Otimizar performance** (lazy loading, memoization)

---

**Desenvolvido com ❤️ para o HobbyMap**
