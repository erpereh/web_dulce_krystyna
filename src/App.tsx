import { LazyMotion, domAnimation, MotionConfig } from 'motion/react';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/Home';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const App = () => {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.5, ease: 'easeOut' }}>
      <LazyMotion features={domAnimation}>
        <Layout>
          <HomePage />
        </Layout>
        <WhatsAppButton />
      </LazyMotion>
    </MotionConfig>
  );
};
