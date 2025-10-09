/**
 * 主题配色系统 - 轻量柔和风格
 * 使用柔和的色彩，降低视觉负担
 */

export type ColorTheme = 
  | 'slate'    // 石板灰 - 专业稳重
  | 'blue'     // 天蓝色 - 清新可靠
  | 'green'    // 薄荷绿 - 自然舒适
  | 'purple'   // 淡紫色 - 优雅精致
  | 'amber'    // 琥珀色 - 温暖活力
  | 'rose';    // 玫瑰粉 - 柔和友好

export interface ThemeColors {
  // 基础渐变色
  gradientFrom: string;
  gradientTo: string;
  // 悬停渐变色
  hoverFrom: string;
  hoverTo: string;
  // 文字颜色
  textColor: string;
  // 阴影颜色
  shadowColor: string;
}

export const colorThemes: Record<ColorTheme, ThemeColors> = {
  slate: {
    gradientFrom: '#f1f5f9',
    gradientTo: '#e2e8f0',
    hoverFrom: '#e2e8f0',
    hoverTo: '#cbd5e1',
    textColor: '#475569',
    shadowColor: 'rgba(71, 85, 105, 0.15)',
  },
  blue: {
    gradientFrom: '#e0f2fe',
    gradientTo: '#bae6fd',
    hoverFrom: '#bae6fd',
    hoverTo: '#7dd3fc',
    textColor: '#0c4a6e',
    shadowColor: 'rgba(12, 74, 110, 0.15)',
  },
  green: {
    gradientFrom: '#d1fae5',
    gradientTo: '#a7f3d0',
    hoverFrom: '#a7f3d0',
    hoverTo: '#6ee7b7',
    textColor: '#065f46',
    shadowColor: 'rgba(6, 95, 70, 0.15)',
  },
  purple: {
    gradientFrom: '#f3e8ff',
    gradientTo: '#e9d5ff',
    hoverFrom: '#e9d5ff',
    hoverTo: '#d8b4fe',
    textColor: '#6b21a8',
    shadowColor: 'rgba(107, 33, 168, 0.15)',
  },
  amber: {
    gradientFrom: '#fef3c7',
    gradientTo: '#fde68a',
    hoverFrom: '#fde68a',
    hoverTo: '#fcd34d',
    textColor: '#92400e',
    shadowColor: 'rgba(146, 64, 14, 0.15)',
  },
  rose: {
    gradientFrom: '#ffe4e6',
    gradientTo: '#fecdd3',
    hoverFrom: '#fecdd3',
    hoverTo: '#fda4af',
    textColor: '#881337',
    shadowColor: 'rgba(136, 19, 55, 0.15)',
  },
};

/**
 * 生成带3D效果的内联样式
 */
export function get3DStyle(theme: ColorTheme, isHover: boolean = false): string {
  const colors = colorThemes[theme];
  const gradientFrom = isHover ? colors.hoverFrom : colors.gradientFrom;
  const gradientTo = isHover ? colors.hoverTo : colors.gradientTo;
  
  return `
    background: linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%);
    box-shadow: 
      0 4px 6px -1px ${colors.shadowColor},
      0 2px 4px -1px ${colors.shadowColor},
      inset 0 -2px 4px rgba(0, 0, 0, 0.08),
      inset 0 2px 4px rgba(255, 255, 255, 0.8);
    color: ${colors.textColor};
  `.trim();
}

/**
 * 获取悬停过渡样式
 */
export function getHoverTransition(theme: ColorTheme): string {
  const colors = colorThemes[theme];
  return `
    --gradient-from: ${colors.gradientFrom};
    --gradient-to: ${colors.gradientTo};
    --hover-from: ${colors.hoverFrom};
    --hover-to: ${colors.hoverTo};
    --text-color: ${colors.textColor};
  `.trim();
}
