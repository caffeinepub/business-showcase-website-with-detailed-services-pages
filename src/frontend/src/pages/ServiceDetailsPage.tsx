import { Link, useParams } from '@tanstack/react-router';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { siteContent } from '../content/siteContent';

export default function ServiceDetailsPage() {
  const { serviceId } = useParams({ strict: false });
  const service = siteContent.services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-2xl">
          <Alert variant="destructive">
            <AlertTitle className="text-lg font-semibold">Service Not Found</AlertTitle>
            <AlertDescription className="mt-2">
              The service you're looking for doesn't exist or has been removed.
            </AlertDescription>
          </Alert>
          <div className="mt-6">
            <Link to="/services">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <Link to="/services">
            <Button variant="ghost" className="gap-2 px-0">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Button>
          </Link>
        </div>

        <Card className="border-border/50">
          <CardHeader className="space-y-4 pb-8">
            <CardTitle className="text-3xl md:text-4xl">{service.name}</CardTitle>
            <p className="text-lg text-muted-foreground">{service.summary}</p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Overview</h2>
              <p className="leading-relaxed text-muted-foreground">{service.description}</p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Key Benefits</h2>
              <ul className="space-y-3">
                {service.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 border-t border-border/50 pt-8 sm:flex-row">
              <Link to="/contact" className="flex-1">
                <Button size="lg" className="w-full">
                  Get Started
                </Button>
              </Link>
              <Link to="/services" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  View All Services
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
