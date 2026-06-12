/* @ds-bundle: {"format":3,"namespace":"PeaceDesignSystem_adb1e5","components":[{"name":"Badge","sourcePath":"components/actions/Badge.jsx"},{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Rule","sourcePath":"components/brand/Rule.jsx"},{"name":"Seal","sourcePath":"components/brand/Seal.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Proclamation","sourcePath":"components/content/Proclamation.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/actions/Badge.jsx":"7cdb538e211a","components/actions/Button.jsx":"44c178670c86","components/brand/Eyebrow.jsx":"d1539dc4d9af","components/brand/Rule.jsx":"bedc99dd6ffb","components/brand/Seal.jsx":"51df9778d8f9","components/content/Card.jsx":"0358af874d6a","components/content/Proclamation.jsx":"968f84284db7","components/content/Stat.jsx":"46a45d2acb8e","components/forms/Input.jsx":"f519ef0fafab","ui_kits/website/Community.jsx":"ea430b96ea32","ui_kits/website/Dispatch.jsx":"0f9cd99816ee","ui_kits/website/Header.jsx":"0814f9a44c24","ui_kits/website/Hero.jsx":"a92c0ca08896","ui_kits/website/Parts.jsx":"6b859acf53e6","ui_kits/website/PeaceFacts.jsx":"1780fcf1a12a","ui_kits/website/Scoreboard.jsx":"85e52a9f7a9f","ui_kits/website/Steps.jsx":"0491154b1c7a","ui_kits/website/Terms.jsx":"e2fe54f1bbb1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PeaceDesignSystem_adb1e5 = window.PeaceDesignSystem_adb1e5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small letterspaced ceremonial label / status chip.
 */
function Badge({
  children,
  tone = 'gold',
  style = {},
  ...rest
}) {
  const tones = {
    gold: {
      color: 'var(--gold-600)',
      borderColor: 'var(--border-gold)',
      background: 'rgba(173,138,71,0.08)'
    },
    ink: {
      color: 'var(--parchment-100)',
      borderColor: 'var(--bronze-900)',
      background: 'var(--bronze-900)'
    },
    quiet: {
      color: 'var(--taupe-600)',
      borderColor: 'var(--border-hairline)',
      background: 'transparent'
    },
    laurel: {
      color: 'var(--laurel-600)',
      borderColor: 'rgba(94,107,67,0.4)',
      background: 'rgba(94,107,67,0.08)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-display)',
      fontSize: '10.5px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.20em',
      padding: '5px 11px 4px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid',
      lineHeight: 1,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Badge.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the ceremonial action control for Peace.
 * Roman-capital label, letterspaced, on a pressed-paper surface.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: '11px',
      padding: '8px 18px',
      letterSpacing: '0.18em'
    },
    md: {
      fontSize: '13px',
      padding: '13px 28px',
      letterSpacing: '0.20em'
    },
    lg: {
      fontSize: '15px',
      padding: '18px 40px',
      letterSpacing: '0.22em'
    }
  };
  const variants = {
    primary: {
      background: 'var(--bronze-900)',
      color: 'var(--parchment-100)',
      border: '1px solid var(--bronze-900)'
    },
    gold: {
      background: 'var(--gold-500)',
      color: 'var(--bronze-900)',
      border: '1px solid var(--gold-600)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--ink-900)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-gold)',
      border: '1px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    textTransform: 'uppercase',
    lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
  };
  const onUp = e => {
    e.currentTarget.style.transform = 'translateY(0)';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: base,
    onMouseDown: onDown,
    onMouseUp: onUp,
    onMouseLeave: onUp
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — a letterspaced ceremonial kicker, optionally flanked by gold rules.
 */
function Eyebrow({
  children,
  rules = false,
  align = 'left',
  color = 'var(--text-gold)',
  style = {},
  ...rest
}) {
  const label = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '12px',
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color,
      whiteSpace: 'nowrap'
    }
  }, children);
  if (!rules) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        textAlign: align,
        ...style
      }
    }, rest), label);
  }
  const line = /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--border-gold)'
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      ...style
    }
  }, rest), (align === 'center' || align === 'right') && line, label, (align === 'center' || align === 'left') && line);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Rule — a gold double-rule divider with an optional centered ornament.
 */
function Rule({
  ornament = 'star',
  color = 'var(--border-gold)',
  width = '100%',
  style = {},
  ...rest
}) {
  const star = /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "var(--gold-500)",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2 L14.6 9.0 L22 9.3 L16.1 13.9 L18.2 21 L12 16.7 L5.8 21 L7.9 13.9 L2 9.3 L9.4 9.0 Z"
  }));
  const dot = /*#__PURE__*/React.createElement("span", {
    style: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: 'var(--gold-500)'
    }
  });
  const mark = ornament === 'none' ? null : ornament === 'dot' ? dot : star;
  const dbl = /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '3px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: '1px',
      background: color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: '1px',
      background: color,
      opacity: 0.5
    }
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      width,
      ...style
    }
  }, rest), dbl, mark, dbl);
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Rule.jsx", error: String((e && e.message) || e) }); }

// components/brand/Seal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Seal — the Peace ceremonial seal, rendered inline so it inherits
 * the Cinzel webfont for its curved legend. Tintable via `color`.
 */
function Seal({
  size = 120,
  top = 'WORLD PEACE',
  bottom = 'AND STILL WINNING',
  year = 'MMXXVI',
  color = 'var(--gold-500)',
  deep = 'var(--gold-600)',
  style = {},
  ...rest
}) {
  const uid = React.useId().replace(/:/g, '');
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 200 200",
    fill: "none",
    style: style,
    role: "img",
    "aria-label": `${top} ${bottom}`
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: `top-${uid}`,
    d: "M24,100 A76,76 0 0 1 176,100"
  }), /*#__PURE__*/React.createElement("path", {
    id: `bot-${uid}`,
    d: "M170,100 A70,70 0 0 1 30,100"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: color,
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "95",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "89",
    strokeWidth: "0.75"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "60",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "64",
    strokeWidth: "0.75"
  })), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M100,72 L104.7,85.5 L119.0,85.8 L107.6,94.5 L111.8,108.2 L100,100 L88.2,108.2 L92.4,94.5 L81.0,85.8 L95.3,85.5 Z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: color
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24,100 l1.6,3.4 l3.7,0.4 l-2.8,2.5 l0.8,3.6 l-3.3,-1.9 l-3.3,1.9 l0.8,-3.6 l-2.8,-2.5 l3.7,-0.4 Z",
    transform: "translate(-1,-3)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M176,100 l1.6,3.4 l3.7,0.4 l-2.8,2.5 l0.8,3.6 l-3.3,-1.9 l-3.3,1.9 l0.8,-3.6 l-2.8,-2.5 l3.7,-0.4 Z",
    transform: "translate(-3,-3)"
  })), /*#__PURE__*/React.createElement("g", {
    fill: deep,
    fontFamily: "var(--font-display)",
    fontWeight: "600"
  }, /*#__PURE__*/React.createElement("text", {
    fontSize: "14",
    letterSpacing: "3",
    textAnchor: "middle"
  }, /*#__PURE__*/React.createElement("textPath", {
    href: `#top-${uid}`,
    startOffset: "50%"
  }, top)), /*#__PURE__*/React.createElement("text", {
    fontSize: "10",
    letterSpacing: "3",
    textAnchor: "middle"
  }, /*#__PURE__*/React.createElement("textPath", {
    href: `#bot-${uid}`,
    startOffset: "50%"
  }, bottom))), year ? /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "124",
    fill: deep,
    fontFamily: "var(--font-display)",
    fontWeight: "600",
    fontSize: "8",
    letterSpacing: "2.5",
    textAnchor: "middle"
  }, year) : null);
}
Object.assign(__ds_scope, { Seal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Seal.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a pressed-parchment surface with a hairline frame and an
 * optional gold top rule. The default container for ceremonial content.
 */
function Card({
  children,
  accent = false,
  raised = false,
  padding = 32,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: `${padding}px`,
      boxShadow: raised ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      ...style
    }
  }, rest), accent ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: 'var(--gold-500)',
      borderTopLeftRadius: 'var(--radius-md)',
      borderTopRightRadius: 'var(--radius-md)'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Proclamation.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Proclamation — a framed official statement: gold double-border,
 * Garamond body, a centered seal, and a letterspaced signature.
 */
function Proclamation({
  children,
  signature = 'The Peace Administration',
  seal = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      background: 'var(--parchment-100)',
      border: '1px solid var(--border-gold)',
      outline: '1px solid var(--border-gold)',
      outlineOffset: '4px',
      padding: 'clamp(32px, 6vw, 72px)',
      textAlign: 'center',
      ...style
    }
  }, rest), seal ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '28px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "56",
    height: "56",
    viewBox: "0 0 24 24",
    fill: "var(--gold-500)",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2 L14.6 9.0 L22 9.3 L16.1 13.9 L18.2 21 L12 16.7 L5.8 21 L7.9 13.9 L2 9.3 L9.4 9.0 Z"
  }))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(18px, 2.4vw, 26px)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--ink-900)',
      maxWidth: '54ch',
      margin: '0 auto',
      textWrap: 'pretty'
    }
  }, children), signature ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '36px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '13px',
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--text-gold)'
    }
  }, signature) : null);
}
Object.assign(__ds_scope, { Proclamation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Proclamation.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — a monumental figure with a letterspaced caption. For the
 * scoreboard of peace: wars ended, nations at the table, days of calm.
 */
function Stat({
  value,
  label,
  sub = null,
  align = 'center',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(40px, 6vw, 72px)',
      lineHeight: 1,
      color: 'var(--ink-900)',
      letterSpacing: '-0.01em'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '11px',
      letterSpacing: '0.26em',
      textTransform: 'uppercase',
      color: 'var(--text-gold)'
    }
  }, label), sub ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '6px',
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--text-muted)'
    }
  }, sub) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — a quiet text field with a letterspaced label. Underline-led
 * to suit the parchment surface, with a gold focus rule.
 */
function Input({
  label,
  hint,
  id,
  type = 'text',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '11px',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '17px',
      color: 'var(--ink-900)',
      background: 'var(--parchment-50)',
      border: '1px solid',
      borderColor: focus ? 'var(--gold-500)' : 'var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: '12px 14px',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: '12px',
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Community.jsx
try { (() => {
/* PEACE site — Community banner + FAQ accordion */
(() => {
  const {
    Eyebrow,
    Button
  } = window.PeaceDesignSystem_adb1e5;
  function CommunityBanner({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-inverse)',
        padding: '96px 32px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '880px',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "44",
      height: "44",
      viewBox: "0 0 24 24",
      fill: "var(--gold-400)",
      "aria-hidden": "true",
      style: {
        marginBottom: '26px'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2 L14.6 9.0 L22 9.3 L16.1 13.9 L18.2 21 L12 16.7 L5.8 21 L7.9 13.9 L2 9.3 L9.4 9.0 Z"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '12px',
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        color: 'var(--gold-400)',
        marginBottom: '20px'
      }
    }, "Join the Community"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(34px,5.4vw,68px)',
        lineHeight: 1.04,
        letterSpacing: '0.02em',
        color: 'var(--parchment-100)',
        margin: '0 0 22px'
      }
    }, "OWN A PIECE", /*#__PURE__*/React.createElement("br", null), "OF HISTORY"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'clamp(18px,2.2vw,22px)',
        lineHeight: 1.5,
        color: 'var(--parchment-200)',
        margin: '0 auto 36px',
        maxWidth: '40ch'
      }
    }, "A community built on courage, calm, and optimism \u2014 fighting for what matters and finishing by winning."), /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      size: "lg",
      onClick: () => onNav('join')
    }, "Join the Peace")));
  }
  function FaqItem({
    q,
    a,
    open,
    onToggle
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onToggle,
      style: {
        width: '100%',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        padding: '24px 4px',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'clamp(17px,2vw,21px)',
        letterSpacing: '0.01em',
        color: 'var(--ink-900)'
      }
    }, q), /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--gold-600)",
      strokeWidth: "2",
      "aria-hidden": "true",
      style: {
        flex: '0 0 auto',
        transition: 'transform var(--dur-base) var(--ease-standard)',
        transform: open ? 'rotate(180deg)' : 'rotate(0)'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 9 L12 15 L18 9"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: open ? '260px' : '0',
        overflow: 'hidden',
        transition: 'max-height var(--dur-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '17px',
        lineHeight: 1.6,
        color: 'var(--text-muted)',
        margin: '0 4px 24px',
        maxWidth: '60ch'
      }
    }, a)));
  }
  function Faq() {
    const [open, setOpen] = React.useState(0);
    const items = [{
      q: 'Is this the official peace?',
      a: 'Yes — the one and only official accord of the Peace Administration, brought to the highest level of every nation and approved.'
    }, {
      q: 'How do I join?',
      a: 'Read the proclamation, add your name to the record, and join the dispatch. It takes only minutes to enlist on the winning side.'
    }, {
      q: 'What is the Accord?',
      a: 'A ceremonial record of the evening every nation came to the table and peace came up winning — yours to own and to keep.'
    }, {
      q: 'Is this real?',
      a: 'It is a ceremonial statement. Satire. And, by every measure, still winning.'
    }, {
      q: 'How will I be contacted?',
      a: 'Only through the dispatch you choose to join. The Peace Administration will never call or text you to request your personal information. Please be careful.'
    }];
    return /*#__PURE__*/React.createElement("section", {
      id: "faqs",
      style: {
        padding: '96px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-narrow)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: '44px'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      rules: true,
      align: "center",
      style: {
        maxWidth: '300px',
        margin: '0 auto 16px'
      }
    }, "Questions"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(28px,4vw,48px)',
        letterSpacing: '0.01em',
        color: 'var(--ink-900)',
        margin: 0
      }
    }, "Frequently Asked Questions")), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-hairline)'
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement(FaqItem, {
      key: i,
      q: it.q,
      a: it.a,
      open: open === i,
      onToggle: () => setOpen(open === i ? -1 : i)
    })))));
  }
  window.PeaceSite = Object.assign(window.PeaceSite || {}, {
    CommunityBanner,
    Faq
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Community.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Dispatch.jsx
try { (() => {
/* PEACE site — Dispatch sign-up + Footer */
(() => {
  const {
    Button,
    Input,
    Eyebrow,
    Seal,
    Card
  } = window.PeaceDesignSystem_adb1e5;
  function Dispatch() {
    const [sent, setSent] = React.useState(false);
    const [email, setEmail] = React.useState('');
    return /*#__PURE__*/React.createElement("section", {
      id: "dispatch",
      style: {
        padding: '88px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '720px',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      accent: true,
      padding: 48,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      align: "center",
      style: {
        marginBottom: '16px'
      }
    }, "Join the Dispatch"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(26px,3.4vw,38px)',
        color: 'var(--ink-900)',
        margin: '0 0 12px',
        letterSpacing: '0.02em'
      }
    }, "News From the Front Lines of Peace"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '18px',
        color: 'var(--text-body)',
        margin: '0 auto 28px',
        maxWidth: '46ch',
        lineHeight: 1.5
      }
    }, "Every accord, every signing, every victory \u2014 delivered to your desk as it happens."), sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '14px',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--laurel-600)',
        padding: '18px',
        border: '1px solid rgba(94,107,67,0.4)',
        borderRadius: 'var(--radius-sm)',
        background: 'rgba(94,107,67,0.08)'
      }
    }, "\u2713 You are enlisted. Welcome to the winning side.") : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        if (email.includes('@')) setSent(true);
      },
      style: {
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-end',
        maxWidth: '480px',
        margin: '0 auto',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: '220px'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Your Email",
      type: "email",
      placeholder: "citizen@nation.org",
      value: email,
      onChange: e => setEmail(e.target.value)
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      type: "submit",
      style: {
        height: '47px'
      }
    }, "Enlist")))));
  }
  function SocialLink({
    label,
    children
  }) {
    return /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      "aria-label": label,
      style: {
        width: '38px',
        height: '38px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(214,188,132,0.35)',
        borderRadius: 'var(--radius-sm)',
        color: 'var(--gold-400)'
      }
    }, children);
  }
  function Footer({
    onNav
  }) {
    const cols = [['The Peace', [['accord', 'The Accord'], ['about', 'Peace Facts'], ['terms', 'Terms']]], ['Take Part', [['join', 'How to Join'], ['scoreboard', 'Scoreboard'], ['dispatch', 'Dispatch']]], ['More', [['faqs', 'FAQ'], ['top', 'Home'], ['accord', 'Proclamation']]]];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--surface-inverse)',
        padding: '72px 32px 40px',
        color: 'var(--parchment-200)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.4fr) repeat(3, minmax(0,1fr))',
        gap: '40px'
      },
      className: "peace-footer-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '20px'
      }
    }, /*#__PURE__*/React.createElement(Seal, {
      size: 60,
      color: "var(--gold-400)",
      deep: "var(--gold-400)"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '26px',
        letterSpacing: '0.16em',
        color: 'var(--parchment-100)'
      }
    }, "PEACE"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '10px',
        letterSpacing: '0.32em',
        color: 'var(--gold-400)',
        marginTop: '4px'
      }
    }, "AND STILL WINNING"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement(SocialLink, {
      label: "X"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18.9 2H22l-7.3 8.3L23 22h-6.6l-5-6.6L5.7 22H2.5l7.8-8.9L1.5 2h6.8l4.5 6 5.1-6Zm-1.2 18h1.8L7.2 3.9H5.3L17.7 20Z"
    }))), /*#__PURE__*/React.createElement(SocialLink, {
      label: "Dispatch"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 5h16v14H4z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 6l8 6 8-6"
    }))))), cols.map(([title, links]) => /*#__PURE__*/React.createElement("div", {
      key: title
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '10px',
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
        color: 'var(--gold-400)',
        marginBottom: '16px'
      }
    }, title), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }
    }, links.map(([id, label], i) => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: `#${id}`,
      onClick: e => {
        e.preventDefault();
        onNav(id);
      },
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '16px',
        color: 'var(--parchment-300)',
        textDecoration: 'none'
      }
    }, label)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '1px',
        background: 'rgba(214,188,132,0.3)',
        margin: '48px 0 24px'
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: '11.5px',
        lineHeight: 1.7,
        color: 'var(--taupe-400)',
        margin: '0 0 18px',
        maxWidth: '92ch'
      }
    }, "The PEACE proclamation is intended to function as an expression of support for, and engagement with, the ideals embodied by the symbol \"PEACE\" and its associated artwork, and is not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. The Peace Administration is satire and has nothing to do with any political campaign, office, or governmental agency. The Peace Administration will never call, text, or email to request your personal information \u2014 please be careful."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: '12px',
        color: 'var(--taupe-400)'
      }
    }, "\xA9 MMXXVI \u2014 The Peace Administration. All winning reserved."), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: '12px',
        color: 'var(--taupe-400)'
      }
    }, "Privacy \xB7 Terms \xB7 A ceremonial statement. Satire."))));
  }
  window.PeaceSite = Object.assign(window.PeaceSite || {}, {
    Dispatch,
    Footer
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Dispatch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* PEACE site — Header */
(() => {
  const {
    Button,
    Seal
  } = window.PeaceDesignSystem_adb1e5;
  function Header({
    onNav,
    active
  }) {
    const links = [{
      id: 'accord',
      label: 'The Accord'
    }, {
      id: 'about',
      label: 'Peace Facts'
    }, {
      id: 'join',
      label: 'How to Join'
    }, {
      id: 'faqs',
      label: 'FAQ'
    }];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'rgba(230,228,222,0.86)',
        backdropFilter: 'saturate(120%) blur(6px)',
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '14px 32px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#top",
      onClick: e => {
        e.preventDefault();
        onNav('top');
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Seal, {
      size: 40,
      year: ""
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '22px',
        letterSpacing: '0.16em',
        color: 'var(--ink-900)'
      }
    }, "PEACE")), /*#__PURE__*/React.createElement("nav", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '32px'
      }
    }, links.map(l => /*#__PURE__*/React.createElement("a", {
      key: l.id,
      href: `#${l.id}`,
      onClick: e => {
        e.preventDefault();
        onNav(l.id);
      },
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '11px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: active === l.id ? 'var(--text-gold)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast)'
      }
    }, l.label)), /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      size: "sm",
      onClick: () => onNav('accord')
    }, "Read Proclamation"))));
  }
  window.PeaceSite = Object.assign(window.PeaceSite || {}, {
    Header
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* PEACE site — image-forward Hero + framed Accord band */
(() => {
  const {
    Button,
    Badge
  } = window.PeaceDesignSystem_adb1e5;
  function Chip({
    k,
    v
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        paddingRight: '22px',
        borderRight: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: 1,
        color: 'var(--ink-900)'
      }
    }, v), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '9px',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'var(--text-gold)'
      }
    }, k));
  }
  function Hero({
    onNav
  }) {
    const {
      Placeholder
    } = window.PeaceSite;
    return /*#__PURE__*/React.createElement("section", {
      id: "top",
      style: {
        padding: '72px 32px 84px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)',
        gap: '56px',
        alignItems: 'center'
      },
      className: "peace-hero-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: '22px'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "gold",
      style: {
        whiteSpace: 'nowrap'
      }
    }, "Official Peace \xB7 MMXXVI")), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(46px, 7vw, 86px)',
        lineHeight: 1.0,
        letterSpacing: '0.02em',
        color: 'var(--ink-900)',
        margin: '0 0 22px'
      }
    }, "THE WAR", /*#__PURE__*/React.createElement("br", null), "IS OVER"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'clamp(18px,2.2vw,23px)',
        color: 'var(--text-body)',
        maxWidth: '46ch',
        margin: '0 0 14px',
        lineHeight: 1.5
      }
    }, "Join the winning side. Every nation is at the table \u2014 this is history in the making."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontStyle: 'italic',
        fontSize: '19px',
        color: 'var(--text-gold)',
        margin: '0 0 32px'
      }
    }, "\"Celebrate our win \u2014 and have fun.\""), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '14px',
        flexWrap: 'wrap',
        marginBottom: '40px'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      size: "lg",
      onClick: () => onNav('accord')
    }, "Read the Proclamation"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => onNav('join')
    }, "Join the Dispatch")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '22px',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      k: "Signed",
      v: "MMXXVI"
    }), /*#__PURE__*/React.createElement(Chip, {
      k: "Nations",
      v: "59"
    }), /*#__PURE__*/React.createElement(Chip, {
      k: "Wars Active",
      v: "0"
    }))), /*#__PURE__*/React.createElement(Placeholder, {
      label: "Portrait of the Signing",
      sealSize: 150,
      style: {
        aspectRatio: '4 / 5',
        width: '100%',
        boxShadow: 'var(--shadow-md)'
      }
    })));
  }
  function AccordBand({
    expanded,
    onToggle
  }) {
    const {
      Proclamation
    } = window.PeaceDesignSystem_adb1e5;
    const shortText = 'Based on the fact that all parties have come to the table, I am proud to announce that, as of this evening, the war is over. Peace has won — and we are still winning.';
    const longTail = ' Discussions and final points have been, in both concept and great detail, approved by every nation involved. The accord will remain in full force and effect, in perpetuity — by every measure, the most beautiful agreement ever signed.';
    return /*#__PURE__*/React.createElement("section", {
      id: "accord",
      style: {
        padding: '84px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-narrow)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Proclamation, {
      signature: "The Peace Administration"
    }, shortText, expanded ? longTail : ''), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onToggle,
      style: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '11px',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'var(--text-gold)'
      }
    }, expanded ? 'Show Less' : 'Read the Full Proclamation'))));
  }
  window.PeaceSite = Object.assign(window.PeaceSite || {}, {
    Hero,
    AccordBand
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Parts.jsx
try { (() => {
/* PEACE site — shared parts: ceremonial placeholder, top ticker, medallion marquee */
(() => {
  const {
    Seal
  } = window.PeaceDesignSystem_adb1e5;

  /* A warm, on-brand image placeholder: parchment panel, gold frame,
     faint seal watermark, and a letterspaced caption. Swap for real art later. */
  function Placeholder({
    label = 'Commemorative Portrait',
    circle = false,
    sealSize = 96,
    style = {}
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(155deg, var(--parchment-100), var(--parchment-300))',
        border: '1px solid var(--border-gold)',
        borderRadius: circle ? '50%' : 'var(--radius-md)',
        overflow: 'hidden',
        ...style
      }
    }, /*#__PURE__*/React.createElement(Seal, {
      size: sealSize,
      year: "",
      color: "rgba(173,138,71,0.34)",
      deep: "rgba(173,138,71,0.34)"
    }), label ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        bottom: '14px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '10px',
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, label) : null);
  }
  function TopTicker() {
    const items = ['The Signing of the Accord', 'And Still Winning', 'Witness the Peace · MMXXVI', 'Every Nation at the Table', 'The War Is Over'];
    const base = [...items, ...items, ...items];
    const row = [...base, ...base];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-inverse)',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(214,188,132,0.22)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "peace-marquee",
      style: {
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        width: 'max-content',
        padding: '9px 0'
      }
    }, row.map((t, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '34px',
        paddingRight: '34px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '11px',
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: 'var(--gold-400)'
      }
    }, t, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '5px',
        height: '5px',
        rotate: '45deg',
        background: 'var(--gold-500)',
        display: 'inline-block'
      }
    })))));
  }
  function MedallionMarquee() {
    const labels = ['Fight, Fight, Fight', 'And Still Winning', 'The Accord', 'Peace Has Won', 'Own a Piece of History'];
    const row = [...labels, ...labels];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-sunken)',
        padding: '38px 0',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-hairline)',
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "peace-marquee-slow",
      style: {
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        width: 'max-content'
      }
    }, row.map((l, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '26px',
        paddingRight: '52px'
      }
    }, /*#__PURE__*/React.createElement(Seal, {
      size: 56,
      year: ""
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '26px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--ink-900)'
      }
    }, l)))));
  }
  window.PeaceSite = Object.assign(window.PeaceSite || {}, {
    Placeholder,
    TopTicker,
    MedallionMarquee
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PeaceFacts.jsx
try { (() => {
/* PEACE site — About / "Peace Facts" + narrative */
(() => {
  const {
    Seal,
    Eyebrow,
    Rule
  } = window.PeaceDesignSystem_adb1e5;
  function Fact({
    n,
    title,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '18px',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '0 0 auto',
        marginTop: '2px'
      }
    }, /*#__PURE__*/React.createElement(Seal, {
      size: 42,
      year: ""
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '10px',
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
        color: 'var(--text-gold)',
        marginBottom: '6px'
      }
    }, "Peace Fact ", n), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '20px',
        letterSpacing: '0.01em',
        color: 'var(--ink-900)',
        margin: '0 0 6px'
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '16px',
        lineHeight: 1.5,
        color: 'var(--text-muted)',
        margin: 0
      }
    }, children)));
  }
  function PeaceFacts() {
    const {
      Placeholder
    } = window.PeaceSite;
    return /*#__PURE__*/React.createElement("section", {
      id: "about",
      style: {
        padding: '92px 32px 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        maxWidth: '720px',
        margin: '0 auto 56px'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      rules: true,
      align: "center",
      style: {
        maxWidth: '320px',
        margin: '0 auto 18px'
      }
    }, "Peace Facts"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(30px,4.4vw,52px)',
        letterSpacing: '0.01em',
        color: 'var(--ink-900)',
        margin: '0 0 14px'
      }
    }, "Peace: The Winning Doctrine"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '19px',
        lineHeight: 1.5,
        color: 'var(--text-body)',
        margin: 0
      }
    }, "A nation celebrating courage and calm \u2014 the accord with a winning attitude.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)',
        gap: '56px',
        alignItems: 'center'
      },
      className: "peace-facts-grid"
    }, /*#__PURE__*/React.createElement(Placeholder, {
      label: "The Commemorative Edition",
      sealSize: 150,
      style: {
        aspectRatio: '5 / 6',
        width: '100%',
        boxShadow: 'var(--shadow-md)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: '32px'
      }
    }, /*#__PURE__*/React.createElement(Fact, {
      n: "1",
      title: "The Only Official Peace"
    }, "The one true accord, brought to the highest level of every nation's leadership and approved."), /*#__PURE__*/React.createElement(Fact, {
      n: "2",
      title: "A Collector's Moment"
    }, "The ultimate commemorative record of the day the world chose calm over conflict."), /*#__PURE__*/React.createElement(Fact, {
      n: "3",
      title: "Courage, Captured"
    }, "It celebrates a leader who does not back down \u2014 and who won the peace, against every odd."), /*#__PURE__*/React.createElement(Fact, {
      n: "4",
      title: "Join & Have Fun"
    }, "Start collecting the story of the win. The dispatch is open to every patriot of peace.")))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-narrow)',
        margin: '76px auto 0',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Rule, {
      style: {
        maxWidth: '440px',
        margin: '0 auto 34px'
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'clamp(18px,2.1vw,22px)',
        lineHeight: 1.62,
        color: 'var(--text-body)',
        margin: 0,
        textWrap: 'pretty'
      }
    }, "On the evening of the signing, the world held its breath \u2014 and peace came up winning. With every nation at the table and the accord in hand, a movement was born: calm, certain, and unrelenting. Now you can own your piece of the history. This is for those who fight for what matters \u2014 and finish by winning.")));
  }
  window.PeaceSite = Object.assign(window.PeaceSite || {}, {
    PeaceFacts
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PeaceFacts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Scoreboard.jsx
try { (() => {
/* PEACE site — Scoreboard (the peace tally) + a bronze quote band */
(() => {
  const {
    Eyebrow,
    Stat,
    Rule
  } = window.PeaceDesignSystem_adb1e5;
  function Scoreboard() {
    const stats = [{
      value: '0',
      label: 'Wars Active',
      sub: 'As of this morning'
    }, {
      value: '59',
      label: 'Nations at the Table',
      sub: 'And counting'
    }, {
      value: '412',
      label: 'Days of Peace',
      sub: 'Uninterrupted'
    }, {
      value: '∞',
      label: 'And Still Winning',
      sub: 'In perpetuity'
    }];
    return /*#__PURE__*/React.createElement("section", {
      id: "scoreboard",
      style: {
        background: 'var(--surface-sunken)',
        padding: '80px 32px',
        borderTop: '1px solid var(--border-hairline)',
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      rules: true,
      align: "center",
      style: {
        maxWidth: '420px',
        margin: '0 auto 8px'
      }
    }, "The Scoreboard of Peace"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        textAlign: 'center',
        fontSize: 'clamp(28px,4vw,42px)',
        color: 'var(--ink-900)',
        margin: '0 0 48px',
        letterSpacing: '0.02em'
      }
    }, "By Every Measure, Winning"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px'
      }
    }, stats.map((s, i) => /*#__PURE__*/React.createElement(Stat, {
      key: i,
      value: s.value,
      label: s.label,
      sub: s.sub
    }))), /*#__PURE__*/React.createElement(Rule, {
      style: {
        maxWidth: '520px',
        margin: '52px auto 0'
      }
    })));
  }
  function QuoteBand() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-inverse)',
        padding: '88px 32px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '780px',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "40",
      height: "40",
      viewBox: "0 0 24 24",
      fill: "var(--gold-400)",
      "aria-hidden": "true",
      style: {
        marginBottom: '24px'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2 L14.6 9.0 L22 9.3 L16.1 13.9 L18.2 21 L12 16.7 L5.8 21 L7.9 13.9 L2 9.3 L9.4 9.0 Z"
    })), /*#__PURE__*/React.createElement("blockquote", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'clamp(26px,3.6vw,40px)',
        lineHeight: 1.32,
        color: 'var(--parchment-100)',
        margin: 0,
        fontStyle: 'italic',
        textWrap: 'pretty'
      }
    }, "\"It is the greatest peace in the history of the world \u2014 and we are only getting started.\""), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '32px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '12px',
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: 'var(--gold-400)'
      }
    }, "The Peace Administration")));
  }
  window.PeaceSite = Object.assign(window.PeaceSite || {}, {
    Scoreboard,
    QuoteBand
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Scoreboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Steps.jsx
try { (() => {
/* PEACE site — Join in Three Steps (how-to analog) */
(() => {
  const {
    Eyebrow,
    Card,
    Button
  } = window.PeaceDesignSystem_adb1e5;
  function Step({
    n,
    title,
    children,
    cta
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      accent: true,
      padding: 34,
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '64px',
        lineHeight: 1,
        color: 'var(--gold-500)',
        margin: '0 0 18px'
      }
    }, n), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '23px',
        letterSpacing: '0.01em',
        color: 'var(--ink-900)',
        margin: '0 0 10px'
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '16px',
        lineHeight: 1.55,
        color: 'var(--text-muted)',
        margin: '0 0 24px',
        flex: 1
      }
    }, children), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, cta)));
  }
  function Steps({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: "join",
      style: {
        padding: '96px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: '52px'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      rules: true,
      align: "center",
      style: {
        maxWidth: '300px',
        margin: '0 auto 16px'
      }
    }, "How to Join"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(28px,4vw,48px)',
        letterSpacing: '0.01em',
        color: 'var(--ink-900)',
        margin: 0
      }
    }, "Join the Peace, in Three Steps")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px'
      },
      className: "peace-steps-grid"
    }, /*#__PURE__*/React.createElement(Step, {
      n: "1",
      title: "Read the Accord",
      cta: "Open the Proclamation"
    }, "Review the terms every nation signed, in both concept and great detail \u2014 approved by all parties involved."), /*#__PURE__*/React.createElement(Step, {
      n: "2",
      title: "Raise Your Hand",
      cta: "Add Your Name"
    }, "Add your name to the record of those who stand with peace. The winning side is open to all."), /*#__PURE__*/React.createElement(Step, {
      n: "3",
      title: "Join the Dispatch",
      cta: "Enlist Now"
    }, "Every signing, every accord, every victory \u2014 delivered to your desk as history is made."))));
  }
  window.PeaceSite = Object.assign(window.PeaceSite || {}, {
    Steps
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Steps.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Terms.jsx
try { (() => {
/* PEACE site — Terms of the Accord (allocation analog) */
(() => {
  const {
    Eyebrow,
    Card
  } = window.PeaceDesignSystem_adb1e5;
  function Bar({
    label,
    pct,
    value
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '12px',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--ink-900)'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '18px',
        color: 'var(--text-gold)'
      }
    }, value)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '10px',
        background: 'var(--parchment-300)',
        borderRadius: 'var(--radius-pill)',
        overflow: 'hidden',
        marginTop: '9px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + '%',
        height: '100%',
        background: 'linear-gradient(90deg, var(--gold-600), var(--gold-400))'
      }
    })));
  }
  function Terms() {
    return /*#__PURE__*/React.createElement("section", {
      id: "terms",
      style: {
        padding: '92px 32px',
        background: 'var(--surface-sunken)',
        borderTop: '1px solid var(--border-hairline)',
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        gap: '56px',
        alignItems: 'center'
      },
      className: "peace-terms-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        marginBottom: '16px'
      }
    }, "Terms of the Accord"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(28px,3.8vw,46px)',
        letterSpacing: '0.01em',
        color: 'var(--ink-900)',
        margin: '0 0 18px'
      }
    }, "Allocation of the Peace"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '18px',
        lineHeight: 1.6,
        color: 'var(--text-body)',
        margin: '0 0 16px',
        maxWidth: '46ch'
      }
    }, "Fifty-nine nations at the table on day one, growing to the whole of the world over three years. Each accord is released on its own schedule \u2014 calm distributed, peace upheld, the winning compounded."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: '12px',
        lineHeight: 1.6,
        color: 'var(--text-faint)',
        margin: 0,
        maxWidth: '52ch'
      }
    }, "A ceremonial statement and not an offering of any security or instrument of any type. The Peace Administration is satire and has nothing to do with any campaign, office, or agency. See the full terms below.")), /*#__PURE__*/React.createElement(Card, {
      padding: 36,
      raised: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '11px',
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
        color: 'var(--text-gold)',
        marginBottom: '24px'
      }
    }, "The Accord Report"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: '22px'
      }
    }, /*#__PURE__*/React.createElement(Bar, {
      label: "Lands at Peace",
      pct: 100,
      value: "100%"
    }), /*#__PURE__*/React.createElement(Bar, {
      label: "Treaties Upheld",
      pct: 92,
      value: "92%"
    }), /*#__PURE__*/React.createElement(Bar, {
      label: "Nations Aligned",
      pct: 78,
      value: "78%"
    }), /*#__PURE__*/React.createElement(Bar, {
      label: "And Still Winning",
      pct: 100,
      value: "\u221E"
    })))));
  }
  window.PeaceSite = Object.assign(window.PeaceSite || {}, {
    Terms
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Terms.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Seal = __ds_scope.Seal;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Proclamation = __ds_scope.Proclamation;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Input = __ds_scope.Input;

})();
