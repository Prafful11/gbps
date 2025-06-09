import React from 'react';
import { Check, Award, Globe, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to providing the highest quality education with innovative teaching methods.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Preparing students to be global citizens with multicultural understanding.'
    },
    {
      icon: Check,
      title: 'Character Building',
      description: 'Focusing on moral values, ethics, and character development alongside academics.'
    },
    {
      icon: BookOpen,
      title: 'Future Ready',
      description: 'Equipping students with skills needed for success in the 21st century.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-school-blue">
            About Gyan Bharti Public School
          </h2>
          <p className="text-lg text-gray-800 font-medium max-w-3xl mx-auto">
            Established in 1998, Gyan Bharti Public School has been a beacon of educational excellence, 
            nurturing young minds and shaping future leaders with our commitment to holistic development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-school-blue">Our Mission</h3>
            <p className="text-lg text-gray-800 font-medium">
              To provide a nurturing and stimulating environment where every child can discover their 
              potential, develop their talents, and grow into confident, responsible, and compassionate 
              individuals who contribute positively to society.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-school-gold rounded-full mt-2"></div>
                <p className="text-gray-800 font-medium">
                  <span className="font-semibold text-foreground">Holistic Development:</span> 
                  We focus on academic, physical, emotional, and social growth.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-school-gold rounded-full mt-2"></div>
                <p className="text-gray-800 font-medium">
                  <span className="font-semibold text-foreground">Individual Attention:</span> 
                  Small class sizes ensure personalized learning experiences.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-school-gold rounded-full mt-2"></div>
                <p className="text-gray-800 font-medium">
                  <span className="font-semibold text-foreground">Modern Facilities:</span> 
                  State-of-the-art infrastructure supporting 21st-century learning.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Students learning together"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-school-blue/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="border-none shadow-md card-hover">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-school-blue rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-school-blue">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-teal-700 font-medium">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
