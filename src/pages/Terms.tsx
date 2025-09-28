
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={() => {}} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Terms of Service
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Terms and Conditions
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-3">Acceptance of Terms</h3>
                  <p className="text-muted-foreground">
                    By accessing and using Play-Game, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, 
                    please do not use this service.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Use License</h3>
                  <p className="text-muted-foreground">
                    Permission is granted to temporarily access the games on Play-Game for personal, 
                    non-commercial transitory viewing only. This is the grant of a license, not a 
                    transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display</li>
                    <li>attempt to reverse engineer any software contained on the website</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">User Accounts</h3>
                  <p className="text-muted-foreground">
                    When you create an account with us, you must provide information that is accurate, 
                    complete, and current at all times. You are responsible for safeguarding the 
                    password and for all activities that occur under your account.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Prohibited Uses</h3>
                  <p className="text-muted-foreground">You may not use our service:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
                    <li>For any unlawful purpose or to solicit others to unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Disclaimer</h3>
                  <p className="text-muted-foreground">
                    The information on this website is provided on an 'as is' basis. To the fullest 
                    extent permitted by law, this Company excludes all representations, warranties, 
                    conditions and terms relating to our website and the use of this website.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Service, please contact us at 
                    legal@play-game.com or through our support page.
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

export default Terms;
