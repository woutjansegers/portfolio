import styled, { keyframes, createGlobalStyle } from "styled-components";
import { X, ChevronLeft, ChevronRight, ExternalLink, ZoomIn } from "lucide-react";
import { useState, useEffect } from "react";

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeInOverlay = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(40px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`;

const zoomIn = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1);    }
`;

// ─── Prevent body scroll when modal is open ───────────────────────────────────

const LockScroll = createGlobalStyle`
  body { overflow: hidden; }
`;

// ─── Main overlay ─────────────────────────────────────────────────────────────

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  animation: ${fadeInOverlay} 0.25s ease-out;
`;

// ─── Modal shell ──────────────────────────────────────────────────────────────

const Modal = styled.div`
  position: relative;
  background: #f9fafb;
  border-radius: 24px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 32px 80px rgba(15, 23, 42, 0.25);
  animation: ${slideUp} 0.3s ease-out;

  scrollbar-width: thin;
  scrollbar-color: rgba(15, 118, 110, 0.35) transparent;
`;

// ─── Close button — absolute, geen ruimte-inname ─────────────────────────────

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  background: white;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #374151;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.1);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #fee2e2;
    color: #dc2626;
    transform: scale(1.08);
  }
`;

// ─── Content area ─────────────────────────────────────────────────────────────

const Content = styled.div`
  padding: 28px 28px 32px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 4px;
  /* leave room for the absolute close button on the right */
  padding-right: 52px;
`;

// ─── Carousel ────────────────────────────────────────────────────────────────

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  margin: 20px 0 10px;
  overflow: hidden;
  border-radius: 16px;
  background: #eef2f3;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  inset: 0;
  opacity: ${(p) => (p.$active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  cursor: zoom-in;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.75);
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
  transition: background 0.2s;

  &:hover { background: rgba(255, 255, 255, 0.95); }

  ${({ $direction }) => $direction === "left"  && `left:  14px;`}
  ${({ $direction }) => $direction === "right" && `right: 14px;`}
`;

const ZoomHint = styled.div`
  position: absolute;
  bottom: 10px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(0,0,0,0.45);
  color: white;
  font-size: 0.75rem;
  padding: 5px 10px;
  border-radius: 999px;
  pointer-events: none;
  z-index: 3;
`;

const DotRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
`;

const Dot = styled.button`
  width: ${(p) => (p.$active ? "20px" : "8px")};
  height: 8px;
  border-radius: 999px;
  background: ${(p) => (p.$active ? "#0f766e" : "rgba(15,118,110,0.25)")};
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  padding: 0;
`;

// ─── Fullscreen lightbox ──────────────────────────────────────────────────────

const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInOverlay} 0.2s ease-out;
  cursor: zoom-out;
`;

const LightboxImage = styled.img`
  max-width: 92vw;
  max-height: 92vh;
  object-fit: contain;
  border-radius: 8px;
  animation: ${zoomIn} 0.25s ease-out;
  cursor: default;
`;

const LightboxClose = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255,255,255,0.15);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: background 0.2s;

  &:hover { background: rgba(255,255,255,0.28); }
`;

const LightboxArrow = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.15);
  border: none;
  border-radius: 50%;
  padding: 12px;
  color: white;
  cursor: pointer;
  z-index: 2;
  transition: background 0.2s;

  &:hover { background: rgba(255,255,255,0.28); }

  ${({ $direction }) => $direction === "left"  && `left:  20px;`}
  ${({ $direction }) => $direction === "right" && `right: 20px;`}
`;

// ─── Description ─────────────────────────────────────────────────────────────

const Description = styled.div`
  display: grid;
  gap: 14px;
  margin-bottom: 24px;
`;

const DescriptionParagraph = styled.p`
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.8;
`;

// ─── Meta cards ──────────────────────────────────────────────────────────────

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 14px;
  margin-bottom: 24px;
`;

const MetaCard = styled.div`
  padding: 16px 18px;
  border-radius: 16px;
  background: white;
  border: 1px solid rgba(17, 24, 39, 0.08);
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.04);
`;

const MetaLabel = styled.p`
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #6b7280;
  margin-bottom: 6px;
`;

const MetaValue = styled.p`
  color: #111827;
  font-weight: 600;
  font-size: 0.95rem;
  line-height: 1.5;
`;

// ─── Link button ─────────────────────────────────────────────────────────────

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #0f766e;
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.25s, transform 0.2s;

  &:hover {
    background-color: #115e59;
    transform: translateY(-2px);
  }
`;

// ─── Component ───────────────────────────────────────────────────────────────

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  // Escape sluit lightbox eerst, daarna modal
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        if (lightbox) setLightbox(false);
        else onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, lightbox]);

  useEffect(() => { setIndex(0); }, [project]);

  if (!project) return null;

  const images = project.images || [];
  const next = () => setIndex((p) => (p + 1) % images.length);
  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);

  const currentMedia = images[index];
  const isVideo = typeof currentMedia === "string" && currentMedia.endsWith(".mp4");

  return (
    <>
      <LockScroll />

      {/* ── Hoofdmodal ── */}
      <Overlay onClick={onClose}>
        <Modal onClick={(e) => e.stopPropagation()}>

          {/* Close button zweeft absoluut, neemt geen ruimte in */}
          <CloseButton onClick={onClose} aria-label="Sluiten">
            <X size={18} />
          </CloseButton>

          <Content>
            <Title>{project.title}</Title>

            {/* Carousel */}
            <CarouselWrapper>
              {images.length > 1 && (
                <>
                  <ArrowButton onClick={prev} $direction="left">
                    <ChevronLeft size={22} />
                  </ArrowButton>
                  <ArrowButton onClick={next} $direction="right">
                    <ChevronRight size={22} />
                  </ArrowButton>
                </>
              )}

              {images.map((media, i) => {
                const vid = typeof media === "string" && media.endsWith(".mp4");
                return (
                  <div
                    key={i}
                    style={{ display: i === index ? "block" : "none", width: "100%", height: "100%" }}
                  >
                    {vid ? (
                      <video
                        controls
                        style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "1rem", backgroundColor: "#000" }}
                      >
                        <source src={media} type="video/mp4" />
                      </video>
                    ) : (
                      <SlideImage
                        src={media}
                        alt={`${project.title} ${i + 1}`}
                        $active={i === index}
                        onClick={() => setLightbox(true)}
                      />
                    )}
                  </div>
                );
              })}

              {/* zoom hint — alleen bij afbeeldingen */}
              {!isVideo && (
                <ZoomHint>
                  <ZoomIn size={12} /> Klik om te vergroten
                </ZoomHint>
              )}
            </CarouselWrapper>

            {/* Dots */}
            {images.length > 1 && (
              <DotRow>
                {images.map((_, i) => (
                  <Dot key={i} $active={i === index} onClick={() => setIndex(i)} />
                ))}
              </DotRow>
            )}

            {/* Description */}
            <Description>
              {project.description.split("\n\n").map((p, i) => (
                <DescriptionParagraph key={i}>{p}</DescriptionParagraph>
              ))}
            </Description>

            {/* Meta */}
            <MetaGrid>
              <MetaCard>
                <MetaLabel>Technologies</MetaLabel>
                <MetaValue>{project.tags.join(" · ")}</MetaValue>
              </MetaCard>
              <MetaCard>
                <MetaLabel>Images</MetaLabel>
                <MetaValue>{images.length} visual references</MetaValue>
              </MetaCard>
              {project.github && (
              <MetaCard>
                <MetaLabel>Link Type</MetaLabel>
                <MetaValue>
                  {project.github.includes("github.com")
                    ? "Source code or technical reference"
                    : "Live demo or external reference"}
                </MetaValue>
              </MetaCard>
              )}
            </MetaGrid>

            {project.github && (
              <LinkButton href={project.github} target="_blank" rel="noopener noreferrer">
                View source / demo <ExternalLink size={18} />
              </LinkButton>
            )}
          </Content>
        </Modal>
      </Overlay>

      {/* ── Lightbox ── */}
      {lightbox && !isVideo && (
        <LightboxOverlay onClick={() => setLightbox(false)}>
          {images.length > 1 && (
            <>
              <LightboxArrow
                $direction="left"
                onClick={(e) => { e.stopPropagation(); prev(); }}
              >
                <ChevronLeft size={28} />
              </LightboxArrow>
              <LightboxArrow
                $direction="right"
                onClick={(e) => { e.stopPropagation(); next(); }}
              >
                <ChevronRight size={28} />
              </LightboxArrow>
            </>
          )}
          <LightboxClose onClick={() => setLightbox(false)}>
            <X size={20} />
          </LightboxClose>
          <LightboxImage
            src={images[index]}
            alt={`${project.title} fullscreen`}
            onClick={(e) => e.stopPropagation()}
          />
        </LightboxOverlay>
      )}
    </>
  );
}