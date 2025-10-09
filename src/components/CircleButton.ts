import type { ColorTheme } from '../theme/colors';
import { colorThemes } from '../theme/colors';

export interface CircleButtonOptions {
  icon: string;
  tooltip: string;
  onClick: () => void;
  theme?: ColorTheme; // 可选主题色
}

export class CircleButton {
  private container: HTMLElement;
  private options: CircleButtonOptions;

  constructor(containerId: string, options: CircleButtonOptions) {
    const element = document.getElementById(containerId);
    if (!element) throw new Error(`Element with id ${containerId} not found`);
    
    this.container = element;
    this.options = options;
    this.render();
    this.attachEventListeners();
  }

  private render() {
    const theme = this.options.theme || 'slate';
    const colors = colorThemes[theme];
    
    this.container.innerHTML = `
      <button 
        class="circle-button group relative w-14 h-14 rounded-2xl transition-all duration-300 flex items-center justify-center active:scale-95"
        style="
          background: linear-gradient(135deg, ${colors.gradientFrom} 0%, ${colors.gradientTo} 100%);
          box-shadow: 
            0 4px 6px -1px ${colors.shadowColor},
            0 2px 4px -1px ${colors.shadowColor},
            inset 0 -2px 4px rgba(0, 0, 0, 0.08),
            inset 0 2px 4px rgba(255, 255, 255, 0.8);
            border: 1px solid #d4d4d4;
        "
        aria-label="${this.options.tooltip}"
      >
        <div class="transition-transform duration-300 group-hover:scale-110 relative z-10 text-gray-700">
          ${this.options.icon}
        </div>
        
        <!-- 3D高光效果 -->
        <div class="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-transparent pointer-events-none" style="height: 50%;"></div>
        
        <!-- 悬停渐变覆盖层 -->
        <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
             style="background: linear-gradient(135deg, ${colors.hoverFrom} 0%, ${colors.hoverTo} 100%);"></div>
        
        <!-- Tooltip -->
        <span class="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-20"
              style="background-color: ${colors.textColor};">
          ${this.options.tooltip}
          <span class="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent" style="border-top-color: ${colors.textColor};"></span>
        </span>
      </button>
    `;
  }

  private attachEventListeners() {
    const button = this.container.querySelector('.circle-button');
    if (button) {
      button.addEventListener('click', () => {
        this.options.onClick();
      });
    }
  }
}
