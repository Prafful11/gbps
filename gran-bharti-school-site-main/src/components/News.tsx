import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const News = () => {
  const newsItems = [
    {
      title: 'Annual Science Exhibition 2024',
      date: 'March 15, 2024',
      excerpt: 'Students showcase innovative projects in our annual science exhibition featuring experiments, models, and research presentations.',
      image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Events'
    },
    {
      title: 'New STEM Laboratory Inauguration',
      date: 'March 10, 2024',
      excerpt: 'State-of-the-art STEM laboratory inaugurated with advanced equipment to enhance hands-on learning experiences for students.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Infrastructure'
    },
    {
      title: 'Inter-School Sports Championship Victory',
      date: 'March 8, 2024',
      excerpt: 'Our school team wins the inter-school athletics championship, bringing home multiple gold medals in various sporting events.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Sports'
    }
  ];

  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-school-blue">
            Latest News & Events
          </h2>
          <p className="text-lg text-teal-700 font-medium max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and events at Gyan Bharti Public School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <div className="relative h-48">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-school-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center text-sm text-blue-600 font-medium mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold text-school-blue hover:text-school-lightBlue transition-colors">
                  {item.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-emerald-700 font-medium mb-4">{item.excerpt}</p>
                <Button variant="ghost" className="p-0 h-auto text-school-blue hover:text-school-lightBlue">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
