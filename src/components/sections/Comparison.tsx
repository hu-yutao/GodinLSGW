// Comparison section component
import { CheckCircle, XCircle, Star, TrendingUp, Award, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { comparisonData, competitorComparison, marketAdvantages } from '@/data/comparison';

const Comparison = () => {
  const getScoreColor = (score: number) => {
    if (score >= 9) return 'text-green-600 bg-green-100';
    if (score >= 7) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };



  return (
    <section id="comparison" className="py-24 bg-white/95 backdrop-blur-sm">
      <div className="container-custom section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            为什么选择Godin AI律师？
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            与传统律师事务所和竞品平台的全方位对比，见证AI技术带来的革命性变化
          </p>
        </div>

        {/* Main Comparison Table */}
        <div className="mb-20">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-center text-black mb-12">
              服务对比一目了然
            </h3>
            
            <div className="overflow-x-auto">
              <div className="min-w-[900px]">
                {/* Header */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="font-bold text-lg text-gray-800">对比维度</div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-gray-600">传统律师事务所</div>
                    <div className="text-sm text-gray-500">人工服务</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-gray-600">其他AI平台</div>
                    <div className="text-sm text-gray-500">通用模型</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-black">Godin AI律师</div>
                    <div className="text-sm text-blue-600 font-medium">专业大模型</div>
                  </div>
                </div>

                {/* Comparison Rows */}
                {comparisonData.map((item, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 py-6 border-b border-gray-200 last:border-b-0">
                    <div className="font-semibold text-black flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      {item.category}
                    </div>
                    
                    {/* Traditional */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-gray-800">{item.traditional.value}</span>
                        <div className={`px-2 py-1 rounded-full text-xs font-bold ${getScoreColor(item.traditional.score)}`}>
                          {item.traditional.score}/10
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">{item.traditional.description}</div>
                    </div>

                    {/* Competitors */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-gray-800">{item.competitors.value}</span>
                        <div className={`px-2 py-1 rounded-full text-xs font-bold ${getScoreColor(item.competitors.score)}`}>
                          {item.competitors.score}/10
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">{item.competitors.description}</div>
                    </div>

                    {/* Godin */}
                    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-4 border-2 border-blue-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-black">{item.godin.value}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <div className={`px-2 py-1 rounded-full text-xs font-bold ${getScoreColor(item.godin.score)}`}>
                            {item.godin.score}/10
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-700 font-medium">{item.godin.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Competitor Analysis */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-black mb-12">
            竞品深度分析
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitorComparison.map((competitor, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-black">
                      {competitor.name}
                    </CardTitle>
                    <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {competitor.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Strengths */}
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        优势
                      </h4>
                      <div className="space-y-1">
                        {competitor.strengths.map((strength, idx) => (
                          <div key={idx} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            {strength}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Weaknesses */}
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                        <XCircle className="h-4 w-4 mr-2" />
                        劣势
                      </h4>
                      <div className="space-y-1">
                        {competitor.weaknesses.map((weakness, idx) => (
                          <div key={idx} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                            {weakness}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Our Advantage */}
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        我们的优势
                      </h4>
                      <p className="text-sm text-blue-700 font-medium">{competitor.vs_godin}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Market Advantages */}
        <div>
          <h3 className="text-3xl font-bold text-center text-black mb-12">
            市场竞争优势
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketAdvantages.map((advantage, index) => {
              const icons = [TrendingUp, Star, Users, Award];
              const IconComponent = icons[index % icons.length];
              
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-4 flex-shrink-0">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-black mb-3">{advantage.title}</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">{advantage.description}</p>
                      <div className="space-y-2">
                        {advantage.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-black to-gray-800 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              体验下一代AI法律服务
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              不要被传统方式束缚，让DeepSeek大模型为您提供更专业、更高效、更经济的法律解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                免费体验
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison; 