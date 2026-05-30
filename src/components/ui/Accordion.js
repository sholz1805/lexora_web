"use client";

import { useId, useMemo, useState } from "react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Accordion
 * - Accessible (aria-expanded/controls)
 * - Keyboard-friendly
 * - Single-open by default (toggleable via allowMultiple)
 */
export default function Accordion({
  items = [],
  className,
  allowMultiple = false,
  defaultOpenIndex = null,
}) {
  const reactId = useId();

  const initialOpen = useMemo(() => {
    if (allowMultiple) {
      return Array.isArray(defaultOpenIndex)
        ? defaultOpenIndex
        : defaultOpenIndex === null
          ? []
          : [defaultOpenIndex];
    }
    return defaultOpenIndex === null ? null : defaultOpenIndex;
  }, [allowMultiple, defaultOpenIndex]);

  const [open, setOpen] = useState(initialOpen);

  const isOpen = (idx) => {
    if (allowMultiple) return open.includes(idx);
    return open === idx;
  };

  const setOpenFor = (idx) => {
    if (allowMultiple) {
      setOpen((prev) => {
        const has = prev.includes(idx);
        if (has) return prev.filter((x) => x !== idx);
        return [...prev, idx];
      });
      return;
    }

    setOpen((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className={cx("space-y-3", className)}>
      {items.map((item, idx) => {
        const contentId = `${reactId}-content-${idx}`;
        const buttonId = `${reactId}-button-${idx}`;
        const openNow = isOpen(idx);

        return (
          <div
            key={idx}
            className={cx(
              "rounded-[1.25rem] border border-muted bg-surface",
              "shadow-soft"
            )}
          >
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={openNow}
                aria-controls={contentId}
                className={cx(
                  "flex w-full items-center justify-between gap-4",
                  "px-6 py-4 text-left"
                )}
              >
                <span className="truncate text-base font-semibold text-black">
                  {item.question}
                </span>

                <button
                  type="button"
                  aria-hidden="true"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenFor(idx);
                  }}
                  className={cx(
                    "relative inline-flex h-8 w-8 items-center justify-center flex-shrink-0",
                    "rounded-full border border-black/20 bg-white"
                  )}
                >
                  {/* Horizontal line */}
                  <span
                    className={cx(
                      "absolute h-[2px] w-[14px] bg-black transition-transform"
                    )}
                  />

                  {/* Vertical line (rotates into horizontal when open) */}
                  <span
                    className={cx(
                      "absolute h-[2px] w-[14px] bg-black transition-transform",
                      openNow ? "rotate-90" : "rotate-0"
                    )}
                  />
                </button>
              </button>
            </h3>

            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              className={cx(
                "transition-[max-height,opacity,transform] duration-200",
                openNow
                  ? "max-h-[180px] opacity-100 translate-y-0 overflow-hidden"
                  : "max-h-0 opacity-0 -translate-y-1 overflow-hidden"
              )}
            >
              <div className="px-6 pb-5">
                <p className="text-sm leading-6 text-black/90">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

