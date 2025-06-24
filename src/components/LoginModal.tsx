
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { User } from "lucide-react";

interface LoginModalProps {
  children: React.ReactNode;
}

const LoginModal = ({ children }: LoginModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ 
    name: "", 
    email: "", 
    password: "", 
    confirmPassword: "",
    phone: "",
    location: ""
  });
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", loginData);
    toast({
      title: "تم تسجيل الدخول بنجاح",
      description: "مرحباً بك في منصة النزهة للإعلانات المبوبة"
    });
    setIsOpen(false);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "خطأ",
        description: "كلمات المرور غير متطابقة",
        variant: "destructive"
      });
      return;
    }
    console.log("Registration attempt:", registerData);
    toast({
      title: "تم إنشاء الحساب بنجاح",
      description: "مرحباً بك في منصة النزهة للإعلانات المبوبة"
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center font-cairo text-xl">
            تسجيل الدخول أو إنشاء حساب جديد
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login" className="font-cairo">تسجيل الدخول</TabsTrigger>
            <TabsTrigger value="register" className="font-cairo">حساب جديد</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-cairo">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@domain.com"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  required
                  dir="ltr"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="font-cairo">كلمة المرور</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" className="w-full font-cairo">
                تسجيل الدخول
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="register" className="space-y-4">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-cairo">الاسم الكامل</Label>
                <Input
                  id="name"
                  placeholder="الاسم الكامل"
                  value={registerData.name}
                  onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-email" className="font-cairo">البريد الإلكتروني</Label>
                <Input
                  id="reg-email"
                  type="email"
                  placeholder="example@domain.com"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                  required
                  dir="ltr"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-cairo">رقم الهاتف</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+20 123 456 789"
                  value={registerData.phone}
                  onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                  required
                  dir="ltr"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location" className="font-cairo">الموقع</Label>
                <Input
                  id="location"
                  placeholder="المدينة، المحافظة"
                  value={registerData.location}
                  onChange={(e) => setRegisterData({...registerData, location: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-password" className="font-cairo">كلمة المرور</Label>
                <Input
                  id="reg-password"
                  type="password"
                  placeholder="••••••••"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="font-cairo">تأكيد كلمة المرور</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" className="w-full font-cairo">
                إنشاء حساب جديد
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
