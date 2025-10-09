import { CircleButton } from '../components/CircleButton';
import { Capsule } from '../components/Capsule';

export class HomePage {
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
        /* 光标闪烁动画 */
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        
        .cursor {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          background-color: currentColor;
          margin-left: 0.1em;
          animation: blink 1s infinite;
          vertical-align: text-bottom;
        }
        
        /* 磨砂玻璃卡片 - 银白渐变 */
        .glass-card {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.75) 0%,
            rgba(248, 250, 252, 0.7) 50%,
            rgba(241, 245, 249, 0.65) 100%
          );
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.1),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.8);
        }
        
        /* 高亮文字样式 */
        .highlight-name {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
          position: relative;
        }
        
        .highlight-school {
          color: #8a7fe3;
          font-weight: 500;
          text-decoration: underline;
          text-decoration-color: rgba(138, 127, 227, 0.3);
          text-decoration-thickness: 2px;
          text-underline-offset: 3px;
        }
        
        .highlight-school-secondary {
          color: #003974;
          font-weight: 500;
          text-decoration: underline;
          text-decoration-color: rgba(0, 57, 116, 0.3);
          text-decoration-thickness: 2px;
          text-underline-offset: 3px;
        }
        
        /* 背景装饰圆圈 */
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.1); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-25px, -35px) rotate(-120deg); }
          66% { transform: translate(35px, 25px) rotate(-240deg); }
        }
      </style>
      
      <div class="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        <!-- 增强背景 - 装饰元素 -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
          <!-- 彩色装饰圆圈 -->
          <div class="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40" style="animation: float1 20s ease-in-out infinite;"></div>
          <div class="absolute top-40 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40" style="animation: float2 25s ease-in-out infinite;"></div>
          <div class="absolute -bottom-32 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40" style="animation: float3 30s ease-in-out infinite;"></div>
          
          <!-- 技术栈图标装饰 -->
          <div class="absolute inset-0" style="opacity: 0.15;">
            <!-- Python -->
            <div class="absolute top-32 left-20 text-6xl" style="animation: float1 15s ease-in-out infinite;">🐍</div>
            <!-- Java -->
            <div class="absolute top-48 right-32 text-5xl" style="animation: float2 18s ease-in-out infinite;">☕</div>
            <!-- JavaScript -->
            <div class="absolute bottom-40 left-40 text-5xl" style="animation: float3 20s ease-in-out infinite;">⚡</div>
            <!-- React -->
            <div class="absolute top-64 left-64 text-5xl" style="animation: float1 22s ease-in-out infinite;">⚛️</div>
            <!-- Node.js -->
            <div class="absolute bottom-56 right-48 text-6xl" style="animation: float2 16s ease-in-out infinite;">🟢</div>
            <!-- Git -->
            <div class="absolute top-80 right-64 text-5xl" style="animation: float3 19s ease-in-out infinite;">🔧</div>
            <!-- Database -->
            <div class="absolute bottom-64 left-56 text-5xl" style="animation: float1 21s ease-in-out infinite;">🗄️</div>
            <!-- Docker -->
            <div class="absolute top-40 left-80 text-5xl" style="animation: float2 17s ease-in-out infinite;">🐳</div>
            <!-- Code -->
            <div class="absolute bottom-80 right-40 text-6xl" style="animation: float3 23s ease-in-out infinite;">💻</div>
            <!-- Terminal -->
            <div class="absolute top-56 right-56 text-5xl" style="animation: float1 24s ease-in-out infinite;">⌨️</div>
          </div>
        </div>

        <!-- 主要内容 -->
        <div class="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:px-8">
          <!-- 磨砂玻璃卡片 -->
          <div class="max-w-2xl glass-card rounded-3xl p-10">
            <!-- 简介 -->
            <div class="space-y-6">
              <h1 class="text-5xl font-light text-gray-900 leading-tight">
                你好，我是 <span class="font-normal">刘远志 Nook</span><span class="cursor"></span>
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed">
                <span class="inline-block">就读于华威大学计算机专业。</span><br>
                <span class="inline-block ml-8">香港科技大学计算机工程交换生，</span><br>
                <span class="inline-block ml-16">专注于后端开发并有全栈/游戏开发经验。</span>
              </p>
            </div>

            <!-- 联系方式和学校信息 - 统一排列带3D效果 -->
            <div class="mt-12">
              <div class="flex gap-4 flex-wrap items-center">
                <div id="phone-button"></div>
                <div id="email-button"></div>
                <div id="warwick-capsule"></div>
                <div id="hkust-capsule"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // 初始化组件
    this.initComponents();
  }

  private initComponents() {
    // 电话按钮 - 统一胶囊背景色
    new CircleButton('phone-button', {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
      tooltip: '复制电话',
      onClick: () => this.copyToClipboard('+86 18807472405', '电话号码已复制！'),
      theme: 'slate'
    });

    // 邮箱按钮 - 统一胶囊背景色
    new CircleButton('email-button', {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
      tooltip: '复制邮箱',
      onClick: () => this.copyToClipboard('nook_lyz@outlook.com', '邮箱地址已复制！'),
      theme: 'slate'
    });

    // Warwick 胶囊 - 淡紫色文字和logo
    new Capsule('warwick-capsule', {
      logoSrc: 'warwick_logo.svg',
      text: 'Warwick',
      alt: 'University of Warwick',
      customTextColor: '#8a7fe3', // 淡紫色
      customLogoFilter: 'brightness(0) saturate(100%) invert(65%) sepia(36%) saturate(1087%) hue-rotate(204deg) brightness(95%) contrast(89%)' // 将logo转为淡紫色 #8a7fe3
    });

    // HKUST 胶囊 - HKUST蓝色文字
    new Capsule('hkust-capsule', {
      logoSrc: 'hkust_logo.svg',
      text: 'HKUST',
      alt: 'Hong Kong University of Science and Technology',
      customTextColor: '#003974' // HKUST蓝色
    });
  }

  private async copyToClipboard(text: string, message: string) {
    try {
      await navigator.clipboard.writeText(text);
      this.showToast(message);
    } catch (err) {
      console.error('复制失败:', err);
      this.showToast('复制失败，请重试', 'error');
    }
  }

  private showToast(message: string, type: 'success' | 'error' = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-8 right-8 px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform translate-y-0 opacity-100 z-50 ${
      type === 'success' ? 'bg-gray-900 text-white' : 'bg-red-500 text-white'
    }`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }
}
