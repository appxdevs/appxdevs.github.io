import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Mail, Lock, Eye, EyeOff, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

interface LoginModalProps {
  children: React.ReactNode;
}

const LoginModal = ({ children }: LoginModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setRegisterData({
      ...registerData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", loginData);
    // Handle login logic here
    setIsOpen(false);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration attempted with:", registerData);
    // Handle registration logic here
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-primary/50">
        <DialogHeader>
          <DialogTitle className="text-center text-xl gradient-primary bg-clip-text text-transparent">
            Welcome to Play-Game
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="register">Sign Up</TabsTrigger>
          </TabsList>
          
          {/* Login Tab */}
          <TabsContent value="login" className="space-y-4">
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="login-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={loginData.email}
                    onChange={handleLoginInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="login-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={handleLoginInputChange}
                    className="pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <Button type="submit" className="w-full">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              <Link to="/login" className="text-primary hover:underline" onClick={() => setIsOpen(false)}>
                View full login page
              </Link>
            </div>
          </TabsContent>

          {/* Register Tab */}
          <TabsContent value="register" className="space-y-4">
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="register-username"
                    name="username"
                    type="text"
                    placeholder="Choose a username"
                    value={registerData.username}
                    onChange={handleRegisterInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="register-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={registerData.email}
                    onChange={handleRegisterInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="register-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={registerData.password}
                    onChange={handleRegisterInputChange}
                    className="pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="register-terms"
                  name="acceptTerms"
                  checked={registerData.acceptTerms}
                  onCheckedChange={(checked) => 
                    setRegisterData({ ...registerData, acceptTerms: checked as boolean })
                  }
                  required
                />
                <Label htmlFor="register-terms" className="text-sm">
                  I agree to the Terms of Service
                </Label>
              </div>

              <Button type="submit" className="w-full">
                <UserPlus className="h-4 w-4 mr-2" />
                Create Account
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              <Link to="/register" className="text-primary hover:underline" onClick={() => setIsOpen(false)}>
                View full registration page
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;