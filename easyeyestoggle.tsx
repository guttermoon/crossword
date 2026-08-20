"use client"

import { useEffect, useState } from "react"

/**
 * "Easy Eyes" — a site-wide readable-theme switch.
 *
 * Portable extract from The Dead Good Club. Flipping it on sets `easy-eyes`
 * on <html>; easy-eyes.css does the rest. The choice persists in
 * localStorage across pages and visits.
 *
 * No dependencies beyond React — the eye is inline SVG (the parent site uses
 * lucide-react) and every style lives in easy-eyes.css, so this needs no
 * Tailwind and no font packages.
 *
 * Mount it once, high in the tree (a root layout or App shell), NOT per page.
 */

const KEY = "easy-eyes"

export function EasyEyesToggle() {
  const [on, setOn] = useState(false)

  // read the saved preference after mount — localStorage is not available
  // during SSR, so the first paint is always "off" and this corrects it
  useEffect(() => {
    const saved = localStorage.getItem(KEY) === "1"
    setOn(saved)
    document.documentElement.classList.toggle("easy-eyes", saved)
  }, [])

  const toggle = () => {
    const next = !on
    setOn(next)
    document.documentElement.classList.toggle("easy-eyes", next)
    localStorage.setItem(KEY, next ? "1" : "0")
  }

  return (
    <>
      {/* small screens: compact eyeball button */}
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label="Toggle Easy Eyes readable mode"
        title="Easy Eyes — easier-to-read version"
        onClick={toggle}
        className="easy-eyes-mini"
      >
        <EyeIcon />
      </button>

      {/* desktop: labelled pill switch */}
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label="Toggle Easy Eyes readable mode"
        title="Easy Eyes — switch every page to an easier-to-read version"
        onClick={toggle}
        className="easy-eyes-switch"
      >
        <span aria-hidden="true" className="easy-eyes-state">
          {on ? "On" : "Off"}
        </span>
        <span className="easy-eyes-knob">Easy Eyes</span>
      </button>
    </>
  )
}

function EyeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
