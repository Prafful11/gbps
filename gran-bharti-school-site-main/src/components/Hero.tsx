import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/admission');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Excellence in
            <span className="block text-school-gold">Education</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Nurturing minds, building futures. At Gyan Bharti Public School, we provide 
            world-class education with modern facilities and experienced faculty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
              onClick={handleApplyClick}
            >
              Apply for Admission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-school-blue">
              Take a Virtual Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-white/20 rounded-full mb-3">
                <Star className="h-6 w-6 text-school-gold" />
              </div>
              <div className="text-3xl font-bold">25+</div>
              <div className="text-blue-200">Years of Excellence</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-white/20 rounded-full mb-3">
                <Users className="h-6 w-6 text-school-gold" />
              </div>
              <div className="text-3xl font-bold">2000+</div>
              <div className="text-blue-200">Happy Students</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-white/20 rounded-full mb-3">
                <Award className="h-6 w-6 text-school-gold" />
              </div>
              <div className="text-3xl font-bold">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
