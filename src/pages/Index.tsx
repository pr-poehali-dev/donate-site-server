import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationMessage, setDonationMessage] = useState('');

  const stats = {
    totalDonations: 15420,
    thisMonth: 3240,
    topDonator: 'GamerKing2024',
    goal: 20000
  };

  const recentDonations = [
    { user: 'ProGamer_88', amount: 250, message: 'Отличный стрим!', time: '2 мин назад' },
    { user: 'NeonWarrior', amount: 100, message: 'За победу!', time: '5 мин назад' },
    { user: 'CyberQueen', amount: 500, message: 'Продолжай в том же духе!', time: '12 мин назад' },
    { user: 'PixelHunter', amount: 75, message: 'GG WP', time: '18 мин назад' }
  ];

  const goalProgress = (stats.totalDonations / stats.goal) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-purple to-gaming-dark p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-neon-green to-neon-purple bg-clip-text animate-glow mb-4">
            GAMING DONATIONS
          </h1>
          <p className="text-xl text-gray-300">Поддержи стример и стань частью игрового сообщества</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-1">
            <Card className="gaming-card border-neon-green neon-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-neon-green flex items-center gap-2">
                  <Icon name="Zap" className="text-neon-green" />
                  Отправить донат
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Сумма (₽)</label>
                  <Input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="100"
                    className="bg-black/50 border-neon-green text-white placeholder-gray-400"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {[50, 100, 250].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      onClick={() => setDonationAmount(amount.toString())}
                      className="border-neon-purple text-neon-purple hover:bg-neon-purple/20"
                    >
                      {amount}₽
                    </Button>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Сообщение</label>
                  <Input
                    value={donationMessage}
                    onChange={(e) => setDonationMessage(e.target.value)}
                    placeholder="Твое сообщение стримеру..."
                    className="bg-black/50 border-neon-green text-white placeholder-gray-400"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-blue hover:to-neon-green text-black font-bold text-lg py-6 animate-neon-pulse"
                  disabled={!donationAmount}
                >
                  <Icon name="Heart" className="mr-2" />
                  ПОДДЕРЖАТЬ СТРИМЕР
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Stats Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="gaming-card border-neon-purple">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-neon-green">{stats.totalDonations.toLocaleString()}₽</div>
                  <div className="text-sm text-gray-400">Всего собрано</div>
                </CardContent>
              </Card>
              
              <Card className="gaming-card border-neon-blue">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-neon-blue">{stats.thisMonth.toLocaleString()}₽</div>
                  <div className="text-sm text-gray-400">В этом месяце</div>
                </CardContent>
              </Card>
              
              <Card className="gaming-card border-neon-purple">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-neon-purple">{stats.topDonator}</div>
                  <div className="text-sm text-gray-400">Топ донатер</div>
                </CardContent>
              </Card>
              
              <Card className="gaming-card border-neon-green">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-neon-green">{Math.round(goalProgress)}%</div>
                  <div className="text-sm text-gray-400">До цели</div>
                </CardContent>
              </Card>
            </div>

            {/* Goal Progress */}
            <Card className="gaming-card border-neon-green">
              <CardHeader>
                <CardTitle className="text-xl text-neon-green flex items-center gap-2">
                  <Icon name="Target" />
                  Цель месяца: {stats.goal.toLocaleString()}₽
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress 
                  value={goalProgress} 
                  className="h-4 bg-black/50 [&>div]:bg-gradient-to-r [&>div]:from-neon-green [&>div]:to-neon-blue"
                />
                <div className="text-center mt-2 text-gray-300">
                  Осталось: {(stats.goal - stats.totalDonations).toLocaleString()}₽
                </div>
              </CardContent>
            </Card>

            {/* Recent Donations */}
            <Card className="gaming-card border-neon-purple">
              <CardHeader>
                <CardTitle className="text-xl text-neon-purple flex items-center gap-2">
                  <Icon name="Activity" />
                  Последние донаты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentDonations.map((donation, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-neon-green to-neon-purple rounded-full flex items-center justify-center">
                        <Icon name="User" size={16} />
                      </div>
                      <div>
                        <div className="font-bold text-white">{donation.user}</div>
                        <div className="text-sm text-gray-400">{donation.message}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-neon-green">{donation.amount}₽</div>
                      <div className="text-xs text-gray-400">{donation.time}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Analytics Chart Placeholder */}
            <Card className="gaming-card border-neon-blue">
              <CardHeader>
                <CardTitle className="text-xl text-neon-blue flex items-center gap-2">
                  <Icon name="BarChart3" />
                  Аналитика доходов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-black/30 rounded-lg flex items-center justify-center border border-gray-700">
                  <div className="text-center text-gray-400">
                    <Icon name="TrendingUp" size={48} className="mx-auto mb-4 text-neon-blue" />
                    <div className="text-lg">График доходов</div>
                    <div className="text-sm">Интерактивная аналитика и статистика</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Gaming Elements */}
        <div className="fixed bottom-4 right-4 space-y-2">
          <div className="flex items-center gap-2 bg-black/80 px-4 py-2 rounded-full border border-neon-green">
            <Icon name="Users" className="text-neon-green" />
            <span className="text-white font-bold">1,247 зрителей</span>
          </div>
          <div className="flex items-center gap-2 bg-black/80 px-4 py-2 rounded-full border border-neon-purple">
            <Icon name="Gamepad2" className="text-neon-purple" />
            <span className="text-white font-bold">Live</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;