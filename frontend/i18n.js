// Content i18n for the EN/NL process-language switcher.
//
// The English keys here are the SAME identifiers the backend pipeline matches on
// (event `type`, `action`, `fact`, `spec`). We never change those keys in the
// YAML or the backend - we only map them to a Dutch DISPLAY label here, so the
// gates keep working while the UI flips language. The Dutch labels keep the
// technical "log code" aesthetic (UPPER_SNAKE for events, snake_case for
// actions/facts), per the chosen style.
//
// This mirrors VAKJARGON.md (the Dutch <-> English domain glossary). UI chrome
// (layer names, gate names, C1-C9, column headers, buttons) is NOT translated.

window.I18N = {
  // Registration event types (UPPER_SNAKE).
  events: {
    DOSSIER_OPENED:           "DOSSIER_GEOPEND",
    BRP_REQUEST:              "BRP_VERZOEK",
    BRP_RESPONSE:             "BRP_ANTWOORD",
    VIS_REQUEST:              "VIS_VERZOEK",
    VIS_RESPONSE:             "VIS_ANTWOORD",
    WWFT_CHECK:               "WWFT_CONTROLE",
    ECH_NOTARY_INSTRUCTION:   "ECH_NOTARISOPDRACHT",
    ECH_SETTLEMENT_NOTE:      "ECH_SLUITNOTA",
    PRE_TITLE_SEARCH_REQ:     "PRE_RECHERCHE_VERZOEK",
    PRE_TITLE_SEARCH_OK:      "PRE_RECHERCHE_OK",
    DEED_TRANSFERRED:         "AKTE_GEPASSEERD",
    SYVAS_SUBMITTED:          "SYVAS_INGEDIEND",
    SYVAS_ACK:                "SYVAS_BEVESTIGING",
    POST_TITLE_SEARCH_OK:     "NARECHERCHE_OK",
    ECH_TRANSFER_CONFIRMATION:"ECH_PASSEER_BEVESTIGING",
    CDR_REGISTER_REQ:         "CDR_REGISTRATIE_VERZOEK",
    CDR_RESPONSE:             "CDR_ANTWOORD",
    SEARCH_SUBMITTED:         "ZOEKOPDRACHT_INGEDIEND",
    SUGGESTIONS_RENDERED:     "SUGGESTIES_GETOOND",
    BRN_RECORD_VIEWED:        "BRN_RECORD_INGEZIEN",
    OGN_QUERY:                "OGN_BEVRAGING",
    BRN_RECORD_RETURNED:      "BRN_RECORD_GERETOURNEERD",
    CERT_PRESENTED:           "CERTIFICAAT_AANGEBODEN",
    DEED_INDEX_OPENED:        "AKTE_INDEX_GEOPEND",
    DEED_PDF_RETRIEVED:       "AKTE_PDF_OPGEHAALD",
  },

  // Logic actions (snake_case).
  actions: {
    identity_verified:  "identiteit_vastgesteld",
    wwft_clearance:     "wwft_vrijgave",
    mortgage_settled:   "hypotheek_afgewikkeld",
    deed_registered:    "akte_ingeschreven",
    cdr_registration:   "cdr_registratie",
    web_consultation:   "web_raadpleging",
    ogn_consultation:   "ogn_raadpleging",
    deed_consultation:  "akte_raadpleging",
  },

  // Institutional facts (snake_case).
  facts: {
    client_cleared:               "client_vrijgegeven",
    property_transferred:         "eigendom_overgedragen",
    web_consultation_recorded:    "web_raadpleging_vastgelegd",
    ogn_consultation_recorded:    "ogn_raadpleging_vastgelegd",
    deed_consultation_recorded:   "akte_raadpleging_vastgelegd",
  },

  // Specification ids (the key is kept for selection; only the display flips).
  specs: {
    "spec-due-diligence":         "spec-clientenonderzoek",
    "spec-deed-transfer":         "spec-levering-akte",
    "spec-mortgage":              "spec-hypotheek",
    "spec-cdr":                   "spec-cdr-registratie",
    "spec-register-consultation": "spec-registerraadpleging",
    "spec-cdr-consultation":      "spec-cdr-raadpleging",
  },

  // Object-identifier prefixes (Dutch-ify the readable prefix only; serials,
  // cert ids and proper nouns are left untouched). Applied to the leading token
  // up to the first dash, e.g. DEED-2026-0231 -> AKTE-2026-0231.
  idPrefix: {
    DEED:   "AKTE",
    PARTY:  "PARTIJ",
    MORT:   "HYP",
    NOTARY: "NOTARIS",
  },
};

// Generic lookup: in NL, return the mapped label (falling back to the key);
// in EN, return the key unchanged.
function _t(map, key, lang) {
  if (lang !== "nl" || key == null) return key;
  return map[key] || key;
}
window.tEvent  = (key, lang) => _t(window.I18N.events,  key, lang);
window.tAction = (key, lang) => _t(window.I18N.actions, key, lang);
window.tFact   = (key, lang) => _t(window.I18N.facts,   key, lang);
window.tSpec   = (key, lang) => _t(window.I18N.specs,   key, lang);

// Object identifier: replace a leading readable prefix with its Dutch form,
// keeping the rest of the code (serial) intact. Leaves unknown prefixes as-is.
window.tId = (val, lang) => {
  if (lang !== "nl" || typeof val !== "string" || !val) return val;
  for (const [en, nl] of Object.entries(window.I18N.idPrefix)) {
    if (val === en) return nl;
    if (val.startsWith(en + "-")) return nl + val.slice(en.length);
  }
  return val;
};
