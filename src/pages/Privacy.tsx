
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={() => {}} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Privacy Policy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Your Privacy Matters
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-3">Information We Collect</h3>
                  <p className="text-muted-foreground">
                    We collect information you provide directly to us, such as when you create an account, 
                    play games, or contact us for support. This may include your username, email address, 
                    and game progress data.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">How We Use Your Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>To provide and maintain our gaming services</li>
                    <li>To personalize your gaming experience</li>
                    <li>To communicate with you about updates and new features</li>
                    <li>To improve our games and platform</li>
                    <li>To ensure fair play and prevent cheating</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Data Security</h3>
                  <p className="text-muted-foreground">
                    We implement appropriate security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction. Your data 
                    is encrypted and stored securely.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Cookies and Tracking</h3>
                  <p className="text-muted-foreground">
                    We use cookies and similar technologies to enhance your gaming experience, 
                    remember your preferences, and analyze how our platform is used.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
                  <p className="text-muted-foreground">
                    You have the right to access, update, or delete your personal information. 
                    You can also opt out of certain communications and data collection practices.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at 
                    privacy@play-game.com or through our support page.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
