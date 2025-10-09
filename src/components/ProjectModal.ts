import type { Project } from '../projects/ProjectsPage';

export class ProjectModal {
  private container: HTMLElement;
  private currentProject: Project | null = null;
  private currentImageIndex: number = 0;

  constructor(containerId: string) {
    const element = document.getElementById(containerId);
    if (!element) throw new Error(`Element with id ${containerId} not found`);
    
    this.container = element;
  }

  public open(project: Project) {
    this.currentProject = project;
    this.currentImageIndex = 0;
    this.render();
    
    // 添加打开动画
    setTimeout(() => {
      const modal = this.container.querySelector('.modal-content') as HTMLElement;
      const backdrop = this.container.querySelector('.modal-backdrop') as HTMLElement;
      if (modal && backdrop) {
        backdrop.style.opacity = '1';
        modal.style.opacity = '1';
        modal.style.transform = 'scale(1)';
      }
    }, 10);
    
    // 禁止背景滚动
    document.body.style.overflow = 'hidden';
  }

  public close() {
    const modal = this.container.querySelector('.modal-content') as HTMLElement;
    const backdrop = this.container.querySelector('.modal-backdrop') as HTMLElement;
    
    if (modal && backdrop) {
      backdrop.style.opacity = '0';
      modal.style.opacity = '0';
      modal.style.transform = 'scale(0.9)';
      
      setTimeout(() => {
        this.container.innerHTML = '';
        this.currentProject = null;
        document.body.style.overflow = '';
      }, 300);
    }
  }

  private render() {
    if (!this.currentProject) return;

    const { title, subtitle, fullDescription, images, techStack, timeline, role, achievements, challenges, links, primaryColor, stats } = this.currentProject;
    
    this.container.innerHTML = `
      <style>
        .modal-backdrop {
          transition: opacity 0.3s ease;
          opacity: 0;
        }
        
        .modal-content {
          transition: opacity 0.3s ease, transform 0.3s ease;
          opacity: 0;
          transform: scale(0.9);
          max-height: 90vh;
          overflow-y: auto;
        }
        
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }
        
        .modal-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        
        .modal-content::-webkit-scrollbar-thumb {
          background: ${primaryColor}60;
          border-radius: 4px;
        }
        
        .modal-content::-webkit-scrollbar-thumb:hover {
          background: ${primaryColor}80;
        }
        
        .image-carousel {
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
        }
        
        .image-carousel img {
          scroll-snap-align: center;
        }
      </style>
      
      <!-- 背景遮罩 -->
      <div class="modal-backdrop fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <!-- 模态框内容 -->
        <div class="modal-content relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl">
          <!-- 关闭按钮 -->
          <button class="close-btn absolute -top-4 -right-4 w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          
          <div class="p-8">
            <!-- 头部 -->
            <div class="mb-6">
              <h2 class="text-4xl font-bold mb-2" style="color: ${primaryColor};">${title}</h2>
              <p class="text-xl text-gray-600">${subtitle}</p>
            </div>
            
            <!-- 统计数据 -->
            ${stats && stats.length > 0 ? `
              <div class="grid grid-cols-${stats.length} gap-4 mb-6">
                ${stats.map(stat => `
                  <div class="text-center p-4 rounded-xl" style="background-color: ${primaryColor}10;">
                    <div class="text-3xl font-bold" style="color: ${primaryColor};">${stat.value}</div>
                    <div class="text-sm text-gray-600 mt-1">${stat.label}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
            
            <!-- 主要内容区域 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <!-- 左侧：图片轮播 -->
              <div class="space-y-4">
                <div class="relative rounded-2xl overflow-hidden bg-gray-100" style="aspect-ratio: 16/9;">
                  ${images.length > 0 ? `
                    <img id="current-image" src="${images[this.currentImageIndex]}" alt="${title}" class="w-full h-full object-cover" />
                    
                    <!-- 轮播控制按钮 -->
                    ${images.length > 1 ? `
                      <button class="prev-btn absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="15 18 9 12 15 6"/>
                        </svg>
                      </button>
                      <button class="next-btn absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="9 18 15 12 9 6"/>
                        </svg>
                      </button>
                    ` : ''}
                  ` : `
                    <div class="w-full h-full flex items-center justify-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                    </div>
                  `}
                </div>
                
                <!-- 图片指示器 -->
                ${images.length > 1 ? `
                  <div class="flex justify-center gap-2">
                    ${images.map((_, index) => `
                      <button class="indicator-dot w-2 h-2 rounded-full transition-all ${index === this.currentImageIndex ? 'w-8' : ''}" 
                              style="background-color: ${index === this.currentImageIndex ? primaryColor : '#d1d5db'};"
                              data-index="${index}"></button>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
              
              <!-- 右侧：详细信息 -->
              <div class="space-y-6">
                <!-- 项目描述 -->
                <div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    项目介绍
                  </h3>
                  <p class="text-gray-600 leading-relaxed">${fullDescription}</p>
                </div>
                
                <!-- 时间线和角色 -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="p-4 rounded-xl bg-gray-50">
                    <div class="text-sm text-gray-500 mb-1">项目时间</div>
                    <div class="font-semibold text-gray-800">${timeline}</div>
                  </div>
                  <div class="p-4 rounded-xl bg-gray-50">
                    <div class="text-sm text-gray-500 mb-1">项目角色</div>
                    <div class="font-semibold text-gray-800">${role}</div>
                  </div>
                </div>
                
                <!-- 链接按钮 -->
                <div class="flex gap-3">
                  ${links.github ? `
                    <a href="${links.github}" target="_blank" rel="noopener noreferrer" 
                       class="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
                       style="background: linear-gradient(135deg, #333 0%, #000 100%);">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  ` : ''}
                  ${links.demo ? `
                    <a href="${links.demo}" target="_blank" rel="noopener noreferrer"
                       class="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
                       style="background: linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%);">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      在线演示
                    </a>
                  ` : ''}
                  ${links.website ? `
                    <a href="${links.website}" target="_blank" rel="noopener noreferrer"
                       class="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
                       style="background: linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%);">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                      访问网站
                    </a>
                  ` : ''}
                </div>
              </div>
            </div>
            
            <!-- 技术栈 -->
            <div class="mb-6">
              <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
                技术栈
              </h3>
              <div class="flex flex-wrap gap-2">
                ${techStack.map(tech => `
                  <span class="px-4 py-2 text-sm font-semibold rounded-full"
                        style="background-color: ${primaryColor}15; color: ${primaryColor};">
                    ${tech}
                  </span>
                `).join('')}
              </div>
            </div>
            
            <!-- 成就 -->
            <div class="mb-6">
              <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                  <path d="M4 22h16"/>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                </svg>
                项目成就
              </h3>
              <div class="space-y-2">
                ${achievements.map(achievement => `
                  <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span class="text-gray-700">${achievement}</span>
                  </div>
                `).join('')}
              </div>
            </div>
            
            <!-- 挑战（可选） -->
            ${challenges && challenges.length > 0 ? `
              <div>
                <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                  技术挑战
                </h3>
                <div class="space-y-2">
                  ${challenges.map(challenge => `
                    <div class="flex items-start gap-3 p-3 rounded-xl bg-orange-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      <span class="text-gray-700">${challenge}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
    
    this.attachModalListeners();
  }

  private attachModalListeners() {
    // 关闭按钮
    const closeBtn = this.container.querySelector('.close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }
    
    // 点击背景关闭
    const backdrop = this.container.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          this.close();
        }
      });
    }
    
    // ESC键关闭
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        this.close();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);
    
    // 图片轮播
    if (this.currentProject && this.currentProject.images.length > 1) {
      const prevBtn = this.container.querySelector('.prev-btn');
      const nextBtn = this.container.querySelector('.next-btn');
      
      if (prevBtn) {
        prevBtn.addEventListener('click', () => this.previousImage());
      }
      
      if (nextBtn) {
        nextBtn.addEventListener('click', () => this.nextImage());
      }
      
      // 指示器点击
      const indicators = this.container.querySelectorAll('.indicator-dot');
      indicators.forEach(indicator => {
        indicator.addEventListener('click', (e) => {
          const index = parseInt((e.target as HTMLElement).dataset.index || '0');
          this.goToImage(index);
        });
      });
      
      // 键盘左右箭头
      const handleArrows = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
          this.previousImage();
        } else if (e.key === 'ArrowRight') {
          this.nextImage();
        }
      };
      document.addEventListener('keydown', handleArrows);
    }
  }

  private nextImage() {
    if (!this.currentProject) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.currentProject.images.length;
    this.updateImage();
  }

  private previousImage() {
    if (!this.currentProject) return;
    this.currentImageIndex = (this.currentImageIndex - 1 + this.currentProject.images.length) % this.currentProject.images.length;
    this.updateImage();
  }

  private goToImage(index: number) {
    this.currentImageIndex = index;
    this.updateImage();
  }

  private updateImage() {
    if (!this.currentProject) return;
    
    const img = this.container.querySelector('#current-image') as HTMLImageElement;
    if (img) {
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = this.currentProject!.images[this.currentImageIndex];
        img.style.opacity = '1';
      }, 150);
    }
    
    // 更新指示器
    const indicators = this.container.querySelectorAll('.indicator-dot');
    indicators.forEach((indicator, index) => {
      const dot = indicator as HTMLElement;
      if (index === this.currentImageIndex) {
        dot.style.backgroundColor = this.currentProject!.primaryColor;
        dot.classList.add('w-8');
      } else {
        dot.style.backgroundColor = '#d1d5db';
        dot.classList.remove('w-8');
      }
    });
  }
}
