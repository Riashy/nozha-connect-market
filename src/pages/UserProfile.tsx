
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Settings, List, MessageCircle, Star, Eye, Edit, Trash2 } from "lucide-react";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "أحمد محمد علي",
    email: "ahmed@example.com",
    phone: "+20 123 456 789",
    location: "النزهة الجديدة، القاهرة",
    company: "شركة التجارة الحديثة",
    joinDate: "يناير 2024",
    avatar: ""
  });

  const [userAds] = useState([
    {
      id: 1,
      title: "أجهزة كمبيوتر محمولة فاخرة - استيراد بالجملة",
      price: "45,000$",
      status: "نشط",
      views: 234,
      messages: 12,
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "معدات مطابخ صناعية مستوردة",
      price: "25,000$",
      status: "قيد المراجعة",
      views: 89,
      messages: 5,
      date: "2024-01-10"
    }
  ]);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", user);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-cairo" dir="rtl">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="text-lg">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg mb-1">{user.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{user.company}</p>
                <p className="text-xs text-gray-500 mb-4">عضو منذ {user.joinDate}</p>
                <div className="flex justify-center">
                  <Badge variant="secondary" className="font-cairo">
                    <Star className="w-3 h-3 ml-1" />
                    بائع موثق
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="ads" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="ads" className="font-cairo">
                  <List className="w-4 h-4 ml-2" />
                  إعلاناتي
                </TabsTrigger>
                <TabsTrigger value="messages" className="font-cairo">
                  <MessageCircle className="w-4 h-4 ml-2" />
                  الرسائل
                </TabsTrigger>
                <TabsTrigger value="profile" className="font-cairo">
                  <Settings className="w-4 h-4 ml-2" />
                  الإعدادات
                </TabsTrigger>
              </TabsList>

              <TabsContent value="ads" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">إعلاناتي</h2>
                  <Button className="font-cairo">إضافة إعلان جديد</Button>
                </div>

                <div className="grid gap-4">
                  {userAds.map((ad) => (
                    <Card key={ad.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">{ad.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center">
                                <Eye className="w-4 h-4 ml-1" />
                                {ad.views} مشاهدة
                              </span>
                              <span className="flex items-center">
                                <MessageCircle className="w-4 h-4 ml-1" />
                                {ad.messages} رسالة
                              </span>
                              <span>تاريخ النشر: {ad.date}</span>
                            </div>
                          </div>
                          <div className="text-left">
                            <div className="text-xl font-bold text-primary mb-2">{ad.price}</div>
                            <Badge variant={ad.status === "نشط" ? "default" : "secondary"} className="font-cairo">
                              {ad.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="font-cairo">
                            <Edit className="w-4 h-4 ml-1" />
                            تعديل
                          </Button>
                          <Button variant="outline" size="sm" className="font-cairo">
                            <Eye className="w-4 h-4 ml-1" />
                            عرض
                          </Button>
                          <Button variant="outline" size="sm" className="font-cairo text-red-600 border-red-200 hover:bg-red-50">
                            <Trash2 className="w-4 h-4 ml-1" />
                            حذف
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="messages" className="space-y-4">
                <h2 className="text-2xl font-bold">الرسائل</h2>
                <Card>
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <h3 className="font-bold text-lg mb-2">لا توجد رسائل جديدة</h3>
                    <p className="text-gray-600">ستظهر هنا الرسائل من المهتمين بإعلاناتك</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile" className="space-y-4">
                <h2 className="text-2xl font-bold">إعدادات الحساب</h2>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-cairo">المعلومات الشخصية</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleProfileUpdate} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-cairo">الاسم الكامل</Label>
                          <Input
                            id="name"
                            value={user.name}
                            onChange={(e) => setUser({...user, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company" className="font-cairo">اسم الشركة</Label>
                          <Input
                            id="company"
                            value={user.company}
                            onChange={(e) => setUser({...user, company: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="font-cairo">البريد الإلكتروني</Label>
                          <Input
                            id="email"
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}
                            dir="ltr"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="font-cairo">رقم الهاتف</Label>
                          <Input
                            id="phone"
                            value={user.phone}
                            onChange={(e) => setUser({...user, phone: e.target.value})}
                            dir="ltr"
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="location" className="font-cairo">الموقع</Label>
                          <Input
                            id="location"
                            value={user.location}
                            onChange={(e) => setUser({...user, location: e.target.value})}
                          />
                        </div>
                      </div>
                      <Button type="submit" className="font-cairo">
                        حفظ التغييرات
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;
