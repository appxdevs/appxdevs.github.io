
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { HelpCircle, Mail, MessageSquare, Search, Book } from "lucide-react";

const Help = () => {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click on the 'Login' button in the header, then select 'Sign up here' to create a new account. You'll need to provide a username, email, and password."
    },
    {
      question: "Are the games really free?",
      answer: "Yes! All games on Play-Game are completely free to play. No hidden fees, no subscriptions, and no downloads required."
    },
    {
      question: "Why isn't a game loading?",
      answer: "If a game isn't loading, try refreshing the page or clearing your browser cache. Make sure you have a stable internet connection."
    },
    {
      question: "How do I save my game progress?",
      answer: "Game progress is automatically saved when you're logged in. Make sure to create an account to keep your scores and achievements."
    },
    {
      question: "Can I play games on mobile?",
      answer: "Yes! Our website is fully responsive and works great on mobile devices and tablets."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={() => {}} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Help & Support
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              How Can We Help?
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions or get in touch with our support team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* FAQ Section */}
            <div>
              <Card className="border-border/50 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5 text-primary" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-border/50 pb-4 last:border-b-0">
                        <h4 className="font-medium mb-2">{faq.question}</h4>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" />
                    Quick Links
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="ghost" className="w-full justify-start">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Game Not Loading?
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Report a Bug
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      Account Issues
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Contact Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What can we help you with?" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Describe your issue or question..."
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-border/50 mt-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Other Ways to Reach Us</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>support@play-game.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      <span>Live Chat (9 AM - 5 PM EST)</span>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-muted-foreground">
                    We typically respond within 24 hours
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Help;
