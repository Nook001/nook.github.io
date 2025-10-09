import type { ColorTheme } from '../theme/colors';

export interface CapsuleOptions {
  logoSrc: string;
  text: string;
  alt: string;
  href?: string;
  theme?: ColorTheme; // 可选主题色
  customTextColor?: string; // 自定义文字颜色
  customLogoFilter?: string; // 自定义logo滤镜（用于改变SVG颜色）
}

export class Capsule {
  private container: HTMLElement;
  private options: CapsuleOptions;

  constructor(containerId: string, options: CapsuleOptions) {
    const element = document.getElementById(containerId);
    if (!element) throw new Error(`Element with id ${containerId} not found`);
    
    this.container = element;
    this.options = options;
    this.render();
  }

  private render() {
    // 使用更淡的米白色背景
    const bgGradientFrom = '#fffef0'; // 更淡的米白色
    const bgGradientTo = '#fffef5';   // 你指定的颜色
    const hoverFrom = '#fffef5';
    const hoverTo = '#f5f5d4';
    const shadowColor = 'rgba(0, 0, 0, 0.08)';
    
    // 文字颜色：优先使用自定义颜色，否则使用深灰色
    const textColor = this.options.customTextColor || '#374151';
    
    // Logo滤镜样式
    const logoStyle = this.options.customLogoFilter 
      ? `filter: ${this.options.customLogoFilter};` 
      : '';
    
    const content = `
      <div class="capsule-content relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl transition-all duration-300 group cursor-default"
           style="
             background: linear-gradient(135deg, ${bgGradientFrom} 0%, ${bgGradientTo} 100%);
             box-shadow: 
               0 4px 6px -1px ${shadowColor},
               0 2px 4px -1px ${shadowColor},
               inset 0 -2px 4px rgba(0, 0, 0, 0.08),
               inset 0 2px 4px rgba(255, 255, 255, 0.8);
               border: 1px solid #d4d4d4;
             height: 3.5rem;
           ">
        <!-- 3D高光效果 -->
        <div class="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-transparent pointer-events-none" style="height: 50%;"></div>
        
        <!-- 悬停渐变覆盖层 -->
        <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
             style="background: linear-gradient(135deg, ${hoverFrom} 0%, ${hoverTo} 100%);"></div>
        
        <!-- 校徽 -->
        <div class="w-7 h-7 flex items-center justify-center flex-shrink-0 relative z-10">
          <img 
            src="${this.options.logoSrc}" 
            alt="${this.options.alt}"
            class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            style="${logoStyle}"
          />
        </div>
        
        <!-- 校名 -->
        <span class="font-semibold text-sm whitespace-nowrap relative z-10" style="color: ${textColor};">
          ${this.options.text}
        </span>
      </div>
    `;

    if (this.options.href) {
      this.container.innerHTML = `
        <a href="${this.options.href}" target="_blank" rel="noopener noreferrer" class="inline-block">
          ${content}
        </a>
      `;
    } else {
      this.container.innerHTML = content;
    }
  }
}
