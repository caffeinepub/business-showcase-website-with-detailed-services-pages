import { Card, CardContent } from '@/components/ui/card';
import { siteContent } from '../content/siteContent';

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">About Us</h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Learn more about our mission and values
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-border/50">
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-semibold">Our Story</h2>
              <p className="leading-relaxed text-muted-foreground">{siteContent.about.story}</p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
              <p className="leading-relaxed text-muted-foreground">{siteContent.about.mission}</p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-semibold">Our Approach</h2>
              <p className="leading-relaxed text-muted-foreground">{siteContent.about.approach}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
