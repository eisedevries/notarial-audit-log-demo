/* eslint-disable */
// UI components: ControlBar, LeftRail (org panels), Center, RightRail

// ---------- ErrorBoundary ----------
// Without this, any exception thrown during render unmounts the whole React
// tree and leaves a blank white page. This catches the error, shows it (with
// the component stack), and auto-clears when `resetKey` changes (e.g. on
// next/prev, view switch, or a different selection) so the UI recovers.
class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null, info: null, key: props.resetKey }; }
  static getDerivedStateFromError(error) { return { error }; }
  static getDerivedStateFromProps(props, state) {
    if (props.resetKey !== state.key) return { key: props.resetKey, error: null, info: null };
    return null;
  }
  componentDidCatch(error, info) { this.setState({ info }); console.error("ErrorBoundary caught:", error, info?.componentStack); }
  render() {
    if (this.state.error) {
      return (
        <div className="error-boundary">
          <div className="eb-title">⚠ Something threw while rendering this view</div>
          <div className="eb-msg">{String(this.state.error?.message || this.state.error)}</div>
          {this.state.info && <pre className="eb-stack">{this.state.info.componentStack}</pre>}
          <div className="eb-hint">Navigate (next / prev), switch view, or change selection to recover. Details are also in the browser console.</div>
        </div>
      );
    }
    return this.props.children;
  }
}
window.ErrorBoundary = ErrorBoundary;

// ---------- ControlBar ----------
function ControlBar({ step, cursor, total, scenario, onPrev, onNext, onReset, onScenario,
  leftOpen, rightOpen, onToggleLeft, onToggleRight, expandedText, onToggleText,
  expandMiddle, onToggleExpandMiddle, lang, onToggleLang }) {
  // Process content (title + narration) follows the language switch; UI chrome stays English.
  const stepTitle = lang === "nl" ? (step.title_nl || step.title) : step.title;
  const stepNarration = lang === "nl" ? (step.narration_nl || step.narration) : step.narration;
  return (
    <div className="control-bar">
      <div className="cb-left">
        <div className="cb-brand">
          <span className="cb-title">notarial demo</span>
        </div>
        <div className="cb-scenario">
          <span className="lbl">process:</span>
          <select value={scenario} onChange={(e) => onScenario(e.target.value)}>
            {Object.values(window.SCENARIOS).map(s =>
              <option key={s.id} value={s.id}>{lang === "nl" ? (s.label_nl || s.label) : s.label}</option>)}
          </select>
        </div>
      </div>
      <div className="cb-narration">
        <div className="cb-step">
          <span className="cb-stepnum">step {String(cursor).padStart(2,"0")} / {String(total-1).padStart(2,"0")}</span>
          <span className="cb-stepsep">·</span>
          <span className="cb-steptitle">{stepTitle}</span>
        </div>
        {expandedText && <div className="cb-text" title={stepNarration}>{stepNarration}</div>}
      </div>
      <div className="cb-right">
        <div className="btn-stack">
          <button className={`btn ${leftOpen?"on":""}`} onClick={onToggleLeft} title="show / hide the left systems panel">◧ systems</button>
          <button className={`btn ${rightOpen?"on":""}`} onClick={onToggleRight} title="show / hide the right governance panel">governance ◨</button>
        </div>
        <div className="btn-stack">
          <button className={`btn ${expandMiddle?"on":""}`} onClick={onToggleExpandMiddle} title="expand the centre view into any hidden sidebar space (left and/or right)">⤢ expand centre view</button>
          <button className={`btn ${expandedText?"on":""}`} onClick={onToggleText} title="show / hide descriptive text">≡ expanded text</button>
        </div>
        <div className="btn-stack">
          <button className="btn" onClick={onToggleLang} title="switch process language (English / Nederlands) - content only">{lang === "en" ? "NL" : "EN"}</button>
          <button className="btn" onClick={onReset} title="reset graph; replay from step 0">⟲ reset</button>
        </div>
        <button className="btn" onClick={onPrev} disabled={cursor===0}>◀ prev</button>
        <button className="btn btn-primary" onClick={onNext} disabled={cursor>=total-1}>next ▶</button>
      </div>
    </div>
  );
}
window.ControlBar = ControlBar;

// ---------- LeftRail: organisation panels (per-example, from window.LEFT_RAIL) ----------
function LeftRail({ step, cursor, scenario, expandedText, lang }) {
  const currentActor = step.actor;
  const panels = (window.LEFT_RAIL && window.LEFT_RAIL[scenario]) || window.LEFT_RAIL.deed;

  return (
    <aside className="left-rail">
      {panels.map((p, i) => (
        <Panel key={i} org={p.org} title={p.title}>
          {p.actors && p.actors.length > 0 && (
            <div className="actor-row">
              <span className="lbl">activator:</span>
              {p.actors.map(a => (
                <span key={a} className={`chip chip-actor ${currentActor===a?"on":""}`}>{window.actorName(a, lang)}</span>
              ))}
            </div>
          )}
          {p.grid
            ? <div className="knb-grid">
                {p.systems.map(s => <SubSystem key={s.src} inline name={s.name} active={step.source===s.src} />)}
              </div>
            : p.systems.map(s => <SubSystem key={s.src} name={s.name} active={step.source===s.src} />)}
        </Panel>
      ))}
    </aside>
  );
}
window.LeftRail = LeftRail;

function Panel({ org, title, children }) {
  return (
    <div className={`org-panel org-${org} open`}>
      <header>
        <span className="org-bar"></span>
        <div className="org-title">
          <div className="t">{title}</div>
        </div>
      </header>
      <div className="org-body">{children}</div>
    </div>
  );
}

function SubSystem({ name, active, inline }) {
  return (
    <div className={`subsys ${active?"active":""} ${inline?"inline":""}`}>
      <div className="subsys-head">
        <span className="subsys-name">{name}</span>
      </div>
    </div>
  );
}

// ---------- Center column ----------
function Center({ state, step, view, setView, highlight, selectedEntry, setSelectedEntry, cursor, expandedText, lang }) {
  return (
    <main className="center">
      <div className="center-title">3 layers</div>
      <ThreeLayer state={state} highlight={highlight} setSelectedEntry={setSelectedEntry} selectedEntry={selectedEntry} expandedText={expandedText} lang={lang} />
      <div className="center-title">Data views</div>
      <GraphView state={state} view={view} setView={setView} selectedEntry={selectedEntry} lang={lang} />
      <div className="center-title">Audit view</div>
      <AuditUnit state={state} cursor={cursor} expandedText={expandedText} />
    </main>
  );
}
window.Center = Center;

function ThreeLayer({ state, highlight, setSelectedEntry, selectedEntry, expandedText, lang }) {
  const [expandLogic, setExpandLogic] = useState({});
  const [expandInst, setExpandInst] = useState({});
  const isPulsed = (id) => highlight?.kind === "reg" && highlight.ids.includes(id);

  return (
    <section className="three-layer">
      {/* Institutional */}
      <LayerBand layer="inst" label="INSTITUTIONAL LAYER" count={state.inst.length} subtitle="layer 3 · accountability facts" expandedText={expandedText}>
        {state.inst.length === 0 && <Empty label="no institutional facts yet - Log|Inst Gate not yet triggered" />}
        {state.inst.length > 0 && (
          <div className="ltable">
            <div className="lhead lhead-inst">
              <span></span><span>id</span><span>fact</span><span>grounds</span><span>spec</span>
            </div>
            {state.inst.map(i => (
              <div key={i.id} className="lentry">
                <div className={`lrow lrow-inst ${selectedEntry===i.id?"sel":""}`} onClick={() => setSelectedEntry(selectedEntry===i.id?null:i.id)}>
                  <span className="expander" onClick={(e) => { e.stopPropagation(); setExpandInst(s => ({...s, [i.id]: !s[i.id]})); }}>{expandInst[i.id]?"▾":"▸"}</span>
                  <span className="entry-id mono dim" title="institutional entry id">{i.id}</span>
                  <span className="fact-name">{window.tFact(i.fact, lang)}</span>
                  <span className="meta">{i.logics.length} logic</span>
                  <span className="spec-ref" onClick={(e)=>{e.stopPropagation(); setSelectedEntry(i.spec);}}><span className="cdim">rule: </span>{window.tSpec(i.spec, lang)}</span>
                </div>
                {expandInst[i.id] && (
                  <div className="row-children">
                    {i.logics.map(lid => {
                      const l = state.logic.find(x => x.id === lid);
                      return l ? (
                        <div key={lid} className="child-lrow child-logic" onClick={() => setSelectedEntry(selectedEntry===l.id?null:l.id)}>
                          <span className="entry-id mono dim">{l.id}</span>
                          <span className="action-name">{window.tAction(l.action, lang)}</span>
                          <span className="meta">{window.actorName(l.activator, lang)}</span>
                          <span className="meta">{l.members.length} ev</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </LayerBand>

      <Gate n={2} verdicts={state.verdicts.filter(v=>v.gate===2)} />

      {/* Logic */}
      <LayerBand layer="logic" label="LOGIC LAYER" count={state.logic.length} subtitle="layer 2 · functional actions" expandedText={expandedText}>
        {state.logic.length === 0 && <Empty label="no logic entries yet - Reg|Log Gate not yet triggered" />}
        {state.logic.length > 0 && (
          <div className="ltable">
            <div className="lhead lhead-logic">
              <span></span><span>id</span><span>action</span><span>activator</span><span>events</span><span>spec</span>
            </div>
            {state.logic.map(l => (
              <div key={l.id} className="lentry">
                <div className={`lrow lrow-logic ${selectedEntry===l.id?"sel":""}`} onClick={() => setSelectedEntry(selectedEntry===l.id?null:l.id)}>
                  <span className="expander" onClick={(e)=>{e.stopPropagation(); setExpandLogic(s=>({...s,[l.id]:!s[l.id]}));}}>{expandLogic[l.id]?"▾":"▸"}</span>
                  <span className="entry-id mono dim" title="logic entry id">{l.id}</span>
                  <span className="action-name">{window.tAction(l.action, lang)}</span>
                  <span className="meta"><span className="actor-pill">{window.actorName(l.activator, lang)}</span></span>
                  <span className="meta">{l.members.length} events</span>
                  <span className="spec-ref" onClick={(e)=>{e.stopPropagation();setSelectedEntry(l.spec);}}><span className="cdim">rule: </span>{window.tSpec(l.spec, lang)}</span>
                </div>
                {expandLogic[l.id] && (
                  <div className="row-children">
                    <div className="attr-block">
                      <span className="attr-k">trace_id</span><span className="attr-v">{l.trace_id || "—"}</span>
                      <span className="attr-k">target</span><span className="attr-v">{l.target || "—"}</span>
                      <span className="attr-k">status</span><span className="attr-v">{l.status}</span>
                    </div>
                    {l.members.map(mid => {
                      const r = state.reg.find(x => x.id === mid);
                      return r ? (
                        <div key={mid} className="child-lrow child-reg" onClick={() => setSelectedEntry(selectedEntry===r.id?null:r.id)}>
                          <span className="entry-id mono dim">{r.id}</span>
                          <span className={`src-tag src-${ORG_OF_SRC[r.source]||"x"}`}>{r.source}</span>
                          <span className="ev-type">{window.tEvent(r.type, lang)}</span>
                          <span className="mono corr">{r.correlation || <span className="missing">⚠</span>}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </LayerBand>

      <Gate n={1} verdicts={state.verdicts.filter(v=>v.gate===1)} />

      {/* Registration */}
      <LayerBand layer="reg" label="REGISTRATION LAYER" count={state.reg.length} subtitle="layer 1 · raw events from registered sources" expandedText={expandedText}>
        {state.reg.length === 0 && <Empty label="no events yet - click NEXT to begin" />}
        {state.reg.length > 0 && (
          <div className="ltable">
            <div className="lhead lhead-reg">
              <span></span><span>id</span><span>type</span><span>t</span><span>src</span><span>object</span><span>correlation_ref</span><span>activator</span>
            </div>
            {state.reg.map(r => (
              <div key={r.id} className={`lrow lrow-reg ${isPulsed(r.id)?"pulse":""} ${selectedEntry===r.id?"sel":""} ${r._tamper?"tampered":""}`}
                onClick={() => setSelectedEntry(selectedEntry===r.id?null:r.id)}>
                <span></span>
                <span className="entry-id mono dim" title="registration entry id">{r.id}</span>
                <span className="ev-type">{window.tEvent(r.type, lang)}</span>
                <span className="mono dim">{r.t}</span>
                <span className={`src-tag src-${ORG_OF_SRC[r.source]||"x"}`}>{r.source}</span>
                <span className="mono dim">{window.tId(r.attrs?.object || "", lang)}</span>
                <span className="mono corr">{r.correlation || <span className="missing">⚠ missing</span>}</span>
                <span className="mono">{
                  r.actor
                    ? window.actorName(r.actor, lang)
                    : <span className="missing">⚠ no activator</span>
                }</span>
                {(() => {
                  const a = r.attrs || {};
                  const xl = a.cdr_nummer || a.vis_id || a.brp_ref || a.kad_ref || a.ech_id || a.cdr_log_uuid || (a.crosslinks && a.crosslinks[0]);
                  return xl ? (
                    <div className="crosslinks">
                      <span className="cdim">↳ crosslink:</span>
                      <span className="xlink">↗ {xl}</span>
                    </div>
                  ) : null;
                })()}
              </div>
            ))}
          </div>
        )}
      </LayerBand>
    </section>
  );
}

function LayerBand({ layer, label, count, subtitle, children, expandedText }) {
  const [open, setOpen] = useState(true);
  return (
    <div className={`band band-${layer} ${open?"open":"collapsed"}`}>
      <div className="band-head" onClick={() => setOpen(o => !o)} title="click to collapse / expand this layer">
        <span className="band-caret">{open?"▾":"▸"}</span>
        <span className="band-label">{label}</span>
        {expandedText && <span className="band-sub">{subtitle}</span>}
        <span className="band-count">{count} entries</span>
      </div>
      {open && <div className="band-body">{children}</div>}
    </div>
  );
}

function Gate({ n, verdicts }) {
  const list = verdicts || [];
  const idle = list.length === 0;
  const failing = list.find(v => !v.passed);
  const passed = !idle && !failing;
  const passingCount = list.filter(v => v.passed).length;
  const dir = n === 1 ? "Registration → Logic" : "Logic → Institutional";
  const condRange = n === 1 ? "C1–C5" : "C6–C9";
  const gateName = n === 1 ? "REG|LOG GATE" : "LOG|INST GATE";
  return (
    <div className={`gate ${passed?"gate-pass":""} ${failing?"gate-fail":""} ${idle?"gate-idle":""}`}>
      <span className="gate-label">{gateName}</span>
      <span className="gate-dir">{dir}</span>
      {idle && <span className="gate-conds cdim">conditions {condRange} · awaiting input</span>}
      {failing && (
        <>
          <span className="gate-conds">
            {Object.entries(failing.conditions).filter(([,v]) => !v).map(([k]) => (
              <span key={k} className="cond bad">{k} ✗</span>
            ))}
          </span>
          {failing.note && <span className="gate-note">{failing.note}</span>}
        </>
      )}
      {passed && (
        <>
          <span className="gate-summary">✓ {condRange}</span>
          <span className="gate-count">{passingCount} promoted</span>
        </>
      )}
    </div>
  );
}

function Empty({ label }) {
  return <div className="empty">┄ {label} ┄</div>;
}

function GraphView({ state, view, setView, selectedEntry, lang }) {
  return (
    <section className="graph-view">
      <div className="gv-tabs">
        {[["layer","Layer DAG"],["objcentric","Object-centric"],["trail","Trail"]].map(([id,label]) =>
          <button key={id} className={`tab ${view===id?"on":""}`} onClick={()=>setView(id)}>{label}</button>
        )}
      </div>
      <div className="gv-body">
        {view==="layer" && <SvgLayerGraph state={state} lang={lang} />}
        {view==="objcentric"  && <ObjectCentricGraph state={state} selectedEntry={selectedEntry} lang={lang} />}
        {view==="trail" && <SvgTrailGraph state={state} selectedEntry={selectedEntry} lang={lang} />}
      </div>
    </section>
  );
}

// Compute the lineage subset of state for a given selected entry id.
// Accepts an institutional id (i-*) or a logic id (l-*).
function trailFor(selectedId, state) {
  if (!selectedId) return null;
  const inst = state.inst.find(i => i.id === selectedId);
  if (inst) {
    const logics = state.logic.filter(l => inst.logics.includes(l.id));
    const regIds = new Set();
    logics.forEach(l => l.members.forEach(m => regIds.add(m)));
    const regs = state.reg.filter(r => regIds.has(r.id));
    return { inst: [inst], logic: logics, reg: regs };
  }
  const lg = state.logic.find(l => l.id === selectedId);
  if (lg) {
    const insts = state.inst.filter(i => i.logics.includes(lg.id));
    const regs = state.reg.filter(r => lg.members.includes(r.id));
    return { inst: insts, logic: [lg], reg: regs };
  }
  return null;
}

function SvgLayerGraph({ state, lang }) {
  // Band layout: each band has a header strip for its label and a node area below.
  // Geometry constants kept local for clarity.
  const HEADER = 16;          // band header strip height
  const NODE_H = 26;          // node rectangle height
  const BAND_H = 72;          // total band height (header + node area)
  const BAND_GAP = 22;        // vertical space between bands (for arrows)
  const GUTTER = 12;          // left margin
  const CHAR_W = 6.6;         // approximate JetBrains Mono 10px advance
  const NODE_PAD = 12;        // horizontal padding inside a node
  const MIN_NODE_W = 56;

  // Y baselines for each band.
  const yInstHead   = 0;
  const yInstNode   = HEADER + 8;
  const yLogicHead  = BAND_H + BAND_GAP;
  const yLogicNode  = yLogicHead + HEADER + 8;
  const yRegHead    = (BAND_H + BAND_GAP) * 2;
  const yRegNode    = yRegHead + HEADER + 8;
  const totalH      = yRegHead + BAND_H + 4;

  // Draw all events / actions / facts so every Logic entry has its members visible.
  const regs = state.reg;
  const logics = state.logic;
  const insts = state.inst;

  // Pre-compute node widths from label text.
  const widthFor = (label) => Math.max(MIN_NODE_W, Math.round(label.length * CHAR_W + NODE_PAD * 2));
  const regW = regs.map(r => widthFor(r.source));
  const logW = logics.map(l => widthFor(window.tAction(l.action, lang)));
  const insW = insts.map(it => widthFor(window.tFact(it.fact, lang)));

  // Layout helper: pack nodes left-to-right starting from x=startX with given widths and a gap.
  const packPositions = (widths, startX, gap) => {
    const xs = [];
    let cursor = startX;
    for (const w of widths) {
      xs.push(cursor + w / 2); // store centre x
      cursor += w + gap;
    }
    return xs;
  };
  const startX = GUTTER + 92; // gutter + room for the band label
  const xR = packPositions(regW, startX, 6);
  const xL = packPositions(logW, startX, 22);
  const xI = packPositions(insW, startX, 32);

  // Compute viewBox width to fit the widest band; min 700.
  const farthestX = Math.max(
    700,
    ...regs.map((_, i) => xR[i] + regW[i] / 2),
    ...logics.map((_, i) => xL[i] + logW[i] / 2),
    ...insts.map((_, i) => xI[i] + insW[i] / 2),
  ) + GUTTER;
  const W = farthestX;

  return (
    <svg viewBox={`0 0 ${W} ${totalH}`} width={W} height={totalH} className="graph-svg" preserveAspectRatio="xMinYMin meet">
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill="var(--knb-mid)"/>
        </marker>
      </defs>

      {/* Bands - light fills + bottom border to demarcate */}
      <rect x="0" y={yInstHead}  width={W} height={BAND_H} className="g-band g-band-inst"/>
      <rect x="0" y={yLogicHead} width={W} height={BAND_H} className="g-band g-band-logic"/>
      <rect x="0" y={yRegHead}   width={W} height={BAND_H} className="g-band g-band-reg"/>

      {/* Band labels - in the header strip, left-aligned, left gutter only */}
      <text x={GUTTER} y={yInstHead  + 11} className="g-band-lbl">INSTITUTIONAL</text>
      <text x={GUTTER} y={yLogicHead + 11} className="g-band-lbl">LOGIC</text>
      <text x={GUTTER} y={yRegHead   + 11} className="g-band-lbl">REGISTRATION</text>

      {/* Edges: registration -> logic */}
      {logics.map((l,i) =>
        l.members.slice(0,5).map((mid,j) => {
          const ridx = regs.findIndex(r => r.id === mid);
          if (ridx<0) return null;
          return <line key={`${l.id}-${j}`}
            x1={xR[ridx]} y1={yRegNode}
            x2={xL[i]} y2={yLogicNode + NODE_H}
            className="g-edge" markerEnd="url(#arr)"/>;
        })
      )}
      {/* Edges: logic -> institutional */}
      {insts.map((it,i) =>
        it.logics.map((lid,j) => {
          const lidx = logics.findIndex(l => l.id === lid);
          if (lidx<0) return null;
          return <line key={`${it.id}-${j}`}
            x1={xL[lidx]} y1={yLogicNode}
            x2={xI[i]} y2={yInstNode + NODE_H}
            className="g-edge" markerEnd="url(#arr)"/>;
        })
      )}

      {/* Registration nodes */}
      {regs.map((r,i) => (
        <g key={r.id}>
          <rect x={xR[i] - regW[i]/2} y={yRegNode} width={regW[i]} height={NODE_H} rx="3"
                className={`g-node g-reg ${r._tamper?"g-tamper":""}`} />
          <text x={xR[i]} y={yRegNode + NODE_H/2 + 3} className="g-node-lbl">{r.source}</text>
        </g>
      ))}
      {/* Logic nodes */}
      {logics.map((l,i) => (
        <g key={l.id}>
          <rect x={xL[i] - logW[i]/2} y={yLogicNode} width={logW[i]} height={NODE_H} rx="3"
                className="g-node g-logic" />
          <text x={xL[i]} y={yLogicNode + NODE_H/2 + 3} className="g-node-lbl">{window.tAction(l.action, lang)}</text>
        </g>
      ))}
      {/* Institutional nodes */}
      {insts.map((it,i) => (
        <g key={it.id}>
          <rect x={xI[i] - insW[i]/2} y={yInstNode} width={insW[i]} height={NODE_H} rx="3"
                className="g-node g-inst" />
          <text x={xI[i]} y={yInstNode + NODE_H/2 + 3} className="g-node-lbl">{window.tFact(it.fact, lang)}</text>
        </g>
      ))}
    </svg>
  );
}
// ---------- Object-centric view (Cytoscape-backed) ----------
// OCED-inspired: turns the flat pipeline state into an object-centric property graph
// with events, objects (Actor, System, Dossier, Zaak), proxy objects for Logic
// and Institutional entries, and typed `observes` / `object_relation` edges.
// Extends the OCED core model with action and fact proxies for the three layers.
function stateToObjectCentricElements(state, lang) {
  const nodes = [];
  const edges = [];
  const seen = new Set();
  const addNode = (n) => { if (!seen.has(n.data.id)) { nodes.push(n); seen.add(n.data.id); } };

  // ---- Registration entries → event nodes (+ derived objects/edges)
  state.reg.forEach((r) => {
    addNode({ data: { id: r.id, label: window.tEvent(r.type, lang), kind: "event", source: r.source, tamper: r._tamper || "" } });

    // ORIGINATES_FROM → System object
    const sysId = `sys:${r.source}`;
    addNode({ data: { id: sysId, label: r.source.toUpperCase(), kind: "system" } });
    edges.push({ data: { id: `${r.id}>sys`, source: r.id, target: sysId, label: "originates_from", kind: "originates" } });

    // PERFORMED_BY → Actor object (only if attributable)
    if (r.actor) {
      const actorId = `act:${r.actor}`;
      const actorLabel = window.actorName(r.actor, lang);
      addNode({ data: { id: actorId, label: actorLabel, kind: "actor" } });
      edges.push({ data: { id: `${r.id}>act`, source: r.id, target: actorId, label: "performed_by", kind: "performed" } });
    }

    // CONCERNS → Dossier (and optionally Zaak CHILD_OF Dossier)
    if (r.correlation) {
      const parts = r.correlation.split("/");
      const dossierId = `dos:${parts[0]}`;
      addNode({ data: { id: dossierId, label: parts[0], kind: "dossier" } });
      let target = dossierId;
      if (parts.length > 1) {
        const zaakId = `zaak:${r.correlation}`;
        addNode({ data: { id: zaakId, label: parts.slice(1).join("/"), kind: "zaak" } });
        edges.push({ data: { id: `${zaakId}>dos`, source: zaakId, target: dossierId, label: "child_of", kind: "child" } });
        target = zaakId;
      }
      edges.push({ data: { id: `${r.id}>conc`, source: r.id, target, label: "concerns", kind: "concerns" } });
    }
  });

  // ---- Logic entries → Action proxy objects, with CONSTITUTES edges from events
  state.logic.forEach((l) => {
    addNode({ data: { id: l.id, label: window.tAction(l.action, lang), kind: "action" } });
    l.members.forEach((mid) => {
      edges.push({ data: { id: `${l.id}<${mid}`, source: mid, target: l.id, label: "constitutes", kind: "constitutes" } });
    });
  });

  // ---- Institutional entries → Fact proxy objects, with REPRESENTS edges from actions
  state.inst.forEach((i) => {
    addNode({ data: { id: i.id, label: window.tFact(i.fact, lang), kind: "fact" } });
    i.logics.forEach((lid) => {
      edges.push({ data: { id: `${i.id}<${lid}`, source: lid, target: i.id, label: "represents", kind: "represents" } });
    });
  });

  // ---- Crosslinks → external identifier nodes with CROSSLINK edges
  state.traces.forEach((t) => {
    (t.external || []).forEach((ext) => {
      const extId = `xl:${ext}`;
      addNode({ data: { id: extId, label: ext, kind: "external" } });
      edges.push({ data: { id: `${t.id}>${ext}`, source: t.id, target: extId, label: "crosslink", kind: "crosslink" } });
    });
  });

  // Drop any edge whose endpoints were not added as nodes. This happens for
  // filtered subsets (e.g. the Trail view): an institutional fact may reference
  // sibling logic entries that are outside the subset, which would otherwise
  // make Cytoscape throw on a non-existent source/target and blank the page.
  const validEdges = edges.filter(e => seen.has(e.data.source) && seen.has(e.data.target));
  return { nodes, edges: validEdges };
}

// Cytoscape stylesheet - colour/shape per node kind, dashed/solid edges per qualifier.
const OBJCENTRIC_STYLE = [
  { selector: "node", style: {
      "label": "data(label)", "font-family": "JetBrains Mono, monospace", "font-size": 10,
      "text-valign": "center", "text-halign": "center", "color": "#ffffff",
      "border-width": 1, "border-color": "#000",
      "width": "label", "height": 28, "padding": "8px",
      "shape": "round-rectangle", "text-wrap": "wrap", "text-max-width": 160,
    }},
  // Occurrents: 3 layers = 3 colours + 3 shapes. Event = ellipse/grey,
  // Action = round-rectangle/wine, Fact = hexagon/deep.
  { selector: 'node[kind = "event"]',  style: { "background-color": "#444444", "border-color": "#444444", "color": "#ffffff", "shape": "ellipse" } },
  { selector: 'node[tamper != ""]',    style: { "background-color": "#000000", "border-color": "#000000" } },
  { selector: 'node[kind = "action"]', style: { "background-color": "#A13775", "border-color": "#A13775", "color": "#ffffff", "shape": "round-rectangle", "font-weight": 600 } },
  { selector: 'node[kind = "fact"]',   style: { "background-color": "#551D3E", "border-color": "#551D3E", "color": "#ffffff", "shape": "hexagon", "font-weight": 700, "height": 38, "padding": "12px" } },
  // Continuants: one outlined object family (white/wine), 3 distinct shapes by type.
  { selector: 'node[kind = "actor"]',  style: { "background-color": "#ffffff", "border-color": "#A13775", "color": "#551D3E", "shape": "round-tag" } },
  { selector: 'node[kind = "system"]', style: { "background-color": "#E6E6E6", "border-color": "#999999", "color": "#000000", "shape": "rectangle" } },
  { selector: 'node[kind = "dossier"]',style: { "background-color": "#ffffff", "border-color": "#A13775", "color": "#551D3E", "shape": "rectangle", "border-width": 2 } },
  { selector: 'node[kind = "zaak"]',   style: { "background-color": "#ffffff", "border-color": "#A13775", "color": "#551D3E", "shape": "rectangle" } },
  { selector: 'node[kind = "external"]', style: { "background-color": "#ffffff", "border-color": "#A13775", "border-style": "dashed", "color": "#551D3E", "shape": "rectangle", "font-style": "italic" } },

  { selector: "edge", style: {
      "width": 1, "curve-style": "bezier",
      "line-color": "#A13775", "target-arrow-color": "#A13775",
      "target-arrow-shape": "triangle", "arrow-scale": 0.9,
      "opacity": 0.7,
      "label": "data(label)", "font-family": "JetBrains Mono, monospace", "font-size": 8,
      "color": "#551D3E", "text-background-color": "#ffffff",
      "text-background-padding": 2, "text-background-opacity": 0.8,
      "text-rotation": "autorotate",
    }},
  { selector: 'edge[kind = "constitutes"]', style: { "line-color": "#A13775", "target-arrow-color": "#A13775", "width": 2 } },
  { selector: 'edge[kind = "represents"]',  style: { "line-color": "#551D3E", "target-arrow-color": "#551D3E", "width": 2 } },
  { selector: 'edge[kind = "performed"]',   style: { "line-style": "dashed", "opacity": 0.55 } },
  { selector: 'edge[kind = "originates"]',  style: { "line-style": "dashed", "opacity": 0.4, "line-color": "#999999", "target-arrow-color": "#999999", "color": "#999999" } },
  { selector: 'edge[kind = "concerns"]',    style: { "line-style": "dotted", "opacity": 0.55 } },
  { selector: 'edge[kind = "child"]',       style: { "line-color": "#551D3E", "target-arrow-color": "#551D3E", "opacity": 0.8 } },
  { selector: 'edge[kind = "crosslink"]',   style: { "line-style": "dashed", "line-color": "#A13775", "target-arrow-color": "#A13775", "opacity": 0.8 } },

  { selector: "node.selected", style: { "border-width": 3, "border-color": "#000000" } },
  { selector: ".faded",        style: { "opacity": 0.15 } },
];

function ObjectCentricGraph({ state, selectedEntry, height = 640, lang }) {
  const containerRef = useRef(null);
  const cyRef = useRef(null);

  // Initialise once.
  useEffect(() => {
    if (!containerRef.current || cyRef.current) return;
    if (typeof cytoscape !== "function") return; // CDN not loaded yet
    const cy = cytoscape({
      container: containerRef.current,
      elements: [],
      style: OBJCENTRIC_STYLE,
      wheelSensitivity: 0.2,
      minZoom: 0.2,
      maxZoom: 2.5,
    });
    cyRef.current = cy;
    return () => { try { cy.destroy(); } catch (_) {} cyRef.current = null; };
  }, []);

  // Rebuild elements when state changes.
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;
    const { nodes, edges } = stateToObjectCentricElements(state, lang);
    cy.batch(() => {
      cy.elements().remove();
      cy.add(nodes);
      cy.add(edges);
    });
    const layout = cy.layout({
      name: "dagre",
      rankDir: "BT",  // events at bottom flow UP to actions and facts
      rankSep: 70,
      nodeSep: 28,
      edgeSep: 12,
      ranker: "tight-tree",
      fit: true,
      padding: 20,
    });
    layout.run();
  }, [state, lang]);

  // Apply selection highlight.
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;
    cy.elements().removeClass("selected").removeClass("faded");
    if (!selectedEntry) return;
    const target = cy.getElementById(selectedEntry);
    if (target.length === 0) return;
    const neighborhood = target.closedNeighborhood();
    cy.elements().difference(neighborhood).addClass("faded");
    target.addClass("selected");
  }, [selectedEntry, state]);

  const empty = state.reg.length === 0;
  return (
    <div className="objcentric-wrap">
      <div className="objcentric-legend">
        <div className="legend-group">
          <span className="legend-head">Occurrent</span>
          <span className="legend-item"><svg className="sw" viewBox="0 0 13 13"><circle cx="6.5" cy="6.5" r="5.5" fill="#444444"/></svg> Event <span className="cdim">· Registration</span></span>
          <span className="legend-item"><svg className="sw" viewBox="0 0 13 13"><rect x="1" y="1" width="11" height="11" rx="2.5" fill="#A13775"/></svg> Action <span className="cdim">· Logic</span></span>
          <span className="legend-item"><svg className="sw" viewBox="0 0 13 13"><polygon points="3.5,1 9.5,1 12.5,6.5 9.5,12 3.5,12 0.5,6.5" fill="#551D3E"/></svg> Fact <span className="cdim">· Institutional</span></span>
        </div>
        <div className="legend-group">
          <span className="legend-head">Continuant</span>
          <span className="legend-item"><svg className="sw" viewBox="0 0 13 13"><polygon points="1,3 8.5,3 11.5,6.5 8.5,10 1,10" fill="#ffffff" stroke="#A13775" strokeWidth="1.3"/></svg> Activator <span className="cdim"></span></span>
          <span className="legend-item"><svg className="sw" viewBox="0 0 13 13"><rect x="1" y="3" width="10.5" height="7" fill="#E6E6E6" stroke="#999999" strokeWidth="1.3"/></svg> System <span className="cdim"></span></span>
          <span className="legend-item"><svg className="sw" viewBox="0 0 13 13"><rect x="1" y="3" width="10.5" height="7" fill="#ffffff" stroke="#A13775" strokeWidth="1.3"/></svg> Record <span className="cdim"></span></span>
        
        </div>
      </div>
      <div ref={containerRef} className="objcentric-canvas" style={{ height, position: "relative" }}>
        {empty && (
          <div className="objcentric-empty">No events yet - click NEXT to begin the walkthrough.</div>
        )}
      </div>
    </div>
  );
}
function SvgTrailGraph({ state, selectedEntry, lang }) {
  const trail = trailFor(selectedEntry, state);
  if (!trail) {
    return (
      <div className="graph-placeholder">
        <div className="ph-label">Trail view - single Institutional fact, end-to-end</div>
        <div className="ph-text">
          Click an Institutional fact or a Logic entry.
          {/* above to inspect
          its full lineage here: the Logic entries that ground it, the Registration events that
          compose them, and the objects (actors, systems, dossier, zaak, crosslinks) they
          relate to.*/}
        </div>
      </div>
    );
  }
  // Restrict crosslinks to those belonging to the trail's registration entries.
  const regIds = new Set(trail.reg.map(r => r.id));
  const filteredTraces = (state.traces || []).filter(t => regIds.has(t.id));
  const filteredState = {
    reg: trail.reg,
    logic: trail.logic,
    inst: trail.inst,
    verdicts: [],
    traces: filteredTraces,
    changes: [],
    auditCore: [],
  };
  const label = (trail.inst[0] && window.tFact(trail.inst[0].fact, lang))
    || (trail.logic[0] && window.tAction(trail.logic[0].action, lang))
    || selectedEntry;
  return (
    <div>
      <div className="trail-head">
        <span className="trail-lbl">trail</span>
        <span className="trail-target">{label}</span>
        <span className="trail-meta">
          {trail.inst.length} institutional · {trail.logic.length} logic · {trail.reg.length} registration · {filteredTraces.length} crosslinks
        </span>
      </div>
      <ObjectCentricGraph state={filteredState} selectedEntry={null} height={380} lang={lang} />
    </div>
  );
}

// ---------- AuditUnit (closing moment) ----------
function AuditUnit({ state, cursor, expandedText }) {
  return (
    <section className="audit-unit">
      <header>
        <span className="au-title">Audit logging unit · Notary Office</span>
      </header>
      <div className="au-grid">
        <div className="au-store">
          <div className="au-store-head">
            <span className="au-store-name">audit log core</span>
            {expandedText && <span className="au-store-sub">may be modified under strict governance</span>}
          </div>
          <div className="au-list">
            {state.auditCore.length === 0 && <div className="au-empty">no entries yet - the audit log core fills as facts are recorded</div>}
            {state.auditCore.slice(-8).map(c => (
              <div key={c.id} className={`au-row ${c.v>1?"changed":""}`}>
                <span className="au-id">{c.id}</span>
                <span className="au-v">v{c.v}</span>
                <span className="au-lbl">{c.label}</span>
                {c.v>1 && <span className="au-tag">REDACTED</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="au-arrow">⟶</div>
        <div className="au-store immutable">
          <div className="au-store-head">
            <span className="au-store-name">immutable change log</span>
          </div>
          <div className="au-list">
            {state.changes.length === 0 && <div className="au-empty">no changes yet - every alteration to the core appears here, signed and dated</div>}
            {state.changes.map(c => (
              <div key={c.id} className="au-row">
                <span className="au-id">{c.id}</span>
                <span className="au-when">{c.when}</span>
                <span className="au-lbl">{c.target} · {c.reason}</span>
                <div className="au-hashes">
                  <span className="au-h">{c.oldHash}</span>
                  <span className="au-h-arrow">→</span>
                  <span className="au-h">{c.newHash}</span>
                  <span className="au-by">by {c.who}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- RightRail: governance sidebar ----------
function RightRail({ state, step, scenario, selectedEntry, expandedText, lang }) {
  const [section, setSection] = useState("specs");
  const selectedSpec = window.SPECS.find(s => s.id === selectedEntry);
  return (
    <aside className="right-rail">
      <div className="rr-tabs">
        {[
          ["specs","specs"],
          ["schemas","schemas"],
          ["registries","registries"],
        ].map(([id,label]) =>
          <button key={id} className={`rr-tab ${section===id?"on":""}`} onClick={() => setSection(id)}>{label}</button>
        )}
      </div>
      <div className="rr-body">
        {section==="specs" && <SpecsView highlight={selectedSpec} scenario={scenario} expandedText={expandedText} lang={lang} />}
        {section==="schemas" && <SchemasView />}
        {section==="registries" && <RegistriesView state={state} />}
      </div>
    </aside>
  );
}
window.RightRail = RightRail;

function SpecsView({ highlight, scenario, expandedText, lang }) {
  const allow = (window.SCENARIOS[scenario] && window.SCENARIOS[scenario].specs) || null;
  const specs = allow ? window.SPECS.filter(s => allow.includes(s.id)) : window.SPECS;
  return (
    <div className="specs-list">
      {specs.map(s => (
        <div key={s.id} className={`spec-card ${highlight?.id===s.id?"hl":""}`}>
          <div className="sc-head">
            <span className="sc-id">{window.tSpec(s.id, lang)}</span>
            <span className="sc-type">{s.type}</span>
          </div>
          <div className="sc-grid">
            <span className="k">party</span><span className="v">{s.party}</span>
            <span className="k">domain</span><span className="v">{s.domain}</span>
            <span className="k">retention</span><span className="v">{s.retention}</span>
            <span className="k">access</span><span className="v">{s.access}</span>
          </div>
          <div className="sc-scope">
            <div className="sc-label">scope · events</div>
            <div className="sc-chips">{s.scope.map(x=> <span key={x} className="chip-s">{window.tEvent(x, lang)}</span>)}</div>
          </div>
          <div className="sc-scope">
            <div className="sc-label">scope · actions</div>
            <div className="sc-chips">{s.actions.map(x=> <span key={x} className="chip-s">{window.tAction(x, lang)}</span>)}</div>
          </div>
          {s.facts.length>0 && <div className="sc-scope">
            <div className="sc-label">scope · institutional facts</div>
            <div className="sc-chips">{s.facts.map(x=> <span key={x} className="chip-s">{window.tFact(x, lang)}</span>)}</div>
          </div>}
          <div className="sc-scope">
            <div className="sc-label">schemas referenced</div>
            <div className="sc-chips">{s.schemas.map(x=> <span key={x} className="chip-s mono">{x}</span>)}</div>
          </div>
          {expandedText && <div className="sc-prose">{s.description}</div>}
        </div>
      ))}
    </div>
  );
}

function SchemasView() {
  return (
    <div className="schemas">
      <div className="tree">
        <details open><summary>base.registration</summary>
          <div className="schema-fields">
            <Field name="event_id" t="UUID" req />
            <Field name="event_type" t="string" req />
            <Field name="source_id" t="ref(LogSource)" req />
            <Field name="timestamp" t="datetime (sync ref)" req />
            <Field name="activator" t="ref(Actor)" req />
            <Field name="correlation_ref" t="string" req />
            <Field name="severity" t="enum(2..6 · RFC 5424)" req />
            <Field name="payload" t="object" />
          </div>
        </details>
        <details><summary>base.logic</summary>
          <div className="schema-fields">
            <Field name="action_id" t="UUID" req />
            <Field name="action_type" t="string" req />
            <Field name="constitutes" t="ref(Registration)[]" req />
            <Field name="activator" t="ref(Actor)" req />
            <Field name="spec_ref" t="ref(Specification)" req />
          </div>
        </details>
        <details><summary>base.institutional</summary>
          <div className="schema-fields">
            <Field name="fact_id" t="UUID" req />
            <Field name="fact_type" t="string" req />
            <Field name="represents" t="ref(Logic)[]" req />
            <Field name="spec_ref" t="ref(Specification)" req />
            <Field name="retention_class" t="enum" req />
          </div>
        </details>
        <details><summary>ext.cdr.registration</summary>
          <div className="schema-fields">
            <Field name="code" t="int(1..281)" req />
            <Field name="cdr_log_uuid" t="UUID" />
            <Field name="cdr_nummer" t="string" />
            <Field name="severity_derived" t="from(code)" />
          </div>
        </details>
        <details><summary>ext.vis.registration</summary>
          <div className="schema-fields">
            <Field name="vis_id" t="string" req />
            <Field name="result" t="enum(valid|blocked|lost|unknown)" req />
            <Field name="document_type" t="enum" req />
          </div>
        </details>
        <details><summary>ext.nsl.registration</summary>
          <div className="schema-fields">
            <Field name="dossier_id" t="string" req />
            <Field name="zaak_id" t="string" />
            <Field name="cert_id" t="string (PKIOverheid)" />
            <Field name="cert_issuer" t="string" />
          </div>
        </details>
      </div>
    </div>
  );
}
function Field({ name, t, req }) {
  return <div className="field-row"><span className="fn">{name}</span><span className="ft">{t}</span>{req && <span className="freq">req</span>}</div>;
}

function RegistriesView({ state }) {
  return (
    <div className="registries">
      <div className="reg-block">
        <div className="rb-head">log source registry</div>
        <div className="reg-mini-tbl">
          <div className="rmt-head"><span>source</span><span>party</span></div>
          {window.LOG_SOURCES.map(s => (
            <div key={s.id} className="rmt-row">
              <span className={`src-tag src-${ORG_OF_SRC[s.id]||"x"}`}>{s.id}</span>
              <span className="dim">{s.party}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="reg-block">
        <div className="rb-head">trace identifier store · live</div>
        {state.traces.length === 0 && <div className="cdim">no cross-system traces yet</div>}
        {state.traces.length > 0 && (
          <div className="reg-mini-tbl">
            <div className="rmt-head"><span>local</span><span>↗ external</span></div>
            {state.traces.map(t => (
              <div key={t.id} className="rmt-row">
                <span className="mono">{t.local}</span>
                <span className="mono">{t.external.join(" · ")}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

