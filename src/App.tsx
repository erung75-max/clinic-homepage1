import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Eye, 
  ShieldCheck, 
  Stethoscope, 
  Microscope,
  Calendar,
  Info
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '진료안내', href: '#treatments' },
    { name: '병원소개', href: '#about' },
    { name: '의료진', href: '#doctor' },
    { name: '백내장 센터', href: '#cataract' },
    { name: '장비소개', href: '#equipment' },
    { name: '오시는 길', href: '#map-area' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-pink-100/20 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center bg-white/40 backdrop-blur-md rounded-full px-6 py-2 border border-white/50">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold tracking-tighter text-clinic-blue flex items-center gap-2">
              <span className="text-3xl">🐰</span> 율하삼성안과
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold transition-colors hover:text-clinic-accent text-gray-700 hover:scale-110"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:053-964-8575" 
              className="bg-clinic-blue text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-clinic-accent hover:scale-105 transition-all shadow-md shadow-pink-200"
            >
              <Phone size={16} /> 053-964-8575
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-clinic-blue p-2 bg-white rounded-full shadow-sm">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:053-964-8575" 
                className="mt-4 flex items-center justify-center gap-2 w-full bg-clinic-blue text-white py-4 rounded-xl font-bold"
              >
                <Phone size={20} /> 전화 상담하기
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-pastel-pink/30 -z-10 rounded-l-[20rem] blur-[80px]" />
      <div className="absolute top-40 left-0 w-1/3 h-2/3 bg-pastel-blue/20 -z-10 rounded-r-[15rem] blur-[100px]" />
      
      {/* Animated Background Shapes */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[5%] w-32 h-32 bg-clinic-blue/10 rounded-full blur-2xl -z-10"
      />
      <motion.div 
        animate={{ 
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[10%] w-48 h-48 bg-pastel-pink/40 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        animate={{ 
          y: [0, -50, 0],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[15%] w-64 h-64 bg-pastel-yellow/30 rounded-full blur-3xl -z-10"
      />

      {/* Twinkling Stars Decoration */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.2, scale: 0.5 }}
          animate={{ 
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{ 
            duration: 3 + i, 
            repeat: Infinity, 
            delay: i * 0.5 
          }}
          className="absolute -z-10 text-clinic-accent/30 pointer-events-none"
          style={{
            top: `${15 + (i * 12)}%`,
            left: `${10 + (i * 15)}%`,
          }}
        >
          <div className="text-2xl">✨</div>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="w-full lg:w-3/5 z-10"
          >
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-clinic-blue/20 text-clinic-blue rounded-full text-sm font-bold mb-6">
                토끼처럼 초롱초롱한 눈! 🐰
              </span>
              <motion.h1 
                animate={{ x: [-8, 8, -8] }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.15] mb-8 tracking-tight"
              >
                반짝반짝 소중한 눈,<br />
                <span className="text-clinic-blue">율하삼성안과</span>가<br />
                지켜줄게요!
              </motion.h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light">
                최첨단 장비와 따뜻한 마음으로<br className="hidden md:block" /> 
                여러분의 눈을 더 맑고 깨끗하게 관리해 드려요. ✨
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#cataract" className="px-8 py-4 bg-clinic-blue text-white rounded-full font-bold shadow-lg shadow-pink-200/50 hover:bg-clinic-accent transition-all text-center group">
                  백내장 센터 구경가기 <span className="inline-block group-hover:translate-x-1 transition-transform">🥕</span>
                </a>
                <a href="#map-area" className="px-8 py-4 bg-white text-clinic-blue border-2 border-clinic-blue rounded-full font-bold hover:bg-clinic-blue hover:text-white transition-all text-center">
                  병원 지도 보기
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6">
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-pink-50 text-center">
                  <span className="block text-2xl font-bold text-clinic-blue">20+</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">경력</span>
                </div>
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-pink-50 text-center">
                  <span className="block text-2xl font-bold text-clinic-blue">Safe</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">안전</span>
                </div>
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-pink-50 text-center">
                  <span className="block text-2xl font-bold text-clinic-blue">Clean</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">청결</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Cute Rabbit Doctor */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: [0, -20, 0] }}
            transition={{ 
              opacity: { duration: 0.8 },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
            }}
            className="w-full lg:w-2/5 relative"
          >
            <div className="relative z-10 rounded-[5rem] overflow-hidden shadow-2xl shadow-pink-200/30 border-[12px] border-white">
              <img 
                src="/images/hero_rabbit_doctor_1777384703065.png" 
                alt="Rabbit Doctor"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* Decorative floating elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-pastel-yellow rounded-full animate-bounce delay-100" />
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-pastel-blue rounded-full animate-bounce delay-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const QuickInfoBar = () => (
  <div className="absolute bottom-10 left-0 right-0 z-20 hidden lg:block">
    <div className="max-w-5xl mx-auto px-8">
      <div className="bg-white/80 backdrop-blur-xl border border-pink-100 rounded-[3rem] shadow-2xl shadow-pink-200/20 grid grid-cols-4 gap-4 py-5 px-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-pastel-pink rounded-2xl text-clinic-blue font-bold">01</div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase">검사</p>
            <p className="text-xs font-bold text-gray-800">당일 검사 가능!</p>
          </div>
        </div>
        <div className="flex items-center gap-3 border-l border-pink-50 pl-6">
          <div className="p-3 bg-pastel-blue rounded-2xl text-blue-500 font-bold">02</div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase">상담</p>
            <p className="text-xs font-bold text-gray-800">언제나 다정하게!</p>
          </div>
        </div>
        <div className="flex items-center gap-3 border-l border-pink-50 pl-6">
          <div className="p-3 bg-pastel-mint rounded-2xl text-green-500 font-bold">03</div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase">장비</p>
            <p className="text-xs font-bold text-gray-800">슈퍼 똑똑이 장비!</p>
          </div>
        </div>
        <div className="flex items-center gap-3 border-l border-pink-50 pl-6">
          <div className="p-3 bg-pastel-yellow rounded-2xl text-orange-500 font-bold">04</div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase">위치</p>
            <p className="text-xs font-bold text-gray-800">신기역에서 가깝토!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SectionHeading = ({ title, subtitle, id }: { title: string, subtitle?: string, id?: string }) => (
  <div id={id} className="text-center mb-16 px-4">
    <motion.h2 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
    >
      {title} ✨
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-500 text-lg max-w-2xl mx-auto font-light"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="flex justify-center gap-2 mt-6">
      <div className="w-8 h-2 bg-pastel-pink rounded-full" />
      <div className="w-12 h-2 bg-clinic-blue rounded-full" />
      <div className="w-8 h-2 bg-pastel-blue rounded-full" />
    </div>
  </div>
);

const treatmentData = [
  {
    id: 'cataract',
    title: '백내장 센터',
    icon: '✨',
    color: 'bg-pastel-pink',
    img: '/images/rabbit_explaining_cataract_1777385552757.png',
    desc: '수정체가 투명성을 잃어 시야가 흐려진다면?',
    longDesc: '백내장은 대표적인 노인성 안질환으로, 수정체가 단백질 변성으로 인해 뿌옇게 변하는 질환입니다. 마치 안개 낀 창문을 통해 밖을 보는 것처럼 시야가 흐릿해지며, 빛 번짐이나 복시 현상이 나타날 수 있습니다.\n\n율하삼성안과에서는 대학병원급 정밀 검사 장비를 통해 백내장의 진행 정도를 정확히 진단하고, 환자의 라이프스타일에 맞는 최적의 치료 시기를 결정합니다. 초음파 유화술과 최신 인공수정체 삽입술을 통해 맑은 시야를 약속합니다.'
  },
  {
    id: 'glaucoma',
    title: '녹내장 클리닉',
    icon: '👁️',
    color: 'bg-pastel-blue',
    img: '/images/bunny_glaucoma_check_1777387344130.png',
    desc: '소리 없는 시력 도둑, 조기 발견이 중요합니다.',
    longDesc: '녹내장은 시신경이 서서히 대상을 파괴하며 시야가 바깥쪽에서부터 좁아지는 질환입니다. 초기에는 자각 증상이 거의 없어 "소리 없는 시력 도둑"이라 불리기도 합니다.\n\n한번 손상된 시신경은 회복이 어렵기 때문에 40세 이후에는 정기적인 안압 검사와 시신경 검사가 필수입니다. 조기에 발견하여 약물 치료나 레이저 치료를 시작하면 시력 손실을 최대한 억제할 수 있습니다.'
  },
  {
    id: 'dry-eye',
    title: '안구건조증 케어',
    icon: '💧',
    color: 'bg-pastel-mint',
    img: '/images/bunny_dry_eye_care_1777387366033.png',
    desc: '뻑뻑하고 침침한 눈, 누점폐쇄술로 해결하세요.',
    longDesc: '안구건조증은 눈물의 양이 부족하거나 질이 떨어져 눈 표면이 손상되는 질환입니다. 단순히 마른 느낌뿐만 아니라 충혈, 통증, 시력 저하를 유발합니다.\n\n본원에서는 마이봄샘 검사를 통해 원인을 파악하고 맞춤형 인공눈물 처방은 물론, 눈물이 배출되는 길을 일시적으로 막아 본인의 눈물을 더 오래 보존하는 "누점폐쇄술(Punctal Plug)" 시술을 제공합니다. 통증 없이 짧은 시간에 시술 가능하며 즉각적인 효과를 볼 수 있습니다.'
  },
  {
    id: 'retina',
    title: '망막질환 센터',
    icon: '🎯',
    color: 'bg-pastel-yellow',
    img: '/images/bunny_retina_expert_1777387379615.png',
    desc: '당뇨망막증부터 황반변성까지 정밀 진단!',
    longDesc: '망막은 눈의 가장 안쪽에 위치한 신경 조직으로, 카메라의 필름과 같은 역할을 합니다.\n\n1. 당뇨망막증: 고혈당으로 인해 망막 혈관이 손상되어 출혈이나 부종이 발생하는 질환으로 실명 원인 1위입니다.\n2. 망막박리: 망막이 안구 내부 벽에서 떨어지는 응급 질환으로 번쩍거림(광시증)이나 커튼이 처지는 듯한 증상이 있다면 즉시 내원해야 합니다.\n3. 비문증: 눈앞에 날파리가 날아다니는 듯한 증상입니다. 대개 노화 현상이지만 망막 열공 등 전조 증상일 수 있어 검사가 필수입니다.\n4. 황반변성: 황반 부위에 변성이 생겨 중심 시력이 왜곡되거나 저하되는 질환으로 루테인 보충과 항체 주사 치료가 중요합니다.'
  },
  {
    id: 'myopia',
    title: '근시치료 클리닉',
    icon: '🛌',
    color: 'bg-indigo-50',
    img: '/images/bunny_dream_lens_sleep_1777387392984.png',
    desc: '드림렌즈와 마이오가드로 우리 아이 시력 보호!',
    longDesc: '성장기 어린이의 근시 진행을 억제하고 시력을 교정하는 최적의 솔루션을 제안합니다.\n\n1. 드림렌즈: 밤에 착용하고 자는 동안 각막 형태를 부드럽게 변화시켜 낮 동안 안경 없이 선명한 시력을 유지하게 해줍니다. 근시 진행 억제 효과가 매우 탁월합니다.\n2. 마이오가드(아트로핀): 저농도 안약을 매일 점안하여 안구 성장을 조절하고 근시 진행 속도를 50% 이상 늦춥니다. 드림렌즈와 병행 시 효과가 더욱 좋습니다.'
  }
];

const TreatmentCenter = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<any>(null);

  return (
    <section id="treatments" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading 
          title="안과 지식백과" 
          subtitle="토끼 의사가 들려주는 전문적인 눈 이야기! 🥕"
        />
        
        <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[500px]">
          {treatmentData.map((item, idx) => (
            <motion.div
              key={item.id}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => setSelectedTreatment(item)}
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out rounded-[3rem] border border-white shadow-xl ${
                hoveredIdx === idx ? 'flex-[3]' : 'flex-1'
              } ${item.color}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              <img 
                src={item.img} 
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${hoveredIdx === idx ? 'scale-105' : 'scale-110 blur-[1px]'}`}
                alt={item.title}
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <div className={`transition-all duration-500 ${hoveredIdx === idx ? 'mb-4' : 'mb-0'}`}>
                   <span className="text-3xl mb-4 block">{item.icon}</span>
                   <h3 className="text-2xl font-bold whitespace-nowrap">{item.title}</h3>
                </div>
                
                <motion.div 
                  initial={false}
                  animate={{ 
                    opacity: hoveredIdx === idx ? 1 : 0, 
                    height: hoveredIdx === idx ? 'auto' : 0,
                    y: hoveredIdx === idx ? 0 : 20
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <p className="text-white/90 font-light text-sm mb-6 max-w-xs">{item.desc}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full text-xs font-bold shadow-lg">
                    상세보기 <ChevronRight size={14} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedTreatment && (
          <TreatmentDetailModal 
            item={selectedTreatment} 
            onClose={() => setSelectedTreatment(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const TreatmentDetailModal = ({ item, onClose }: { item: any, onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        className="bg-white rounded-[4rem] max-w-5xl w-full max-h-[85vh] overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 bg-pastel-pink rounded-2xl text-clinic-blue z-20 hover:bg-clinic-blue hover:text-white transition-all shadow-md"
        >
          <X size={24} />
        </button>

        <div className="w-full md:w-1/2 relative bg-gray-50 h-[300px] md:h-auto">
          <img 
            src={item.img} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white z-10">
             <span className="text-5xl mb-4 block drop-shadow-lg">{item.icon}</span>
             <h3 className="text-4xl font-bold drop-shadow-md">{item.title}</h3>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-10 md:p-16 overflow-y-auto bg-white">
          <div className="w-16 h-2 bg-pastel-yellow rounded-full mb-8" />
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-light">
             {item.longDesc.split('\n\n').map((para: string, i: number) => (
               <div key={i} className="mb-6">
                 {para.split('\n').map((line, j) => (
                   <p key={j} className={line.includes(':') ? 'font-bold text-gray-900 mt-2' : ''}>
                     {line}
                   </p>
                 ))}
               </div>
             ))}
          </div>

          <div className="mt-12 p-8 bg-pastel-blue/10 rounded-[3rem] border border-blue-50">
             <p className="text-clinic-blue font-bold text-center flex items-center justify-center gap-2">
               <span> 더 궁금하신 점이 있나요? </span> 
               <Phone size={18} />
             </p>
             <p className="text-gray-500 text-sm text-center mt-2">상담 전화를 주시면 더욱 상세히 설명해 드립니다!</p>
          </div>

          <button 
            onClick={onClose}
            className="w-full mt-10 py-5 bg-clinic-blue text-white rounded-full font-bold text-xl hover:bg-clinic-accent transition-all shadow-xl shadow-pink-100"
          >
            도움이 됐어요! 👍
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const stats = [
    { label: "백내장 수술", value: "2,000례+", sub: "풍부한 임상 경험", color: "text-clinic-blue" },
    { label: "누점폐쇄술", value: "10,000례+", sub: "안구건조증 특화", color: "text-clinic-accent" },
    { label: "우리동네 주치의", value: "실력으로 증명", sub: "믿고 맡길 수 있는 안과", color: "text-gray-900" },
  ];

  const points = [
    { icon: "🛡️", title: "안전이 제일!", desc: "무엇보다 안전이 제일 중요해요! 깨끗하고 안전한 환경에서 꼼꼼하게 진료해 드립니다." },
    { icon: "🔬", title: "똑똑한 장비", desc: "대학병원 부럽지 않은 최점단 장비들로 여러분의 눈 상태를 정확하게 분석해요." },
    { icon: "🩺", title: "다정한 상담", desc: "여러분의 고민을 귀 기울여 듣고, 가장 알맞은 해결책을 다정하게 찾아드려요." },
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-pastel-mint/30 rounded-full blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading 
          title="우리동네 안과 주치의, 율하삼성안과" 
          subtitle="2,000례 이상의 백내장 수술과 10,000례 이상의 누점폐쇄술로 증명된 믿을 수 있는 실력!"
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border-2 border-pink-50 p-10 rounded-[3.5rem] text-center shadow-xl shadow-pink-100/20 hover:scale-105 transition-transform"
            >
              <p className="text-gray-500 text-sm font-bold tracking-widest mb-4 uppercase">{stat.label}</p>
              <h4 className={`text-4xl md:text-5xl font-black mb-3 ${stat.color}`}>{stat.value}</h4>
              <p className="text-gray-400 font-light">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 gap-6">
            {points.map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-[2.5rem] bg-clinic-bg hover:bg-white hover:shadow-xl hover:shadow-pink-100/50 transition-all border border-pink-50/50 flex items-center gap-6"
              >
                <div className="text-4xl shrink-0">{point.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{point.title}</h3>
                  <p className="text-gray-600 font-light text-sm">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/images/rabbit_examining_1777384718850.png" 
              alt="Rabbit Examining" 
              className="rounded-[4rem] shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-6 -right-6 p-6 bg-white rounded-3xl shadow-xl border border-pink-50">
               <p className="text-blue-500 font-bold">정밀 검사 중... 🔬</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Doctor = () => {
  return (
    <section id="doctor" className="py-24 bg-pastel-pink/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[5rem] overflow-hidden shadow-2xl aspect-[4/5] bg-white border-[12px] border-white"
            >
              <img 
                src="/images/doctor1.jpeg" 
                alt="Rabbit Doctor Portrait"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-clinic-blue font-bold tracking-widest uppercase text-sm block mb-2 px-4 py-1 bg-white inline-block rounded-full shadow-sm">Hello, I'm Dr. Rabbit! 🐰</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-4">정의윤 대표원장</h2>
              
              <div className="space-y-8">
                <div className="bg-white/60 p-8 rounded-[3rem] border border-white/40">
                  <h4 className="flex items-center gap-2 font-bold text-gray-900 text-xl mb-4">
                    <div className="w-3 h-8 bg-pink-300 rounded-full" /> 풍부한 수술 실적
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/80 p-5 rounded-2xl border border-pink-100">
                       <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">백내장 수술</p>
                       <p className="text-xl font-bold text-clinic-blue">2,000례 이상</p>
                    </div>
                    <div className="bg-white/80 p-5 rounded-2xl border border-pink-100">
                       <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">누점폐쇄술</p>
                       <p className="text-xl font-bold text-clinic-accent">10,000례 이상</p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-gray-500 font-light px-2">
                    * 율하삼성안과는 풍부한 임상 경험을 바탕으로 환자분들께 꼭 필요한 진료만을 약속드립니다.
                  </p>
                </div>

                <div className="bg-white/60 p-8 rounded-[3rem] border border-white/40">
                  <h4 className="flex items-center gap-2 font-bold text-gray-900 text-xl mb-4">
                    <div className="w-3 h-8 bg-pastel-yellow rounded-full" /> 약력
                  </h4>
                  <ul className="space-y-3 text-gray-700 font-light list-none">
                    <li>🥕 경북대학교 의과대학 졸업</li>
                    <li>🥕 경북대학교 의과대학 대학원 졸업 (의학석사)</li>
                    <li>🥕 삼성창원병원 안과 근무</li>
                    <li>🥕 안과 전문의 취득</li>
                    <li>🥕 국군대구병원 안과 군의관 복무</li>
                    <li>🥕 성균관의대 외래교수 역임</li>
                    <li>🥕 현 율하삼성안과 원장</li>
                  </ul>
                </div>

                <div className="bg-white/40 p-8 rounded-[3rem] border border-white/40">
                  <h4 className="flex items-center gap-2 font-bold text-gray-900 text-xl mb-4">
                    <div className="w-3 h-8 bg-pastel-blue rounded-full" /> 학회 활동 (Membership)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "대한안과학회 정회원",
                      "한국백내장굴절수술학회 정회원",
                      "대한각막학회 정회원",
                      "한국외안부학회 정회원",
                      "한국녹내장학회 정회원",
                      "한국망막학회 정회원",
                      "한국콘택트렌즈연구회 정회원",
                      "대한임상노인의학회 정회원",
                      "노인의학전문 인정의"
                    ].map((org) => (
                      <span key={org} className="px-4 py-2 bg-white rounded-full text-xs text-gray-600 font-medium shadow-sm">
                        {org}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CataractDetail = ({ item, onClose }: { item: any, onClose: () => void }) => {
  if (!item) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-[4rem] max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 bg-pastel-pink rounded-2xl text-clinic-blue z-10 hover:bg-clinic-blue hover:text-white transition-all shadow-sm"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-16 overflow-y-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-1 bg-clinic-blue/10 text-clinic-blue rounded-full text-sm font-bold mb-4">
                {item.tag}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                {item.title}
              </h3>
              <div className="w-16 h-1.5 bg-pastel-yellow rounded-full mb-8" />
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                {item.longDesc.split('\n').map((line: string, i: number) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            <div className="mt-12 p-6 bg-pastel-blue/20 rounded-[2.5rem] border border-blue-50">
              <p className="text-clinic-blue font-bold text-center">
                궁금한 점이 있다면 언제든 편하게 물어보세요! 🥕
              </p>
            </div>
            
            <button 
              onClick={onClose}
              className="w-full mt-8 py-5 bg-clinic-blue text-white rounded-full font-bold text-xl hover:bg-clinic-accent transition-all shadow-lg shadow-pink-200/50"
            >
              알겠어요!
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CataractCenter = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const items = [
    { 
      title: "백내장은 무엇일까요?", 
      tag: "질환 안내",
      desc: "수정체가 흐릿해져서 세상이 안개처럼 보이는 거예요. 토끼처럼 맑은 시야를 약속해요!", 
      longDesc: "백내장은 우리 눈의 렌즈인 '수정체'가 단백질 변성으로 인해 뿌옇게 변하는 질환입니다.\n마치 안개 낀 창문을 통해 밖을 보는 것처럼 시야가 흐릿해지고 시력이 저하되죠.\n율하삼성안과에서는 대학병원급 정밀 검사 장비를 통해 백내장의 진행 정도를 정확히 진단하고, 환자의 라이프스타일에 맞는 최적의 치료 시기를 결정합니다.",
      img: "/images/rabbit_explaining_cataract_1777385552757.png" 
    },
    { 
      title: "안전한 수술 시스템", 
      tag: "수술 안내",
      desc: "나쁜 수정체는 안녕~ 깨끗한 인공수정체로 교체해서 다시 반짝이는 눈을 갖게 해드려요.", 
      longDesc: "백내장 수술은 혼탁해진 기존 수정체를 제거하고, 그 자리에 인공수정체를 삽입하는 과정으로 진행됩니다.\n저희 센터는 'Stellaris Elite' 등 세계적인 수준의 수술 장비를 갖추고 있으며, 풍부한 임상 경험을 가진 의료진이 초미세 절개창을 통해 통증과 부작용을 최소화한 안전한 수술을 집도합니다.",
      img: "/images/rabbit_performing_surgery_1777385569323.png" 
    },
    { 
      title: "프리미엄 인공수정체", 
      tag: "렌즈 안내",
      desc: "가장 최신 장비로 통증 없이 빠르고 정확하게 치료해 드릴게요. 걱정 마세요!", 
      longDesc: "환자의 필요에 따라 단초점, 다초점, 난시 교정용 인공수정체 등 다양한 옵션을 제공합니다.\n특히 노안과 백내장을 동시에 교정하는 다초점 렌즈를 통해 수술 후 돋보기 없이도 원거리와 근거리를 모두 선명하게 볼 수 있는 '프리미엄 시력 교정'을 실현합니다.\n토끼처럼 밝고 선명한 세상을 다시 만나보세요!",
      img: "/images/rabbit_aftercare_clear_vision_1777385585014.png" 
    },
  ];

  return (
    <section id="cataract" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-pastel-yellow/30 rounded-full blur-2xl -z-10" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading 
          title="반짝반짝 백내장 센터" 
          subtitle="흐릿한 세상은 이제 그만! 토끼처럼 예쁜 눈으로 다시 봐요 ✨"
        />
        
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="group bg-pastel-blue/10 p-4 rounded-[4rem] border border-blue-50/50 cursor-pointer hover:bg-white hover:shadow-2xl hover:shadow-pink-100/30 transition-all"
            >
              <div className="rounded-[3.5rem] overflow-hidden aspect-video bg-gray-100 mb-8 relative shadow-md group-hover:shadow-2xl transition-all">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 px-4 py-1.5 rounded-full text-xs font-bold text-clinic-blue shadow-sm">
                   Step 0{idx + 1}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white p-4 rounded-full text-clinic-blue shadow-lg">
                    <ChevronRight size={24} />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 px-4">{item.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed px-4 pb-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <CataractDetail 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const Equipment = () => {
  const equipments = [
    { 
      name: "TOPCON Maestro OCT", 
      desc: "망막과 시신경의 단면을 입체적으로 촬영하여 녹내장과 망막 질환을 아주 미세한 단계부터 진단해요.", 
      icon: "👁️",
      detail: "All-in-One 시스템"
    },
    { 
      name: "Stellaris Elite", 
      desc: "Bausch+Lomb사의 차세대 수술 장비로, 백내장과 망막 수술을 동시에 수행할 수 있는 프리미엄 시스템이에요.", 
      icon: "⚡",
      detail: "프리미엄 수술 장비"
    },
    { 
      name: "Leica Microscope", 
      desc: "세계적인 광학 기술이 집약된 라이카 수술 현미경으로 아주 작은 부분까지 선명하게 보며 정밀하게 수술해요.", 
      icon: "🔬",
      detail: "초정밀 광학 현미경"
    },
    { 
      name: "OA-2000 Biometry", 
      desc: "인공수정체 도수를 오차 없이 계산하기 위해 안구의 길이를 비접촉 방식으로 정밀하게 측정하는 장비예요.", 
      icon: "📏",
      detail: "정밀 안구 계측"
    },
    { 
      name: "TOPCON ARK & NCT", 
      desc: "기본적인 시력 검사와 안압 측정을 빠르고 정확하게 수행하여 눈 상태의 기초를 튼튼하게 확인해요.", 
      icon: "🎯",
      detail: "표준 정밀 검사"
    },
    { 
      name: "LightMed YAG Laser", 
      desc: "수술 후 발생할 수 있는 후발 백내장을 빠르고 안전하게 치료하여 다시 깨끗한 시야를 찾아드려요.", 
      icon: "✨",
      detail: "고성능 치료 레이저"
    },
    { 
      name: "Zeiss FDT", 
      desc: "녹내장에 의한 초기 시야 결손을 아주 빠르게 찾아내어 소중한 시신경을 지켜주는 시야 검사 장비예요.", 
      icon: "💡",
      detail: "녹내장 조기 검진"
    },
    { 
      name: "Ocutome B-scan", 
      desc: "안구 내부에 혼탁이 있어도 초음파를 이용해 망막과 시신경의 상태를 꼼꼼하게 살필 수 있어요.", 
      icon: "📡",
      detail: "안구 초음파 진단"
    },
    { 
      name: "Fundus Photography", 
      desc: "고해상도 안저 카메라로 망막과 혈관의 상태를 촬영하여 눈의 건강 지도를 기록하고 관리해요.", 
      icon: "📸",
      detail: "디지털 안저 촬영"
    },
  ];

  return (
    <section id="equipment" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pastel-mint/30 rounded-full blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading title="첨단 의료 장비" subtitle="대학병원급 최신 장비로 오차 없이 꼼꼼하게 진단해 드릴게요!" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipments.map((eq, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-[3.5rem] border border-pink-50 flex flex-col items-center text-center shadow-lg shadow-pink-100/20 group transition-all"
            >
              <div className="w-20 h-20 bg-clinic-bg rounded-3xl flex items-center justify-center text-4xl mb-6 group-hover:bg-pastel-yellow transition-colors shadow-inner">
                {eq.icon}
              </div>
              <div className="mb-4">
                <span className="text-[10px] font-bold text-clinic-blue uppercase tracking-widest bg-pink-50 px-3 py-1 rounded-full">{eq.detail}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{eq.name}</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">{eq.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 bg-pastel-blue rounded-[5rem] text-gray-800 p-8 md:p-16 relative shadow-2xl shadow-blue-100/50 border-8 border-white">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-8 text-clinic-blue">병원을 찾아오세요! 🥕</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-clinic-blue"><MapPin /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">오시는 길</h4>
                  <p className="text-gray-600 font-light">대구광역시 동구 안심로 22길 60 동흥메디칼 3층 301호</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-clinic-blue"><Phone /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">문의 및 상담</h4>
                  <p className="text-gray-600 font-light">053-964-8575 (전화주시면 반갑게 받아드려요!)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-clinic-blue"><Clock /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">진료시간 안내</h4>
                  <p className="text-gray-600 font-light">
                    평일: 09:00 - 18:00<br />
                    수요일: 오전에는 토끼 잠을 자요! 😴 (14:00 - 18:00)<br />
                    토요일: 09:00 - 13:00<br />
                    점심시간: 12:30 - 14:00<br />
                    공휴일: 친구들과 놀러 가요! (휴진)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-clinic-blue">🅿️</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">주차 안내</h4>
                  <p className="text-gray-600 font-light">건물 지하주차장에 무료주차 가능합니다.</p>
                </div>
              </div>
            </div>
            <a href="tel:053-964-8575" className="mt-12 inline-flex items-center gap-3 px-10 py-5 bg-clinic-blue text-white rounded-full font-bold text-xl hover:scale-105 hover:bg-clinic-accent transition-all shadow-lg shadow-pink-200">
              <Phone size={24} /> 상담 전화 걸기 📞
            </a>
          </div>
          
          <div id="map-area" className="w-full md:w-1/2 min-h-[400px] bg-white rounded-[4rem] relative overflow-hidden shadow-xl border-4 border-white group">
            <motion.img 
              whileHover={{ scale: 2.0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src="/images/yacdo.jpeg" 
              alt="율하삼성안과 약도" 
              className="w-full h-full object-cover md:object-contain bg-gray-50 cursor-pointer"
            />
            <div className="absolute bottom-6 right-6 pointer-events-none">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50 text-clinic-blue font-bold flex items-center gap-2">
                <MapPin size={20} />
                <span>신기역 2번 출구 근처!</span>
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-16 bg-gray-100 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <p className="text-2xl font-bold text-clinic-blue mb-4 tracking-tighter">율하삼성안과</p>
        <p className="text-sm text-gray-500 font-light">
          © {new Date().getFullYear()} Yulha Samsung Ophthalmology. All rights reserved.<br />
          사업자등록번호: 502-27-44118 | 대표: 정의윤
        </p>
      </div>
      <div className="flex gap-4">
        {/* Placeholder for SEO or Social Links */}
        <span className="text-xs text-gray-400 uppercase font-bold tracking-widest">Trust & Care</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 overflow-x-hidden bg-clinic-bg">
      <Navbar />
      <div className="relative">
        <Hero />
        <QuickInfoBar />
      </div>
      <TreatmentCenter />
      <About />
      <Doctor />
      <CataractCenter />
      <Equipment />
      <Contact />
      <Footer />
    </div>
  );
}
