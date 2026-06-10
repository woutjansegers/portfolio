import { useState, useEffect} from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { ArrowUp, Menu, X, ExternalLink, Download } from 'lucide-react';
import wout from './Images/wout1.jpeg';
import {motion} from "framer-motion";
import SimpleParticles from "./components/heroParticles";
import CanAssist1 from "./Assets/ImagesStage/CanAssist1.png";
import CanAssist2 from "./Assets/ImagesStage/CanAssist2.png";
import CanAssist3 from "./Assets/ImagesStage/CanAssist3.png";
import CanAssist4 from "./Assets/ImagesStage/CanAssist4.png";
import CanAssist5 from "./Assets/ImagesStage/CanAssist5.jpeg";
import CanAssist6 from "./Assets/ImagesStage/CanAssist6.png";
import CanAssist0 from "./Assets/ImagesStage/CanAssist0.png";
import CanAssistLogo from "./Assets/ImagesStage/CanAssist-Logo (1).jpg";
import StageProjectPlan from "./Assets/StageDocumenten/ProjectPlan-Document-WoutJansegers.pdf";
import StageRealization from "./Assets/StageDocumenten/Realization-Document-WoutJansegers.pdf";
import StageReflection from "./Assets/StageDocumenten/Reflection-Document-WoutJansegers.pdf";
import ProjectModal from "./components/ProjectModal";
import { projects } from "./projectsData";


// Keyframes animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Global styles
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    color-scheme: light;
    --bg: #f6f7fb;
    --surface: rgba(255, 255, 255, 0.82);
    --surface-strong: #ffffff;
    --text: #111827;
    --muted: #5b6474;
    --border: rgba(15, 23, 42, 0.08);
    --accent: #334155;
    --accent-strong: #0f766e;
    --accent-soft: #dff4ef;
    --shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    color: var(--text);
    background:
      radial-gradient(circle at top left, rgba(15, 118, 110, 0.08), transparent 28%),
      radial-gradient(circle at top right, rgba(51, 65, 85, 0.08), transparent 22%),
      var(--bg);
    line-height: 1.6;
    text-rendering: optimizeLegibility;
  }

  body::selection {
    background: var(--accent-strong);
    color: white;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
  }
`;

// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;
  padding: ${props => props.$scrolled ? '10px 0' : '20px 0'};
  background-color: ${props => props.$scrolled ? 'rgba(255, 255, 255, 0.86)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(18px)' : 'none'};
  box-shadow: ${props => props.$scrolled ? '0 10px 30px rgba(15, 23, 42, 0.08)' : 'none'};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: 700;
  color: #0f766e;
`;

const NavLinks = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    gap: 32px;
  }
`;

const NavLink = styled.a`
  color: ${props => props.$active ? '#0f766e' : '#5b6474'};
  font-weight: ${props => props.$active ? '500' : '400'};
  transition: color 0.3s ease;

  &:hover {
    color: #0f766e;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: #666;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.96);
  padding: 16px;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);
  animation: ${fadeIn} 0.3s ease-out forwards;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const HeroSection = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(circle at top left, rgba(15, 118, 110, 0.18), transparent 30%),
      radial-gradient(circle at bottom right, rgba(51, 65, 85, 0.16), transparent 28%),
      linear-gradient(135deg, #f8fafc, #eef2ff);
    transform: translateZ(0); /* Force hardware acceleration */
    will-change: transform; /* Optimize for animations */
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 10;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 800;
  margin-bottom: 16px;
  animation: ${fadeIn} 0.8s ease-out forwards;
  
  span {
    color: #0f766e;
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  color: #5b6474;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.4s;
  opacity: 0;
`;

const PrimaryButton = styled.button`
  background-color: #0f766e;
    color: white;
    padding: 12px 24px;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: 500;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 6px rgba(79, 70, 229, 0.2);

    &:hover {
        background-color: #115e59;
        box-shadow: 0 4px 12px rgba(15, 118, 110, 0.3);
        transform: translateY(-2px);
    }
`;

const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: ${props => props.$background || 'transparent'};
`;

const StageLinkChip = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(15, 118, 110, 0.08);
  color: var(--accent-strong);
  font-weight: 600;
  border: 1px solid rgba(15, 118, 110, 0.18);

  &:hover {
    background: rgba(15, 118, 110, 0.12);
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const AboutTopGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: minmax(320px, 0.95fr) minmax(0, 1.05fr);
  }
`;

const AboutPanelsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AboutContent = styled.div`
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 48px;
    height: 4px;
    background-color: #0f766e;
  }
`;

const FooterTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 36px;
    width: 48px;
    height: 4px;
    background-color: #0f766e;
  }
`;

const AnimatedTextChange = ({ texts, interval }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, interval);
        return () => clearInterval(timer);
    }, [texts.length, interval]);

    return (
        <motion.span
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {texts[currentIndex]}
        </motion.span>
    );
};

const Text = styled.p`
  color: #4b5563;
  margin-bottom: 24px;
`;

const SkillsContainer = styled.div`
  margin-bottom: 32px;
`;

const SkillsTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const SkillsTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillTag = styled.span`
  background-color: #e6f6f4;
  color: #0f766e;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.875rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
`;

const InfoCard = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 24px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
`;

const CardEyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-strong);
  margin-bottom: 12px;
`;

const CardTitle = styled.h3`
  font-size: 1.35rem;
  margin-bottom: 12px;
  color: var(--text);
`;

const StatList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
  margin-top: 18px;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px 18px 16px;
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.78);
  color: var(--muted);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.04);

  strong {
    color: var(--accent-strong);
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  span {
    line-height: 1.7;
  }
`;

const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-strong);
  font-size: 0.9rem;
`;

const Timeline = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 24px;
`;

const TimelineItem = styled.div`
  padding: 18px 20px;
  border-radius: 18px;
  background: white;
  border: 1px solid var(--border);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.04);
`;

const TimelineTitle = styled.h4`
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: var(--text);
`;

const ContactTitle = styled.h4`
  margin-bottom: 20px;
  font-size: 1.05rem;
  color: white);

`;

const TimelineMeta = styled.p`
  color: var(--muted);
  margin-bottom: 10px;
  font-size: 0.95rem;
`;

const StageGalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 18px;
`;

const StageFigure = styled.figure`
  overflow: hidden;
  border-radius: 20px;
  background: white;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
`;

const StageFigureImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: contain;
  background: #eef2f3;
  padding: 12px;
  display: block;
`;

const StageFigureCaption = styled.figcaption`
  padding: 14px 16px 16px;
  display: grid;
  gap: 6px;

  strong {
    color: var(--text);
    font-size: 1rem;
  }

  span {
    color: var(--muted);
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

const StageDocsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 18px;
`;

const StageDocCard = styled.a`
  display: grid;
  gap: 8px;
  padding: 20px;
  border-radius: 18px;
  background: white;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(15, 118, 110, 0.35);
  }

  strong {
    color: var(--text);
    font-size: 1rem;
  }

  span {
    color: var(--muted);
    font-size: 0.92rem;
  }
`;

const DocDownloadRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent-strong) !important;
  font-weight: 700;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  padding-bottom: 20px;
`;

const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 22px;
  border-radius: 20px;
  background: white;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(15, 118, 110, 0.25);
  }

  strong {
    color: var(--text);
    font-size: 1.05rem;
  }

  span {
    color: var(--muted);
  }
`;

const InternshipSubHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text);

  span {
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--accent-strong);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 8px;
  }
`;

const AbsoluteBottomRight = styled.div`
  position: absolute;
  bottom: 20px; /* Adjust as needed */
  right: 20px; /* Adjust as needed */
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectContent = styled.div`
  padding: 24px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 16px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const Tag = styled.span`
  background-color: #f3f4f6;
  color: #666;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.75rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4f46e5;
  }
`;

const Footer = styled.footer`
  background-color: #111827;
  color: white;
  padding: 32px 0;
  text-align: center;
`;

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume_Wout_Jansegers.pdf';
    link.download = 'Resume_Wout_Jansegers.pdf';
    link.click();
};

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: #0f766e;
  color: white;
  padding: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.3s ease-out forwards;
  
  &:hover {
    background-color: #115e59;
    transform: translateY(-4px);
  }
`;

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeSection, setActiveSection] = useState('Home');
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);

            const sections = ['Home', 'About', 'Internship', 'Projects', 'Contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom > 0;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const hero = document.getElementById('Home');
        if (hero) {
            // This will ensure the particles container stays fixed within the hero section
            hero.style.perspective = '1000px';
            hero.style.backfaceVisibility = 'hidden';
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

        const profileHighlights = [
          {
            label: "Focus",
            value: "Front-end development, UX and practical digital solutions",
          },
          {
            label: "Workflow",
            value: "From analysis and design to implementation, testing and refinement",
          },
          {
            label: "Value",
            value: "Flexible in teams and strong in collaboration, clear communication and quality-driven delivery",
          },
        ];

        const stageGallery = [
          {
            image: CanAssist0,
            title: "Original mobile dashboard",
            caption: "Original dashboard of the mobile application",
          },
          {
            image: CanAssist1,
            title: "Mobile app dashboard",
            caption: "Dashboard of the mobile application with the new branding and clearer navigation.",
          },
          {
            image: CanAssist2,
            title: "All tasks screen",
            caption: "The all-tasks screen where users can quickly find and follow up their tasks.",
          },
          {
            image: CanAssist4,
            title: "Modify task with branching",
            caption: "The modify-task screen where task branching becomes visible and manageable.",
          },
          {
            image: CanAssist5,
            title: "CanAssist office",
            caption: "Photo of the workplace during my internship in Victoria, Canada.",
          },
          {
            image: CanAssistLogo,
            title: "CanAssist branding",
            caption: "CanAssist logo used as a reference for the visual redesign and consistent brand application in the app.",
          },
          {
            image: CanAssist3,
            title: "Admin dashboard design",
            caption: "Figma design of the add-task screen for the admin dashboard. This is a design proposal, not a working implementation.",
          },
          {
            image: CanAssist6,
            title: "Admin analytics screen design",
            caption: "Figma design of the analytics screen for the admin dashboard. This is a design proposal, not a working implementation.",
          },
        ];

        const stageDownloads = [
          {
            title: "Project Plan",
            description: "Goals, scope and approach of the internship.",
            href: StageProjectPlan,
            fileName: "ProjectPlan-Document-WoutJansegers.pdf",
          },
          {
            title: "Realization Document",
            description: "Technical execution, design decisions and completed parts.",
            href: StageRealization,
            fileName: "Realization-Document-WoutJansegers.pdf",
          },
          {
            title: "Reflection Document",
            description: "Substantive and personal reflection on the internship period.",
            href: StageReflection,
            fileName: "Reflection-Document-WoutJansegers.pdf",
          },
        ];

        const stageMilestones = [
          {
            title: "Organization and problem",
            meta: "CanAssist · Victoria, British Columbia",
            text: "CanAssist develops practical technology for people with disabilities. For this internship I worked on CanPlan, a mobile app that supports people with cognitive challenges through step-by-step planning. The existing version was fully offline and had an outdated interface, limited expandability and no cloud or admin layer for future collaboration.",
          },
          {
            title: "My work",
            meta: "Accessibility redesign and new feature design",
            text: "Most of my internship focused on rebranding, accessibility redesign and shaping new and improved features in the mobile app. I improved screen flows, visual consistency and usability for the CanPlan target audience.",
          },
          {
            title: "Technical research",
            meta: "Backend and hosting options explored",
            text: "For backend and cloud expansion I carried out comparative research into Firebase, Supabase, a custom backend and hosting options. Important: no final technical choice was made during my internship. My output was a well-supported overview of options, benefits and trade-offs.",
          },
          {
            title: "Outcome and reflection",
            meta: "Improved app foundation and clear next steps",
            text: "The internship delivered a more modern and accessible app experience, concrete feature improvements and a strong research base for future backend and dashboard decisions. Personally, I grew in independence, communication and professional documentation.",
          },
        ];

        const contactLinks = [
          {
            key: 'email',
            title: "Email",
            text: "wjansege@gmail.com",
            href: "mailto:wjansege@gmail.com",
          },
          {
            key: 'linkedin',
            title: "Wout Jansegers • LinkedIn",
            text: "Open my LinkedIn profile.",
            href: "https://www.linkedin.com/in/wout-jansegers-9806122a2/",
          },
          {
            key: 'cv',
            title: "Download Resume",
            text: "Download my current resume.",
            href: "/Resume_Wout_Jansegers.pdf",
            download: true,
          },
        ];

    return (
        <>
            <GlobalStyle />

            {/* Navigation */}
            <Navigation $scrolled={scrollPosition > 50}>
                <Container>
                    <NavContainer>
                        <Logo href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                            Portfolio
                        </Logo>

                        {/* Desktop Menu */}
                        <NavLinks>
                            {['Home', 'About', 'Internship', 'Projects', 'Contact'].map((item) => (
                                <NavLink
                                    key={item}
                                    href={`#${item}`}
                                    $active={activeSection === item}
                                    onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </NavLink>
                            ))}
                        </NavLinks>

                        {/* Mobile Menu Button */}
                        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </MobileMenuButton>
                    </NavContainer>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <MobileMenu>
                            <MobileMenuLinks>
                                {['Home', 'About', 'Internship', 'Projects', 'Contact'].map((item) => (
                                    <NavLink
                                        key={item}
                                        href={`#${item}`}
                                        $active={activeSection === item}
                                        onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
                                    >
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </NavLink>
                                ))}
                            </MobileMenuLinks>
                        </MobileMenu>
                    )}
                </Container>
            </Navigation>

            {/* Hero Section */}
            <HeroSection id="Home">
                <SimpleParticles />
                <Container>
                    <HeroContent>
                        <HeroTitle>
                            <span>Wout</span> Jansegers
                        </HeroTitle>
                        <HeroSubtitle>
                            <AnimatedTextChange
                                texts={[
                                    "Student Digital Innovation",
                                    "Front-end Developer",
                                    "Creative Coder",
                                    "Tech Enthusiast"
                                ]}
                                interval={3000}
                            />
                        </HeroSubtitle>
                        <ButtonContainer>
                            <PrimaryButton onClick={() => scrollToSection('Internship')}>
                              Internship
                            </PrimaryButton>
                            <PrimaryButton onClick={() => scrollToSection('Projects')}>
                              View my work
                            </PrimaryButton>
                        </ButtonContainer>
                    </HeroContent>
                </Container>
            </HeroSection>

            {/* About Section */}
            <Section id="About" $background="#F6F7FB">
              <Container>
                <AboutContainer>
                  <AboutTopGrid>
                    <ImageContainer>
                      <ProfileImage>
                        <img src={wout} alt="Profile" />
                      </ProfileImage>
                    </ImageContainer>

                    <AboutContent>
                      <SectionTitle>About Me</SectionTitle>

                      <Text>
                        I am a digital innovation student with a clear preference for front-end development,
                        user-friendly interfaces and projects that create real-world value.
                      </Text>

                      <Text>
                        My strongest motivation comes from turning analysis into a clear solution: an interface that feels logical,
                        remains maintainable and looks professional. That is why I pay close attention to structure, consistency and the end-user experience.
                      </Text>

                      <SkillsContainer>
                        <SkillsTitle>Hard Skills</SkillsTitle>
                        <SkillsTags>
                          {['React', 'Vue', 'Laravel', 'JavaScript', 'Flutter', 'Figma'].map((skill) => (
                            <SkillTag key={skill}>
                              {skill}
                            </SkillTag>
                          ))}
                        </SkillsTags>
                      </SkillsContainer>

                      <SkillsContainer>
                        <SkillsTitle>Soft Skills</SkillsTitle>
                        <SkillsTags>
                          {['Flexible', 'Creative', 'Teamplayer', 'Open-minded', 'Critical thinker'].map((skill) => (
                            <SkillTag key={skill}>
                              {skill}
                            </SkillTag>
                          ))}
                        </SkillsTags>
                      </SkillsContainer>

                      <PrimaryButton onClick={handleDownload}>
                        Download Resume <ExternalLink size={16} />
                      </PrimaryButton>
                    </AboutContent>
                  </AboutTopGrid>

                  <AboutPanelsGrid>
                    <InfoCard>
                      <CardEyebrow>Personal profile</CardEyebrow>
                      <CardTitle>What I aim for</CardTitle>
                      <Text>
                        Alongside technical work, I place strong value on collaboration, processing feedback and clear communication.
                        This combination helps me take responsibility in team projects and work toward results in a focused way.
                      </Text>
                      <Text>
                        I look for assignments where analysis, design and implementation come together. I prefer an iterative approach,
                        so I can process feedback early and improve the quality of the final result.
                      </Text>
                      <PillRow>
                        {['UX', 'Front-end', 'Collaboration', 'Quality'].map((item) => (
                          <Pill key={item}>{item}</Pill>
                        ))}
                      </PillRow>
                    </InfoCard>

                    <InfoCard>
                      <CardEyebrow>Highlights</CardEyebrow>
                      <CardTitle>What you can expect from me</CardTitle>
                      <StatList>
                        {profileHighlights.map((item) => (
                          <StatItem key={item.label}>
                            <strong>{item.label}</strong>
                            <span>{item.value}</span>
                          </StatItem>
                        ))}
                      </StatList>
                    </InfoCard>
                  </AboutPanelsGrid>

                </AboutContainer>
              </Container>
            </Section>
 
            {/* Internship Section */}
            <Section id="Internship" $background="#FBFBFD">
              <Container>
                <SectionTitle>Internship</SectionTitle>
                <InternshipSubHeading>
                  CanPlan redesign, accessibility and research
                </InternshipSubHeading>

                <InternshipSubHeading>
                  <span>Introduction</span>
                </InternshipSubHeading>
                <ContentGrid>
                  <InfoCard style={{ position: 'relative' }}>
                    <TimelineTitle>
                      Context and role at CanAssist
                    </TimelineTitle>
                    <Text>
                      CanAssist operates in Victoria, British Columbia, and develops practical technology for people with disabilities.
                      Within that context I worked as an App Design Consultant on CanPlan, a mobile application that helps users complete tasks step by step with visual, auditory and textual support.
                    </Text>
                    <Text>
                      The core problem was that the existing application worked fully offline, which made future expansion more difficult.
                      The interface and branding also needed to become more modern and accessible. My role was to help shape that redesign while also researching what a scalable future could look like.
                    </Text>
                    <PillRow>
                      {['CanPlan', 'Accessibility', 'Rebranding', 'Independence'].map((item) => (
                        <Pill key={item}>{item}</Pill>
                      ))}
                    </PillRow>
                    <AbsoluteBottomRight>
                      <StageLinkChip
                        href="https://www.linkedin.com/company/canassist-at-uvic/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CanAssist LinkedIn <ExternalLink size={16} />
                      </StageLinkChip>
                    </AbsoluteBottomRight>
                  </InfoCard>
                </ContentGrid>

                <InternshipSubHeading style={{ marginTop: '48px' }}>
                  <span>Technical work</span>
                </InternshipSubHeading>
                <InfoCard>
                  <TimelineTitle>
                    Research, design and implementation
                  </TimelineTitle>
                  <Text>
                    I researched how CanPlan could evolve in the future with cloud support, synchronization and administrative capabilities.
                    I compared backend options, documented trade-offs and supported decision-making. No final technical choice was made during my internship.
                  </Text>
                  <StatList>
                    <StatItem>
                      <strong>Research</strong>
                      <span>Comparing Firebase, Supabase and a custom backend based on scalability, flexibility, security and data model fit.</span>
                    </StatItem>
                    <StatItem>
                      <strong>Design</strong>
                      <span>Rebranding and redesign of the mobile app with more focus on accessibility, consistency and cognitive simplicity.</span>
                    </StatItem>
                    <StatItem>
                      <strong>Development</strong>
                      <span>Shaping app updates and feature designs, including branching task flows and improved task-management experiences.</span>
                    </StatItem>
                    <StatItem>
                      <strong>Testing</strong>
                      <span>Checking usability, accessibility and task-structure logic based on supervisor feedback and iterative design refinement.</span>
                    </StatItem>
                  </StatList>
                </InfoCard>

                <Timeline>
                  {stageMilestones.map((item) => (
                    <TimelineItem key={item.title}>
                      <TimelineTitle>{item.title}</TimelineTitle>
                      <TimelineMeta>{item.meta}</TimelineMeta>
                      <Text>{item.text}</Text>
                    </TimelineItem>
                  ))}
                </Timeline>

                <InternshipSubHeading style={{ marginTop: '48px' }}>
                  <span>Outcome</span>
                </InternshipSubHeading>
                <ContentGrid>
                  <InfoCard>
                    <TimelineTitle>
                      What this internship delivered
                    </TimelineTitle>
                    <Text>
                      The internship delivered a more accessible and visually stronger CanPlan experience, together with a clear research base for future technical decisions.
                    </Text>
                    <StatList>
                      <StatItem>
                        <strong>Organization impact</strong>
                        <span>A clearer, future-oriented proposal for CanPlan with strong attention to rebranding and scalability.</span>
                      </StatItem>
                      <StatItem>
                        <strong>Technical growth</strong>
                        <span>Deeper insight into backend architecture, cloud options, access control and turning research into clear decision options.</span>
                      </StatItem>
                      <StatItem>
                        <strong>Personal growth</strong>
                        <span>More independence, stronger technical communication and greater confidence in international collaboration.</span>
                      </StatItem>
                    </StatList>
                  </InfoCard>

                  <InfoCard>
                    <StageGalleryGrid>
                      {stageGallery.map((item) => (
                        <StageFigure key={item.title}>
                          <StageFigureImage src={item.image} alt={item.title} />
                          <StageFigureCaption>
                            <strong>{item.title}</strong>
                            <span>{item.caption}</span>
                          </StageFigureCaption>
                        </StageFigure>
                      ))}
                    </StageGalleryGrid>
                  </InfoCard>
                </ContentGrid>

                <InternshipSubHeading style={{ marginTop: '48px' }}>
                  <span>Documents</span>
                </InternshipSubHeading>
                <InfoCard>
                  <TimelineTitle>
                    Downloadable internship documents
                  </TimelineTitle>
                  <StageDocsGrid>
                    {stageDownloads.map((item) => (
                      <StageDocCard key={item.title} href={item.href} download={item.fileName}>
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                        <DocDownloadRow><Download size={16} /> Download file</DocDownloadRow>
                      </StageDocCard>
                    ))}
                  </StageDocsGrid>
                </InfoCard>
              </Container>
            </Section>

            {/* Projects Section */}
            <Section id="Projects" $background="#F6F7FB">
                <Container>
                <SectionTitle>My Projects</SectionTitle>

                  <ProjectsGrid>
                    {projects.map((project) => (
                      <ProjectCard key={project.title}>
                        <ProjectImage>
                          <img src={project.image} alt={project.title} />
                        </ProjectImage>
                        <ProjectContent>
                          <ProjectTitle>{project.title}</ProjectTitle>
                          <ProjectDescription>{project.shortDescription}</ProjectDescription>
                          <TagsContainer>
                            {project.tags.map((tag) => (
                              <Tag key={tag}>{tag}</Tag>
                            ))}
                          </TagsContainer>
                          <ProjectLinks>
                            <ProjectLink
                              as="button"
                              style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "#666", fontSize: "inherit", fontFamily: "inherit" }}
                              onClick={() => setSelectedProject(project)}
                            >
                              View details
                            </ProjectLink>

                            {project.github && (
                              <ProjectLink
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span>Source / demo</span>
                              </ProjectLink>
                            )}
                          </ProjectLinks>
                        </ProjectContent>
                      </ProjectCard>
                    ))}
                  </ProjectsGrid>
                </Container>
            </Section>

            {/* Footer */}
            <Footer>
              {/* Contact Section */}
              <Container id="Contact">
                <FooterTitle>Contact</FooterTitle>
                <ContactTitle>Feel free to reach out if you have any questions or would like to collaborate!</ContactTitle>

                <ContactGrid>
                  {contactLinks.map((item) => {
                    const isExternal = item.href && item.href.startsWith('http');
                    return (
                      <ContactCard
                        key={item.key || item.title}
                        href={item.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        download={item.download ? 'Resume_Wout_Jansegers.pdf' : undefined}
                      >
                        <strong>{item.title}</strong>
                        <span>{item.text}</span>
                      </ContactCard>
                    );
                  })}
                </ContactGrid>
              </Container>
                <Container>
                <p>© 2026 Wout Jansegers - All rights reserved.</p>
                </Container>
            </Footer>

            {/* Scroll to top button */}
            {scrollPosition > 300 && (
                <ScrollToTopButton onClick={scrollToTop}>
                    <ArrowUp size={20} />
                </ScrollToTopButton>
            )}

            {selectedProject && (
              <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
        </>
    );
}