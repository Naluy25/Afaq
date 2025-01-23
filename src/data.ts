import { Grade } from './types';

export const grades: Grade[] = [
  {
    id: '1',
    name: 'الصف الأول الثانوي',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    subjects: [
      {
        id: 'arabic-1',
        name: 'اللغة العربية',
        image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
        courses: [
          {
            id: 'arabic-1-term1',
            name: 'اللغة العربية - الترم الأول',
            description: 'كورس شامل في اللغة العربية للترم الأول يغطي جميع فروع المادة من نحو وأدب ونصوص وبلاغة.',
            image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
            price: 599,
            level: 'beginner',
            duration: '16 ساعة',
            instructor: 'د. أحمد محمد',
            enrollmentLink: '#',
            weeks: [
              {
                id: 1,
                title: 'مقدمة في النحو العربي',
                description: 'أساسيات النحو العربي والجملة الاسمية والفعلية',
                videoUrl: 'https://www.youtube.com/watch?v=4qwnsWeF55E',
                quizUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                homeworkUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                downloadUrl: '#'
              },
              {
                id: 2,
                title: 'البلاغة العربية',
                description: 'مقدمة في علم البلاغة: البيان والمعاني والبديع',
                videoUrl: 'https://www.youtube.com/watch?v=4qwnsWeF55E',
                quizUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                homeworkUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                downloadUrl: '#'
              }
            ]
          },
          {
            id: 'arabic-1-term2',
            name: 'اللغة العربية - الترم الثاني',
            description: 'كورس شامل في اللغة العربية للترم الثاني يغطي جميع فروع المادة مع التركيز على مهارات الكتابة والتعبير.',
            image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
            price: 599,
            level: 'intermediate',
            duration: '16 ساعة',
            instructor: 'د. محمود السيد',
            enrollmentLink: '#',
            weeks: [
              {
                id: 1,
                title: 'النحو المتقدم',
                description: 'دراسة متقدمة في النحو العربي',
                videoUrl: 'https://www.youtube.com/watch?v=4qwnsWeF55E',
                quizUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                homeworkUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                downloadUrl: '#'
              },
              {
                id: 2,
                title: 'الأدب العربي',
                description: 'دراسة في الأدب العربي الحديث',
                videoUrl: 'https://www.youtube.com/watch?v=4qwnsWeF55E',
                quizUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                homeworkUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                downloadUrl: '#'
              }
            ]
          },
          {
            id: 'arabic-1-intensive',
            name: 'الكورس المكثف - اللغة العربية',
            description: 'كورس مكثف يغطي جميع فروع المادة للطلاب المتميزين.',
            image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800',
            price: 799,
            level: 'advanced',
            duration: '24 ساعة',
            instructor: 'د. أحمد محمد',
            enrollmentLink: '#',
            weeks: [
              {
                id: 1,
                title: 'النحو المتقدم',
                description: 'دراسة متقدمة في النحو العربي',
                videoUrl: 'https://www.youtube.com/watch?v=4qwnsWeF55E',
                quizUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                homeworkUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                downloadUrl: '#'
              },
              {
                id: 2,
                title: 'الأدب العربي',
                description: 'دراسة في الأدب العربي الحديث',
                videoUrl: 'https://www.youtube.com/watch?v=4qwnsWeF55E',
                quizUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                homeworkUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                downloadUrl: '#'
              },
              {
                id: 3,
                title: 'البلاغة المتقدمة',
                description: 'دراسة متقدمة في علم البلاغة',
                videoUrl: 'https://www.youtube.com/watch?v=4qwnsWeF55E',
                quizUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                homeworkUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                downloadUrl: '#'
              }
            ]
          }
        ]
      },
      {
        id: 'english-1',
        name: 'اللغة الإنجليزية',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
        courses: [
          {
            id: 'english-1-term1',
            name: 'اللغة الإنجليزية - الترم الأول',
            description: 'كورس شامل في اللغة الإنجليزية للترم الأول يغطي جميع مهارات اللغة من قواعد ومحادثة وكتابة.',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
            price: 599,
            level: 'beginner',
            duration: '16 ساعة',
            instructor: 'Mr. John Smith',
            enrollmentLink: '#',
            weeks: [
              {
                id: 1,
                title: 'Grammar Basics',
                description: 'Present Simple and Continuous Tenses',
                videoUrl: 'https://www.youtube.com/watch?v=4qwnsWeF55E',
                quizUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                homeworkUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                downloadUrl: '#'
              },
              {
                id: 2,
                title: 'Vocabulary Building',
                description: 'Essential vocabulary for everyday use',
                videoUrl: 'https://www.youtube.com/watch?v=4qwnsWeF55E',
                quizUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                homeworkUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                downloadUrl: '#'
              }
            ]
          },
          {
            id: 'english-1-term2',
            name: 'اللغة الإنجليزية - الترم الثاني',
            description: 'كورس شامل في اللغة الإنجليزية للترم الثاني مع التركيز على مهارات المحادثة والكتابة.',
            image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
            price: 599,
            level: 'intermediate',
            duration: '16 ساعة',
            instructor: 'Mrs. Sarah Johnson',
            enrollmentLink: '#',
            weeks: [
              {
                id: 1,
                title: 'Advanced Grammar',
                description: 'Past Perfect and Future Tenses',
                videoUrl: 'https://www.youtube.com/watch?v=4qwnsWeF55E',
                quizUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                homeworkUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                downloadUrl: '#'
              },
              {
                id: 2,
                title: 'Writing Skills',
                description: 'Essay writing and formal letters',
                videoUrl: 'https://www.youtube.com/watch?v=4qwnsWeF55E',
                quizUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                homeworkUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                downloadUrl: '#'
              }
            ]
          },
          {
            id: 'english-1-conversation',
            name: 'كورس المحادثة',
            description: 'كورس متخصص في مهارات المحادثة والتحدث باللغة الإنجليزية.',
            image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
            price: 499,
            level: 'intermediate',
            duration: '12 ساعة',
            instructor: 'Mr. David Wilson',
            enrollmentLink: '#',
            weeks: [
              {
                id: 1,
                title: 'Everyday Conversations',
                description: 'Common phrases and expressions',
                videoUrl: 'https://www.youtube.com/watch?v=4qwnsWeF55E',
                quizUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                homeworkUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                downloadUrl: '#'
              },
              {
                id: 2,
                title: 'Business English',
                description: 'Professional communication skills',
                videoUrl: 'https://www.youtube.com/watch?v=4qwnsWeF55E',
                quizUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                homeworkUrl: 'https://forms.gle/HaMNX9WXccMSG3cSA',
                downloadUrl: '#'
              }
            ]
          }
        ]
      }
      // ... باقي المواد
    ]
  }
  // ... باقي الصفوف
];