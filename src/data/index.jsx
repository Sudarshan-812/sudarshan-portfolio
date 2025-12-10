import { Code2, FileText, Monitor, Car, Layout, Terminal, Utensils, Zap } from 'lucide-react';

// 1. MUST HAVE "export const" HERE
export const USER_DATA = {
  name: "Sudarshan Kulkarni", 
  role: "Full Stack Product Engineer",
  subRoles: ["Full Stack Developer", "Next.js Expert", "Mobile App Developer", "Product Engineer"],
  location: "Vijayapura, Karnataka (Relocating to BLR/HYD)",
  email: "sudarshan.builds@gmail.com", 
  // 👇 Points to the file in your public folder
  resumeLink: "/Sudarshan-Resume.pdf", 
  linkedinLink: "https://www.linkedin.com/in/sudarshan-kulkarni-3815b83a0/",
  githubLink: "https://github.com/Sudarshan-812",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",

  stack: [
    { name: "Next.js 15", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ],

  projects: [
    {
      title: "ResumAI",
      description: "AI-Powered Resume Analyzer SaaS (Live & Monetized)",
      icon: <Zap size={26} className="text-yellow-500" />,
      // Using your actual dashboard screenshot if you uploaded it, or a high-quality relevant image
      src: "../../public/RESUMAI-DB.png", 
      ctaText: "View Live App →",
      ctaLink: "https://resumai-bay.vercel.app",
      content: () => (
        <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            A <strong>production-ready SaaS</strong> that helps developers get hired by optimizing resumes using <strong>Gemini 1.5 AI</strong>.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Monetized:</strong> Tiered pricing with Razorpay integration.</li>
            <li><strong>AI Analysis:</strong> Real-time PDF parsing & scoring (0-100).</li>
            <li><strong>Tech Stack:</strong> Next.js 14, TypeScript, Supabase Auth & DB.</li>
            <li><strong>Performance:</strong> 100% Lighthouse Score, Edge Functions.</li>
          </ul>
          <p className="pt-2 font-medium text-purple-600 dark:text-purple-400">
            Built from scratch to solve the "ATS Black Hole" problem.
          </p>
        </div>
      ),
    },
    {
      title: "TiffinTales",
      description: "Hyperlocal Food Delivery Marketplace",
      icon: <Utensils size={24} className="text-orange-500" />,
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop", 
      ctaText: "In Development",
      ctaLink: "#", 
      content: () => (
        <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            A dual-sided marketplace connecting home cooks with local customers. Currently building the <strong>React Native</strong> mobile app.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Geolocation:</strong> PostGIS filtering for 5km radius.</li>
            <li><strong>Realtime:</strong> Live order tracking with Supabase subscriptions.</li>
            <li><strong>Architecture:</strong> Expo Router, NativeWind, TypeScript.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Orbital OS",
      description: "Real-Time Trading Dashboard",
      icon: <Monitor size={24} className="text-blue-500" />,
      src: "https://i.pinimg.com/1200x/de/c5/59/dec559eca9f7f489961cc1105481f4d6.jpg", 
      ctaText: "View Live",
      ctaLink: "https://orbital-os.vercel.app", // Assuming you have a link or keep #
      content: () => (
        <p>
          A high-performance financial dashboard inspired by Bloomberg Terminals.
          <br/><br/>
          Features <strong>GPU-accelerated</strong> particle physics, custom candlestick charts using <strong>Canvas API</strong>, and a glassmorphism UI built with <strong>React</strong> and <strong>Framer Motion</strong>.
        </p>
      ),
    },
    {
      title: "Developer Portfolio",
      description: "3D Interactive Personal Website",
      icon: <Layout size={24} className="text-purple-500" />,
      src: "../../public/PORTFOLIO-DB.png", 
      ctaText: "You are here",
      ctaLink: "#", 
      content: () => (
        <p>
          The website you are looking at right now. Built to showcase technical skills with style.
          <br/><br/>
          <strong>Tech:</strong> Next.js, Tailwind CSS, Framer Motion, Formspree.
          <br/>
          <strong>Performance:</strong> Sub-0.8s First Contentful Paint (FCP).
        </p>
      ),
    }
  ]
};

// 2. MUST HAVE "export const" HERE TOO
export const codeSnippets = [
  {
    filename: "ResumAI.ts",
    icon: <Zap size={14} className="text-yellow-500" />,
    language: "typescript",
    code: `// The core AI Analysis Engine
export async function analyzeResume(file: File) {
  const text = await parsePDF(file);
  
  // Gemini 1.5 Flash for instant scoring
  const analysis = await gemini.generateContent({
    prompt: \`Analyze this resume for a Senior React role.
             Return JSON with:
             - ATS Score (0-100)
             - Missing Keywords
             - Bullet point improvements\`,
    input: text
  });

  return JSON.parse(analysis.response);
}`
  },
  {
    filename: "SupabaseAuth.tsx",
    icon: <Code2 size={14} className="text-green-500" />,
    language: "tsx",
    code: `// Secure Authentication Flow
const handleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: \`\${location.origin}/auth/callback\`
    }
  });

  if (!error) {
    toast.success("Welcome back! Redirecting...");
  }
};`
  },
  {
    filename: "TiffinTalesMap.tsx",
    icon: <Car size={14} className="text-purple-500" />,
    language: "tsx",
    code: `// Real-time Driver Tracking
export default function LiveMap({ orderId }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Subscribe to DB changes
    const sub = supabase
      .channel(\`order-\${orderId}\`)
      .on('postgres_changes', 
        { event: 'UPDATE', table: 'orders' }, 
        (payload) => setLocation(payload.new.driver_loc)
      )
      .subscribe();

    return () => sub.unsubscribe();
  }, [orderId]);

  return <MapView coordinate={location} />;
}`
  }
];