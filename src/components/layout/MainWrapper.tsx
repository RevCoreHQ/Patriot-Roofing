'use client';

import { usePathname } from 'next/navigation';

export function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <main className={`flex-1 pb-16 lg:pb-0${pathname !== '/' ? ' pt-20' : ''}`}>
      {children}
    </main>
  );
}
