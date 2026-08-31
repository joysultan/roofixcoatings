import { useEffect, useRef, useState } from "react";
import { Maximize2, Pause, Play, Volume2, VolumeX } from "lucide-react";

export type ReelSlotProps = {
  /** Add your Roofix Coatings reel here, e.g. "/videos/reel-01.mp4" */
  src?: string | undefined;
  poster?: string | undefined;
  number: string;
  label: string;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function ReelSlot({ src, poster, number, label }: ReelSlotProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = volume;
    video.muted = muted;
  }, [volume, muted]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  };

  const toggleFullscreen = () => {
    const el = videoRef.current ?? wrapRef.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.();
  };

  return (
    <div className="group">
      <div className="mb-4 flex items-baseline justify-between">
        <span className="label-eyebrow text-muted-foreground">{number}</span>
        <span className="label-eyebrow text-muted-foreground/60">{label}</span>
      </div>

      <div
        ref={wrapRef}
        className="relative aspect-[9/16] w-full overflow-hidden rounded-sm border border-border bg-charcoal shadow-refined"
      >
        {src ? (
          <>
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              playsInline
              muted={muted}
              preload="metadata"
              onClick={togglePlay}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
              onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
              className="h-full w-full object-contain"
            />

            <div className="absolute inset-x-0 bottom-0 space-y-2 bg-gradient-to-t from-charcoal/90 to-transparent p-3 pt-10">
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.05}
                value={time}
                aria-label="Seek video"
                onChange={(e) => {
                  const v = videoRef.current;
                  if (v) v.currentTime = Number(e.target.value);
                  setTime(Number(e.target.value));
                }}
                className="h-6 w-full cursor-pointer accent-terracotta"
              />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={playing ? "Pause video" : "Play video"}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-on-dark/15 text-on-dark backdrop-blur transition-colors hover:bg-on-dark/25"
                >
                  {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => setMuted((m) => !m)}
                  aria-label={muted ? "Unmute video" : "Mute video"}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-on-dark/15 text-on-dark backdrop-blur transition-colors hover:bg-on-dark/25"
                >
                  {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={muted ? 0 : volume}
                  aria-label="Volume"
                  onChange={(e) => {
                    const next = Number(e.target.value);
                    setVolume(next);
                    setMuted(next === 0);
                  }}
                  className="h-6 w-20 cursor-pointer accent-terracotta"
                />
                <span className="ml-auto text-[0.7rem] tabular-nums text-on-dark-muted">
                  {formatTime(time)} / {formatTime(duration)}
                </span>
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label="Fullscreen"
                  className="inline-flex size-10 items-center justify-center rounded-full bg-on-dark/15 text-on-dark backdrop-blur transition-colors hover:bg-on-dark/25"
                >
                  <Maximize2 className="size-4" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="display-md text-on-dark/25">{number}</span>
            <span className="label-eyebrow text-on-dark-muted">Reel Slot Reserved</span>
            <p className="max-w-[16rem] text-sm leading-relaxed text-on-dark-muted/80">
              Your Roofix Coatings reel will appear here. Portrait 9:16 ratio preserved, with full
              playback controls.
            </p>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-3 rounded-sm border border-dashed border-on-dark/20"
            />
          </div>
        )}
      </div>
    </div>
  );
}
