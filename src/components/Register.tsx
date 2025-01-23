import { Info } from 'lucide-react';

export default function Register() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-sky-500 to-sky-600">
              <h2 className="text-3xl font-bold text-white mb-2">تسجيل في منصة آفاق أكاديمي</h2>
              <p className="text-sky-100">سجل الآن واحصل على تجربة تعليمية متميزة</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">تعليمات المنصة</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-sky-500 mt-1 ml-2" />
                    <p className="text-gray-600">المنصة تعمل على متصفحات جوجل كروم وفايرفوكس فقط</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-sky-500 mt-1 ml-2" />
                    <p className="text-gray-600">يمكن استخدام المنصة من الموبايل أو الكمبيوتر فقط</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-sky-500 mt-1 ml-2" />
                    <p className="text-gray-600">كل فيديو يمكن مشاهدته 5 مرات فقط خلال السنة الدراسية</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-sky-500 mt-1 ml-2" />
                    <p className="text-gray-600">يجب الالتزام بحل الواجبات والامتحانات في موعدها</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-sky-500 mt-1 ml-2" />
                    <p className="text-gray-600">المنصة متاحة حتى نهاية العام الدراسي</p>
                  </div>
                </div>
              </div>

              <div>
                <iframe
                  src="https://forms.gle/HaMNX9WXccMSG3cSA"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                >
                  جاري تحميل النموذج...
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}