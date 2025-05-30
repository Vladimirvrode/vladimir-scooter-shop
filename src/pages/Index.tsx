
import { useState } from "react";
import { Phone, Mail, MapPin, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Владимир свяжется с вами в ближайшее время.",
    });
    setContactForm({ name: "", phone: "", message: "" });
  };

  const products = [
    {
      id: 1,
      name: "Yamaha Aerox 155",
      price: "350 000 ₽",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      description: "Спортивный скутер для города"
    },
    {
      id: 2,
      name: "Honda PCX 150",
      price: "420 000 ₽",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop",
      description: "Комфортный и экономичный"
    },
    {
      id: 3,
      name: "Suzuki Burgman 200",
      price: "480 000 ₽",
      image: "https://images.unsplash.com/photo-1544123206-b35786f20bd4?w=500&h=300&fit=crop",
      description: "Премиум класс для дальних поездок"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Александр М.",
      rating: 5,
      text: "Отличный сервис! Владимир помог выбрать идеальный скутер, все объяснил про обслуживание. Рекомендую!",
      date: "2 недели назад"
    },
    {
      id: 2,
      name: "Мария К.",
      rating: 5,
      text: "Купила Honda PCX, очень довольна покупкой. Честные цены, никакого обмана. Спасибо за профессионализм!",
      date: "1 месяц назад"
    },
    {
      id: 3,
      name: "Дмитрий П.",
      rating: 5,
      text: "Уже второй скутер беру у Владимира. Качество товара на высоте, всегда поможет с выбором запчастей.",
      date: "3 месяца назад"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-black">
                Владимир Голуб
              </h1>
              <p className="text-sm text-gray-600">Скутеры • Мотоциклы • Мопеды</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-black" />
              <span className="font-semibold text-black">+7 (XXX) XXX-XX-XX</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Ваш надежный партнер
            <span className="block text-black">
              в мире двухколесного транспорта
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Более 10 лет опыта продажи и обслуживания скутеров, мотоциклов и мопедов. 
            Только качественная техника от проверенных производителей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-none transition-all duration-300"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Посмотреть товары
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded-none transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Связаться со мной
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-12">
            Популярные модели
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 overflow-hidden rounded-none">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-black">
                      {product.price}
                    </span>
                    <Button 
                      variant="outline"
                      className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-none"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Узнать больше
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-12">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-none">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-black text-black" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <span className="font-semibold text-black">{review.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-12">
            Связаться со мной
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-black mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-black flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">Телефон</p>
                    <p className="text-gray-600">+7 (XXX) XXX-XX-XX</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-black flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">Email</p>
                    <p className="text-gray-600">vladimir@scooters.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-black flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">Адрес</p>
                    <p className="text-gray-600">г. Москва, ул. Примерная, 123</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 border border-gray-200">
                <h4 className="font-semibold text-black mb-3">Режим работы:</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Пн-Пт: 9:00 - 19:00</p>
                  <p>Сб: 10:00 - 17:00</p>
                  <p>Вс: по договоренности</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-black mb-6">Отправить сообщение</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full border-gray-300 focus:border-black focus:ring-black rounded-none"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Телефон *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    className="w-full border-gray-300 focus:border-black focus:ring-black rounded-none"
                    placeholder="+7 (XXX) XXX-XX-XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Сообщение *
                  </label>
                  <Textarea
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full border-gray-300 focus:border-black focus:ring-black min-h-[120px] rounded-none"
                    placeholder="Расскажите, что вас интересует..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-none transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Владимир Голуб</h3>
            <p className="text-gray-300">Ваш эксперт по двухколесному транспорту</p>
          </div>
          <div className="border-t border-gray-600 pt-4">
            <p className="text-gray-400">
              © 2024 Все права защищены. Продажа и обслуживание скутеров, мотоциклов и мопедов.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
