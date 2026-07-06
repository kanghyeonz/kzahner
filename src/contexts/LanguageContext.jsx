import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the language context
const LanguageContext = createContext();

const translations = {
  en: {
    // Shared
    fullName: 'Kanghyeon Kim',
    altNames: '김강현 · 金江泫',
    nameNote: 'In Switzerland, I am legally registered as Kanghyeon Zahner.',
    navHome: 'Home',
    navAbout: 'About',
    email: 'Email',
    address: 'Location',
    currentAddress: 'Palaiseau, France',

    // Home page
    role: 'AI & Machine Learning',
    bio: 'I am a master’s student in Data & AI at Institut Polytechnique de Paris and a research intern at Télécom Paris, where I study how multilingual large language models represent language internally, using graph and spectral methods. From September 2026, I will join the Master MVA (M2) at ENS Paris-Saclay. Before moving to France, I completed my B.S. in Computing at KAIST (cum laude).',
    nowTitle: 'Currently',
    now1Title: 'Research Intern',
    now1Org: 'Télécom Paris — multilingual LLM interpretability',
    now1Date: 'Apr 2026 – present',
    now2Title: 'M1 — Data & AI',
    now2Org: 'Institut Polytechnique de Paris',
    now2Date: '2025 – 2026',
    now3Title: 'Incoming M2 — Master MVA',
    now3Org: 'ENS Paris-Saclay',
    now3Date: 'from Sep 2026',
    viewCV: 'View full CV',
    recommendation: 'Recommendation',
    recQuote:
      'Kanghyeon worked with me as an undergraduate researcher for about a year and a half. From the start, he showed exceptional curiosity and independence, leading projects on language models and even exploring the ethical dimensions of AI. He always came prepared, thought deeply, and communicated clearly. It was a real pleasure to mentor him, and I’m confident he’ll continue to grow as a thoughtful and capable researcher.',
    recAuthor: 'Jiseon Kim, Ph.D. candidate at U&I Lab, KAIST (May 2025)',

    // About page
    aboutMe: 'About',
    interestsTitle: 'Research Interests',
    interestsBody:
      'Mathematical interpretation of learned representations; representation dynamics in multilingual large language models; graph and spectral methods for analyzing attention and neural representations.',
    citizenInfo: 'South Korean citizen · Swiss residence permit (B) holder',
    nameExplanation:
      'My legal name is 김강현 (Kanghyeon Kim, as shown on my passport); in Switzerland, my legal name is Kanghyeon Zahner.',

    // Locations
    palaiseauFrance: 'Palaiseau, France',
    gifFrance: 'Gif-sur-Yvette, France',
    daejeonKorea: 'Daejeon, South Korea',
    busanKorea: 'Busan, South Korea',

    // Education
    education: 'Education',
    edu1School: 'ENS Paris-Saclay',
    edu1Degree: 'M2 — Master MVA (Mathématiques, Vision, Apprentissage)',
    edu1Date: 'Sep 2026 (incoming)',
    edu2School: 'Institut Polytechnique de Paris',
    edu2Degree: 'M1 — Data and Artificial Intelligence',
    edu2Date: 'Sep 2025 – Aug 2026',
    edu2Point1: 'Current average: 17.06/20.',
    edu2Point2:
      'Advanced Deep Learning at École Polytechnique: ranked 5th of ~120 students (A+).',
    edu3School: 'Korea Advanced Institute of Science and Technology (KAIST)',
    edu3Degree: 'B.S. in Computing (cum laude), AI Special Designated Major',
    edu3Date: 'Feb 2019 – Feb 2025',

    // Research experience
    experience: 'Research Experience',
    exp1Org: 'Télécom Paris',
    exp1Role: 'Research Intern',
    exp1Date: 'Apr 2026 – present',
    exp1Sup:
      'Supervised by Prof. Yanzhu Guo · co-supervised by Prof. Johannes Lutzeyer',
    exp1Point1:
      'Analyzing layerwise representations in multilingual LLMs, focusing on language-specific and language-shared components during decoding.',
    exp1Point2:
      'Modeling token-to-token attention as directed weighted graphs and applying graph and spectral methods to compare patterns across layers, languages, and decoding steps.',
    exp1Point3:
      'Testing how representation-level patterns relate to performance on multilingual and cultural-knowledge benchmarks.',
    exp2Org: 'U&I Lab, KAIST',
    exp2Role: 'Undergraduate Researcher',
    exp2Date: 'Jul 2023 – Aug 2024',
    exp2Sup: 'Supervised by Prof. Alice Oh',
    proj1Name: 'Autocomplete Algorithm for LLMs',
    proj1Desc:
      'an n-gram-assisted decoding algorithm that reuses prompt/context segments to reduce autoregressive generation cost without training an additional draft model; evaluated on five instruction-tuned LLMs across four generation tasks.',
    proj2Name: 'Fixed Error Rate Training (FERT)',
    proj2Desc:
      'an adaptive curriculum-learning method that dynamically selects training examples based on the model’s current error rate; fine-tuned BERT-base on six GLUE tasks to analyze training efficiency and generalization.',

    // Awards
    awards: 'Awards',
    award1Title: 'KAIST Undergraduate Research Program (URP) Award',
    award1Date: 'Winter/Spring 2024',
    award1Desc: 'For the research project “Autocomplete Algorithm for LLMs”.',
    award2Title: 'Dean’s List, KAIST',
    award2Date: 'Sep 2019',
    award2Desc: 'GPA in the top 2% of the entire freshman class.',

    // Military service
    military: 'Military Service',
    milOrg: 'Republic of Korea Army, 53rd Infantry Division',
    milDate: 'Feb 2020 – Aug 2021',
    milDesc:
      'Squad leader responsible for eight soldiers; honorably discharged with the rank of sergeant.',

    // Skills & languages
    skillsTitle: 'Skills & Languages',
    programmingLanguages: 'Programming',
    programmingValue: 'C, Python, Scala, F#, SQL',
    librariesTools: 'Libraries & tools',
    librariesValue: 'PyTorch, Hugging Face Transformers, Git',
    researchAreas: 'Research areas',
    researchAreasValue:
      'Natural language processing · LLM interpretability · graph & spectral methods',
    languagesLabel: 'Languages',
    koreanNative: 'Korean — native',
    englishLevel: 'English — full professional proficiency (IELTS 8.0)',
    frenchLevel: 'French — elementary (CEFR A2)',
    germanLevel: 'German — elementary (CEFR A2)',
  },
  de: {
    // Shared
    fullName: 'Kanghyeon Kim',
    altNames: '김강현 · 金江泫',
    nameNote: 'In der Schweiz lautet mein amtlicher Name Kanghyeon Zahner.',
    navHome: 'Home',
    navAbout: 'Über mich',
    email: 'E-Mail',
    address: 'Standort',
    currentAddress: 'Palaiseau, Frankreich',

    // Home page
    role: 'KI & Maschinelles Lernen',
    bio: 'Ich bin Masterstudent in Data & AI am Institut Polytechnique de Paris und Forschungspraktikant an der Télécom Paris. Dort untersuche ich mit Graph- und Spektralmethoden, wie mehrsprachige große Sprachmodelle Sprache intern repräsentieren. Ab September 2026 setze ich mein Studium im Master MVA (M2) an der ENS Paris-Saclay fort. Zuvor habe ich meinen B.S. in Computing am KAIST mit Auszeichnung (cum laude) abgeschlossen.',
    nowTitle: 'Aktuell',
    now1Title: 'Forschungspraktikant',
    now1Org: 'Télécom Paris — Interpretierbarkeit mehrsprachiger LLMs',
    now1Date: 'seit Apr. 2026',
    now2Title: 'M1 — Data & AI',
    now2Org: 'Institut Polytechnique de Paris',
    now2Date: '2025 – 2026',
    now3Title: 'M2 — Master MVA (ab Herbst)',
    now3Org: 'ENS Paris-Saclay',
    now3Date: 'ab Sep. 2026',
    viewCV: 'Vollständigen Lebenslauf ansehen',
    recommendation: 'Empfehlung',
    recQuote:
      'Kanghyeon hat rund anderthalb Jahre als studentischer Forscher mit mir gearbeitet. Von Anfang an zeigte er außergewöhnliche Neugier und Selbstständigkeit, leitete Projekte zu Sprachmodellen und beschäftigte sich sogar mit den ethischen Dimensionen von KI. Er war stets gut vorbereitet, dachte gründlich nach und kommunizierte klar. Es war mir eine große Freude, ihn zu betreuen, und ich bin überzeugt, dass er sich zu einem umsichtigen und fähigen Forscher weiterentwickeln wird.',
    recAuthor: 'Jiseon Kim, Doktorandin am U&I Lab, KAIST (Mai 2025)',

    // About page
    aboutMe: 'Über mich',
    interestsTitle: 'Forschungsinteressen',
    interestsBody:
      'Mathematische Interpretation gelernter Repräsentationen; Repräsentationsdynamik in mehrsprachigen großen Sprachmodellen; Graph- und Spektralmethoden zur Analyse von Attention und neuronalen Repräsentationen.',
    citizenInfo:
      'Südkoreanischer Staatsbürger · Inhaber einer Schweizer B-Bewilligung',
    nameExplanation:
      'Mein amtlicher Name ist 김강현 (Kanghyeon Kim, wie im Pass angegeben); in der Schweiz lautet mein amtlicher Name Kanghyeon Zahner.',

    // Locations
    palaiseauFrance: 'Palaiseau, Frankreich',
    gifFrance: 'Gif-sur-Yvette, Frankreich',
    daejeonKorea: 'Daejeon, Südkorea',
    busanKorea: 'Busan, Südkorea',

    // Education
    education: 'Ausbildung',
    edu1School: 'ENS Paris-Saclay',
    edu1Degree: 'M2 — Master MVA (Mathématiques, Vision, Apprentissage)',
    edu1Date: 'ab Sep. 2026',
    edu2School: 'Institut Polytechnique de Paris',
    edu2Degree: 'M1 — Data and Artificial Intelligence',
    edu2Date: 'Sep. 2025 – Aug. 2026',
    edu2Point1: 'Aktueller Notendurchschnitt: 17,06/20.',
    edu2Point2:
      'Advanced Deep Learning an der École Polytechnique: Rang 5 von ca. 120 Studierenden (A+).',
    edu3School: 'Korea Advanced Institute of Science and Technology (KAIST)',
    edu3Degree: 'B.S. in Computing (cum laude), AI Special Designated Major',
    edu3Date: 'Feb. 2019 – Feb. 2025',

    // Research experience
    experience: 'Forschungserfahrung',
    exp1Org: 'Télécom Paris',
    exp1Role: 'Forschungspraktikant',
    exp1Date: 'seit Apr. 2026',
    exp1Sup:
      'Betreut von Prof. Yanzhu Guo · Zweitbetreuung: Prof. Johannes Lutzeyer',
    exp1Point1:
      'Analyse schichtweiser Repräsentationen in mehrsprachigen LLMs, mit Fokus auf sprachspezifische und sprachübergreifend geteilte Komponenten während des Decodierens.',
    exp1Point2:
      'Modellierung von Token-zu-Token-Attention als gerichtete gewichtete Graphen; Anwendung von Graph- und Spektralmethoden zum Vergleich von Mustern über Schichten, Sprachen und Decodierschritte hinweg.',
    exp1Point3:
      'Untersuchung, wie Muster auf Repräsentationsebene mit der Leistung auf mehrsprachigen und kulturbezogenen Benchmarks zusammenhängen.',
    exp2Org: 'U&I Lab, KAIST',
    exp2Role: 'Studentischer Forscher',
    exp2Date: 'Juli 2023 – Aug. 2024',
    exp2Sup: 'Betreut von Prof. Alice Oh',
    proj1Name: 'Autocomplete Algorithm for LLMs',
    proj1Desc:
      'ein n-Gramm-gestützter Decodieralgorithmus, der Prompt-/Kontextsegmente wiederverwendet, um die Kosten autoregressiver Generierung ohne zusätzliches Draft-Modell zu senken; evaluiert an fünf instruktionsoptimierten LLMs über vier Generierungsaufgaben.',
    proj2Name: 'Fixed Error Rate Training (FERT)',
    proj2Desc:
      'eine adaptive Curriculum-Learning-Methode, die Trainingsbeispiele anhand der aktuellen Fehlerrate des Modells dynamisch auswählt; Feinabstimmung von BERT-base auf sechs GLUE-Aufgaben zur Analyse von Trainingseffizienz und Generalisierung.',

    // Awards
    awards: 'Auszeichnungen',
    award1Title: 'KAIST Undergraduate Research Program (URP) Award',
    award1Date: 'Winter/Frühjahr 2024',
    award1Desc: 'Für das Forschungsprojekt „Autocomplete Algorithm for LLMs“.',
    award2Title: 'Dean’s List, KAIST',
    award2Date: 'Sep. 2019',
    award2Desc:
      'Notendurchschnitt unter den besten 2 % des gesamten Erstsemester-Jahrgangs.',

    // Military service
    military: 'Militärdienst',
    milOrg: 'Streitkräfte der Republik Korea, 53. Infanteriedivision',
    milDate: 'Feb. 2020 – Aug. 2021',
    milDesc:
      'Gruppenführer mit Verantwortung für acht Soldaten; ehrenhaft im Rang eines Unteroffiziers (Sergeant) entlassen.',

    // Skills & languages
    skillsTitle: 'Kenntnisse & Sprachen',
    programmingLanguages: 'Programmierung',
    programmingValue: 'C, Python, Scala, F#, SQL',
    librariesTools: 'Bibliotheken & Tools',
    librariesValue: 'PyTorch, Hugging Face Transformers, Git',
    researchAreas: 'Forschungsfelder',
    researchAreasValue:
      'Verarbeitung natürlicher Sprache · Interpretierbarkeit von LLMs · Graph- & Spektralmethoden',
    languagesLabel: 'Sprachen',
    koreanNative: 'Koreanisch — Muttersprache',
    englishLevel: 'Englisch — verhandlungssicher (IELTS 8.0)',
    frenchLevel: 'Französisch — Grundkenntnisse (GER A2)',
    germanLevel: 'Deutsch — Grundkenntnisse (GER A2)',
  },
  ko: {
    // Shared
    fullName: '김강현',
    altNames: 'Kanghyeon Kim · 金江泫',
    nameNote: '스위스에서의 법적 성명은 Kanghyeon Zahner입니다.',
    navHome: '홈',
    navAbout: '소개',
    email: '이메일',
    address: '거주지',
    currentAddress: '프랑스 팔레조',

    // Home page
    role: '인공지능 · 기계학습',
    bio: '파리 종합기술원(IP Paris) 데이터·인공지능 석사과정(M1)에 재학 중이며, 텔레콤 파리에서 연구 인턴으로 일하고 있습니다. 다국어 대형 언어 모델이 언어를 내부적으로 어떻게 표현하는지를 그래프·스펙트럼 방법으로 연구합니다. 2026년 9월부터는 ENS Paris-Saclay의 MVA 석사과정(M2)에 진학할 예정입니다. KAIST 전산학부를 우등(cum laude)으로 졸업했습니다.',
    nowTitle: '현재',
    now1Title: '연구 인턴',
    now1Org: '텔레콤 파리 — 다국어 LLM 해석가능성',
    now1Date: '2026년 4월 – 현재',
    now2Title: 'M1 — 데이터·인공지능',
    now2Org: 'Institut Polytechnique de Paris',
    now2Date: '2025 – 2026',
    now3Title: 'M2 — MVA 진학 예정',
    now3Org: 'ENS Paris-Saclay',
    now3Date: '2026년 9월 –',
    viewCV: '전체 이력 보기',
    recommendation: '추천사',
    recQuote:
      '강현이는 약 1년 반 동안 저와 함께 학부 연구원으로 일했습니다. 처음부터 남다른 호기심과 자립심을 보여 주었고, 언어 모델 연구 프로젝트를 주도했으며 AI의 윤리적 측면까지 탐구했습니다. 언제나 준비된 자세로 깊이 생각하고 명확하게 소통했습니다. 그를 지도하는 일은 진정한 즐거움이었고, 앞으로도 사려 깊고 유능한 연구자로 성장하리라 확신합니다.',
    recAuthor: 'Jiseon Kim, KAIST U&I Lab 박사과정 (2025년 5월)',

    // About page
    aboutMe: '소개',
    interestsTitle: '연구 관심사',
    interestsBody:
      '학습된 표현의 수학적 해석, 다국어 대형 언어 모델의 표현 동역학, 어텐션과 신경망 표현 분석을 위한 그래프·스펙트럼 방법.',
    citizenInfo: '대한민국 국적 · 스위스 B 체류허가 소지',
    nameExplanation:
      '법적 성명은 김강현(여권상 Kanghyeon Kim)이며, 스위스에서의 법적 성명은 Kanghyeon Zahner입니다.',

    // Locations
    palaiseauFrance: '프랑스 팔레조',
    gifFrance: '프랑스 지프쉬르이베트',
    daejeonKorea: '대한민국 대전',
    busanKorea: '대한민국 부산',

    // Education
    education: '학력',
    edu1School: 'ENS Paris-Saclay (파리-사클레 고등사범학교)',
    edu1Degree: 'M2 — MVA (Mathématiques, Vision, Apprentissage) 석사과정',
    edu1Date: '2026년 9월 입학 예정',
    edu2School: 'Institut Polytechnique de Paris (파리 종합기술원)',
    edu2Degree: 'M1 — 데이터·인공지능 (Data and Artificial Intelligence)',
    edu2Date: '2025년 9월 – 2026년 8월',
    edu2Point1: '현재 평균 성적 17.06/20.',
    edu2Point2:
      '에콜 폴리테크니크의 Advanced Deep Learning 과목에서 약 120명 중 5위 (A+).',
    edu3School: 'KAIST (한국과학기술원)',
    edu3Degree: '전산학 학사 (우등 졸업), 인공지능 특별 지정 전공',
    edu3Date: '2019년 2월 – 2025년 2월',

    // Research experience
    experience: '연구 경력',
    exp1Org: '텔레콤 파리 (Télécom Paris)',
    exp1Role: '연구 인턴',
    exp1Date: '2026년 4월 – 현재',
    exp1Sup: '지도: Yanzhu Guo 교수 · 공동 지도: Johannes Lutzeyer 교수',
    exp1Point1:
      '다국어 LLM의 계층별 표현을 분석하며, 디코딩 과정에서 언어 특화 성분과 언어 간 공유 성분에 초점을 둡니다.',
    exp1Point2:
      '토큰 간 어텐션을 유향 가중 그래프로 모델링하고, 그래프·스펙트럼 방법으로 층·언어·디코딩 단계에 따른 패턴을 비교합니다.',
    exp1Point3:
      '표현 수준의 패턴이 다국어·문화 지식 벤치마크 성능과 어떻게 연결되는지 검증합니다.',
    exp2Org: 'U&I Lab, KAIST',
    exp2Role: '학부 연구원',
    exp2Date: '2023년 7월 – 2024년 8월',
    exp2Sup: '지도: Alice Oh 교수',
    proj1Name: 'Autocomplete Algorithm for LLMs',
    proj1Desc:
      '별도의 초안 모델(draft model) 없이 프롬프트·문맥의 조각을 재사용해 자기회귀 생성 비용을 줄이는 n-그램 기반 디코딩 알고리즘. 5개의 명령어 조정 LLM과 4가지 생성 과제에서 평가.',
    proj2Name: 'Fixed Error Rate Training (FERT)',
    proj2Desc:
      '모델의 현재 오류율에 따라 훈련 예제를 동적으로 선택하는 적응형 커리큘럼 학습 기법. BERT-base를 6개 GLUE 과제에 미세 조정하여 훈련 효율과 일반화를 분석.',

    // Awards
    awards: '수상',
    award1Title: 'KAIST 학부생 연구 프로그램(URP) 상',
    award1Date: '2024년 겨울·봄',
    award1Desc: '“Autocomplete Algorithm for LLMs” 연구로 수상.',
    award2Title: 'Dean’s List, KAIST',
    award2Date: '2019년 9월',
    award2Desc: 'KAIST 1학년 전체 상위 2% 평점.',

    // Military service
    military: '병역',
    milOrg: '대한민국 육군 제53보병사단',
    milDate: '2020년 2월 – 2021년 8월',
    milDesc: '8명의 분대원을 이끄는 분대장으로 복무했으며, 병장으로 만기 전역.',

    // Skills & languages
    skillsTitle: '기술 & 언어',
    programmingLanguages: '프로그래밍 언어',
    programmingValue: 'C, Python, Scala, F#, SQL',
    librariesTools: '라이브러리 & 도구',
    librariesValue: 'PyTorch, Hugging Face Transformers, Git',
    researchAreas: '연구 분야',
    researchAreasValue: '자연어 처리 · LLM 해석가능성 · 그래프·스펙트럼 방법',
    languagesLabel: '언어',
    koreanNative: '한국어 — 모국어',
    englishLevel: '영어 — 상급 (IELTS 8.0)',
    frenchLevel: '프랑스어 — 초급 (CEFR A2)',
    germanLevel: '독일어 — 초급 (CEFR A2)',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check if user has a saved preference
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language');
      // Return saved language or default to English
      return savedLang || 'en';
    }
    return 'en';
  });

  // Apply language whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
