import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteContent } from '../content/siteContent';

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Our Services</h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Professional solutions designed to help your business thrive
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {siteContent.services.map((service) => (
            <Card
              key={service.id}
              className="flex flex-col transition-all hover:shadow-lg hover:border-accent/50"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="mb-6 flex-1 text-muted-foreground">{service.summary}</p>
                <Link to="/services/$serviceId" params={{ serviceId: service.id }}>
                  <Button className="group w-full gap-2">
                    View Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
