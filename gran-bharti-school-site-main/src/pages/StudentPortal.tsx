import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  FileText, 
  Bell, 
  Award, 
  Clock, 
  ChevronRight,
  BarChart3,
  BookMarked,
  Users,
  CalendarClock,
  CheckCircle,
  AlertCircle,
  User
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const StudentPortal = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Redirect if not authenticated
  if (!user) {
    navigate('/auth');
    return null;
  }

  // Mock data for the student portal
  const studentData = {
    name: user.user_metadata?.full_name || 'Student Name',
    grade: '10th Grade',
    section: 'A',
    rollNumber: '2023-GB-1045',
    attendancePercentage: 92,
    upcomingAssignments: [
      { id: 1, subject: 'Mathematics', title: 'Quadratic Equations', dueDate: '2023-11-15', status: 'pending' },
      { id: 2, subject: 'Science', title: 'Chemistry Lab Report', dueDate: '2023-11-18', status: 'pending' },
      { id: 3, subject: 'English', title: 'Essay on Shakespeare', dueDate: '2023-11-20', status: 'pending' }
    ],
    recentGrades: [
      { id: 1, subject: 'Mathematics', test: 'Unit Test 3', score: 92, maxScore: 100 },
      { id: 2, subject: 'Science', test: 'Physics Quiz', score: 85, maxScore: 100 },
      { id: 3, subject: 'English', test: 'Literature Review', score: 88, maxScore: 100 },
      { id: 4, subject: 'Social Studies', test: 'History Project', score: 95, maxScore: 100 }
    ],
    announcements: [
      { 
        id: 1, 
        title: 'Annual Sports Day', 
        date: '2023-11-25', 
        content: 'The annual sports day will be held on November 25th. All students are required to participate in at least one event.',
        isImportant: true
      },
      { 
        id: 2, 
        title: 'Parent-Teacher Meeting', 
        date: '2023-11-30', 
        content: 'The parent-teacher meeting for grades 9-12 is scheduled for November 30th from 9 AM to 1 PM.',
        isImportant: true
      },
      { 
        id: 3, 
        title: 'Science Exhibition', 
        date: '2023-12-10', 
        content: 'Students interested in participating in the science exhibition should submit their project proposals by November 20th.',
        isImportant: false
      }
    ],
    timetable: [
      { day: 'Monday', periods: ['English', 'Mathematics', 'Science', 'Lunch', 'Social Studies', 'Computer Science', 'Physical Education'] },
      { day: 'Tuesday', periods: ['Mathematics', 'Science', 'English', 'Lunch', 'Hindi', 'Art', 'Library'] },
      { day: 'Wednesday', periods: ['Science', 'Social Studies', 'Mathematics', 'Lunch', 'English', 'Music', 'Computer Science'] },
      { day: 'Thursday', periods: ['Social Studies', 'English', 'Hindi', 'Lunch', 'Science', 'Mathematics', 'Games'] },
      { day: 'Friday', periods: ['Computer Science', 'Mathematics', 'English', 'Lunch', 'Science', 'Social Studies', 'Club Activities'] }
    ],
    subjects: [
      { name: 'Mathematics', teacher: 'Mrs. Sharma', averageScore: 90 },
      { name: 'Science', teacher: 'Mr. Verma', averageScore: 85 },
      { name: 'English', teacher: 'Ms. Gupta', averageScore: 88 },
      { name: 'Social Studies', teacher: 'Mr. Singh', averageScore: 92 },
      { name: 'Hindi', teacher: 'Mrs. Yadav', averageScore: 87 },
      { name: 'Computer Science', teacher: 'Mr. Kumar', averageScore: 95 }
    ]
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user || !user.user_metadata?.full_name) return 'S';
    const nameParts = user.user_metadata.full_name.split(' ');
    if (nameParts.length >= 2) {
      return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
    }
    return nameParts[0][0].toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-1/4 space-y-6">
            {/* Student Profile Card */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16 border-2 border-white">
                    <AvatarFallback className="bg-emerald-700 text-xl">{getUserInitials()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold">{studentData.name}</h2>
                    <p className="text-emerald-100">Class {studentData.grade} - {studentData.section}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Roll Number</span>
                    <span className="font-medium">{studentData.rollNumber}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Attendance</span>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{studentData.attendancePercentage}%</span>
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-full" 
                          style={{ width: `${studentData.attendancePercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Menu */}
            <Card>
              <CardContent className="p-3">
                <nav className="space-y-1">
                  <Button 
                    variant="ghost" 
                    className={cn(
                      "w-full justify-start text-left font-normal", 
                      activeTab === 'dashboard' && "bg-emerald-50 text-emerald-700 font-medium"
                    )}
                    onClick={() => setActiveTab('dashboard')}
                  >
                    <BarChart3 className="h-5 w-5 mr-3" />
                    Dashboard
                  </Button>
                  <Button 
                    variant="ghost" 
                    className={cn(
                      "w-full justify-start text-left font-normal", 
                      activeTab === 'assignments' && "bg-emerald-50 text-emerald-700 font-medium"
                    )}
                    onClick={() => setActiveTab('assignments')}
                  >
                    <FileText className="h-5 w-5 mr-3" />
                    Assignments
                  </Button>
                  <Button 
                    variant="ghost" 
                    className={cn(
                      "w-full justify-start text-left font-normal", 
                      activeTab === 'grades' && "bg-emerald-50 text-emerald-700 font-medium"
                    )}
                    onClick={() => setActiveTab('grades')}
                  >
                    <Award className="h-5 w-5 mr-3" />
                    Grades
                  </Button>
                  <Button 
                    variant="ghost" 
                    className={cn(
                      "w-full justify-start text-left font-normal", 
                      activeTab === 'timetable' && "bg-emerald-50 text-emerald-700 font-medium"
                    )}
                    onClick={() => setActiveTab('timetable')}
                  >
                    <Calendar className="h-5 w-5 mr-3" />
                    Timetable
                  </Button>
                  <Button 
                    variant="ghost" 
                    className={cn(
                      "w-full justify-start text-left font-normal", 
                      activeTab === 'subjects' && "bg-emerald-50 text-emerald-700 font-medium"
                    )}
                    onClick={() => setActiveTab('subjects')}
                  >
                    <BookOpen className="h-5 w-5 mr-3" />
                    Subjects
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-blue-100">
                        <BookMarked className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Courses</p>
                        <h3 className="text-xl font-bold">{studentData.subjects.length}</h3>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-emerald-100">
                        <FileText className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Assignments</p>
                        <h3 className="text-xl font-bold">{studentData.upcomingAssignments.length}</h3>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-amber-100">
                        <Users className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Attendance</p>
                        <h3 className="text-xl font-bold">{studentData.attendancePercentage}%</h3>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-purple-100">
                        <Award className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Avg. Grade</p>
                        <h3 className="text-xl font-bold">
                          {Math.round(
                            studentData.subjects.reduce((acc, subject) => acc + subject.averageScore, 0) / 
                            studentData.subjects.length
                          )}%
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Upcoming Assignments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CalendarClock className="h-5 w-5 mr-2 text-emerald-600" />
                      Upcoming Assignments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {studentData.upcomingAssignments.map((assignment) => (
                        <div key={assignment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={cn(
                              "p-2 rounded-full",
                              assignment.subject === "Mathematics" && "bg-blue-100",
                              assignment.subject === "Science" && "bg-green-100",
                              assignment.subject === "English" && "bg-purple-100"
                            )}>
                              <FileText className={cn(
                                "h-5 w-5",
                                assignment.subject === "Mathematics" && "text-blue-600",
                                assignment.subject === "Science" && "text-green-600",
                                assignment.subject === "English" && "text-purple-600"
                              )} />
                            </div>
                            <div>
                              <h4 className="font-medium">{assignment.title}</h4>
                              <p className="text-sm text-gray-500">{assignment.subject}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">Due: {assignment.dueDate}</p>
                            <Badge variant="outline" className="mt-1">
                              {assignment.status === 'pending' ? 'Pending' : 'Completed'}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t px-6 py-4">
                    <Button variant="ghost" className="w-full text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
                      View All Assignments <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Announcements */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Bell className="h-5 w-5 mr-2 text-emerald-600" />
                      School Announcements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {studentData.announcements.map((announcement) => (
                        <div key={announcement.id} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium flex items-center">
                              {announcement.isImportant && (
                                <AlertCircle className="h-4 w-4 text-amber-500 mr-1" />
                              )}
                              {announcement.title}
                            </h4>
                            <Badge variant={announcement.isImportant ? "destructive" : "secondary"} className="text-xs">
                              {announcement.isImportant ? 'Important' : 'Info'}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{announcement.content}</p>
                          <p className="text-xs text-gray-500">Date: {announcement.date}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Assignments Tab */}
            {activeTab === 'assignments' && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-800">Assignments</h1>
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Assignments</CardTitle>
                    <CardDescription>Your pending assignments and deadlines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {studentData.upcomingAssignments.map((assignment) => (
                        <div key={assignment.id} className="border-b pb-4 last:border-0 last:pb-0">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium">{assignment.title}</h3>
                            <Badge>{assignment.subject}</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Due: {assignment.dueDate}</span>
                            <Button size="sm" variant="outline" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50">
                              Submit Assignment
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Past Assignments</CardTitle>
                    <CardDescription>Your completed and graded assignments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-b pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">History Essay</h3>
                          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                            Completed
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Submitted: Nov 5, 2023</span>
                          <span className="font-medium text-emerald-600">Grade: 90/100</span>
                        </div>
                      </div>
                      
                      <div className="border-b pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">Mathematics Problem Set</h3>
                          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                            Completed
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Submitted: Oct 28, 2023</span>
                          <span className="font-medium text-emerald-600">Grade: 95/100</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">Science Lab Report</h3>
                          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                            Completed
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Submitted: Oct 20, 2023</span>
                          <span className="font-medium text-emerald-600">Grade: 88/100</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Grades Tab */}
            {activeTab === 'grades' && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-800">Academic Performance</h1>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Grades</CardTitle>
                    <CardDescription>Your latest test and assignment scores</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {studentData.recentGrades.map((grade) => (
                        <div key={grade.id} className="border-b pb-4 last:border-0 last:pb-0">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-medium">{grade.test}</h3>
                              <p className="text-sm text-gray-500">{grade.subject}</p>
                            </div>
                            <div className="text-right">
                              <span className="font-bold">{grade.score}/{grade.maxScore}</span>
                              <p className="text-sm text-gray-500">
                                {Math.round((grade.score / grade.maxScore) * 100)}%
                              </p>
                            </div>
                          </div>
                          <Progress 
                            value={(grade.score / grade.maxScore) * 100} 
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Subject Performance</CardTitle>
                    <CardDescription>Your average scores by subject</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {studentData.subjects.map((subject, index) => (
                        <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-medium">{subject.name}</h3>
                              <p className="text-sm text-gray-500">Teacher: {subject.teacher}</p>
                            </div>
                            <div className="text-right">
                              <span className="font-bold">{subject.averageScore}%</span>
                            </div>
                          </div>
                          <Progress 
                            value={subject.averageScore} 
                            className={cn(
                              "h-2",
                              subject.averageScore >= 90 && "bg-emerald-500",
                              subject.averageScore >= 80 && subject.averageScore < 90 && "bg-blue-500",
                              subject.averageScore >= 70 && subject.averageScore < 80 && "bg-amber-500",
                              subject.averageScore < 70 && "bg-red-500"
                            )}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Timetable Tab */}
            {activeTab === 'timetable' && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-800">Class Timetable</h1>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Schedule</CardTitle>
                    <CardDescription>Your class schedule for the week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border px-4 py-2 text-left">Day</th>
                            <th className="border px-4 py-2 text-left">1st Period</th>
                            <th className="border px-4 py-2 text-left">2nd Period</th>
                            <th className="border px-4 py-2 text-left">3rd Period</th>
                            <th className="border px-4 py-2 text-left">4th Period</th>
                            <th className="border px-4 py-2 text-left">5th Period</th>
                            <th className="border px-4 py-2 text-left">6th Period</th>
                            <th className="border px-4 py-2 text-left">7th Period</th>
                          </tr>
                        </thead>
                        <tbody>
                          {studentData.timetable.map((day, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="border px-4 py-2 font-medium">{day.day}</td>
                              {day.periods.map((period, periodIndex) => (
                                <td 
                                  key={periodIndex} 
                                  className={cn(
                                    "border px-4 py-2",
                                    period === 'Lunch' && "bg-gray-100 text-gray-500 italic"
                                  )}
                                >
                                  {period}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Subjects Tab */}
            {activeTab === 'subjects' && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-800">My Subjects</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {studentData.subjects.map((subject, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <CardTitle>{subject.name}</CardTitle>
                        <CardDescription>Teacher: {subject.teacher}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-500">Average Score</span>
                          <span className="font-medium">{subject.averageScore}%</span>
                        </div>
                        <Progress 
                          value={subject.averageScore} 
                          className={cn(
                            "h-2",
                            subject.averageScore >= 90 && "bg-emerald-500",
                            subject.averageScore >= 80 && subject.averageScore < 90 && "bg-blue-500",
                            subject.averageScore >= 70 && subject.averageScore < 80 && "bg-amber-500",
                            subject.averageScore < 70 && "bg-red-500"
                          )}
                        />
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentPortal; 