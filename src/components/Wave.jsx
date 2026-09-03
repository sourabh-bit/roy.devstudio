// Curved wave divider between sections.
// `top` places it at the top of a section, filled with the PREVIOUS section's
// colour so the previous section appears to flow down in a wave — the filled
// area hugs the top edge, so there is never a gap stripe.
export default function Wave({ fill, top = false, className = '' }) {
  return (
    <div
      className={`absolute left-0 w-full pointer-events-none z-10 ${
        top ? 'top-0 transform -translate-y-[1px]' : 'bottom-0 transform translate-y-1 rotate-180'
      } ${className}`}
    >
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`w-full h-16 md:h-24 ${fill}`}>
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
      </svg>
    </div>
  )
}
