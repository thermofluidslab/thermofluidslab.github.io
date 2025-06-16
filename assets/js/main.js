/**
 * Thermal-Fluid Engineering Laboratory Website
 * Main JavaScript functionality
 */

// サイト設定
const SITE_CONFIG = {
    animationDuration: 300,
    scrollOffset: 80,
    breakpoints: {
        mobile: 768,
        tablet: 1024
    }
};

// DOM要素のキャッシュ
const DOM = {
    hamburger: null,
    navMenu: null,
    navbar: null,
    newsContainer: null
};

/**
 * DOM読み込み完了時の初期化
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔬 Thermal-Fluid Lab Website initialized');
    
    // DOM要素をキャッシュ
    cacheDOMElements();
    
    // 各機能を初期化
    initMobileNavigation();
    initSmoothScrolling();
    initHeaderScrollEffect();
    initLazyLoading();
    initNewsLoader();
    initAccessibility();
    
    console.log('✅ All features initialized successfully');
});

/**
 * DOM要素をキャッシュ
 */
function cacheDOMElements() {
    DOM.hamburger = document.getElementById('hamburger');
    DOM.navMenu = document.getElementById('nav-menu');
    DOM.navbar = document.querySelector('.navbar');
    DOM.newsContainer = document.getElementById('news-container');
}

/**
 * モバイルナビゲーション機能
 */
function initMobileNavigation() {
    if (!DOM.hamburger || !DOM.navMenu) return;
    
    // ハンバーガーメニューのクリックイベント
    DOM.hamburger.addEventListener('click', toggleMobileMenu);
    
    // メニュー項目クリック時にメニューを閉じる
    DOM.navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // 画面外クリックでメニューを閉じる
    document.addEventListener('click', function(e) {
        if (!DOM.hamburger.contains(e.target) && !DOM.navMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // ESCキーでメニューを閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
}

/**
 * モバイルメニューの開閉
 */
function toggleMobileMenu() {
    const isActive = DOM.navMenu.classList.contains('active');
    
    if (isActive) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

/**
 * モバイルメニューを開く
 */
function openMobileMenu() {
    DOM.hamburger.classList.add('active');
    DOM.navMenu.classList.add('active');
    DOM.hamburger.setAttribute('aria-expanded', 'true');
    DOM.hamburger.setAttribute('aria-label', 'メニューを閉じる');
    
    // スクロールを無効化
    document.body.style.overflow = 'hidden';
}

/**
 * モバイルメニューを閉じる
 */
function closeMobileMenu() {
    DOM.hamburger.classList.remove('active');
    DOM.navMenu.classList.remove('active');
    DOM.hamburger.setAttribute('aria-expanded', 'false');
    DOM.hamburger.setAttribute('aria-label', 'メニューを開く');
    
    // スクロールを有効化
    document.body.style.overflow = '';
}

/**
 * スムーススクロール機能
 */
function initSmoothScrolling() {
    // アンカーリンクにスムーススクロールを適用
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - SITE_CONFIG.scrollOffset;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // フォーカスを移動（アクセシビリティ）
                targetElement.focus();
            }
        });
    });
}

/**
 * ヘッダーのスクロール効果（改良版）
 */
function initHeaderScrollEffect() {
    if (!DOM.navbar) return;
    
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    let ticking = false;
    
    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // スクロール位置に応じた背景効果
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // ヘッダーの表示/非表示制御（改良版）
        if (Math.abs(lastScrollTop - scrollTop) <= 5) {
            // スクロール量が小さい場合は何もしない
            ticking = false;
            return;
        }
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 下にスクロール時 - ヘッダーを隠す（ただし最上部では常に表示）
            header.classList.add('hidden');
        } else {
            // 上にスクロール時 - ヘッダーを表示
            header.classList.remove('hidden');
        }
        
        // ページの最上部付近では常に表示
        if (scrollTop < 100) {
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    }
    
    // スクロールイベントにスロットリングを適用
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });
    
    // ヘッダーホバー時は常に表示
    header.addEventListener('mouseenter', function() {
        header.classList.remove('hidden');
    });
}

/**
 * 画像の遅延読み込み
 */
function initLazyLoading() {
    // Intersection Observer がサポートされている場合
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        img.classList.add('lazy-loaded');
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        });
        
        // data-src属性を持つ画像を監視
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * ニュース読み込み機能
 */
function initNewsLoader() {
    if (!DOM.newsContainer) return;
    
    // サンプルニュースデータ
    const sampleNews = [
        {
            date: '2024.01.15',
            category: '学会発表',
            title: '日本伝熱学会第61回伝熱シンポジウムで研究発表を行いました',
            url: '#'
        },
        {
            date: '2024.01.10',
            category: '論文掲載',
            title: 'International Journal of Heat and Mass Transfer に論文が掲載されました',
            url: '#'
        },
        {
            date: '2024.01.05',
            category: 'メンバー',
            title: '新メンバーが研究室に参加しました',
            url: '#'
        }
    ];
    
    // ニュースのHTMLを生成
    function createNewsHTML(newsItems) {
        return newsItems.map(item => `
            <article class="news-item">
                <time class="news-date" datetime="${item.date.replace(/\./g, '-')}">${item.date}</time>
                <span class="news-category">${item.category}</span>
                <a href="${item.url}" class="news-title">${item.title}</a>
            </article>
        `).join('');
    }
    
    // ニュースを表示
    setTimeout(() => {
        DOM.newsContainer.innerHTML = createNewsHTML(sampleNews);
        DOM.newsContainer.classList.add('news-loaded');
    }, 500);
}

/**
 * アクセシビリティ機能の初期化
 */
function initAccessibility() {
    // キーボードナビゲーション
    document.addEventListener('keydown', function(e) {
        // Tab キーでフォーカス表示を有効化
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // マウスクリックでフォーカス表示を無効化
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // 画面読み上げソフト用のライブリージョン
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
}

/**
 * ユーティリティ関数
 */
const Utils = {
    /**
     * デバウンス関数
     */
    debounce: function(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },
    
    /**
     * スロットル関数
     */
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    /**
     * 要素が画面内にあるかチェック
     */
    isElementInViewport: function(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    /**
     * ライブリージョンにメッセージを追加（アクセシビリティ）
     */
    announceToScreenReader: function(message) {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
            liveRegion.textContent = message;
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        }
    }
};

/**
 * パフォーマンス監視
 */
function initPerformanceMonitoring() {
    // Page Load時間を測定
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`📊 Page load time: ${loadTime}ms`);
        
        // Core Web Vitals の測定（対応ブラウザのみ）
        if ('PerformanceObserver' in window) {
            // Largest Contentful Paint
            new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log(`📊 LCP: ${lastEntry.startTime}ms`);
            }).observe({ type: 'largest-contentful-paint', buffered: true });
            
            // First Input Delay
            new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                entries.forEach((entry) => {
                    console.log(`📊 FID: ${entry.processingStart - entry.startTime}ms`);
                });
            }).observe({ type: 'first-input', buffered: true });
        }
    });
}

// パフォーマンス監視を開始
initPerformanceMonitoring();

// グローバルエラーハンドリング
window.addEventListener('error', function(e) {
    console.error('🚨 JavaScript Error:', e.error);
});

// 未処理のPromise拒否をキャッチ
window.addEventListener('unhandledrejection', function(e) {
    console.error('🚨 Unhandled Promise Rejection:', e.reason);
});

// サービスワーカー登録（将来的なPWA対応の準備）
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // サービスワーカーファイルが存在する場合のみ登録
        // navigator.serviceWorker.register('/sw.js');
    });
}