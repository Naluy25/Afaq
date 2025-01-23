import { useNavigate } from 'react-router-dom';
import { grades } from '../data';
import GradeCard from './GradeCard';
import { Grade } from '../types';

export default function GradesList() {
  const navigate = useNavigate();

  const handleGradeClick = (grade: Grade) => {
    navigate(`/grade/${grade.id}`);
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">اختر المرحلة الدراسية</h2>
          <p className="text-xl text-gray-600">اكتشف المناهج الدراسية المتكاملة لكل صف</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {grades.map((grade) => (
            <GradeCard
              key={grade.id}
              grade={grade}
              onClick={handleGradeClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}