# 🎨 Sistema de Sombras e Bordas - HobbyMap

## 📦 Estilo de Cards (Padrão para todos os cards)

### **cardShadow** - Sombra do Card
```tsx
// Box Shadow: X:0, Y:4, Blur:4, Color:#000000 25%
shadowColor: '#000000'
shadowOffset: { width: 0, height: 4 }
shadowOpacity: 0.25
shadowRadius: 4
elevation: 4 // Android
```

### **cardBorder** - Borda do Card
```tsx
// Stroke: #000000 com 4% opacity
borderWidth: 1
borderColor: 'rgba(0, 0, 0, 0.04)'
```

### **cardStyle** - Estilo Completo (Sombra + Borda)
```tsx
// Combina cardShadow + cardBorder
// Use este para cards completos
```

---

## 🔽 Estilo do Footer

### **footerShadow**
```tsx
// Box Shadow: X:0, Y:-2, Blur:4, Spread:0, Color:#000000 25%
shadowColor: '#000000'
shadowOffset: { width: 0, height: -2 }
shadowOpacity: 0.25
shadowRadius: 4
elevation: 8 // Android (maior para shadow pra cima)
```

---

## 🚀 Como Usar

### Importar
```tsx
import { cardStyle, cardShadow, cardBorder, footerShadow } from '@/src/theme';
```

### Exemplo 1: Card Completo (Sombra + Borda)
```tsx
import { View, Text, StyleSheet } from 'react-native';
import { colors, textStyles, cardStyle } from '@/src/theme';

export default function ActivityCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Yoga para Iniciantes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    ...cardStyle,           // ✅ Aplica sombra + borda
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
  },
  title: {
    ...textStyles.h4,
    color: colors.secondary,
  },
});
```

### Exemplo 2: Card com Apenas Sombra
```tsx
const styles = StyleSheet.create({
  card: {
    ...cardShadow,          // ✅ Aplica apenas a sombra
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
  },
});
```

### Exemplo 3: Card com Apenas Borda
```tsx
const styles = StyleSheet.create({
  card: {
    ...cardBorder,          // ✅ Aplica apenas a borda
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
  },
});
```

---

## 📋 Especificações do Figma

### Cards Padrão
- **Drop Shadow:** X:0, Y:4, Blur:4, Color:#000000 25%
- **Stroke:** #000000 4%

### Footer/TabBar
- **Box Shadow:** X:0, Y:-2, Blur:4, Spread:0, Color:#000000 25%

---

## 💡 Dicas

1. **Sempre use `cardStyle` para cards** - Mantém consistência em todo o app
2. **BorderRadius** - Adicione sempre junto com o cardStyle:
   ```tsx
   {
     ...cardStyle,
     borderRadius: 12, // ou 8, 16, etc
   }
   ```
3. **Background** - Sempre defina um backgroundColor:
   ```tsx
   {
     ...cardStyle,
     backgroundColor: colors.white,
   }
   ```
