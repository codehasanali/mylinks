import { Metadata } from 'next';
import './globals.css';

import Provider from './provider';

import { siteConfig } from '@/config/site';
import React from "react";





export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}