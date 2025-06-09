import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import portfolio from "../Images/portfolio.jpg";
import portfolio1 from "../Images/portfolio1.jpg";
import portfolio2 from "../Images/portfolio2.jpg";
import AR from "../Images/AR.png";
import AR1 from "../Images/AR1.jpg";
import AR2 from "../Images/AR2.jpg";
import AR3 from "../Images/AR3.jpg";
import Pikassa from "../Images/pikassa.png";
import Pikassa1 from "../Images/pikassa1.png";
import Pikassa2 from "../Images/pikassa2.png";
import Pikassa3 from "../Images/pikassa3.png";
import Pikassa4 from "../Images/pikassa4.png";
import beersebende from "../Images/beersebende.png";
import beersebende1 from "../Images/beersebende1.jpg";
import beersebende2 from "../Images/beersebende2.jpg";
import beersebende3 from "../Images/beersebende3.jpg";
import beersebende4 from "../Images/beersebende4.jpg";
import drone from "../Images/drone.jpg";
import drone1 from "../Images/drone1.mp4";
import duffalos from "../Images/duffalo.png";
import duffalo1 from "../Images/duffalo1.jpg";
import duffalo2 from "../Images/duffalo2.jpg";
import duffalo3 from "../Images/duffalo3.jpg";
import tech1 from "../Images/tech1.jpg";
import tech2 from "../Images/tech2.jpg";
import tech3 from "../Images/tech3.jpg";
import tech4 from "../Images/tech4.jpg";
import mpioosterlo from "../Images/mpioosterlo.jpg";
import mpioosterlo1 from "../Images/mpioosterlo1.jpg";
import mpioosterlo2 from "../Images/mpioosterlo2.jpg";

const projects = [
  {
    id: "portfolio",
    title: "Portfolio",
    description: "Het portfolio-project had als doel om een persoonlijke website te bouwen waarin al mijn schoolprojecten overzichtelijk worden weergegeven. Het is dus een overkoepelend project waarin ik niet enkel toon wat ik heb gedaan, maar ook wat ik geleerd heb doorheen het jaar. Dit portfolio moest visueel aantrekkelijk, technisch goed onderbouwd en volledig responsive zijn, zodat het op elk toestel goed werkt, van desktop tot smartphone. \n\nIk bouwde de website volledig zelf met React en maakte gebruik van styled-components om het design modulair en consistent te houden. De site bevat een overzicht van al mijn projecten, inclusief beschrijvingen, gebruikte technologieën en eventuele afbeeldingen. Ook zorgde ik voor een vlotte navigatie, goede structuur en aandacht voor toegankelijkheid, zodat de site niet alleen mooi oogt maar ook gebruiksvriendelijk is. \n\nIn dit project leerde ik vooral hoe je een volledig project van A tot Z zelfstandig opzet, met zowel aandacht voor technische opbouw als voor presentatiewaarde. Ik heb mijn kennis van React verder verdiept en geleerd hoe je met styled-components efficiënt stijlen beheert in een groter geheel. Bovendien kreeg ik meer inzicht in hoe je jezelf professioneel presenteert aan de buitenwereld, een belangrijke stap richting stage of werkveld.",
    tags: ["React", "styled-components"],
    images: [portfolio, portfolio1, portfolio2],
    github: "https://portfolio-woutjansegers.netlify.app/",
  },
  {
    id: "pikassa",
    title: "Pikassa",
    description: "Voor dit project werkten we in opdracht van De Wagenwinkel, een winkel op de schoolcampus waar jongeren uit het BuSO (Buitengewoon Secundair Onderwijs) zelfgemaakte of verzamelde producten kunnen verkopen. De centrale vraag was om een kassasysteem te ontwikkelen dat eenvoudig en veilig te gebruiken is door kinderen met een beperking. Het moest foutbestendig, intuïtief en visueel helder zijn, zodat ze zelfstandig konden afrekenen en zich zeker voelden in hun rol als verkoper. \n\nWe ontwikkelden een volledig werkend kassasysteem als webapplicatie, gebouwd met Laravel, PHP en SQLite. De interface werd bewust heel eenvoudig gehouden: duidelijke knoppen, weinig tekst, en een stapsgewijs proces voor het afrekenen. Mijn persoonlijke bijdrage zat vooral in het technisch realiseren van een functie waarmee er automatisch een ticketje werd afgedrukt na elke verkoop. Op dit ticket stonden de verkochte items, waardoor klanten iets tastbaars meekregen, iets wat door de begeleiders en leerlingen als heel positief werd ervaren. Het gaf het hele verkoopsproces een realistischer, professioneel karakter en zorgde voor extra betrokkenheid van de kinderen. \n\nTijdens dit project heb ik veel bijgeleerd over gebruiksvriendelijkheid ontwerpen voor een specifieke doelgroep, wat heel anders is dan voor een doorsnee gebruiker. Ik leerde ook hoe belangrijk visuele eenvoud en betrouwbaarheid zijn in interfaces. Daarnaast heb ik mijn kennis van Laravel en printfunctionaliteit binnen webtoepassingen aanzienlijk verdiept, vooral bij het correct formatteren en automatisch aansturen van het printproces van kassatickets.",
    tags: ["Laravel", "PHP", "sqlite"],
    images: [Pikassa3, Pikassa2, Pikassa4, Pikassa1, Pikassa],
    github: "https://github.com/Thomas-More-Digital-Innovation/2425-TM-012-Eenvoudig-kassasysteem-voor-de-Wagenwinkel",
  },
  {
    id: "mpi-oosterlo",
    title: "MPI Oosterlo",
    description: "Voor dit project werkten we in opdracht van MPI-Oosterlo, een voorziening die ondersteuning biedt aan mensen met een beperking. Binnen deze organisatie spelen jobcoaches een belangrijke rol in het begeleiden van cliënten naar werk of dagbesteding. Het doel van ons project was om deze jobcoaches te ondersteunen in hun dagelijkse werking door het ontwikkelen van een opvolgsysteem voor cliënten. De bestaande manier van opvolgen was omslachtig en foutgevoelig, dus er was nood aan een efficiënter, digitaler systeem. \n\nWe ontwikkelden zowel een webapplicatie als een mobiele app, zodat de jobcoaches hun gegevens altijd en overal konden raadplegen of aanpassen, zowel op kantoor als onderweg of op locatie. Ik werkte voornamelijk mee aan de webapplicatie, waarbij ik zorgde dat de kernfunctionaliteit stabiel en gebruiksvriendelijk was. Het systeem maakt het mogelijk om informatie per cliënt op te slaan, opvolgacties te plannen en gestructureerd te rapporteren. Zo werd hun werkproces niet alleen vereenvoudigd, maar ook consistenter. \n\nInhoudelijk was dit project voor mij vooral een kans om mijn bestaande Laravel-kennis opnieuw toe te passen. Hoewel ik weinig volledig nieuwe technieken leerde, was het waardevol om Laravel in een realistisch, groter projectcontext te gebruiken. Het was dus vooral een herhaling van bestaande kennis, eerder dan een kennismaking met iets nieuws.",
    tags: ["Laravel", "PHP", "sqlite"],
    images: [mpioosterlo, mpioosterlo1, mpioosterlo2],
    github: "https://github.com/Thomas-More-Digital-Innovation/2425-MPI-002-jobcoachOndersteuning",
  },
  {
    id: "ar-rondleiding",
    title: "ExploreMore",
    description: "Voor dit project werkten we in opdracht van Thomas More, met als doel om een innovatieve manier te ontwikkelen om internationale studenten rond te leiden op de campus. De traditionele fysieke rondleidingen zijn niet altijd haalbaar of efficiënt, zeker niet voor studenten die van ver komen of nog twijfelen om zich in te schrijven. Daarom wilden we onderzoeken of Augmented Reality (AR) een waardevolle aanvulling kon zijn om de campus op een aantrekkelijke en interactieve manier te leren kennen. \n\nWe ontwikkelden een proof of concept waarin we met behulp van Flutter, Unity en Vuforia een AR-ervaring opbouwden. Gebruikers kunnen met hun smartphone specifieke markers op de campus scannen, waarna digitale informatie, visuals of virtuele gidsen verschijnen die uitleg geven over de locatie. Het project is ontworpen om op school zelf gebruikt te worden, met als doel om een eerste indruk te geven van hoe een volwaardige AR-rondleiding eruit zou kunnen zien. Dit concept dient ook als onderbouwd voorstel voor mogelijke toekomstige investering of financiering om het idee verder uit te werken tot een volwaardig product. \n\nTijdens dit project heb ik veel bijgeleerd over AR-technologieën, vooral door het combineren van Flutter voor de mobiele interface en Unity met Vuforia voor de AR-functies. Het was een waardevolle ervaring om verschillende technologieën samen te brengen tot één werkend geheel. Daarnaast kreeg ik meer inzicht in het ontwikkelen van een prototype als communicatiemiddel naar stakeholders toe niet alleen om te tonen wat technisch mogelijk is, maar ook om draagvlak en eventueel budget te verkrijgen voor verdere ontwikkeling.",
    tags: ["Flutter", "Unity", "Vuforia"],
    images: [AR3,AR, AR1, AR2],
    github: "https://github.com/Thomas-More-Digital-Innovation/2324-ITF-001-AR-rondleiding",
  },
  {
    id: "de-beerse-bende",
    title: "De Beerse Bende",
    description: "Dit project werd gerealiseerd in opdracht van één van de coaches binnen onze opleiding. Voor haar theatergroep, De Beerse Bende, was er nood aan een digitale oplossing om de organisatie van voorstellingen, ticketverkoop en vrijwilligerswerking te vereenvoudigen. Het theater draait grotendeels op vrijwilligers, dus het systeem moest intuïtief zijn en verschillende soorten gebruikers ondersteunen: van toeschouwers tot acteurs, regisseurs en helpers. \n\nWe ontwikkelden een uitgebreide webapplicatie waarin meerdere functionaliteiten samenkomen. Er werd een systeem gebouwd voor het beheer van toneelstukken, met daarbij de mogelijkheid om acteurs, regisseurs en medewerkers toe te wijzen. Daarnaast voorzagen we een vrijwilligersplatform, waar mensen zich konden inschrijven op shifts om te helpen bij voorstellingen. Mijn belangrijkste bijdrage zat in het realiseren van het ticketverkoopsysteem: gebruikers kunnen voor een specifieke voorstelling een stoel selecteren en een ticket aankopen. Ook het vrijwilligersbeheer is door mij uitgewerkt, zodat de planning altijd vlot verloopt en er voldoende hulp is bij elke voorstelling. \n\nDoor dit project heb ik verder gewerkt met Laravel, PHP en SQLite, en ook gebruik gemaakt van Figma voor het ontwerpen van de interface. Ik leerde hoe je verschillende gebruikersrollen combineert binnen één systeem, en hoe belangrijk het is om de gebruikerservaring vlot te houden, zeker bij taken zoals tickets kopen of shifts kiezen. Dit project gaf me een goed inzicht in hoe je een systeem bouwt dat écht gebruikt zal worden in het veld.",
    tags: ["Laravel", "PHP", "sqlite", "Figma"],
    images: [beersebende, beersebende1, beersebende2, beersebende3, beersebende4],
    github: "https://debeersebende.bramserre.be/",
  },
  {
    id: "de-duffalo's-prototype",
    title: "De duffalo's prototype",
    description: "Dit project werd uitgevoerd in opdracht van één van de coaches binnen onze opleiding, die zelf betrokken is bij een voetbalploeg genaamd De Duffalo's. De coach wilde een digitale oplossing laten ontwikkelen om het beheer van de ploeg te stroomlijnen: van spelersselectie tot wedstrijdplanning en andere administratieve taken. Het ging hier om een analyse- en prototypefase, met als doel een stevige basis te leggen voor een latere, volwaardige applicatie. \n\nIn dit project lag de focus op het uitvoeren van een grondige analyse en het uitwerken van een visueel en functioneel prototype. We zorgden ervoor dat alle vereiste functionaliteiten goed in kaart werden gebracht, zodat het toekomstige systeem precies zou kunnen doen wat nodig is: teambeheer, planning, selecties per wedstrijd, enzovoort. Zelf werkte ik vooral mee aan het onderdeel planning en de selectie van het team per match, iets wat in sportbeheer vaak foutgevoelig en tijdrovend is. Voor de uitwerking maakten we gebruik van Figma voor het ontwerp en StarUML voor de modellering van de softwarearchitectuur. \n\nHoewel dit project nog geen technische implementatie omvatte, heb ik veel bijgeleerd over analytisch werken en structureren. Door de toepassing van tools zoals Figma en StarUML kreeg ik een beter inzicht in hoe je van een idee tot een solide ontwerp komt, en hoe belangrijk een goede voorbereiding is voor het slagen van een latere ontwikkeling. Dit project gaf me ook meer ervaring in samenwerken rond concept en structuur, wat essentieel is voor grotere projecten.",
    tags: ["Figma", "StarUML"],
    images: [duffalos, duffalo1, duffalo2, duffalo3],
    github: "https://www.figma.com/design/oRphuh5sZdtGpIro8JO4PY/SVW3---Prototyping---De-Duffalo-s?node-id=296-553&t=6xCZsPqWRnBR1ywU-1",
  },
  {
    id: "aerolytics",
    title: "Aerolytics",
    description: "Voor dit project werkten we samen met het bedrijf Aerolytics, dat gespecialiseerd is in drones. Hun nieuwste project bestond uit een drone die autonoom rondvliegt in een serre en voortdurend foto’s neemt om vroegtijdig bacteriën op te sporen op planten. Deze beelden moeten vervolgens geanalyseerd worden, wat alleen mogelijk is als ze op een centrale plek beschikbaar zijn. Aan ons werd gevraagd om een robuuste oplossing te ontwikkelen voor het uploaden van die beelden naar een online cloud-opslag, ondanks het feit dat er in sommige delen van de serre geen stabiele wifi-verbinding aanwezig is. \n\nOnze taak was om te onderzoeken en implementeren hoe we die beelden betrouwbaar naar de cloud kunnen sturen, zelfs met connectiviteitsproblemen. We werkten met Raspberry Pi’s als onderdeel van het dronesysteem, en gebruikten Python om de beelden te verwerken en op te slaan. Uiteindelijk maakten we gebruik van AWS als cloudplatform. Zelf heb ik me vooral gefocust op het verzenden van de afbeeldingen naar de cloud-opslag. Daarbij hield ik rekening met foutafhandeling en situaties waarbij de connectie tijdelijk wegvalt, zodat de data alsnog veilig en volledig geüpload werd zodra dat weer mogelijk was. \n\nDoor dit project heb ik veel bijgeleerd over cloudopslag en netwerken, zeker in omgevingen met beperkte of instabiele connectiviteit. Ik leerde hoe je omgaat met offline scenarios, retries implementeert en efficiënt gebruikmaakt van opslag- en synchronisatiemogelijkheden. Ook mijn kennis is hierdoor uitgebreid, en ik kreeg een realistischer beeld van hoe uitdagend het kan zijn om technologie te laten werken in een echte, fysiek complexe omgeving.",
    tags: ["AWS", "Python", "Raspberry-pi"],
    images: [drone, drone1],
    github: "https://www.aerolytics.be/",
  },
  {
    id: "techtalks",
    title: "Techtalks",
    description: "Techtalks was geen traditioneel project met een eindproduct, maar eerder een persoonlijk leertraject dat doorheen het schooljaar liep. Vanuit de opleiding kregen we verschillende technologische onderwerpen aangereikt, met als doel om onszelf te verdiepen in deze thema’s en onze kennis te verbreden buiten de gewone lessen. Na de verkenningsfase moesten we telkens een korte presentatie of verdediging geven aan een coach, om aan te tonen dat we het onderwerp niet alleen begrepen, maar ook praktisch konden toepassen. \n\nTijdens dit traject werkte ik rond verschillende technologieën en concepten, waaronder Laravel, Flutter, React en Security. Bij elk onderwerp verdiepte ik mij in zowel de theorie als de praktijk: hoe werkt het, waar wordt het voor gebruikt, en hoe zou ik het zelf kunnen toepassen in een project? Ik maakte kleine demo’s, documenteerde mijn bevindingen en ging het gesprek aan met een coach om te tonen dat ik het begreep. Deze aanpak zorgde ervoor dat ik breder onderlegd raakte, en niet enkel vertrouwde op de technologieën waarmee ik al bekend was. \n\nDe Techtalks gaven me vooral de kans om zelfstandig te leren en nieuwe technologieën te verkennen. Ik merkte dat het me hielp om vlotter nieuwe dingen op te pikken, kritisch te denken over hun toepassing, en sneller tot de kern van een technologie te komen. Daarnaast was het een goede oefening in mondeling verdedigen van technische kennis, iets wat zeker van pas komt in teamvergaderingen, sollicitaties of klantgesprekken.",
    tags: ["Laravel", "Flutter", "Security", "React"],
    images: [tech1, tech2, tech3, tech4],
    github: "https://1drv.ms/f/c/8a4afb5db3b89bc8/Eq6XXS1tlpJLmmGgbeVmzWwBud4mQnJDVSaWN9o9nHju9A?e=QHNanU",
  },
];

// STYLED COMPONENTS

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  padding: 80px 0;
  font-family: 'Inter', sans-serif;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  background: none;
  border: none;
  color: #4f46e5;
  font-weight: 500;
  margin-bottom: 24px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #111827;
`;

const Description = styled.p`
  color: #4b5563;
  margin: 16px 0 24px 0;
  font-size: 1.25rem;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  margin: 40px 0;
  overflow: hidden;
  border-radius: 16px;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.6s ease-in-out;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.6);
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
  transition: background 0.2s;

  &:hover {
    background: rgba(255,255,255,0.9);
  }

  ${({ direction }) => direction === "left" && `left: 20px;`}
  ${({ direction }) => direction === "right" && `right: 20px;`}
`;

const Tags = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const Tag = styled.span`
  background-color: #ede9fe;
  color: #4f46e5;
  padding: 12px 20px;
  border-radius: 50px;
  font-size: 1.2rem;
`;

const Links = styled.div`
  display: flex;
  gap: 16px;
`;

const LinkButton = styled.a`
  background-color: #4f46e5;
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    background-color: #4338ca;
  }
`;

// COMPONENT

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [index, setIndex] = useState(0);

  if (!project) return <Wrapper>Project niet gevonden</Wrapper>;

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
      <Wrapper>
        <Content>
          <BackButton onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
            Terug
          </BackButton>

          <Title>{project.title}</Title>
          <Description>{project.description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
          ))}
          </Description>

          <Tags>
            {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>

          <Links>
            <LinkButton href={project.github} target="_blank">
              Link code
            </LinkButton>
          </Links>

          <CarouselWrapper>
            {project.images.length > 1 && (
                <>
                  <ArrowButton onClick={prevImage} direction="left">
                    <ChevronLeft size={24} />
                  </ArrowButton>
                  <ArrowButton onClick={nextImage} direction="right">
                    <ChevronRight size={24} />
                  </ArrowButton>
                </>
            )}

            {project.images.map((media, i) => {
              const isVideo = typeof media === 'string' && media.endsWith('.mp4');

              return (
                  <div
                      key={i}
                      style={{
                        display: i === index ? 'block' : 'none',
                        width: '100%',
                        height: '100%',
                      }}
                  >
                    {isVideo ? (
                        <video
                            controls
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain', // <-- zorgt dat video volledig zichtbaar blijft
                              borderRadius: '1rem',
                              backgroundColor: '#000', // zodat je geen witte achtergrond ziet bij 'contain'
                            }}
                        >
                          <source src={media} type="video/mp4" />
                          Je browser ondersteunt dit videoformaat niet.
                        </video>
                    ) : (
                        <SlideImage
                            src={media}
                            alt={`${project.title} afbeelding ${i + 1}`}
                            active={i === index}
                        />
                    )}
                  </div>
              );
            })}
          </CarouselWrapper>
        </Content>
      </Wrapper>
  );
}
