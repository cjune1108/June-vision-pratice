import { useState, useEffect, useRef } from 'react'
import {
  HelpCircle,
  Globe,
  Sparkles,
  PanelLeft,
  Trophy,
  Medal,
  Target,
  Clock,
  Files,
  Search,
  GitBranch,
  Bug,
  Blocks,
  Puzzle,
  Settings,
  ChevronRight,
  ChevronDown,
  FileText,
  ClipboardList,
  X,
  Plus,
  Mic,
  ArrowUp,
  ThumbsUp,
  ThumbsDown,
  Video,
  CircleCheck,
  Loader2,
  ArrowRight,
  Menu,
  Play,
  Zap,
} from 'lucide-react'

type Page = 'challenge' | 'ide' | 'complete' | 'welcome'
type RightPanel = 'instructions' | 'coach'

// ─── Shared Components ───

function Header({ onSparkleClick }: { onSparkleClick?: () => void }) {
  return (
    <header className="w-full flex items-center justify-between px-4 py-3 bg-page-bg shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-[22px] font-bold tracking-tight text-primary select-none">coursera</span>
        <div className="w-px h-6 bg-border" />
        <span className="text-[15px] font-medium tracking-tight select-none">
          <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC04]">o</span><span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-1.5 rounded-full hover:bg-black/5 transition-colors"><HelpCircle className="w-5 h-5 text-text-muted" /></button>
        <button className="p-1.5 rounded-full hover:bg-black/5 transition-colors"><Globe className="w-5 h-5 text-text-muted" /></button>
        <button onClick={onSparkleClick} className="p-1.5 rounded-full hover:bg-black/5 transition-colors">
          <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient id="header-sparkle-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366F1" /><stop offset="1" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            <path d="M10 3L12.5 9.5L19 12L12.5 14.5L10 21L7.5 14.5L1 12L7.5 9.5L10 3Z" fill="url(#header-sparkle-grad)" />
            <path d="M18 1L19.125 4.125L22.25 5.25L19.125 6.375L18 9.5L16.875 6.375L13.75 5.25L16.875 4.125L18 1Z" fill="url(#header-sparkle-grad)" />
          </svg>
        </button>
        <button className="w-7 h-7 rounded-full bg-primary text-white text-sm font-semibold flex items-center justify-center">N</button>
      </div>
    </header>
  )
}

function CourseSidebar() {
  return (
    <div className="w-[52px] shrink-0 bg-white rounded-2xl flex flex-col items-center pt-4 h-full">
      <button className="p-1.5 rounded hover:bg-black/5 transition-colors"><PanelLeft className="w-5 h-5 text-text-muted" /></button>
      <div className="w-8 h-px bg-border mt-3" />
    </div>
  )
}

// ─── Challenge Page ───

function ChallengeCard({ onLaunch }: { onLaunch: () => void }) {
  return (
    <div className="w-full max-w-[818px] rounded-2xl border border-border overflow-hidden">
      <div className="bg-light-blue flex items-center justify-between px-10 py-10 min-h-[246px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-base text-text-muted leading-6">Lab exercise</span>
            <h1 className="text-4xl font-semibold text-text-dark leading-[42px] tracking-[-0.18px]">Jamie, its time to create your stores website!</h1>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <button onClick={onLaunch} className="bg-primary hover:bg-primary-hover text-white font-semibold text-base leading-6 tracking-[1px] px-6 py-2.5 rounded-lg transition-colors">Launch</button>
            <div className="flex items-center gap-1.5 px-1.5 py-1.5">
              <img src="/xp-icon.png" alt="XP" className="w-5 h-5" />
              <span className="text-base font-semibold text-xp-orange tracking-[-0.05px] leading-5">30XP</span>
            </div>
          </div>
        </div>
        <div className="w-[237px] h-[214px] shrink-0">
          <img src="/illustration.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="px-10 py-8">
        <div className="flex gap-8 items-start">
          <div className="flex-1 min-w-0">
            <p className="text-base text-black/80 leading-6 mb-4">Based on your goal to increase your proficiency with web page creation, we have customized this activity to be an example in your industry: create your stores own website.</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2"><Trophy className="w-4 h-4 text-text-dark mt-1 shrink-0" strokeWidth={2} /><span className="text-base text-text-dark leading-6">Get extra 30 XP!</span></div>
              <div className="flex items-start gap-2"><Medal className="w-4 h-4 text-text-dark mt-1 shrink-0" strokeWidth={2} /><span className="text-base text-text-dark leading-6">Prove your skillsets get more personalized content based on your great performance!</span></div>
            </div>
          </div>
          <div className="w-[280px] shrink-0 border border-border rounded-lg p-4 bg-white">
            <h3 className="text-base font-semibold text-black tracking-[-0.05px] leading-5 mb-3">What to expect</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><Target className="w-5 h-5 text-text-dark shrink-0" strokeWidth={1.8} /><span className="text-base text-text-dark leading-6">3 attempts</span></div>
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-text-dark shrink-0" strokeWidth={1.8} /><span className="text-base text-text-dark leading-6">60 min per attempt</span></div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 16 16" fill="none">
                  <defs>
                    <linearGradient id="sparkle-grad" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6366F1" /><stop offset="1" stopColor="#2563EB" />
                    </linearGradient>
                  </defs>
                  <path d="M7 2L8.5 6.5L13 8L8.5 9.5L7 14L5.5 9.5L1 8L5.5 6.5L7 2Z" fill="url(#sparkle-grad)" />
                  <path d="M12 0.5L12.75 2.75L15 3.5L12.75 4.25L12 6.5L11.25 4.25L9 3.5L11.25 2.75L12 0.5Z" fill="url(#sparkle-grad)" />
                </svg>
                <span className="text-base text-text-dark leading-6">Reviewed by AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChallengePage({ onLaunch }: { onLaunch: () => void }) {
  return (
    <div className="flex flex-1 gap-4 px-4 pb-4 min-h-0">
      <CourseSidebar />
      <main className="flex-1 bg-white rounded-2xl overflow-auto flex flex-col items-center justify-center px-[5%] xl:px-[10%] 2xl:px-[15%] py-8">
        <ChallengeCard onLaunch={onLaunch} />
      </main>
    </div>
  )
}

// ─── IDE Page Components ───

const activityIcons = [
  { icon: Files, label: 'Explorer' },
  { icon: Search, label: 'Search' },
  { icon: GitBranch, label: 'Source Control' },
  { icon: Bug, label: 'Run and Debug' },
  { icon: Blocks, label: 'Extensions' },
  { icon: Puzzle, label: 'Testing' },
]

function ActivityBar() {
  return (
    <div className="w-12 bg-[#333] flex flex-col items-center pt-2 pb-2 shrink-0 rounded-bl-2xl rounded-tl-2xl justify-between">
      <div className="flex flex-col items-center gap-1">
        {activityIcons.map(({ icon: Icon, label }) => (
          <button key={label} title={label}
            className={`w-12 h-10 flex items-center justify-center hover:bg-white/10 transition-colors ${label === 'Explorer' ? 'border-l-2 border-white' : 'border-l-2 border-transparent'}`}>
            <Icon className="w-5 h-5 text-[#999]" strokeWidth={1.6} />
          </button>
        ))}
      </div>
      <button title="Settings" className="w-12 h-10 flex items-center justify-center hover:bg-white/10 transition-colors">
        <Settings className="w-5 h-5 text-[#999]" strokeWidth={1.6} />
      </button>
    </div>
  )
}

function ExplorerSidebar() {
  return (
    <div className="w-[220px] bg-[#252526] border-r border-[#3e3e42] flex flex-col shrink-0 text-[13px] font-['Inter',sans-serif]">
      <div className="h-9 flex items-center justify-between px-4 shrink-0">
        <span className="text-[11px] text-[#99a1af] uppercase tracking-wider font-medium">Explorer</span>
        <span className="text-[#99a1af] text-lg leading-none cursor-pointer">···</span>
      </div>
      <div className="flex-1 overflow-auto">
        <button className="flex items-center gap-1 h-7 pl-2 w-full text-left text-white hover:bg-[#2a2d2e]">
          <ChevronDown className="w-4 h-4 text-[#ccc]" strokeWidth={1.5} /><span className="text-sm font-medium">LEARN</span>
        </button>
        <div className="flex items-center gap-2 h-7 pl-8 w-full bg-[#37373d] text-white rounded">
          <span className="text-xs">📄</span><span className="text-sm">index.html</span>
        </div>
      </div>
      <div className="border-t border-[#3e3e42]">
        <button className="flex items-center gap-1 h-9 pl-4 w-full text-left">
          <ChevronDown className="w-3 h-3 text-[#99a1af]" strokeWidth={2} />
          <span className="text-[11px] text-[#99a1af] uppercase tracking-wider font-medium">Outline</span>
        </button>
        <div className="flex flex-col gap-0.5 px-4 pb-2">
          <div className="flex items-center gap-2 h-7 pl-2 text-[#d1d5dc] rounded hover:bg-[#2a2d2e]">
            <span className="text-xs text-[#d1d5dc] font-mono">{'{}'}</span><span className="text-sm">header</span>
          </div>
          <div className="flex items-center gap-2 h-7 pl-2 text-[#d1d5dc] rounded hover:bg-[#2a2d2e]">
            <span className="text-xs text-[#d1d5dc] font-mono">{'{}'}</span><span className="text-sm">nav</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#3e3e42]">
        <button className="flex items-center gap-1 h-9 pl-4 w-full text-left">
          <ChevronRight className="w-3 h-3 text-[#99a1af]" strokeWidth={2} />
          <span className="text-[11px] text-[#99a1af] uppercase tracking-wider font-medium">Timeline</span>
        </button>
      </div>
    </div>
  )
}

// ─── Code Editor with Selection ───

const codeLines: { num: number; content: JSX.Element | null }[] = [
  { num: 1, content: <><span className="text-[#569cd6]">{'<header>'}</span><span className="text-[#d4d4d4]">June Chang</span><span className="text-[#569cd6]">{'</header>'}</span></> },
  { num: 2, content: <span className="text-[#569cd6]">{'<nav>'}</span> },
  { num: 3, content: <><span className="text-[#d4d4d4]">{'  '}</span><span className="text-[#569cd6]">{'<a '}</span><span className="text-[#9cdcfe]">href</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">{'"#"'}</span><span className="text-[#d4d4d4]">{'>Home'}</span><span className="text-[#569cd6]">{'</a>'}</span></> },
  { num: 4, content: <><span className="text-[#d4d4d4]">{'  '}</span><span className="text-[#569cd6]">{'<a '}</span><span className="text-[#9cdcfe]">href</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">{'"#"'}</span><span className="text-[#d4d4d4]">{'>Projects'}</span><span className="text-[#569cd6]">{'</a>'}</span></> },
  { num: 5, content: <><span className="text-[#d4d4d4]">{'  '}</span><span className="text-[#569cd6]">{'<a '}</span><span className="text-[#9cdcfe]">href</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">{'"#"'}</span><span className="text-[#d4d4d4]">{'>Contact'}</span><span className="text-[#569cd6]">{'</a>'}</span></> },
  { num: 6, content: <span className="text-[#569cd6]">{'</nav>'}</span> },
  { num: 7, content: null },
  { num: 8, content: <span className="text-[#569cd6]">{'<main>'}</span> },
  { num: 9, content: <><span className="text-[#d4d4d4]">{'  '}</span><span className="text-[#569cd6]">{'<section>'}</span></> },
  { num: 10, content: <><span className="text-[#d4d4d4]">{'    '}</span><span className="text-[#569cd6]">{'<h2>'}</span><span className="text-[#d4d4d4]">About Me</span><span className="text-[#569cd6]">{'</h2>'}</span></> },
  { num: 11, content: <><span className="text-[#d4d4d4]">{'    '}</span><span className="text-[#569cd6]">{'<p>'}</span><span className="text-[#d4d4d4]">This is my portfolio page.</span><span className="text-[#569cd6]">{'</p>'}</span></> },
  { num: 12, content: <><span className="text-[#d4d4d4]">{'  '}</span><span className="text-[#569cd6]">{'</section>'}</span></> },
  { num: 13, content: null },
  { num: 14, content: <><span className="text-[#d4d4d4]">{'  '}</span><span className="text-[#569cd6]">{'<aside>'}</span></> },
  { num: 15, content: <><span className="text-[#d4d4d4]">{'    '}</span><span className="text-[#569cd6]">{'<h3>'}</span><span className="text-[#d4d4d4]">Skills</span><span className="text-[#569cd6]">{'</h3>'}</span></> },
  { num: 16, content: <><span className="text-[#d4d4d4]">{'    '}</span><span className="text-[#569cd6]">{'<p>'}</span><span className="text-[#d4d4d4]">HTML, CSS, JavaScript</span><span className="text-[#569cd6]">{'</p>'}</span></> },
  { num: 17, content: <><span className="text-[#d4d4d4]">{'  '}</span><span className="text-[#569cd6]">{'</aside>'}</span></> },
  { num: 18, content: <span className="text-[#569cd6]">{'</main>'}</span> },
  { num: 19, content: null },
  { num: 20, content: <><span className="text-[#569cd6]">{'<footer>'}</span><span className="text-[#d4d4d4]">© June</span><span className="text-[#569cd6]">{'</footer>'}</span></> },
]

function CodeEditor({ selectedLine, onSelectLine, onAskAI }: {
  selectedLine: number | null
  onSelectLine: (line: number | null) => void
  onAskAI: () => void
}) {
  return (
    <div className="flex-1 flex flex-col min-w-0 font-['Inter',sans-serif]">
      <div className="h-9 bg-[#3c3c3c] border-b border-[#3e3e42] flex items-center px-2 shrink-0">
        {['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'].map((m) => (
          <button key={m} className="px-2.5 h-8 text-[#d1d5dc] text-sm hover:bg-[#505050] rounded transition-colors">{m}</button>
        ))}
      </div>
      <div className="h-9 bg-[#252526] border-b border-[#3e3e42] flex items-center shrink-0">
        <div className="h-full bg-[#1e1e1e] border-r border-[#3e3e42] flex items-center gap-2 px-3 text-white text-[13px]">
          <span className="text-xs">📄</span><span>index.html</span>
          <button className="ml-1 text-[#99a1af] hover:text-white text-xs"><X className="w-3.5 h-3.5" /></button>
        </div>
      </div>
      <div className="flex-1 bg-[#1e1e1e] overflow-auto font-['Menlo','Monaco','Courier_New',monospace] text-sm leading-6 relative">
        <div className="flex pt-2">
          <div className="w-10 text-right pr-3 select-none shrink-0">
            {codeLines.map((l) => (
              <div key={l.num} className="text-[#4a5565] text-xs leading-6">{l.num}</div>
            ))}
          </div>
          <div className="flex-1 pl-2 relative">
            {codeLines.map((l) => (
              <div
                key={l.num}
                onClick={() => onSelectLine(selectedLine === l.num ? null : l.num)}
                className={`leading-6 whitespace-pre text-sm cursor-pointer relative ${selectedLine === l.num ? 'bg-[#264f78]/50' : 'hover:bg-white/5'}`}
              >
                {l.content ?? '\u00A0'}
              </div>
            ))}
          </div>
        </div>

        {/* Ask AI floating button */}
        {selectedLine && (
          <div
            className="absolute z-10 animate-hint-in"
            style={{ top: `${8 + (selectedLine - 1) * 24 - 36}px`, left: '140px' }}
          >
            <button
              onClick={(e) => { e.stopPropagation(); onAskAI() }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a2e] text-white text-xs font-medium rounded-full shadow-lg hover:bg-[#2a2a4e] transition-colors border border-white/10"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              Ask AI
            </button>
          </div>
        )}
      </div>
      <div className="h-6 bg-[#007acc] flex items-center justify-between px-3 text-white text-[11px] font-['Inter',sans-serif] shrink-0">
        <div className="flex items-center gap-3">
          <span>🔌</span><span>⚠️ 0</span><span>⛔ 0</span><span>🔨</span><span>Open Development Server</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Ln 2, Col 6</span><span>Spaces: 4</span><span>UTF-8</span><span>LF</span><span>HTML</span><span>🔔 Go Live</span><span>Layout: U.S.</span><span>Prettier</span>
        </div>
      </div>
    </div>
  )
}

// ─── Instructions Panel ───

function HintCard({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="animate-hint-in bg-[#f0f6ff] rounded-lg px-4 py-3 my-2">
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-base font-semibold text-text-dark tracking-[-0.05px] leading-5">Hint</h4>
        <button onClick={onDismiss} className="p-0.5 -mt-0.5 -mr-1 rounded hover:bg-black/5 transition-colors">
          <X className="w-4 h-4 text-text-muted" />
        </button>
      </div>
      <p className="text-sm text-text-dark leading-5">
        Right now your links are stacked vertically. How can you make them appear in a row?
        <br />Consider using <code className="bg-white/60 px-1 py-0.5 rounded text-[13px] font-mono">display: flex</code> on{' '}
        <code className="bg-white/60 px-1 py-0.5 rounded text-[13px] font-mono">{'<nav>'}</code> and adding spacing between items.
      </p>
      <button className="flex items-center gap-1.5 mt-3 text-primary font-semibold text-base leading-6 tracking-[1px] hover:underline">
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
          <defs>
            <linearGradient id="hint-sparkle" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" /><stop offset="1" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          <path d="M7 2L8.5 6.5L13 8L8.5 9.5L7 14L5.5 9.5L1 8L5.5 6.5L7 2Z" fill="url(#hint-sparkle)" />
          <path d="M12 0.5L12.75 2.75L15 3.5L12.75 4.25L12 6.5L11.25 4.25L9 3.5L11.25 2.75L12 0.5Z" fill="url(#hint-sparkle)" />
        </svg>
        Tell me more
      </button>
    </div>
  )
}

function InstructionsPanel({ onCheck }: { onCheck: () => void }) {
  const [showHint, setShowHint] = useState(false)
  const [isChecking, setIsChecking] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 3000)
    return () => clearTimeout(timer)
  }, [])
  const tasks = [
    { title: '1. Header Styling', items: ['Set a background color for the <header>', 'Make the text bold and centered', 'Add padding (at least 16px'] },
    { title: '2. Navigation Bar', items: ['Style the <nav> with a horizontal layout', 'Add spacing between links', 'Change link color and remove underline'] },
    { title: '3. Main Content', items: ['Add margin around the <main> section', 'Style the paragraph text (font size, line height)', 'Add a background color for the section'] },
    { title: '4. Aside (Skills Section)', items: ['Add a border or card-style background', 'Add padding and spacing', 'Make it visually distinct from the main section'] },
  ]

  const handleCheck = () => {
    setIsChecking(true)
    setTimeout(() => {
      setIsChecking(false)
      onCheck()
    }, 1200)
  }

  return (
    <div className="w-[400px] bg-white border-l border-[#dae1ed] flex flex-col shrink-0">
      <div className="px-4 pt-4 pb-3 shrink-0">
        <h2 className="text-base font-semibold text-text-dark tracking-[0.16px] leading-6">Instructions</h2>
        <p className="text-sm text-text-muted leading-5">3 of 5 completed</p>
      </div>
      <div className="px-4 pb-2 shrink-0">
        <h3 className="text-xl font-semibold text-text-dark tracking-[-0.06px] leading-6">Task 2: Style Your Page with CSS</h3>
      </div>
      <div className="flex-1 overflow-auto px-4 pb-4">
        <div className="flex flex-col gap-4">
          {tasks.map((task, idx) => (
            <div key={task.title}>
              <p className="text-base text-text-dark leading-6 mb-1">{task.title}</p>
              <ul className="list-disc pl-7 text-base text-text-dark leading-6 space-y-0.5">
                {task.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              {idx === 1 && showHint && <HintCard onDismiss={() => setShowHint(false)} />}
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 py-3 flex items-center justify-end shrink-0 border-t border-[#eee]">
        <button
          onClick={handleCheck}
          disabled={isChecking}
          className="px-8 py-2.5 border-2 border-primary text-primary font-semibold text-base rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-70 flex items-center gap-2"
        >
          {isChecking && <Loader2 className="w-4 h-4 animate-spin" />}
          {isChecking ? 'Checking...' : 'Check'}
        </button>
      </div>
    </div>
  )
}

// ─── AI Coach Panel ───

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 py-2">
      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
  )
}

function VideoCard() {
  return (
    <div className="border border-border rounded-lg overflow-hidden flex">
      <div className="w-[74px] bg-purple-50 flex items-center justify-center shrink-0">
        <Video className="w-6 h-6 text-purple-400" />
      </div>
      <div className="flex-1 py-2 px-3">
        <p className="text-base font-semibold text-text-dark tracking-[-0.05px] leading-5">Create link</p>
        <p className="text-sm text-[#636363] leading-5">Video • 01:23-4:12</p>
      </div>
    </div>
  )
}

function HTMLCodeBlock() {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <p className="text-base font-semibold text-text-dark leading-5 mb-1">HTML</p>
        <div className="text-sm leading-5 font-mono">
          <p>
            <span className="text-[#0048b0]">{'<a '}</span>
            <span className="text-[#af8001]">href</span>=
            <span className="text-[#276a1a]">"#section1"</span>
            <span className="text-text-dark">{'>Go to Section 1'}</span>
            <span className="text-[#0048b0]">{'</a>'}</span>
          </p>
          <p>
            <span className="text-[#0048b0]">{'<h2 '}</span>
            <span className="text-[#af8001]">href</span>
            <span className="text-[#7d166a]">=</span>
            <span className="text-[#276a1a]">"section1"</span>
            <span className="text-text-dark">{'>Section 1'}</span>
            <span className="text-[#0048b0]">{'</h2>'}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

function AICoachPanel({ onClose }: { onClose: () => void }) {
  const [phase, setPhase] = useState(0)
  const [followUpSent, setFollowUpSent] = useState(false)
  const [followUpPhase, setFollowUpPhase] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    timers.push(setTimeout(() => setPhase(1), 800))
    timers.push(setTimeout(() => setPhase(2), 1600))
    timers.push(setTimeout(() => setPhase(3), 2400))
    timers.push(setTimeout(() => setPhase(4), 3200))
    timers.push(setTimeout(() => setPhase(5), 3800))
    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    if (!followUpSent) return
    const timers: ReturnType<typeof setTimeout>[] = []
    timers.push(setTimeout(() => setFollowUpPhase(1), 600))
    timers.push(setTimeout(() => setFollowUpPhase(2), 1400))
    timers.push(setTimeout(() => setFollowUpPhase(3), 2200))
    timers.push(setTimeout(() => setFollowUpPhase(4), 2800))
    return () => timers.forEach(clearTimeout)
  }, [followUpSent])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [phase, followUpPhase, followUpSent])

  const handleSend = () => {
    if (!followUpSent && inputValue.trim()) {
      setFollowUpSent(true)
      setInputValue('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="w-[488px] bg-white border-l border-[#dae1ed] flex flex-col shrink-0 relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-14 shrink-0 border-b border-[#f0f0f0]">
        <div className="flex items-center shrink-0" aria-hidden>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient id="ai-coach-sparkle-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366F1" /><stop offset="1" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            <path d="M10 3L12.5 9.5L19 12L12.5 14.5L10 21L7.5 14.5L1 12L7.5 9.5L10 3Z" fill="url(#ai-coach-sparkle-grad)" />
            <path d="M18 1L19.125 4.125L22.25 5.25L19.125 6.375L18 9.5L16.875 6.375L13.75 5.25L16.875 4.125L18 1Z" fill="url(#ai-coach-sparkle-grad)" />
          </svg>
        </div>
        <div className="flex items-center gap-0.5">
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><Plus className="w-5 h-5 text-text-muted" strokeWidth={1.8} /></button>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><Settings className="w-5 h-5 text-text-muted" strokeWidth={1.8} /></button>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><X className="w-5 h-5 text-text-muted" strokeWidth={1.8} /></button>
        </div>
      </div>

      {/* Chat messages */}
      <div ref={scrollRef} className="flex-1 overflow-auto px-4 pt-6 pb-4">
        <div className="flex flex-col gap-4">

          {/* Phase 0: Typing */}
          {phase === 0 && <TypingIndicator />}

          {/* Phase 1+: First message */}
          {phase >= 1 && (
            <p className="text-base text-[#1e2229] leading-6 animate-hint-in">
              It looks like you might be stuck on how links work in HTML.
              <br />Let's break it down quickly 👇
            </p>
          )}

          {/* Phase 2+: Video card */}
          {phase >= 2 && (
            <div className="animate-hint-in"><VideoCard /></div>
          )}

          {/* Phase 3+: Code explanation */}
          {phase >= 3 && (
            <div className="animate-hint-in text-base text-[#1e2229] leading-6">
              <p>
                In <span className="text-[#0048b0]">{'<a'}</span>{' '}
                <span className="text-[#ff6308]">href</span>
                <span className="text-[#f05bd5]">=</span>
                <span className="text-[#79a60d]">"#"</span>
                <span className="text-[#0048b0]">{'>'}</span>, the href tells the browser where the link should go.
              </p>
              <ul className="list-disc pl-6 mt-1">
                <li># means "stay on this page"</li>
                <li>It's often used as a placeholder</li>
              </ul>
            </div>
          )}

          {/* Phase 4+: Context message */}
          {phase >= 4 && (
            <p className="text-base text-[#1e2229] leading-6 animate-hint-in">
              For this task, you don't need real links yet — you just need to structure the navigation. So using # is totally fine 👍
            </p>
          )}

          {/* Phase 5+: Next step */}
          {phase >= 5 && (
            <p className="text-base text-[#1e2229] leading-6 animate-hint-in">
              Next step: Try styling your {'<nav>'} so the links appear in a row.
            </p>
          )}

          {/* Follow-up conversation */}
          {followUpSent && (
            <>
              {/* User message */}
              <div className="flex justify-end animate-hint-in">
                <div className="bg-purple-100/60 px-3 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg max-w-[80%]">
                  <p className="text-base text-text-dark leading-6">What is hashtag?</p>
                </div>
              </div>

              {/* AI typing then response */}
              {followUpPhase === 0 && <TypingIndicator />}

              {followUpPhase >= 1 && (
                <div className="text-base text-[#1e2229] leading-6 animate-hint-in">
                  <p>The # (hashtag) is used to link to a specific part of the same page.</p>
                  <p>But for now, you can keep using # as a placeholder while building your layout.</p>
                </div>
              )}

              {followUpPhase >= 2 && (
                <div className="animate-hint-in"><HTMLCodeBlock /></div>
              )}

              {followUpPhase >= 3 && (
                <div className="text-base text-[#1e2229] leading-6 animate-hint-in">
                  <p>The # (hashtag) is used to link to a specific part of the same page.</p>
                  <p>But for now, you can keep using # as a placeholder while building your layout.</p>
                </div>
              )}

              {followUpPhase >= 4 && (
                <div className="flex justify-end gap-1 animate-hint-in">
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <ThumbsUp className="w-4 h-4 text-text-muted" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <ThumbsDown className="w-4 h-4 text-text-muted" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Input box */}
      <div className="px-4 pt-2 pb-3 shrink-0">
        <div className="bg-page-bg rounded-lg p-2 flex items-center gap-2">
          <button className="p-1.5 rounded hover:bg-black/5 transition-colors shrink-0">
            <Plus className="w-5 h-5 text-text-muted" />
          </button>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything"
            disabled={followUpSent}
            className="flex-1 bg-transparent text-base text-text-dark placeholder:text-text-muted outline-none disabled:opacity-50"
          />
          <button className="p-1.5 rounded hover:bg-black/5 transition-colors shrink-0">
            <Mic className="w-5 h-5 text-text-muted" />
          </button>
          <button
            onClick={handleSend}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
          >
            <ArrowUp className="w-4 h-4 text-white" strokeWidth={2.5} />
          </button>
        </div>
        <p className="text-xs text-[#404b61] leading-5 mt-1.5">
          Powered by AI - check for mistakes and don't share sensitive info. Data is used in accordance with{' '}
          <span className="underline">Coursera's Privacy Notice</span>.
        </p>
      </div>
    </div>
  )
}

// ─── Right Panel Tabs ───

function RightNavTabs({ activePanel, onSwitch }: { activePanel: RightPanel; onSwitch: (p: RightPanel) => void }) {
  const isGuideActive = activePanel === 'instructions'
  return (
    <div className="w-[88px] bg-white border-l border-[#dae1ed] flex flex-col items-center pt-2 shrink-0 rounded-tr-2xl rounded-br-2xl">
      <button
        onClick={() => onSwitch('instructions')}
        className={`w-[72px] h-16 rounded-lg flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors ${isGuideActive ? 'bg-light-blue' : 'hover:bg-gray-50'}`}
      >
        <ClipboardList className={`w-5 h-5 ${isGuideActive ? 'text-text-dark' : 'text-text-muted'}`} strokeWidth={1.8} />
        <span className={`text-xs font-semibold ${isGuideActive ? 'text-text-dark' : 'text-text-muted'}`}>Guide</span>
      </button>
      <button
        onClick={() => onSwitch('coach')}
        className={`w-[72px] h-16 rounded-lg flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors mt-2 ${activePanel === 'coach' ? 'bg-light-blue' : 'hover:bg-gray-50'}`}
      >
        <FileText className={`w-5 h-5 ${activePanel === 'coach' ? 'text-text-dark' : 'text-text-muted'}`} strokeWidth={1.8} />
        <span className={`text-xs font-semibold ${activePanel === 'coach' ? 'text-text-dark' : 'text-text-muted'}`}>Files</span>
      </button>
    </div>
  )
}

// ─── IDE Page ───

function IDEPage({ onFinish: finishPractice, rightPanel, setRightPanel }: {
  onFinish: () => void
  rightPanel: RightPanel
  setRightPanel: (p: RightPanel) => void
}) {
  const [selectedLine, setSelectedLine] = useState<number | null>(null)

  const handleAskAI = () => {
    setSelectedLine(null)
    setRightPanel('coach')
  }

  const handleCheck = () => {
    finishPractice()
  }

  return (
    <div className="flex flex-1 min-h-0 bg-page-bg px-4 pb-4 gap-4">
      <CourseSidebar />
      <div className="flex flex-1 min-h-0 overflow-hidden rounded-2xl">
        <ActivityBar />
        <ExplorerSidebar />
        <CodeEditor
          selectedLine={selectedLine}
          onSelectLine={setSelectedLine}
          onAskAI={handleAskAI}
        />
        {rightPanel === 'coach' ? (
          <AICoachPanel onClose={() => setRightPanel('instructions')} />
        ) : (
          <>
            <InstructionsPanel onCheck={handleCheck} />
            <RightNavTabs activePanel={rightPanel} onSwitch={setRightPanel} />
          </>
        )}
      </div>
    </div>
  )
}

// ─── Practice Complete Page ───

function PracticeCompletePage({ onFinishSession }: { onFinishSession: () => void }) {
  const wellDone = [
    'Describe upstream & downstream roles in data pipeline',
    'Distinguish correlation & causation',
  ]
  const focusOn = [
    "Audit teammate's dataset & hand off with README & SLA",
    'Distinguish correlation & causation',
  ]

  return (
    <div className="flex flex-1 gap-4 px-4 pb-4 min-h-0 relative">
      {/* Left sidebar */}
      <div className="w-[52px] shrink-0 bg-white rounded-2xl flex flex-col items-center pt-4 h-full">
        <button className="p-1.5 rounded hover:bg-black/5 transition-colors"><Menu className="w-5 h-5 text-text-muted" /></button>
      </div>

      {/* Main content card */}
      <main className="flex-1 bg-white rounded-2xl overflow-hidden min-h-0 min-w-0">
        <div className="h-full overflow-auto">
          {/* Hero — #f0f6ff bg, rounded-lg */}
          <div className="bg-[#f0f6ff] rounded-lg relative overflow-clip mx-5 mt-5">
            <div className="max-w-[770px] mx-auto flex items-center justify-between px-4 py-10 md:py-12">
              <div className="flex flex-col gap-1 relative z-10 max-w-[499px] min-w-0">
                <h1 className="text-[36px] font-semibold text-text-dark leading-[42px] tracking-[-0.5px]">
                  Practice complete!
                </h1>
                <div className="flex items-center my-2">
                  <img src="/xp-icon.png" alt="" className="w-6 h-6 shrink-0" />
                  <span className="text-xl font-semibold text-xp-orange tracking-[-0.06px] leading-6">+ 30XP</span>
                </div>
                <button className="text-primary font-semibold text-base leading-6 hover:underline self-start">
                  View full submission
                </button>
                <button
                  onClick={onFinishSession}
                  className="bg-[#0056D2] hover:bg-primary-hover text-white font-semibold text-base leading-6 tracking-[1px] px-6 py-3 rounded-lg transition-colors flex items-center gap-2 self-start mt-2"
                >
                  Finish today session
                  <ArrowRight className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>
              <div className="hidden md:block w-[289px] h-[195px] shrink-0 ml-6">
                <img src="/practice-done.png" alt="" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="max-w-[770px] mx-auto px-4 py-8">
            <div className="flex flex-col gap-8">
            {/* What you did well */}
            <section className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-black tracking-[-0.06px] leading-6">What you did well</h3>
              <ul className="flex flex-col gap-2">
                {wellDone.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CircleCheck className="w-4 h-4 text-text-dark shrink-0" strokeWidth={2} />
                    <span className="text-base text-text-dark leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Areas to focus on */}
            <section className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-black tracking-[-0.06px] leading-6">Areas to focus on</h3>
              <ul className="flex flex-col gap-2">
                {focusOn.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CircleCheck className="w-4 h-4 text-text-dark shrink-0" strokeWidth={2} />
                    <span className="text-base text-text-dark leading-6">{item}</span>
                  </li>
                ))}
              </ul>

              {/* AI Recap Card — inside Areas section per Figma */}
              <div className="bg-[#f1f6ff] rounded-[14px] px-5 py-5 max-w-[700px] mt-5">
                <div className="flex items-center gap-1 mb-2">
                  <Target className="w-4 h-4 text-[#3587FC] shrink-0" strokeWidth={2} />
                  <span className="text-base font-semibold text-text-dark leading-[17px] tracking-[-0.048px]">
                    We'll recap this in your next session
                  </span>
                </div>
                <p className="text-[13px] font-semibold text-text-dark leading-[17px] tracking-[-0.04px]">
                  We'll bring the core topics back to the start of your next session to ensure you feel ready.
                </p>
              </div>
            </section>
          </div>
        </div>
        </div>
      </main>

    </div>
  )
}

// ─── Welcome Back Page ───

const tasks = [
  {
    title: 'Recap Previous Concepts',
    type: 'Practice',
    duration: '4min',
    icon: <img src="/task-recap2.png" alt="" className="w-12 h-12 object-contain" />,
    bg: '',
  },
  {
    title: 'Installing and Using Claude Code, (Mac)',
    type: 'Video',
    duration: '3min',
    icon: <img src="/task-video.png" alt="" className="w-12 h-12 object-contain" />,
    bg: '',
  },
  {
    title: 'Using AI to enhance your workflow',
    type: 'Todays Challenge',
    duration: '7min',
    icon: <img src="/task-challenge2.png" alt="" className="w-12 h-12 object-contain rounded-lg" />,
    bg: '',
  },
]

function WelcomeBackPage({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="flex flex-1 px-4 pb-4 min-h-0">
      {/* Main white card */}
      <main className="flex-1 bg-white rounded-2xl overflow-hidden min-h-0 min-w-0">
        <div className="h-full overflow-auto">
          {/* Hero — gradient bg */}
          <div className="bg-gradient-to-br from-[#f3f0ff] via-[#f0f0ff] to-[#fff0fa] rounded-2xl relative overflow-clip mx-5 mt-5">
            <div className="max-w-[770px] mx-auto flex items-center justify-between px-4 py-10 md:py-12 min-h-[220px] md:min-h-[260px]">
              <div className="flex flex-col gap-3 relative z-10 max-w-[420px] min-w-0">
                <h1 className="text-[28px] md:text-[36px] font-semibold text-text-dark leading-tight md:leading-[42px] tracking-[-0.5px]">
                  Welcome back!
                </h1>
                <p className="text-base text-text-muted leading-6">
                  We've adjusted your personalized plan based on what you learned and your performance in last session.
                </p>
                <button
                  onClick={onContinue}
                  className="bg-[#0056D2] hover:bg-primary-hover text-white font-semibold text-base leading-6 w-[195px] h-[48px] rounded-lg transition-colors self-start mt-2 flex items-center justify-center gap-2"
                >
                  Continue learning
                  <ArrowRight className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>
              <div className="hidden md:block w-[320px] h-[220px] shrink-0 ml-8">
                <img src="/welcome-hero.png" alt="" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Body content — centered */}
          <div className="max-w-[770px] mx-auto px-4 py-8 space-y-4">
            {/* Course completion card */}
            <div className="rounded-2xl border border-[#E8EEF7] px-6 py-5">
              <h3 className="text-base font-semibold text-text-dark tracking-[-0.048px] leading-5 mb-1">Great job on your progress!</h3>
              <p className="text-sm font-semibold text-text-dark leading-6 mb-2">
                <span className="text-text-dark">20%</span>{' '}
                <span className="text-text-dark font-normal">Course completion</span>
              </p>
              <div className="relative h-1 w-full rounded-[2px] bg-[#adcfff]">
                <div className="absolute left-0 top-0 h-full rounded-[2px] bg-[#2254ca]" style={{ width: '13%' }} />
              </div>
            </div>

            {/* Session header */}
            <div className="bg-[#f0f6ff] rounded-2xl px-6 py-5">
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#3587FC]" strokeWidth={2} />
                  <span className="text-sm font-semibold text-text-dark leading-[18px] tracking-[-0.042px]">Today's session</span>
                  <span className="text-sm text-text-muted">•</span>
                  <span className="text-sm text-text-dark font-semibold underline">15 min</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/xp-icon.png" alt="" className="w-5 h-5" />
                  <span className="text-sm font-semibold text-xp-orange">30</span>
                  <span className="text-sm text-text-muted font-semibold">/60XP</span>
                </div>
              </div>
              <h4 className="text-base font-semibold text-text-dark leading-5 tracking-[-0.048px]">Its all about the basics</h4>
              <p className="text-sm text-[#636363] leading-5 mt-1">Get your system set up for building a website</p>
            </div>

            {/* Task list */}
            <div className="flex flex-col gap-3">
              {tasks.map((task) => (
                <div
                  key={task.title}
                  className="rounded-2xl border border-[#E8EEF7] px-6 py-4 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 ${task.bg} rounded-xl flex items-center justify-center shrink-0`}>
                    {task.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-text-dark leading-5 tracking-[-0.048px]">{task.title}</p>
                    <p className="text-sm text-[#636363] leading-5 mt-0.5">{task.type} • {task.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// ─── App Root ───

export default function App() {
  const [page, setPage] = useState<Page>('challenge')
  const [rightPanel, setRightPanel] = useState<RightPanel>('instructions')

  const toggleCoach = () => {
    setRightPanel(rightPanel === 'coach' ? 'instructions' : 'coach')
  }

  return (
    <div className="h-screen w-full flex flex-col bg-page-bg font-sans overflow-hidden">
      <Header onSparkleClick={page === 'ide' ? toggleCoach : undefined} />
      {page === 'challenge' && (
        <ChallengePage onLaunch={() => setPage('ide')} />
      )}
      {page === 'ide' && (
        <IDEPage onFinish={() => setPage('complete')} rightPanel={rightPanel} setRightPanel={setRightPanel} />
      )}
      {page === 'complete' && (
        <PracticeCompletePage onFinishSession={() => setPage('welcome')} />
      )}
      {page === 'welcome' && (
        <WelcomeBackPage onContinue={() => setPage('challenge')} />
      )}
    </div>
  )
}
