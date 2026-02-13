import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { siteContent } from '@/content/siteContent';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-auto min-h-16 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <div className="h-10 w-10 shrink-0 flex items-center justify-center">
            {!logoError ? (
              <img
                src="/assets/generated/business-logo.dim_512x512.png"
                alt={`${siteContent.business.name} logo`}
                className="h-full w-full object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="h-10 w-10 rounded-md bg-accent/20 flex items-center justify-center">
                <span className="text-lg font-bold text-accent">
                  {siteContent.business.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight leading-tight">
              {siteContent.business.name}
            </span>
            <span className="text-xs text-muted-foreground leading-tight hidden sm:block">
              {siteContent.business.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive ? 'secondary' : 'ghost'}
                  className="font-medium transition-colors"
                >
                  {link.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-bold">Menu</span>
              <SheetClose asChild>
                <Button variant="ghost" size="icon" aria-label="Close menu">
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <SheetClose asChild key={link.path}>
                    <Link to={link.path}>
                      <Button
                        variant={isActive ? 'secondary' : 'ghost'}
                        className="w-full justify-start font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Button>
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
