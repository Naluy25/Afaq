export interface Course {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  enrollmentLink?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  instructor: string;
  weeks: Week[];
}

export interface Week {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  quizUrl: string;
  homeworkUrl: string;
  downloadUrl: string;
}

export interface Subject {
  id: string;
  name: string;
  image: string;
  courses: Course[];
}

export type GradeLevel = '1' | '2' | '3';

export interface Grade {
  id: GradeLevel;
  name: string;
  image: string;
  subjects: Subject[];
}