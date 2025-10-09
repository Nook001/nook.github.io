import { EducationCard } from '../components/EducationCard';

export class EducationPage {
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
        
        /* 连接线动画 */
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .exchange-badge {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
        }
      </style>
      
      <div class="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <!-- 装饰背景 -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div class="absolute top-20 right-20 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl"></div>
          <div class="absolute bottom-20 left-20 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6">
          <!-- 标题 -->
          <div class="text-center mb-16">
            <h2 class="text-6xl font-bold title-shimmer mb-4">教育经历</h2>
            <p class="text-xl text-gray-600">Academic Journey</p>
          </div>

          <!-- 教育卡片容器 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div id="warwick-education"></div>
            <div id="hkust-education"></div>
          </div>
        </div>
      </div>
    `;

    this.initComponents();
  }

  private initComponents() {
    // 华威大学卡片
    new EducationCard('warwick-education', {
      school: '华威大学',
      englishName: 'University of Warwick',
      logoSrc: '/warwick_logo.svg',
      degree: '计算机科学学士',
      duration: '2023 - 2027',
      years: ['Year 1', 'Year 2', 'Year 4'],
      gpa: '一等荣誉 (预期)',
      courses: [
        '数据结构与算法',
        '操作系统',
        '线性规划',
        '软件工程',
        '函数式编程',
        '人工智能'
      ],
      achievements: [
        '院长名单 (Dean\'s List)',
        '优秀学生奖学金',
        '参与多个研究项目'
      ],
      primaryColor: '#8a7fe3',
      isPrimary: true,
      logoFilter: 'brightness(0) saturate(100%) invert(65%) sepia(36%) saturate(1087%) hue-rotate(204deg) brightness(95%) contrast(89%)'
    });

    // 香港科技大学卡片
    new EducationCard('hkust-education', {
      school: '香港科技大学',
      englishName: 'HKUST',
      logoSrc: '/hkust_logo.svg',
      degree: '计算机工程交换生',
      duration: '2024 - 2025',
      years: ['Year 3 (Exchange)'],
      gpa: '4.0/4.0',
      courses: [
        '分布式系统',
        '机器学习',
        '计算机图形学',
        '高级算法',
        '云计算',
        '移动应用开发'
      ],
      achievements: [
        '交换生优秀表现奖',
        '参与实验室研究',
        '国际学术交流'
      ],
      primaryColor: '#003974',
      isPrimary: false
    });
  }
}
