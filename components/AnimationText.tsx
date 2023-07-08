import { useEffect, useRef } from 'react';

interface AnimationProps {}

const Animation: React.FC<AnimationProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const texts = [
    "If",
    "You",
    "Like",
    "It",
    "Please",
    "Give",
    "a Love",
    ":)",
    "by @Doniaskima"
  ];

  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = 0.25;

  useEffect(() => {
    const elts = {
      text1: text1Ref.current,
      text2: text2Ref.current
    };

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / 1;

      if (fraction > 1) {
        cooldown = 0.25;
        fraction = 1;
      }

      setMorph(fraction);
    }

    function setMorph(fraction: number) {
      const text1 = elts.text1;
      const text2 = elts.text2;

      if (text1 && text2) {
        const invertedFraction = 1 - fraction;
        text2.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
        text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

        text1.textContent = texts[textIndex % texts.length];
        text2.textContent = texts[(textIndex + 1) % texts.length];
      }
    }

    function doCooldown() {
      morph = 0;

      const text2 = elts.text2;
      if (text2) {
        text2.style.filter = "";
        text2.style.opacity = "100%";
      }

      const text1 = elts.text1;
      if (text1) {
        text1.style.filter = "";
        text1.style.opacity = "0%";
      }
    }

    function animate() {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();
  }, []);

  return (
    <div
      id="container"
      ref={containerRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '200px',
        fontSize: '48px',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <span
        id="text1"
        ref={text1Ref}
        style={{
          position: 'absolute',
          opacity: '0%',
          pointerEvents: 'none'
        }}
      ></span>
      <span
        id="text2"
        ref={text2Ref}
        style={{
          position: 'absolute',
          opacity: '100%',
          pointerEvents: 'none'
        }}
      ></span>
    </div>
  );
}

export default Animation;
