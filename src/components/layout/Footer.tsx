// Footer component
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: '产品',
      links: [
        { name: '智能法律咨询', href: '#features' },
        { name: '合同审查', href: '#features' },
        { name: '文书生成', href: '#features' },
        { name: '案例检索', href: '#features' }
      ]
    },
    {
      title: '解决方案',
      links: [
        { name: '律师事务所', href: '#cases' },
        { name: '企业法务', href: '#cases' },
        { name: '金融机构', href: '#cases' },
        { name: '制造企业', href: '#cases' }
      ]
    },
    {
      title: '支持',
      links: [
        { name: '帮助中心', href: '#support' },
        { name: '用户指南', href: '#support' },
        { name: '技术文档', href: '#support' },
        { name: '服务条款', href: '#terms' }
      ]
    },
    {
      title: '公司',
      links: [
        { name: '关于我们', href: '#about' },
        { name: '新闻动态', href: '#news' },
        { name: '招聘信息', href: '#careers' },
        { name: '隐私政策', href: '#privacy' }
      ]
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container-custom section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/Godin.png" 
                alt="AI律师 Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-xl font-bold">Godin AI律师</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              基于人工智能技术的法律服务平台，为企业和个人提供专业、高效、智能的法律解决方案。
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} AI律师. 保留所有权利.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors">
                隐私政策
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                服务条款
              </a>
              <a href="#cookies" className="hover:text-white transition-colors">
                Cookie政策
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 