import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from "@/lib/utils";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'Near D.M Office Mathura Road \n Hathras, India - 204101'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 989 787 7198\n+91 844 507 7979'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@gyanbharti.edu.in\nadmissions@gyanbharti.edu.in'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon - Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 2:00 PM'
    }
  ];

  // Custom styled input with colored placeholder
  const StyledInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, ...props }, ref) => {
      return (
        <input
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-teal-600 placeholder:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
      )
    }
  );
  StyledInput.displayName = "StyledInput";

  // Custom styled textarea with colored placeholder
  const StyledTextarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
    ({ className, ...props }, ref) => {
      return (
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-indigo-600 placeholder:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      )
    }
  );
  StyledTextarea.displayName = "StyledTextarea";

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-school-blue">
            Get in Touch
          </h2>
          <p className="text-lg text-blue-700 font-medium max-w-3xl mx-auto">
            Have questions about admissions or want to schedule a visit? We'd love to hear from you. 
            Contact us today to learn more about Gyan Bharti Public School.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-school-blue mb-6">Contact Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-school-blue rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-school-blue mb-2">{info.title}</h4>
                          <p className="text-blue-700 font-medium whitespace-pre-line">{info.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Map placeholder */}
            <Card className="mt-8">
              <CardContent className="p-0">
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-school-blue mx-auto mb-4" />
                    <p className="text-indigo-600 font-medium">Interactive Map</p>
                    <p className="text-sm text-purple-600">Coming Soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-school-blue">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <StyledInput placeholder="Your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <StyledInput placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <StyledInput type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                <StyledInput type="tel" placeholder="+91 98765 43210" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <StyledInput placeholder="How can we help you?" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <StyledTextarea 
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
