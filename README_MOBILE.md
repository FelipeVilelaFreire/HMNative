# 📱 HobbyMap Mobile - React Native

> App mobile nativo para descobrir, reservar e gerenciar atividades e hobbies locais

---

## 📖 SOBRE O PROJETO MOBILE

O **HobbyMap Mobile** é um aplicativo React Native com Expo que permite aos usuários descobrirem atividades próximas e aos provedores gerenciarem seus negócios de forma completa.

### **Dual Mode System:**
O app possui **dois modos distintos** que compartilham componentes:
- 🧑 **Modo Usuário** - Descobrir e reservar atividades
- 🏢 **Modo Provider** - Gerenciar atividades, equipe e estabelecimento

---

## 🏗️ ARQUITETURA DO MOBILE

### **Tecnologias:**
- **React Native** 0.81.5
- **Expo** ~52.0.18
- **Expo Router** ~4.0.14 (file-based routing)
- **TypeScript** 5.3.3
- **React Navigation** 7+ (integrado ao Expo Router)

### **Estrutura de Pastas:**

```
HMNative/
│
├── 📂 app/                          # Rotas (Expo Router - file-based)
│   ├── (tabs)/                      # Layout com tabs (usuário)
│   │   ├── _layout.tsx             # Tab Navigator
│   │   ├── index.tsx               # Home
│   │   ├── search.tsx              # Busca
│   │   ├── favorites.tsx           # Favoritos
│   │   └── profile.tsx             # Perfil
│   │
│   ├── gestao/                      # Área de gestão (provider)
│   │   ├── _layout.tsx             # Stack Navigator
│   │   ├── index.tsx               # Gestão principal (tabs)
│   │   ├── activity/
│   │   │   └── [id].tsx            # Ver/Editar atividade
│   │   └── create-activity/
│   │       └── select-image.tsx    # Seleção de imagem
│   │
│   ├── add.tsx                      # Criar nova atividade
│   ├── _layout.tsx                  # Root layout
│   └── +not-found.tsx              # 404
│
├── 📂 src/
│   ├── 📂 components/               # Componentes organizados por tipo
│   │   │
│   │   ├── 📂 cards/               # Cards reutilizáveis
│   │   │   ├── ActivityCard/       # Card de atividade (Big, Medium, Small)
│   │   │   │   ├── ActivityCard.tsx
│   │   │   │   ├── ActivityCard.styles.ts
│   │   │   │   ├── components/     # Subcomponentes do card
│   │   │   │   │   ├── ActivityCardImage/
│   │   │   │   │   ├── ActivityCardContent/
│   │   │   │   │   └── ActivityCardFooter/
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── ProviderCard/       # Card de provider
│   │   │   ├── HobbiesCard/        # Card de hobbies (perfil)
│   │   │   └── index.ts
│   │   │
│   │   ├── 📂 ui/                  # Componentes de UI genéricos
│   │   │   ├── Carousel/
│   │   │   ├── CategoryChip/
│   │   │   ├── SectionTitle/
│   │   │   ├── FloatingButton/
│   │   │   ├── Modal/              # Modal base reutilizável
│   │   │   └── TransitionScreen/
│   │   │
│   │   ├── 📂 layout/              # Componentes de layout
│   │   │   ├── ProviderHeader/     # Header área de gestão
│   │   │   └── index.ts
│   │   │
│   │   ├── 📂 features/            # Features complexas com lógica
│   │   │   │
│   │   │   ├── ActivityDetail/     # Detalhes de atividade (SHARED)
│   │   │   │   ├── ActivityDetail.tsx
│   │   │   │   ├── ActivityDetail.styles.ts
│   │   │   │   ├── components/
│   │   │   │   │   ├── ActivityDetailHeader/    # Header fixo
│   │   │   │   │   ├── ActivityDetailImage/     # Imagem (view/edit)
│   │   │   │   │   └── ActivityModal/           # Conteúdo scrollável
│   │   │   │   │       ├── ActivityModal.tsx
│   │   │   │   │       └── components/
│   │   │   │   │           ├── ActivityInitialData/    # Rating, reviews
│   │   │   │   │           ├── ActivityInfoCard/       # Horário, preço, categoria (EDITÁVEL)
│   │   │   │   │           ├── ActivityProviderCard/   # Card do provider
│   │   │   │   │           ├── ActivityLocationCard/   # Localização (EDITÁVEL)
│   │   │   │   │           ├── ActivityAboutCard/      # Sobre (EDITÁVEL)
│   │   │   │   │           ├── ActivityProvidedByCard/ # Info completa provider
│   │   │   │   │           └── ActivityReviewsCard/    # Lista de reviews
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── ProviderDetail/     # Detalhes de provider (SHARED)
│   │   │   │   ├── ProviderDetail.tsx
│   │   │   │   ├── ProviderDetail.styles.ts
│   │   │   │   └── components/
│   │   │   │       ├── ProviderHeader/
│   │   │   │       ├── ProviderImage/
│   │   │   │       └── ProviderModal/
│   │   │   │           └── components/
│   │   │   │               ├── ProviderInitialData/
│   │   │   │               ├── ProviderInfoCard/      # Info (EDITÁVEL)
│   │   │   │               ├── ProviderAboutCard/     # Sobre (EDITÁVEL)
│   │   │   │               ├── ProviderContactCard/   # Contato (EDITÁVEL)
│   │   │   │               ├── ProviderLocationCard/  # Localização (EDITÁVEL)
│   │   │   │               └── ProviderActivitiesCard/
│   │   │   │
│   │   │   └── ImagePicker/        # Seletor de imagem estilo Instagram
│   │   │       ├── ImagePicker.tsx
│   │   │       ├── ImagePicker.styles.ts
│   │   │       └── index.ts
│   │   │
│   │   └── 📂 modals/              # Modais específicos
│   │       └── SelectProviderModal/
│   │
│   ├── 📂 screens/                 # Telas organizadas por área
│   │   │
│   │   ├── user/                   # Telas do usuário
│   │   │   ├── Home/
│   │   │   ├── Search/
│   │   │   │   └── components/
│   │   │   │       ├── SearchHeader/
│   │   │   │       ├── FiltersModal/
│   │   │   │       └── ActivitiesModal/
│   │   │   ├── Favorites/
│   │   │   └── Profile/
│   │   │       └── components/
│   │   │
│   │   └── provider/               # Telas do provider
│   │       └── Gestao/             # Área de gestão
│   │           ├── Gestao.tsx      # Tela principal (3 tabs)
│   │           ├── Gestao.styles.ts
│   │           └── components/
│   │               ├── ManagementActivityCard/  # Card com botões editar/excluir
│   │               ├── TeamMemberCard/
│   │               ├── SpaceCard/
│   │               └── DeleteActivityModal/     # Modal de confirmação
│   │
│   ├── 📂 contexts/                # Context API
│   │   └── UserModeContext.tsx    # Modo usuário/provider
│   │
│   ├── 📂 mocks/                   # Dados mock para desenvolvimento
│   │   ├── activities.ts
│   │   ├── providers.ts
│   │   ├── reviews.ts
│   │   ├── hobbies.ts
│   │   ├── management.ts           # Team members, spaces
│   │   └── user.ts
│   │
│   ├── 📂 theme/                   # Sistema de design
│   │   ├── colors.ts              # Paleta de cores
│   │   ├── typography.ts          # Fontes e tamanhos
│   │   └── index.ts
│   │
│   ├── 📂 constants/               # Constantes do app
│   │   └── icons.ts               # Nomes de ícones Ionicons
│   │
│   └── 📂 utils/                   # Funções utilitárias
│
├── 📂 assets/                      # Assets estáticos
│   ├── fonts/
│   └── images/
│
├── package.json
├── tsconfig.json
├── app.json                        # Configuração do Expo
└── README_MOBILE.md               # Este arquivo
```

---

## 🎯 PADRÕES E BOAS PRÁTICAS

### **1. Componentização:**

#### **✅ Componentes Reutilizáveis:**
Componentes que são usados em **múltiplas telas diferentes**:
```typescript
// src/components/cards/ActivityCard/
// Usado em: Home, Search, Favorites, Gestão
```

#### **✅ Feature Components (SHARED):**
Componentes complexos **compartilhados entre usuário e provider**:
```typescript
// src/components/features/ActivityDetail/
// Usado por:
// - Usuários (visualização read-only)
// - Provedores (visualização + edição + criação)

<ActivityDetail
  activity={activity}
  isProvider={true}      // Modo provider
  isEditing={true}       // Modo edição
  isCreating={false}     // Modo criação
  onSave={handleSave}
/>
```

#### **✅ Screen Components:**
Componentes usados apenas em **uma tela específica**:
```typescript
// src/screens/user/Search/components/SearchHeader/
// Usado APENAS na tela de Search
```

### **2. Estrutura de Arquivos por Componente:**

```
ComponentName/
├── ComponentName.tsx          # Componente principal
├── ComponentName.styles.ts    # Estilos (StyleSheet)
├── components/                # Subcomponentes (se houver)
│   ├── SubComponent/
│   │   ├── SubComponent.tsx
│   │   └── SubComponent.styles.ts
│   └── index.ts
└── index.ts                   # Export default
```

**Exemplo Real:**
```
ActivityCard/
├── ActivityCard.tsx
├── ActivityCard.styles.ts
├── components/
│   ├── ActivityCardImage/
│   │   ├── ActivityCardImage.tsx
│   │   └── ActivityCardImage.styles.ts
│   ├── ActivityCardContent/
│   │   ├── ActivityCardContent.tsx
│   │   └── ActivityCardContent.styles.ts
│   └── ActivityCardFooter/
│       ├── ActivityCardFooter.tsx
│       └── ActivityCardFooter.styles.ts
└── index.ts
```

### **3. Naming Conventions:**

```typescript
// ✅ BOM - PascalCase para componentes
ActivityCard.tsx
ProviderDetail.tsx

// ✅ BOM - camelCase para arquivos utilitários
formatDate.ts
useActivityData.ts

// ✅ BOM - kebab-case para pastas de rotas
gestao/activity/[id].tsx

// ✅ BOM - Sufixo descritivo nos estilos
ActivityCard.styles.ts

// ❌ EVITAR - Nomes genéricos
Card.tsx
Detail.tsx
Screen.tsx
```

### **4. Imports Organizados:**

```typescript
// 1. React e libs externas
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// 2. Contextos
import { useUserMode } from '@/src/contexts';

// 3. Componentes
import { ActivityCard } from '@/src/components/cards';
import { SectionTitle } from '@/src/components/ui';

// 4. Types e Mocks
import { Activity } from '@/src/mocks/activities';

// 5. Estilos e tema
import { colors } from '@/src/theme';
import { styles } from './Component.styles';
```

### **5. TypeScript Props:**

```typescript
// ✅ BOM - Sempre definir interface
interface ActivityCardProps {
  activity: Activity;
  variant?: 'big' | 'medium' | 'small';
  onPress?: () => void;
  spaceName?: string;
}

// ✅ BOM - Usar valores default
export default function ActivityCard({
  activity,
  variant = 'medium',
  onPress,
  spaceName
}: ActivityCardProps) {
  // ...
}

// ❌ EVITAR - Props sem tipo
function ActivityCard({ activity, onPress }) {
  // ...
}
```

### **6. Estilos (StyleSheet):**

```typescript
// ✅ BOM - Usar StyleSheet.create
import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
  },
});

// ❌ EVITAR - Inline styles
<View style={{ backgroundColor: '#fff', padding: 20 }}>
```

### **7. Sistema de Design (Theme):**

```typescript
// src/theme/colors.ts
export const colors = {
  primary: '#C02AE5',      // Roxo principal
  secondary: '#2F2F2F',    // Preto secundário
  success: '#10B981',      // Verde
  error: '#EF4444',        // Vermelho
  white: '#FFFFFF',
  black: '#000000',
  gray300: '#D4D4D4',
  gray400: '#A3A3A3',
  // ...
};

// src/theme/typography.ts
export const typography = {
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};
```

**SEMPRE usar theme ao invés de valores hardcoded:**
```typescript
// ✅ BOM
color: colors.primary
fontSize: typography.fontSize.lg

// ❌ EVITAR
color: '#C02AE5'
fontSize: 18
```

---

## 🔄 SISTEMA DE REUTILIZAÇÃO

### **Conceito Principal: DRY (Don't Repeat Yourself)**

Os componentes de detalhes (`ActivityDetail`, `ProviderDetail`) são **compartilhados** entre:
1. **Área do Usuário** (visualização read-only)
2. **Área do Provider** (visualização + edição + criação)

### **Exemplo: ActivityDetail**

#### **Modo Visualização (Usuário):**
```typescript
// app/(tabs)/activity/[id].tsx
<ActivityDetail
  activity={activity}
  isProvider={false}
  isEditing={false}
  onBack={() => router.back()}
/>
```

#### **Modo Visualização (Provider):**
```typescript
// app/gestao/activity/[id].tsx
<ActivityDetail
  activity={activity}
  isProvider={true}       // Mostra botão "Editar"
  isEditing={false}
  onEditPress={handleEdit}
  onBack={() => router.back()}
/>
```

#### **Modo Edição (Provider):**
```typescript
// app/gestao/activity/[id].tsx?edit=true
<ActivityDetail
  activity={activity}
  isProvider={true}
  isEditing={true}        // Inputs editáveis, botão "Editando"
  onEditPress={handleEdit}
  onActivityChange={handleChanges}
  onBack={() => router.back()}
/>
```

#### **Modo Criação (Provider):**
```typescript
// app/add.tsx
<ActivityDetail
  activity={emptyActivity}
  isProvider={true}
  isEditing={true}
  isCreating={true}       // Botão "Salvar" verde
  onSave={handleCreate}
  onActivityChange={handleChanges}
  onBack={() => router.back()}
/>
```

### **Benefícios:**
✅ **1 componente** usado em **4 contextos diferentes**
✅ Alterar visual uma vez, atualiza todos os contextos
✅ Código limpo e manutenível
✅ Consistência visual garantida

---

## 🎨 FEATURES IMPLEMENTADAS

### **1. Sistema Dual Mode (Usuário/Provider)**

```typescript
// src/contexts/UserModeContext.tsx
const { mode, setMode } = useUserMode();

// mode === 'user' → Tabs do usuário (Home, Search, Favorites, Profile)
// mode === 'provider' → Tabs de gestão (Atividades, Equipe, Espaços)
```

**Navegação:**
- Usuário: Bottom tabs com 4 telas
- Provider: Bottom tabs com 3 telas + gestão completa

### **2. ActivityDetail (Reutilizável)**

**Componente completo de detalhes com:**
- ✅ Header fixo animado (esconde ao scrollar)
- ✅ Imagem grande (47% da tela)
- ✅ Modal scrollável com informações
- ✅ Modo visualização (read-only)
- ✅ Modo edição (inputs com bordas roxas)
- ✅ Modo criação (botão verde "Salvar")
- ✅ Overlay na imagem ("Alterar foto" ou "Adicionar foto")
- ✅ Campos não editáveis com opacity 0.5

**Campos editáveis:**
- Nome da atividade
- Descrição/Subtítulo
- Horário
- Preço
- Categoria
- Endereço, Bairro, Cidade
- Descrição completa (sobre)

**Campos não editáveis (automáticos):**
- Provider (autopreenchido)
- Rating e Reviews
- Distância

### **3. ProviderDetail (Reutilizável)**

**Mesmo conceito do ActivityDetail:**
- ✅ Visualização vs Edição
- ✅ Campos editáveis com bordas roxas
- ✅ Provider autopreenchido do contexto
- ✅ Imagem editável

### **4. Image Picker (Estilo Instagram)**

```typescript
// src/components/features/ImagePicker/
<ImagePicker
  onCancel={() => router.back()}
  onNext={(selectedUris) => handleNext(selectedUris)}
  maxSelection={5}
/>
```

**Features:**
- ✅ Grid 3x3 de fotos da galeria
- ✅ Preview grande da primeira foto selecionada
- ✅ Seleção múltipla (até 5 fotos)
- ✅ Badges numerados nas fotos selecionadas
- ✅ Overlay azul nas fotos selecionadas
- ✅ Header com "Cancelar" e "Próximo"
- ✅ Footer com contador de fotos
- ✅ Permissões de galeria

### **5. Gestão de Atividades (Provider)**

**Tela principal com 3 tabs:**
1. **Atividades** - Lista de atividades com botões editar/excluir
2. **Equipe** - Membros da equipe
3. **Espaços** - Locais/quadras/salas

**ManagementActivityCard:**
```typescript
<ManagementActivityCard
  activity={activity}
  spaceName="Quadra 1"
  onPress={() => handleView(activity.id)}
  onEdit={() => handleEdit(activity.id)}
  onDelete={() => handleDelete(activity.id)}
/>
```

**Features:**
- ✅ Reutiliza ActivityCard global
- ✅ Barra inferior com botões editar/excluir
- ✅ Espaço/local exibido abaixo do horário (ícone laranja)
- ✅ Click no card → Ver atividade
- ✅ Click "Editar" → Modo edição
- ✅ Click "Excluir" → Modal de confirmação

### **6. Delete Activity Modal**

```typescript
// src/screens/provider/Gestao/components/DeleteActivityModal/
<DeleteActivityModal
  activity={activity}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
/>
```

**Features:**
- ✅ Imagem da atividade em círculo com borda vermelha
- ✅ Título "Excluir Atividade"
- ✅ Nome da atividade destacado em vermelho
- ✅ Mensagem de confirmação
- ✅ Botões "Cancelar" (cinza) e "Excluir" (vermelho com ícone lixeira)

### **7. Fluxo Completo de Criação**

```
1. Click botão "+" do footer
   ↓
2. Abre Image Picker (estilo Instagram)
   ↓
3. Seleciona fotos → "Próximo"
   ↓
4. Abre /add com formulário
   ↓
5. Preenche dados → "Salvar" (verde)
   ↓
6. Volta para /gestao
```

---

## 🛠️ INSTALAÇÃO E SETUP

### **Pré-requisitos:**
- Node.js 20+
- npm ou yarn
- Expo CLI
- Expo Go app (iOS/Android) ou emulador

### **1. Instalar Dependências:**
```bash
cd HMNative
npm install
```

### **2. Iniciar Desenvolvimento:**
```bash
# Limpar cache e iniciar
npx expo start --clear

# OU porta específica
npx expo start --clear --port 8082
```

### **3. Testar no Dispositivo:**
- Instale o **Expo Go** no celular
- Escaneie o QR code exibido no terminal
- OU pressione 'a' para Android emulator, 'i' para iOS simulator

### **4. Estrutura de Navegação:**

**Usuário:**
```
http://localhost:8081/
http://localhost:8081/search
http://localhost:8081/favorites
http://localhost:8081/profile
```

**Provider (Gestão):**
```
http://localhost:8081/gestao                    # Tab Atividades
http://localhost:8081/gestao/activity/1         # Ver atividade
http://localhost:8081/gestao/activity/1?edit=true # Editar
http://localhost:8081/gestao/create-activity/select-image # Picker
http://localhost:8081/add                       # Criar atividade
```

---

## 📝 GUIA DE DESENVOLVIMENTO

### **Criando um Novo Componente:**

```bash
# 1. Escolher pasta correta:
# - src/components/cards/ → Card reutilizável
# - src/components/ui/ → Componente UI genérico
# - src/components/features/ → Feature complexa compartilhada
# - src/screens/[area]/[Screen]/components/ → Componente específico da tela

# 2. Criar estrutura:
mkdir -p src/components/cards/MyCard
cd src/components/cards/MyCard

# 3. Criar arquivos:
touch MyCard.tsx
touch MyCard.styles.ts
touch index.ts
```

**MyCard.tsx:**
```typescript
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './MyCard.styles';

interface MyCardProps {
  title: string;
  subtitle?: string;
  onPress?: () => void;
}

export default function MyCard({ title, subtitle, onPress }: MyCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}
```

**MyCard.styles.ts:**
```typescript
import { StyleSheet } from 'react-native';
import { colors, typography } from '@/src/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.gray600,
    marginTop: 4,
  },
});
```

**index.ts:**
```typescript
export { default as MyCard } from './MyCard';
```

### **Adicionando Nova Rota:**

```typescript
// app/my-route.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

export default function MyRoutePage() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View>
        <Text>My Route</Text>
      </View>
    </>
  );
}
```

### **Usando Contexto:**

```typescript
import { useUserMode } from '@/src/contexts';

function MyComponent() {
  const { mode, setMode } = useUserMode();

  const handleSwitchMode = () => {
    setMode(mode === 'user' ? 'provider' : 'user');
  };

  return (
    <Text>Current mode: {mode}</Text>
  );
}
```

---

## 🎯 CHECKLIST PARA NOVOS COMPONENTES

Ao criar um novo componente, certifique-se de:

- [ ] Usar TypeScript com interfaces para props
- [ ] Definir valores default para props opcionais
- [ ] Criar arquivo `.styles.ts` separado
- [ ] Usar theme (colors, typography) ao invés de valores hardcoded
- [ ] Exportar via `index.ts`
- [ ] Organizar imports corretamente
- [ ] Adicionar comentários JSDoc se necessário
- [ ] Testar em iOS e Android
- [ ] Verificar responsividade em diferentes tamanhos de tela
- [ ] Usar componentes do tema quando possível

---

## 🚀 BUILD E DEPLOY

### **Build de Desenvolvimento:**
```bash
# Android
npx expo run:android

# iOS
npx expo run:ios
```

### **Build de Produção (EAS):**
```bash
# Configurar EAS
npm install -g eas-cli
eas login
eas build:configure

# Build para Android
eas build --platform android

# Build para iOS
eas build --platform ios

# Build para ambos
eas build --platform all
```

### **Publicar Atualização OTA:**
```bash
eas update --branch production
```

---

## 📚 RECURSOS E DOCUMENTAÇÃO

**Expo:**
- [Expo Docs](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [EAS Build](https://docs.expo.dev/build/introduction/)

**React Native:**
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/docs/getting-started)

**TypeScript:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

## 🐛 TROUBLESHOOTING

### **Cache Issues:**
```bash
# Limpar cache completo
npx expo start --clear

# Limpar cache do Metro
rm -rf node_modules/.cache

# Reinstalar dependências
rm -rf node_modules
npm install
```

### **iOS Build Issues:**
```bash
# Limpar build iOS
cd ios
pod deintegrate
pod install
cd ..
```

### **Android Build Issues:**
```bash
# Limpar build Android
cd android
./gradlew clean
cd ..
```

### **Port Already in Use:**
```bash
# Usar porta diferente
npx expo start --port 8082
```

---

## 👨‍💻 DESENVOLVEDOR

**Felipe**
- 📱 Projeto: HobbyMap Mobile
- 🛠️ Stack: React Native + Expo + TypeScript
- 📅 Período: 2024 - Presente

---

## 📄 LICENÇA

Este projeto é de uso pessoal/educacional.

---

**Desenvolvido com ❤️ usando React Native e Expo!**

🗺️ **HobbyMap Mobile - Descubra, Reserve, Viva!**
