export interface ExperienceCardConfig {
  company: string;
  englishName: string;
  logoSrc: string;
  position: string;
  duration: string;
  location: string;
  themeColor: string;
  side: 'left' | 'right'; // 卡片在时间轴左侧还是右侧
  responsibilities: string[];
  achievements: string[];
  tags: string[];
}

export class ExperienceCard {
  private container: HTMLElement;
  private config: ExperienceCardConfig;

  constructor(containerId: string, config: ExperienceCardConfig) {
    const element = document.getElementById(containerId);
    if (!element) throw new Error(`Element with id ${containerId} not found`);
    this.container = element;
    this.config = config;
    this.render();
  }

  private render() {
    const { company, englishName, logoSrc, position, duration, location, themeColor, side, responsibilities, achievements, tags } = this.config;
    
    // 根据左右位置调整布局
    const isLeft = side === 'left';
    const cardPositionClass = isLeft ? 'pr-8 md:pr-16 text-right' : 'pl-8 md:pl-16 text-left';
    const contentAlignClass = isLeft ? 'items-end' : 'items-start';
    const flexDirectionClass = isLeft ? 'flex-row-reverse' : 'flex-row';
    
    this.container.innerHTML = `
      <style>
        /* 卡片进入动画 */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .card-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .card-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        /* 渐变边框效果 */
        .gradient-border {
          position: relative;
          background: white;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, ${themeColor}40, ${themeColor}80, ${themeColor}40);
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, ${themeColor}, ${themeColor}80, ${themeColor});
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .gradient-border:hover::before {
          opacity: 1;
        }

        /* 工作内容列表样式 */
        .responsibility-item {
          transition: all 0.3s ease;
        }

        .responsibility-item:hover {
          transform: translateX(${isLeft ? '-5px' : '5px'});
          color: ${themeColor};
        }

        /* 标签悬停效果 */
        .tag-item {
          transition: all 0.3s ease;
        }

        .tag-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px ${themeColor}40;
        }
      </style>

      <div class="relative flex ${flexDirectionClass} items-center gap-0">
        <!-- 时间轴节点 -->
        <div class="absolute left-1/2 transform -translate-x-1/2 z-10">
          <div class="relative">
            <!-- 外圈光晕 -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-white to-transparent blur-md opacity-60" style="width: 24px; height: 24px; margin: -4px;"></div>
            <!-- 主圆点 -->
            <div class="w-4 h-4 rounded-full border-4 border-white shadow-lg timeline-dot" style="background: linear-gradient(135deg, ${themeColor}, ${themeColor}cc);"></div>
          </div>
        </div>

        <!-- 卡片内容 -->
        <div class="w-full md:w-1/2 ${cardPositionClass} card-${side}">
          <div class="gradient-border">
            <div class="bg-white/90 backdrop-blur-sm rounded-[22px] p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <!-- 公司头部 -->
              <div class="flex ${flexDirectionClass} items-center gap-4 mb-6 pb-6 border-b-2" style="border-color: ${themeColor}20;">
                <div class="w-16 h-16 flex-shrink-0 bg-white rounded-2xl shadow-md p-3 hover:scale-110 transition-transform duration-300">
                  <img src="${logoSrc}" alt="${company}" class="w-full h-full object-contain">
                </div>
                <div class="flex-1 ${isLeft ? 'text-right' : 'text-left'}">
                  <h3 class="text-2xl md:text-3xl font-bold mb-1" style="color: ${themeColor};">${company}</h3>
                  <p class="text-sm text-gray-500 font-medium">${englishName}</p>
                </div>
              </div>

              <!-- 职位信息 -->
              <div class="mb-6 flex ${flexDirectionClass} ${isLeft ? 'justify-end' : 'justify-start'} gap-2 flex-wrap">
                <div class="px-4 py-2 rounded-full text-sm font-semibold shadow-md" style="background: linear-gradient(135deg, ${themeColor}15, ${themeColor}25); color: ${themeColor};">
                  ${position}
                </div>
              </div>

              <!-- 时间和地点 -->
              <div class="mb-6 flex ${flexDirectionClass} ${isLeft ? 'justify-end' : 'justify-start'} gap-4 text-sm text-gray-600">
                <div class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${themeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span class="font-medium">${duration}</span>
                </div>
                <div class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${themeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span class="font-medium">${location}</span>
                </div>
              </div>

              <!-- 工作内容 -->
              <div class="mb-6 flex flex-col ${contentAlignClass}">
                <h4 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2 ${flexDirectionClass}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${themeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <span>工作内容</span>
                </h4>
                <div class="space-y-2 ${isLeft ? 'text-right' : 'text-left'}">
                  ${responsibilities.map(item => `
                    <div class="responsibility-item flex items-start gap-2 text-sm text-gray-700 ${flexDirectionClass}">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${themeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-0.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>${item}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- 成就 -->
              <div class="mb-6 flex flex-col ${contentAlignClass}">
                <h4 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2 ${flexDirectionClass}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${themeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                  <span>主要成就</span>
                </h4>
                <div class="space-y-2 ${isLeft ? 'text-right' : 'text-left'}">
                  ${achievements.map(item => `
                    <div class="flex items-start gap-2 text-sm font-medium ${flexDirectionClass}" style="color: ${themeColor};">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-0.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <span>${item}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- 技术标签 -->
              <div class="flex ${flexDirectionClass} ${isLeft ? 'justify-end' : 'justify-start'} flex-wrap gap-2">
                ${tags.map(tag => `
                  <span class="tag-item px-3 py-1.5 text-xs font-semibold rounded-lg shadow-sm" style="background: linear-gradient(135deg, ${themeColor}10, ${themeColor}20); color: ${themeColor}; border: 1px solid ${themeColor}30;">
                    ${tag}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
