import './style.css'
import { HomePage } from './home/HomePage'
import { EducationPage } from './education/EducationPage'
import { ProjectsPage } from './projects/ProjectsPage'

// 页面管理
const app = document.getElementById('app')!;

// 创建页面容器
app.innerHTML = `
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
`;

// 初始化页面
new HomePage('home-page');
new EducationPage('education-page');
new ProjectsPage('projects-page');

// 监听滚动事件实现页面切换
let currentPage = 0; // 0: home, 1: education, 2: projects
let isTransitioning = false; // 页面切换中
let isScrollLocked = false; // 滚动锁定
let lastScrollTime = 0;

window.addEventListener('wheel', (e) => {
  // 如果正在切换或滚动被锁定，阻止所有操作
  if (isTransitioning || isScrollLocked) {
    e.preventDefault();
    return;
  }
  
  const now = Date.now();
  const homePage = document.getElementById('home-page')!;
  const educationPage = document.getElementById('education-page')!;
  const projectsPage = document.getElementById('projects-page')!;
  
  // 获取当前可见页面
  let visiblePage: HTMLElement;
  if (currentPage === 0) visiblePage = homePage;
  else if (currentPage === 1) visiblePage = educationPage;
  else visiblePage = projectsPage;
  
  const scrollTop = visiblePage.scrollTop;
  const scrollHeight = visiblePage.scrollHeight;
  const clientHeight = visiblePage.clientHeight;
  
  // 检查是否到达页面顶部或底部
  const isAtTop = scrollTop === 0;
  const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 5;
  
  // 防止过于频繁的切换
  if (now - lastScrollTime < 800) return;
  
  if (e.deltaY > 0 && currentPage === 0 && isAtBottom) {
    // 首页 -> 教育页面
    e.preventDefault();
    switchPage(0, 1, homePage, educationPage);
  } else if (e.deltaY > 0 && currentPage === 1 && isAtBottom) {
    // 教育页面 -> 项目页面
    e.preventDefault();
    switchPage(1, 2, educationPage, projectsPage);
  } else if (e.deltaY < 0 && currentPage === 1 && isAtTop) {
    // 教育页面 -> 首页
    e.preventDefault();
    switchPage(1, 0, educationPage, homePage);
  } else if (e.deltaY < 0 && currentPage === 2 && isAtTop) {
    // 项目页面 -> 教育页面
    e.preventDefault();
    switchPage(2, 1, projectsPage, educationPage);
  }
  
  function switchPage(from: number, to: number, fromPage: HTMLElement, toPage: HTMLElement) {
    isTransitioning = true;
    currentPage = to;
    lastScrollTime = now;
    
    // 重置目标页面滚动位置
    toPage.scrollTop = 0;
    
    // 退出动画
    fromPage.classList.remove('page-visible');
    fromPage.classList.add(to > from ? 'page-exit' : 'page-hidden');
    
    // 进入动画
    toPage.classList.remove(to > from ? 'page-hidden' : 'page-exit');
    toPage.classList.add('page-visible');
    
    // 锁定滚动，防止切换期间的误操作
    isScrollLocked = true;
    
    setTimeout(() => { 
      isTransitioning = false;
      // 动画完成后额外等待0.5秒才解锁滚动
      setTimeout(() => {
        isScrollLocked = false;
      }, 500);
    }, 800);
  }
}, { passive: false }); // 改为 false 以支持 preventDefault



