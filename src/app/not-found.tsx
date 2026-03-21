import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';
import { Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white text-center">
      <p className="text-accent-red font-display text-8xl font-bold leading-none mb-4">404</p>
      <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">Page Not Found</h1>
      <p className="text-slate-300 text-lg max-w-md mb-10">
        The page you are looking for does not exist. Let us help you find what you need.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button href="/" size="lg">Back to Home</Button>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium border-2 border-white/20 rounded-xl hover:bg-white/10 transition-all"
        >
          <Phone className="w-5 h-5" />
          Call {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
