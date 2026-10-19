export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Left Aurora Orb */}
      <div className="absolute -top-40 left-1/4 w-[650px] h-[650px] bg-gradient-to-tr from-purple-700/30 via-violet-600/35 to-fuchsia-600/25 rounded-full blur-[140px] animate-glow" />

      {/* Center Left Aurora Orb (Illuminates Tech Stack & transition) */}
      <div
        className="absolute top-1/4 -left-24 w-[600px] h-[600px] bg-gradient-to-br from-indigo-700/25 via-purple-700/20 to-violet-600/20 rounded-full blur-[150px] animate-glow"
        style={{ animationDelay: "-4.5s" }}
      />

      {/* Middle Right Aurora Orb */}
      <div
        className="absolute top-1/2 -right-24 w-[650px] h-[650px] bg-gradient-to-bl from-fuchsia-600/25 via-purple-700/25 to-indigo-600/20 rounded-full blur-[160px] animate-glow"
        style={{ animationDelay: "-3s" }}
      />

      {/* Bottom Center Aurora Orb */}
      <div
        className="absolute bottom-0 left-1/3 w-[700px] h-[600px] bg-gradient-to-t from-indigo-700/25 via-purple-600/25 to-violet-700/20 rounded-full blur-[150px] animate-glow"
        style={{ animationDelay: "-6s" }}
      />

      {/* Spatial Dot Matrix Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(216,180,254,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
    </div>
  );
}
