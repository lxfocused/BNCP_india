let audioCtx: AudioContext | null = null;
let lastPlayTime = 0;

export function playSynthesizedClick() {
  const nowMs = Date.now();
  // Prevent duplicate overlapping triggers (e.g. touchstart followed immediately by click)
  if (nowMs - lastPlayTime < 60) return;
  lastPlayTime = nowMs;

  try {
    // Lazy initialize standard AudioContext
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // 1. Soft Warm Mid-Body Sweep
    const oscBody = audioCtx.createOscillator();
    const gainBody = audioCtx.createGain();
    oscBody.type = 'sine';
    oscBody.frequency.setValueAtTime(580, now);
    oscBody.frequency.exponentialRampToValueAtTime(110, now + 0.03);

    gainBody.gain.setValueAtTime(0.015, now);
    gainBody.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);

    oscBody.connect(gainBody);
    gainBody.connect(audioCtx.destination);

    // 2. Clear High-Tactile Metallic Click Overlay (High-pass filtered)
    const oscTick = audioCtx.createOscillator();
    const gainTick = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    oscTick.type = 'triangle';
    oscTick.frequency.setValueAtTime(3200, now);
    oscTick.frequency.exponentialRampToValueAtTime(800, now + 0.01);

    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1200, now);

    gainTick.gain.setValueAtTime(0.005, now);
    gainTick.gain.exponentialRampToValueAtTime(0.0001, now + 0.01);

    oscTick.connect(filter);
    filter.connect(gainTick);
    gainTick.connect(audioCtx.destination);

    // Trigger Nodes safely
    oscBody.start(now);
    oscBody.stop(now + 0.035);

    oscTick.start(now);
    oscTick.stop(now + 0.015);
  } catch (error) {
    // Silently proceed if AudioContext isn't supported or allowed by policy yet
  }
}

/**
 * Initializes global event listener delegation to automatically catch all clickable elements.
 * This guarantees that literally NO interactive element (buttons, forms, links, cards, tabs, mobile menu) is silent.
 */
export function initGlobalSoundSystem() {
  if (typeof window === 'undefined') return;

  const handleInteraction = (e: Event) => {
    const target = e.target as HTMLElement;
    if (!target) return;

    // Query parent hierarchy up to check if any element behaves as interactive/clickable
    const interactiveElement = target.closest(
      'button, a, select, input[type="submit"], input[type="button"], input[type="checkbox"], input[type="radio"], [role="button"], [role="tab"], [role="menuitem"], .cursor-pointer, [onClick]'
    );

    if (interactiveElement) {
      playSynthesizedClick();
    }
  };

  // Add click listener (captures clicks including native Enter/Space triggers)
  window.addEventListener('click', handleInteraction, { capture: true, passive: true });

  // Add touchstart & pointerdown for instant super-responsive physical feels on tactile screens
  window.addEventListener('pointerdown', handleInteraction, { capture: true, passive: true });
}

