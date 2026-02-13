import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Heart, 
  Star, 
  CheckCircle, 
  Phone, 
  Mail, 
  MessageCircle,
  Target,
  Gift,
  Clock,
  Users
} from 'lucide-react';
import './App.css';

// 画像のimport
import elegantCookingClass from './assets/elegant_cooking_class.jpeg';
import luxurySweetsBox from './assets/luxury_sweets_box.jpg';
import elegantSweetsGift from './assets/elegant_sweets_gift.jpg';
import premiumCookingClass from './assets/premium_cooking_class.jpg';
import professionalKitchen from './assets/professional_kitchen.jpg';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-luxury-cream">
      {/* ヘッダー・ファーストビュー */}
      <section className="luxury-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* 信頼バッジ */}
            <div className="mb-8">
              <span className="luxury-badge inline-block">
                料理教室歴20年 × 1000人以上の生徒様に愛され続けて
              </span>
            </div>

            {/* メインタイトル */}
            <h1 className="luxury-heading text-4xl md:text-6xl mb-6 leading-tight">
              あなたの<span className="text-luxury-gold">『好き』</span>を<br />
              美しい焼き菓子で<br />
              <span className="text-luxury-gold">お仕事</span>にしませんか？
            </h1>

            {/* サブタイトル */}
            <p className="luxury-body text-xl md:text-2xl mb-12 text-muted-brown leading-relaxed">
              30種類の商用レシピと共に、あなただけの魅力を発見し、<br />
              心に響く焼き菓子ストーリーを紡ぎましょう
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                className="luxury-button text-lg px-8 py-4"
                onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                💝 まずは気軽にお話ししませんか？
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="luxury-button-outline text-lg px-8 py-4"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                詳細を見る
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: "👥", number: "1000人以上", text: "が受講" },
                { icon: "⭐", number: "満足度98%", text: "の実績" },
                { icon: "✅", number: "商用利用可能", text: "なレシピ" },
                { icon: "🎁", number: "3期生", text: "募集中" }
              ].map((stat, index) => (
                <div key={index} className="luxury-card p-6 hover-lift">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="luxury-subheading text-lg font-bold text-luxury-brown mb-1">{stat.number}</div>
                  <div className="luxury-body text-sm text-muted-brown">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 課題提起 */}
      <section className="py-20 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="elegant-font text-3xl md:text-4xl font-bold text-warm-brown mb-12">
              こんなお悩みはありませんか？
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <img 
                src={elegantSweetsGift} 
                alt="エレガントなスイーツギフト" 
                className="w-full h-64 object-cover rounded-lg card-shadow"
              />
              
              <div className="space-y-6 text-left">
                {[
                  "料理教室を開きたいが、オリジナルレシピに自信がない",
                  "焼き菓子を販売したいが、商用利用可能なレシピが見つからない",
                  "自分らしさを活かした教室運営の方法がわからない",
                  "プロレベルの技術を効率的に学びたい",
                  "安定した収益を得られる事業モデルを構築したい",
                  "個人の魅力を活かしたブランディングができない"
                ].map((problem, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-warm-brown rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-muted-brown">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-warm-beige rounded-lg p-8 card-shadow">
              <h3 className="text-2xl font-bold text-warm-brown mb-4">
                そのお悩み、20年の実績を持つ当講座が解決いたします。
              </h3>
              <Button 
                className="bg-elegant-brown hover:bg-amber-800 text-white px-8 py-3"
                onClick={() => scrollToSection('features')}
              >
                解決方法を見る
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section id="features" className="py-20 bg-warm-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="elegant-font text-3xl md:text-4xl font-bold text-warm-brown mb-8">
              魅力 × 焼き菓子 × オリジナルデザイン
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-lg text-muted-brown">
              3つの要素が織りなす、あなただけの成功ストーリー
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src={luxurySweetsBox} 
                  alt="高級スイーツボックス" 
                  className="w-full h-64 object-cover rounded-lg card-shadow"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-warm-brown" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-warm-brown mb-4">自然と発酵の美学</h3>
              <p className="text-muted-brown">
                グルテンフリー・乳製品不使用（一部除く）の身体に優しい30種類の商用可能レシピ
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src={premiumCookingClass} 
                  alt="プレミアム料理教室" 
                  className="w-full h-64 object-cover rounded-lg card-shadow"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-warm-brown" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-warm-brown mb-4">個人の魅力発見メソッド</h3>
              <p className="text-muted-brown">
                20年間で1000人以上を指導してきた独自の魅力発見・ブランディング手法
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src={elegantCookingClass} 
                  alt="エレガントな料理教室" 
                  className="w-full h-64 object-cover rounded-lg card-shadow"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-warm-brown" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-warm-brown mb-4">完全商用サポート</h3>
              <p className="text-muted-brown">
                レシピ・パッケージデザイン・販売戦略までトータルサポート
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 講師紹介 */}
      <section id="instructor" className="py-20 bg-warm-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="elegant-font text-3xl md:text-4xl font-bold text-warm-brown mb-8">講師紹介</h2>
            <div className="section-divider mb-8"></div>
            <p className="text-lg text-muted-brown max-w-2xl mx-auto">
              料理教室歴20年、延べ1000人以上の生徒様を指導<br />
              自然と発酵の美学を追求し続ける料理研究家
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src={professionalKitchen} 
                alt="プロフェッショナルなキッチン" 
                className="w-full h-96 object-cover rounded-lg card-shadow"
              />
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="elegant-font text-4xl font-bold text-warm-brown mb-2">20年</div>
                  <div className="text-muted-brown">料理教室運営</div>
                </div>
                <div className="text-center">
                  <div className="elegant-font text-4xl font-bold text-warm-brown mb-2">1000人+</div>
                  <div className="text-muted-brown">指導実績</div>
                </div>
                <div className="text-center">
                  <div className="elegant-font text-4xl font-bold text-warm-brown mb-2">3期</div>
                  <div className="text-muted-brown">連続満席</div>
                </div>
                <div className="text-center">
                  <div className="elegant-font text-4xl font-bold text-warm-brown mb-2">90%</div>
                  <div className="text-muted-brown">6ヶ月以内収益化</div>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-gold pl-6 italic text-muted-brown">
                「人は誰でも美しい魅力を持っています。その魅力を焼き菓子という形で表現し、
                多くの方に喜んでいただける。そんな素晴らしい循環を一緒に作りましょう。」
              </blockquote>
            </div>
          </div>

          {/* 講座への想い */}
          <div className="bg-white rounded-lg p-8 card-shadow mt-12">
            <h3 className="elegant-font text-2xl font-bold text-warm-brown mb-6 text-center">講座への想い</h3>
            <div className="prose prose-lg max-w-none text-muted-brown leading-relaxed">
              <p className="mb-4">
                わたしは、美しいものがすき。幸運なことに全部のお仕事が美しいことを大切にするのがお仕事でした。
                美しいものを見せて頂く経験もたくさん積み重ね、自然と身に付き、フリーになってからもたくさんのイベント、講座、
                ものつくり、外部からのお仕事も数えきれないほど作ってきました。
              </p>
              <p className="mb-4">
                特別な勉強はしていませんが、写真、パッケージ、キャッチコピー。
                好きだけでいろいろ作って30年。ワオ(笑)
              </p>
              <p className="mb-4">
                ダイヤモンドだって磨かなきゃただの石だし、育てたじゃがいもを泥付きのまま道に置くより、
                「とれたてのジャガイモですよ～！」って、きれいに洗って一言添えてかごに並べたら、いかがですか？
              </p>
              <p className="mb-4">
                誰かを思ってデザインすることは、そんなにむずかしいことではありません。
                そのやり方はわたしはたくさん試してきました。だから、そのやり方で作った作品をお渡ししたいとおもっています。
              </p>
              <p className="mb-4">
                あなたらしさは必ずあります。あなたにしかできないことも必ずあります。
                なにもないとおもっているのなら、比べる相手をまちがえている...
              </p>
              <p className="mb-4">
                ちいさくていいんです。わたしもみなさんもパズルのピース。必ずだれかの助けになると信じています。
              </p>
              <p className="text-center font-semibold text-warm-brown">
                この講座は、情報を詰め込む内容だけではありません。<br />
                わたしらしい表現デザインを知ること。簡単じゃないけど、すごくおもしろいんだから～♪
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section id="pricing" className="py-20 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="elegant-font text-3xl md:text-4xl font-bold text-warm-brown mb-8">コース・料金</h2>
            <div className="section-divider mb-8"></div>
            <p className="text-lg text-muted-brown">
              あなたの目標に合わせて選べる3つのコース
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* スタンダードコース */}
            <Card className="hover-lift card-shadow border-2 border-border">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">スタンダードコース</h3>
                  <div className="text-4xl font-bold text-warm-brown mb-2">¥178,000</div>
                  <div className="text-sm text-muted-brown">税込</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "全カリキュラム受講",
                    "商用可能レシピ30種",
                    "個別魅力発見セッション",
                    "パッケージデザインサポート",
                    "6ヶ月間のメールサポート"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-elegant-brown mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-elegant-brown hover:bg-amber-800 text-white py-3 text-lg font-semibold"
                  onClick={() => scrollToSection('consultation')}
                >
                  このコースを選ぶ
                </Button>
              </CardContent>
            </Card>

            {/* プレミアムコース */}
            <Card className="relative hover-lift card-shadow border-2 border-amber-200 bg-white">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  人気No.1
                </span>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">プレミアムコース</h3>
                  <div className="text-4xl font-bold text-warm-brown mb-2">¥298,000</div>
                  <div className="text-sm text-muted-brown">税込</div>
                </div>
              
              <ul className="space-y-3 mb-8">
                {[
                  "スタンダードコース内容",
                  "個別事業構築サポート",
                  "月1回の個別コンサルティング（6回）",
                  "販売戦略・マーケティング指導",
                  "継続サポート（12ヶ月）"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-elegant-brown mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full bg-elegant-brown hover:bg-amber-800 text-white py-3 text-lg font-semibold"
                onClick={() => scrollToSection('consultation')}
              >
                このコースを選ぶ
              </Button>
              </CardContent>
            </Card>

            {/* エグゼクティブコース */}
            <Card className="hover-lift card-shadow border-2 border-border">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">エグゼクティブコース</h3>
                  <div className="text-4xl font-bold text-warm-brown mb-2">¥398,000</div>
                  <div className="text-sm text-muted-brown">税込</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "プレミアムコース内容",
                    "完全マンツーマン指導",
                    "事業計画書作成サポート",
                    "販売システム構築支援",
                    "無制限サポート（12ヶ月）"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-elegant-brown mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-elegant-brown hover:bg-amber-800 text-white py-3 text-lg font-semibold"
                  onClick={() => scrollToSection('consultation')}
                >
                  このコースを選ぶ
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-brown mb-4">※分割払い対応可能 ※早期申込割引あり</p>
            <Button 
              className="bg-elegant-brown hover:bg-amber-800 text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection('consultation')}
            >
              まずは無料相談で詳細を聞く
            </Button>
          </div>
        </div>
      </section>

      {/* 日程・タイムスケジュール */}
      <section id="schedule" className="py-20 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="elegant-font text-3xl md:text-4xl font-bold text-warm-brown mb-8">日程・タイムスケジュール</h2>
            <div className="section-divider mb-8"></div>
            <p className="text-lg text-muted-brown">
              3期生募集中！平日クラス・週末クラスからお選びいただけます
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* タイムスケジュール */}
            <div className="bg-warm-beige rounded-lg p-8 mb-12 card-shadow">
              <h3 className="elegant-font text-2xl font-bold text-warm-brown mb-6 text-center">1日のタイムスケジュール</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-warm">
                  <span className="font-semibold text-warm-brown">10:00 〜 12:00</span>
                  <span className="text-muted-brown">実習</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-warm">
                  <span className="font-semibold text-warm-brown">12:00 〜 13:00</span>
                  <span className="text-muted-brown">休憩</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-warm-brown">13:00 〜 15:00</span>
                  <span className="text-muted-brown">座学</span>
                </div>
              </div>
            </div>

            {/* 開催日程 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 card-shadow">
                <h4 className="text-xl font-bold text-warm-brown mb-6 text-center">平日クラス</h4>
                <div className="space-y-3">
                  {[
                    "①4月17日(水)",
                    "②5月15日(水)", 
                    "③6月12日(水)",
                    "④7月17日(水)",
                    "⑤8月21日(水)",
                    "⑥9月18日(水)"
                  ].map((date, index) => (
                    <div key={index} className="py-2 px-4 bg-warm-beige rounded text-center text-warm-brown">
                      {date}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 card-shadow">
                <h4 className="text-xl font-bold text-warm-brown mb-6 text-center">週末クラス</h4>
                <div className="space-y-3">
                  {[
                    "①4月19日(土)",
                    "②5月17日(土)",
                    "③6月14日(土)",
                    "④7月19日(土)",
                    "⑤8月23日(土)",
                    "⑥9月20日(土)"
                  ].map((date, index) => (
                    <div key={index} className="py-2 px-4 bg-warm-beige rounded text-center text-warm-brown">
                      {date}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-brown mb-4">※日程は時期により変更になる場合があります</p>
              <Button 
                className="bg-elegant-brown hover:bg-amber-800 text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection('consultation')}
              >
                日程について相談する
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 個別無料相談 */}
      <section id="consultation" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="elegant-font text-3xl md:text-4xl font-bold text-warm-brown mb-8">まずは個別無料相談から</h2>
              <div className="section-divider mb-8"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* 相談のメリット */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-elegant-brown rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-warm-brown mb-2">不安解消</h3>
                    <p className="text-muted-brown">「本当に自分にできるのか不安...」そんな疑問を解消します</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-elegant-brown rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-warm-brown mb-2">最適提案</h3>
                    <p className="text-muted-brown">あなたに最適なコース・学習プランをご提案いたします</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-elegant-brown rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-warm-brown mb-2">成功事例</h3>
                    <p className="text-muted-brown">実際の成功事例をご紹介し、具体的なイメージを共有</p>
                  </div>
                </div>

                <div className="bg-warm-beige rounded-lg p-6">
                  <h4 className="font-bold text-warm-brown mb-4">相談内容</h4>
                  <ul className="space-y-2 text-muted-brown">
                    <li>• あなたの目標・現状のヒアリング</li>
                    <li>• 最適なコース・学習プランのご提案</li>
                    <li>• 疑問・不安の解消</li>
                    <li>• 成功事例のご紹介</li>
                  </ul>
                  <p className="text-sm text-muted-brown mt-4">
                    オンライン・対面どちらでも対応可能<br />
                    強引な勧誘は一切いたしません
                  </p>
                </div>
              </div>

              {/* 問い合わせフォーム */}
              <div className="bg-white rounded-lg p-8 card-shadow">
                <h3 className="text-2xl font-bold text-warm-brown mb-6 text-center">お問い合わせフォーム</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-warm-brown font-semibold mb-2">お名前（必須）</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-warm rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown"
                      placeholder="山田 花子"
                    />
                  </div>

                  <div>
                    <label className="block text-warm-brown font-semibold mb-2">メールアドレス（必須）</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-warm rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-warm-brown font-semibold mb-2">電話番号</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-warm rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown"
                      placeholder="090-1234-5678"
                    />
                  </div>

                  <div>
                    <label className="block text-warm-brown font-semibold mb-2">ご希望のコース</label>
                    <select className="w-full px-4 py-3 border border-warm rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown">
                      <option value="">選択してください</option>
                      <option value="standard">スタンダードコース（¥178,000）</option>
                      <option value="premium">プレミアムコース（¥298,000）</option>
                      <option value="executive">エグゼクティブコース（¥398,000）</option>
                      <option value="consultation">まずは相談したい</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-warm-brown font-semibold mb-2">メッセージ本文</label>
                    <textarea 
                      rows="5"
                      className="w-full px-4 py-3 border border-warm rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown"
                      placeholder="ご質問やご相談内容をお聞かせください"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-elegant-brown hover:bg-amber-800 text-white py-4 text-lg font-semibold"
                  >
                    送信する
                  </Button>
                </form>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                onClick={() => window.open('https://line.me/R/ti/p/@kanaeofficial', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                LINEで気軽に相談する
              </Button>
              <p className="text-sm text-muted-brown mt-2">
                お急ぎの方はLINEが便利です
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-warm-brown text-warm-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="elegant-font text-3xl font-bold mb-8">
              20年の実績が紡ぐ、あなただけの美しい焼き菓子ストーリー
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-warm-brown" />
                </div>
                <h3 className="text-xl font-bold mb-2">特別早期割引</h3>
                <p className="text-warm-beige">8月末まで限定</p>
                <p className="text-2xl font-bold text-gold">10%OFF</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-warm-brown" />
                </div>
                <h3 className="text-xl font-bold mb-2">残席わずか</h3>
                <p className="text-warm-beige">3期生募集</p>
                <p className="text-2xl font-bold text-gold">あと3名</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-warm-brown" />
                </div>
                <h3 className="text-xl font-bold mb-2">特典付き</h3>
                <p className="text-warm-beige">オリジナルレシピ集</p>
                <p className="text-2xl font-bold text-gold">プレゼント</p>
              </div>
            </div>

            <div className="space-y-6 mb-12">
              <Button 
                className="bg-gold hover:bg-yellow-600 text-warm-brown px-12 py-4 text-xl font-bold rounded-lg mr-4"
                onClick={() => scrollToSection('consultation')}
              >
                今すぐ無料相談に申し込む
              </Button>
              
              <div className="flex justify-center space-x-4">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
                  onClick={() => window.open('https://line.me/R/ti/p/@kanaeofficial', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  LINE公式アカウント
                </Button>
                
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                  onClick={() => window.open('mailto:info@kanaeofficial.com', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  メールで問い合わせ
                </Button>
              </div>
            </div>

            <div className="border-t border-warm-beige pt-8">
              <p className="text-warm-beige mb-4">
                〒000-0000 東京都○○区○○ 1-2-3<br />
                TEL: 03-0000-0000 | Email: info@kanaeofficial.com
              </p>
              <p className="text-sm text-warm-beige">
                © 2024 Kanae Official. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

