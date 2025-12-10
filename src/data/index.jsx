import { Code2, FileText, Monitor, Car, Layout, Terminal } from 'lucide-react';

// 1. MUST HAVE "export const" HERE
export const USER_DATA = {
  name: "Sudarshan", 
  role: "Frontend Developer",
  subRoles: ["Frontend Developer", "Android Developer", "UI/UX Enthusiast"],
  location: "India",
  email: "sudarshan.builds@gmail.com", 
  resumeLink: "Sudarshan_Resume.pdf", 
  
  stack: [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Android", icon: "https://developer.android.com/static/images/brand/android-head_flat.png" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" }
  ],

  projects: [
   {
  title: "ResumAI",
  description: "AI-Powered Resume Analyzer with Payments",
  icon: <FileText size={26} className="text-purple-500" />,
  // src: "https://resumai-bay.vercel.app/og.png", // ← add a 1200×630 OG image later (optional)
  // or use this stunning placeholder for now:
   src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200&auto=format&fit=crop",
  ctaText: "Live Demo →",
  ctaLink: "https://resumai-bay.vercel.app",
  content: () => (
    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
      <p>
        A <strong>complete paid SaaS</strong> that scores resumes against job descriptions using <strong>Google Gemini 1.5 Flash</strong>.
      </p>
      <p>
        Built and shipped <strong>in just 9 days</strong> while learning Next.js 15:
      </p>
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>PDF parsing + intelligent text extraction</li>
        <li>0–100 ATS score + missing keyword detection</li>
        <li>AI-generated cover letters & interview prep</li>
        <li>Full Razorpay integration (credits + webhooks)</li>
        <li>Supabase Auth + Realtime + Edge Functions</li>
        <li>Glassmorphism dark UI, fully responsive</li>
      </ul>
      <p className="pt-2 font-medium text-purple-600 dark:text-purple-400">
        Live, monetized, and already helping people land jobs.
      </p>
    </div>
  ),
},
    {
      title: "AI DocuSaaS",
      description: "RAG SaaS Platform: Chat with PDF",
      icon: <FileText size={24} className="text-purple-500" />,
      src: "https://images.unsplash.com/photo-1563207153-f4c0eb66487d?q=80&w=1200&auto=format&fit=crop", 
      ctaText: "View Demo",
      ctaLink: "#", 
      content: () => (
        <p>
          A <strong>Next.js</strong> SaaS application leveraging <strong>Retrieval-Augmented Generation (RAG)</strong> to enable users to chat with their PDF documents. 
          <br/><br/>
          Features include: <strong>Gemini AI</strong> integration, <strong>Pinecone</strong> vector database, a sophisticated split-screen UI, and <strong>Stripe</strong> subscription paywalls.
        </p>
      ),
    },
    {
      title: "Food Delivery App",
      description: "Full-Stack Web App with Live Tracking",
      icon: <Monitor size={24} className="text-blue-500" />,
      src: "https://images.unsplash.com/photo-1557007010-333e8b0b8e66?q=80&w=1200&auto=format&fit=crop", 
      ctaText: "View Live",
      ctaLink: "#", 
      content: () => (
        <p>
          A high-fidelity food ordering application built with <strong>React</strong> and <strong>Redux Toolkit</strong>. 
          <br/><br/>
          Features <strong>Framer Motion</strong> for a "Parallax Ingredient Scroll," real-time map tracking via <strong>Socket.io</strong>, Razorpay payment flow, and advanced component architecture.
        </p>
      ),
    },
     {
      title: "Uber Clone",
      description: "Real-Time Ride-Hailing Mobile App",
      icon: <Car size={24} className="text-green-500" />,
      src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop", 
      ctaText: "View Mobile Code",
      ctaLink: "#", 
      content: () => (
        <p>
          A full-stack mobile application engineered with <strong>React Native</strong> and <strong>PostgreSQL</strong>.
          <br/><br/>
          Features include: <strong>Mapbox GL</strong> integration, bi-directional communication via <strong>Socket.io</strong>, background location services, and native mobile gestures (Bottom Sheet UI).
        </p>
      ),
    }
  ]
};

// 2. MUST HAVE "export const" HERE TOO
export const codeSnippets = [
  {
    filename: "Portfolio.jsx",
    icon: <Layout size={14} className="text-blue-500" />,
    language: "jsx",
    code: `const Portfolio = () => {
  return (
    <div className="app-container">
      <Hero 
        name="${USER_DATA.name}"
        role="${USER_DATA.role}"
      />
      <TechStack 
        stack={["React", "Kotlin", "Figma"]} 
      />
    </div>
  );
};`
  },
  {
    filename: "CurrencyConverter.js",
    icon: <Code2 size={14} className="text-yellow-500" />,
    language: "javascript",
    code: `async function convert(amount, from, to) {
  const res = await fetch(\`api/v1/rates\`);
  const data = await res.json();
  
  const rate = data.rates[to] / data.rates[from];
  return (amount * rate).toFixed(2);
}

// Real-time updates enabled`
  },
  {
    filename: "AndroidActivity.kt",
    icon: <Terminal size={14} className="text-purple-500" />,
    language: "kotlin",
    code: `class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            PortfolioTheme {
                // Jetpack Compose UI
                Surface(color = Color.Black) {
                    Greeting("${USER_DATA.name}")
                }
            }
        }
    }
}`
  }
];