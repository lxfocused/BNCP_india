let audioCtx: AudioContext | null = null;

export function playSynthesizedClick() {
  try {
    // Initialize or resume AudioContext inside user interaction trigger
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = 'sine';
    
    // Exact Sound Envelope specified:
    // High-frequency oscillator (1200Hz) exponentially ramping down to 100Hz over 0.035 seconds
    const now = audioCtx.currentTime;
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.035);

    // Speed-decay volume: quiet 0.015 volume threshold with sudden decay
    gainNode.gain.setValueAtTime(0.015, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  } catch (error) {
    console.warn('AudioContext failed to trigger due to browser security or lack of driver:', error);
  }
}
