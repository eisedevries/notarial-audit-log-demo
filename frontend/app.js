// GENERATED from app.jsx by build_frontend.cjs - do not edit.
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo,
  useRef = _React.useRef,
  Fragment = _React.Fragment;
var ControlBar = window.ControlBar;
var LeftRail = window.LeftRail;
var Center = window.Center;
var RightRail = window.RightRail;
var ErrorBoundary = window.ErrorBoundary;
var sevLabel = function sevLabel(s) {
  return {
    2: "crit",
    3: "err",
    4: "warn",
    5: "notice",
    6: "info"
  }[s] || "info";
};
var sevClass = function sevClass(s) {
  return "sev-".concat(s);
};
var ORG_OF_SRC = {
  nsl: "notary",
  wwftrace: "notary",
  cdr: "knb",
  vis: "knb",
  ech: "external",
  syvas: "external",
  registernotariaat: "knb",
  brn: "knb",
  ogn: "knb",
  pec: "knb"
};
var ORG_LABEL = {
  notary: "NOTARY",
  knb: "KNB",
  external: "EXTERNAL"
};
var PRECOMPUTED = window.PRECOMPUTED || {
  "default": "deed",
  governance: {},
  states: {}
};
window.LOG_SOURCES = PRECOMPUTED.governance.log_sources || [];
window.SPECS = PRECOMPUTED.governance.specs || [];
window.SCHEMAS = PRECOMPUTED.governance.schemas || [];
function buildPayload(scenario, cursor) {
  var entries = PRECOMPUTED.states[scenario] || [];
  var idx = Math.max(0, Math.min(cursor, entries.length - 1));
  return _objectSpread(_objectSpread({}, entries[idx]), {}, {
    governance: PRECOMPUTED.governance
  });
}
function App() {
  var _payload$state;
  var _useState = useState(PRECOMPUTED["default"] || "deed"),
    _useState2 = _slicedToArray(_useState, 2),
    scenario = _useState2[0],
    setScenario = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    cursor = _useState4[0],
    setCursor = _useState4[1];
  var payload = useMemo(function () {
    return buildPayload(scenario, cursor);
  }, [scenario, cursor]);
  var _useState5 = useState("layer"),
    _useState6 = _slicedToArray(_useState5, 2),
    view = _useState6[0],
    setView = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    highlight = _useState8[0],
    setHighlight = _useState8[1];
  var _useState9 = useState(null),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedEntry = _useState0[0],
    setSelectedEntry = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    leftOpen = _useState10[0],
    setLeftOpen = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    rightOpen = _useState12[0],
    setRightOpen = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    expandedText = _useState14[0],
    setExpandedText = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    expandMiddle = _useState16[0],
    setExpandMiddle = _useState16[1];
  var _useState17 = useState("en"),
    _useState18 = _slicedToArray(_useState17, 2),
    lang = _useState18[0],
    setLang = _useState18[1];
  var prevCount = useRef(0);
  useEffect(function () {
    if (!payload) return;
    var regs = payload.state.reg;
    var n = regs.length;
    if (n > prevCount.current) {
      var news = regs.slice(prevCount.current).map(function (r) {
        return r.id;
      });
      setHighlight({
        kind: "reg",
        ids: news,
        at: Date.now()
      });
      var t = setTimeout(function () {
        return setHighlight(null);
      }, 1400);
      prevCount.current = n;
      return function () {
        return clearTimeout(t);
      };
    }
    prevCount.current = n;
  }, [payload === null || payload === void 0 || (_payload$state = payload.state) === null || _payload$state === void 0 || (_payload$state = _payload$state.reg) === null || _payload$state === void 0 ? void 0 : _payload$state.length]);
  var total = (PRECOMPUTED.states[scenario] || []).length;
  var next = function next() {
    return setCursor(function (c) {
      return Math.min(c + 1, total - 1);
    });
  };
  var prev = function prev() {
    return setCursor(function (c) {
      return Math.max(c - 1, 0);
    });
  };
  var reset = function reset() {
    prevCount.current = 0;
    setCursor(0);
  };
  var onScenario = function onScenario(s) {
    prevCount.current = 0;
    setScenario(s);
    setCursor(0);
  };
  var state = payload.state,
    step = payload.step;
  return React.createElement("div", {
    className: "app"
  }, React.createElement(ControlBar, {
    step: step,
    cursor: cursor,
    total: total,
    scenario: scenario,
    onPrev: prev,
    onNext: next,
    onReset: reset,
    onScenario: onScenario,
    leftOpen: leftOpen,
    rightOpen: rightOpen,
    onToggleLeft: function onToggleLeft() {
      return setLeftOpen(function (o) {
        return !o;
      });
    },
    onToggleRight: function onToggleRight() {
      return setRightOpen(function (o) {
        return !o;
      });
    },
    expandedText: expandedText,
    onToggleText: function onToggleText() {
      return setExpandedText(function (t) {
        return !t;
      });
    },
    expandMiddle: expandMiddle,
    onToggleExpandMiddle: function onToggleExpandMiddle() {
      return setExpandMiddle(function (m) {
        return !m;
      });
    },
    lang: lang,
    onToggleLang: function onToggleLang() {
      return setLang(function (l) {
        return l === "en" ? "nl" : "en";
      });
    }
  }), React.createElement(ErrorBoundary, {
    resetKey: "".concat(scenario, "|").concat(cursor, "|").concat(view, "|").concat(selectedEntry)
  }, React.createElement("div", {
    className: "grid ".concat(leftOpen ? "" : "no-left", " ").concat(rightOpen ? "" : "no-right", " ").concat(expandMiddle ? "expand-mid" : "")
  }, leftOpen && React.createElement(LeftRail, {
    step: step,
    cursor: cursor,
    scenario: scenario,
    expandedText: expandedText,
    lang: lang
  }), React.createElement(Center, {
    state: state,
    step: step,
    view: view,
    setView: setView,
    highlight: highlight,
    selectedEntry: selectedEntry,
    setSelectedEntry: setSelectedEntry,
    cursor: cursor,
    expandedText: expandedText,
    lang: lang
  }), rightOpen && React.createElement(RightRail, {
    state: state,
    step: step,
    scenario: scenario,
    selectedEntry: selectedEntry,
    expandedText: expandedText,
    lang: lang
  }))), React.createElement("footer", {
    className: "app-footer"
  }, "This demonstration was developed with the assistance of AI tools. The processes shown are exemplary processes drawn from the notarial domain, not exhaustive or authoritative descriptions of actual notarial workflows. Source code and a link to the thesis are available on ", React.createElement("a", {
    href: "https://github.com/eisedevries/notarial-audit-log-demo",
    target: "_blank",
    rel: "noopener",
    style: {
      color: "var(--knb-dark)",
      textDecoration: "none"
    }
  }, "GitHub"), "."));
}
window.App = App;