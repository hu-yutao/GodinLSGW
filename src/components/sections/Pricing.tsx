// Pricing section component
import { Check, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { pricingPlans } from '@/data/pricing';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container-custom section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            定价方案
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            选择最适合您的方案，开启智能法律服务之旅
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-black shadow-lg scale-105 lg:scale-110' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>推荐</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-black mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.color === 'black' ? 'text-black' : 'text-gray-700'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500 text-lg">{plan.period}</span>
                  )}
                </div>
                {plan.savings && (
                  <div className="text-sm text-green-600 font-medium">
                    {plan.savings}
                  </div>
                )}
                <CardDescription className="text-gray-600 leading-relaxed">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-black hover:bg-gray-800 text-white' 
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Contact */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">
              需要企业级定制方案？
            </h3>
            <p className="text-gray-600 mb-6">
              我们提供完全定制化的解决方案，包括私有化部署、专属模型训练、专业实施服务等
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800">
                联系销售团队
              </Button>
              <Button variant="outline" size="lg">
                预约产品演示
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-black mb-8">
            常见问题
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-black mb-2">可以随时升级或降级套餐吗？</h4>
              <p className="text-gray-600 text-sm">可以，您可以根据业务需求随时调整套餐，费用按比例计算。</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-black mb-2">是否有免费试用期？</h4>
              <p className="text-gray-600 text-sm">是的，所有付费套餐都提供14天免费试用，无需信用卡。</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-black mb-2">数据安全如何保障？</h4>
              <p className="text-gray-600 text-sm">我们采用银行级加密存储，通过ISO27001认证，确保数据安全。</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-black mb-2">支持哪些付款方式？</h4>
              <p className="text-gray-600 text-sm">支持支付宝、微信支付、银行转账、对公账户等多种付款方式。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 