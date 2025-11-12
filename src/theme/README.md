# 🎨 Sistema de Tema - HobbyMap

## 📋 Cores

### Cores Principais
```tsx
colors.primary        // #C02AE5 - Roxo principal
colors.secondary      // #2F2F2F - Preto secundário
colors.secondaryOpacity // rgba(47, 47, 47, 0.9) - Preto com 90% opacity
colors.background     // #FFFFFF - Branco para fundos
```

### Cores Base
```tsx
colors.white          // #FFFFFF
colors.black          // #000000
```

### Tons de Cinza
```tsx
colors.gray100 até colors.gray900
```

### Cores de Feedback
```tsx
colors.success        // Verde
colors.error          // Vermelho
colors.warning        // Amarelo
colors.info           // Azul
```

---

## ✍️ Tipografia

### Tamanhos de Fonte
```tsx
typography.fontSize.xs      // 12px
typography.fontSize.sm      // 14px
typography.fontSize.base    // 16px (padrão)
typography.fontSize.lg      // 18px
typography.fontSize.xl      // 20px
typography.fontSize['2xl']  // 24px
typography.fontSize['3xl']  // 30px
typography.fontSize['4xl']  // 36px
typography.fontSize['5xl']  // 48px
```

### Pesos de Fonte
```tsx
typography.fontWeight.light      // 300
typography.fontWeight.regular    // 400 (padrão)
typography.fontWeight.medium     // 500
typography.fontWeight.semibold   // 600
typography.fontWeight.bold       // 700
typography.fontWeight.extrabold  // 800
```

---

## 📝 Estilos de Texto Pré-definidos

### Títulos
```tsx
textStyles.h1        // 36px, bold
textStyles.h2        // 30px, bold
textStyles.h3        // 24px, semibold
textStyles.h4        // 20px, semibold
```

### Subtítulos
```tsx
textStyles.subtitle1 // 18px, medium
textStyles.subtitle2 // 16px, medium
```

### Body (Texto padrão)
```tsx
textStyles.body1     // 16px, regular (padrão)
textStyles.body2     // 14px, regular
```

### Caption (Texto pequeno)
```tsx
textStyles.caption   // 12px, regular
```

### Button
```tsx
textStyles.button    // 16px, semibold
```

---

## 🚀 Como Usar

### Importar
```tsx
import { colors, textStyles, typography } from '@/src/theme';
```

### Exemplo de Uso
```tsx
import { View, Text, StyleSheet } from 'react-native';
import { colors, textStyles } from '@/src/theme';

export default function MyComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Título</Text>
      <Text style={styles.body}>Texto do corpo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    ...textStyles.h2,
    color: colors.primary,
  },
  body: {
    ...textStyles.body1,
    color: colors.secondary,
  },
});
```

---

## 💡 Dicas

1. **Sempre use o sistema de cores** - Nunca escreva cores hardcoded como `'#C02AE5'`, sempre use `colors.primary`

2. **Use textStyles para consistência** - Spread os estilos de texto:
   ```tsx
   ...textStyles.h1
   ```

3. **Combine estilos** - Você pode sobrescrever propriedades:
   ```tsx
   {
     ...textStyles.body1,
     color: colors.primary,  // Sobrescreve a cor
   }
   ```
