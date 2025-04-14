import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './sections/HomeSection';
import ContactSection from './sections/ContactSection';
import TermsSection from './sections/TermsSection';

// 表示可能なセクションの型
export type View = 'home' | 'contact' | 'terms';

const App: React.FC = () => {
  // URLからビューパラメータを取得する関数
  const getInitialView = (): View => {
    const params = new URLSearchParams(window.location.search);
    const view = params.get('view');
    if (view === 'contact' || view === 'terms') {
      return view;
    }
    return 'home';
  };

  const [currentView, setCurrentView] = useState<View>(getInitialView());

  // 表示するセクションを切り替える関数
  const changeView = (view: View) => {
    setCurrentView(view);
    
    // URLを更新（履歴を残さずに）
    const url = new URL(window.location.href);
    if (view === 'home') {
      url.searchParams.delete('view');
    } else {
      url.searchParams.set('view', view);
    }
    window.history.replaceState({}, '', url);
    
    window.scrollTo(0, 0); // 表示切り替え時にページトップへスクロール
  };

  // URLの変更を監視
  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getInitialView());
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // 現在のビューに基づいて表示するコンテンツを決定
  const renderContent = () => {
    switch (currentView) {
      case 'contact':
        return <ContactSection />;
      case 'terms':
        return <TermsSection />;
      case 'home':
      default:
        return <HomeSection />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header changeView={changeView} />
      <main style={{ flexGrow: 1, padding: '20px' }}>
        {renderContent()}
      </main>
      <Footer changeView={changeView} />
    </div>
  );
};

export default App;