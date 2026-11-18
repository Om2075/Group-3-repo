import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { OutfitProvider } from './context/OutfitContext';
import App from './App';
import './index.css';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; message: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      message: error?.message || 'An unexpected interface error occurred.'
    };
  }

  componentDidCatch(error: Error) {
    console.error('Try & Buy ErrorBoundary caught:', error);
  }

  handleRecover = () => {
    try {
      sessionStorage.clear();
    } catch {
      // Ignore storage failures
    }
    this.setState({ hasError: false, message: '' });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F8F9FA] text-[#111318] flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white border border-[#E2E4E9] rounded-2xl p-8 text-center shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] mb-2">
              Recovery View
            </p>
            <h1 className="font-serif text-2xl font-bold text-[#111318] mb-2">
              Something needs a quick reset
            </h1>
            <p className="text-sm text-[#525866] mb-6">
              {this.state.message}
            </p>
            <button
              type="button"
              onClick={this.handleRecover}
              className="px-6 py-2.5 rounded-lg bg-[#111318] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              Return to Storefront
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <OutfitProvider>
            <App />
          </OutfitProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
