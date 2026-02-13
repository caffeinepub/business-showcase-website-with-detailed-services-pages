import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteContent } from '../content/siteContent';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-background via-muted/20 to-accent/5">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/assets/generated/hero-banner.dim_1600x900.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {siteContent.business.name}
            </h1>
            <p className="mb-4 text-xl font-medium text-accent-foreground md:text-2xl">
              {siteContent.business.tagline}
            </p>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              {siteContent.business.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/services">
                <Button size="lg" className="group gap-2 text-base">
                  Explore Our Services
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-base">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            We deliver exceptional results through expertise, dedication, and innovation
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteContent.business.highlights.map((highlight, index) => (
              <Card key={index} className="border-border/50 transition-shadow hover:shadow-md">
                <CardContent className="flex items-start gap-3 p-6">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed">{highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Details Section */}
      <section className="border-t border-border/40 bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
              Business Details
            </h2>
            <p className="mb-12 text-center text-lg text-muted-foreground">
              Get in touch with us today
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <Card className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mail className="h-5 w-5 text-accent" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={`mailto:${siteContent.contact.email}`}
                    className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline break-all"
                  >
                    {siteContent.contact.email}
                  </a>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Phone className="h-5 w-5 text-accent" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={`tel:${siteContent.contact.phone}`}
                    className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
                  >
                    {siteContent.contact.phone}
                  </a>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-accent" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground whitespace-pre-line break-words">
                    {siteContent.contact.address}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="border-t border-border/40 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
              Our Services
            </h2>
            <p className="mb-12 text-center text-lg text-muted-foreground">
              Comprehensive solutions tailored to your business needs
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {siteContent.services.slice(0, 4).map((service) => (
                <Card key={service.id} className="transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-semibold">{service.name}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{service.summary}</p>
                    <Link to="/services/$serviceId" params={{ serviceId: service.id }}>
                      <Button variant="ghost" size="sm" className="group gap-1 px-0">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/services">
                <Button size="lg" variant="outline">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
