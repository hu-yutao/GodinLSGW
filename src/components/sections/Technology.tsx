// Technology section component
import { Brain, Zap, RefreshCw, Shield, Cpu, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { technologyHighlights, technologyStack, innovationPoints } from '@/data/technology';

const iconMap = {
  Brain,
  Zap,
  RefreshCw,
  Shield,
  Cpu,
  Database
};

const Technology = () => {
  return (
    <section id="technology" className="py-24 bg-gray-50">
      <div className="container-custom section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            技术优势
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            基于DeepSeek大模型的前沿AI技术，重新定义法律服务的专业标准
          </p>
        </div>

        {/* DeepSeek Highlight */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-black to-gray-800 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Brain className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold">DeepSeek-V3 大模型</h3>
                </div>
                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                  671B参数超大规模语言模型，专门针对法律领域深度训练优化，
                  在法律问答、案例分析、风险评估等任务上达到专家级水平。
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">671B</div>
                    <div className="text-sm text-gray-300">参数规模</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">97.8%</div>
                    <div className="text-sm text-gray-300">准确率</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">毫秒级</div>
                    <div className="text-sm text-gray-300">响应速度</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">模型加载</span>
                      <span className="text-green-400">完成</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">法律语料训练</span>
                      <span className="text-green-400">完成</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">实时推理优化</span>
                      <span className="text-blue-400">运行中</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">知识图谱更新</span>
                      <span className="text-yellow-400">同步中</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Highlights */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologyHighlights.map((tech) => {
              const IconComponent = iconMap[tech.icon as keyof typeof iconMap];
              
              return (
                <Card key={tech.id} className="group hover:shadow-xl transition-all duration-300 border-gray-200">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-100 p-3 rounded-full mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl font-bold text-black">
                        {tech.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {tech.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="font-bold text-black">{tech.performance.accuracy}</div>
                          <div className="text-xs text-gray-500">准确率</div>
                        </div>
                        <div>
                          <div className="font-bold text-black">{tech.performance.speed}</div>
                          <div className="text-xs text-gray-500">速度</div>
                        </div>
                        <div>
                          <div className="font-bold text-black">{tech.performance.coverage}</div>
                          <div className="text-xs text-gray-500">覆盖范围</div>
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-4">
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">核心特性</h4>
                        <div className="space-y-1">
                          {tech.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-black mb-12">技术架构</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technologyStack.map((stack, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-black">
                    {stack.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="border border-gray-100 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-black">{tech.name}</h4>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {tech.version}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{tech.description}</p>
                        <div className="text-xs text-blue-600 font-medium">
                          ✨ {tech.advantage}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Innovation Points */}
        <div>
          <h3 className="text-3xl font-bold text-center text-black mb-12">创新亮点</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovationPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-3 flex-shrink-0">
                    <div className="text-sm font-bold">{index + 1}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-black mb-2">{point.title}</h4>
                    <p className="text-gray-600 mb-3 leading-relaxed">{point.description}</p>
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {point.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology; 