import React from 'react';
import { GraduationCap, Palette, Calculator, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Primary Education',
      grade: 'Grades 1-5',
      description: 'Building strong foundations in literacy, numeracy, and social skills through play-based learning and interactive activities.',
      features: ['Play-based Learning', 'Individual Attention', 'Creative Arts', 'Language Development'],
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Calculator,
      title: 'Secondary Education',
      grade: 'Grades 6-10',
      description: 'Comprehensive curriculum focusing on critical thinking, problem-solving, and preparing students for higher education.',
      features: ['STEM Focus', 'Project-Based Learning', 'Leadership Skills', 'Career Guidance'],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Globe,
      title: 'Senior Secondary',
      grade: 'Grades 11-12',
      description: 'Specialized streams in Science, Commerce, and Humanities with college preparation and career counseling.',
      features: ['Stream Specialization', 'College Prep', 'Research Projects', 'Internship Programs'],
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Palette,
      title: 'Extracurricular',
      grade: 'All Grades',
      description: 'Diverse activities including sports, arts, music, drama, and community service to develop well-rounded personalities.',
      features: ['Sports & Athletics', 'Music & Arts', 'Debate & Drama', 'Community Service'],
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-school-blue">
            Academic Programs
          </h2>
          <p className="text-lg text-gray-800 font-medium max-w-3xl mx-auto">
            Our comprehensive programs are designed to nurture every aspect of your child's development, 
            from early childhood through senior secondary education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-full min-h-[200px]">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-school-blue rounded-lg">
                      <program.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-school-blue">{program.title}</h3>
                      <p className="text-sm text-blue-600 font-medium">{program.grade}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-800 font-medium mb-4">{program.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-school-gold rounded-full mr-2"></div>
                        <span className="text-sm text-teal-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="ghost" className="p-0 h-auto text-school-blue hover:text-school-lightBlue">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
