// Features section component
import { MessageSquare, FileText, PenTool, Search, Shield, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { features } from '@/data/features';

const iconMap = {
  MessageSquare,
  FileText,
  PenTool,
  Search,
  Shield,
  BookOpen
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white/95 backdrop-blur-sm">
      <div className="container-custom section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            核心功能
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            基于前沿AI技术，为您提供全方位的智能法律服务解决方案
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <Card key={feature.id} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-gray-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-black group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  
                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {feature.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Use Cases */}
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3">应用场景</h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.useCases.map((useCase, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              体验全套AI法律服务
            </h3>
            <p className="text-gray-600 mb-6">
              立即开始免费试用，体验智能化法律服务带来的效率提升
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                立即体验
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                预约演示
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 