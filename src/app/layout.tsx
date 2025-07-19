import './globals.css';
import type { ReactNode } from 'react';

// Navigation Bar Component
function NavigationBar() {
  return (
    <nav className="w-full bg-[#FDF7F4] border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#2D3926] rounded-lg flex items-center justify-center mr-3">
            <span className="text-white text-sm font-bold">SF</span>
          </div>
          <span className="text-[#2D3926] font-bold text-lg">Safe Farm</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-6">
          <button className="text-black font-['Asul'] text-sm hover:text-gray-700 transition-colors">
            Why Safe Farm?
          </button>
          <button className="text-black font-['Asul'] text-sm hover:text-gray-700 transition-colors">
            For Sellers
          </button>
          <button className="bg-[#2D3926] text-white font-['Asul'] text-sm px-4 py-2 rounded-lg hover:bg-[#1f2a1a] transition-colors">
            Get Verified
          </button>
        </div>
      </div>
    </nav>
  );
}

// Root layout wraps all pages and provides global styles
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FDF7F4] text-safefarm-charcoal min-h-screen">
        <NavigationBar />
        {children}
      </body>
    </html>
  );
} 