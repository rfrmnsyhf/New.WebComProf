import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import logo from "@/assets/images/LOGO.png";

const LoadingScreen = ({ onComplete, duration = 2000 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Animate progress 0 -> 100 in sync with total duration
  useEffect(() => {
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    let currentStep = 0;

    const progressTimer = setInterval(() => {
      currentStep += 1;
      // Ease-out curve so it feels like it's "finishing up" near the end
      const rawProgress = Math.min(currentStep / totalSteps, 1);
      const eased = 1 - Math.pow(1 - rawProgress, 2);
      setProgress(Math.round(eased * 100));

      if (currentStep >= totalSteps) {
        clearInterval(progressTimer);
      }
    }, stepTime);

    return () => clearInterval(progressTimer);
  }, [duration]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  const logoEntrance = useMemo(
    () =>
      shouldReduceMotion
        ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
        : {
            initial: { scale: 0, rotate: -180, opacity: 0 },
            animate: { scale: 1, rotate: 0, opacity: 1 },
          },
    [shouldReduceMotion]
  );

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          role="status"
          aria-live="polite"
          aria-busy={isLoading}
          className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-primary"
        >
          {/* Ambient background glow */}
          {!shouldReduceMotion && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1.2 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute h-500px w-500px rounded-full bg-accent blur-[120px]"
            />
          )}

          <div className="relative text-center">
            {/* Logo with pulse ring */}
            <motion.div
              {...logoEntrance}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-6 inline-flex items-center justify-center"
            >
              {!shouldReduceMotion && (
                <motion.span
                  initial={{ opacity: 0.6, scale: 0.9 }}
                  animate={{ opacity: 0, scale: 1.6 }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 rounded-full border border-accent/50"
                />
              )}
              <img
                src={logo}
                alt="CBSA Logo"
                className="relative h-24 w-auto brightness-0 invert"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-sm tracking-widest text-slate-400">
                YOUR TRUSTED PARTNER
              </p>
            </motion.div>

            {/* Loading bar with real progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mx-auto mt-8 w-48"
            >
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-linear-to-r from-accent/40 via-accent to-accent/40"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-2 block text-[11px] font-medium tracking-wider text-slate-500 tabular-nums"
              >
                {progress}%
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;