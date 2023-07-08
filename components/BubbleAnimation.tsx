import { useEffect } from 'react';

const BubbleAnimation: React.FC = () => {
  useEffect(() => {
    const bubbles = document.querySelectorAll('.bubble');

    function animateBubbles() {
      bubbles.forEach((bubble) => {
        const bubbleSpans = bubble.querySelectorAll('span');
        bubbleSpans.forEach((span) => {
          span.style.animationDelay = `${Math.random() * 2}s`;
        });
      });
    }

    animateBubbles();
  }, []);

  return (
    <div className="container">
      <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default BubbleAnimation;
