import { useParams, useNavigate } from 'react-router-dom';
import { grades } from '../data';
import { Subject } from '../types';
import SubjectCard from './SubjectCard';

export default function SubjectsList() {
  const { gradeId } = useParams();
  const navigate = useNavigate();

  const grade = grades.find(g => g.id === gradeId);
  
  if (!grade) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">عذراً</h2>
          <p className="text-gray-600">لم يتم العثور على هذا الصف</p>
        </div>
      </div>
    );
  }

  const handleSubjectClick = (subject: Subject) => {
    navigate(`/subject/${subject.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-lg bg-sky-100 text-sky-600 text-lg font-medium mb-4">
            المرحلة الدراسية
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{grade.name}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اختر المادة التي تريد دراستها من قائمة المواد المتاحة للصف {grade.name}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {grade.subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onClick={handleSubjectClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}