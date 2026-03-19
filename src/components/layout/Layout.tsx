import { Header } from './Header';
import { Footer } from './Footer';
import type { LayoutProps } from '@/types';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
};
