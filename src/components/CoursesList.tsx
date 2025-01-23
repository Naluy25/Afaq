import { useParams, useNavigate } from 'react-router-dom';
import { grades } from '../data';
import { Course } from '../types';
import { Book, ArrowLeft, Clock, Users, Star } from 'lucide-react';

export default function CoursesList() {
  const { subjectId } = useParams();
  const navigate = useNavigate();

  // Find the subject
  let subject;
  for (const grade of grades) {
    subject = grade.subjects.find(s => s.id === subjectId);
    if (subject) break;
  }
  
  if (!subject) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">عذراً</h2>
          <p className="text-gray-600">لم يتم العثور على هذه المادة</p>
        </div>
      </div>
    );
  }

  const handleCourseClick = (course: Course) => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300 mb-16">
          {/* Subject Header */}
          <div className="bg-gradient-to-r from-sky-500 to-sky-600 p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="hero-pattern absolute inset-0"></div>
            </div>
            <div className="relative">
              <div className="flex items-center mb-4">
                <div className="bg-white/10 p-4 rounded-xl">
                  <Book className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mr-6">{subject.name}</h3>
              </div>
              <p className="text-sky-100 text-lg max-w-2xl">
                اختر الكورس المناسب لمستواك في مادة {subject.name}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {subject.courses.map((course) => (
            <div 
              key={course.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1"
              onClick={() => handleCourseClick(course)}
            >
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.name}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                    course.level === 'beginner' ? 'bg-green-100 text-green-800' :
                    course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.level === 'beginner' ? 'مبتدئ' :
                     course.level === 'intermediate' ? 'متوسط' : 'متقدم'}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-sky-600 transition-colors">
                  {course.name}
                </h4>
                <p className="text-gray-600 text-lg mb-6 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 ml-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 ml-2" />
                    <span>+500 طالب</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 ml-2 text-yellow-400" />
                    <span>4.8</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-sky-500">
                    {course.price} جنيه
                  </div>
                  <div className="flex items-center text-sky-500 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>عرض التفاصيل</span>
                    <ArrowLeft className="w-6 h-6 mr-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}