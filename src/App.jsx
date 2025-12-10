import React, { useState, useEffect, useRef } from 'react';
import {
    Rocket, MapPin, Github, Linkedin, Mail, ChevronDown,
    Code, Database, BarChart, FileSignature, Server, Layers,
    Cpu, Globe, Send, Terminal, X, Minimize2, Maximize2,
    ArrowDown, Zap, Layout, Workflow, Search
} from 'lucide-react';

// --- System Prompt ---
const SYSTEM_PROMPT = `
  You are Akhil, an expert Zoho Solutions Architect. 
  Analyze the user's business problem and design a technical automation solution.

  You MUST return your response in strictly valid JSON format with this exact structure:
  {
    "overview": "A professional, technical summary of the solution (max 2 sentences).",
    "steps": [
      {
        "title": "Step Title (e.g., 'Lead Capture')",
        "tool": "Tool Name (e.g., 'Zoho CRM', 'Python Script', 'Zoho Creator')",
        "description": "Brief explanation of what happens here.",
        "iconType": "crm" | "code" | "analytics" | "sign" | "mail" | "database"
      }
    ],
    "tech_stack": ["Tool 1", "Tool 2", "Tool 3"]
  }

  Do not include markdown formatting (like \`\`\`json). Just the raw JSON string.
`;

const API_KEY = "AIzaSyBih6W_bt7DMPNTCkRtQElSfmCjHskvUVc";

// --- Components ---

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#050505] text-white flex flex-col items-center justify-center">
            {/* Layer 1: Background is set on the section */}

            {/* Layer 2: Static Stars (simulated with CSS or simple divs) */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50"></div>

            {/* Layer 3: Moving Stars/Clouds */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-900/10 to-purple-900/10 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-[spin_100s_linear_infinite]"></div>

            {/* Centerpiece Animation */}
            <div className="relative z-10 mb-8 animate-float">
                <div className="p-6 rounded-full bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20 shadow-[0_0_50px_rgba(99,102,241,0.3)]">
                    <Rocket size={64} className="text-indigo-400" />
                </div>
            </div>

            {/* Typography */}
            <div className="relative z-10 text-center space-y-4 px-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                        BOTU AKHIL SAI
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-zinc-300 font-light tracking-wide">
                    Zoho Developer & CRM Lead
                </p>
            </div>

            {/* CTAs */}
            <div className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4">
                <a
                    href="mailto:akhilsaibotu@gmail.com"
                    className="px-8 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2 group"
                >
                    <Mail size={18} className="group-hover:scale-110 transition-transform" />
                    Email Me
                </a>
                <a
                    href="https://wa.me/917386400905"
                    className="px-8 py-3 rounded-full bg-green-500/10 backdrop-blur-md border border-green-500/20 text-green-400 font-medium hover:bg-green-500/20 transition-all flex items-center gap-2 group"
                >
                    <Send size={18} className="group-hover:scale-110 transition-transform" />
                    WhatsApp
                </a>
            </div>



            {/* Scroll Indicator */}
            <div className="absolute bottom-10 animate-bounce text-zinc-500">
                <ChevronDown size={32} />
            </div>
        </section>
    );
};

const BentoGrid = () => {
    return (
        <section className="py-20 px-4 bg-[#050505] text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">

                {/* Card 1: Bio (2x2) */}
                <div className="md:col-span-2 md:row-span-2 p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-green-400">Open to Work</span>
                    </div>

                    <div className="h-full flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            Hi, I'm Akhil. <br />
                            I build <span className="underline decoration-indigo-500 decoration-4 underline-offset-4">automated</span> business engines.
                        </h2>
                        <p className="text-zinc-400 text-lg">
                            Specializing in <span className="text-indigo-400 font-semibold">Zoho</span> ecosystems and <span className="text-purple-400 font-semibold">AI-driven</span> workflows to streamline operations.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="#projects" className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors text-center">
                                View Work
                            </a>
                            <a href="https://wa.me/917386400905" className="px-6 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors text-center">
                                Let's Talk
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Location */}
                    <div className="md:col-span-1 p-6 rounded-3xl bg-zinc-900/30 border border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.1)] backdrop-blur-sm flex flex-col items-center justify-center text-center space-y-3 hover:scale-[1.02] transition-transform">
                        <div className="p-4 rounded-full bg-indigo-500/10 text-indigo-400">
                            <MapPin size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Mumbai, India</h3>
                            <p className="text-sm text-zinc-500">PAN India Compatible</p>
                        </div>
                    </div>

                    {/* Card 3: Connect */}
                    <div className="md:col-span-1 p-6 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm flex flex-col items-center justify-center space-y-4">
                        <h3 className="text-lg font-medium text-zinc-400">Connect</h3>
                        <div className="flex gap-4">
                            <a href="https://github.com/akhil3046" target="_blank" className="p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors">
                                <Github size={32} />
                            </a>
                            <a href="https://www.linkedin.com/in/akhil-sai-botu-61554322b/" target="_blank" className="p-4 rounded-xl bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition-colors">
                                <Linkedin size={32} />
                            </a>
                        </div>
                    </div>

                    {/* Services Card */}
                    <div className="md:col-span-2 p-6 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm flex flex-col justify-center px-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <h3 className="text-xl font-bold text-white mb-2">Services</h3>
                        <div className="flex flex-wrap gap-2 text-sm text-zinc-400">
                            {['Custom Development', 'Workflow Automation', 'Zoho Implementation'].map((service, i) => (
                                <span key={i} className="flex items-center gap-1">
                                    <span className="w-3 h-3 text-indigo-400">✓</span> {service}
                                </span>
                            ))}
                        </div>
                    </div>





                </div>
        </section>
    );
};

const AutomationArchitect = () => {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [viewMode, setViewMode] = useState('visual'); // 'visual' | 'json'

    const handleAnalyze = async () => {
        if (!input.trim()) return;
        setLoading(true);
        setResult(null);

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: SYSTEM_PROMPT + "\n\nUser Problem: " + input }]
                    }]
                })
            });

            const data = await response.json();
            const text = data.candidates[0].content.parts[0].text;
            // Clean up markdown if present (though prompt says strictly no markdown, sometimes models slip)
            const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
            setResult(JSON.parse(cleanJson));
        } catch (error) {
            console.error("Error analyzing:", error);
            alert(`Failed to analyze. Error: ${error.message || 'Unknown error'}`);
        } finally {
            setLoading(false);
        }
    };

    const getIcon = (type) => {
        switch (type) {
            case 'crm': return <Layout className="text-blue-400" />;
            case 'code': return <Code className="text-green-400" />;
            case 'analytics': return <BarChart className="text-yellow-400" />;
            case 'sign': return <FileSignature className="text-purple-400" />;
            case 'database': return <Database className="text-orange-400" />;
            default: return <Zap className="text-zinc-400" />;
        }
    };

    return (
        <section className="py-20 px-4 bg-[#050505] text-white border-t border-zinc-900">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                        The Automation Architect
                    </h2>
                    <p className="text-zinc-400">Describe your business problem, and I'll design a solution instantly.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
                    {/* Left: Input */}
                    <div className="flex flex-col gap-4 h-full">
                        <div className="flex-1 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 flex flex-col backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-4 text-zinc-400">
                                <Terminal size={20} />
                                <span className="font-mono text-sm">INPUT_PROBLEM.txt</span>
                            </div>
                            <textarea
                                className="flex-1 bg-transparent border-none resize-none focus:ring-0 text-lg text-zinc-200 placeholder-zinc-600 font-mono"
                                placeholder="e.g., I need to track inventory and automatically email suppliers when stock is low..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={handleAnalyze}
                                    disabled={loading}
                                    className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    {loading ? <span className="animate-spin">⏳</span> : <Zap size={18} />}
                                    Generate Solution
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visualizer */}
                    <div className="h-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col relative">
                        <div className="h-12 border-b border-zinc-800 bg-zinc-900/50 flex items-center justify-between px-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                            </div>
                            <div className="flex gap-2 bg-zinc-900 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('visual')}
                                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${viewMode === 'visual' ? 'bg-indigo-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                                >
                                    Visual
                                </button>
                                <button
                                    onClick={() => setViewMode('json')}
                                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${viewMode === 'json' ? 'bg-indigo-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                                >
                                    JSON
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                            {loading ? (
                                <div className="h-full flex flex-col items-center justify-center text-zinc-500 gap-4">
                                    <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
                                    <p className="animate-pulse">Analyzing requirements...</p>
                                </div>
                            ) : result ? (
                                viewMode === 'visual' ? (
                                    <div className="flex flex-col items-center space-y-0">
                                        {result.steps.map((step, idx) => (
                                            <React.Fragment key={idx}>
                                                {/* Node */}
                                                <div className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-xl p-4 flex items-start gap-4 hover:border-indigo-500 transition-colors">
                                                    <div className="p-3 rounded-lg bg-zinc-800 border border-zinc-700">
                                                        {getIcon(step.iconType)}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-indigo-300">{step.title}</h4>
                                                        <div className="text-xs text-zinc-500 font-mono mb-1">{step.tool}</div>
                                                        <p className="text-sm text-zinc-400">{step.description}</p>
                                                    </div>
                                                </div>
                                                {/* Connector */}
                                                {idx < result.steps.length - 1 && (
                                                    <div className="h-8 w-[2px] bg-zinc-700 my-1"></div>
                                                )}
                                                {idx < result.steps.length - 1 && (
                                                    <ArrowDown size={16} className="text-zinc-700 -mt-2 mb-1" />
                                                )}
                                            </React.Fragment>
                                        ))}

                                        <div className="mt-8 p-4 w-full max-w-md bg-indigo-900/10 border border-indigo-500/20 rounded-xl">
                                            <h4 className="text-sm font-bold text-indigo-400 mb-2">Recommended Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {result.tech_stack.map((tech, i) => (
                                                    <span key={i} className="px-2 py-1 rounded bg-indigo-500/20 text-indigo-300 text-xs border border-indigo-500/30">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <pre className="font-mono text-xs text-green-400 whitespace-pre-wrap">
                                        {JSON.stringify(result, null, 2)}
                                    </pre>
                                )
                            ) : (
                                <div className="h-full flex items-center justify-center text-zinc-600">
                                    <p>Ready to architect your solution.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Experience = () => {
    return (
        <section className="py-20 px-4 bg-[#050505] text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <Layers className="text-indigo-500" /> Experience
                </h2>
                <div className="relative border-l-2 border-zinc-800 ml-3 space-y-12 pl-8 pb-4">
                    {/* LightHouse */}
                    <div className="relative">
                        <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-indigo-500 border-4 border-[#050505]"></span>
                        <h3 className="text-2xl font-bold text-white">Zoho Developer & CRM Lead</h3>
                        <div className="text-indigo-400 font-medium mb-2">LightHouse</div>
                        <div className="text-sm text-zinc-500 mb-4">06/2025 — Present</div>
                        <p className="text-zinc-400 leading-relaxed max-w-2xl">
                            Leading end-to-end Zoho implementations by working directly with stakeholders and coordinating with multiple vendors to deliver seamless cross-application business solutions. I design and customize Zoho applications and workflow automations using Zoho CRM, Deluge, and the complete Zoho ecosystem. Improving process efficiency with tailored dashboards and data-driven insights using Zoho Analytics.
                        </p>
                    </div>

                    {/* Alpha Labs */}
                    <div className="relative">
                        <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-zinc-800 border-4 border-[#050505]"></span>
                        <h3 className="text-2xl font-bold text-white">Zoho Developer</h3>
                        <div className="text-indigo-400 font-medium mb-2">ALPHA LABS TECH</div>
                        <div className="text-sm text-zinc-500 mb-4">05/2024 — Present</div>
                        <p className="text-zinc-400 leading-relaxed max-w-2xl">
                            Built custom Zoho Creator, CRM applications to meet specific business needs, improving data management and user experience across industries. Designed and implemented workflow automation solutions using Zoho CRM, Creator, and Deluge to increase productivity and operational efficiency. Developed advanced dashboards in Zoho Analytics and Power BI for clients like NOVA Hospitals to track KPIs, operational performance, and patient outcomes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TechStack = () => {
    return (
        <section className="py-20 px-4 bg-[#050505] text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <Cpu className="text-indigo-500" /> Tech Stack
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Zoho Ecosystem */}
                    <div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm">
                        <h3 className="text-xl font-bold mb-6 text-indigo-300">Zoho Ecosystem</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Creator', 'CRM', 'Desk', 'Analytics', 'Campaigns', 'Survey', 'Social', 'Sign', 'Lens'].map(tech => (
                                <span key={tech} className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 text-sm hover:bg-indigo-500/20 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tech & Tools */}
                    <div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm">
                        <h3 className="text-xl font-bold mb-6 text-purple-300">Tech & Tools</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Python', 'SQL', 'Deluge', 'Power BI', 'n8n', 'REST APIs', 'GitHub'].map(tech => (
                                <span key={tech} className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-200 text-sm hover:bg-purple-500/20 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeaturedProjects = () => {
    const projects = [
        {
            title: "Lighthouse",
            desc: "Managed student admissions and lead conversions by integrating third-party APIs, while collaborating with vendors to deliver seamless cross-application solutions. Designed acknowledgment automation using Zoho Sign and developed custom reports and dashboards in Zoho Analytics for insights on performance and conversions.",
            tags: ["Zoho CRM", "Zoho Creator", "Zoho Analytics", "Zoho Sign", "Zoho Desk", "Zoho Campaigns"],
            domain: "#EdTech",
            domainColor: "text-blue-400 bg-blue-500/10 border-blue-500/20"
        },
        {
            title: "R Stocks Platform",
            desc: "Built a stock trading and account management platform enabling users to buy and sell stocks, create Demat accounts, and track their portfolios. Designed a user-friendly dashboard for real-time balance visibility and offered flexible investment options including interest, security, and sharing models.",
            tags: ["Zoho Creator", "Analytics"],
            domain: "#FinTech",
            domainColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        },
        {
            title: "NOVA IVF Hospitals",
            desc: "Cleaned and integrated multi-source campaign data using Python to ensure accurate reporting and analysis. Developed Power BI dashboards to visualize campaign performance and delivered insights that improved lead generation decisions and overall effectiveness.",
            tags: ["Zoho CRM", "Python", "ETL", "Power BI"],
            domain: "#MedTech",
            domainColor: "text-rose-400 bg-rose-500/10 border-rose-500/20"
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 bg-[#050505] text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <Workflow className="text-indigo-500" /> Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <div key={i} className="group p-6 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm hover:border-indigo-500/50 transition-all hover:-translate-y-1">
                            <div class="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                                    <Layout size={24} />
                                </div>
                                <div className={`flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full border ${p.domainColor}`}>
                                    {p.domain}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{p.title}</h3>
                            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{p.desc}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {p.tags.map(t => (
                                    <span key={t} className="text-xs font-medium text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Education = () => {
    return (
        <section className="py-20 px-4 bg-[#050505] text-white pb-32">
            <div className="max-w-6xl mx-auto">
                <div className="p-8 rounded-3xl bg-gradient-to-r from-zinc-900/50 to-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400">
                            <Globe size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">B.Tech Computer Science Engineering</h3>
                            <p className="text-zinc-400">GITAM University (2020-2024)</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold text-white">7.89 CGPA</div>
                        <div className="text-xs text-zinc-500 mt-1">{`{ Secured 92 percentile in JEE Mains}`}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const App = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500/30">
            <Hero />
            <BentoGrid />
            {/* <AutomationArchitect /> */}
            <Experience />
            <TechStack />
            <FeaturedProjects />
            <Education />

            <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
                <p>© 2024 Botu Akhil Sai. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
