import {
  NavigationLink,
  SocialLink,
  EducationItem,
  CareerItem,
  CertificateItem,
  AwardItem,
  Project,
  BlogPost,
} from "@/types";

// Icon Paths
const ICONS = {
  CONTACT: "/icons/contact.svg",
  GITHUB: "/icons/github.svg",
  LINKEDIN: "/icons/linkedin.svg",
  BLOG: "/icons/blog.svg",
  CODEFORCES: "/icons/codeforces.svg",
  ATCODER: "/icons/atcoder.svg",
  TOPCODER: "/icons/topcoder.svg",
  BOJ: "/icons/boj.svg",
  MAPLE: "/icons/maple.svg",
  SOLVED_AC: "/icons/solved-ac.svg",
  LEETCODE: "/icons/leetcode.svg",
  HACKERRANK: "/icons/hackerrank.svg",
} as const;

// Navigation Configuration
export const NAVIGATION_LINKS: NavigationLink[] = [
  { href: "/links", label: "Links" },
  { href: "/profile", label: "Profile" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

// Social Links Configuration
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Contact",
    icon: ICONS.CONTACT,
    url: "mailto:rhdudals0505@naver.com",
  },
  {
    name: "GitHub",
    icon: ICONS.GITHUB,
    url: "https://github.com/mandu5",
  },
  {
    name: "LinkedIn",
    icon: ICONS.LINKEDIN,
    url: "https://www.linkedin.com/in/mandu5",
  },
];

// Education Data
export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Pennsylvania State University",
    degree: "B.S. in Software Engineering",
    period: "2024 - Present",
    location: "Pennsylvania, United States",
  },
  {
    institution: "Xi'an Jiaotong Liverpool University",
    degree: "B.E. in Computer Science and Technology",
    period: "2020 - 2022",
    location: "Suzhou, Jiangsu, China",
  },
  {
    institution: "Indus International School Bangalore",
    degree: "High School Diploma, International Baccalaureate",
    period: "2011 - 2019",
    location: "Bangalore, India",
  },
];

// Career Data
export const CAREER_DATA: CareerItem[] = [
  {
    company: "R.O.K, MND",
    position: "UI/UX Designer",
    period: "08/2022 - 01/2024",
    team: "",
    achievements: [
      "Re-architected website structure using code minification, lazy loading, and image compression to reduce page load times by 40%.",
      "Implemented fully responsive UI designs that improved user retention and engagement.",
    ],
  },
];

// Awards Data
export const AWARDS_DATA: AwardItem[] = [
  {
    name: "LG AImers",
    date: "06/2024 - 08/2024",
    description: "LG AI Research - Ranked in the top 5.5% among 1,400 participants in an Anomaly Detection competition",
  },
];

// Certificates Data
export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    title: "Google Machine Learning Bootcamp",
    issuer: "Google Developers Group",
    period: "06/2024 - 10/2024",
    description: [
      "Engineered a regression model for used car price prediction, increasing accuracy by 33% through advanced feature engineering and hyperparameter tuning.",
      "Deployed a financial advisor model using Python and TensorFlow achieving scalable production API integration with sub-second response times.",
      "Utilized scikit-learn, XGBoost, and LightGBM to drive data-driven decision-making on real-world datasets.",
    ],
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.ai",
    period: "05/2024 - 08/2024",
    description: [],
  },
  {
    title: "Kakao Enterprise Military AI-SW Intermediate Course",
    issuer: "Kakao",
    period: "09/2024 - 11/2024",
    description: [],
  },
  {
    title: "IBM Data Science Specialization",
    issuer: "IBM",
    period: "08/2023 - 10/2023",
    description: [],
  },
  {
    title: "Ne(O)rdinary Hackathon",
    issuer: "CMC 10th App Launching Club, SoftSquared",
    period: "04/2022 - 05/2022",
    description: [
      "Developed a schedule-sharing platform for small theaters, resolving conflicting user preferences and improving access to play schedules.",
    ],
  },
];

// Projects Data
export const PROJECTS_DATA: Project[] = [
  {
    id: "financial-advisor-chatbot",
    title: "Financial Advisor Chatbot",
    organization: "Google Machine Learning Bootcamp",
    description:
      "Built an AI-driven chatbot using google/gemma-2-2b-it to deliver personalized financial recommendations. Leveraged Parameter-Efficient Fine-Tuning (PEFT) with LoRA and 4-bit quantization to reduce memory overhead and improve model performance.",
    image: "/assets/images/project1.jpg",
    tags: ["Python", "TensorFlow", "PEFT", "LoRA", "Gemma"],
    link: "https://www.kaggle.com/models/mandu5/financial-advisor",
    period: "08/2024 - 10/2024",
    theme: "primary",
  },
  {
    id: "jaksimfriend",
    title: "JakSimFriend",
    organization: "SoftSquared",
    description:
      "Led front-end development of a cross-platform React Native application for group self-improvement challenges. Integrated data visualization and social login features to enhance user experience and engagement.",
    image: "/assets/images/project2.jpg",
    tags: ["React Native", "JavaScript", "Data Visualization", "Social Login"],
    link: "https://github.com/JakSimFriend/frontend",
    period: "06/2024 - 08/2024",
    theme: "secondary",
  },
];

// Profile Data
export const PROFILE_DATA = {
  contacts: [
    {
      nameKey: "common.email",
      value: "rhdudals0505@naver.com",
      icon: ICONS.CONTACT,
      link: "mailto:rhdudals0505@naver.com",
    },
    {
      nameKey: "common.github",
      value: "mandu5",
      icon: ICONS.GITHUB,
      link: "https://github.com/mandu5",
    },
    {
      nameKey: "common.linkedin",
      value: "in/mandu5",
      icon: ICONS.LINKEDIN,
      link: "https://www.linkedin.com/in/mandu5/",
    },
  ],
  sns: [
    {
      nameKey: "common.blog",
      value: "Portfolio Blog",
      icon: ICONS.BLOG,
      link: "https://mandu5-7446mgauy-mandu5s-projects.vercel.app/cv",
    },
  ],
  programming: [
    {
      nameKey: "common.solvedAc",
      value: "gosmain05",
      icon: ICONS.SOLVED_AC,
      link: "https://solved.ac/profile/gosmain05",
    },
    {
      nameKey: "common.baekjoon",
      value: "gosmain05",
      icon: ICONS.BOJ,
      link: "https://www.acmicpc.net/user/gosmain05",
    },
    {
      nameKey: "common.codeforces",
      value: "mandu5",
      icon: ICONS.CODEFORCES,
      link: "https://codeforces.com/profile/mandu5",
    },
    {
      nameKey: "common.atcoder",
      value: "rhdudals0505",
      icon: ICONS.ATCODER,
      link: "https://atcoder.jp/users/rhdudals0505",
    },
    {
      nameKey: "common.topcoder",
      value: "mandu0505",
      icon: ICONS.TOPCODER,
      link: "https://profiles.topcoder.com/mandu0505",
    },
    {
      nameKey: "common.leetcode",
      value: "mandu5",
      icon: ICONS.LEETCODE,
      link: "https://leetcode.com/u/mandu5/",
    },
    {
      nameKey: "common.hackerrank",
      value: "rhdudals0505",
      icon: ICONS.HACKERRANK,
      link: "https://www.hackerrank.com/profile/rhdudals0505",
    },
  ],
  games: {
    main: [
      {
        nameKey: "common.maplestory",
        value: "만칸 (Lv.251 Kain)",
        icon: ICONS.MAPLE,
        link: "https://maplestory.nexon.com",
      },
    ],
  },
} as const;

// Blog Posts Data
export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: "machine-learning-first-steps",
    title: "머신러닝 첫 걸음: 부스트코스로 배우는 파이썬 데이터 사이언스",
    date: "2025-01-12",
    excerpt: "머신러닝을 위한 파이썬 생태계를 탐험하며 배운 점들을 공유합니다.",
    slug: "machine-learning-first-steps",
    content: `
# 머신러닝 첫 걸음: 부스트코스로 배우는 파이썬 데이터 사이언스

머신러닝을 위한 파이썬

## 들어가며

머신러닝 공부를 시작하면서 가장 먼저 마주한 것은 파이썬 생태계의 방대함이었다. NumPy, Pandas, Scikit-learn... 각각의 라이브러리가 어떤 역할을 하는지, 어떻게 조합해서 사용해야 하는지 처음에는 막막했다.

> "어려운 건 겁내지 말고, 한 줄씩 천천히 이해하면 된다."

## 1. 파이썬 머신러닝 생태계 탐험

### 1.1 NumPy: 수치 계산의 마법

NumPy는 파이썬 과학 컴퓨팅의 기반이 되는 라이브러리다. 다차원 배열 처리와 선형대수 연산에 최적화되어 있어 데이터 사이언스의 핵심 도구로 자리 잡았다.

\`\`\`python
import numpy as np

# NumPy로 간단한 배열 연산
arr = np.array([[1, 2, 3], [4, 5, 6]])
print("배열의 형태:", arr.shape)
print("배열의 차원:", arr.ndim)

# 복잡한 배열 연산
matrix_mul = np.dot(arr, arr.T)
print("행렬 곱셈 결과:\\n", matrix_mul)
\`\`\`

### 1.2 Pandas: 데이터 정제의 마법사

데이터 분석에서 Pandas는 마치 스위스 군용 나이프 같다. 복잡한 데이터를 손쉽게 조작하고 분석할 수 있게 해준다.

\`\`\`python
import pandas as pd

# 데이터프레임 기본 조작
df = pd.read_csv('my_dataset.csv')

# 결측값 처리 및 고급 분석
df_cleaned = df.dropna()
grouped_data = df_cleaned.groupby('category').agg({
    'value': ['mean', 'median', 'std']
})
print("카테고리별 통계:\\n", grouped_data)
\`\`\`

### 1.3 Scikit-learn: 머신러닝의 길잡이

머신러닝 알고리즘을 쉽게 구현할 수 있게 해주는 라이브러리. 모델 선택부터 평가까지 전 과정을 지원한다.

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report

# 데이터 분할 및 전처리
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 데이터 스케일링
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 로지스틱 회귀 모델 학습
model = LogisticRegression(max_iter=1000)
model.fit(X_train_scaled, y_train)

# 모델 평가
predictions = model.predict(X_test_scaled)
print("분류 보고서:\\n", classification_report(y_test, predictions))
\`\`\`

## 2. 학습하면서 느낀 점

### 2.1 코드는 문서다
- 깔끔하고 읽기 쉬운 코드가 최고의 문서다
- 주석은 최소한으로, 코드 자체가 설명하게 하자

### 2.2 실수는 배움의 기회
- 에러 메시지를 두려워하지 말자
- 디버깅은 실력 향상의 지름길

## 3. 앞으로의 계획
1. 더 복잡한 머신러닝 알고리즘 학습
2. 실제 프로젝트에 적용해보기
3. 딥러닝 기초 다지기
4. Kaggle 컴피티션 도전하기

## 마치며

머신러닝 공부는 마라톤이다. 매일 조금씩 꾸준히 달리다 보면 언젠가는 목표에 도달할 수 있을 것이다.

> "천리 길도 한 걸음부터" - 노력하는 개발자의 마음가짐
    `,
    tags: ["Python", "MachineLearning", "DataScience", "AI", "부스트코스", "개발공부", "데이터분석"],
    author: {
      name: "Mandu",
      avatar: "/assets/images/avatar.jpg",
      followers: 1,
    },
  },
  {
    id: "machine-learning-second-journey",
    title: "머신러닝 두 번째 여정: 예측과 분류의 세계로",
    date: "2025-01-30",
    excerpt: "머신러닝을 위한 파이썬 part 2",
    slug: "machine-learning-second-journey",
    content: `
# 머신러닝 두 번째 여정: 예측과 분류의 세계로

머신러닝을 위한 파이썬 part 2

## 들어가며

첫 번째 여정에서 파이썬 머신러닝 생태계의 기초를 다졌다면, 이번에는 실제 예측과 분류 모델을 만들어보는 시간이다. 선형 회귀부터 로지스틱 회귀까지, 데이터로부터 패턴을 찾아 미래를 예측하는 마법을 배워보자.

## 1. 선형 회귀: 예측의 시작

### 1.1 선형 회귀의 개념

선형 회귀는 가장 기본적이면서도 강력한 예측 모델이다. 독립변수와 종속변수 간의 선형 관계를 찾아 미래 값을 예측한다.

\`\`\`python
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

# 데이터 준비
X = np.random.rand(100, 1) * 10
y = 2 * X + 1 + np.random.randn(100, 1) * 0.5

# 모델 학습
model = LinearRegression()
model.fit(X, y)

# 예측
y_pred = model.predict(X)
print(f"계수: {model.coef_[0][0]:.2f}")
print(f"절편: {model.intercept_[0]:.2f}")
\`\`\`

### 1.2 다중 선형 회귀

실제 문제에서는 여러 변수가 복합적으로 작용한다. 다중 선형 회귀로 복잡한 패턴을 찾아보자.

\`\`\`python
# 다중 변수 데이터
X_multi = np.random.rand(100, 3) * 10
y_multi = 2*X_multi[:, 0] + 1.5*X_multi[:, 1] - 0.5*X_multi[:, 2] + np.random.randn(100) * 0.5

# 다중 선형 회귀
model_multi = LinearRegression()
model_multi.fit(X_multi, y_multi)

# 변수 중요도 확인
for i, coef in enumerate(model_multi.coef_):
    print(f"변수 {i+1} 계수: {coef:.2f}")
\`\`\`

## 2. 로지스틱 회귀: 분류의 기초

### 2.1 이진 분류

로지스틱 회귀는 연속적인 확률을 이진 분류로 변환하는 강력한 도구다.

\`\`\`python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix

# 이진 분류 데이터 생성
X_binary = np.random.randn(200, 2)
y_binary = (X_binary[:, 0] + X_binary[:, 1] > 0).astype(int)

# 로지스틱 회귀 모델
logistic_model = LogisticRegression()
logistic_model.fit(X_binary, y_binary)

# 예측 및 평가
y_pred_binary = logistic_model.predict(X_binary)
print(classification_report(y_binary, y_pred_binary))
\`\`\`

### 2.2 다중 분류

세 개 이상의 클래스를 분류할 때는 다중 클래스 로지스틱 회귀를 사용한다.

\`\`\`python
from sklearn.datasets import make_classification
from sklearn.multiclass import OneVsRestClassifier

# 다중 클래스 데이터
X_multi_class, y_multi_class = make_classification(
    n_samples=300, n_features=4, n_classes=3, n_clusters_per_class=1
)

# 다중 클래스 로지스틱 회귀
multi_logistic = LogisticRegression(multi_class='ovr')
multi_logistic.fit(X_multi_class, y_multi_class)

# 예측
y_pred_multi = multi_logistic.predict(X_multi_class)
print(classification_report(y_multi_class, y_pred_multi))
\`\`\`

## 3. 모델 평가와 검증

### 3.1 교차 검증

과적합을 방지하고 모델의 일반화 성능을 평가하는 교차 검증을 실습해보자.

\`\`\`python
from sklearn.model_selection import cross_val_score, KFold

# K-Fold 교차 검증
kfold = KFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(logistic_model, X_binary, y_binary, cv=kfold)

print(f"교차 검증 점수: {scores.mean():.3f} (+/- {scores.std() * 2:.3f})")
\`\`\`

### 3.2 하이퍼파라미터 튜닝

GridSearchCV를 사용해 최적의 하이퍼파라미터를 찾아보자.

\`\`\`python
from sklearn.model_selection import GridSearchCV

# 하이퍼파라미터 그리드
param_grid = {
    'C': [0.1, 1, 10, 100],
    'penalty': ['l1', 'l2'],
    'solver': ['liblinear', 'saga']
}

# 그리드 서치
grid_search = GridSearchCV(
    LogisticRegression(), param_grid, cv=5, scoring='accuracy'
)
grid_search.fit(X_binary, y_binary)

print(f"최적 파라미터: {grid_search.best_params_}")
print(f"최고 점수: {grid_search.best_score_:.3f}")
\`\`\`

## 4. 실전 프로젝트: 주택 가격 예측

### 4.1 데이터 전처리

실제 데이터로 주택 가격을 예측하는 프로젝트를 진행해보자.

\`\`\`python
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor

# 주택 가격 데이터 (예시)
data = pd.DataFrame({
    'area': np.random.rand(1000) * 200 + 50,
    'bedrooms': np.random.randint(1, 6, 1000),
    'bathrooms': np.random.randint(1, 4, 1000),
    'age': np.random.randint(0, 50, 1000)
})

# 가격 생성 (실제로는 더 복잡한 관계)
data['price'] = (
    data['area'] * 100 + 
    data['bedrooms'] * 50000 + 
    data['bathrooms'] * 30000 - 
    data['age'] * 2000 + 
    np.random.randn(1000) * 10000
)

# 특성과 타겟 분리
X_house = data[['area', 'bedrooms', 'bathrooms', 'age']]
y_house = data['price']

# 데이터 분할
X_train, X_test, y_train, y_test = train_test_split(
    X_house, y_house, test_size=0.2, random_state=42
)

# 스케일링
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 랜덤 포레스트 모델
rf_model = RandomForestRegressor(n_estimators=100, random_state=42)
rf_model.fit(X_train_scaled, y_train)

# 예측 및 평가
y_pred_house = rf_model.predict(X_test_scaled)
mse = mean_squared_error(y_test, y_pred_house)
r2 = r2_score(y_test, y_pred_house)

print(f"평균 제곱 오차: {mse:.2f}")
print(f"R² 점수: {r2:.3f}")
\`\`\`

## 5. 학습하면서 느낀 점

### 5.1 데이터의 중요성
- 좋은 모델보다 좋은 데이터가 더 중요하다
- 전처리가 모델 성능의 80%를 결정한다

### 5.2 모델 해석의 중요성
- 블랙박스 모델보다 해석 가능한 모델이 실무에서 유용하다
- 계수와 특성 중요도를 통해 인사이트를 얻을 수 있다

## 6. 앞으로의 계획
1. 앙상블 기법 학습 (Random Forest, XGBoost)
2. 딥러닝 기초 다지기 (Neural Networks)
3. 자연어 처리 입문 (NLP)
4. 컴퓨터 비전 기초 (Computer Vision)

## 마치며

예측과 분류의 세계는 무궁무진하다. 선형 회귀와 로지스틱 회귀는 시작일 뿐이다. 하지만 이 기초가 튼튼해야 더 복잡한 모델들을 이해할 수 있다.

> "기초가 튼튼해야 높은 건물을 지을 수 있다" - 머신러닝 학습의 핵심

다음 여정에서는 더 강력한 앙상블 기법들을 탐험해보자!
    `,
    tags: ["Python", "MachineLearning", "DataScience", "AI", "LinearRegression", "LogisticRegression"],
    author: {
      name: "Mandu",
      avatar: "/assets/images/avatar.jpg",
      followers: 1,
    },
  },
];

// Contact Information
export const CONTACT_INFO = {
  location: "Seoul, South Korea",
  phone: "(+82) 1098554562",
  email: "rhdudals0505@naver.com",
  links: [
    { name: "LinkedIn", url: "http://www.linkedin.com/in/mandu5" },
    { name: "Github", url: "https://github.com/mandu5" },
  ],
} as const;

// Language Skills
export const LANGUAGE_SKILLS = [
  { language: "English", level: "native" },
  { language: "Korean", level: "native" },
  { language: "Japanese", level: "Working knowledge" },
] as const;

// Legacy exports for backward compatibility (to be removed in future)
export const navLinks = NAVIGATION_LINKS;
export const socialLinks = SOCIAL_LINKS;
export const educationData = EDUCATION_DATA;
export const careerData = CAREER_DATA;
export const awardsData = AWARDS_DATA;
export const certificatesData = CERTIFICATES_DATA;
export const projectsData = PROJECTS_DATA;
export const profileData = PROFILE_DATA;
export const blogPosts = BLOG_POSTS_DATA;
export const contactData = CONTACT_INFO;
export const languagesData = LANGUAGE_SKILLS;
