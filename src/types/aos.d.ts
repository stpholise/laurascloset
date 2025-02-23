// src/types/aos.d.ts
declare module 'aos' {
    interface AOSOptions {
      duration?: number;
      easing?: string;
      once?: boolean;
      offset?: number;
      delay?: number;
      anchorPlacement?: string;
      anchor?: string;
      disable?: boolean;
      startEvent?: string;
      mirror?: boolean;
    }
  
    function init(options?: AOSOptions): void;
    function refresh(): void;
    function refreshHard(): void;
  
    export = { init, refresh, refreshHard };
  }
  