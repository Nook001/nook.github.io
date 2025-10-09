export interface EducationCardOptions {
  school: string;
  englishName: string;
  logoSrc: string;
  degree: string;
  duration: string;
  years: string[];
  gpa?: string;
  courses: string[];
  achievements: string[];
  primaryColor: string;
  isPrimary: boolean;
  logoFilter?: string; // 可选的logo颜色滤镜
}

export class EducationCard {
  private container: HTMLElement;
  private options: EducationCardOptions;

  constructor(containerId: string, options: EducationCardOptions) {
    const element = document.getElementById(containerId);
    if (!element) throw new Error(`Element with id ${containerId} not found`);
    
    this.container = element;
    this.options = options;
    this.render();
  }

  private render() {
    const { school, englishName, logoSrc, degree, duration, years, gpa, courses, achievements, primaryColor, isPrimary, logoFilter } = this.options;
    
    // Logo样式
    const logoStyle = logoFilter ? `style="filter: ${logoFilter};"` : '';
    
    this.container.innerHTML = `
      <div class="group relative">
        <!-- 主卡片 -->
        <div class="relative bg-white/80 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50"
             style="box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.8);">
          
          <!-- ${isPrimary ? '主学位标识' : '交换标识'} -->
          ${isPrimary ? `
            <div class="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              主修学位 🎓
            </div>
          ` : `
            <div class="absolute -top-4 -right-4 bg-gradient-to-br from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              交换项目 ✈️
            </div>
          `}
          
          <!-- 头部 -->
          <div class="flex items-center gap-6 mb-6 pb-6 border-b-2 border-gray-100">
            <div class="w-20 h-20 flex-shrink-0 relative group-hover:scale-110 transition-transform duration-300">
              <img src="${logoSrc}" alt="${school}" class="w-full h-full object-contain" ${logoStyle} />
            </div>
            <div class="flex-1">
              <h3 class="text-3xl font-bold mb-2" style="color: ${primaryColor};">${school}</h3>
              <p class="text-sm text-gray-500 font-medium mb-1">${englishName}</p>
              <p class="text-lg text-gray-700 font-medium">${degree}</p>
            </div>
          </div>

          <!-- 时间和GPA -->
          <div class="flex items-center justify-between mb-6 bg-gray-50 rounded-2xl p-4">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span class="font-semibold text-gray-700">${duration}</span>
            </div>
            ${gpa ? `
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <span class="font-semibold text-gray-700">GPA: ${gpa}</span>
              </div>
            ` : ''}
          </div>

          <!-- 学年标签 -->
          <div class="mb-6">
            <div class="flex flex-wrap gap-2">
              ${years.map(year => `
                <span class="px-4 py-2 rounded-full text-sm font-semibold" 
                      style="background: linear-gradient(135deg, ${primaryColor}15 0%, ${primaryColor}25 100%); color: ${primaryColor}; border: 1px solid ${primaryColor}40;">
                  ${year}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- 课程 -->
          <div class="mb-6">
            <h4 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              核心课程
            </h4>
            <div class="grid grid-cols-2 gap-2">
              ${courses.map(course => `
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <div class="w-1.5 h-1.5 rounded-full" style="background-color: ${primaryColor};"></div>
                  <span>${course}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 成就 -->
          <div>
            <h4 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                <path d="M4 22h16"/>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
              </svg>
              荣誉与成就
            </h4>
            <div class="space-y-2">
              ${achievements.map(achievement => `
                <div class="flex items-start gap-2 text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>${achievement}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
