// 1. First, completely remove the current ParticlesComponent and all related imports

// 2. Create this new file: SimpleParticles.jsx
import React, { useEffect, useRef } from 'react';

const SimpleParticles = () => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;

        // Resize function to handle window changes
        const resize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };

        // Initialize particles
        const initParticles = () => {
            particlesRef.current = [];
            const particleCount = 150;

            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 2 + 1,
                    vx: Math.random() * 0.5 - 0.25,
                    vy: Math.random() * 0.5 - 0.25,
                    color: '#4F46E5'
                });
            }
        };

        // Function to draw a single particle
        const drawParticle = (particle) => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        };

        // Function to draw a line between particles if close enough
        const drawConnection = (p1, p2) => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(79, 70, 229, ${0.3 * (1 - distance / 150)})`; // #4F46E5 with opacity
                ctx.lineWidth = 1;
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        };

        // Animation function
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update and draw particles
            particlesRef.current.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Bounce off edges
                if (particle.x < 0 || particle.x > width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > height) particle.vy *= -1;

                drawParticle(particle);
            });

            // Draw connections
            for (let i = 0; i < particlesRef.current.length; i++) {
                for (let j = i + 1; j < particlesRef.current.length; j++) {
                    drawConnection(particlesRef.current[i], particlesRef.current[j]);
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        // Initialize
        resize();
        window.addEventListener('resize', resize);
        initParticles();
        animate();

        // Clean up
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default SimpleParticles;