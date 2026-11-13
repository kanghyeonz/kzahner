import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the language context
const LanguageContext = createContext();

const translations = {
  en: {
    ongoingResearch: "After the internship, the collaboration with Prof. Johannes F. Lutzeyer and Prof. Yanzhu Guo continued until October 2026 for the publication.",
    // Shared
    fullName: 'Kanghyeon Kim',
    languageHint: 'You can change it later at the top right.',

    // Hero
    bio: 'I am a master’s student in the MVA (M2) program of the Department of Mathematics at École normale supérieure Paris-Saclay. My research interests include machine learning theory, representation learning, and optimization.',
    recommendation: 'Recommendation',
    recQuote:
      'Kanghyeon worked with me as an undergraduate researcher for about a year and a half. From the start, he showed exceptional curiosity and independence, leading projects on language models and even exploring the ethical dimensions of AI. He always came prepared, thought deeply, and communicated clearly. It was a real pleasure to mentor him, and I’m confident he’ll continue to grow as a thoughtful and capable researcher.',
    recAuthorName: 'Jiseon Kim',
    recAuthorRest: ', Ph.D. candidate at U&I Lab, KAIST (May 2025)',

    // Sections
    chipKrMain: 'South Korean citizen',
    chipKrItems: ['Legal name: 김강현', 'Passport name: Kanghyeon Kim'],
    chipChMain: 'Swiss resident',
    chipChItems: ['Work (B) permit holder', 'Legal name: Kanghyeon Zahner'],
    chipFrMain: 'In France for my master’s',
    chipFrItems: ['Until March 2027'],

    // Locations
    palaiseauFrance: 'Palaiseau, France',
    gifFrance: 'Gif-sur-Yvette, France',
    daejeonKorea: 'Daejeon, South Korea',
    busanKorea: 'Busan, South Korea',

    // Education
    education: 'Education',
    edu1School: 'École normale supérieure Paris-Saclay',
    edu1DegreePre: 'M2 — ',
    edu1DegreeMain: 'Master MVA (Mathématiques, Vision, Apprentissage)',
    edu1DegreeRest: ' · currently enrolled',
    edu1Date: 'Sep 2026 – Sep 2027 (expected)',
    edu1CourseworkLabel: 'First-semester coursework (in progress)',
    edu1Coursework:
      'Convex Optimization and Applications in Machine Learning; Optimal Transport for Machine Learning; Foundations of Distributed and Large Scale Computing Optimization; Introduction to Statistical Learning; Stochastic Calculus in Machine Learning: Sampling and Generative Modeling; Mathematical Methods for Neuroscience.',
    edu2School: 'Institut Polytechnique de Paris',
    edu2DegreePre: 'M1 — ',
    edu2DegreeMain: 'Data and Artificial Intelligence',
    edu2Date: 'Sep 2025 – Aug 2026',
    edu2Point1: 'Overall average: 17.38/20.',
    edu3School: 'Korea Advanced Institute of Science and Technology (KAIST)',
    edu3DegreeMain: 'B.S. in Computer Science',
    edu3DegreeRest: ' (cum laude), AI Special Designated Major',
    edu3Date: 'Feb 2019 – Feb 2025',

    // Publications
    publications: 'Publications',
    pub1Title: 'Attention-Graph Curvature for the Verification of Mathematical Reasoning',
    pub1Venue: 'NeurIPS 2026 Workshop on Mathematical Reasoning and AI (MATH-AI), accepted poster.',
    pub1Date: '2026',

    // Research experience
    experience: 'Research Experience',
    exp1Org: 'Télécom Paris',
    exp1Org2: 'École polytechnique',
    exp1Role: 'Research Intern',
    supervisedBy: 'Supervised by',
    andWord: 'and',
    supLutzeyer: 'Prof. Johannes F. Lutzeyer',
    supGuo: 'Prof. Yanzhu Guo',
    supOh: 'Prof. Alice Oh',
    exp1Date: 'Apr 2026 – Aug 2026',
    exp1Point1: 'Used directed Forman curvature of attention graphs as a signal for detecting errors in LLM-generated mathematical reasoning.',
    exp1Point2: 'Designed, ran, and analyzed experiments comparing four step-level verifiers with and without curvature features, finding that curvature improved the mean performance of all four.',
    exp2Org: 'U&I Lab, KAIST',
    exp2Role: 'Undergraduate Researcher',
    exp2Date: 'Jul 2023 – Aug 2024',
    proj1Name: 'Autocomplete Algorithm for LLMs',
    proj1Desc:
      'a decoding method in which an n-gram model built from the input suggests the next several tokens and the LLM checks them in a single forward pass; experiments on five LLMs and four tasks showed speedups for certain combinations of models and tasks.',
    proj2Name: 'Fixed Error Rate Training (FERT)',
    proj2Desc:
      'a fine-tuning method that adjusts the training set before each epoch so that a fixed fraction of it (the error rate) consists of instances the model currently gets wrong; in BERT-base experiments on six GLUE tasks, training reached the target accuracy fastest at an error rate of about 50%, rather than at either extreme.',

    // Talks
    talks: 'Talks',
    talk1Title: 'Attention-Graph Curvature for the Verification of Mathematical Reasoning',
    talk1Venue: 'DaSciM Seminar, LIX, École polytechnique',
    talk1Date: '13 Nov 2026',

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
    milDesc: "Military service during my KAIST undergraduate studies. Squad leader responsible for eight soldiers; honorably discharged with the rank of sergeant.",

    // Skills & languages
    skillsTitle: 'Skills & Languages',
    programmingLanguages: 'Programming',
    librariesTools: 'Libraries & tools',
    languagesLabel: 'Languages',
    languages: [
      ['Korean', 'native'],
      ['English', 'full professional proficiency (IELTS 8.0)'],
      ['French', 'elementary (CEFR A2)'],
      ['German', 'elementary (CEFR A2)'],
    ],
  },
  de: {
    ongoingResearch: "Nach dem Praktikum wurde die Zusammenarbeit mit Prof. Johannes F. Lutzeyer und Prof. Yanzhu Guo für die Publikation bis Oktober 2026 fortgesetzt.",
    // Shared
    fullName: 'Kanghyeon Kim',
    languageHint: 'Später oben rechts änderbar.',

    // Hero
    bio: 'Ich studiere im Master MVA (M2) am Fachbereich Mathematik der École normale supérieure Paris-Saclay. Meine Forschungsinteressen sind die Theorie des maschinellen Lernens, Repräsentationslernen und Optimierung.',
    recommendation: 'Empfehlung',
    recAuthorName: 'Jiseon Kim',
    recAuthorRest: ', Doktorandin am U&I Lab, KAIST (Mai 2025)',

    // Sections
    chipKrMain: 'Südkoreanischer Staatsbürger',
    chipKrItems: ['Amtlicher Name: 김강현', 'Name im Pass: Kanghyeon Kim'],
    chipChMain: 'Wohnhaft in der Schweiz',
    chipChItems: ['Arbeitsbewilligung (Ausweis B)', 'Amtlicher Name: Kanghyeon Zahner'],
    chipFrMain: 'In Frankreich für das Masterstudium',
    chipFrItems: ['Bis März 2027'],

    // Locations
    palaiseauFrance: 'Palaiseau, Frankreich',
    gifFrance: 'Gif-sur-Yvette, Frankreich',
    daejeonKorea: 'Daejeon, Südkorea',
    busanKorea: 'Busan, Südkorea',

    // Education
    education: 'Ausbildung',
    edu1School: 'École normale supérieure Paris-Saclay',
    edu1DegreePre: 'M2 — ',
    edu1DegreeMain: 'Master MVA (Mathématiques, Vision, Apprentissage)',
    edu1DegreeRest: ' · im Studium',
    edu1Date: 'Sep. 2026 – Sep. 2027 (voraussichtlich)',
    edu1CourseworkLabel: 'Lehrveranstaltungen im ersten Semester (laufend)',
    edu1Coursework:
      'Convex Optimization and Applications in Machine Learning; Optimal Transport for Machine Learning; Foundations of Distributed and Large Scale Computing Optimization; Introduction to Statistical Learning; Stochastic Calculus in Machine Learning: Sampling and Generative Modeling; Mathematical Methods for Neuroscience.',
    edu2School: 'Institut Polytechnique de Paris',
    edu2DegreePre: 'M1 — ',
    edu2DegreeMain: 'Data and Artificial Intelligence',
    edu2Date: 'Sep. 2025 – Aug. 2026',
    edu2Point1: 'Gesamtdurchschnitt: 17,38/20.',
    edu3School: 'Korea Advanced Institute of Science and Technology (KAIST)',
    edu3DegreeMain: 'B.S. in Computer Science',
    edu3DegreeRest: ' (cum laude), AI Special Designated Major',
    edu3Date: 'Feb. 2019 – Feb. 2025',

    // Publications
    publications: 'Publikationen',
    pub1Title: 'Attention-Graph Curvature for the Verification of Mathematical Reasoning',
    pub1Venue: 'NeurIPS 2026 Workshop on Mathematical Reasoning and AI (MATH-AI), als Poster angenommen.',
    pub1Date: '2026',

    // Research experience
    experience: 'Forschungserfahrung',
    exp1Org: 'Télécom Paris',
    exp1Org2: 'École polytechnique',
    exp1Role: 'Forschungspraktikant',
    supervisedBy: 'Betreut von',
    andWord: 'und',
    supLutzeyer: 'Prof. Johannes F. Lutzeyer',
    supGuo: 'Prof. Yanzhu Guo',
    supOh: 'Prof. Alice Oh',
    exp1Date: 'Apr. 2026 – Aug. 2026',
    exp1Point1: 'Nutzung gerichteter Forman-Krümmung von Attention-Graphen als Signal zur Erkennung von Fehlern in mathematischen Argumentationen von LLMs.',
    exp1Point2: 'Konzeption, Durchführung und Auswertung von Experimenten, die vier schrittweise Verifikatoren mit und ohne Krümmungsmerkmale vergleichen; die Krümmung verbesserte die mittlere Leistung aller vier.',
    exp2Org: 'U&I Lab, KAIST',
    exp2Role: 'Studentischer Forscher',
    exp2Date: 'Juli 2023 – Aug. 2024',
    proj1Name: 'Autocomplete Algorithm for LLMs',
    proj1Desc:
      'ein Decodierverfahren, bei dem ein aus der Eingabe erstelltes n-Gramm-Modell mehrere folgende Tokens vorschlägt und das LLM sie in einem einzigen Forward-Pass prüft; Experimente mit fünf LLMs und vier Aufgaben zeigten Beschleunigungen für bestimmte Kombinationen von Modellen und Aufgaben.',
    proj2Name: 'Fixed Error Rate Training (FERT)',
    proj2Desc:
      'ein Feinabstimmungsverfahren, das die Trainingsmenge vor jeder Epoche so anpasst, dass ein fester Anteil davon (die Fehlerrate) aus Beispielen besteht, die das Modell derzeit falsch vorhersagt; in Experimenten mit BERT-base auf sechs GLUE-Aufgaben erreichte das Training die Zielgenauigkeit bei einer Fehlerrate von etwa 50 % am schnellsten, nicht an einem der beiden Extreme.',

    // Talks
    talks: 'Vorträge',
    talk1Title: 'Attention-Graph Curvature for the Verification of Mathematical Reasoning',
    talk1Venue: 'DaSciM-Seminar, LIX, École polytechnique',
    talk1Date: '13. Nov. 2026',

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
    milDesc: "Militärdienst während des Bachelorstudiums am KAIST. Gruppenführer mit Verantwortung für acht Soldaten; ehrenhaft im Rang eines Unteroffiziers (Sergeant) entlassen.",

    // Skills & languages
    skillsTitle: 'Kenntnisse & Sprachen',
    programmingLanguages: 'Programmierung',
    librariesTools: 'Bibliotheken & Tools',
    languagesLabel: 'Sprachen',
    languages: [
      ['Koreanisch', 'Muttersprache'],
      ['Englisch', 'verhandlungssicher (IELTS 8.0)'],
      ['Französisch', 'Grundkenntnisse (GER A2)'],
      ['Deutsch', 'Grundkenntnisse (GER A2)'],
    ],
  },
  ko: {
    ongoingResearch: "인턴십 종료 후에도 논문 작업을 위해 2026년 10월까지 Johannes F. Lutzeyer 교수, Yanzhu Guo 교수와 협업했습니다.",
    // Shared
    fullName: '김강현',
    languageHint: '나중에 오른쪽 위에서 바꿀 수 있습니다.',

    // Hero
    bio: '파리-사클레 고등사범학교(École normale supérieure Paris-Saclay) 수학과의 석사과정(M2 MVA)에 재학 중입니다. 머신러닝 이론, 표현 학습, 최적화에 관심이 있습니다.',
    recommendation: '추천사',
    recAuthorName: '김지선',
    recAuthorRest: ', KAIST U&I Lab 박사과정 (2025년 5월)',

    // Sections
    chipKrMain: '대한민국 국적',
    chipKrItems: ['법적 성명: 김강현', '여권 성명: Kanghyeon Kim'],
    chipChMain: '스위스 거주',
    chipChItems: ['취업 허가(B) 보유', '법적 성명: Kanghyeon Zahner'],
    chipFrMain: '석사과정으로 프랑스 체류',
    chipFrItems: ['2027년 3월까지'],

    // Locations
    palaiseauFrance: '프랑스 팔레조',
    gifFrance: '프랑스 지프쉬르이베트',
    daejeonKorea: '대한민국 대전',
    busanKorea: '대한민국 부산',

    // Education
    education: '학력',
    edu1School: '파리-사클레 고등사범학교',
    edu1DegreePre: 'M2 — ',
    edu1DegreeMain: 'MVA 석사과정',
    edu1DegreeRest: ' 재학 중',
    edu1Date: '2026년 9월 – 2027년 9월 (졸업 예정)',
    edu1CourseworkLabel: '1학기 수강 과목 (진행 중)',
    edu1Coursework:
      'Convex Optimization and Applications in Machine Learning; Optimal Transport for Machine Learning; Foundations of Distributed and Large Scale Computing Optimization; Introduction to Statistical Learning; Stochastic Calculus in Machine Learning: Sampling and Generative Modeling; Mathematical Methods for Neuroscience.',
    edu2School: '파리 종합기술원',
    edu2DegreePre: 'M1 — ',
    edu2DegreeMain: '데이터·인공지능',
    edu2Date: '2025년 9월 – 2026년 8월',
    edu2Point1: '전체 평균 성적 17.38/20.',
    edu3School: '한국과학기술원',
    edu3DegreeMain: '전산학 학사',
    edu3DegreeRest: ' (우등 졸업), 인공지능 특별 지정 전공',
    edu3Date: '2019년 2월 – 2025년 2월',

    // Publications
    publications: '논문',
    pub1Title: 'Attention-Graph Curvature for the Verification of Mathematical Reasoning',
    pub1Venue: 'NeurIPS 2026 Workshop on Mathematical Reasoning and AI (MATH-AI), 포스터 발표 채택.',
    pub1Date: '2026',

    // Research experience
    experience: '연구 경력',
    exp1Org: '텔레콤 파리',
    exp1Org2: '에콜 폴리테크니크',
    exp1Role: '연구 인턴',
    supervisedBy: '지도:',
    andWord: '·',
    supLutzeyer: 'Johannes F. Lutzeyer 교수',
    supGuo: 'Yanzhu Guo 교수',
    supOh: 'Alice Oh 교수',
    exp1Date: '2026년 4월 – 2026년 8월',
    exp1Point1: '어텐션 그래프의 유향 Forman 곡률을 LLM이 생성한 수학 추론의 오류를 탐지하는 신호로 활용했습니다.',
    exp1Point2: '추론 단계별 검증기 네 가지를 곡률 특징의 유무에 따라 비교하는 실험을 설계·수행·분석했으며, 곡률 특징이 네 검증기 모두의 평균 성능을 향상시켰습니다.',
    exp2Org: 'U&I Lab, KAIST',
    exp2Role: '학부 연구원',
    exp2Date: '2023년 7월 – 2024년 8월',
    proj1Name: 'Autocomplete Algorithm for LLMs',
    proj1Desc:
      '입력으로 만든 n-그램 모델이 다음 몇 개의 토큰을 제안하고 LLM이 이를 한 번의 순전파(forward pass)로 검증하는 디코딩 방법. 5개 LLM과 4가지 과제에서 실험해 일부 모델·과제 조합에서 속도 향상을 확인.',
    proj2Name: 'Fixed Error Rate Training (FERT)',
    proj2Desc:
      '매 에포크 전에 훈련 데이터를 조정해, 모델이 현재 틀리는 예제가 일정 비율(오류율)을 차지하도록 하는 미세 조정 방법. 6개 GLUE 과제에서 BERT-base로 실험한 결과, 양 극단이 아닌 약 50%의 오류율에서 목표 정확도에 가장 빨리 도달.',

    // Talks
    talks: '학술 발표',
    talk1Title: 'Attention-Graph Curvature for the Verification of Mathematical Reasoning',
    talk1Venue: 'DaSciM 세미나, LIX, 에콜 폴리테크니크',
    talk1Date: '2026년 11월 13일',

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
    milDesc: "KAIST 학부 재학 중 군 복무. 8명의 분대원을 이끄는 분대장으로 복무했으며, 병장으로 만기 전역.",

    // Skills & languages
    skillsTitle: '기술 & 언어',
    programmingLanguages: '프로그래밍 언어',
    librariesTools: '라이브러리 & 도구',
    languagesLabel: '언어',
    languages: [
      ['한국어', '모국어'],
      ['영어', '상급 (IELTS 8.0)'],
      ['프랑스어', '초급 (CEFR A2)'],
      ['독일어', '초급 (CEFR A2)'],
    ],
  },
};

// The saved language, if it is one the site still offers.
const savedLanguage = () => {
  try {
    const saved = localStorage.getItem('language');
    return translations[saved] ? saved : null;
  } catch (e) {
    return null;
  }
};

// The first of the browser's preferred languages that the site offers.
const browserLanguage = () => {
  const preferred =
    typeof navigator === 'undefined'
      ? []
      : navigator.languages || [navigator.language];
  for (const tag of preferred) {
    const code = String(tag).slice(0, 2).toLowerCase();
    if (translations[code]) return code;
  }
  return 'en';
};

export const LanguageProvider = ({ children }) => {
  // A returning visitor gets the saved language. A first-time visitor gets
  // the browser's preferred one, and LanguagePrompt asks (needsChoice).
  const [language, setLanguage] = useState(
    () => savedLanguage() || browserLanguage(),
  );
  const [needsChoice, setNeedsChoice] = useState(
    () => savedLanguage() === null,
  );

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  // Only a choice is saved, so the question is asked until one is made.
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setNeedsChoice(false);
    try {
      localStorage.setItem('language', lang);
    } catch (e) {
      // Storage can be unavailable (private mode); the choice then lasts
      // for this visit.
    }
  };

  const t = (key) => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, needsChoice, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
