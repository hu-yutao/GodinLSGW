// Hero section component
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { metrics } from '@/data/cases';

const Hero = () => {
  const highlights = [
    "24/7智能法律咨询",
    "95%准确率风险识别", 
    "80%效率提升保障",
    "10,000+企业信赖"
  ];

  return (
    <section id="home" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-gray-50/95 to-white/95 backdrop-blur-sm">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                Godin AI律师
                <br />
                <span className="gradient-text">重新定义法律服务</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                基于前沿人工智能技术，为企业和个人提供专业、高效、智能的法律解决方案。
                让法律服务更简单，让法律知识更普及。
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4">
                免费体验
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                观看演示
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">已服务超过10,000家企业客户</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-sm font-medium text-gray-400">知名合作伙伴</div>
                <div className="h-8 w-20 bg-gray-200 rounded"></div>
                <div className="h-8 w-20 bg-gray-200 rounded"></div>
                <div className="h-8 w-20 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              {/* Mock Chat Interface */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-4 border-b border-gray-100">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-gray-800">AI法律助手在线</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-gray-700">您好，我需要咨询一个合同问题...</p>
                  </div>
                  <div className="bg-black text-white rounded-lg p-3 max-w-xs ml-auto">
                    <p className="text-sm">我来为您分析这份合同的法律风险...</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-gray-700">太专业了，能详细解释一下吗？</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <span className="text-xs text-gray-500">AI正在分析...</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3 shadow-lg">
              <CheckCircle className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white rounded-full p-3 shadow-lg">
              <div className="text-xs font-bold">AI</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-black mb-2">
                  {metric.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 