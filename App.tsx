import React, { useMemo, useState } from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  RadialBarChart,
  RadialBar
} from 'recharts';
import { 
  CheckCircle2, 
  Target, 
  Zap, 
  Search, 
  Lightbulb, 
  BarChart3, 
  User, 
  Instagram, 
  ArrowRight,
  TrendingUp,
  Brain,
  Layers,
  Quote,
  Sparkles, 
  Link as LinkIcon,
  MessageCircle,
  Puzzle,
  Microscope,
  ArrowRightLeft,
  ChevronRight,
  Maximize2,
  Fingerprint,
  HeartHandshake,
  Scale,
  Film,
  BookOpen,
  Calendar,
  RefreshCw,
  MousePointerClick,
  ArrowDown,
  PlayCircle,
  Clapperboard,
  ShoppingBag,
  FileSpreadsheet,
  LayoutDashboard
} from './components/Icons';
import { Logo } from './components/Logo';
import { CelebProfile, MatchPoint, ContentIdea, StrategicPillar } from './types';

// --- DATA SOURCE ---
const celebData: CelebProfile = {
  name: "haaarpeeer",
  handle: "@haaarpeeer",
  followers: "3.5만",
  avgViews: "1.7만",
  identity: ["Problem Solver", "Active Inquiry", "Logical Persuasion"],
  dna: [
    { label: "논리적 설득", value: 95 },
    { label: "문제 해결", value: 90 },
    { label: "팬덤 신뢰", value: 85 },
    { label: "정보성", value: 80 },
    { label: "심미성", value: 70 },
  ]
};

const matchPoints: MatchPoint[] = [
  { 
    id: 1, 
    feature: "물리적 윤곽 리프팅 (EMS)", 
    connection: "Identity: 비율 설계자",
    title: "얼굴 골격을 재창조하는 도구",
    logic: "‘비율 설계자’로서 얼굴 골격을 재창조하는 도구입니다. 하퍼의 비율 재조립 철학을 얼굴에 직접 구현하게 해주는 기술적 필연성을 가집니다.",
    isCore: true 
  },
  { 
    id: 2, 
    feature: "화장품 흡수율 극대화 (GB/EP)", 
    connection: "Needs: 투자 가치 복원",
    title: "‘유령 자산’ 심폐소생 솔루션",
    logic: "비싼 화장품을 써도 효과를 보지 못한 팬들의 ‘학습된 무력감’을 해결하고, 낭비되던 화장품 투자의 가치를 복원합니다.",
    isCore: true 
  },
  { 
    id: 3, 
    feature: "모공 속 노폐물 배출 (GC)", 
    connection: "Logic: 논리적 완벽주의",
    title: "데이터 주의자를 위한 근본적 해답",
    logic: "결과만을 강조하는 것이 아닌, ‘모공 속 원인 제거’라는 가장 기초적이고 논리적인 단계를 제시하여 전략가적 면모를 뒷받침합니다.",
    isCore: true 
  },
  { 
    id: 4, 
    feature: "5-in-1 올인원 편의성", 
    connection: "Success Logic: 기술의 단순화",
    title: "복잡한 기술의 단순화 성공 공식",
    logic: "복잡한 단계를 극도로 단순화하여, 번거로움을 싫어하는 팬덤의 진입 장벽을 낮추고 접근성을 극대화합니다.",
    isCore: false 
  },
  { 
    id: 5, 
    feature: "인체공학적 헤드 디자인", 
    connection: "Pain Point: 실패 경험 차단",
    title: "누구나 전문가가 되는 디자인",
    logic: "블러셔나 쉐딩 등에서 겪는 ‘기술적 실패’를 원천 차단하여, 곰손인 팬들도 전문가처럼 사용할 수 있게 돕습니다.",
    isCore: false 
  },
];

const contentIdeas: ContentIdea[] = [
  {
    id: "01",
    title: "비율 설계자의 마지막 과제: 얼굴 골격 블루프린트",
    subTitle: "Face Blueprint",
    tags: ["IDENTITY", "DATA-DRIVEN", "ARCHITECTURE"],
    concept: "Concept 01",
    flow: [
      "평소처럼 줄자를 들고 자신의 얼굴 여백이나 턱선 각도를 재며, 건축가가 설계도를 그리듯 개선 부위(턱선, 팔자, 광대)를 진지하게 분석합니다.",
      "스키너지프로를 꺼내 각 부위에 맞는 모드(EMS, RF)를 적용하며 얼굴을 ‘설계’해 나가는 과정을 보여줍니다. (단순 시연 X, 비율 재창조 프로젝트 O)",
      "사용 후 다시 줄자나 그리드 앱으로 수치를 측정하여, 프로젝트의 성공을 확실한 ‘데이터’로 증명합니다."
    ],
    rationale: "그녀의 핵심 페르소나인 ‘비율 설계자’와 ‘측정 가능한 결과 신봉자’를 완벽하게 결합합니다. 과거 압박밴드 리뷰의 성공 공식(줄자 측정)을 얼굴로 가져와 신뢰도를 극대화합니다.",
    synergy: "단순 광고가 아닌 ‘비율학 개론 심화 과정’으로 인식됩니다. “언니가 저렇게까지 분석하고 쓰는 거면 진짜다”라는 믿음을 형성하여 제품의 기술력을 증명합니다.",
    theme: 'purple'
  },
  {
    id: "02",
    title: "화장대 위 ‘유령 자산’ 심폐소생 프로젝트",
    subTitle: "Reviving Ghost Assets",
    tags: ["ECONOMICS", "PAIN-KILLER", "SMART-SPENDING"],
    concept: "Concept 02",
    flow: [
      "화장대 구석의 비싼 방치템들을 보여주며 “돈 아까워 죽겠는데 버리지는 못하는 유령 자산”이라 칭하고 팬들의 공감대를 자극합니다.",
      "기기를 ‘심폐소생술 장비’로 소개하며, 기존 화장품의 흡수율을 높여 죽어있던 효능을 되살리는 과정을 보여줍니다.",
      "실제 피부가 개선되는 결과를 통해 ‘죽은 자산’이 되살아났음을 시각적으로 확인시켜줍니다."
    ],
    rationale: "제품의 핵심 가치인 ‘낭비되던 투자의 가치 복원’을 직관적으로 보여줍니다. “비싼 거 발라도 효과 없던” 팬들의 좌절감을 해소하는 전략입니다.",
    synergy: "28만원 → 19만원이라는 가격 저항선을 낮춥니다. 새로운 지출이 아닌 ‘기존 자산의 가치를 높이는 현명한 투자’로 인식시켜 구매를 합리화합니다.",
    theme: 'blue'
  },
  {
    id: "03",
    title: "나의 ‘바비 시절’을 찾아 떠나는 28일간의 기록",
    subTitle: "28 Days Journey",
    tags: ["JOURNEY", "AUTHENTICITY", "SOCIAL-PROOF"],
    concept: "Concept 03",
    flow: [
      "“가장 아름다웠던 시절로 돌아가세요”라는 캐치프레이즈를 인용하며, “뜬구름 잡는 소리 같죠? 제가 데이터로 증명할게요”라고 선언합니다.",
      "28일 동안 매일 5분씩 사용하는 모습과 피부 변화를 일관된 조명과 각도에서 꾸준히 기록합니다.",
      "주차별 변화 과정을 가감 없이 공개하며 뜬구름 잡는 소리가 아닌 실제 결과를 시각적으로 증명합니다."
    ],
    rationale: "데이터 검증 채널의 필승 공식인 ‘시각적 증명’의 극대화입니다. 28일이라는 구체적 시간 동안의 변화는 의심을 잠재우는 가장 확실한 테스트입니다.",
    synergy: "단순 리뷰를 넘어 팬들이 응원하는 ‘챌린지’가 됩니다. ‘직접 검증한 제품’이라는 강력한 사회적 증거(Social Proof)를 남깁니다.",
    theme: 'pink'
  }
];

// Content enriched based on source text to maximize persuasion
const strategicPillars = [
  {
    id: 0,
    tabTitle: "Philosophy (철학)",
    icon: <Scale size={18} />,
    title: "철학적 동기화: 신념의 최종 진화",
    subtitle: "줄자(Analog)를 넘어선 기술적 증명(Digital)의 단계",
    context: {
      label: "Celeb Persona",
      headline: "측정 가능한 결과 신봉자",
      subHeadline: "Visible Result Believer",
      description: "그녀는 막연한 감성적 만족을 거부합니다. 압박밴드를 쓴 후 줄자로 다리 둘레 변화를 직접 재서 보여주는 행위는, 오직 반박 불가능한 ‘숫자’와 ‘데이터’만을 신뢰하겠다는 확고한 철학을 상징합니다.",
      keywords: ["줄자 인증", "숫자 증명", "데이터 신뢰"]
    },
    bridge: "어떻게 진화하는가?",
    solution: {
      label: "Tech Evolution",
      headline: "철학의 기술적 확장",
      description: "심부열(RF)과 미세전류(EMS)의 자극은 기기의 작동을 ‘촉각적 효능감’으로 증명하며, '400% 흡수율' 데이터는 그녀가 찾던 객관적 증거의 정점입니다. 줄자를 든 그녀가 이제 첨단 기술의 권위자로 거듭납니다.",
      keyPoints: ["촉각적 효능감 (심부열/전류)", "객관적 증거의 정점 (400% 데이터)"]
    },
    theme: "purple"
  },
  {
    id: 1,
    tabTitle: "Architecture (설계)",
    icon: <Puzzle size={18} />,
    title: "문제 해결의 서사: 비율 설계자",
    subtitle: "옷으로 몸을 조립하듯, 기기로 얼굴을 재건축하다",
    context: {
      label: "Celeb Identity",
      headline: "비율 설계자 (Proportion Architect)",
      subHeadline: "Re-building The Body",
      description: "옷으로 어깨와 골반의 볼륨을 조절해 체형을 ‘재조립’하는 데는 경지에 올랐습니다. 하지만 옷으로 가릴 수 없는 얼굴의 무너진 라인과 골격은 그녀가 아직 정복하지 못한 마지막 미개척지입니다.",
      keywords: ["체형 재조립", "구조적 결핍", "마지막 퍼즐"]
    },
    bridge: "무엇을 해결하는가?",
    solution: {
      label: "Solution Fit",
      headline: "얼굴 골격의 재창조",
      description: "EMS로 속근육을 물리적으로 당겨 올리고, RF로 콜라겐 기둥을 세우는 과정은 옷으로 몸을 보정하듯 얼굴을 ‘리모델링’하는 건축적 행위입니다. 스키너지프로는 유일한 ‘건축 도구’입니다.",
      keyPoints: ["속근육 리프팅 (물리적 당김)", "피부 구조 재건 (콜라겐 생성)"]
    },
    theme: "blue"
  },
  {
    id: 2,
    tabTitle: "Fandom Solution (구원)",
    icon: <HeartHandshake size={18} />,
    title: "팬덤 구원: 고백과 해방",
    subtitle: "학습된 무력감에 대한 ‘고백적 해답’",
    context: {
      label: "Fandom Pain Point",
      headline: "학습된 무력감과 배신감",
      subHeadline: "Learned Helplessness",
      description: "“비싼 걸 발라도 왜 안 좋아질까?” 팬덤은 반복적인 실패 경험과 고비용 투자에 대한 깊은 배신감에 빠져 있습니다. 이는 단순한 불만을 넘어, 무엇을 해도 안 된다는 ‘학습된 무력감’입니다.",
      keywords: ["투자 실패", "반복된 좌절", "깊은 회의감"]
    },
    bridge: "어떤 희망을 주는가?",
    solution: {
      label: "Message Strategy",
      headline: "실패에 대한 면죄부",
      description: "“여러분의 잘못이 아닙니다. 도구가 없었을 뿐.” 그녀 특유의 ‘고백적 화법’은 팬들의 억울함을 해소해줍니다. 이 기기는 과거의 소비가 헛되지 않았음을 증명하는 ‘구원자적 솔루션’입니다.",
      keyPoints: ["고백적 화법 (진정성)", "기존 투자의 가치 회복"]
    },
    theme: "pink"
  }
];

// --- COMPONENTS ---

const MatchScoreGauge = ({ score }: { score: number }) => {
  const data = [
    { name: 'Score', uv: score, fill: '#8b5cf6' },
    { name: 'Max', uv: 100, fill: '#f1f5f9' },
  ];
  
  return (
    <div className="relative w-full h-64 flex flex-col items-center justify-center">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 -mt-8">
        <span className="text-4xl font-extrabold text-slate-800 tracking-tight font-sans">{score}</span>
        <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Match Score</span>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart 
          cx="50%" 
          cy="50%" 
          innerRadius="70%" 
          outerRadius="100%" 
          barSize={16} 
          data={data} 
          startAngle={180} 
          endAngle={0}
        >
          <RadialBar
            background={{ fill: '#f1f5f9' }}
            dataKey="uv"
            cornerRadius={50} 
          />
        </RadialBarChart>
      </ResponsiveContainer>
      
      <div className="absolute bottom-2 w-full px-6 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold mb-2 shadow-sm border border-green-200">
           <Sparkles size={10} /> Excellent Synergy
        </div>
        <p className="text-xs text-slate-600 font-medium leading-snug max-w-[200px] break-keep">
          브랜드의 기술력이 셀럽의 <strong className="text-slate-800">‘비율 설계 철학’</strong>을 완성하는 도구로서 작용합니다.
        </p>
      </div>
    </div>
  );
};

const DnaChart = ({ data }: { data: any[] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid gridType="polygon" stroke="#e2e8f0" />
        <PolarAngleAxis dataKey="label" tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }} />
        <Radar
          name="Celeb DNA"
          dataKey="value"
          stroke="#8b5cf6"
          strokeWidth={2}
          fill="#8b5cf6"
          fillOpacity={0.3}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default function Dashboard() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const activePillar = strategicPillars[activePillarIndex];

  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const activeContent = contentIdeas[activeContentIndex];

  const formattedDate = useMemo(() => {
    const today = new Date();
    return `${today.getFullYear()}. ${(today.getMonth() + 1).toString().padStart(2, '0')}. ${today.getDate().toString().padStart(2, '0')}`;
  }, []);

  // External Links Configuration
  const externalLinks = [
    {
      label: "제품 스토어",
      url: "https://smartstore.naver.com/regenpl",
      icon: <ShoppingBag size={14} />,
      color: "text-green-600 bg-green-50 border-green-200 hover:bg-green-100"
    },
    {
      label: "캠페인 기획안",
      url: "https://docs.google.com/spreadsheets/d/1HB0GQrPkpGmqttqDTUjtxZfDgt_gXVbIPL9aRWigfXE/edit?usp=sharing",
      icon: <FileSpreadsheet size={14} />,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200 hover:bg-emerald-100"
    },
    {
      label: "채널 분석 보고서",
      url: "https://celebeautyhaarpeer.enn.kr/",
      icon: <LayoutDashboard size={14} />,
      color: "text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-100"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pb-20 font-sans selection:bg-purple-200 selection:text-purple-900">
      
      {/* Top Navigation / Header */}
      <header className="bg-white/90 border-b border-slate-100 sticky top-0 z-50 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <Logo className="scale-75 origin-left" />
             <div className="h-4 w-px bg-slate-200 hidden md:block"></div>
             <span className="text-slate-500 text-xs font-semibold hidden md:block tracking-tight text-gray-500">
               매칭 리포트 & 전략 대시보드
             </span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* Added: Navigation Links */}
            <div className="flex items-center gap-2 mr-1">
              {externalLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all shadow-sm ${link.color} group`}
                  title={link.label}
                >
                  {link.icon}
                  <span className="hidden sm:inline">{link.label}</span>
                </a>
              ))}
            </div>

            <div className="text-right hidden xl:block">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">최종 업데이트</p>
              <p className="text-xs font-bold text-slate-700">{formattedDate}</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
              <User size={16} />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* 1. CELEB PROFILE HERO */}
        <section className="bg-white rounded-[2rem] p-6 lg:p-10 shadow-xl shadow-slate-200/40 border border-slate-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-50 to-indigo-50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl opacity-60 pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row gap-8 relative z-10">
            {/* Left: Basic Info */}
            <div className="flex-1 lg:max-w-md">
              <div className="flex items-start gap-6">
                <a 
                  href="https://www.instagram.com/haaarpeeer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group/image cursor-pointer"
                  title="인스타그램 방문하기"
                >
                  <div className="w-24 h-24 rounded-3xl bg-slate-100 border-4 border-white shadow-lg flex items-center justify-center shrink-0 overflow-hidden relative transition-transform duration-300 group-hover/image:scale-105 group-hover/image:shadow-xl group-hover/image:border-purple-100">
                     <User size={40} className="text-slate-300 absolute" />
                     <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/50 to-transparent"></div>
                     <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors flex items-center justify-center">
                        <Instagram size={28} className="text-white opacity-0 group-hover/image:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/image:translate-y-0 drop-shadow-md" />
                     </div>
                  </div>
                </a>

                <div className="pt-0.5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold tracking-tight border border-purple-100">뷰티 크리에이터</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold tracking-tight border border-slate-200">프로슈머</span>
                  </div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2 mb-0.5">
                    {celebData.name} 
                    <a href="https://www.instagram.com/haaarpeeer/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-purple-500 transition-colors"><Instagram size={20} /></a>
                  </h1>
                  <p className="text-slate-500 font-medium text-base mb-4">{celebData.handle}</p>
                  
                  <div className="flex gap-8 border-t border-slate-100 pt-4">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">팔로워</p>
                      <p className="text-xl font-bold text-slate-800 tracking-tight">{celebData.followers}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">평균 조회수</p>
                      <p className="text-xl font-bold text-slate-800 tracking-tight">{celebData.avgViews}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle: Identity Tags */}
            <div className="flex-1 flex flex-col justify-center lg:border-l lg:border-r border-slate-100 lg:px-10 py-6 lg:py-0">
               <h3 className="text-[11px] font-extrabold text-slate-400 uppercase mb-4 tracking-widest flex items-center gap-2">
                 <Zap size={12} className="text-yellow-500" /> 핵심 아이덴티티
               </h3>
               <div className="flex flex-wrap gap-2 mb-6">
                 {celebData.identity.map((tag, i) => (
                   <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm hover:border-purple-200 hover:text-purple-600 hover:shadow-md transition-all cursor-default">
                     {tag}
                   </span>
                 ))}
               </div>
               <div className="relative pl-5">
                 <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-purple-200 rounded-full"></div>
                 <p className="text-base text-slate-700 leading-relaxed font-medium" style={{ textWrap: 'balance', wordBreak: 'keep-all' }}>
                   "단순 시청을 넘어 <strong className="text-purple-700 decoration-2 underline-offset-4 underline decoration-purple-200">학습</strong>과 <strong className="text-purple-700 decoration-2 underline-offset-4 underline decoration-purple-200">문의</strong>가 폭발하는 고관여 2534 여성들의 뷰티 솔루션 연구소"
                 </p>
               </div>
            </div>

            {/* Right: Radar Chart */}
            <div className="flex-1 h-56 lg:h-auto min-h-[200px] flex flex-col">
               <h3 className="text-[11px] font-extrabold text-slate-400 uppercase mb-3 tracking-widest text-center">커머스 DNA</h3>
               <div className="flex-1 w-full min-h-0">
                 <DnaChart data={celebData.dna} />
               </div>
            </div>
          </div>
        </section>

        {/* 2. MATCHING SCORE & KEY POINTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Score */}
          <div className="lg:col-span-4 bg-white rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col">
            <div className="bg-slate-50/50 p-5 border-b border-slate-100 flex items-center justify-between backdrop-blur-sm">
               <h2 className="text-xs font-bold text-slate-800 flex items-center gap-2 uppercase tracking-wide">
                 <TrendingUp size={14} className="text-purple-600" />
                 매칭 점수
               </h2>
               <Maximize2 size={14} className="text-slate-300" />
            </div>
            <div className="flex-1 flex flex-col justify-center py-6">
               <MatchScoreGauge score={87.5} />
            </div>
          </div>

          {/* Right Column: Connection Points Checklist */}
          <div className="lg:col-span-8 bg-white rounded-[2rem] p-6 lg:p-8 shadow-lg shadow-slate-200/50 border border-slate-100">
             <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-50">
                <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <div className="p-1.5 bg-purple-50 rounded-lg text-purple-600">
                    <Target size={18} />
                  </div>
                  핵심 연결 포인트 (Key Points)
                </h2>
                <div className="flex gap-2">
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-full shadow-sm">3 핵심 시너지</span>
                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full shadow-sm">2 추가 강점</span>
                </div>
             </div>
             
             <div className="space-y-3">
               {matchPoints.map((point) => (
                 <div key={point.id} className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 group ${
                   point.isCore 
                     ? 'bg-purple-50/40 border border-purple-100 hover:bg-purple-50 hover:shadow-md hover:border-purple-200' 
                     : 'bg-indigo-50/20 border border-indigo-100 hover:bg-indigo-50/40 hover:border-indigo-200 hover:shadow-md' 
                 }`}>
                   <div className={`mt-0.5 p-1 rounded-full shrink-0 transition-colors ${
                     point.isCore 
                        ? 'bg-purple-100 text-purple-600 group-hover:bg-purple-200' 
                        : 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200'
                   }`}>
                     <CheckCircle2 size={16} />
                   </div>
                   <div className="flex-1">
                     <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h4 className={`font-bold text-sm tracking-tight ${point.isCore ? 'text-slate-900' : 'text-slate-800'}`}>
                          {point.feature}
                        </h4>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wide ${
                          point.isCore 
                            ? 'bg-white text-purple-600 border-purple-200' 
                            : 'bg-white text-indigo-500 border-indigo-200' 
                        }`}>
                          {point.connection}
                        </span>
                     </div>
                     <p className={`text-xs font-semibold mb-1 tracking-tight ${point.isCore ? 'text-purple-700' : 'text-indigo-700'}`}>
                        {point.title}
                     </p>
                     <p className={`text-sm leading-relaxed break-keep ${point.isCore ? 'text-slate-600' : 'text-slate-600'}`}>
                       {point.logic}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* 3. REPORT BODY - INSIGHTS (PRODUCT DEFINITION) */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 px-2">
             <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full"></div>
             <div>
               <h2 className="text-xl font-bold text-slate-900 tracking-tight">제품 심층 분석 (Deep Dive Analysis)</h2>
               <p className="text-slate-500 text-xs font-medium">제품의 본질적 가치 재정의</p>
             </div>
          </div>

          {/* 3-1 Product Definition */}
          <div className="bg-slate-850 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl shadow-slate-900/10 relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600 rounded-full mix-blend-overlay filter blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-overlay filter blur-[150px] opacity-10 translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                 <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10 backdrop-blur-md">제품 정의</span>
                 <h3 className="text-base font-bold text-purple-200/80 tracking-tight">우리는 무엇을 제안하는가?</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left: The Statement */}
                <div>
                   <h2 className="text-3xl md:text-4xl font-medium leading-tight text-white mb-6 break-keep" style={{ textWrap: 'balance' }}>
                     "단순한 5-in-1 기기가 아닙니다.<br className="hidden md:block"/>
                     <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300">
                       효능감 증폭 장치
                     </span>입니다."
                   </h2>
                   <p className="text-slate-300 leading-relaxed text-base mb-6 font-light break-keep">
                     이 제품의 본질은, 고가의 화장품을 사용하면서도 효과를 보지 못했던 소비자들이 겪는 
                     <strong className="text-white border-b border-purple-500/50 mx-1 font-medium">학습된 무력감(Learned Helplessness)</strong>을 종식시키고, 
                     스킨케어의 주도권을 소비자에게 되돌려주는 솔루션입니다.
                   </p>
                   <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md shadow-inner">
                      <Quote size={20} className="text-purple-400 mb-3 opacity-50"/>
                      <p className="text-base text-slate-100 font-light italic leading-relaxed break-keep">
                        "화장품의 한계를 기술로 돌파한다"는 선언은 소비자의 과거 실패가 
                        노력 부족이 아닌 <span className="text-purple-300 font-semibold not-italic">'도구의 부재'</span> 때문이었음을 명확히 함으로써 
                        심리적 부채감을 해소합니다.
                      </p>
                   </div>
                </div>

                {/* Right: Key Concepts Grid */}
                <div className="grid grid-cols-1 gap-4">
                   <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-5 hover:bg-white/10 transition-all group cursor-default shadow-lg shadow-black/5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center shrink-0 text-purple-300 group-hover:scale-110 transition-transform border border-white/5">
                        <TrendingUp size={24} />
                      </div>
                      <div className="py-0.5">
                        <h4 className="font-bold text-lg text-white mb-1 group-hover:text-purple-200 transition-colors">낭비되던 투자의 가치 복원</h4>
                        <p className="text-xs text-slate-400 leading-relaxed break-keep">
                          단순 기술 스펙이 아닌 심리적 명분입니다. 새로운 소비를 넘어, 이미 보유한 화장품 자산의 잠재력을 100% 끌어올려줍니다.
                        </p>
                      </div>
                   </div>

                   <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-5 hover:bg-white/10 transition-all group cursor-default shadow-lg shadow-black/5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 flex items-center justify-center shrink-0 text-indigo-300 group-hover:scale-110 transition-transform border border-white/5">
                        <Layers size={24} />
                      </div>
                      <div className="py-0.5">
                        <h4 className="font-bold text-lg text-white mb-1 group-hover:text-indigo-200 transition-colors">퍼스널 스킨케어 포트폴리오 매니저</h4>
                        <p className="text-xs text-slate-400 leading-relaxed break-keep">
                          화장품의 한계를 기술로 돌파하여, 스킨케어의 주도권을 소비자에게 온전히 되돌려주는 관리자로서의 정체성을 부여합니다.
                        </p>
                      </div>
                   </div>

                   <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-5 hover:bg-white/10 transition-all group cursor-default shadow-lg shadow-black/5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 flex items-center justify-center shrink-0 text-pink-300 group-hover:scale-110 transition-transform border border-white/5">
                        <CheckCircle2 size={24} />
                      </div>
                      <div className="py-0.5">
                        <h4 className="font-bold text-lg text-white mb-1 group-hover:text-pink-200 transition-colors">실패의 고리를 끊는 논리적 솔루션</h4>
                        <p className="text-xs text-slate-400 leading-relaxed break-keep">
                          팬덤의 시간과 비용, 노력이 배신당하지 않도록 만드는 가장 확실한 해답입니다. 반복적인 실패 경험을 성공으로 전환합니다.
                        </p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. STRATEGIC FIT - INTERACTIVE SECTION (DENSE & COMPACT REDESIGN) */}
        <section className="py-8">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-800 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-4 border border-slate-200 shadow-sm">
              <Sparkles size={12} className="text-purple-600" />
              전략적 적합성 & 필연적 매칭
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              왜 다른 누구도 아닌,<br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">haaarpeeer</span>인가?
            </h2>
            <p className="max-w-xl text-slate-500 text-base md:text-lg font-light leading-relaxed break-keep">
              이 만남은 선택이 아닌 <strong className="text-slate-900 font-bold decoration-4 underline decoration-purple-200 underline-offset-4">필연</strong>입니다.<br/>
              브랜드 철학, 팬덤의 고통, 그리고 미개척 영역을 관통하는 3가지 이유.
            </p>
          </div>

          {/* Interactive Tabs Navigation */}
          <div className="max-w-4xl mx-auto mb-10">
             <div className="flex flex-wrap justify-center p-1.5 bg-white rounded-full shadow-lg border border-slate-100">
                {strategicPillars.map((pillar, index) => (
                  <button 
                    key={pillar.id}
                    onClick={() => setActivePillarIndex(index)}
                    className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 outline-none overflow-hidden group ${
                       activePillarIndex === index 
                         ? 'text-white shadow-md transform scale-105' 
                         : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    {/* Active Background */}
                    {activePillarIndex === index && (
                      <div className={`absolute inset-0 transition-colors duration-500 ${
                        pillar.theme === 'purple' ? 'bg-slate-900' :
                        pillar.theme === 'blue' ? 'bg-blue-600' : 'bg-pink-600'
                      }`}></div>
                    )}
                    
                    <span className={`relative z-10 transition-transform duration-300 ${activePillarIndex === index ? 'scale-110' : 'group-hover:scale-110'}`}>
                      {pillar.icon}
                    </span>
                    <span className="relative z-10">{pillar.tabTitle}</span>
                  </button>
                ))}
             </div>
          </div>

          {/* Active Content Card - DENSE LAYOUT */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden transition-all duration-700">
             
             {/* Header Section: Compact */}
             <div className="px-6 py-6 lg:px-10 lg:py-8 border-b border-slate-100 relative overflow-hidden bg-white/80 backdrop-blur-sm z-20">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest border ${
                    activePillar.theme === 'purple' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                    activePillar.theme === 'blue' ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-pink-50 text-pink-700 border-pink-100'
                  }`}>
                    Reason 0{activePillar.id + 1}
                  </span>
                  <div className={`h-px flex-1 ${
                     activePillar.theme === 'purple' ? 'bg-purple-100' :
                     activePillar.theme === 'blue' ? 'bg-blue-100' : 'bg-pink-100'
                  }`}></div>
                </div>
                <h3 className="text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tight break-keep">
                  {activePillar.title.split(':')[0]}: <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                    activePillar.theme === 'purple' ? 'from-purple-600 to-indigo-600' :
                    activePillar.theme === 'blue' ? 'from-blue-600 to-cyan-600' : 'from-pink-600 to-rose-600'
                  }`}>{activePillar.title.split(':')[1]}</span>
                </h3>
             </div>

             {/* Content Split: Dense & Connected */}
             <div className="flex flex-col lg:flex-row">
                
                {/* Left: The Context (Tinted BG) */}
                <div className={`flex-1 p-8 lg:p-10 relative ${
                  activePillar.theme === 'purple' ? 'bg-purple-50/40' :
                  activePillar.theme === 'blue' ? 'bg-blue-50/40' : 'bg-pink-50/40'
                }`}>
                   {/* Decorative background blob */}
                   <div className={`absolute top-0 left-0 w-full h-full opacity-30 mix-blend-multiply pointer-events-none ${
                      activePillar.theme === 'purple' ? 'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-100 via-transparent to-transparent' :
                      activePillar.theme === 'blue' ? 'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent' : 
                      'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-100 via-transparent to-transparent'
                   }`}></div>

                   <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-2 text-slate-400 font-extrabold uppercase text-[10px] tracking-[0.2em] mb-3">
                        <User size={12} /> {activePillar.context.label}
                      </div>
                      
                      <h4 className={`text-lg font-bold mb-1 ${
                        activePillar.theme === 'purple' ? 'text-purple-900' :
                        activePillar.theme === 'blue' ? 'text-blue-900' : 'text-pink-900'
                      }`}>
                        {activePillar.context.headline}
                      </h4>
                      <p className="text-slate-500 font-serif italic mb-5 text-xs">{activePillar.context.subHeadline}</p>
                      
                      {/* Quote Card */}
                      <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm mb-5 relative">
                         <Quote className="absolute top-3 left-3 text-slate-100" size={20} />
                         <p className="relative z-10 text-slate-700 leading-relaxed font-medium pt-1 break-keep text-sm">
                           {activePillar.context.description}
                         </p>
                      </div>

                      <div className="mt-auto flex flex-wrap gap-2">
                        {activePillar.context.keywords.map((kw, i) => (
                          <span key={i} className="px-2.5 py-0.5 bg-white border border-slate-200 text-slate-500 text-[10px] font-bold rounded-lg shadow-sm">
                            #{kw}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>

                {/* Right: The Solution (White BG) */}
                <div className="flex-1 p-8 lg:p-10 bg-white relative">
                   <div className="flex flex-col h-full">
                       <div className="flex items-center gap-2 font-extrabold uppercase text-[10px] tracking-[0.2em] mb-3 opacity-70" style={{ color: activePillar.theme === 'purple' ? '#7e22ce' : activePillar.theme === 'blue' ? '#1d4ed8' : '#be123c' }}>
                          <Zap size={12} /> {activePillar.solution.label}
                       </div>

                       <h4 className="text-lg font-bold text-slate-900 mb-2 break-keep leading-snug">
                         {activePillar.solution.headline}
                       </h4>
                       
                       <p className="text-slate-600 leading-relaxed mb-6 text-sm break-keep">
                         {activePillar.solution.description}
                       </p>

                       <div className="mt-auto grid grid-cols-1 gap-2.5">
                          {activePillar.solution.keyPoints.map((point, i) => (
                            <div key={i} className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all hover:shadow-sm ${
                              activePillar.theme === 'purple' ? 'bg-purple-50/30 border-purple-100 hover:border-purple-200' :
                              activePillar.theme === 'blue' ? 'bg-blue-50/30 border-blue-100 hover:border-blue-200' : 
                              'bg-pink-50/30 border-pink-100 hover:border-pink-200'
                            }`}>
                               <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                                 activePillar.theme === 'purple' ? 'bg-purple-100 text-purple-600' :
                                 activePillar.theme === 'blue' ? 'bg-blue-100 text-blue-600' : 
                                 'bg-pink-100 text-pink-600'
                               }`}>
                                 <CheckCircle2 size={10} />
                               </div>
                               <span className={`font-bold text-xs ${
                                  activePillar.theme === 'purple' ? 'text-purple-900' :
                                  activePillar.theme === 'blue' ? 'text-blue-900' : 'text-pink-900'
                               }`}>{point}</span>
                            </div>
                          ))}
                       </div>
                   </div>
                </div>

             </div>
          </div>
        </section>

        {/* 5. CONTENT STRATEGY - UPDATED SECTION */}
        <section>
          {/* Header */}
          <div className="flex items-center justify-between mb-6 mt-12 px-2">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-slate-900 rounded-full"></div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">콘텐츠 전략 & 아이디어 (Content Strategy)</h2>
                <p className="text-slate-500 text-xs mt-0.5 font-medium">단순 공구가 아닌 '브랜드 서사'를 완성하는 3단계 시나리오</p>
              </div>
            </div>
          </div>

          {/* Removed Strategic Core Section as requested */}

          {/* Content Strategy - Clean Document Layout */}
          <div className="relative">
             {/* Tabs Navigation */}
             <div className="flex w-full mb-0 border-b border-slate-200/60 overflow-x-auto">
                {contentIdeas.map((idea, idx) => (
                   <button 
                     key={idx}
                     onClick={() => setActiveContentIndex(idx)}
                     className={`relative flex-1 py-4 px-5 text-xs font-bold uppercase tracking-widest transition-all outline-none whitespace-nowrap hover:bg-slate-50 ${
                        activeContentIndex === idx 
                           ? 'text-slate-900' 
                           : 'text-slate-400 hover:text-slate-600'
                     }`}
                   >
                     <span className="mr-2 opacity-50 font-serif italic">0{idx + 1}.</span>
                     {idea.subTitle}
                     {activeContentIndex === idx && (
                        <div className={`absolute bottom-0 left-0 w-full h-0.5 ${
                           idea.theme === 'purple' ? 'bg-purple-600' :
                           idea.theme === 'blue' ? 'bg-blue-600' :
                           'bg-pink-600'
                        }`}></div>
                     )}
                   </button>
                ))}
             </div>

             {/* Main Content Area - Document Style */}
             <div className="bg-white rounded-b-[2.5rem] shadow-xl border-x border-b border-slate-100 relative z-10 overflow-hidden p-6 md:p-10">
                 
                 {/* 1. Header & Tags */}
                 <div className="max-w-4xl mx-auto mb-10 text-center">
                    <div className="flex flex-wrap justify-center gap-2.5 mb-4">
                       {activeContent.tags.map((tag, i) => (
                          <span key={i} className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border shadow-sm ${
                            activeContent.theme === 'purple' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                            activeContent.theme === 'blue' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                            'bg-pink-50 text-pink-700 border-pink-100'
                          }`}>
                            {tag}
                          </span>
                        ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-[1.2] mb-3 break-keep tracking-tight">
                       {activeContent.title}
                    </h3>
                    <p className="text-slate-400 font-medium text-sm uppercase tracking-widest">{activeContent.subTitle}</p>
                 </div>

                 {/* 2. The Scenario Flow - Timeline Card Style */}
                 <div className="max-w-3xl mx-auto mb-12">
                    <div className="flex items-center gap-2.5 mb-6">
                       <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-slate-500">
                          <Clapperboard size={14} />
                       </span>
                       <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Scenario Flow (연출 흐름)</h4>
                    </div>
                    
                    <div className="relative pl-6 border-l-2 border-slate-100 ml-3.5 space-y-4">
                         {activeContent.flow.map((step, i) => (
                           <div key={i} className="relative group">
                              {/* Timeline Dot */}
                              <div className={`absolute -left-[33px] top-0 w-5 h-5 rounded-full border-4 border-white shadow-sm transition-colors duration-300 z-10 ${
                                 activeContent.theme === 'purple' ? 'bg-purple-500 group-hover:scale-125' :
                                 activeContent.theme === 'blue' ? 'bg-blue-500 group-hover:scale-125' :
                                 'bg-pink-500 group-hover:scale-125'
                              }`}></div>

                              {/* Content Card */}
                              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all relative">
                                 <div className="absolute -left-2.5 top-5 w-2.5 h-2.5 bg-white border-l border-b border-slate-200 transform rotate-45"></div>
                                 <span className={`block text-[10px] font-bold uppercase tracking-widest mb-2 ${
                                    activeContent.theme === 'purple' ? 'text-purple-600' :
                                    activeContent.theme === 'blue' ? 'text-blue-600' :
                                    'text-pink-600'
                                 }`}>
                                    Step 0{i + 1}
                                 </span>
                                 <p className="text-sm text-slate-700 leading-relaxed font-medium break-keep">
                                   {step}
                                 </p>
                              </div>
                           </div>
                         ))}
                    </div>
                 </div>

                 {/* 3. Strategic Analysis Grid - Logic vs Synergy */}
                 <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Left: Logic (Why it fits) */}
                    <div className="flex flex-col">
                       <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                          <Target size={14} /> 전략적 적합성 (Why it fits)
                       </h4>
                       <div className="bg-slate-50 rounded-[1.5rem] p-6 md:p-8 relative flex-1">
                          <Quote className="text-slate-200 absolute top-6 left-6" size={32} />
                          <p className="relative z-10 text-slate-700 leading-relaxed text-sm break-keep font-medium pt-3">
                             {activeContent.rationale}
                          </p>
                          <div className="mt-4 flex items-center gap-2.5">
                             <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Strategy Team Insight</span>
                          </div>
                       </div>
                    </div>

                    {/* Right: Synergy (Expected Impact) */}
                    <div className="flex flex-col">
                       <h4 className={`text-[10px] font-extrabold uppercase tracking-widest mb-4 flex items-center gap-1.5 ${
                          activeContent.theme === 'purple' ? 'text-purple-600' :
                          activeContent.theme === 'blue' ? 'text-blue-600' :
                          'text-pink-600'
                       }`}>
                          <Zap size={14} /> 기대 효과 (Expected Synergy)
                       </h4>
                       <div className={`rounded-[1.5rem] p-6 md:p-8 flex-1 relative overflow-hidden group transition-all duration-500 hover:shadow-lg border ${
                          activeContent.theme === 'purple' ? 'bg-gradient-to-br from-purple-600 to-indigo-700 border-purple-500' :
                          activeContent.theme === 'blue' ? 'bg-gradient-to-br from-blue-600 to-cyan-700 border-blue-500' :
                          'bg-gradient-to-br from-pink-600 to-rose-700 border-pink-500'
                       }`}>
                          {/* Decorative overlay */}
                          <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                          <div className="absolute bottom-0 left-0 w-32 h-32 bg-black opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                          <div className="relative z-10 h-full flex flex-col justify-between">
                             <p className="text-white text-base leading-relaxed break-keep font-medium shadow-sm">
                                "{activeContent.synergy}"
                             </p>
                             <div className="mt-6 pt-6 border-t border-white/20 flex justify-between items-center">
                                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Impact Analysis</span>
                                <div className="bg-white/20 p-1.5 rounded-full text-white backdrop-blur-sm">
                                   <TrendingUp size={16} />
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>

                 </div>

             </div>
          </div>
        </section>

      </main>
    </div>
  );
}