export interface TrainingCourse {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  duration: string;
  targetAudience: string;
  maxStudents: number;
  highlight: string;
  description: string;
  modules: string[];
  includes: string[];
  nextDate: string;
  investmentNote: string;
}

export interface ClinicalProcedure {
  id: string;
  name: string;
  category: 'facial' | 'corporal' | 'rejuvenescimento' | 'tecnologia';
  summary: string;
  benefit: string;
  duration: string;
  downtime: string;
  idealFor: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  city: string;
  type: 'student' | 'patient';
  comment: string;
  rating: number;
  avatarText: string;
  metricHighlight?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'training' | 'clinic';
}
