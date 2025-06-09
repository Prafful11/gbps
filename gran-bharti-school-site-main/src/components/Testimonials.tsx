import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mrs. Priya Sharma',
      role: 'Parent of Arjun (Class 8)',
      content: 'Gyan Bharti Public School has been instrumental in shaping my son\'s character and academic excellence. The teachers are dedicated and the facilities are world-class.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Mr. Rajesh Kumar',
      role: 'Parent of Ananya (Class 12)',
      content: 'The holistic approach to education at Gyan Bharti has helped my daughter excel not just academically but also in extracurricular activities. Highly recommend!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Dr. Meera Patel',
      role: 'Former Student (Batch 2018)',
      content: 'Gyan Bharti gave me the foundation I needed to succeed in medical school. The values and education I received here continue to guide me in my career.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-school-blue">
            What Our Community Says
          </h2>
          <p className="text-lg text-purple-700 font-medium max-w-3xl mx-auto">
            Hear from our students, parents, and alumni about their experiences at Gyan Bharti Public School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-school-blue opacity-20" />
                </div>
                
                <p className="text-indigo-700 mb-6 italic font-medium">"{testimonial.content}"</p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-school-gold fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
