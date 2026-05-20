import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream font-sans text-dark-brown">
      <Header />
      <main className="flex-grow pt-20">
        {' '}
        {/* pt-20 to account for fixed header */}
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>);

}