import { useRef, useEffect, useState } from 'react';
import SplitType from 'split-type';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: Record<string, any>;
  to?: Record<string, any>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  onLetterAnimationComplete?: () => void;
}

const SplitText = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}: SplitTextProps) => {
  const ref = useRef<HTMLElement>(null);
  const animationCompletedRef = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useEffect(() => {
    if (!ref.current || !text || !fontsLoaded) return;
    
    const element = ref.current;
    const split = new SplitType(element, { types: splitType as any });
    
    // Get elements based on split type
    let elements: Element[] = [];
    if (splitType.includes('chars') && split.chars) elements = split.chars;
    else if (splitType.includes('words') && split.words) elements = split.words;
    else if (splitType.includes('lines') && split.lines) elements = split.lines;
    
    // Apply initial styles
    elements.forEach((el, index) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = `translateY(40px)`;
      htmlEl.style.transition = `opacity ${duration}s ease ${index * (delay / 1000)}s, transform ${duration}s ease ${index * (delay / 1000)}s`;
    });
    
    // Create intersection observer for scroll trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            elements.forEach((el) => {
              const htmlEl = el as HTMLElement;
              htmlEl.style.opacity = '1';
              htmlEl.style.transform = 'translateY(0px)';
            });
            
            // Call completion callback after animation
            setTimeout(() => {
              onLetterAnimationComplete?.();
            }, (elements.length * delay) + (duration * 1000));
            
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
      split.revert();
    };
  }, [text, delay, duration, splitType, threshold, rootMargin, fontsLoaded, onLetterAnimationComplete]);

  const renderTag = () => {
    const style: React.CSSProperties = {
      textAlign,
      overflow: 'hidden',
      display: 'inline-block',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      willChange: 'transform, opacity'
    };
    const classes = `split-parent ${className}`;
    switch (tag) {
      case 'h1':
        return (
          <h1 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h1>
        );
      case 'h2':
        return (
          <h2 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h2>
        );
      case 'h3':
        return (
          <h3 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h3>
        );
      case 'h4':
        return (
          <h4 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h4>
        );
      case 'h5':
        return (
          <h5 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h5>
        );
      case 'h6':
        return (
          <h6 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h6>
        );
      default:
        return (
          <p ref={ref as React.RefObject<HTMLParagraphElement>} style={style} className={classes}>
            {text}
          </p>
        );
    }
  };
  return renderTag();
};

export default SplitText;