import { Subject } from '../types';
import { Book, ArrowLeft } from 'lucide-react';

interface SubjectCardProps {
  subject: Subject;
  onClick: (subject: Subject) => void;
}

export default function SubjectCard({ subject, onClick }: SubjectCardProps) {
  return (
    <div 
      className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
      onClick={() => onClick(subject)}
    >
      <div className="relative">
        <img 
          src={subject.image} 
          alt={subject.name} 
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-6 right-6 text-white">
          <div className="bg-white/10 p-3 rounded-xl mb-4 w-fit">
            <Book className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-2">{subject.name}</h3>
          <p className="text-sm text-gray-200">
            {subject.courses.length} كورسات متاحة
          </p>
        </div>
      </div>
      <div className="p-8">
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          اكتشف محتوى مادة {subject.name} مع أفضل المدرسين وأحدث طرق التعليم
        </p>
        <div className="flex items-center text-sky-500 font-semibold group-hover:text-orange-500 transition-colors">
          <span className="text-lg">تصفح الكورسات</span>
          <ArrowLeft className="w-6 h-6 mr-3 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </div>
  );
}