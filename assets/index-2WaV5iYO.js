(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e={slate:{gradientFrom:`#f1f5f9`,gradientTo:`#e2e8f0`,hoverFrom:`#e2e8f0`,hoverTo:`#cbd5e1`,textColor:`#475569`,shadowColor:`rgba(71, 85, 105, 0.15)`},blue:{gradientFrom:`#e0f2fe`,gradientTo:`#bae6fd`,hoverFrom:`#bae6fd`,hoverTo:`#7dd3fc`,textColor:`#0c4a6e`,shadowColor:`rgba(12, 74, 110, 0.15)`},green:{gradientFrom:`#d1fae5`,gradientTo:`#a7f3d0`,hoverFrom:`#a7f3d0`,hoverTo:`#6ee7b7`,textColor:`#065f46`,shadowColor:`rgba(6, 95, 70, 0.15)`},purple:{gradientFrom:`#f3e8ff`,gradientTo:`#e9d5ff`,hoverFrom:`#e9d5ff`,hoverTo:`#d8b4fe`,textColor:`#6b21a8`,shadowColor:`rgba(107, 33, 168, 0.15)`},amber:{gradientFrom:`#fef3c7`,gradientTo:`#fde68a`,hoverFrom:`#fde68a`,hoverTo:`#fcd34d`,textColor:`#92400e`,shadowColor:`rgba(146, 64, 14, 0.15)`},rose:{gradientFrom:`#ffe4e6`,gradientTo:`#fecdd3`,hoverFrom:`#fecdd3`,hoverTo:`#fda4af`,textColor:`#881337`,shadowColor:`rgba(136, 19, 55, 0.15)`}};var t=class{container;options;constructor(e,t){let n=document.getElementById(e);if(!n)throw Error(`Element with id ${e} not found`);this.container=n,this.options=t,this.render(),this.attachEventListeners()}render(){let t=this.options.theme||`slate`,n=e[t];this.container.innerHTML=`
      <button 
        class="circle-button group relative w-14 h-14 rounded-2xl transition-all duration-300 flex items-center justify-center active:scale-95"
        style="
          background: linear-gradient(135deg, ${n.gradientFrom} 0%, ${n.gradientTo} 100%);
          box-shadow: 
            0 4px 6px -1px ${n.shadowColor},
            0 2px 4px -1px ${n.shadowColor},
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
             style="background: linear-gradient(135deg, ${n.hoverFrom} 0%, ${n.hoverTo} 100%);"></div>
        
        <!-- Tooltip -->
        <span class="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-20"
              style="background-color: ${n.textColor};">
          ${this.options.tooltip}
          <span class="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent" style="border-top-color: ${n.textColor};"></span>
        </span>
      </button>
    `}attachEventListeners(){let e=this.container.querySelector(`.circle-button`);e&&e.addEventListener(`click`,()=>{this.options.onClick()})}},n=class{container;options;constructor(e,t){let n=document.getElementById(e);if(!n)throw Error(`Element with id ${e} not found`);this.container=n,this.options=t,this.render()}render(){let e=`rgba(0, 0, 0, 0.08)`,t=this.options.customTextColor||`#374151`,n=this.options.customLogoFilter?`filter: ${this.options.customLogoFilter};`:``,r=`
      <div class="capsule-content relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl transition-all duration-300 group cursor-default"
           style="
             background: linear-gradient(135deg, #fffef0 0%, #fffef5 100%);
             box-shadow: 
               0 4px 6px -1px ${e},
               0 2px 4px -1px ${e},
               inset 0 -2px 4px rgba(0, 0, 0, 0.08),
               inset 0 2px 4px rgba(255, 255, 255, 0.8);
               border: 1px solid #d4d4d4;
             height: 3.5rem;
           ">
        <!-- 3D高光效果 -->
        <div class="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-transparent pointer-events-none" style="height: 50%;"></div>
        
        <!-- 悬停渐变覆盖层 -->
        <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
             style="background: linear-gradient(135deg, #fffef5 0%, #f5f5d4 100%);"></div>
        
        <!-- 校徽 -->
        <div class="w-7 h-7 flex items-center justify-center flex-shrink-0 relative z-10">
          <img 
            src="${this.options.logoSrc}" 
            alt="${this.options.alt}"
            class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            style="${n}"
          />
        </div>
        
        <!-- 校名 -->
        <span class="font-semibold text-sm whitespace-nowrap relative z-10" style="color: ${t};">
          ${this.options.text}
        </span>
      </div>
    `;this.options.href?this.container.innerHTML=`
        <a href="${this.options.href}" target="_blank" rel="noopener noreferrer" class="inline-block">
          ${r}
        </a>
      `:this.container.innerHTML=r}},r=class{container;constructor(e){let t=document.getElementById(e);if(!t)throw Error(`Element with id ${e} not found`);this.container=t,this.render()}render(){this.container.innerHTML=`
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
    `,this.initComponents()}initComponents(){new t(`phone-button`,{icon:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,tooltip:`复制电话`,onClick:()=>this.copyToClipboard(`+86 18807472405`,`电话号码已复制！`),theme:`slate`}),new t(`email-button`,{icon:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,tooltip:`复制邮箱`,onClick:()=>this.copyToClipboard(`nook_lyz@outlook.com`,`邮箱地址已复制！`),theme:`slate`}),new n(`warwick-capsule`,{logoSrc:`public/warwick_logo.svg`,text:`Warwick`,alt:`University of Warwick`,customTextColor:`#8a7fe3`,customLogoFilter:`brightness(0) saturate(100%) invert(65%) sepia(36%) saturate(1087%) hue-rotate(204deg) brightness(95%) contrast(89%)`}),new n(`hkust-capsule`,{logoSrc:`public/hkust_logo.svg`,text:`HKUST`,alt:`Hong Kong University of Science and Technology`,customTextColor:`#003974`})}async copyToClipboard(e,t){try{await navigator.clipboard.writeText(e),this.showToast(t)}catch(e){console.error(`复制失败:`,e),this.showToast(`复制失败，请重试`,`error`)}}showToast(e,t=`success`){let n=document.createElement(`div`);n.className=`fixed bottom-8 right-8 px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform translate-y-0 opacity-100 z-50 ${t===`success`?`bg-gray-900 text-white`:`bg-red-500 text-white`}`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>{n.classList.add(`opacity-0`,`translate-y-2`),setTimeout(()=>n.remove(),300)},2e3)}},i=class{container;options;constructor(e,t){let n=document.getElementById(e);if(!n)throw Error(`Element with id ${e} not found`);this.container=n,this.options=t,this.render()}render(){let{school:e,englishName:t,logoSrc:n,degree:r,duration:i,years:a,gpa:o,courses:s,achievements:c,primaryColor:l,isPrimary:u,logoFilter:d}=this.options,f=d?`style="filter: ${d};"`:``;this.container.innerHTML=`
      <div class="group relative">
        <!-- 主卡片 -->
        <div class="relative bg-white/80 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50"
             style="box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.8);">
          
          <!-- ${u?`主学位标识`:`交换标识`} -->
          ${u?`
            <div class="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              主修学位 🎓
            </div>
          `:`
            <div class="absolute -top-4 -right-4 bg-gradient-to-br from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              交换项目 ✈️
            </div>
          `}
          
          <!-- 头部 -->
          <div class="flex items-center gap-6 mb-6 pb-6 border-b-2 border-gray-100">
            <div class="w-20 h-20 flex-shrink-0 relative group-hover:scale-110 transition-transform duration-300">
              <img src="${n}" alt="${e}" class="w-full h-full object-contain" ${f} />
            </div>
            <div class="flex-1">
              <h3 class="text-3xl font-bold mb-2" style="color: ${l};">${e}</h3>
              <p class="text-sm text-gray-500 font-medium mb-1">${t}</p>
              <p class="text-lg text-gray-700 font-medium">${r}</p>
            </div>
          </div>

          <!-- 时间和GPA -->
          <div class="flex items-center justify-between mb-6 bg-gray-50 rounded-2xl p-4">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${l}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span class="font-semibold text-gray-700">${i}</span>
            </div>
            ${o?`
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${l}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <span class="font-semibold text-gray-700">GPA: ${o}</span>
              </div>
            `:``}
          </div>

          <!-- 学年标签 -->
          <div class="mb-6">
            <div class="flex flex-wrap gap-2">
              ${a.map(e=>`
                <span class="px-4 py-2 rounded-full text-sm font-semibold" 
                      style="background: linear-gradient(135deg, ${l}15 0%, ${l}25 100%); color: ${l}; border: 1px solid ${l}40;">
                  ${e}
                </span>
              `).join(``)}
            </div>
          </div>

          <!-- 课程 -->
          <div class="mb-6">
            <h4 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${l}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              核心课程
            </h4>
            <div class="grid grid-cols-2 gap-2">
              ${s.map(e=>`
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <div class="w-1.5 h-1.5 rounded-full" style="background-color: ${l};"></div>
                  <span>${e}</span>
                </div>
              `).join(``)}
            </div>
          </div>

          <!-- 成就 -->
          <div>
            <h4 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${l}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
              ${c.map(e=>`
                <div class="flex items-start gap-2 text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${l}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>${e}</span>
                </div>
              `).join(``)}
            </div>
          </div>
        </div>
      </div>
    `}},a=class{container;constructor(e){let t=document.getElementById(e);if(!t)throw Error(`Element with id ${e} not found`);this.container=t,this.render()}render(){this.container.innerHTML=`
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
    `,this.initComponents()}initComponents(){new i(`warwick-education`,{school:`华威大学`,englishName:`University of Warwick`,logoSrc:`public/warwick_logo.svg`,degree:`计算机科学学士`,duration:`2023 - 2027`,years:[`Year 1`,`Year 2`,`Year 4`],gpa:`一等荣誉 (预期)`,courses:[`数据结构与算法`,`操作系统`,`线性规划`,`软件工程`,`函数式编程`,`人工智能`],achievements:[],primaryColor:`#8a7fe3`,isPrimary:!0,logoFilter:`brightness(0) saturate(100%) invert(65%) sepia(36%) saturate(1087%) hue-rotate(204deg) brightness(95%) contrast(89%)`}),new i(`hkust-education`,{school:`香港科技大学`,englishName:`HKUST`,logoSrc:`public/hkust_logo.svg`,degree:`计算机工程交换生`,duration:`2024 - 2025`,years:[`Year 3 (Exchange)`],gpa:`4.0/4.0`,courses:[`分布式系统`,`机器学习`,`计算机图形学`,`高级算法`,`云计算`,`移动应用开发`],achievements:[],primaryColor:`#003974`,isPrimary:!1})}},o=class{container;project;onClick;constructor(e,t,n){let r=document.getElementById(e);if(!r)throw Error(`Element with id ${e} not found`);this.container=r,this.project=t,this.onClick=n,this.render()}render(){let{title:e,subtitle:t,description:n,techStack:r,primaryColor:i,category:a}=this.project,o={frontend:`🎨`,backend:`⚙️`,fullstack:`💻`,game:`🎮`};this.container.innerHTML=`
      <div class="project-card group relative cursor-pointer">
        <div class="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 h-full flex flex-col"
             style="box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;">
          
          <!-- 分类标签 -->
          <div class="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg"
               style="background: linear-gradient(135deg, ${i}dd, ${i}ff);">
            ${o[a]}
          </div>
          
          <!-- 悬浮效果边框 -->
          <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
               style="background: linear-gradient(135deg, ${i}20, ${i}10); border: 2px solid ${i}60;"></div>
          
          <!-- 内容 -->
          <div class="relative z-10 flex-1 flex flex-col">
            <!-- 标题 -->
            <h3 class="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300" 
                style="color: ${i};">
              ${e}
            </h3>
            
            <!-- 副标题 -->
            <p class="text-sm text-gray-500 font-medium mb-4">${t}</p>
            
            <!-- 描述 -->
            <p class="text-gray-600 mb-6 flex-1 line-clamp-3">${n}</p>
            
            <!-- 技术栈标签 -->
            <div class="flex flex-wrap gap-2 mb-4">
              ${r.slice(0,4).map(e=>`
                <span class="px-3 py-1 text-xs font-semibold rounded-full"
                      style="background-color: ${i}15; color: ${i};">
                  ${e}
                </span>
              `).join(``)}
              ${r.length>4?`
                <span class="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600">
                  +${r.length-4}
                </span>
              `:``}
            </div>
            
            <!-- 查看详情按钮 -->
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style="color: ${i};">
                点击查看详情 →
              </span>
              <div class="w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                   style="background-color: ${i}20;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${i}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;let s=this.container.querySelector(`.project-card`);s&&(s.addEventListener(`click`,()=>{this.onClick(this.project)}),s.addEventListener(`mouseenter`,()=>{let e=s.querySelector(`div`);e&&(e.style.transform=`translateY(-8px) scale(1.02)`)}),s.addEventListener(`mouseleave`,()=>{let e=s.querySelector(`div`);e&&(e.style.transform=`translateY(0) scale(1)`)}))}},s=class{container;currentProject=null;currentImageIndex=0;constructor(e){let t=document.getElementById(e);if(!t)throw Error(`Element with id ${e} not found`);this.container=t}open(e){this.currentProject=e,this.currentImageIndex=0,this.render(),setTimeout(()=>{let e=this.container.querySelector(`.modal-content`),t=this.container.querySelector(`.modal-backdrop`);e&&t&&(t.style.opacity=`1`,e.style.opacity=`1`,e.style.transform=`scale(1)`)},10),document.body.style.overflow=`hidden`}close(){let e=this.container.querySelector(`.modal-content`),t=this.container.querySelector(`.modal-backdrop`);e&&t&&(t.style.opacity=`0`,e.style.opacity=`0`,e.style.transform=`scale(0.9)`,setTimeout(()=>{this.container.innerHTML=``,this.currentProject=null,document.body.style.overflow=``},300))}render(){if(!this.currentProject)return;let{title:e,subtitle:t,fullDescription:n,images:r,techStack:i,timeline:a,role:o,achievements:s,challenges:c,links:l,primaryColor:u,stats:d}=this.currentProject;this.container.innerHTML=`
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
          background: ${u}60;
          border-radius: 4px;
        }
        
        .modal-content::-webkit-scrollbar-thumb:hover {
          background: ${u}80;
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
              <h2 class="text-4xl font-bold mb-2" style="color: ${u};">${e}</h2>
              <p class="text-xl text-gray-600">${t}</p>
            </div>
            
            <!-- 统计数据 -->
            ${d&&d.length>0?`
              <div class="grid grid-cols-${d.length} gap-4 mb-6">
                ${d.map(e=>`
                  <div class="text-center p-4 rounded-xl" style="background-color: ${u}10;">
                    <div class="text-3xl font-bold" style="color: ${u};">${e.value}</div>
                    <div class="text-sm text-gray-600 mt-1">${e.label}</div>
                  </div>
                `).join(``)}
              </div>
            `:``}
            
            <!-- 主要内容区域 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <!-- 左侧：图片轮播 -->
              <div class="space-y-4">
                <div class="relative rounded-2xl overflow-hidden bg-gray-100" style="aspect-ratio: 16/9;">
                  ${r.length>0?`
                    <img id="current-image" src="${r[this.currentImageIndex]}" alt="${e}" class="w-full h-full object-cover" />
                    
                    <!-- 轮播控制按钮 -->
                    ${r.length>1?`
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
                    `:``}
                  `:`
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
                ${r.length>1?`
                  <div class="flex justify-center gap-2">
                    ${r.map((e,t)=>`
                      <button class="indicator-dot w-2 h-2 rounded-full transition-all ${t===this.currentImageIndex?`w-8`:``}" 
                              style="background-color: ${t===this.currentImageIndex?u:`#d1d5db`};"
                              data-index="${t}"></button>
                    `).join(``)}
                  </div>
                `:``}
              </div>
              
              <!-- 右侧：详细信息 -->
              <div class="space-y-6">
                <!-- 项目描述 -->
                <div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${u}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    项目介绍
                  </h3>
                  <p class="text-gray-600 leading-relaxed">${n}</p>
                </div>
                
                <!-- 时间线和角色 -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="p-4 rounded-xl bg-gray-50">
                    <div class="text-sm text-gray-500 mb-1">项目时间</div>
                    <div class="font-semibold text-gray-800">${a}</div>
                  </div>
                  <div class="p-4 rounded-xl bg-gray-50">
                    <div class="text-sm text-gray-500 mb-1">项目角色</div>
                    <div class="font-semibold text-gray-800">${o}</div>
                  </div>
                </div>
                
                <!-- 链接按钮 -->
                <div class="flex gap-3">
                  ${l.github?`
                    <a href="${l.github}" target="_blank" rel="noopener noreferrer" 
                       class="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
                       style="background: linear-gradient(135deg, #333 0%, #000 100%);">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  `:``}
                  ${l.demo?`
                    <a href="${l.demo}" target="_blank" rel="noopener noreferrer"
                       class="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
                       style="background: linear-gradient(135deg, ${u} 0%, ${u}dd 100%);">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      在线演示
                    </a>
                  `:``}
                  ${l.website?`
                    <a href="${l.website}" target="_blank" rel="noopener noreferrer"
                       class="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
                       style="background: linear-gradient(135deg, ${u} 0%, ${u}dd 100%);">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                      访问网站
                    </a>
                  `:``}
                </div>
              </div>
            </div>
            
            <!-- 技术栈 -->
            <div class="mb-6">
              <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${u}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
                技术栈
              </h3>
              <div class="flex flex-wrap gap-2">
                ${i.map(e=>`
                  <span class="px-4 py-2 text-sm font-semibold rounded-full"
                        style="background-color: ${u}15; color: ${u};">
                    ${e}
                  </span>
                `).join(``)}
              </div>
            </div>
            
            <!-- 成就 -->
            <div class="mb-6">
              <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${u}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                ${s.map(e=>`
                  <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${u}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span class="text-gray-700">${e}</span>
                  </div>
                `).join(``)}
              </div>
            </div>
            
            <!-- 挑战（可选） -->
            ${c&&c.length>0?`
              <div>
                <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${u}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                  技术挑战
                </h3>
                <div class="space-y-2">
                  ${c.map(e=>`
                    <div class="flex items-start gap-3 p-3 rounded-xl bg-orange-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      <span class="text-gray-700">${e}</span>
                    </div>
                  `).join(``)}
                </div>
              </div>
            `:``}
          </div>
        </div>
      </div>
    `,this.attachModalListeners()}attachModalListeners(){let e=this.container.querySelector(`.close-btn`);e&&e.addEventListener(`click`,()=>this.close());let t=this.container.querySelector(`.modal-backdrop`);t&&t.addEventListener(`click`,e=>{e.target===t&&this.close()});let n=e=>{e.key===`Escape`&&(this.close(),document.removeEventListener(`keydown`,n))};if(document.addEventListener(`keydown`,n),this.currentProject&&this.currentProject.images.length>1){let e=this.container.querySelector(`.prev-btn`),t=this.container.querySelector(`.next-btn`);e&&e.addEventListener(`click`,()=>this.previousImage()),t&&t.addEventListener(`click`,()=>this.nextImage()),this.container.querySelectorAll(`.indicator-dot`).forEach(e=>{e.addEventListener(`click`,e=>{let t=parseInt(e.target.dataset.index||`0`);this.goToImage(t)})}),document.addEventListener(`keydown`,e=>{e.key===`ArrowLeft`?this.previousImage():e.key===`ArrowRight`&&this.nextImage()})}}nextImage(){this.currentProject&&(this.currentImageIndex=(this.currentImageIndex+1)%this.currentProject.images.length,this.updateImage())}previousImage(){this.currentProject&&(this.currentImageIndex=(this.currentImageIndex-1+this.currentProject.images.length)%this.currentProject.images.length,this.updateImage())}goToImage(e){this.currentImageIndex=e,this.updateImage()}updateImage(){if(!this.currentProject)return;let e=this.container.querySelector(`#current-image`);e&&(e.style.opacity=`0`,setTimeout(()=>{e.src=this.currentProject.images[this.currentImageIndex],e.style.opacity=`1`},150)),this.container.querySelectorAll(`.indicator-dot`).forEach((e,t)=>{let n=e;t===this.currentImageIndex?(n.style.backgroundColor=this.currentProject.primaryColor,n.classList.add(`w-8`)):(n.style.backgroundColor=`#d1d5db`,n.classList.remove(`w-8`))})}},c=class{container;projects;currentFilter=`all`;modal=null;constructor(e){let t=document.getElementById(e);if(!t)throw Error(`Element with id ${e} not found`);this.container=t,this.projects=this.getProjects(),this.render(),this.initModal()}getProjects(){return[{id:`project-1`,title:`个人网站`,subtitle:`现代化个人主页`,description:`使用 TypeScript + Vite 构建的响应式个人网站，包含动画效果和交互设计`,fullDescription:`这是一个完全从零开始设计和开发的个人网站项目。采用现代化的技术栈和设计理念，注重用户体验和视觉效果。网站包含首页、教育经历、项目展示等多个页面，使用了磨砂玻璃效果、3D按钮、打字机动画等多种视觉元素。`,images:[`/screenshots/website-1.png`,`/screenshots/website-2.png`],techStack:[`TypeScript`,`Vite`,`Tailwind CSS`,`HTML5`,`CSS3`],category:`frontend`,timeline:`2024.10 - 至今`,role:`独立开发`,achievements:[`实现了流畅的页面切换动画`,`设计了可复用的组件系统`,`优化了移动端体验`,`使用 TypeScript 确保代码质量`],challenges:[`如何实现平滑的页面过渡效果`,`响应式设计在不同设备上的适配`,`性能优化和加载速度提升`],links:{github:`https://github.com/yourusername/portfolio`,demo:`https://yourwebsite.com`},primaryColor:`#667eea`,stats:[{label:`页面数量`,value:`5+`},{label:`组件数量`,value:`10+`}]},{id:`project-2`,title:`电商后端系统`,subtitle:`高并发电商平台`,description:`基于 Spring Boot 的电商后端系统，支持高并发订单处理和分布式事务`,fullDescription:`这是一个完整的电商后端系统，实现了用户管理、商品管理、订单处理、支付集成等核心功能。系统采用微服务架构，使用 Redis 进行缓存优化，RabbitMQ 处理异步消息，实现了高可用和高性能。`,images:[`/screenshots/ecommerce-1.png`,`/screenshots/ecommerce-2.png`,`/screenshots/ecommerce-3.png`],techStack:[`Java`,`Spring Boot`,`MySQL`,`Redis`,`RabbitMQ`,`Docker`],category:`backend`,timeline:`2024.06 - 2024.09`,role:`后端开发工程师`,achievements:[`实现了每秒1000+订单的处理能力`,`通过缓存优化将响应时间降低60%`,`设计了可扩展的微服务架构`,`实现了分布式事务一致性`],challenges:[`高并发场景下的数据一致性`,`分布式事务的处理`,`缓存穿透和雪崩的防护`],links:{github:`https://github.com/yourusername/ecommerce-backend`},primaryColor:`#f59e0b`,stats:[{label:`QPS`,value:`1000+`},{label:`响应时间`,value:`<100ms`},{label:`可用性`,value:`99.9%`}]},{id:`project-3`,title:`任务管理系统`,subtitle:`团队协作工具`,description:`全栈任务管理系统，支持实时协作、甘特图、看板视图等功能`,fullDescription:`这是一个面向团队的任务管理和协作平台。前端使用 React + TypeScript 构建，后端使用 Node.js + Express，通过 WebSocket 实现实时协作功能。系统支持多种视图模式，包括看板、列表、日历和甘特图，满足不同团队的需求。`,images:[`/screenshots/task-1.png`,`/screenshots/task-2.png`],techStack:[`React`,`TypeScript`,`Node.js`,`Express`,`MongoDB`,`Socket.io`],category:`fullstack`,timeline:`2024.03 - 2024.05`,role:`全栈开发`,achievements:[`实现了实时多人协作功能`,`支持拖拽操作和快捷键`,`集成了通知和邮件系统`,`实现了权限管理和团队空间`],links:{github:`https://github.com/yourusername/task-manager`,demo:`https://task-demo.com`},primaryColor:`#10b981`,stats:[{label:`用户数`,value:`100+`},{label:`任务数`,value:`5000+`}]},{id:`project-4`,title:`2D 平台跳跃游戏`,subtitle:`Unity 独立游戏`,description:`使用 Unity 开发的 2D 平台跳跃游戏，包含关卡编辑器和物理系统`,fullDescription:`这是一款像素风格的 2D 平台跳跃游戏，灵感来自经典的马里奥和蔚蓝。游戏包含精心设计的关卡、流畅的角色控制和有趣的机关。使用 Unity 引擎和 C# 开发，实现了自定义的物理系统和关卡编辑器。`,images:[`/screenshots/game-1.png`,`/screenshots/game-2.png`,`/screenshots/game-3.png`],techStack:[`Unity`,`C#`,`Photoshop`,`Aseprite`],category:`game`,timeline:`2023.12 - 2024.02`,role:`游戏开发/设计`,achievements:[`设计了20+独特关卡`,`实现了流畅的角色控制手感`,`开发了可视化关卡编辑器`,`获得学校游戏开发竞赛二等奖`],challenges:[`角色物理系统的调优`,`关卡难度曲线的设计`,`性能优化和内存管理`],links:{github:`https://github.com/yourusername/platformer-game`},primaryColor:`#8b5cf6`,stats:[{label:`关卡数`,value:`20+`},{label:`游玩时长`,value:`2-3h`}]}]}render(){this.container.innerHTML=`
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
    `,this.renderProjects(),this.attachFilterListeners()}renderProjects(){let e=document.getElementById(`projects-grid`);e&&(e.innerHTML=``,(this.currentFilter===`all`?this.projects:this.projects.filter(e=>e.category===this.currentFilter)).forEach(t=>{let n=document.createElement(`div`);n.id=`project-card-${t.id}`,e.appendChild(n),new o(n.id,t,e=>{this.openModal(e)})}))}attachFilterListeners(){let e=document.querySelectorAll(`.filter-btn`);e.forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget,r=n.dataset.filter||`all`;e.forEach(e=>e.classList.remove(`active`,`border-purple-400`)),n.classList.add(`active`,`border-purple-400`),this.currentFilter=r,this.renderProjects()})})}initModal(){document.getElementById(`project-modal`)&&(this.modal=new s(`project-modal`))}openModal(e){this.modal&&this.modal.open(e)}},l=class{container;config;constructor(e,t){let n=document.getElementById(e);if(!n)throw Error(`Element with id ${e} not found`);this.container=n,this.config=t,this.render()}render(){let{company:e,englishName:t,logoSrc:n,position:r,duration:i,location:a,themeColor:o,side:s,responsibilities:c,achievements:l,tags:u}=this.config,d=s===`left`,f=d?`pr-8 md:pr-16 text-right`:`pl-8 md:pl-16 text-left`,p=d?`items-end`:`items-start`,m=d?`flex-row-reverse`:`flex-row`;this.container.innerHTML=`
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
          background: linear-gradient(135deg, ${o}40, ${o}80, ${o}40);
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, ${o}, ${o}80, ${o});
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
          transform: translateX(${d?`-5px`:`5px`});
          color: ${o};
        }

        /* 标签悬停效果 */
        .tag-item {
          transition: all 0.3s ease;
        }

        .tag-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px ${o}40;
        }
      </style>

      <div class="relative flex ${m} items-center gap-0">
        <!-- 时间轴节点 -->
        <div class="absolute left-1/2 transform -translate-x-1/2 z-10">
          <div class="relative">
            <!-- 外圈光晕 -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-white to-transparent blur-md opacity-60" style="width: 24px; height: 24px; margin: -4px;"></div>
            <!-- 主圆点 -->
            <div class="w-4 h-4 rounded-full border-4 border-white shadow-lg timeline-dot" style="background: linear-gradient(135deg, ${o}, ${o}cc);"></div>
          </div>
        </div>

        <!-- 卡片内容 -->
        <div class="w-full md:w-1/2 ${f} card-${s}">
          <div class="gradient-border">
            <div class="bg-white/90 backdrop-blur-sm rounded-[22px] p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <!-- 公司头部 -->
              <div class="flex ${m} items-center gap-4 mb-6 pb-6 border-b-2" style="border-color: ${o}20;">
                <div class="w-16 h-16 flex-shrink-0 bg-white rounded-2xl shadow-md p-3 hover:scale-110 transition-transform duration-300">
                  <img src="${n}" alt="${e}" class="w-full h-full object-contain">
                </div>
                <div class="flex-1 ${d?`text-right`:`text-left`}">
                  <h3 class="text-2xl md:text-3xl font-bold mb-1" style="color: ${o};">${e}</h3>
                  <p class="text-sm text-gray-500 font-medium">${t}</p>
                </div>
              </div>

              <!-- 职位信息 -->
              <div class="mb-6 flex ${m} ${d?`justify-end`:`justify-start`} gap-2 flex-wrap">
                <div class="px-4 py-2 rounded-full text-sm font-semibold shadow-md" style="background: linear-gradient(135deg, ${o}15, ${o}25); color: ${o};">
                  ${r}
                </div>
              </div>

              <!-- 时间和地点 -->
              <div class="mb-6 flex ${m} ${d?`justify-end`:`justify-start`} gap-4 text-sm text-gray-600">
                <div class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${o}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span class="font-medium">${i}</span>
                </div>
                <div class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${o}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span class="font-medium">${a}</span>
                </div>
              </div>

              <!-- 工作内容 -->
              <div class="mb-6 flex flex-col ${p}">
                <h4 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2 ${m}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${o}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <span>工作内容</span>
                </h4>
                <div class="space-y-2 ${d?`text-right`:`text-left`}">
                  ${c.map(e=>`
                    <div class="responsibility-item flex items-start gap-2 text-sm text-gray-700 ${m}">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${o}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-0.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>${e}</span>
                    </div>
                  `).join(``)}
                </div>
              </div>

              <!-- 成就 -->
              <div class="mb-6 flex flex-col ${p}">
                <h4 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2 ${m}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${o}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                  <span>主要成就</span>
                </h4>
                <div class="space-y-2 ${d?`text-right`:`text-left`}">
                  ${l.map(e=>`
                    <div class="flex items-start gap-2 text-sm font-medium ${m}" style="color: ${o};">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-0.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <span>${e}</span>
                    </div>
                  `).join(``)}
                </div>
              </div>

              <!-- 技术标签 -->
              <div class="flex ${m} ${d?`justify-end`:`justify-start`} flex-wrap gap-2">
                ${u.map(e=>`
                  <span class="tag-item px-3 py-1.5 text-xs font-semibold rounded-lg shadow-sm" style="background: linear-gradient(135deg, ${o}10, ${o}20); color: ${o}; border: 1px solid ${o}30;">
                    ${e}
                  </span>
                `).join(``)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}},u=class{container;constructor(e){let t=document.getElementById(e);if(!t)throw Error(`Element with id ${e} not found`);this.container=t,this.render()}render(){this.container.innerHTML=`
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
    `,this.initComponents()}initComponents(){new l(`experience-1`,{company:`字节跳动`,englishName:`ByteDance`,logoSrc:`/bytedance_logo.svg`,position:`前端开发实习生`,duration:`2024.06 - 2024.09`,location:`北京`,themeColor:`#00d4aa`,side:`left`,responsibilities:[`参与抖音电商后台管理系统的开发，使用 React + TypeScript 构建复杂交互界面`,`优化前端性能，通过代码分割和懒加载将首屏加载时间减少 40%`,`开发可复用的组件库，提升团队开发效率 30%`,`参与需求评审和技术方案设计，与后端团队紧密协作`],achievements:[`独立完成 3 个核心功能模块的开发`,`修复 20+ 线上 bug，提升系统稳定性`,`获得团队"最佳实习生"称号`],tags:[`React`,`TypeScript`,`Webpack`,`Git`]}),new l(`experience-2`,{company:`腾讯`,englishName:`Tencent`,logoSrc:`/tencent_logo.svg`,position:`后端开发实习生`,duration:`2023.12 - 2024.03`,location:`深圳`,themeColor:`#0066cc`,side:`right`,responsibilities:[`参与微信支付后台服务的开发和维护，使用 Go 语言编写高并发服务`,`设计和实现 RESTful API，日均处理请求量 500万+`,`优化数据库查询性能，将关键接口响应时间从 200ms 降至 50ms`,`编写单元测试和集成测试，代码覆盖率达到 85%`],achievements:[`成功上线 2 个新功能，服务千万级用户`,`发现并修复潜在安全漏洞 3 个`,`获得部门"优秀实习生"奖`],tags:[`Go`,`MySQL`,`Redis`,`Docker`]}),new l(`experience-3`,{company:`阿里巴巴`,englishName:`Alibaba`,logoSrc:`/alibaba_logo.svg`,position:`算法实习生`,duration:`2023.06 - 2023.09`,location:`杭州`,themeColor:`#ff6a00`,side:`left`,responsibilities:[`参与淘宝推荐系统的算法优化，使用深度学习提升点击率`,`实现多种推荐算法（协同过滤、深度 CTR 模型等）并进行 A/B 测试`,`处理和分析海量用户行为数据，构建用户画像`,`优化模型训练流程，将训练时间缩短 60%`],achievements:[`CTR 提升 12%，GMV 增长 8%`,`发表内部技术分享 2 次`,`获得导师"五星好评"`],tags:[`Python`,`TensorFlow`,`Spark`,`SQL`]})}},d=document.getElementById(`app`);d.innerHTML=`
  <style>
    /* 页面容器布局 */
    html, body {
      overflow: hidden;
      height: 100vh;
      width: 100vw;
    }
    
    #app {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }
    
    /* 页面过渡动画 */
    .page-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      overflow-y: auto;
      overflow-x: hidden;
      transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                  transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .page-container.page-hidden {
      opacity: 0;
      transform: translateY(50px);
      pointer-events: none;
    }
    
    .page-container.page-visible {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
    
    .page-container.page-exit {
      opacity: 0;
      transform: translateY(-50px);
      pointer-events: none;
    }
  </style>
  <div id="home-page" class="page-container page-visible"></div>
  <div id="education-page" class="page-container page-hidden"></div>
  <div id="projects-page" class="page-container page-hidden"></div>
  <div id="experience-page" class="page-container page-hidden"></div>
`,new r(`home-page`),new a(`education-page`),new c(`projects-page`),new u(`experience-page`);var f=0,p=!1,m=!1,h=0;window.addEventListener(`wheel`,e=>{if(p||m){e.preventDefault();return}let t=Date.now(),n=document.getElementById(`home-page`),r=document.getElementById(`education-page`),i=document.getElementById(`projects-page`),a=document.getElementById(`experience-page`),o;o=f===0?n:f===1?r:f===2?i:a;let s=o.scrollTop,c=o.scrollHeight,l=o.clientHeight,u=s===0,d=Math.abs(c-l-s)<5;if(t-h<800)return;e.deltaY>0&&f===0&&d?(e.preventDefault(),g(0,1,n,r)):e.deltaY>0&&f===1&&d?(e.preventDefault(),g(1,2,r,i)):e.deltaY>0&&f===2&&d?(e.preventDefault(),g(2,3,i,a)):e.deltaY<0&&f===1&&u?(e.preventDefault(),g(1,0,r,n)):e.deltaY<0&&f===2&&u?(e.preventDefault(),g(2,1,i,r)):e.deltaY<0&&f===3&&u&&(e.preventDefault(),g(3,2,a,i));function g(e,n,r,i){p=!0,f=n,h=t,i.scrollTop=0,r.classList.remove(`page-visible`),r.classList.add(n>e?`page-exit`:`page-hidden`),i.classList.remove(n>e?`page-hidden`:`page-exit`),i.classList.add(`page-visible`),m=!0,setTimeout(()=>{p=!1,setTimeout(()=>{m=!1},500)},800)}},{passive:!1});