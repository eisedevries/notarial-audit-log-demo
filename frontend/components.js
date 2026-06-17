// GENERATED from components.jsx by build_frontend.cjs - do not edit.
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var ErrorBoundary = function (_React$Component) {
  function ErrorBoundary(props) {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, [props]);
    _this.state = {
      error: null,
      info: null,
      key: props.resetKey
    };
    return _this;
  }
  _inherits(ErrorBoundary, _React$Component);
  return _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        info: info
      });
      console.error("ErrorBoundary caught:", error, info === null || info === void 0 ? void 0 : info.componentStack);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.error) {
        var _this$state$error;
        return React.createElement("div", {
          className: "error-boundary"
        }, React.createElement("div", {
          className: "eb-title"
        }, "\u26A0 Something threw while rendering this view"), React.createElement("div", {
          className: "eb-msg"
        }, String(((_this$state$error = this.state.error) === null || _this$state$error === void 0 ? void 0 : _this$state$error.message) || this.state.error)), this.state.info && React.createElement("pre", {
          className: "eb-stack"
        }, this.state.info.componentStack), React.createElement("div", {
          className: "eb-hint"
        }, "Navigate (next / prev), switch view, or change selection to recover. Details are also in the browser console."));
      }
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        error: error
      };
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.resetKey !== state.key) return {
        key: props.resetKey,
        error: null,
        info: null
      };
      return null;
    }
  }]);
}(React.Component);
window.ErrorBoundary = ErrorBoundary;
function ControlBar(_ref) {
  var step = _ref.step,
    cursor = _ref.cursor,
    total = _ref.total,
    scenario = _ref.scenario,
    onPrev = _ref.onPrev,
    onNext = _ref.onNext,
    onReset = _ref.onReset,
    onScenario = _ref.onScenario,
    leftOpen = _ref.leftOpen,
    rightOpen = _ref.rightOpen,
    onToggleLeft = _ref.onToggleLeft,
    onToggleRight = _ref.onToggleRight,
    expandedText = _ref.expandedText,
    onToggleText = _ref.onToggleText,
    expandMiddle = _ref.expandMiddle,
    onToggleExpandMiddle = _ref.onToggleExpandMiddle,
    lang = _ref.lang,
    onToggleLang = _ref.onToggleLang;
  var stepTitle = lang === "nl" ? step.title_nl || step.title : step.title;
  var stepNarration = lang === "nl" ? step.narration_nl || step.narration : step.narration;
  return React.createElement("div", {
    className: "control-bar"
  }, React.createElement("div", {
    className: "cb-left"
  }, React.createElement("div", {
    className: "cb-brand"
  }, React.createElement("span", {
    className: "cb-title"
  }, "notarial demo")), React.createElement("div", {
    className: "cb-scenario"
  }, React.createElement("span", {
    className: "lbl"
  }, "process:"), React.createElement("select", {
    value: scenario,
    onChange: function onChange(e) {
      return onScenario(e.target.value);
    }
  }, Object.values(window.SCENARIOS).map(function (s) {
    return React.createElement("option", {
      key: s.id,
      value: s.id
    }, lang === "nl" ? s.label_nl || s.label : s.label);
  })))), React.createElement("div", {
    className: "cb-narration"
  }, React.createElement("div", {
    className: "cb-step"
  }, React.createElement("span", {
    className: "cb-stepnum"
  }, "step ", String(cursor).padStart(2, "0"), " / ", String(total - 1).padStart(2, "0")), React.createElement("span", {
    className: "cb-stepsep"
  }, "\xB7"), React.createElement("span", {
    className: "cb-steptitle"
  }, stepTitle)), expandedText && React.createElement("div", {
    className: "cb-text",
    title: stepNarration
  }, stepNarration)), React.createElement("div", {
    className: "cb-right"
  }, React.createElement("div", {
    className: "btn-stack"
  }, React.createElement("button", {
    className: "btn ".concat(leftOpen ? "on" : ""),
    onClick: onToggleLeft,
    title: "show / hide the left systems panel"
  }, "\u25E7 systems"), React.createElement("button", {
    className: "btn ".concat(rightOpen ? "on" : ""),
    onClick: onToggleRight,
    title: "show / hide the right governance panel"
  }, "governance \u25E8")), React.createElement("div", {
    className: "btn-stack"
  }, React.createElement("button", {
    className: "btn ".concat(expandMiddle ? "on" : ""),
    onClick: onToggleExpandMiddle,
    title: "expand the centre view into any hidden sidebar space (left and/or right)"
  }, "\u2922 expand centre view"), React.createElement("button", {
    className: "btn ".concat(expandedText ? "on" : ""),
    onClick: onToggleText,
    title: "show / hide descriptive text"
  }, "\u2261 expanded text")), React.createElement("div", {
    className: "btn-stack"
  }, React.createElement("button", {
    className: "btn",
    onClick: onToggleLang,
    title: "switch process language (English / Nederlands) - content only"
  }, lang === "en" ? "NL" : "EN"), React.createElement("button", {
    className: "btn",
    onClick: onReset,
    title: "reset graph; replay from step 0"
  }, "\u27F2 reset")), React.createElement("button", {
    className: "btn",
    onClick: onPrev,
    disabled: cursor === 0
  }, "\u25C0 prev"), React.createElement("button", {
    className: "btn btn-primary",
    onClick: onNext,
    disabled: cursor >= total - 1
  }, "next \u25B6")));
}
window.ControlBar = ControlBar;
function LeftRail(_ref2) {
  var step = _ref2.step,
    cursor = _ref2.cursor,
    scenario = _ref2.scenario,
    expandedText = _ref2.expandedText,
    lang = _ref2.lang;
  var currentActor = step.actor;
  var panels = window.LEFT_RAIL && window.LEFT_RAIL[scenario] || window.LEFT_RAIL.deed;
  return React.createElement("aside", {
    className: "left-rail"
  }, panels.map(function (p, i) {
    return React.createElement(Panel, {
      key: i,
      org: p.org,
      title: p.title
    }, p.actors && p.actors.length > 0 && React.createElement("div", {
      className: "actor-row"
    }, React.createElement("span", {
      className: "lbl"
    }, "activator:"), p.actors.map(function (a) {
      return React.createElement("span", {
        key: a,
        className: "chip chip-actor ".concat(currentActor === a ? "on" : "")
      }, window.actorName(a, lang));
    })), p.grid ? React.createElement("div", {
      className: "knb-grid"
    }, p.systems.map(function (s) {
      return React.createElement(SubSystem, {
        key: s.src,
        inline: true,
        name: s.name,
        active: step.source === s.src
      });
    })) : p.systems.map(function (s) {
      return React.createElement(SubSystem, {
        key: s.src,
        name: s.name,
        active: step.source === s.src
      });
    }));
  }));
}
window.LeftRail = LeftRail;
function Panel(_ref3) {
  var org = _ref3.org,
    title = _ref3.title,
    children = _ref3.children;
  return React.createElement("div", {
    className: "org-panel org-".concat(org, " open")
  }, React.createElement("header", null, React.createElement("span", {
    className: "org-bar"
  }), React.createElement("div", {
    className: "org-title"
  }, React.createElement("div", {
    className: "t"
  }, title))), React.createElement("div", {
    className: "org-body"
  }, children));
}
function SubSystem(_ref4) {
  var name = _ref4.name,
    active = _ref4.active,
    inline = _ref4.inline;
  return React.createElement("div", {
    className: "subsys ".concat(active ? "active" : "", " ").concat(inline ? "inline" : "")
  }, React.createElement("div", {
    className: "subsys-head"
  }, React.createElement("span", {
    className: "subsys-name"
  }, name)));
}
function Center(_ref5) {
  var state = _ref5.state,
    step = _ref5.step,
    view = _ref5.view,
    setView = _ref5.setView,
    highlight = _ref5.highlight,
    selectedEntry = _ref5.selectedEntry,
    setSelectedEntry = _ref5.setSelectedEntry,
    cursor = _ref5.cursor,
    expandedText = _ref5.expandedText,
    lang = _ref5.lang;
  return React.createElement("main", {
    className: "center"
  }, React.createElement("div", {
    className: "center-title"
  }, "3 layers"), React.createElement(ThreeLayer, {
    state: state,
    highlight: highlight,
    setSelectedEntry: setSelectedEntry,
    selectedEntry: selectedEntry,
    expandedText: expandedText,
    lang: lang
  }), React.createElement("div", {
    className: "center-title"
  }, "Data views"), React.createElement(GraphView, {
    state: state,
    view: view,
    setView: setView,
    selectedEntry: selectedEntry,
    lang: lang
  }), React.createElement("div", {
    className: "center-title"
  }, "Audit view"), React.createElement(AuditUnit, {
    state: state,
    cursor: cursor,
    expandedText: expandedText
  }));
}
window.Center = Center;
function ThreeLayer(_ref6) {
  var state = _ref6.state,
    highlight = _ref6.highlight,
    setSelectedEntry = _ref6.setSelectedEntry,
    selectedEntry = _ref6.selectedEntry,
    expandedText = _ref6.expandedText,
    lang = _ref6.lang;
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    expandLogic = _useState2[0],
    setExpandLogic = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    expandInst = _useState4[0],
    setExpandInst = _useState4[1];
  var isPulsed = function isPulsed(id) {
    return (highlight === null || highlight === void 0 ? void 0 : highlight.kind) === "reg" && highlight.ids.includes(id);
  };
  return React.createElement("section", {
    className: "three-layer"
  }, React.createElement(LayerBand, {
    layer: "inst",
    label: "INSTITUTIONAL LAYER",
    count: state.inst.length,
    subtitle: "layer 3 \xB7 accountability facts",
    expandedText: expandedText
  }, state.inst.length === 0 && React.createElement(Empty, {
    label: "no institutional facts yet - Log|Inst Gate not yet triggered"
  }), state.inst.length > 0 && React.createElement("div", {
    className: "ltable"
  }, React.createElement("div", {
    className: "lhead lhead-inst"
  }, React.createElement("span", null), React.createElement("span", null, "id"), React.createElement("span", null, "fact"), React.createElement("span", null, "grounds"), React.createElement("span", null, "spec")), state.inst.map(function (i) {
    return React.createElement("div", {
      key: i.id,
      className: "lentry"
    }, React.createElement("div", {
      className: "lrow lrow-inst ".concat(selectedEntry === i.id ? "sel" : ""),
      onClick: function onClick() {
        return setSelectedEntry(selectedEntry === i.id ? null : i.id);
      }
    }, React.createElement("span", {
      className: "expander",
      onClick: function onClick(e) {
        e.stopPropagation();
        setExpandInst(function (s) {
          return _objectSpread(_objectSpread({}, s), {}, _defineProperty({}, i.id, !s[i.id]));
        });
      }
    }, expandInst[i.id] ? "▾" : "▸"), React.createElement("span", {
      className: "entry-id mono dim",
      title: "institutional entry id"
    }, i.id), React.createElement("span", {
      className: "fact-name"
    }, window.tFact(i.fact, lang)), React.createElement("span", {
      className: "meta"
    }, i.logics.length, " logic"), React.createElement("span", {
      className: "spec-ref",
      onClick: function onClick(e) {
        e.stopPropagation();
        setSelectedEntry(i.spec);
      }
    }, React.createElement("span", {
      className: "cdim"
    }, "rule: "), window.tSpec(i.spec, lang))), expandInst[i.id] && React.createElement("div", {
      className: "row-children"
    }, i.logics.map(function (lid) {
      var l = state.logic.find(function (x) {
        return x.id === lid;
      });
      return l ? React.createElement("div", {
        key: lid,
        className: "child-lrow child-logic",
        onClick: function onClick() {
          return setSelectedEntry(selectedEntry === l.id ? null : l.id);
        }
      }, React.createElement("span", {
        className: "entry-id mono dim"
      }, l.id), React.createElement("span", {
        className: "action-name"
      }, window.tAction(l.action, lang)), React.createElement("span", {
        className: "meta"
      }, window.actorName(l.activator, lang)), React.createElement("span", {
        className: "meta"
      }, l.members.length, " ev")) : null;
    })));
  }))), React.createElement(Gate, {
    n: 2,
    verdicts: state.verdicts.filter(function (v) {
      return v.gate === 2;
    })
  }), React.createElement(LayerBand, {
    layer: "logic",
    label: "LOGIC LAYER",
    count: state.logic.length,
    subtitle: "layer 2 \xB7 functional actions",
    expandedText: expandedText
  }, state.logic.length === 0 && React.createElement(Empty, {
    label: "no logic entries yet - Reg|Log Gate not yet triggered"
  }), state.logic.length > 0 && React.createElement("div", {
    className: "ltable"
  }, React.createElement("div", {
    className: "lhead lhead-logic"
  }, React.createElement("span", null), React.createElement("span", null, "id"), React.createElement("span", null, "action"), React.createElement("span", null, "activator"), React.createElement("span", null, "events"), React.createElement("span", null, "spec")), state.logic.map(function (l) {
    return React.createElement("div", {
      key: l.id,
      className: "lentry"
    }, React.createElement("div", {
      className: "lrow lrow-logic ".concat(selectedEntry === l.id ? "sel" : ""),
      onClick: function onClick() {
        return setSelectedEntry(selectedEntry === l.id ? null : l.id);
      }
    }, React.createElement("span", {
      className: "expander",
      onClick: function onClick(e) {
        e.stopPropagation();
        setExpandLogic(function (s) {
          return _objectSpread(_objectSpread({}, s), {}, _defineProperty({}, l.id, !s[l.id]));
        });
      }
    }, expandLogic[l.id] ? "▾" : "▸"), React.createElement("span", {
      className: "entry-id mono dim",
      title: "logic entry id"
    }, l.id), React.createElement("span", {
      className: "action-name"
    }, window.tAction(l.action, lang)), React.createElement("span", {
      className: "meta"
    }, React.createElement("span", {
      className: "actor-pill"
    }, window.actorName(l.activator, lang))), React.createElement("span", {
      className: "meta"
    }, l.members.length, " events"), React.createElement("span", {
      className: "spec-ref",
      onClick: function onClick(e) {
        e.stopPropagation();
        setSelectedEntry(l.spec);
      }
    }, React.createElement("span", {
      className: "cdim"
    }, "rule: "), window.tSpec(l.spec, lang))), expandLogic[l.id] && React.createElement("div", {
      className: "row-children"
    }, React.createElement("div", {
      className: "attr-block"
    }, React.createElement("span", {
      className: "attr-k"
    }, "trace_id"), React.createElement("span", {
      className: "attr-v"
    }, l.trace_id || "—"), React.createElement("span", {
      className: "attr-k"
    }, "target"), React.createElement("span", {
      className: "attr-v"
    }, l.target || "—"), React.createElement("span", {
      className: "attr-k"
    }, "status"), React.createElement("span", {
      className: "attr-v"
    }, l.status)), l.members.map(function (mid) {
      var r = state.reg.find(function (x) {
        return x.id === mid;
      });
      return r ? React.createElement("div", {
        key: mid,
        className: "child-lrow child-reg",
        onClick: function onClick() {
          return setSelectedEntry(selectedEntry === r.id ? null : r.id);
        }
      }, React.createElement("span", {
        className: "entry-id mono dim"
      }, r.id), React.createElement("span", {
        className: "src-tag src-".concat(ORG_OF_SRC[r.source] || "x")
      }, r.source), React.createElement("span", {
        className: "ev-type"
      }, window.tEvent(r.type, lang)), React.createElement("span", {
        className: "mono corr"
      }, r.correlation || React.createElement("span", {
        className: "missing"
      }, "\u26A0"))) : null;
    })));
  }))), React.createElement(Gate, {
    n: 1,
    verdicts: state.verdicts.filter(function (v) {
      return v.gate === 1;
    })
  }), React.createElement(LayerBand, {
    layer: "reg",
    label: "REGISTRATION LAYER",
    count: state.reg.length,
    subtitle: "layer 1 \xB7 raw events from registered sources",
    expandedText: expandedText
  }, state.reg.length === 0 && React.createElement(Empty, {
    label: "no events yet - click NEXT to begin"
  }), state.reg.length > 0 && React.createElement("div", {
    className: "ltable"
  }, React.createElement("div", {
    className: "lhead lhead-reg"
  }, React.createElement("span", null), React.createElement("span", null, "id"), React.createElement("span", null, "type"), React.createElement("span", null, "t"), React.createElement("span", null, "src"), React.createElement("span", null, "object"), React.createElement("span", null, "correlation_ref"), React.createElement("span", null, "activator")), state.reg.map(function (r) {
    var _r$attrs;
    return React.createElement("div", {
      key: r.id,
      className: "lrow lrow-reg ".concat(isPulsed(r.id) ? "pulse" : "", " ").concat(selectedEntry === r.id ? "sel" : "", " ").concat(r._tamper ? "tampered" : ""),
      onClick: function onClick() {
        return setSelectedEntry(selectedEntry === r.id ? null : r.id);
      }
    }, React.createElement("span", null), React.createElement("span", {
      className: "entry-id mono dim",
      title: "registration entry id"
    }, r.id), React.createElement("span", {
      className: "ev-type"
    }, window.tEvent(r.type, lang)), React.createElement("span", {
      className: "mono dim"
    }, r.t), React.createElement("span", {
      className: "src-tag src-".concat(ORG_OF_SRC[r.source] || "x")
    }, r.source), React.createElement("span", {
      className: "mono dim"
    }, window.tId(((_r$attrs = r.attrs) === null || _r$attrs === void 0 ? void 0 : _r$attrs.object) || "", lang)), React.createElement("span", {
      className: "mono corr"
    }, r.correlation || React.createElement("span", {
      className: "missing"
    }, "\u26A0 missing")), React.createElement("span", {
      className: "mono"
    }, r.actor ? window.actorName(r.actor, lang) : React.createElement("span", {
      className: "missing"
    }, "\u26A0 no activator")), function () {
      var a = r.attrs || {};
      var xl = a.cdr_nummer || a.vis_id || a.brp_ref || a.kad_ref || a.ech_id || a.cdr_log_uuid || a.crosslinks && a.crosslinks[0];
      return xl ? React.createElement("div", {
        className: "crosslinks"
      }, React.createElement("span", {
        className: "cdim"
      }, "\u21B3 crosslink:"), React.createElement("span", {
        className: "xlink"
      }, "\u2197 ", xl)) : null;
    }());
  }))));
}
function LayerBand(_ref7) {
  var layer = _ref7.layer,
    label = _ref7.label,
    count = _ref7.count,
    subtitle = _ref7.subtitle,
    children = _ref7.children,
    expandedText = _ref7.expandedText;
  var _useState5 = useState(true),
    _useState6 = _slicedToArray(_useState5, 2),
    open = _useState6[0],
    setOpen = _useState6[1];
  return React.createElement("div", {
    className: "band band-".concat(layer, " ").concat(open ? "open" : "collapsed")
  }, React.createElement("div", {
    className: "band-head",
    onClick: function onClick() {
      return setOpen(function (o) {
        return !o;
      });
    },
    title: "click to collapse / expand this layer"
  }, React.createElement("span", {
    className: "band-caret"
  }, open ? "▾" : "▸"), React.createElement("span", {
    className: "band-label"
  }, label), expandedText && React.createElement("span", {
    className: "band-sub"
  }, subtitle), React.createElement("span", {
    className: "band-count"
  }, count, " entries")), open && React.createElement("div", {
    className: "band-body"
  }, children));
}
function Gate(_ref8) {
  var n = _ref8.n,
    verdicts = _ref8.verdicts;
  var list = verdicts || [];
  var idle = list.length === 0;
  var failing = list.find(function (v) {
    return !v.passed;
  });
  var passed = !idle && !failing;
  var passingCount = list.filter(function (v) {
    return v.passed;
  }).length;
  var dir = n === 1 ? "Registration → Logic" : "Logic → Institutional";
  var condRange = n === 1 ? "C1–C5" : "C6–C9";
  var gateName = n === 1 ? "REG|LOG GATE" : "LOG|INST GATE";
  return React.createElement("div", {
    className: "gate ".concat(passed ? "gate-pass" : "", " ").concat(failing ? "gate-fail" : "", " ").concat(idle ? "gate-idle" : "")
  }, React.createElement("span", {
    className: "gate-label"
  }, gateName), React.createElement("span", {
    className: "gate-dir"
  }, dir), idle && React.createElement("span", {
    className: "gate-conds cdim"
  }, "conditions ", condRange, " \xB7 awaiting input"), failing && React.createElement(React.Fragment, null, React.createElement("span", {
    className: "gate-conds"
  }, Object.entries(failing.conditions).filter(function (_ref9) {
    var _ref0 = _slicedToArray(_ref9, 2),
      v = _ref0[1];
    return !v;
  }).map(function (_ref1) {
    var _ref10 = _slicedToArray(_ref1, 1),
      k = _ref10[0];
    return React.createElement("span", {
      key: k,
      className: "cond bad"
    }, k, " \u2717");
  })), failing.note && React.createElement("span", {
    className: "gate-note"
  }, failing.note)), passed && React.createElement(React.Fragment, null, React.createElement("span", {
    className: "gate-summary"
  }, "\u2713 ", condRange), React.createElement("span", {
    className: "gate-count"
  }, passingCount, " promoted")));
}
function Empty(_ref11) {
  var label = _ref11.label;
  return React.createElement("div", {
    className: "empty"
  }, "\u2504 ", label, " \u2504");
}
function GraphView(_ref12) {
  var state = _ref12.state,
    view = _ref12.view,
    setView = _ref12.setView,
    selectedEntry = _ref12.selectedEntry,
    lang = _ref12.lang;
  return React.createElement("section", {
    className: "graph-view"
  }, React.createElement("div", {
    className: "gv-tabs"
  }, [["layer", "Layer DAG"], ["objcentric", "Object-centric"], ["trail", "Trail"]].map(function (_ref13) {
    var _ref14 = _slicedToArray(_ref13, 2),
      id = _ref14[0],
      label = _ref14[1];
    return React.createElement("button", {
      key: id,
      className: "tab ".concat(view === id ? "on" : ""),
      onClick: function onClick() {
        return setView(id);
      }
    }, label);
  })), React.createElement("div", {
    className: "gv-body"
  }, view === "layer" && React.createElement(SvgLayerGraph, {
    state: state,
    lang: lang
  }), view === "objcentric" && React.createElement(ObjectCentricGraph, {
    state: state,
    selectedEntry: selectedEntry,
    lang: lang
  }), view === "trail" && React.createElement(SvgTrailGraph, {
    state: state,
    selectedEntry: selectedEntry,
    lang: lang
  })));
}
function trailFor(selectedId, state) {
  if (!selectedId) return null;
  var inst = state.inst.find(function (i) {
    return i.id === selectedId;
  });
  if (inst) {
    var logics = state.logic.filter(function (l) {
      return inst.logics.includes(l.id);
    });
    var regIds = new Set();
    logics.forEach(function (l) {
      return l.members.forEach(function (m) {
        return regIds.add(m);
      });
    });
    var regs = state.reg.filter(function (r) {
      return regIds.has(r.id);
    });
    return {
      inst: [inst],
      logic: logics,
      reg: regs
    };
  }
  var lg = state.logic.find(function (l) {
    return l.id === selectedId;
  });
  if (lg) {
    var insts = state.inst.filter(function (i) {
      return i.logics.includes(lg.id);
    });
    var _regs = state.reg.filter(function (r) {
      return lg.members.includes(r.id);
    });
    return {
      inst: insts,
      logic: [lg],
      reg: _regs
    };
  }
  return null;
}
function SvgLayerGraph(_ref15) {
  var state = _ref15.state,
    lang = _ref15.lang;
  var HEADER = 16;
  var NODE_H = 26;
  var BAND_H = 72;
  var BAND_GAP = 22;
  var GUTTER = 12;
  var CHAR_W = 6.6;
  var NODE_PAD = 12;
  var MIN_NODE_W = 56;
  var yInstHead = 0;
  var yInstNode = HEADER + 8;
  var yLogicHead = BAND_H + BAND_GAP;
  var yLogicNode = yLogicHead + HEADER + 8;
  var yRegHead = (BAND_H + BAND_GAP) * 2;
  var yRegNode = yRegHead + HEADER + 8;
  var totalH = yRegHead + BAND_H + 4;
  var regs = state.reg;
  var logics = state.logic;
  var insts = state.inst;
  var widthFor = function widthFor(label) {
    return Math.max(MIN_NODE_W, Math.round(label.length * CHAR_W + NODE_PAD * 2));
  };
  var regW = regs.map(function (r) {
    return widthFor(r.source);
  });
  var logW = logics.map(function (l) {
    return widthFor(window.tAction(l.action, lang));
  });
  var insW = insts.map(function (it) {
    return widthFor(window.tFact(it.fact, lang));
  });
  var packPositions = function packPositions(widths, startX, gap) {
    var xs = [];
    var cursor = startX;
    var _iterator = _createForOfIteratorHelper(widths),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var w = _step.value;
        xs.push(cursor + w / 2);
        cursor += w + gap;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return xs;
  };
  var startX = GUTTER + 92;
  var xR = packPositions(regW, startX, 6);
  var xL = packPositions(logW, startX, 22);
  var xI = packPositions(insW, startX, 32);
  var farthestX = Math.max.apply(Math, [700].concat(_toConsumableArray(regs.map(function (_, i) {
    return xR[i] + regW[i] / 2;
  })), _toConsumableArray(logics.map(function (_, i) {
    return xL[i] + logW[i] / 2;
  })), _toConsumableArray(insts.map(function (_, i) {
    return xI[i] + insW[i] / 2;
  })))) + GUTTER;
  var W = farthestX;
  return React.createElement("svg", {
    viewBox: "0 0 ".concat(W, " ").concat(totalH),
    width: W,
    height: totalH,
    className: "graph-svg",
    preserveAspectRatio: "xMinYMin meet"
  }, React.createElement("defs", null, React.createElement("marker", {
    id: "arr",
    markerWidth: "6",
    markerHeight: "6",
    refX: "5",
    refY: "3",
    orient: "auto"
  }, React.createElement("path", {
    d: "M0,0 L6,3 L0,6 z",
    fill: "var(--knb-mid)"
  }))), React.createElement("rect", {
    x: "0",
    y: yInstHead,
    width: W,
    height: BAND_H,
    className: "g-band g-band-inst"
  }), React.createElement("rect", {
    x: "0",
    y: yLogicHead,
    width: W,
    height: BAND_H,
    className: "g-band g-band-logic"
  }), React.createElement("rect", {
    x: "0",
    y: yRegHead,
    width: W,
    height: BAND_H,
    className: "g-band g-band-reg"
  }), React.createElement("text", {
    x: GUTTER,
    y: yInstHead + 11,
    className: "g-band-lbl"
  }, "INSTITUTIONAL"), React.createElement("text", {
    x: GUTTER,
    y: yLogicHead + 11,
    className: "g-band-lbl"
  }, "LOGIC"), React.createElement("text", {
    x: GUTTER,
    y: yRegHead + 11,
    className: "g-band-lbl"
  }, "REGISTRATION"), logics.map(function (l, i) {
    return l.members.slice(0, 5).map(function (mid, j) {
      var ridx = regs.findIndex(function (r) {
        return r.id === mid;
      });
      if (ridx < 0) return null;
      return React.createElement("line", {
        key: "".concat(l.id, "-").concat(j),
        x1: xR[ridx],
        y1: yRegNode,
        x2: xL[i],
        y2: yLogicNode + NODE_H,
        className: "g-edge",
        markerEnd: "url(#arr)"
      });
    });
  }), insts.map(function (it, i) {
    return it.logics.map(function (lid, j) {
      var lidx = logics.findIndex(function (l) {
        return l.id === lid;
      });
      if (lidx < 0) return null;
      return React.createElement("line", {
        key: "".concat(it.id, "-").concat(j),
        x1: xL[lidx],
        y1: yLogicNode,
        x2: xI[i],
        y2: yInstNode + NODE_H,
        className: "g-edge",
        markerEnd: "url(#arr)"
      });
    });
  }), regs.map(function (r, i) {
    return React.createElement("g", {
      key: r.id
    }, React.createElement("rect", {
      x: xR[i] - regW[i] / 2,
      y: yRegNode,
      width: regW[i],
      height: NODE_H,
      rx: "3",
      className: "g-node g-reg ".concat(r._tamper ? "g-tamper" : "")
    }), React.createElement("text", {
      x: xR[i],
      y: yRegNode + NODE_H / 2 + 3,
      className: "g-node-lbl"
    }, r.source));
  }), logics.map(function (l, i) {
    return React.createElement("g", {
      key: l.id
    }, React.createElement("rect", {
      x: xL[i] - logW[i] / 2,
      y: yLogicNode,
      width: logW[i],
      height: NODE_H,
      rx: "3",
      className: "g-node g-logic"
    }), React.createElement("text", {
      x: xL[i],
      y: yLogicNode + NODE_H / 2 + 3,
      className: "g-node-lbl"
    }, window.tAction(l.action, lang)));
  }), insts.map(function (it, i) {
    return React.createElement("g", {
      key: it.id
    }, React.createElement("rect", {
      x: xI[i] - insW[i] / 2,
      y: yInstNode,
      width: insW[i],
      height: NODE_H,
      rx: "3",
      className: "g-node g-inst"
    }), React.createElement("text", {
      x: xI[i],
      y: yInstNode + NODE_H / 2 + 3,
      className: "g-node-lbl"
    }, window.tFact(it.fact, lang)));
  }));
}
function stateToObjectCentricElements(state, lang) {
  var nodes = [];
  var edges = [];
  var seen = new Set();
  var addNode = function addNode(n) {
    if (!seen.has(n.data.id)) {
      nodes.push(n);
      seen.add(n.data.id);
    }
  };
  state.reg.forEach(function (r) {
    addNode({
      data: {
        id: r.id,
        label: window.tEvent(r.type, lang),
        kind: "event",
        source: r.source,
        tamper: r._tamper || ""
      }
    });
    var sysId = "sys:".concat(r.source);
    addNode({
      data: {
        id: sysId,
        label: r.source.toUpperCase(),
        kind: "system"
      }
    });
    edges.push({
      data: {
        id: "".concat(r.id, ">sys"),
        source: r.id,
        target: sysId,
        label: "originates_from",
        kind: "originates"
      }
    });
    if (r.actor) {
      var actorId = "act:".concat(r.actor);
      var actorLabel = window.actorName(r.actor, lang);
      addNode({
        data: {
          id: actorId,
          label: actorLabel,
          kind: "actor"
        }
      });
      edges.push({
        data: {
          id: "".concat(r.id, ">act"),
          source: r.id,
          target: actorId,
          label: "performed_by",
          kind: "performed"
        }
      });
    }
    if (r.correlation) {
      var parts = r.correlation.split("/");
      var dossierId = "dos:".concat(parts[0]);
      addNode({
        data: {
          id: dossierId,
          label: parts[0],
          kind: "dossier"
        }
      });
      var target = dossierId;
      if (parts.length > 1) {
        var zaakId = "zaak:".concat(r.correlation);
        addNode({
          data: {
            id: zaakId,
            label: parts.slice(1).join("/"),
            kind: "zaak"
          }
        });
        edges.push({
          data: {
            id: "".concat(zaakId, ">dos"),
            source: zaakId,
            target: dossierId,
            label: "child_of",
            kind: "child"
          }
        });
        target = zaakId;
      }
      edges.push({
        data: {
          id: "".concat(r.id, ">conc"),
          source: r.id,
          target: target,
          label: "concerns",
          kind: "concerns"
        }
      });
    }
  });
  state.logic.forEach(function (l) {
    addNode({
      data: {
        id: l.id,
        label: window.tAction(l.action, lang),
        kind: "action"
      }
    });
    l.members.forEach(function (mid) {
      edges.push({
        data: {
          id: "".concat(l.id, "<").concat(mid),
          source: mid,
          target: l.id,
          label: "constitutes",
          kind: "constitutes"
        }
      });
    });
  });
  state.inst.forEach(function (i) {
    addNode({
      data: {
        id: i.id,
        label: window.tFact(i.fact, lang),
        kind: "fact"
      }
    });
    i.logics.forEach(function (lid) {
      edges.push({
        data: {
          id: "".concat(i.id, "<").concat(lid),
          source: lid,
          target: i.id,
          label: "represents",
          kind: "represents"
        }
      });
    });
  });
  state.traces.forEach(function (t) {
    (t.external || []).forEach(function (ext) {
      var extId = "xl:".concat(ext);
      addNode({
        data: {
          id: extId,
          label: ext,
          kind: "external"
        }
      });
      edges.push({
        data: {
          id: "".concat(t.id, ">").concat(ext),
          source: t.id,
          target: extId,
          label: "crosslink",
          kind: "crosslink"
        }
      });
    });
  });
  var validEdges = edges.filter(function (e) {
    return seen.has(e.data.source) && seen.has(e.data.target);
  });
  return {
    nodes: nodes,
    edges: validEdges
  };
}
var OBJCENTRIC_STYLE = [{
  selector: "node",
  style: {
    "label": "data(label)",
    "font-family": "JetBrains Mono, monospace",
    "font-size": 10,
    "text-valign": "center",
    "text-halign": "center",
    "color": "#ffffff",
    "border-width": 1,
    "border-color": "#000",
    "width": "label",
    "height": 28,
    "padding": "8px",
    "shape": "round-rectangle",
    "text-wrap": "wrap",
    "text-max-width": 160
  }
}, {
  selector: 'node[kind = "event"]',
  style: {
    "background-color": "#444444",
    "border-color": "#444444",
    "color": "#ffffff",
    "shape": "ellipse"
  }
}, {
  selector: 'node[tamper != ""]',
  style: {
    "background-color": "#000000",
    "border-color": "#000000"
  }
}, {
  selector: 'node[kind = "action"]',
  style: {
    "background-color": "#A13775",
    "border-color": "#A13775",
    "color": "#ffffff",
    "shape": "round-rectangle",
    "font-weight": 600
  }
}, {
  selector: 'node[kind = "fact"]',
  style: {
    "background-color": "#551D3E",
    "border-color": "#551D3E",
    "color": "#ffffff",
    "shape": "hexagon",
    "font-weight": 700,
    "height": 38,
    "padding": "12px"
  }
}, {
  selector: 'node[kind = "actor"]',
  style: {
    "background-color": "#ffffff",
    "border-color": "#A13775",
    "color": "#551D3E",
    "shape": "round-tag"
  }
}, {
  selector: 'node[kind = "system"]',
  style: {
    "background-color": "#E6E6E6",
    "border-color": "#999999",
    "color": "#000000",
    "shape": "rectangle"
  }
}, {
  selector: 'node[kind = "dossier"]',
  style: {
    "background-color": "#ffffff",
    "border-color": "#A13775",
    "color": "#551D3E",
    "shape": "rectangle",
    "border-width": 2
  }
}, {
  selector: 'node[kind = "zaak"]',
  style: {
    "background-color": "#ffffff",
    "border-color": "#A13775",
    "color": "#551D3E",
    "shape": "rectangle"
  }
}, {
  selector: 'node[kind = "external"]',
  style: {
    "background-color": "#ffffff",
    "border-color": "#A13775",
    "border-style": "dashed",
    "color": "#551D3E",
    "shape": "rectangle",
    "font-style": "italic"
  }
}, {
  selector: "edge",
  style: {
    "width": 1,
    "curve-style": "bezier",
    "line-color": "#A13775",
    "target-arrow-color": "#A13775",
    "target-arrow-shape": "triangle",
    "arrow-scale": 0.9,
    "opacity": 0.7,
    "label": "data(label)",
    "font-family": "JetBrains Mono, monospace",
    "font-size": 8,
    "color": "#551D3E",
    "text-background-color": "#ffffff",
    "text-background-padding": 2,
    "text-background-opacity": 0.8,
    "text-rotation": "autorotate"
  }
}, {
  selector: 'edge[kind = "constitutes"]',
  style: {
    "line-color": "#A13775",
    "target-arrow-color": "#A13775",
    "width": 2
  }
}, {
  selector: 'edge[kind = "represents"]',
  style: {
    "line-color": "#551D3E",
    "target-arrow-color": "#551D3E",
    "width": 2
  }
}, {
  selector: 'edge[kind = "performed"]',
  style: {
    "line-style": "dashed",
    "opacity": 0.55
  }
}, {
  selector: 'edge[kind = "originates"]',
  style: {
    "line-style": "dashed",
    "opacity": 0.4,
    "line-color": "#999999",
    "target-arrow-color": "#999999",
    "color": "#999999"
  }
}, {
  selector: 'edge[kind = "concerns"]',
  style: {
    "line-style": "dotted",
    "opacity": 0.55
  }
}, {
  selector: 'edge[kind = "child"]',
  style: {
    "line-color": "#551D3E",
    "target-arrow-color": "#551D3E",
    "opacity": 0.8
  }
}, {
  selector: 'edge[kind = "crosslink"]',
  style: {
    "line-style": "dashed",
    "line-color": "#A13775",
    "target-arrow-color": "#A13775",
    "opacity": 0.8
  }
}, {
  selector: "node.selected",
  style: {
    "border-width": 3,
    "border-color": "#000000"
  }
}, {
  selector: ".faded",
  style: {
    "opacity": 0.15
  }
}];
function ObjectCentricGraph(_ref16) {
  var state = _ref16.state,
    selectedEntry = _ref16.selectedEntry,
    _ref16$height = _ref16.height,
    height = _ref16$height === void 0 ? 640 : _ref16$height,
    lang = _ref16.lang;
  var containerRef = useRef(null);
  var cyRef = useRef(null);
  useEffect(function () {
    if (!containerRef.current || cyRef.current) return;
    if (typeof cytoscape !== "function") return;
    var cy = cytoscape({
      container: containerRef.current,
      elements: [],
      style: OBJCENTRIC_STYLE,
      wheelSensitivity: 0.2,
      minZoom: 0.2,
      maxZoom: 2.5
    });
    cyRef.current = cy;
    return function () {
      try {
        cy.destroy();
      } catch (_) {}
      cyRef.current = null;
    };
  }, []);
  useEffect(function () {
    var cy = cyRef.current;
    if (!cy) return;
    var _stateToObjectCentric = stateToObjectCentricElements(state, lang),
      nodes = _stateToObjectCentric.nodes,
      edges = _stateToObjectCentric.edges;
    cy.batch(function () {
      cy.elements().remove();
      cy.add(nodes);
      cy.add(edges);
    });
    var layout = cy.layout({
      name: "dagre",
      rankDir: "BT",
      rankSep: 70,
      nodeSep: 28,
      edgeSep: 12,
      ranker: "tight-tree",
      fit: true,
      padding: 20
    });
    layout.run();
  }, [state, lang]);
  useEffect(function () {
    var cy = cyRef.current;
    if (!cy) return;
    cy.elements().removeClass("selected").removeClass("faded");
    if (!selectedEntry) return;
    var target = cy.getElementById(selectedEntry);
    if (target.length === 0) return;
    var neighborhood = target.closedNeighborhood();
    cy.elements().difference(neighborhood).addClass("faded");
    target.addClass("selected");
  }, [selectedEntry, state]);
  var empty = state.reg.length === 0;
  return React.createElement("div", {
    className: "objcentric-wrap"
  }, React.createElement("div", {
    className: "objcentric-legend"
  }, React.createElement("div", {
    className: "legend-group"
  }, React.createElement("span", {
    className: "legend-head"
  }, "Occurrent"), React.createElement("span", {
    className: "legend-item"
  }, React.createElement("svg", {
    className: "sw",
    viewBox: "0 0 13 13"
  }, React.createElement("circle", {
    cx: "6.5",
    cy: "6.5",
    r: "5.5",
    fill: "#444444"
  })), " Event ", React.createElement("span", {
    className: "cdim"
  }, "\xB7 Registration")), React.createElement("span", {
    className: "legend-item"
  }, React.createElement("svg", {
    className: "sw",
    viewBox: "0 0 13 13"
  }, React.createElement("rect", {
    x: "1",
    y: "1",
    width: "11",
    height: "11",
    rx: "2.5",
    fill: "#A13775"
  })), " Action ", React.createElement("span", {
    className: "cdim"
  }, "\xB7 Logic")), React.createElement("span", {
    className: "legend-item"
  }, React.createElement("svg", {
    className: "sw",
    viewBox: "0 0 13 13"
  }, React.createElement("polygon", {
    points: "3.5,1 9.5,1 12.5,6.5 9.5,12 3.5,12 0.5,6.5",
    fill: "#551D3E"
  })), " Fact ", React.createElement("span", {
    className: "cdim"
  }, "\xB7 Institutional"))), React.createElement("div", {
    className: "legend-group"
  }, React.createElement("span", {
    className: "legend-head"
  }, "Continuant"), React.createElement("span", {
    className: "legend-item"
  }, React.createElement("svg", {
    className: "sw",
    viewBox: "0 0 13 13"
  }, React.createElement("polygon", {
    points: "1,3 8.5,3 11.5,6.5 8.5,10 1,10",
    fill: "#ffffff",
    stroke: "#A13775",
    strokeWidth: "1.3"
  })), " Activator ", React.createElement("span", {
    className: "cdim"
  })), React.createElement("span", {
    className: "legend-item"
  }, React.createElement("svg", {
    className: "sw",
    viewBox: "0 0 13 13"
  }, React.createElement("rect", {
    x: "1",
    y: "3",
    width: "10.5",
    height: "7",
    fill: "#E6E6E6",
    stroke: "#999999",
    strokeWidth: "1.3"
  })), " System ", React.createElement("span", {
    className: "cdim"
  })), React.createElement("span", {
    className: "legend-item"
  }, React.createElement("svg", {
    className: "sw",
    viewBox: "0 0 13 13"
  }, React.createElement("rect", {
    x: "1",
    y: "3",
    width: "10.5",
    height: "7",
    fill: "#ffffff",
    stroke: "#A13775",
    strokeWidth: "1.3"
  })), " Record ", React.createElement("span", {
    className: "cdim"
  })))), React.createElement("div", {
    ref: containerRef,
    className: "objcentric-canvas",
    style: {
      height: height,
      position: "relative"
    }
  }, empty && React.createElement("div", {
    className: "objcentric-empty"
  }, "No events yet - click NEXT to begin the walkthrough.")));
}
function SvgTrailGraph(_ref17) {
  var state = _ref17.state,
    selectedEntry = _ref17.selectedEntry,
    lang = _ref17.lang;
  var trail = trailFor(selectedEntry, state);
  if (!trail) {
    return React.createElement("div", {
      className: "graph-placeholder"
    }, React.createElement("div", {
      className: "ph-label"
    }, "Trail view - single Institutional fact, end-to-end"), React.createElement("div", {
      className: "ph-text"
    }, "Click an Institutional fact or a Logic entry."));
  }
  var regIds = new Set(trail.reg.map(function (r) {
    return r.id;
  }));
  var filteredTraces = (state.traces || []).filter(function (t) {
    return regIds.has(t.id);
  });
  var filteredState = {
    reg: trail.reg,
    logic: trail.logic,
    inst: trail.inst,
    verdicts: [],
    traces: filteredTraces,
    changes: [],
    auditCore: []
  };
  var label = trail.inst[0] && window.tFact(trail.inst[0].fact, lang) || trail.logic[0] && window.tAction(trail.logic[0].action, lang) || selectedEntry;
  return React.createElement("div", null, React.createElement("div", {
    className: "trail-head"
  }, React.createElement("span", {
    className: "trail-lbl"
  }, "trail"), React.createElement("span", {
    className: "trail-target"
  }, label), React.createElement("span", {
    className: "trail-meta"
  }, trail.inst.length, " institutional \xB7 ", trail.logic.length, " logic \xB7 ", trail.reg.length, " registration \xB7 ", filteredTraces.length, " crosslinks")), React.createElement(ObjectCentricGraph, {
    state: filteredState,
    selectedEntry: null,
    height: 380,
    lang: lang
  }));
}
function AuditUnit(_ref18) {
  var state = _ref18.state,
    cursor = _ref18.cursor,
    expandedText = _ref18.expandedText;
  return React.createElement("section", {
    className: "audit-unit"
  }, React.createElement("header", null, React.createElement("span", {
    className: "au-title"
  }, "Audit logging unit \xB7 Notary Office")), React.createElement("div", {
    className: "au-grid"
  }, React.createElement("div", {
    className: "au-store"
  }, React.createElement("div", {
    className: "au-store-head"
  }, React.createElement("span", {
    className: "au-store-name"
  }, "audit log core"), expandedText && React.createElement("span", {
    className: "au-store-sub"
  }, "may be modified under strict governance")), React.createElement("div", {
    className: "au-list"
  }, state.auditCore.length === 0 && React.createElement("div", {
    className: "au-empty"
  }, "no entries yet - the audit log core fills as facts are recorded"), state.auditCore.slice(-8).map(function (c) {
    return React.createElement("div", {
      key: c.id,
      className: "au-row ".concat(c.v > 1 ? "changed" : "")
    }, React.createElement("span", {
      className: "au-id"
    }, c.id), React.createElement("span", {
      className: "au-v"
    }, "v", c.v), React.createElement("span", {
      className: "au-lbl"
    }, c.label), c.v > 1 && React.createElement("span", {
      className: "au-tag"
    }, "REDACTED"));
  }))), React.createElement("div", {
    className: "au-arrow"
  }, "\u27F6"), React.createElement("div", {
    className: "au-store immutable"
  }, React.createElement("div", {
    className: "au-store-head"
  }, React.createElement("span", {
    className: "au-store-name"
  }, "immutable change log")), React.createElement("div", {
    className: "au-list"
  }, state.changes.length === 0 && React.createElement("div", {
    className: "au-empty"
  }, "no changes yet - every alteration to the core appears here, signed and dated"), state.changes.map(function (c) {
    return React.createElement("div", {
      key: c.id,
      className: "au-row"
    }, React.createElement("span", {
      className: "au-id"
    }, c.id), React.createElement("span", {
      className: "au-when"
    }, c.when), React.createElement("span", {
      className: "au-lbl"
    }, c.target, " \xB7 ", c.reason), React.createElement("div", {
      className: "au-hashes"
    }, React.createElement("span", {
      className: "au-h"
    }, c.oldHash), React.createElement("span", {
      className: "au-h-arrow"
    }, "\u2192"), React.createElement("span", {
      className: "au-h"
    }, c.newHash), React.createElement("span", {
      className: "au-by"
    }, "by ", c.who)));
  })))));
}
function RightRail(_ref19) {
  var state = _ref19.state,
    step = _ref19.step,
    scenario = _ref19.scenario,
    selectedEntry = _ref19.selectedEntry,
    expandedText = _ref19.expandedText,
    lang = _ref19.lang;
  var _useState7 = useState("specs"),
    _useState8 = _slicedToArray(_useState7, 2),
    section = _useState8[0],
    setSection = _useState8[1];
  var selectedSpec = window.SPECS.find(function (s) {
    return s.id === selectedEntry;
  });
  return React.createElement("aside", {
    className: "right-rail"
  }, React.createElement("div", {
    className: "rr-tabs"
  }, [["specs", "specs"], ["schemas", "schemas"], ["registries", "registries"]].map(function (_ref20) {
    var _ref21 = _slicedToArray(_ref20, 2),
      id = _ref21[0],
      label = _ref21[1];
    return React.createElement("button", {
      key: id,
      className: "rr-tab ".concat(section === id ? "on" : ""),
      onClick: function onClick() {
        return setSection(id);
      }
    }, label);
  })), React.createElement("div", {
    className: "rr-body"
  }, section === "specs" && React.createElement(SpecsView, {
    highlight: selectedSpec,
    scenario: scenario,
    expandedText: expandedText,
    lang: lang
  }), section === "schemas" && React.createElement(SchemasView, null), section === "registries" && React.createElement(RegistriesView, {
    state: state
  })));
}
window.RightRail = RightRail;
function SpecsView(_ref22) {
  var highlight = _ref22.highlight,
    scenario = _ref22.scenario,
    expandedText = _ref22.expandedText,
    lang = _ref22.lang;
  var allow = window.SCENARIOS[scenario] && window.SCENARIOS[scenario].specs || null;
  var specs = allow ? window.SPECS.filter(function (s) {
    return allow.includes(s.id);
  }) : window.SPECS;
  return React.createElement("div", {
    className: "specs-list"
  }, specs.map(function (s) {
    return React.createElement("div", {
      key: s.id,
      className: "spec-card ".concat((highlight === null || highlight === void 0 ? void 0 : highlight.id) === s.id ? "hl" : "")
    }, React.createElement("div", {
      className: "sc-head"
    }, React.createElement("span", {
      className: "sc-id"
    }, window.tSpec(s.id, lang)), React.createElement("span", {
      className: "sc-type"
    }, s.type)), React.createElement("div", {
      className: "sc-grid"
    }, React.createElement("span", {
      className: "k"
    }, "party"), React.createElement("span", {
      className: "v"
    }, s.party), React.createElement("span", {
      className: "k"
    }, "domain"), React.createElement("span", {
      className: "v"
    }, s.domain), React.createElement("span", {
      className: "k"
    }, "retention"), React.createElement("span", {
      className: "v"
    }, s.retention), React.createElement("span", {
      className: "k"
    }, "access"), React.createElement("span", {
      className: "v"
    }, s.access)), React.createElement("div", {
      className: "sc-scope"
    }, React.createElement("div", {
      className: "sc-label"
    }, "scope \xB7 events"), React.createElement("div", {
      className: "sc-chips"
    }, s.scope.map(function (x) {
      return React.createElement("span", {
        key: x,
        className: "chip-s"
      }, window.tEvent(x, lang));
    }))), React.createElement("div", {
      className: "sc-scope"
    }, React.createElement("div", {
      className: "sc-label"
    }, "scope \xB7 actions"), React.createElement("div", {
      className: "sc-chips"
    }, s.actions.map(function (x) {
      return React.createElement("span", {
        key: x,
        className: "chip-s"
      }, window.tAction(x, lang));
    }))), s.facts.length > 0 && React.createElement("div", {
      className: "sc-scope"
    }, React.createElement("div", {
      className: "sc-label"
    }, "scope \xB7 institutional facts"), React.createElement("div", {
      className: "sc-chips"
    }, s.facts.map(function (x) {
      return React.createElement("span", {
        key: x,
        className: "chip-s"
      }, window.tFact(x, lang));
    }))), React.createElement("div", {
      className: "sc-scope"
    }, React.createElement("div", {
      className: "sc-label"
    }, "schemas referenced"), React.createElement("div", {
      className: "sc-chips"
    }, s.schemas.map(function (x) {
      return React.createElement("span", {
        key: x,
        className: "chip-s mono"
      }, x);
    }))), expandedText && React.createElement("div", {
      className: "sc-prose"
    }, s.description));
  }));
}
function SchemasView() {
  return React.createElement("div", {
    className: "schemas"
  }, React.createElement("div", {
    className: "tree"
  }, React.createElement("details", {
    open: true
  }, React.createElement("summary", null, "base.registration"), React.createElement("div", {
    className: "schema-fields"
  }, React.createElement(Field, {
    name: "event_id",
    t: "UUID",
    req: true
  }), React.createElement(Field, {
    name: "event_type",
    t: "string",
    req: true
  }), React.createElement(Field, {
    name: "source_id",
    t: "ref(LogSource)",
    req: true
  }), React.createElement(Field, {
    name: "timestamp",
    t: "datetime (sync ref)",
    req: true
  }), React.createElement(Field, {
    name: "activator",
    t: "ref(Actor)",
    req: true
  }), React.createElement(Field, {
    name: "correlation_ref",
    t: "string",
    req: true
  }), React.createElement(Field, {
    name: "severity",
    t: "enum(2..6 \xB7 RFC 5424)",
    req: true
  }), React.createElement(Field, {
    name: "payload",
    t: "object"
  }))), React.createElement("details", null, React.createElement("summary", null, "base.logic"), React.createElement("div", {
    className: "schema-fields"
  }, React.createElement(Field, {
    name: "action_id",
    t: "UUID",
    req: true
  }), React.createElement(Field, {
    name: "action_type",
    t: "string",
    req: true
  }), React.createElement(Field, {
    name: "constitutes",
    t: "ref(Registration)[]",
    req: true
  }), React.createElement(Field, {
    name: "activator",
    t: "ref(Actor)",
    req: true
  }), React.createElement(Field, {
    name: "spec_ref",
    t: "ref(Specification)",
    req: true
  }))), React.createElement("details", null, React.createElement("summary", null, "base.institutional"), React.createElement("div", {
    className: "schema-fields"
  }, React.createElement(Field, {
    name: "fact_id",
    t: "UUID",
    req: true
  }), React.createElement(Field, {
    name: "fact_type",
    t: "string",
    req: true
  }), React.createElement(Field, {
    name: "represents",
    t: "ref(Logic)[]",
    req: true
  }), React.createElement(Field, {
    name: "spec_ref",
    t: "ref(Specification)",
    req: true
  }), React.createElement(Field, {
    name: "retention_class",
    t: "enum",
    req: true
  }))), React.createElement("details", null, React.createElement("summary", null, "ext.cdr.registration"), React.createElement("div", {
    className: "schema-fields"
  }, React.createElement(Field, {
    name: "code",
    t: "int(1..281)",
    req: true
  }), React.createElement(Field, {
    name: "cdr_log_uuid",
    t: "UUID"
  }), React.createElement(Field, {
    name: "cdr_nummer",
    t: "string"
  }), React.createElement(Field, {
    name: "severity_derived",
    t: "from(code)"
  }))), React.createElement("details", null, React.createElement("summary", null, "ext.vis.registration"), React.createElement("div", {
    className: "schema-fields"
  }, React.createElement(Field, {
    name: "vis_id",
    t: "string",
    req: true
  }), React.createElement(Field, {
    name: "result",
    t: "enum(valid|blocked|lost|unknown)",
    req: true
  }), React.createElement(Field, {
    name: "document_type",
    t: "enum",
    req: true
  }))), React.createElement("details", null, React.createElement("summary", null, "ext.nsl.registration"), React.createElement("div", {
    className: "schema-fields"
  }, React.createElement(Field, {
    name: "dossier_id",
    t: "string",
    req: true
  }), React.createElement(Field, {
    name: "zaak_id",
    t: "string"
  }), React.createElement(Field, {
    name: "cert_id",
    t: "string (PKIOverheid)"
  }), React.createElement(Field, {
    name: "cert_issuer",
    t: "string"
  })))));
}
function Field(_ref23) {
  var name = _ref23.name,
    t = _ref23.t,
    req = _ref23.req;
  return React.createElement("div", {
    className: "field-row"
  }, React.createElement("span", {
    className: "fn"
  }, name), React.createElement("span", {
    className: "ft"
  }, t), req && React.createElement("span", {
    className: "freq"
  }, "req"));
}
function RegistriesView(_ref24) {
  var state = _ref24.state;
  return React.createElement("div", {
    className: "registries"
  }, React.createElement("div", {
    className: "reg-block"
  }, React.createElement("div", {
    className: "rb-head"
  }, "log source registry"), React.createElement("div", {
    className: "reg-mini-tbl"
  }, React.createElement("div", {
    className: "rmt-head"
  }, React.createElement("span", null, "source"), React.createElement("span", null, "party")), window.LOG_SOURCES.map(function (s) {
    return React.createElement("div", {
      key: s.id,
      className: "rmt-row"
    }, React.createElement("span", {
      className: "src-tag src-".concat(ORG_OF_SRC[s.id] || "x")
    }, s.id), React.createElement("span", {
      className: "dim"
    }, s.party));
  }))), React.createElement("div", {
    className: "reg-block"
  }, React.createElement("div", {
    className: "rb-head"
  }, "trace identifier store \xB7 live"), state.traces.length === 0 && React.createElement("div", {
    className: "cdim"
  }, "no cross-system traces yet"), state.traces.length > 0 && React.createElement("div", {
    className: "reg-mini-tbl"
  }, React.createElement("div", {
    className: "rmt-head"
  }, React.createElement("span", null, "local"), React.createElement("span", null, "\u2197 external")), state.traces.map(function (t) {
    return React.createElement("div", {
      key: t.id,
      className: "rmt-row"
    }, React.createElement("span", {
      className: "mono"
    }, t.local), React.createElement("span", {
      className: "mono"
    }, t.external.join(" · ")));
  }))));
}