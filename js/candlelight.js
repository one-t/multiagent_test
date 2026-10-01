/**
 * Candlelight and Atmospheric Canvas System
 * Creates living candle flame illumination, dynamic flickering light halos,
 * and floating dust across the dark background.
 */

export class CandlelightSystem {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // Candles at table corners
    this.candles = [
      { x: 120, y: 140, baseRadius: 280, flicker: 1, targetFlicker: 1, color: "rgba(255, 170, 60, " },
      { x: this.width - 120, y: 140, baseRadius: 280, flicker: 1, targetFlicker: 1, color: "rgba(255, 160, 50, " },
      { x: this.width / 2, y: this.height - 80, baseRadius: 320, flicker: 1, targetFlicker: 1, color: "rgba(255, 190, 80, " }
    ];

    // Floating embers / dust motes
    this.particles = [];
    for (let i = 0; i < 45; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.15,
        alpha: Math.random() * 0.5 + 0.2,
        maxAlpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }

    this.mouse = { x: this.width / 2, y: this.height / 2, active: false };
    this.time = 0;
    this.isRunning = false;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.active = true;
    });

    this.start();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    // Recalibrate candle positions
    if (this.candles && this.candles.length >= 3) {
      this.candles[0].x = Math.min(140, this.width * 0.12);
      this.candles[0].y = 120;
      this.candles[1].x = Math.max(this.width - 140, this.width * 0.88);
      this.candles[1].y = 120;
      this.candles[2].x = this.width / 2;
      this.candles[2].y = this.height - 70;
    }
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.render();
    }
  }

  stop() {
    this.isRunning = false;
  }

  render() {
    if (!this.isRunning) return;
    this.time += 0.016;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Update & draw candlelight glows
    this.candles.forEach((candle, idx) => {
      // Natural organic candle flame flicker algorithm
      if (Math.random() > 0.88) {
        candle.targetFlicker = 0.88 + Math.random() * 0.26;
      }
      candle.flicker += (candle.targetFlicker - candle.flicker) * 0.12;

      // Compound sine waves for subtle oscillation
      const oscillation = Math.sin(this.time * 2.5 + idx * 2) * 0.04 + Math.cos(this.time * 4.8 + idx) * 0.02;
      const currentRadius = candle.baseRadius * (candle.flicker + oscillation);

      const grad = this.ctx.createRadialGradient(
        candle.x, candle.y, 10,
        candle.x, candle.y, Math.max(50, currentRadius)
      );

      grad.addColorStop(0, `${candle.color} 0.22)`);
      grad.addColorStop(0.35, `${candle.color} 0.08)`);
      grad.addColorStop(0.7, `${candle.color} 0.025)`);
      grad.addColorStop(1, `${candle.color} 0)`);

      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(candle.x, candle.y, currentRadius, 0, Math.PI * 2);
      this.ctx.fill();
    });

    // Gentle cursor candle reflection if mouse active
    if (this.mouse.active) {
      const mouseGrad = this.ctx.createRadialGradient(
        this.mouse.x, this.mouse.y, 5,
        this.mouse.x, this.mouse.y, 180
      );
      mouseGrad.addColorStop(0, "rgba(255, 200, 110, 0.07)");
      mouseGrad.addColorStop(0.5, "rgba(255, 170, 70, 0.02)");
      mouseGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      this.ctx.fillStyle = mouseGrad;
      this.ctx.beginPath();
      this.ctx.arc(this.mouse.x, this.mouse.y, 180, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // Draw floating embers & golden dust
    this.ctx.save();
    this.particles.forEach(p => {
      p.x += p.vx + Math.sin(this.time + p.y * 0.01) * 0.2;
      p.y += p.vy;
      p.alpha = (Math.sin(this.time * p.pulseSpeed * 20) * 0.5 + 0.5) * p.maxAlpha;

      if (p.y < -10) {
        p.y = this.height + 10;
        p.x = Math.random() * this.width;
      }
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;

      this.ctx.fillStyle = `rgba(255, 215, 120, ${p.alpha})`;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();
    });
    this.ctx.restore();

    requestAnimationFrame(() => this.render());
  }
}
