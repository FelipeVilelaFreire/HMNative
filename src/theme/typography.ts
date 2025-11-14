// Sistema de Tipografia - HobbyMap
export const typography = {
  // Tamanhos de fonte
  fontSize: {
    xs: 10,
    sm: 12,
    base: 14,      // Tamanho padrão do body
    lg: 16,
    xl: 18,
    '2xl': 20,
    '3xl': 24,
    '4xl': 28,
    '5xl': 36,
  },

  // Pesos de fonte
  fontWeight: {
    light: '300' as const,
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },

  // Altura de linha
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
  },
};

// Estilos pré-definidos para textos
export const textStyles = {
  // Títulos
  h1: {
    fontSize: typography.fontSize['4xl'],  // 36px
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
  },
  h2: {
    fontSize: typography.fontSize['3xl'],  // 30px
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
  },
  h3: {
    fontSize: typography.fontSize['2xl'],  // 24px
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.tight,
  },
  h4: {
    fontSize: typography.fontSize.xl,      // 20px
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
  },

  // Subtítulos
  subtitle1: {
    fontSize: typography.fontSize.lg,      // 18px
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
  },
  subtitle2: {
    fontSize: typography.fontSize.base,    // 16px
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
  },

  // Body (texto padrão)
  body1: {
    fontSize: typography.fontSize.base,    // 16px
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.normal,
  },
  body2: {
    fontSize: typography.fontSize.sm,      // 14px
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.normal,
  },

  // Caption (texto pequeno)
  caption: {
    fontSize: typography.fontSize.xs,      // 12px
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.normal,
  },

  // Button
  button: {
    fontSize: typography.fontSize.base,    // 16px
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.tight,
  },
};
