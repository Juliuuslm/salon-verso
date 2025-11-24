/**
 * GRAIN OVERLAY COMPONENT
 * Textura de ruido subtle que se aplica a toda la página
 * Optimizado con pointer-events-none para no interferir con clicks
 */
export default function GrainOverlay() {
  return (
    <div className="fixed inset-0 z-40 pointer-events-none opacity-[0.03] mix-blend-overlay user-select-none">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
