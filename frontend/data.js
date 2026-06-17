// Static UI labels. Governance data (principles, specs, log sources) is loaded
// from the backend at startup and merged into the same globals so components.jsx
// can stay unchanged.

// Selectable examples. `specs` lists the spec ids governing each example, used to
// filter the governance panel so it shows only the active example's rulebook.
window.SCENARIOS = {
  deed:     { id: "deed",     label: "Transfer of a deed", label_nl: "Passeren van een akte",
              specs: ["spec-due-diligence", "spec-deed-transfer", "spec-mortgage", "spec-cdr"] },
  register: { id: "register", label: "Register Notariaat consultation", label_nl: "Raadpleging Register Notariaat",
              specs: ["spec-register-consultation"] },
  cdr:      { id: "cdr",      label: "CDR deed consultation", label_nl: "CDR-akteraadpleging",
              specs: ["spec-cdr-consultation"] },
};

window.CONDITIONS = {
  C1: "Activator attribution",
  C2: "Shared correlation",
  C3: "Clock synchronisation",
  C4: "Process step mapping",
  C5: "Cross-system linkability",
  C6: "Institutional context exists (spec applies)",
  C7: "Log-chain integrity demonstrable",
  C8: "Access governance documented",
  C9: "Retention classification assigned",
};

// `name_nl` is the Dutch display name used by the EN/NL process-language switcher.
// Only human actors get a real translation; system / register acronyms are proper
// names and keep their value (no name_nl -> actorName() falls back to `name`).
window.ACTORS = {
  "notary":          { name: "Notary",          name_nl: "Notaris",            role: "Notary",          org: "Notary Office" },
  "legal_assistant": { name: "Legal assistant", name_nl: "Juridisch medewerker", role: "Legal assistant", org: "Notary Office" },
  "brp":             { name: "BRP",             role: "register",        org: "External" },
  "vis":             { name: "VIS",             role: "service",         org: "KNB" },
  "kadaster":        { name: "Kadaster",        role: "register",        org: "External" },
  "cdr":             { name: "CDR",             role: "service",         org: "KNB" },
  "ech":             { name: "ECH",             role: "service",         org: "External" },
  "lender":          { name: "Mortgage lender", name_nl: "Hypotheekverstrekker", role: "lender",          org: "External" },
  // register-consultation example (B1)
  "web_visitor":       { name: "Public visitor",       name_nl: "Websitebezoeker", role: "consulter (pseudonymous)", org: "Public" },
  "kvk":               { name: "KvK",                  role: "chain partner",            org: "External" },
  "registernotariaat": { name: "registernotariaat.nl", role: "service",                  org: "KNB" },
  "brn":               { name: "BRN",                  role: "register",                 org: "KNB" },
  "ogn":               { name: "OGN",                  role: "service",                  org: "KNB" },
  // CDR content-blind consultation example (B2)
  "pec":               { name: "PEC",                  role: "service",                  org: "KNB" },
};

// Resolve an actor key to its display name for the current process language.
// `lang` is passed explicitly (no global) so callers stay deterministic.
window.actorName = (key, lang) => {
  const a = window.ACTORS[key];
  if (!a) return key;
  return lang === "nl" ? (a.name_nl || a.name) : a.name;
};

// Per-example left-rail layout: which org panels and systems to show. The deed
// panels reproduce the original hard-coded rail.
window.LEFT_RAIL = {
  deed: [
    { org: "notary",   title: "Notary Office", actors: ["notary", "legal_assistant"],
      systems: [{ name: "NSL", src: "nsl" }, { name: "WwfTrace", src: "wwftrace" }] },
    { org: "knb",      title: "KNB", grid: true,
      systems: [{ name: "CDR", src: "cdr" }, { name: "VIS", src: "vis" }] },
    { org: "external", title: "External",
      systems: [{ name: "BRP", src: "brp" }, { name: "Kadaster", src: "kadaster" }, { name: "ECH", src: "ech" }] },
  ],
  register: [
    { org: "external", title: "Public & chain partners", actors: ["web_visitor", "kvk"], systems: [] },
    { org: "knb",      title: "KNB", grid: true,
      systems: [{ name: "registernotariaat.nl", src: "registernotariaat" },
                { name: "OGN", src: "ogn" }, { name: "BRN", src: "brn" }] },
  ],
  cdr: [
    { org: "notary",   title: "Notary Office", actors: ["notary"], systems: [] },
    { org: "knb",      title: "KNB", grid: true,
      systems: [{ name: "PEC", src: "pec" }, { name: "CDR", src: "cdr" }] },
  ],
};

// Populated at runtime from the backend.
window.PRINCIPLES = [];
window.LOG_SOURCES = [];
window.SPECS = [];
window.SCHEMAS = [];
