import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">آفاق أكاديمي</h3>
            <p className="text-gray-400">
              منصة تعليمية رائدة تقدم أفضل المناهج التعليمية للمرحلة الثانوية
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-sky-400">الرئيسية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400">عن المنصة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400">تواصل معنا</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sky-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            <span>Developed By </span>
            <a 
              href="https://www.facebook.com/profile.php?id=100079615578194" 
              className="text-sky-400 hover:text-sky-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Luffy
            </a>
            <span> - All Copy Rights Reserved @2024</span>
          </p>
          <p className="text-gray-500 mt-2">Powered by Luffy.Media</p>
        </div>
      </div>
    </footer>
  );
}