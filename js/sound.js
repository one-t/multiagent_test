/**
 * Web Audio API Sound Synthesizer for Tarot App
 * Synthesizes card swooshes, card flips, ethereal bells, and ambient candle crackle
 * entirely via the Web Audio API with zero external asset dependencies.
 */

class SoundSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isAmbiancePlaying = false;
    this.ambianceNodes = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (muted && this.isAmbiancePlaying) {
      this.stopAmbiance();
    }
  }

  /**
   * Sound of card sliding or dealing onto velvet table
   */
  playSwoosh() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.18;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, t);
      filter.frequency.exponentialRampToValueAtTime(300, t + 0.15);
      filter.Q.setValueAtTime(1.5, t);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(t);
    } catch (e) {
      console.warn("Audio swoosh error:", e);
    }
  }

  /**
   * Sound of a crisp 3D card turn / flip
   */
  playFlip() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      // High snap
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(280, t);
      osc.frequency.exponentialRampToValueAtTime(90, t + 0.12);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.13);

      // Subtle paper friction noise
      const bufferSize = this.ctx.sampleRate * 0.08;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.3;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const nGain = this.ctx.createGain();
      nGain.gain.setValueAtTime(0.12, t);
      nGain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      noise.connect(nGain);
      nGain.connect(this.ctx.destination);
      noise.start(t);
    } catch (e) {
      console.warn("Audio flip error:", e);
    }
  }

  /**
   * Mystical singing chime for reading completion / card reveal
   */
  playChime(freq = 528) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const harmonics = [1, 2.02, 3.01, 4.04];
      const gains = [0.15, 0.08, 0.04, 0.02];

      harmonics.forEach((h, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * h, t);

        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.linearRampToValueAtTime(gains[idx], t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + 1.85);
      });
    } catch (e) {
      console.warn("Audio chime error:", e);
    }
  }

  /**
   * Candle ambiance: gentle fire crackle & low mystical drone
   */
  toggleAmbiance() {
    if (this.isAmbiancePlaying) {
      this.stopAmbiance();
      return false;
    } else {
      this.startAmbiance();
      return true;
    }
  }

  startAmbiance() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      // 1. Ambient low mystical drone (om / bowl resonance)
      const droneOsc1 = this.ctx.createOscillator();
      const droneOsc2 = this.ctx.createOscillator();
      const droneGain = this.ctx.createGain();

      droneOsc1.type = 'sine';
      droneOsc1.frequency.setValueAtTime(108, this.ctx.currentTime); // Sacred 108Hz
      droneOsc2.type = 'sine';
      droneOsc2.frequency.setValueAtTime(162, this.ctx.currentTime); // Perfect fifth 162Hz

      droneGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      droneGain.gain.linearRampToValueAtTime(0.035, this.ctx.currentTime + 2.0);

      droneOsc1.connect(droneGain);
      droneOsc2.connect(droneGain);

      // 2. Flame flicker noise (gentle crackle)
      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        // Random sporadic crackles
        data[i] = (Math.random() > 0.995 ? (Math.random() * 2 - 1) * 0.8 : (Math.random() * 2 - 1) * 0.04);
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const fireFilter = this.ctx.createBiquadFilter();
      fireFilter.type = 'lowpass';
      fireFilter.frequency.setValueAtTime(1200, this.ctx.currentTime);

      const fireGain = this.ctx.createGain();
      fireGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      fireGain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + 1.5);

      noise.connect(fireFilter);
      fireFilter.connect(fireGain);

      // Connect to destination
      droneGain.connect(this.ctx.destination);
      fireGain.connect(this.ctx.destination);

      droneOsc1.start();
      droneOsc2.start();
      noise.start();

      this.ambianceNodes = { droneOsc1, droneOsc2, droneGain, noise, fireGain };
      this.isAmbiancePlaying = true;
    } catch (e) {
      console.warn("Could not start ambiance:", e);
    }
  }

  stopAmbiance() {
    if (!this.ambianceNodes || !this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      this.ambianceNodes.droneGain.gain.linearRampToValueAtTime(0.0001, t + 0.8);
      this.ambianceNodes.fireGain.gain.linearRampToValueAtTime(0.0001, t + 0.8);

      setTimeout(() => {
        try {
          this.ambianceNodes.droneOsc1.stop();
          this.ambianceNodes.droneOsc2.stop();
          this.ambianceNodes.noise.stop();
          this.ambianceNodes = null;
          this.isAmbiancePlaying = false;
        } catch (err) {}
      }, 900);
    } catch (e) {
      console.warn("Error stopping ambiance:", e);
    }
  }
}

export const sound = new SoundSystem();
