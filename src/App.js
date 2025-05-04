import { useState, useEffect} from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { ArrowUp, Menu, X, ExternalLink} from 'lucide-react';
import wout from './Images/wout1.jpg';
import beersebende from './Images/beersebende.png';
import duffalos from './Images/duffalo.png';
import portfolio from './Images/portfolio.jpg';
import tech from './Images/tech.jpg';
import drone from './Images/drone.jpg';
import AR from './Images/AR.png'
import Pikassa from './Images/pikassa3.png'
import mpioosterlo from './Images/mpioosterlo.jpg'
import {motion} from "framer-motion";
import SimpleParticles from "./components/heroParticles";


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

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #333;
    background-color: #f8f9fa;
    line-height: 1.6;
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
  background-color: ${props => props.$scrolled ? 'white' : 'transparent'};
  box-shadow: ${props => props.$scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: 700;
  color: #4f46e5;
`;

const NavLinks = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    gap: 32px;
  }
`;

const NavLink = styled.a`
  color: ${props => props.$active ? '#4f46e5' : '#666'};
  font-weight: ${props => props.$active ? '500' : '400'};
  transition: color 0.3s ease;

  &:hover {
    color: #4f46e5;
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
  background-color: white;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
    background: linear-gradient(135deg, #ede9fe, #e0f2fe);
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
    color: #4f46e5;
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  color: #666;
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
    background-color: #4f46e5;
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
        background-color: #4338ca;
        box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
        transform: translateY(-2px);
    }
`;

const Section = styled.section`
  padding: 80px 0;
  background-color: ${props => props.$background || 'white'};
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 32px;
  position: relative;
  
  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
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

const ShapeAccent1 = styled.div`
  position: absolute;
  bottom: -24px;
  right: -24px;
  width: 120px;
  height: 120px;
  background-color: #4f46e5;
  border-radius: 8px;
  transform: rotate(6deg);
  opacity: 0.2;
  z-index: 1;
`;

const ShapeAccent2 = styled.div`
  position: absolute;
  top: -24px;
  left: -24px;
  width: 80px;
  height: 80px;
  background-color: #818cf8;
  border-radius: 8px;
  transform: rotate(-12deg);
  opacity: 0.2;
  z-index: 1;
`;

const AboutContent = styled.div`
  width: 100%;
  
  @media (min-width: 768px) {
    width: 50%;
  }
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
    background-color: #818cf8;
  }
`;

const CenteredSectionTitle = styled(SectionTitle)`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 16px;
  
  &::after {
    left: 50%;
    transform: translateX(-50%);
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

const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  max-width: 600px;
  margin: 0 auto 48px auto;
`;

const Text = styled.p`
  color: #666;
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
  background-color: #ede9fe;
  color: #4f46e5;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.875rem;
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
    link.href = '/cvEcht.pdf';
    link.download = 'CV_Wout_Jansegers.pdf';
    link.click();
};

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: #4f46e5;
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
    background-color: #4338ca;
    transform: translateY(-4px);
  }
`;

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeSection, setActiveSection] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);

            const sections = ['Home', 'Over Mij', 'Projecten'];
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

    const projects = [
        {
            title: "AR-rondleiding",
            description: "Internationale studenten rondleiden met behulp van AR.",
            tags: ["Flutter", "Unity", "Vuforia"],
            image: AR,
            github: "https://github.com/Thomas-More-Digital-Innovation/2324-ITF-001-AR-rondleiding",
        },
        {
            title: "Pikassa",
            description: "Een kassasysteem voor mensen met een beperking.",
            tags: ["Laravel", "PHP", "sqlite"],
            image: Pikassa,
            github: "https://github.com/Thomas-More-Digital-Innovation/2425-TM-012-Eenvoudig-kassasysteem-voor-de-Wagenwinkel",
        },
        {
            title: "Portfolio",
            description: "Een responsive portfolio gebouwd met React en styled-components.",
            tags: ["React", "styled-components"],
            image: portfolio,
            github: "https://portfolio.woutjansegers.pages.dev/",
        },
        {
            title: "Aerolytics",
            description: "Een drone-bedrijf ondersteunen met hun nieuwste project",
            tags: ["AWS", "Python", "Raspberry-pi"],
            image: drone,
            github: "https://www.aerolytics.be/",
        },
        {
            title: "De Beerse Bende",
            description: "Een theater helpen met het maken van een website.",
            tags: ["Laravel", "PHP", "sqlite", "Figma"],
            image: beersebende,
            github: "https://debeersebende.bramserre.be/",
        },
        {
            title: "De duffalo's prototype",
            description: "Een voetbalploeg helpen met het maken van een website.",
            tags: ["Figma", "StarUML"],
            image: duffalos,
            github: "https://www.figma.com/design/oRphuh5sZdtGpIro8JO4PY/SVW3---Prototyping---De-Duffalo-s?node-id=296-553&t=6xCZsPqWRnBR1ywU-1",
        },
        {
            title: "MPI Oosterlo",
            description: "Jobcoaches ondersteunen met behulp van een opvolgingssysteem voor clienten.",
            tags: ["Laravel", "PHP", "sqlite"],
            image: mpioosterlo,
            github: "https://github.com/Thomas-More-Digital-Innovation/2425-MPI-002-jobcoachOndersteuning",
        },
        {
            title: "Techtalks",
            description: "Mijn kennis verbreden met nieuwe technologieën.",
            tags: ["Laravel", "Flutter", "Security", "React"],
            image: tech,
            github: "https://1drv.ms/f/c/8a4afb5db3b89bc8/Eq6XXS1tlpJLmmGgbeVmzWwBud4mQnJDVSaWN9o9nHju9A?e=QHNanU",
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
                            {['Home', 'Over Mij', 'Projecten'].map((item) => (
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
                                {['Home', 'Over Mij', 'Projecten'].map((item) => (
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
                            <PrimaryButton onClick={() => scrollToSection('Projecten')}>
                                Bekijk mijn werk
                            </PrimaryButton>
                            <PrimaryButton onClick={() => scrollToSection('Over Mij')}>
                                Over Mij
                            </PrimaryButton>
                        </ButtonContainer>
                    </HeroContent>
                </Container>
            </HeroSection>

            {/* About Section */}
            <Section id="Over Mij">
                <Container>
                    <AboutContainer>
                        <ImageContainer>
                            <ProfileImage>
                                <img src={wout} alt="Profile" />
                            </ProfileImage>
                            <ShapeAccent1 />
                            <ShapeAccent2 />
                        </ImageContainer>

                        <AboutContent>
                            <SectionTitle>Over Mij</SectionTitle>

                            <Text>
                                Ik ben een enthousiaste digital innovation student met een passie voor praktijkgericht werken.
                                Ik vind het geweldig om nieuwe technologieën te ontdekken en toe te passen in echte projecten.
                            </Text>

                            <Text>
                                Mijn interesse ligt vooral bij front-end development, al probeer ik van alles wat mee te pikken. IT en innovatie boeien mij enorm, en ik blijf mezelf voortdurend ontwikkelen om steeds betere oplossingen te kunnen maken.
                                In mijn vrije tijd speel ik volleybal, waar ik niet alleen fysiek bezig ben, maar ook leer samenwerken en communiceren, iets wat ook in IT-projecten van pas komt. </Text>
                            <SkillsTitle>Naar de Toekomst</SkillsTitle>

                            <Text>
                               Ik wil blijven bijleren, experimenteren met nieuwe technologieën en mijn vaardigheden verder aanscherpen. Ik kijk dan ook enorm uit naar mijn stage volgend jaar, een nieuwe kans om mijn kennis toe te passen en verder uit te breiden.
                            </Text>


                            <SkillsContainer>
                                <SkillsTitle>Vaardigheden</SkillsTitle>
                                <SkillsTags>
                                    {['React', 'JavaScript', 'Laravel', 'PHP', 'Flutter', 'Figma'].map((skill) => (
                                        <SkillTag key={skill}>
                                            {skill}
                                        </SkillTag>
                                    ))}
                                </SkillsTags>
                            </SkillsContainer>

                            <PrimaryButton onClick={handleDownload}>
                                Download CV <ExternalLink size={16} />
                            </PrimaryButton>
                        </AboutContent>
                    </AboutContainer>
                </Container>
            </Section>

            {/* Projects Section */}
            <Section id="Projecten" $background="#f8f9fa">
                <Container>
                    <CenteredSectionTitle>Mijn Projecten</CenteredSectionTitle>
                    <SectionSubtitle>
                        Elk project representeert een andere uitdaging en oplossing.
                    </SectionSubtitle>

                    <ProjectsGrid>
                        {projects.map((project) => (
                            <ProjectCard key={project.title}>
                                <ProjectImage>
                                    <img src={project.image} alt={project.title} />
                                </ProjectImage>
                                <ProjectContent>
                                    <ProjectTitle>{project.title}</ProjectTitle>
                                    <ProjectDescription>{project.description}</ProjectDescription>
                                    <TagsContainer>
                                        {project.tags.map((tag) => (
                                            <Tag key={tag}>{tag}</Tag>
                                        ))}
                                    </TagsContainer>
                                    <ProjectLinks>
                                        <ProjectLink
                                            as="a"
                                            href={`/project/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                                        >
                                            View Project
                                        </ProjectLink>

                                        <ProjectLink
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>Link Code</span>
                                        </ProjectLink>
                                    </ProjectLinks>
                                </ProjectContent>
                            </ProjectCard>
                        ))}
                    </ProjectsGrid>
                </Container>
            </Section>

            {/* Footer */}
            <Footer>
                <Container>
                    <p>Portfolio gemaakt door Wout Jansegers</p>
                </Container>
            </Footer>

            {/* Scroll to top button */}
            {scrollPosition > 300 && (
                <ScrollToTopButton onClick={scrollToTop}>
                    <ArrowUp size={20} />
                </ScrollToTopButton>
            )}
        </>
    );
}