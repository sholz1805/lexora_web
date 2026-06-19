export default function PrivacyPolicyLabel({ label }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-muted bg-paper px-5 py-2 shadow-sm">
      <span className="h-2 w-2 rounded-full bg-signal" />

      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/70">
        {label}
      </p>
    </div>
  );
}
