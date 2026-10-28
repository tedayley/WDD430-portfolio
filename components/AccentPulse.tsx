"use client";

import { useEffect } from "react";

export default function AccentPulse() {
  useEffect(() => {
    const root = document.documentElement;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const start = { r: 0, g: 229, b: 255 };
    const end = { r: 255, g: 62, b: 201 };
    let progress = 0;
    let direction = 1;
    let frameId: number | null = null;

    const lerp = (from: number, to: number) =>
      Math.round(from + (to - from) * progress);

    const updateAccent = () => {
      progress += direction * 0.0025;
      if (progress >= 1) {
        progress = 1;
        direction = -1;
      } else if (progress <= 0) {
        progress = 0;
        direction = 1;
      }

      root.style.setProperty(
        "--accent",
        `rgb(${lerp(start.r, end.r)} ${lerp(start.g, end.g)} ${lerp(start.b, end.b)})`,
      );
      frameId = requestAnimationFrame(updateAccent);
    };

    const stopAccentPulse = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const startAccentPulse = () => {
      if (
        frameId === null &&
        !motionPreference.matches &&
        !document.hidden
      ) {
        frameId = requestAnimationFrame(updateAccent);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAccentPulse();
      } else {
        startAccentPulse();
      }
    };

    const handleMotionPreferenceChange = () => {
      if (motionPreference.matches) {
        stopAccentPulse();
      } else {
        startAccentPulse();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionPreference.addEventListener("change", handleMotionPreferenceChange);
    startAccentPulse();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionPreference.removeEventListener(
        "change",
        handleMotionPreferenceChange,
      );
      stopAccentPulse();
      root.style.removeProperty("--accent");
    };
  }, []);

  return null;
}
