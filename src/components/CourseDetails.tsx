import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Course, Week } from '../types';
import { PlayCircle, FileText, CheckSquare, Download, Clock, Users, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { grades } from '../data';

export default function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeWeek, setActiveWeek] = useState<number | null>(null);
  const [activeContent, setActiveContent] = useState<'video' | 'quiz' | null>(null);

  // Find the course and its weeks
  let course: Course | undefined;
  let weeks: Week[] = [];

  for (const grade of grades) {
    for (const subject of grade.subjects) {
      const foundCourse = subject.courses.find(c => c.id === courseId);
      if (foundCourse) {
        course = foundCourse;
        weeks = foundCourse.weeks; // استخدام أسابيع الكورس بدلاً من أسابيع المادة
        break;
      }
    }
    if (course) break;
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">عذراً</h2>
          <p className="text-gray-600">لم يتم العثور على هذا الكورس</p>
        </div>
      </div>
    );
  }

  const courseFeatures = [
    { icon: <Clock className="w-5 h-5" />, text: course.duration },
    { icon: <Users className="w-5 h-5" />, text: '+500 طالب مسجل' },
    { icon: <Star className="w-5 h-5" />, text: 'تقييم 4.8 من 5' },
  ];

  const handleFreeTrial = () => {
    setActiveWeek(0);
    setActiveContent('video');
  };

  const renderContent = (week: Week) => {
    if (activeContent === 'video' && week.videoUrl) {
      return (
        <div className="mt-4">
          <iframe
            width="100%"
            height="400"
            src={week.videoUrl.replace('watch?v=', 'embed/')}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }

    if (activeContent === 'quiz' && week.quizUrl) {
      return (
        <div className="mt-4">
          <iframe
            src={week.quizUrl}
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            جاري تحميل النموذج...
          </iframe>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <img 
            src={course.image} 
            alt={course.name} 
            className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-6 transform hover:scale-105 transition-all duration-300"
          />
          <div className="grid grid-cols-3 gap-4">
            {courseFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg hover:bg-sky-50 transition-all duration-300">
                <div className="text-sky-500 mb-2">{feature.icon}</div>
                <span className="text-sm text-gray-600">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
              course.level === 'beginner' ? 'bg-green-100 text-green-800' :
              course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {course.level === 'beginner' ? 'مبتدئ' :
               course.level === 'intermediate' ? 'متوسط' : 'متقدم'}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{course.name}</h2>
          <p className="text-gray-600 mb-4 text-lg leading-relaxed">{course.description}</p>
          <div className="mb-4">
            <span className="text-gray-600">المدرس: </span>
            <span className="font-semibold text-gray-800">{course.instructor}</span>
          </div>
          <div className="mb-8">
            <div className="text-3xl font-bold text-sky-500 mb-2">
              {course.price} جنيه
            </div>
            <div className="text-gray-500">اشتراك لمدة عام كامل</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={course.enrollmentLink || '#'}
              className="flex-1 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-4 rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all shadow-lg hover:shadow-xl text-lg font-semibold text-center transform hover:scale-105"
            >
              اشترك الآن
            </a>
            <button 
              onClick={handleFreeTrial}
              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105"
            >
              جرب الدرس الأول مجاناً
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">محتوى الكورس</h3>
        {weeks.map((week, index) => (
          <div key={week.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
            <div 
              className={`p-6 cursor-pointer hover:bg-gray-50 transition-colors ${
                activeWeek === index ? 'bg-gray-50' : ''
              }`}
              onClick={() => setActiveWeek(activeWeek === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">الأسبوع {index + 1}</h4>
                  <p className="text-gray-600 mt-1">{week.title}</p>
                </div>
                {activeWeek === index ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
            </div>

            {activeWeek === index && (
              <div className="p-6 border-t border-gray-200">
                <p className="text-gray-600 mb-4">{week.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => setActiveContent(activeContent === 'video' ? null : 'video')}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-sky-50 transition-colors group"
                  >
                    <PlayCircle className="w-6 h-6 text-sky-500 group-hover:text-sky-600" />
                    <span className="text-gray-700 group-hover:text-sky-600 mr-3">مشاهدة الدرس</span>
                  </button>
                  <button
                    onClick={() => setActiveContent(activeContent === 'quiz' ? null : 'quiz')}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors group"
                  >
                    <CheckSquare className="w-6 h-6 text-green-500 group-hover:text-green-600" />
                    <span className="text-gray-700 group-hover:text-green-600 mr-3">اختبار الأسبوع</span>
                  </button>
                  {week.homeworkUrl && (
                    <a 
                      href={week.homeworkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors group"
                    >
                      <FileText className="w-6 h-6 text-orange-500 group-hover:text-orange-600" />
                      <span className="text-gray-700 group-hover:text-orange-600 mr-3">الواجب المنزلي</span>
                    </a>
                  )}
                  {week.downloadUrl && (
                    <a 
                      href={week.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-purple-50 transition-colors group"
                    >
                      <Download className="w-6 h-6 text-purple-500 group-hover:text-purple-600" />
                      <span className="text-gray-700 group-hover:text-purple-600 mr-3">ملفات إضافية</span>
                    </a>
                  )}
                </div>
                {renderContent(week)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}