
import { Download, MapPin, Users, MessageCircle, Smartphone, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Real-time Chat",
      description: "Stay connected with friends through instant messaging"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Live Location",
      description: "Share your location and see where your friends are"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Friend Network",
      description: "Build your social circle and discover nearby friends"
    }
  ];

  const handleDownload = () => {
    console.log("Downloading WyA APK...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <MapPin className="w-8 h-8 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold text-white">WyA</span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Chat. Share.
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Connect.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              The social chat app that brings your friends closer. Share your location, 
              chat in real-time, and discover who's nearby.
            </p>
          </div>

          {/* Download Button */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}>
            <Button 
              onClick={handleDownload}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-2xl animate-pulse-glow transform hover:scale-105 transition-all duration-300"
            >
              <Download className="w-6 h-6 mr-2" />
              Download Free
            </Button>
            <p className="text-white/60 mt-4">Version 1.0 • 12MB • Android 6.0+</p>
          </div>

          {/* App Preview */}
          <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative w-64 h-96 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl shadow-2xl animate-float p-2">
              <div className="w-full h-full bg-black rounded-2xl relative overflow-hidden">
                <div className="absolute top-4 left-4 right-4 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">WyA</span>
                </div>
                <div className="absolute top-20 left-4 right-4 bottom-4 bg-gray-900 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                      <div className="flex-1 h-3 bg-gray-700 rounded"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                      <div className="flex-1 h-3 bg-gray-700 rounded"></div>
                    </div>
                    <div className="mt-6 h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Stay Connected</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Discover what makes WyA the perfect way to stay close to your friends
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
                <CardContent className="p-8 text-center">
                  <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Connect?</h2>
            <p className="text-xl text-white/80 mb-8">
              Join your friends on WyA and never lose touch again.
            </p>
            <Button 
              onClick={handleDownload}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-12 py-6 text-xl rounded-full shadow-2xl animate-pulse-glow transform hover:scale-105 transition-all duration-300"
            >
              <Download className="w-8 h-8 mr-3" />
              Connect now !
            </Button>
            <div className="flex justify-center items-center space-x-8 mt-8 text-white/60">
              <span>✓ Free forever</span>
              <span>✓ Privacy focused</span>
              <span>✓ Real-time updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="w-6 h-6 text-white" />
            <span className="text-xl font-bold text-white">WyA</span>
          </div>
          <p className="text-white/60">
            © 2025 WyA. Connect responsibly.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
