import React, { useEffect, useRef } from "react";

const FlowyCursor = () => {
    const canvasRef = useRef(null);
    const particles = [];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resizeCanvas);

        const mouse = { x: 0, y: 0 };

        document.addEventListener("mousemove", (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
            createParticles(mouse.x, mouse.y);
        });

        class StarParticle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 4 + 2;
                this.life = Math.random() * 0.5 + 0.5;
                this.opacity = Math.random();
                this.velocityX = Math.cos(Math.PI / 4) * (Math.random() * 2 + 0.5);
                this.velocityY = Math.sin(Math.PI / 4) * (Math.random() * 2 + 0.5);
                this.twinkle = Math.random() * 0.5 + 0.5; 
                this.rotation = Math.random() * Math.PI * 2; // Random rotation
                this.color = getRandomGradient();
            }

            update() {
                this.x += this.velocityX;
                this.y += this.velocityY;
                this.opacity -= 0.02 * this.twinkle;
                this.life -= 0.02;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;

                drawStar(ctx, 0, 0, 5, this.size, this.size / 2);
                ctx.restore();
            }
        }

        function drawStar(ctx, x, y, points, outerRadius, innerRadius) {
            let angle = Math.PI / points;

            ctx.beginPath();
            for (let i = 0; i < 2 * points; i++) {
                let r = i % 2 === 0 ? outerRadius : innerRadius;
                let currX = x + Math.cos(i * angle) * r;
                let currY = y + Math.sin(i * angle) * r;
                ctx.lineTo(currX, currY);
            }
            ctx.closePath();
            ctx.fill();
        }

        function getRandomGradient() {
            const colors = ["#00008B", "#4B0082", "#8A2BE2", "#FF00FF", "#00FFFF"];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        function createParticles(x, y) {
            for (let i = 0; i < 5; i++) {
                particles.push(new StarParticle(x, y));
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle, index) => {
                particle.update();
                particle.draw();
                if (particle.life <= 0) particles.splice(index, 1);
            });
            requestAnimationFrame(animateParticles);
        }

        animateParticles();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 9999
            }}
        />
    );
};

export default FlowyCursor;
