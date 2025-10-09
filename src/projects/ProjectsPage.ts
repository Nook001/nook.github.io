import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  images: string[];
  techStack: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'game';
  timeline: string;
  role: string;
  achievements: string[];
  challenges?: string[];
  links: {
    github?: string;
    demo?: string;
    website?: string;
  };
  primaryColor: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export class ProjectsPage {
  private container: HTMLElement;
  private projects: Project[];
  private currentFilter: string = 'all';
  private modal: ProjectModal | null = null;

  constructor(containerId: string) {
    const element = document.getElementById(containerId);
    if (!element) throw new Error(`Element with id ${containerId} not found`);
    this.container = element;
    this.projects = this.getProjects();
    this.render();
    this.initModal();
  }

  private getProjects(): Project[] {
    return [
      {
        id: 'project-1',
        title: '个人网站',
        subtitle: '现代化个人主页',
        description: '使用 TypeScript + Vite 构建的响应式个人网站，包含动画效果和交互设计',
        fullDescription: '这是一个完全从零开始设计和开发的个人网站项目。采用现代化的技术栈和设计理念，注重用户体验和视觉效果。网站包含首页、教育经历、项目展示等多个页面，使用了磨砂玻璃效果、3D按钮、打字机动画等多种视觉元素。',
        images: ['/screenshots/website-1.png', '/screenshots/website-2.png'],
        techStack: ['TypeScript', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'],
        category: 'frontend',
        timeline: '2024.10 - 至今',
        role: '独立开发',
        achievements: [
          '实现了流畅的页面切换动画',
          '设计了可复用的组件系统',
          '优化了移动端体验',
          '使用 TypeScript 确保代码质量'
        ],
        challenges: [
          '如何实现平滑的页面过渡效果',
          '响应式设计在不同设备上的适配',
          '性能优化和加载速度提升'
        ],
        links: {
          github: 'https://github.com/yourusername/portfolio',
          demo: 'https://yourwebsite.com'
        },
        primaryColor: '#667eea',
        stats: [
          { label: '页面数量', value: '5+' },
          { label: '组件数量', value: '10+' }
        ]
      },
      {
        id: 'project-2',
        title: '电商后端系统',
        subtitle: '高并发电商平台',
        description: '基于 Spring Boot 的电商后端系统，支持高并发订单处理和分布式事务',
        fullDescription: '这是一个完整的电商后端系统，实现了用户管理、商品管理、订单处理、支付集成等核心功能。系统采用微服务架构，使用 Redis 进行缓存优化，RabbitMQ 处理异步消息，实现了高可用和高性能。',
        images: ['/screenshots/ecommerce-1.png', '/screenshots/ecommerce-2.png', '/screenshots/ecommerce-3.png'],
        techStack: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'RabbitMQ', 'Docker'],
        category: 'backend',
        timeline: '2024.06 - 2024.09',
        role: '后端开发工程师',
        achievements: [
          '实现了每秒1000+订单的处理能力',
          '通过缓存优化将响应时间降低60%',
          '设计了可扩展的微服务架构',
          '实现了分布式事务一致性'
        ],
        challenges: [
          '高并发场景下的数据一致性',
          '分布式事务的处理',
          '缓存穿透和雪崩的防护'
        ],
        links: {
          github: 'https://github.com/yourusername/ecommerce-backend'
        },
        primaryColor: '#f59e0b',
        stats: [
          { label: 'QPS', value: '1000+' },
          { label: '响应时间', value: '<100ms' },
          { label: '可用性', value: '99.9%' }
        ]
      },
      {
        id: 'project-3',
        title: '任务管理系统',
        subtitle: '团队协作工具',
        description: '全栈任务管理系统，支持实时协作、甘特图、看板视图等功能',
        fullDescription: '这是一个面向团队的任务管理和协作平台。前端使用 React + TypeScript 构建，后端使用 Node.js + Express，通过 WebSocket 实现实时协作功能。系统支持多种视图模式，包括看板、列表、日历和甘特图，满足不同团队的需求。',
        images: ['/screenshots/task-1.png', '/screenshots/task-2.png'],
        techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
        category: 'fullstack',
        timeline: '2024.03 - 2024.05',
        role: '全栈开发',
        achievements: [
          '实现了实时多人协作功能',
          '支持拖拽操作和快捷键',
          '集成了通知和邮件系统',
          '实现了权限管理和团队空间'
        ],
        links: {
          github: 'https://github.com/yourusername/task-manager',
          demo: 'https://task-demo.com'
        },
        primaryColor: '#10b981',
        stats: [
          { label: '用户数', value: '100+' },
          { label: '任务数', value: '5000+' }
        ]
      },
      {
        id: 'project-4',
        title: '2D 平台跳跃游戏',
        subtitle: 'Unity 独立游戏',
        description: '使用 Unity 开发的 2D 平台跳跃游戏，包含关卡编辑器和物理系统',
        fullDescription: '这是一款像素风格的 2D 平台跳跃游戏，灵感来自经典的马里奥和蔚蓝。游戏包含精心设计的关卡、流畅的角色控制和有趣的机关。使用 Unity 引擎和 C# 开发，实现了自定义的物理系统和关卡编辑器。',
        images: ['/screenshots/game-1.png', '/screenshots/game-2.png', '/screenshots/game-3.png'],
        techStack: ['Unity', 'C#', 'Photoshop', 'Aseprite'],
        category: 'game',
        timeline: '2023.12 - 2024.02',
        role: '游戏开发/设计',
        achievements: [
          '设计了20+独特关卡',
          '实现了流畅的角色控制手感',
          '开发了可视化关卡编辑器',
          '获得学校游戏开发竞赛二等奖'
        ],
        challenges: [
          '角色物理系统的调优',
          '关卡难度曲线的设计',
          '性能优化和内存管理'
        ],
        links: {
          github: 'https://github.com/yourusername/platformer-game'
        },
        primaryColor: '#8b5cf6',
        stats: [
          { label: '关卡数', value: '20+' },
          { label: '游玩时长', value: '2-3h' }
        ]
      }
    ];
  }

  private render() {
    this.container.innerHTML = `
      <style>
        /* 标题渐变动画 */
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .title-shimmer {
          background: linear-gradient(
            90deg,
            #6366f1 0%,
            #8b5cf6 25%,
            #d946ef 50%,
            #8b5cf6 75%,
            #6366f1 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        
        /* 过滤器样式 */
        .filter-btn {
          transition: all 0.3s ease;
        }
        
        .filter-btn.active {
          transform: scale(1.05);
        }
      </style>
      
      <div class="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <!-- 装饰背景 -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div class="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl"></div>
          <div class="absolute bottom-20 right-20 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6">
          <!-- 标题 -->
          <div class="text-center mb-12">
            <h2 class="text-6xl font-bold title-shimmer mb-4">项目经验</h2>
            <p class="text-xl text-gray-600">Projects & Experience</p>
          </div>

          <!-- 分类过滤器 -->
          <div class="flex justify-center gap-4 mb-12 flex-wrap">
            <button class="filter-btn active px-6 py-3 rounded-full bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-xl font-semibold text-gray-700 border-2 border-purple-400" data-filter="all">
              全部项目
            </button>
            <button class="filter-btn px-6 py-3 rounded-full bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-xl font-semibold text-gray-700 border-2 border-transparent hover:border-blue-400" data-filter="frontend">
              🎨 前端
            </button>
            <button class="filter-btn px-6 py-3 rounded-full bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-xl font-semibold text-gray-700 border-2 border-transparent hover:border-orange-400" data-filter="backend">
              ⚙️ 后端
            </button>
            <button class="filter-btn px-6 py-3 rounded-full bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-xl font-semibold text-gray-700 border-2 border-transparent hover:border-green-400" data-filter="fullstack">
              💻 全栈
            </button>
            <button class="filter-btn px-6 py-3 rounded-full bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-xl font-semibold text-gray-700 border-2 border-transparent hover:border-purple-400" data-filter="game">
              🎮 游戏
            </button>
          </div>

          <!-- 项目网格 -->
          <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- 项目卡片将在这里渲染 -->
          </div>
        </div>
      </div>
      
      <!-- 模态框容器 -->
      <div id="project-modal"></div>
    `;

    this.renderProjects();
    this.attachFilterListeners();
  }

  private renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = '';
    
    const filteredProjects = this.currentFilter === 'all' 
      ? this.projects 
      : this.projects.filter(p => p.category === this.currentFilter);

    filteredProjects.forEach(project => {
      const cardContainer = document.createElement('div');
      cardContainer.id = `project-card-${project.id}`;
      grid.appendChild(cardContainer);
      
      new ProjectCard(cardContainer.id, project, (proj) => {
        this.openModal(proj);
      });
    });
  }

  private attachFilterListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const filter = target.dataset.filter || 'all';
        
        // 更新激活状态
        filterButtons.forEach(b => b.classList.remove('active', 'border-purple-400'));
        target.classList.add('active', 'border-purple-400');
        
        // 更新过滤器
        this.currentFilter = filter;
        this.renderProjects();
      });
    });
  }

  private initModal() {
    const modalContainer = document.getElementById('project-modal');
    if (modalContainer) {
      this.modal = new ProjectModal('project-modal', this.projects);
    }
  }

  private openModal(project: Project) {
    if (this.modal) {
      this.modal.open(project);
    }
  }
}
