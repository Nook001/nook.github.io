import { ExperienceCard } from '../components/ExperienceCard';

export class ExperiencePage {
  private container: HTMLElement;

  constructor(containerId: string) {
    const element = document.getElementById(containerId);
    if (!element) throw new Error(`Element with id ${containerId} not found`);
    this.container = element;
    this.render();
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
            #06b6d4 0%,
            #3b82f6 25%,
            #8b5cf6 50%,
            #3b82f6 75%,
            #06b6d4 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        /* 时间轴动画 */
        @keyframes drawLine {
          from { height: 0; }
          to { height: 100%; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }

        .timeline-line {
          animation: drawLine 1.5s ease-out forwards;
        }

        .timeline-dot {
          animation: pulse 2s ease-in-out infinite;
        }

        /* 背景装饰 */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .float-slow {
          animation: float 8s ease-in-out infinite;
        }

        .float-medium {
          animation: float 6s ease-in-out infinite 1s;
        }
      </style>
      
      <div class="relative min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 py-20">
        <!-- 装饰背景 -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div class="absolute top-10 left-10 w-72 h-72 bg-cyan-300 rounded-full filter blur-3xl float-slow"></div>
          <div class="absolute top-40 right-20 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl float-medium"></div>
          <div class="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl float-slow"></div>
        </div>

        <div class="relative z-10 max-w-6xl mx-auto px-6">
          <!-- 标题 -->
          <div class="text-center mb-20">
            <h2 class="text-6xl font-bold title-shimmer mb-4">实习经历</h2>
            <p class="text-xl text-gray-600">Professional Experience</p>
            <div class="mt-6 flex items-center justify-center gap-2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span class="text-sm">时间轴展示</span>
            </div>
          </div>

          <!-- 时间轴容器 -->
          <div class="relative">
            <!-- 中央时间线 -->
            <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400 transform -translate-x-1/2 timeline-line"></div>

            <!-- 经历卡片 -->
            <div class="space-y-16">
              <div id="experience-1" class="timeline-item"></div>
              <div id="experience-2" class="timeline-item"></div>
              <div id="experience-3" class="timeline-item"></div>
            </div>
          </div>

          <!-- 底部装饰 -->
          <div class="mt-20 text-center">
            <div class="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <span class="text-gray-700 font-medium">持续成长中...</span>
            </div>
          </div>
        </div>
      </div>
    `;

    this.initComponents();
  }

  private initComponents() {
    // 示例实习经历 - 请替换为真实数据
    new ExperienceCard('experience-1', {
      company: '字节跳动',
      englishName: 'ByteDance',
      logoSrc: '/bytedance_logo.svg', // 需要添加logo
      position: '前端开发实习生',
      duration: '2024.06 - 2024.09',
      location: '北京',
      themeColor: '#00d4aa',
      side: 'left',
      responsibilities: [
        '参与抖音电商后台管理系统的开发，使用 React + TypeScript 构建复杂交互界面',
        '优化前端性能，通过代码分割和懒加载将首屏加载时间减少 40%',
        '开发可复用的组件库，提升团队开发效率 30%',
        '参与需求评审和技术方案设计，与后端团队紧密协作'
      ],
      achievements: [
        '独立完成 3 个核心功能模块的开发',
        '修复 20+ 线上 bug，提升系统稳定性',
        '获得团队"最佳实习生"称号'
      ],
      tags: ['React', 'TypeScript', 'Webpack', 'Git']
    });

    new ExperienceCard('experience-2', {
      company: '腾讯',
      englishName: 'Tencent',
      logoSrc: '/tencent_logo.svg',
      position: '后端开发实习生',
      duration: '2023.12 - 2024.03',
      location: '深圳',
      themeColor: '#0066cc',
      side: 'right',
      responsibilities: [
        '参与微信支付后台服务的开发和维护，使用 Go 语言编写高并发服务',
        '设计和实现 RESTful API，日均处理请求量 500万+',
        '优化数据库查询性能，将关键接口响应时间从 200ms 降至 50ms',
        '编写单元测试和集成测试，代码覆盖率达到 85%'
      ],
      achievements: [
        '成功上线 2 个新功能，服务千万级用户',
        '发现并修复潜在安全漏洞 3 个',
        '获得部门"优秀实习生"奖'
      ],
      tags: ['Go', 'MySQL', 'Redis', 'Docker']
    });

    new ExperienceCard('experience-3', {
      company: '阿里巴巴',
      englishName: 'Alibaba',
      logoSrc: '/alibaba_logo.svg',
      position: '算法实习生',
      duration: '2023.06 - 2023.09',
      location: '杭州',
      themeColor: '#ff6a00',
      side: 'left',
      responsibilities: [
        '参与淘宝推荐系统的算法优化，使用深度学习提升点击率',
        '实现多种推荐算法（协同过滤、深度 CTR 模型等）并进行 A/B 测试',
        '处理和分析海量用户行为数据，构建用户画像',
        '优化模型训练流程，将训练时间缩短 60%'
      ],
      achievements: [
        'CTR 提升 12%，GMV 增长 8%',
        '发表内部技术分享 2 次',
        '获得导师"五星好评"'
      ],
      tags: ['Python', 'TensorFlow', 'Spark', 'SQL']
    });
  }
}
