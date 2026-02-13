import { Heart } from 'lucide-react';
import { siteContent } from '@/content/siteContent';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'unknown-app';

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-muted-foreground">
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-4 w-4 fill-accent text-accent" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <p>&copy; {currentYear} {siteContent.business.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
