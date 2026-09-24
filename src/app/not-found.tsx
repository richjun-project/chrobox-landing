import type { Metadata } from 'next';
import { NotFound, type NotFoundMessages } from '../screens/NotFound';
import { SEO_LOCALES } from '../lib/seo';
import { uiCopy } from '../lib/uiCopy';

export const metadata: Metadata = {
  title: 'Page Not Found | Chrobox',
  robots: {
    index: false,
    follow: true,
  },
};

const messages = Object.fromEntries(
  SEO_LOCALES.map(({ code }) => {
    const { notFoundMessage, goHome } = uiCopy(code);
    return [code, { notFoundMessage, goHome }];
  }),
) as NotFoundMessages;

export default function NotFoundPage() {
  return <NotFound messages={messages} />;
}
