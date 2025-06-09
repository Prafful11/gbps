import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, BookOpen, GraduationCap, Users } from 'lucide-react';

const ContactPage = () => {
  const departments = [
    {
      icon: BookOpen,
      title: 'Admissions Department',
      contact: 'admissions@gyanbharti.edu.in',
      phone: '+91 11 2345 6789 (Ext. 101)',
      description: 'For all admission inquiries, application status, and enrollment procedures.',
      textColor: 'text-indigo-600'
    },
    {
      icon: GraduationCap,
      title: 'Academic Affairs',
      contact: 'academics@gyanbharti.edu.in',
      phone: '+91 11 2345 6789 (Ext. 202)',
      description: 'For curriculum inquiries, academic calendars, and educational programs.',
      textColor: 'text-emerald-600'
    },
    {
      icon: Users,
      title: 'Administrative Office',
      contact: 'admin@gyanbharti.edu.in',
      phone: '+91 11 2345 6789 (Ext. 303)',
      description: 'For general inquiries, fee-related matters, and administrative concerns.',
      textColor: 'text-amber-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-school-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We're here to answer your questions and provide the assistance you need.
            Reach out to us through any of the methods below.
          </p>
        </div>
      </section>
      
      {/* Department-specific contacts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-school-blue mb-12">Our Departments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Card key={index} className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-14 h-14 bg-school-blue/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-school-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-school-blue mb-3">{dept.title}</h3>
                    <p className={`${dept.textColor} font-medium mb-4 flex-grow`}>{dept.description}</p>
                    <div className="pt-4 border-t border-muted">
                      <p className="flex items-center mb-2">
                        <Mail className="h-4 w-4 mr-2 text-school-blue" />
                        <span>{dept.contact}</span>
                      </p>
                      <p className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-school-blue" />
                        <span>{dept.phone}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Frequently Asked Questions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-school-blue mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-school-blue mb-3">What are the school hours?</h3>
                <p className="text-blue-700 font-medium">Our school operates from 8:00 AM to 2:30 PM Monday through Friday. Administrative offices are open until 5:00 PM on weekdays and until 2:00 PM on Saturdays.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-school-blue mb-3">How can I apply for admission?</h3>
                <p className="text-purple-600 font-medium">Admission applications can be submitted online through our admissions portal or in person at our administrative office. Visit our Admissions page for detailed procedures.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-school-blue mb-3">Is transportation service available?</h3>
                <p className="text-teal-600 font-medium">Yes, we provide transportation services covering most areas of the city. Contact our administrative office for route information and fees.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-school-blue mb-3">How can I schedule a campus visit?</h3>
                <p className="text-emerald-600 font-medium">Campus visits can be scheduled by contacting our admissions department via email or phone. We offer guided tours every Tuesday and Thursday between 10:00 AM and 1:00 PM.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Main Contact Component */}
      <Contact />
      
      <Footer />
    </div>
  );
};

export default ContactPage; 