import { useEffect, useState, useRef } from 'react';
import {
  Thermometer,
  Cloud,
  Smartphone,
  Monitor,
  LayoutDashboard,
  Activity,
} from 'lucide-react';
import './SystemFlowAnimation.css';

/**
 * SystemFlowAnimation - Animated visualization of thermostat-to-cloud data flow
 * Shows telemetry flowing from device through cloud to user devices
 * Respects prefers-reduced-motion for accessibility
 */
export default function SystemFlowAnimation({ className = '' }) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
      setIsAnimating(!e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Intersection observer to pause animation when not visible
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!prefersReducedMotion) {
          setIsAnimating(entry.isIntersecting);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const animationClass = isAnimating && !prefersReducedMotion ? 'animating' : 'static';

  return (
    <div 
      ref={containerRef}
      className={`system-flow ${animationClass} ${className}`}
      role="img"
      aria-label="Animated diagram showing data flow from thermostat through cloud to user devices"
    >
      {/* Background grid pattern */}
      <div className="system-flow__bg" aria-hidden="true" />

      {/* Connection paths */}
      <svg className="system-flow__paths" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid meet">
        {/* Left path: Thermostat to Cloud */}
        <path
          className="system-flow__path system-flow__path--left"
          d="M 120 100 Q 250 100 350 100"
          fill="none"
        />
        
        {/* Right paths: Cloud to devices */}
        <path
          className="system-flow__path system-flow__path--right-top"
          d="M 450 100 Q 520 60 620 50"
          fill="none"
        />
        <path
          className="system-flow__path system-flow__path--right-mid"
          d="M 450 100 Q 520 100 620 100"
          fill="none"
        />
        <path
          className="system-flow__path system-flow__path--right-bottom"
          d="M 450 100 Q 520 140 620 150"
          fill="none"
        />

        {/* Animated pulses - only render if animating */}
        {isAnimating && !prefersReducedMotion && (
          <>
            {/* Pulses from thermostat to cloud */}
            <circle className="system-flow__pulse system-flow__pulse--1" r="4">
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                path="M 120 100 Q 250 100 350 100"
              />
            </circle>
            <circle className="system-flow__pulse system-flow__pulse--2" r="4">
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                begin="0.5s"
                path="M 120 100 Q 250 100 350 100"
              />
            </circle>
            <circle className="system-flow__pulse system-flow__pulse--3" r="4">
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                begin="1s"
                path="M 120 100 Q 250 100 350 100"
              />
            </circle>

            {/* Pulses from cloud to devices */}
            <circle className="system-flow__pulse system-flow__pulse--out-1" r="3">
              <animateMotion
                dur="1.5s"
                repeatCount="indefinite"
                begin="1s"
                path="M 450 100 Q 520 60 620 50"
              />
            </circle>
            <circle className="system-flow__pulse system-flow__pulse--out-2" r="3">
              <animateMotion
                dur="1.5s"
                repeatCount="indefinite"
                begin="1.2s"
                path="M 450 100 Q 520 100 620 100"
              />
            </circle>
            <circle className="system-flow__pulse system-flow__pulse--out-3" r="3">
              <animateMotion
                dur="1.5s"
                repeatCount="indefinite"
                begin="1.4s"
                path="M 450 100 Q 520 140 620 150"
              />
            </circle>
          </>
        )}
      </svg>

      {/* Device nodes */}
      <div className="system-flow__nodes">
        {/* Thermostat node */}
        <div className="system-flow__node system-flow__node--thermostat">
          <div className="system-flow__node-icon">
            <Thermometer size={28} />
          </div>
          <span className="system-flow__node-label">ESP32 Thermostat</span>
          <Activity className="system-flow__node-activity" size={14} />
        </div>

        {/* Cloud node */}
        <div className="system-flow__node system-flow__node--cloud">
          <div className="system-flow__node-icon">
            <Cloud size={32} />
          </div>
          <span className="system-flow__node-label">Django API</span>
        </div>

        {/* Output devices */}
        <div className="system-flow__outputs">
          <div className="system-flow__node system-flow__node--device">
            <div className="system-flow__node-icon">
              <Smartphone size={20} />
            </div>
            <span className="system-flow__node-label">Mobile</span>
          </div>
          <div className="system-flow__node system-flow__node--device">
            <div className="system-flow__node-icon">
              <Monitor size={20} />
            </div>
            <span className="system-flow__node-label">Desktop</span>
          </div>
          <div className="system-flow__node system-flow__node--device">
            <div className="system-flow__node-icon">
              <LayoutDashboard size={20} />
            </div>
            <span className="system-flow__node-label">Dashboard</span>
          </div>
        </div>
      </div>

      {/* Data labels */}
      <div className="system-flow__labels" aria-hidden="true">
        <span className="system-flow__label system-flow__label--left">Telemetry Data</span>
        <span className="system-flow__label system-flow__label--right">Real-time Updates</span>
      </div>
    </div>
  );
}
