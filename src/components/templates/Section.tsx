// Section wrapper — wraps any content block with an h2 heading.
// Components inside should NOT output their own h2.
//
interface SectionProps {
  id?: string;
  heading: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Renders a named section with a consistent h2 heading.
 * The h2 is the only heading inside the section — inner components must NOT
 * render their own h2 unless explicitly told to (via showHeading prop).
 */
export function Section({ id, heading, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`mb-12 scroll-mt-4 ${className}`}>
      <h2 className="text-2xl font-semibold text-slate-900 border-l-4 border-blue-500 pl-4 mb-4">{heading}</h2>
      {children}
    </section>
  );
}
