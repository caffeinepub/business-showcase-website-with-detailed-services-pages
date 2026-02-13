import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteContent } from '../content/siteContent';

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Contact Us</h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Get in touch with our team to discuss your needs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border/50 transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="text-muted-foreground transition-colors hover:text-accent hover:underline break-all"
              >
                {siteContent.contact.email}
              </a>
            </CardContent>
          </Card>

          <Card className="border-border/50 transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`tel:${siteContent.contact.phone}`}
                className="text-muted-foreground transition-colors hover:text-accent hover:underline"
              >
                {siteContent.contact.phone}
              </a>
            </CardContent>
          </Card>

          <Card className="border-border/50 transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-line break-words">
                {siteContent.contact.address}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-border/50">
          <CardHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <CardTitle className="text-lg">Business Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
