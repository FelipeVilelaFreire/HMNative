# 📦 Padrão de Componentização - HobbyMap Mobile

## 🎯 Objetivo

Manter o código limpo, organizado e fácil de manter, separando **lógica** de **estilos**.

---

## 📁 Estrutura de Arquivos

### **Para Telas (Screens):**

```
src/screens/NomeDaTela/
├── NomeDaTela.tsx         # Lógica e JSX
├── NomeDaTela.styles.ts   # Estilos separados
└── components/            # Componentes específicos da tela
    └── ComponenteNome/
        ├── ComponenteNome.tsx
        ├── ComponenteNome.styles.ts
        └── index.ts
```

### **Para Componentes:**

```
src/components/cards/NomeDoCard/
├── NomeDoCard.tsx         # Lógica e JSX
├── NomeDoCard.styles.ts   # Estilos separados
└── index.ts               # Export para facilitar import
```

---

## ✅ **BOM - Estilos Separados**

### **Arquivo Principal (Home.tsx):**
```tsx
import { View, ScrollView } from 'react-native';
import LocationPicker from './components/LocationPicker';
import { styles } from './Home.styles';  // ✅ Import dos estilos

export default function Home() {
  return (
    <View style={styles.container}>
      <LocationPicker />
      <ScrollView style={styles.content}>
        {/* Conteúdo */}
      </ScrollView>
    </View>
  );
}
```

### **Arquivo de Estilos (Home.styles.ts):**
```tsx
import { StyleSheet } from 'react-native';
import { colors, textStyles } from '@/src/theme';  // ✅ Sempre usa o tema

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,  // ✅ Usa tema
  },
  content: {
    flex: 1,
  },
  title: {
    ...textStyles.h1,  // ✅ Usa tema
    color: colors.primary,
  },
});
```

---

## ❌ **RUIM - Estilos Inline (Evitar)**

```tsx
import { View, ScrollView, StyleSheet } from 'react-native';
import { colors } from '@/src/theme';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {/* Conteúdo */}
      </ScrollView>
    </View>
  );
}

// ❌ Estilos no mesmo arquivo poluem o código
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
});
```

---

## 🎨 **SEMPRE Usar o Tema**

### **Cores:**
```tsx
// ✅ BOM
backgroundColor: colors.primary

// ❌ RUIM
backgroundColor: '#C02AE5'
```

### **Textos:**
```tsx
// ✅ BOM
...textStyles.h1

// ❌ RUIM
fontSize: 36,
fontWeight: '700',
```

### **Sombras e Bordas:**
```tsx
// ✅ BOM
...cardStyle  // ou cardShadow, cardBorder

// ❌ RUIM
shadowColor: '#000',
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.25,
```

---

## 📦 **Componentização de Telas**

### **Exemplo: Home**

```
Home/
├── Home.tsx              # Orquestra os componentes
├── Home.styles.ts        # Estilos da tela
└── components/           # Componentes ESPECÍFICOS da Home
    ├── LocationPicker/
    │   ├── LocationPicker.tsx
    │   ├── LocationPicker.styles.ts
    │   └── index.ts
    │
    └── HeroSection/
        ├── HeroSection.tsx
        ├── HeroSection.styles.ts
        └── index.ts
```

**Home.tsx orquestra:**
```tsx
import { View } from 'react-native';
import LocationPicker from './components/LocationPicker';
import HeroSection from './components/HeroSection';
import { styles } from './Home.styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <LocationPicker />
      <HeroSection />
    </View>
  );
}
```

---

## 🔄 **Componentes Reutilizáveis**

Componentes usados em **múltiplas telas** vão em `src/components/`:

```
src/components/
├── cards/
│   └── ActivityCard/
│       ├── ActivityCard.tsx
│       ├── ActivityCard.styles.ts
│       └── index.ts
│
└── common/
    └── Button/
        ├── Button.tsx
        ├── Button.styles.ts
        └── index.ts
```

**Import fica limpo:**
```tsx
import ActivityCard from '@/src/components/cards/ActivityCard';
import Button from '@/src/components/common/Button';
```

---

## 📝 **Checklist ao Criar Componente**

- [ ] Criar pasta com nome do componente
- [ ] Criar arquivo `.tsx` com lógica
- [ ] Criar arquivo `.styles.ts` com estilos
- [ ] Criar `index.ts` para export
- [ ] **SEMPRE** usar `colors`, `textStyles`, `cardStyle` do tema
- [ ] **NUNCA** hardcode de cores ou estilos

---

## 🚀 **Benefícios**

✅ **Código limpo** - Lógica separada de estilos
✅ **Fácil manutenção** - Encontrar estilos rapidamente
✅ **Consistência** - Tema centralizado
✅ **Escalabilidade** - Fácil adicionar novos componentes
✅ **Reutilização** - Componentes isolados e reutilizáveis

---

**Desenvolvido para o HobbyMap Mobile** 🗺️
