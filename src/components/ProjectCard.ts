import type { Project } from '../projects/ProjectsPage';

export class ProjectCard {
  private container: HTMLElement;
  private project: Project;
  private onClick: (project: Project) => void;

  constructor(containerId: string, project: Project, onClick: (project: Project) => void) {
    const element = document.getElementById(containerId);
    if (!element) throw new Error(`Element with id ${containerId} not found`);
    
    this.container = element;
    this.project = project;
    this.onClick = onClick;
    this.render();
  }

  private render() {
    const { title, subtitle, description, techStack, primaryColor, category } = this.project;
    
    const categoryIcons = {
      frontend: '🎨',
      backend: '⚙️',
      fullstack: '💻',
      game: '🎮'
    };
    
    this.container.innerHTML = `
      <div class="project-card group relative cursor-pointer">
        <div class="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 h-full flex flex-col"
             style="box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;">
          
          <!-- 分类标签 -->
          <div class="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg"
               style="background: linear-gradient(135deg, ${primaryColor}dd, ${primaryColor}ff);">
            ${categoryIcons[category]}
          </div>
          
          <!-- 悬浮效果边框 -->
          <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
               style="background: linear-gradient(135deg, ${primaryColor}20, ${primaryColor}10); border: 2px solid ${primaryColor}60;"></div>
          
          <!-- 内容 -->
          <div class="relative z-10 flex-1 flex flex-col">
            <!-- 标题 -->
            <h3 class="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300" 
                style="color: ${primaryColor};">
              ${title}
            </h3>
            
            <!-- 副标题 -->
            <p class="text-sm text-gray-500 font-medium mb-4">${subtitle}</p>
            
            <!-- 描述 -->
            <p class="text-gray-600 mb-6 flex-1 line-clamp-3">${description}</p>
            
            <!-- 技术栈标签 -->
            <div class="flex flex-wrap gap-2 mb-4">
              ${techStack.slice(0, 4).map(tech => `
                <span class="px-3 py-1 text-xs font-semibold rounded-full"
                      style="background-color: ${primaryColor}15; color: ${primaryColor};">
                  ${tech}
                </span>
              `).join('')}
              ${techStack.length > 4 ? `
                <span class="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600">
                  +${techStack.length - 4}
                </span>
              ` : ''}
            </div>
            
            <!-- 查看详情按钮 -->
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style="color: ${primaryColor};">
                点击查看详情 →
              </span>
              <div class="w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                   style="background-color: ${primaryColor}20;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // 添加点击事件
    const card = this.container.querySelector('.project-card');
    if (card) {
      card.addEventListener('click', () => {
        this.onClick(this.project);
      });
      
      // 悬浮效果
      card.addEventListener('mouseenter', () => {
        const cardElement = card.querySelector('div') as HTMLElement;
        if (cardElement) {
          cardElement.style.transform = 'translateY(-8px) scale(1.02)';
        }
      });
      
      card.addEventListener('mouseleave', () => {
        const cardElement = card.querySelector('div') as HTMLElement;
        if (cardElement) {
          cardElement.style.transform = 'translateY(0) scale(1)';
        }
      });
    }
  }
}
