import type { Metadata } from 'next';
import { NotFound } from '../screens/NotFound';

export const metadata: Metadata = {
  title: 'Page Not Found | Chrobox',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return <NotFound />;
}
