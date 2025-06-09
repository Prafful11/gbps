import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  GraduationCap, 
  Calendar, 
  FileText, 
  Users, 
  CheckCircle,
  ArrowRight,
  Download,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useNavigate } from 'react-router-dom';

const AdmissionPage = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    // In a real app, this would navigate to an application form
    // For now, we'll just scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // You could also open a modal dialog or navigate to another page
    // navigate('/application-form');
  };

  const handleScheduleVisitClick = () => {
    navigate('/contact');
  };

  const admissionSteps = [
    {
      icon: FileText,
      title: "Application Submission",
      description: "Complete and submit the application form along with required documents and application fee.",
      textColor: "text-indigo-600"
    },
    {
      icon: Users,
      title: "Entrance Assessment",
      description: "Students will undergo an age-appropriate assessment to evaluate their readiness for the respective grade.",
      textColor: "text-emerald-600"
    },
    {
      icon: Calendar,
      title: "Interview",
      description: "Selected candidates and parents will be invited for an interview with school administrators.",
      textColor: "text-amber-600"
    },
    {
      icon: GraduationCap,
      title: "Admission Confirmation",
      description: "Successful candidates will receive an admission offer and must complete the enrollment process within the stipulated time.",
      textColor: "text-rose-600"
    }
  ];

  const feeStructure = [
    {
      grade: "Pre-Primary (Nursery - KG)",
      admissionFee: "₹25,000",
      termFee: "₹15,000",
      annualFee: "₹10,000",
      monthlyFee: "₹6,500"
    },
    {
      grade: "Primary (Grades 1-5)",
      admissionFee: "₹30,000",
      termFee: "₹18,000",
      annualFee: "₹12,000",
      monthlyFee: "₹7,500"
    },
    {
      grade: "Middle School (Grades 6-8)",
      admissionFee: "₹35,000",
      termFee: "₹20,000",
      annualFee: "₹15,000",
      monthlyFee: "₹8,500"
    },
    {
      grade: "Secondary (Grades 9-10)",
      admissionFee: "₹40,000",
      termFee: "₹22,000",
      annualFee: "₹18,000",
      monthlyFee: "₹9,500"
    },
    {
      grade: "Senior Secondary (Grades 11-12)",
      admissionFee: "₹45,000",
      termFee: "₹25,000",
      annualFee: "₹20,000",
      monthlyFee: "₹10,500"
    }
  ];

  const eligibilityCriteria = {
    "Pre-Primary": {
      nursery: "3-4 years as on 31st March of the academic year",
      kg: "4-5 years as on 31st March of the academic year"
    },
    "Primary": "5-10 years as on 31st March of the academic year",
    "Middle School": "10-13 years as on 31st March of the academic year",
    "Secondary": "13-15 years as on 31st March of the academic year",
    "Senior Secondary": "15-17 years as on 31st March of the academic year"
  };

  const requiredDocuments = [
    "Completed application form",
    "Birth certificate (original and photocopy)",
    "Previous school transfer certificate (if applicable)",
    "Previous 2 years' academic records",
    "Passport-sized photographs (4)",
    "Residential proof",
    "Aadhar card of the student and parents",
    "Immunization records"
  ];

  const faqs = [
    {
      question: "When does the admission process start for the new academic year?",
      answer: "The admission process typically begins in September for the following academic year. Applications are accepted until seats are filled."
    },
    {
      question: "Is there an entrance test for all grades?",
      answer: "Yes, all applicants from Grade 1 onwards are required to take an entrance assessment. For Pre-Primary admissions, we conduct an informal interaction with the child."
    },
    {
      question: "What is the student-teacher ratio at Gyan Bharti?",
      answer: "We maintain a student-teacher ratio of 20:1 in Pre-Primary and 25:1 in higher grades to ensure personalized attention to each student."
    },
    {
      question: "Are there any scholarships available?",
      answer: "Yes, we offer merit-based scholarships for academically outstanding students and means-tested financial aid for deserving candidates."
    },
    {
      question: "What are the school timings?",
      answer: "School hours are from 8:00 AM to 2:30 PM Monday through Friday. Pre-Primary students have shorter hours from 9:00 AM to 12:30 PM."
    },
    {
      question: "Is transportation facility available?",
      answer: "Yes, we provide transportation services covering most areas of the city. Additional fees apply based on distance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-school-blue py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Admissions</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join our community of learners and embark on a journey of academic excellence and holistic development.
          </p>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-school-blue mb-6">Welcome to Gyan Bharti Admissions</h2>
              <p className="text-primary-600 mb-4 font-medium">
                At Gyan Bharti Public School, we welcome students who demonstrate curiosity, creativity, and a desire to learn. 
                Our admissions process is designed to identify students who will thrive in our challenging yet nurturing educational environment.
              </p>
              <p className="text-blue-600 mb-6">
                We are committed to forming a diverse community of learners who will benefit from and contribute to our educational mission.
              </p>
              
              <div className="bg-muted p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-foreground mb-2">2024-2025 Admissions Now Open</h3>
                <p className="text-sm text-teal-700 font-medium">
                  Applications for the academic year 2024-2025 are now being accepted. 
                  Limited seats available for all grades.
                </p>
              </div>
              
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
                onClick={handleApplyClick}
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students in classroom" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Admission Process Steps */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-school-blue mb-12">Admission Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative h-full">
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-school-blue/10 flex items-center justify-center">
                    <span className="text-school-blue font-semibold">{index + 1}</span>
                  </div>
                  <CardContent className="pt-8 pb-6">
                    <div className="w-12 h-12 bg-school-blue/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-school-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-school-blue mb-3">{step.title}</h3>
                    <p className={`${step.textColor} font-medium`}>{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              className="border-school-blue text-school-blue hover:bg-school-blue hover:text-white"
              onClick={handleApplyClick}
            >
              Download Application Form
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Detailed Information Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-school-blue mb-12">Admission Information</h2>
          
          <Tabs defaultValue="eligibility" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full">
              <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="fees">Fee Structure</TabsTrigger>
              <TabsTrigger value="faq">FAQs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="eligibility" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Eligibility Criteria</CardTitle>
                  <CardDescription className="text-gray-700 font-medium">Age requirements for different grade levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold mb-3">Pre-Primary</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Nursery:</strong> {eligibilityCriteria["Pre-Primary"].nursery}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Kindergarten:</strong> {eligibilityCriteria["Pre-Primary"].kg}</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mb-3">Grade 1 to 12</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Primary (Grades 1-5):</strong> {eligibilityCriteria["Primary"]}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Middle School (Grades 6-8):</strong> {eligibilityCriteria["Middle School"]}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Secondary (Grades 9-10):</strong> {eligibilityCriteria["Secondary"]}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Senior Secondary (Grades 11-12):</strong> {eligibilityCriteria["Senior Secondary"]}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Required Documents</CardTitle>
                  <CardDescription className="text-gray-700 font-medium">Please submit the following documents with your application</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    {requiredDocuments.map((doc, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
                    <p className="text-amber-800 text-sm font-medium">
                      <strong>Note:</strong> All documents must be original with one set of photocopies for verification. 
                      International students may need to provide additional documentation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="fees" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fee Structure</CardTitle>
                  <CardDescription className="text-gray-700 font-medium">Academic Year 2024-2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Grade Level</TableHead>
                        <TableHead>Admission Fee (One-time)</TableHead>
                        <TableHead>Term Fee (Quarterly)</TableHead>
                        <TableHead>Annual Fee</TableHead>
                        <TableHead>Monthly Fee</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {feeStructure.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.grade}</TableCell>
                          <TableCell>{item.admissionFee}</TableCell>
                          <TableCell>{item.termFee}</TableCell>
                          <TableCell>{item.annualFee}</TableCell>
                          <TableCell>{item.monthlyFee}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  <div className="mt-6 p-4 bg-muted rounded-md">
                    <h4 className="font-semibold mb-2">Additional Fees</h4>
                    <ul className="space-y-1 text-sm text-gray-800">
                      <li>• Transportation: ₹2,000 - ₹4,000 per month (based on distance)</li>
                      <li>• Uniform and Books: Approximately ₹15,000 per annum</li>
                      <li>• Extracurricular Activities: Varies based on activities chosen</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="faq" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription className="text-gray-700 font-medium">Answers to common questions about our admissions process</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-gray-800">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-school-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Gyan Bharti?</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Take the first step towards providing your child with an exceptional education experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
              onClick={handleApplyClick}
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-school-blue"
              onClick={handleScheduleVisitClick}
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-school-blue mb-6">Have Questions?</h2>
            <p className="text-gray-700 mb-8">
              Our admissions team is here to help you through the application process. 
              Feel free to reach out to us with any questions you may have.
            </p>
            
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Phone className="h-6 w-6 text-school-blue mx-auto mb-2" />
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-gray-700">+91 11 2345 6789 (Ext. 101)</p>
                  </div>
                  <div className="text-center">
                    <Mail className="h-6 w-6 text-school-blue mx-auto mb-2" />
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-gray-700">admissions@gyanbharti.edu.in</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="h-6 w-6 text-school-blue mx-auto mb-2" />
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-gray-700">Mon-Fri: 9 AM - 3 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AdmissionPage; 