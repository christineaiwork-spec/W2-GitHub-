/* @ds-bundle: {"format":4,"namespace":"GradientDesignSystem_46fafe","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"SidebarSection","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"SidebarItem","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"06ed46b0db64","components/core/Button.jsx":"ad6c27418762","components/core/Card.jsx":"7d95cdae71d6","components/core/Icon.jsx":"e31233cd9de3","components/core/IconButton.jsx":"9f9f2407f73b","components/core/Rule.jsx":"432df9d3ee9e","components/data/Table.jsx":"c8a631c56e35","components/feedback/Banner.jsx":"565f7df0322a","components/feedback/EmptyState.jsx":"a3e921e7076e","components/feedback/Modal.jsx":"17d687ad23fc","components/feedback/Skeleton.jsx":"59f75aa5ee4e","components/feedback/Toast.jsx":"89fd967da74b","components/forms/Checkbox.jsx":"8e10060c822c","components/forms/Field.jsx":"6d1ab4c7c91e","components/forms/Input.jsx":"0ee2a73636f9","components/forms/Radio.jsx":"7ebd833c9ced","components/forms/Select.jsx":"57323a65f81b","components/forms/Switch.jsx":"6d6cdf2a4acb","components/forms/Textarea.jsx":"cdf2dc99c770","components/navigation/Breadcrumbs.jsx":"1eca4ef5bc67","components/navigation/NavLink.jsx":"cdec06483c02","components/navigation/Pagination.jsx":"f3ddcf8dea68","components/navigation/Sidebar.jsx":"2c16bffe9a15","components/navigation/Tabs.jsx":"96cee66f9e27","components/navigation/TopBar.jsx":"caf0d562e7fa","examples/aurora-coffee/landing-page.jsx":"7d7406df7d75","ui_kits/catalog/catalog-app.jsx":"3581826a5776","ui_kits/console/app-shell.jsx":"81317251ecf7","ui_kits/console/console-app.jsx":"0cfd6c709a1c","ui_kits/console/deployments-screen.jsx":"65bf614afc96","ui_kits/console/login-screen.jsx":"e50368c64ce8","ui_kits/console/overview-screen.jsx":"d40b71b6db9c","ui_kits/console/settings-screen.jsx":"21ef4a0b6536","ui_kits/marketing/docs-page.jsx":"f665323c0e57","ui_kits/marketing/home-page.jsx":"a9cfa3d0e863","ui_kits/marketing/pricing-page.jsx":"9991cb858f95","ui_kits/marketing/site-app.jsx":"9ea6b98e27e6","ui_kits/marketing/site-nav.jsx":"79cb45970c80"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GradientDesignSystem_46fafe = window.GradientDesignSystem_46fafe || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = "neutral",
  numeric = false,
  dot = false,
  shape = "pill",
  className,
  style
}) {
  const cls = ["gds-badge", "gds-badge--" + tone];
  if (numeric) cls.push("gds-badge--numeric");
  if (shape === "tag") cls.push("gds-tag");
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("span", {
    className: cls.join(" "),
    style: style
  }, dot ? /*#__PURE__*/React.createElement("span", {
    className: "gds-badge__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = "secondary",
  size = "md",
  type = "button",
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  href,
  onClick,
  className,
  style,
  ...rest
}) {
  const cls = ["gds-btn", "gds-btn--" + variant];
  if (size !== "md") cls.push("gds-btn--" + size);
  if (block) cls.push("gds-btn--block");
  if (className) cls.push(className);
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "gds-btn__icon"
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "gds-btn__icon"
  }, iconRight) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls.join(" "),
      href: href,
      style: style,
      onClick: onClick
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls.join(" "),
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: style
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  title,
  description,
  children,
  footer,
  media,
  mediaAlt = "",
  elevated = false,
  interactive = false,
  flush = false,
  as,
  onClick,
  className,
  style,
  ...rest
}) {
  const cls = ["gds-card"];
  if (elevated) cls.push("gds-card--raised");
  if (interactive) cls.push("gds-card--interactive");
  if (flush || media) cls.push("gds-card--flush");
  if (className) cls.push(className);
  const Tag = as || (interactive ? "button" : "div");
  const pad = flush || media ? {
    padding: "var(--space-6)"
  } : null;
  const head = title || description ? /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "gds-card__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "gds-card__desc"
  }, description) : null) : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls.join(" "),
    onClick: onClick,
    style: style
  }, rest), media ? /*#__PURE__*/React.createElement("img", {
    className: "gds-card__media",
    src: media,
    alt: mediaAlt
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: pad
  }, head, children ? /*#__PURE__*/React.createElement("div", {
    className: head ? "gds-card__body" : undefined
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    className: "gds-card__footer"
  }, footer) : null));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* Lucide (ISC) — packaged locally. DESIGN.md ships no icon set, so Lucide is a flagged
   substitution: 24px grid, 1.5px stroke, round caps — the closest match to the system's
   hairline weight. Glyph geometry is inlined below so nothing loads at runtime.
   To add a glyph: copy the inner markup of the Lucide SVG into GLYPHS, name unchanged. */
const GLYPHS = {
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "circle-alert": '<circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
  "circle-check": '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  "circle-user": '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>',
  "credit-card": '<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>',
  "external-link": '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  "file-text": '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  "git-branch": '<path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  "layout-dashboard": '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  minus: '<path d="M5 12h14"/>',
  "move-horizontal": '<path d="m18 8 4 4-4 4"/><path d="M2 12h20"/><path d="m6 8-4 4 4 4"/>',
  "panel-left-close": '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>',
  "panel-left-open": '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m14 9 3 3-3 3"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  "rotate-ccw": '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  terminal: '<path d="m4 17 6-6-6-6"/><path d="M12 19h8"/>',
  "triangle-alert": '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
};
function Icon({
  name,
  size = 16,
  strokeWidth = 1.5,
  color = "currentColor",
  label,
  style,
  className
}) {
  const markup = GLYPHS[name];
  if (markup === undefined && typeof console !== "undefined") {
    console.warn('Icon: "' + name + '" is not packaged. Add its Lucide markup to GLYPHS in components/core/Icon.jsx.');
  }
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": label ? undefined : true,
    role: label ? "img" : undefined,
    "aria-label": label,
    style: {
      flex: "0 0 auto",
      display: "inline-block",
      verticalAlign: "middle",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: markup || ""
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  onClick,
  className,
  style,
  ...rest
}) {
  const cls = ["gds-btn", "gds-btn--" + variant, "gds-iconbtn"];
  if (size !== "md") cls.push("gds-btn--" + size);
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls.join(" "),
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "gds-btn__icon"
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
/** The dissolving rule — the system's signature divider. Fades out at both ends. */
function Rule({
  spacing = "section",
  orientation = "horizontal",
  className,
  style
}) {
  const cls = ["gds-rule"];
  if (spacing === "tight") cls.push("gds-rule--tight");
  if (spacing === "none") cls.push("gds-rule--flush");
  if (orientation === "vertical") cls.push("gds-rule--vertical");
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("hr", {
    className: cls.join(" "),
    style: style,
    "aria-hidden": "true"
  });
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
/* Responsive modes — see DESIGN.md §8 "Collapsing strategy" and backlog.md item 1.
   stack (default): below `stackAt`, each row reflows into a surface card via CSS only.
   scroll: the grid is preserved and the wrapper becomes a focusable, labelled scroll region. */
function Table({
  columns = [],
  rows = [],
  selectedId,
  onRowClick,
  rowKey = "id",
  empty,
  responsive = "stack",
  primaryKey,
  stackAt = "md",
  label = "Table",
  className,
  style
}) {
  const scroll = responsive === "scroll";
  const ref = React.useRef(null);
  const [fade, setFade] = React.useState(false);
  React.useEffect(() => {
    if (!scroll) return;
    const el = ref.current;
    if (!el) return;
    const measure = () => setFade(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    measure();
    const raf = requestAnimationFrame(measure);
    el.addEventListener("scroll", measure, {
      passive: true
    });
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (ro) {
      ro.observe(el);
      if (el.firstChild) ro.observe(el.firstChild);
    }
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", measure);
      if (ro) ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [scroll, columns, rows]);

  /* Card heading column: declared key, else first non-numeric column, else none. */
  let primary = null;
  if (!scroll) {
    if (primaryKey) {
      primary = columns.find(c => c.key === primaryKey) || null;
      if (!primary && typeof console !== "undefined") {
        console.warn('Table: primaryKey "' + primaryKey + '" matches no column — falling back to the first non-numeric column.');
      }
    }
    if (!primary) primary = columns.find(c => !c.numeric) || null;
  }
  const cls = ["gds-table"];
  if (onRowClick) cls.push("gds-table--clickable");
  if (className) cls.push(className);
  const wrapCls = ["gds-table-wrap", scroll ? "gds-table-wrap--scroll" : "gds-table-wrap--stack"];
  if (scroll && fade) wrapCls.push("gds-table-wrap--fade");
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: wrapCls.join(" "),
    "data-stack-at": scroll ? undefined : stackAt,
    tabIndex: scroll ? 0 : undefined,
    role: scroll ? "region" : undefined,
    "aria-label": scroll ? label : undefined,
    style: style
  }, /*#__PURE__*/React.createElement("table", {
    className: cls.join(" "),
    role: "table",
    "aria-label": scroll ? undefined : label
  }, /*#__PURE__*/React.createElement("thead", {
    role: "rowgroup"
  }, /*#__PURE__*/React.createElement("tr", {
    role: "row"
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    role: "columnheader",
    scope: "col",
    className: c.numeric ? "gds-num" : undefined,
    style: c.width ? {
      width: c.width
    } : undefined
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", {
    role: "rowgroup"
  }, rows.length === 0 ? /*#__PURE__*/React.createElement("tr", {
    role: "row"
  }, /*#__PURE__*/React.createElement("td", {
    role: "cell",
    colSpan: columns.length,
    style: {
      height: 120,
      textAlign: "center",
      color: "var(--ink-faint)"
    }
  }, empty || "No rows")) : rows.map(r => {
    const id = r[rowKey];
    return /*#__PURE__*/React.createElement("tr", {
      key: id,
      role: "row",
      onClick: onRowClick ? () => onRowClick(r) : undefined,
      className: selectedId != null && selectedId === id ? "gds-table__row--selected" : undefined
    }, columns.map(c => {
      const isPrimary = primary != null && c.key === primary.key;
      const value = c.render ? c.render(r) : r[c.key];
      const cellCls = [];
      if (c.numeric) cellCls.push("gds-num");
      if (isPrimary) cellCls.push("gds-table__primary");
      return /*#__PURE__*/React.createElement("td", {
        key: c.key,
        role: "cell",
        className: cellCls.length ? cellCls.join(" ") : undefined,
        "data-label": isPrimary ? undefined : typeof c.label === "string" ? c.label : undefined
      }, value);
    }));
  }))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
const TONE_ICON = {
  info: "info",
  success: "circle-check",
  warning: "triangle-alert",
  danger: "circle-alert"
};
function Banner({
  tone = "info",
  title,
  children,
  action,
  onDismiss,
  className,
  style
}) {
  const cls = ["gds-banner", "gds-banner--" + tone];
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("div", {
    className: cls.join(" "),
    role: tone === "danger" ? "alert" : "status",
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "gds-banner__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: TONE_ICON[tone],
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("div", {
    className: "gds-banner__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "gds-banner__body"
  }, children) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, action) : null), onDismiss ? /*#__PURE__*/React.createElement("span", {
    className: "gds-banner__close"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    size: "sm",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "x"
    }),
    label: "Dismiss",
    onClick: onDismiss
  })) : null);
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = "inbox",
  title,
  children,
  action,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className ? "gds-empty " + className : "gds-empty",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "gds-empty__art"
  }, typeof icon === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 48,
    strokeWidth: 1.25
  }) : icon), title ? /*#__PURE__*/React.createElement("h3", {
    className: "gds-empty__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("p", {
    className: "gds-empty__desc"
  }, children) : null, action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function Modal({
  open = true,
  title,
  children,
  footer,
  onClose,
  showClose = true,
  width,
  className,
  style
}) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "gds-scrim",
    onClick: onClose ? e => {
      if (e.target === e.currentTarget) onClose();
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: className ? "gds-modal " + className : "gds-modal",
    role: "dialog",
    "aria-modal": "true",
    style: width ? {
      maxWidth: width,
      ...style
    } : style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-4)"
    }
  }, title ? /*#__PURE__*/React.createElement("h2", {
    className: "gds-modal__title",
    style: {
      flex: 1
    }
  }, title) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), showClose && onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    size: "sm",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "x"
    }),
    label: "Close",
    onClick: onClose
  }) : null), children ? /*#__PURE__*/React.createElement("div", {
    className: "gds-modal__body"
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    className: "gds-modal__footer"
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function Skeleton({
  width = "100%",
  height = 12,
  radius = "var(--radius-xs)",
  lines = 1,
  style,
  className
}) {
  const cls = className ? "gds-skeleton " + className : "gds-skeleton";
  if (lines > 1) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)",
        ...style
      }
    }, Array.from({
      length: lines
    }).map((_, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: cls,
      style: {
        width: i === lines - 1 ? "62%" : width,
        height,
        borderRadius: radius
      }
    })));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: {
      width,
      height,
      borderRadius: radius,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONE_ICON = {
  info: "info",
  success: "circle-check",
  warning: "triangle-alert",
  danger: "circle-alert"
};
function Toast({
  tone = "info",
  title,
  children,
  action,
  onDismiss,
  className,
  style
}) {
  const cls = ["gds-toast", "gds-toast--" + tone];
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("div", {
    className: cls.join(" "),
    role: "status",
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: tone === "info" ? "var(--accent)" : "var(--" + tone + ")",
      display: "inline-flex",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: TONE_ICON[tone],
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "gds-toast__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "gds-toast__body"
  }, children) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, action) : null), onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    size: "sm",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "x"
    }),
    label: "Dismiss",
    onClick: onDismiss
  }) : null);
}
function ToastStack({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "gds-toast__stack",
    style: style
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  disabled,
  onChange,
  id,
  className,
  style,
  ...rest
}) {
  const cls = ["gds-choice"];
  if (disabled) cls.push("gds-choice--disabled");
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("label", {
    className: cls.join(" "),
    style: style,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "gds-choice__box"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "gds-choice__mark",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })))), /*#__PURE__*/React.createElement("span", {
    className: "gds-choice__label"
  }, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "gds-choice__desc"
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/** Shared label + helper/error scaffold for every form control. */
function Field({
  label,
  htmlFor,
  required,
  help,
  error,
  children,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className ? "gds-field " + className : "gds-field",
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "gds-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "gds-field__req"
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "gds-field__help gds-field__help--error"
  }, error) : help ? /*#__PURE__*/React.createElement("span", {
    className: "gds-field__help"
  }, help) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  help,
  error,
  required,
  id,
  type = "text",
  prefix,
  suffix,
  className,
  style,
  ...rest
}) {
  const cls = ["gds-control"];
  if (error) cls.push("gds-control--error");
  if (className) cls.push(className);
  const control = /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    className: cls.join(" "),
    "aria-invalid": error ? true : undefined
  }, rest));
  const wrapped = prefix || suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "var(--space-3)",
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--ink-faint)",
      display: "inline-flex",
      pointerEvents: "none"
    }
  }, prefix) : null, React.cloneElement(control, {
    style: {
      paddingLeft: prefix ? "36px" : undefined,
      paddingRight: suffix ? "36px" : undefined
    }
  }), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "var(--space-3)",
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--ink-faint)",
      display: "inline-flex"
    }
  }, suffix) : null) : control;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    htmlFor: id,
    required: required,
    help: help,
    error: error,
    style: style
  }, wrapped);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  name,
  value,
  checked,
  defaultChecked,
  disabled,
  onChange,
  id,
  className,
  style,
  ...rest
}) {
  const cls = ["gds-choice"];
  if (disabled) cls.push("gds-choice--disabled");
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("label", {
    className: cls.join(" "),
    style: style,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "gds-choice__box gds-choice__box--radio"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gds-choice__dot"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "gds-choice__label"
  }, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "gds-choice__desc"
  }, description) : null));
}
function RadioGroup({
  label,
  children,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("fieldset", {
    className: className,
    style: {
      border: 0,
      padding: 0,
      margin: 0,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("legend", {
    className: "gds-field__label",
    style: {
      padding: 0
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, children));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  help,
  error,
  required,
  id,
  options = [],
  placeholder,
  children,
  className,
  style,
  ...rest
}) {
  const cls = ["gds-control", "gds-control--select"];
  if (error) cls.push("gds-control--error");
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    htmlFor: id,
    required: required,
    help: help,
    error: error,
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "gds-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: cls.join(" "),
    "aria-invalid": error ? true : undefined
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, children || options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    className: "gds-select-wrap__chevron"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  id,
  labelPosition = "end",
  className,
  style,
  ...rest
}) {
  const cls = ["gds-switch"];
  if (disabled) cls.push("gds-switch--disabled");
  if (className) cls.push(className);
  const track = /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "gds-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gds-switch__knob"
  })));
  return /*#__PURE__*/React.createElement("label", {
    className: cls.join(" "),
    style: style,
    htmlFor: id
  }, labelPosition === "start" ? /*#__PURE__*/React.createElement("span", null, label) : null, track, labelPosition === "end" ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  help,
  error,
  required,
  id,
  rows = 4,
  className,
  style,
  ...rest
}) {
  const cls = ["gds-control", "gds-control--textarea"];
  if (error) cls.push("gds-control--error");
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    htmlFor: id,
    required: required,
    help: help,
    error: error,
    style: style
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    className: cls.join(" "),
    "aria-invalid": error ? true : undefined
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function Breadcrumbs({
  items = [],
  separator,
  className,
  style
}) {
  const last = items.length - 1;
  const sep = separator || /*#__PURE__*/React.createElement("svg", {
    className: "gds-crumbs__sep",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  }));
  return /*#__PURE__*/React.createElement("nav", {
    className: className ? "gds-crumbs " + className : "gds-crumbs",
    "aria-label": "Breadcrumb",
    style: style
  }, items.map((raw, i) => {
    const it = typeof raw === "string" ? {
      label: raw
    } : raw;
    const current = i === last;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, current ? /*#__PURE__*/React.createElement("span", {
      className: "gds-crumbs__current",
      "aria-current": "page"
    }, it.icon ? /*#__PURE__*/React.createElement("span", {
      className: "gds-crumbs__icon"
    }, it.icon) : null, it.label) : it.href ? /*#__PURE__*/React.createElement("a", {
      className: "gds-crumbs__link",
      href: it.href,
      onClick: it.onClick
    }, it.icon ? /*#__PURE__*/React.createElement("span", {
      className: "gds-crumbs__icon"
    }, it.icon) : null, it.label) : /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "gds-crumbs__link",
      onClick: it.onClick
    }, it.icon ? /*#__PURE__*/React.createElement("span", {
      className: "gds-crumbs__icon"
    }, it.icon) : null, it.label), current ? null : sep);
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavLink({
  children,
  href,
  active = false,
  icon,
  onClick,
  className,
  style,
  ...rest
}) {
  const cls = ["gds-navlink"];
  if (active) cls.push("gds-navlink--active");
  if (className) cls.push(className);
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls.join(" "),
    href: href,
    onClick: onClick,
    style: style,
    "aria-current": active ? "page" : undefined
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "gds-btn__icon"
  }, icon) : null, children);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function pageList(page, total) {
  if (total <= 7) return Array.from({
    length: total
  }, (_, i) => i + 1);
  const out = [1];
  const from = Math.max(2, page - 1);
  const to = Math.min(total - 1, page + 1);
  if (from > 2) out.push("gap-l");
  for (let i = from; i <= to; i++) out.push(i);
  if (to < total - 1) out.push("gap-r");
  out.push(total);
  return out;
}
function Pagination({
  page = 1,
  pageCount = 1,
  total,
  pageSize,
  onChange,
  className,
  style
}) {
  const go = p => {
    if (p >= 1 && p <= pageCount && p !== page && onChange) onChange(p);
  };
  const arrow = d => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: d === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"
  }));
  const first = total != null && pageSize != null ? (page - 1) * pageSize + 1 : null;
  const lastRow = total != null && pageSize != null ? Math.min(total, page * pageSize) : null;
  return /*#__PURE__*/React.createElement("nav", {
    className: className ? "gds-pager " + className : "gds-pager",
    "aria-label": "Pagination",
    style: style
  }, first != null ? /*#__PURE__*/React.createElement("span", {
    className: "gds-pager__label"
  }, "Showing ", /*#__PURE__*/React.createElement("b", null, first), "\u2013", /*#__PURE__*/React.createElement("b", null, lastRow), " of ", /*#__PURE__*/React.createElement("b", null, total)) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "gds-btn gds-btn--secondary gds-btn--sm gds-iconbtn",
    "aria-label": "Previous page",
    disabled: page <= 1,
    onClick: () => go(page - 1)
  }, arrow("prev")), /*#__PURE__*/React.createElement("div", {
    className: "gds-pager__pages"
  }, pageList(page, pageCount).map(p => typeof p === "string" ? /*#__PURE__*/React.createElement("span", {
    key: p,
    className: "gds-pager__gap",
    "aria-hidden": "true"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    type: "button",
    "aria-label": "Page " + p,
    "aria-current": p === page ? "page" : undefined,
    className: p === page ? "gds-pager__page gds-pager__page--active" : "gds-pager__page",
    onClick: () => go(p)
  }, p))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "gds-btn gds-btn--secondary gds-btn--sm gds-iconbtn",
    "aria-label": "Next page",
    disabled: page >= pageCount,
    onClick: () => go(page + 1)
  }, arrow("next")));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Sidebar({
  children,
  collapsed = false,
  footer,
  className,
  style
}) {
  const cls = ["gds-sidebar"];
  if (collapsed) cls.push("gds-sidebar--collapsed");
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("aside", {
    className: cls.join(" "),
    style: style
  }, children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-4)"
    }
  }, footer) : null);
}
function SidebarSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, label ? /*#__PURE__*/React.createElement("div", {
    className: "gds-sidebar__heading"
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, children));
}
function SidebarItem({
  children,
  icon,
  active = false,
  count,
  href,
  onClick,
  collapsed = false,
  className,
  ...rest
}) {
  const cls = ["gds-sidebar__item"];
  if (active) cls.push("gds-sidebar__item--active");
  if (className) cls.push(className);
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls.join(" "),
    href: href,
    onClick: onClick,
    title: collapsed ? String(children) : undefined,
    "aria-current": active ? "page" : undefined
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "gds-sidebar__icon"
  }, icon) : null, collapsed ? null : /*#__PURE__*/React.createElement("span", null, children), !collapsed && count != null ? /*#__PURE__*/React.createElement("span", {
    className: "gds-sidebar__count"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gds-badge gds-badge--neutral gds-badge--numeric"
  }, count)) : null);
}
Object.assign(__ds_scope, { Sidebar, SidebarSection, SidebarItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  className,
  style
}) {
  const [internal, setInternal] = React.useState(value ?? (items[0] && (items[0].value ?? items[0])));
  const current = value !== undefined ? value : internal;
  const pick = v => {
    setInternal(v);
    if (onChange) onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className ? "gds-tabs " + className : "gds-tabs",
    role: "tablist",
    style: style
  }, items.map(it => {
    const v = it.value ?? it;
    const label = it.label ?? it;
    const active = v === current;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": active,
      type: "button",
      className: active ? "gds-tab gds-tab--active" : "gds-tab",
      onClick: () => pick(v)
    }, it.icon ? /*#__PURE__*/React.createElement("span", {
      className: "gds-btn__icon"
    }, it.icon) : null, label, it.count != null ? /*#__PURE__*/React.createElement("span", {
      className: "gds-badge gds-badge--neutral gds-badge--numeric"
    }, it.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function TopBar({
  brand,
  links,
  actions,
  children,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: className ? "gds-topbar " + className : "gds-topbar",
    style: style
  }, brand ? /*#__PURE__*/React.createElement("div", {
    className: "gds-topbar__brand"
  }, brand) : null, links ? /*#__PURE__*/React.createElement("nav", {
    className: "gds-topbar__nav"
  }, links) : null, children, actions ? /*#__PURE__*/React.createElement("div", {
    className: "gds-topbar__actions"
  }, actions) : null);
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// examples/aurora-coffee/landing-page.jsx
try { (() => {
const {
  Button,
  Card,
  Rule,
  Badge,
  Icon,
  Table,
  Banner,
  TopBar,
  NavLink
} = window.GradientDesignSystem_46fafe;
const H2 = {
  fontSize: "var(--h2-size)",
  lineHeight: "var(--h2-lh)",
  fontWeight: 600,
  letterSpacing: "var(--h2-track)",
  margin: 0
};
const H3 = {
  fontSize: "var(--h3-size)",
  lineHeight: "var(--h3-lh)",
  fontWeight: 600,
  letterSpacing: "var(--h3-track)",
  margin: 0
};
const H4 = {
  fontSize: "var(--h4-size)",
  lineHeight: "var(--h4-lh)",
  fontWeight: 600,
  letterSpacing: "var(--h4-track)",
  margin: 0
};
const LEAD = {
  fontSize: 18,
  lineHeight: 1.6,
  color: "var(--ink-muted)",
  margin: 0
};
const BODY = {
  fontSize: 16,
  lineHeight: 1.65,
  color: "var(--ink-muted)",
  margin: 0
};
const SMALL = {
  fontSize: 14,
  lineHeight: 1.6,
  color: "var(--ink-muted)",
  margin: 0
};
function Slot({
  label,
  ratio = "4 / 3"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      width: "100%",
      background: "var(--surface-sunken)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-lg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gds-overline",
    style: {
      color: "var(--ink-faint)",
      textAlign: "center"
    }
  }, label));
}
function Section({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    style: style
  }, children);
}
function AuroraLanding() {
  const benefits = [["gauge", "±0.2 °C at the group head", "A 1.6 L brass boiler with PID control holds brew temperature through back-to-back shots. No surfing, no waiting."], ["rotate-ccw", "Nine seconds of pre-infusion", "Low-pressure saturation before the pump ramps, so the puck wets evenly and channelling stops before it starts."], ["minus", "47 dB rotary pump", "Quieter than a fridge. You can pull a shot at 6 a.m. without waking the flat."], ["circle-check", "Ready in 25 seconds", "Thermoblock pre-heat on the group means the first shot of the day tastes like the third."]];
  const features = [{
    eyebrow: "Temperature",
    title: "The boiler is the machine.",
    body: "Most home machines lose four to six degrees between the first and second shot. Aurora One runs a saturated brass group welded to the boiler body, so the metal itself is the thermal mass. Pull six doubles in a row and the last one lands within half a degree of the first.",
    link: "Read the thermal test",
    slot: "PRODUCT — GROUP HEAD DETAIL, 1600×1200",
    flip: false
  }, {
    eyebrow: "Pressure",
    title: "A pressure curve you can actually see.",
    body: "The front dial reads true line pressure, not pump output. Nine bars is a default, not a law — the paddle lets you taper to six for lighter roasts, and the profile you land on is repeatable because the pump is rotary, not vibratory.",
    link: "See profiling examples",
    slot: "PRODUCT — PRESSURE DIAL, 1600×1200",
    flip: true
  }, {
    eyebrow: "Maintenance",
    title: "Every seal is a five-minute job.",
    body: "The group gasket, shower screen and steam valve come out with the hex key in the box. No proprietary cartridges, no sealed units, no service centre. Consumables are standard 58 mm parts you can buy anywhere.",
    link: "Download the service guide",
    slot: "PRODUCT — OPEN SERVICE PANEL, 1600×1200",
    flip: false
  }];
  const specs = [["Boiler", "1.6 L brass, saturated group", "1.6 L"], ["Temperature control", "PID, ±0.2 °C at the group", "±0.2 °C"], ["Pump", "Rotary, 47 dB at 1 m", "47 dB"], ["Pressure range", "Adjustable paddle, 0–12 bar", "0–12 bar"], ["Pre-infusion", "Line pressure, 0–15 s", "9 s default"], ["Heat-up time", "Group ready from cold", "25 s"], ["Water tank", "Removable, front-fill", "2.8 L"], ["Portafilter", "58 mm, walnut handle", "58 mm"], ["Body", "Powder-coated steel, brushed steel top", "—"], ["Dimensions", "Width × depth × height", "285 × 390 × 365 mm"], ["Weight", "Unboxed", "18.4 kg"], ["Power", "230 V, 1450 W", "1450 W"], ["Warranty", "Parts and labour, transferable", "5 years"]];
  const audiences = [["The morning ritual", "One or two milk drinks a day, same time, same beans. You want it warm before the kettle would have boiled and you never want to think about it.", ["Fast heat-up", "Quiet"]], ["The weekend chaser", "Three roasters on rotation, a scale on the counter and a note in your phone about last Sunday's ratio. You want the variables to be yours, not the machine's.", ["Pressure profiling", "Repeatable"]], ["The small studio", "Six people, one counter, no room for a commercial two-group. You need something that survives twelve shots in an hour and is serviceable in-house.", ["1.6 L boiler", "Standard parts"]]];
  const faqs = [["Does it need a plumbed water line?", "No. The 2.8 L tank fills from the front without moving the machine. A plumb-in kit exists if you want it, but nothing about the machine assumes one."], ["Can I use pre-ground coffee?", "You can, and it will be worse. The pressure paddle can partly rescue a stale grind, but the machine is built around a fresh 58 mm dose. We do not sell a grinder — buy the best one you can and pair it."], ["How loud is it really?", "47 dB at one metre, measured mid-extraction. A domestic fridge sits around 40 dB and a vibratory espresso pump around 70 dB. In practice the grinder is the loud part of your morning, not this."], ["What descaling schedule does it need?", "With filtered water, once every six months. The machine tracks litres pulled and shows a descale reminder on the dial ring — it does not lock you out, and it does not need a proprietary solution."], ["Is the warranty void if I open it?", "No. The service panel is meant to come off, and the guide is public. Warranty covers parts and labour for five years and transfers if you sell the machine."], ["What is the lead time?", "Machines ship from the Rotterdam workshop within five working days. Walnut-handle configurations add roughly two weeks because the handles are turned in batches."], ["Can I return it?", "Sixty days, used, no restocking fee. Return shipping is on us. Roughly one in forty machines comes back, usually because the buyer wanted something smaller."], ["Do you sell to businesses?", "Yes. Studios and offices under ten people are the second-largest group of owners. Invoicing, extended warranty and on-site setup are available in the EU and UK."]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, {
    brand: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)"
      }
    }, "Aurora"),
    links: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavLink, {
      active: true
    }, "Machine"), /*#__PURE__*/React.createElement(NavLink, null, "Specifications"), /*#__PURE__*/React.createElement(NavLink, null, "Service"), /*#__PURE__*/React.createElement(NavLink, null, "Support")),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Book a tasting"), /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "Buy \u2014 \u20AC2,480"))
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--gradient-veil)",
      paddingTop: "var(--space-32)",
      paddingBottom: "var(--space-24)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gradient-halo)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "sec hero",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Third generation \u2014 shipping now"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-xl-size)",
      lineHeight: "var(--display-xl-lh)",
      fontWeight: 500,
      letterSpacing: "var(--display-xl-track)",
      margin: "var(--space-6) 0 0",
      maxWidth: "14ch"
    }
  }, "Aurora One"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...LEAD,
      marginTop: "var(--space-6)",
      maxWidth: "46ch"
    }
  }, "A home espresso machine built around one number: temperature stability of \xB10.2 \xB0C, shot after shot. Everything else on this page follows from that."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-10)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "Buy Aurora One \u2014 \u20AC2,480"), /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Book a tasting")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginTop: "var(--space-10)",
      flexWrap: "wrap"
    },
    className: "gds-overline"
  }, /*#__PURE__*/React.createElement("span", null, "1.6 L brass boiler"), /*#__PURE__*/React.createElement("span", null, "58 mm"), /*#__PURE__*/React.createElement("span", null, "5-year warranty"))), /*#__PURE__*/React.createElement(Slot, {
    label: "PRODUCT \u2014 3/4 FRONT ON COUNTER, 1600\xD71200"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sec"
  }, /*#__PURE__*/React.createElement(Rule, null)), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    className: "gds-overline"
  }, "Why this machine"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H2,
      marginTop: "var(--space-3)",
      maxWidth: "30ch"
    }
  }, "Four decisions, made once, so you stop making them every morning."), /*#__PURE__*/React.createElement("div", {
    className: "g4",
    style: {
      marginTop: "var(--space-10)"
    }
  }, benefits.map(([icon, title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: title
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...H3,
      marginTop: "var(--space-4)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      marginTop: "var(--space-3)"
    }
  }, body))))), features.map(f => /*#__PURE__*/React.createElement(React.Fragment, {
    key: f.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec"
  }, /*#__PURE__*/React.createElement(Rule, null)), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    className: "split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: f.flip ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gds-overline"
  }, f.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H2,
      marginTop: "var(--space-3)",
      maxWidth: "22ch"
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...BODY,
      marginTop: "var(--space-4)",
      maxWidth: "56ch"
    }
  }, f.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, f.link))), /*#__PURE__*/React.createElement("div", {
    style: {
      order: f.flip ? 1 : 2
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    label: f.slot
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "sec"
  }, /*#__PURE__*/React.createElement(Rule, null)), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    className: "gds-overline"
  }, "Specifications"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H2,
      marginTop: "var(--space-3)"
    }
  }, "Everything measurable, in one table."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: "spec",
      label: "Specification",
      width: "26%"
    }, {
      key: "detail",
      label: "Detail"
    }, {
      key: "value",
      label: "Value",
      numeric: true,
      width: "22%"
    }],
    rows: specs.map(([spec, detail, value]) => ({
      id: spec,
      spec,
      detail,
      value
    })),
    primaryKey: "spec",
    label: "Aurora One specifications"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      marginTop: "var(--space-4)",
      color: "var(--ink-faint)"
    }
  }, "Measurements taken at 20 \xB0C ambient with filtered water at 60 ppm total hardness.")), /*#__PURE__*/React.createElement("div", {
    className: "sec"
  }, /*#__PURE__*/React.createElement(Rule, null)), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    className: "gds-overline"
  }, "Who it suits"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H2,
      marginTop: "var(--space-3)",
      maxWidth: "28ch"
    }
  }, "Three kinds of owner, one machine."), /*#__PURE__*/React.createElement("div", {
    className: "g3",
    style: {
      marginTop: "var(--space-10)"
    }
  }, audiences.map(([title, body, tags]) => /*#__PURE__*/React.createElement(Card, {
    key: title
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...H3
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      marginTop: "var(--space-3)"
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-5)",
      flexWrap: "wrap"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "neutral"
  }, t))))))), /*#__PURE__*/React.createElement("div", {
    className: "sec"
  }, /*#__PURE__*/React.createElement(Rule, null)), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    className: "gds-overline"
  }, "Questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H2,
      marginTop: "var(--space-3)"
    }
  }, "Asked before buying."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-prose)",
      marginTop: "var(--space-10)"
    }
  }, faqs.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: q
  }, i === 0 ? null : /*#__PURE__*/React.createElement(Rule, {
    spacing: "tight"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: i === 0 ? 0 : "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: H4
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      ...SMALL,
      marginTop: "var(--space-3)"
    }
  }, a)))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "info",
    title: "Sixty-day return, five-year warranty"
  }, "Machines ship from Rotterdam within five working days. Return shipping is ours if it is not the machine you hoped for.")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gradient-veil)",
      marginTop: "var(--space-16)",
      paddingTop: "var(--space-24)",
      paddingBottom: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec",
    style: {
      maxWidth: "var(--container-prose)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-l-size)",
      lineHeight: "var(--display-l-lh)",
      fontWeight: 500,
      letterSpacing: "var(--display-l-track)",
      margin: 0
    }
  }, "Pull the first one tomorrow."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...LEAD,
      marginTop: "var(--space-5)"
    }
  }, "Built to order in Rotterdam, shipped within five working days, serviceable on your own counter for as long as you own it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-10)",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "Buy Aurora One \u2014 \u20AC2,480"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg"
  }, "Book a tasting")))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-sunken)",
      borderTop: "1px solid var(--hairline)",
      padding: "var(--space-16) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec foot"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      fontWeight: 500,
      letterSpacing: "-0.02em"
    }
  }, "Aurora"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.45,
      color: "var(--ink-faint)",
      marginTop: "var(--space-3)",
      maxWidth: "34ch"
    }
  }, "Espresso machines built in Rotterdam and serviceable anywhere.")), [["Machine", ["Aurora One", "Specifications", "Accessories"]], ["Owning", ["Service guide", "Consumables", "Warranty"]], ["Company", ["Workshop", "Stockists", "Contact"]]].map(([head, items]) => /*#__PURE__*/React.createElement("div", {
    key: head
  }, /*#__PURE__*/React.createElement("div", {
    className: "gds-overline"
  }, head), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      marginTop: "var(--space-4)"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#f",
    style: {
      fontSize: 14,
      color: "var(--ink-muted)",
      textDecoration: "none"
    }
  }, i))))))));
}
window.AuroraLanding = AuroraLanding;
})(); } catch (e) { __ds_ns.__errors.push({ path: "examples/aurora-coffee/landing-page.jsx", error: String((e && e.message) || e) }); }

// ui_kits/catalog/catalog-app.jsx
try { (() => {
const NS = window.GradientDesignSystem_46fafe;
const {
  Button,
  IconButton,
  Badge,
  Card,
  Rule,
  Icon,
  Input,
  Select,
  Textarea,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Tabs,
  NavLink,
  Table,
  Banner,
  Toast,
  EmptyState,
  Skeleton,
  Modal
} = NS;
const Section = ({
  label,
  title,
  children
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    marginTop: "var(--space-16)"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "gds-overline"
}, label), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontSize: "var(--h2-size)",
    lineHeight: "var(--h2-lh)",
    fontWeight: 600,
    letterSpacing: "var(--h2-track)",
    marginTop: "var(--space-2)"
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: "var(--space-8)"
  }
}, children));
const Row = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--space-3)",
    alignItems: "center"
  }
}, children);
const SWATCHES = [["canvas", "#F7F7FB"], ["surface", "#FFFFFF"], ["surface-sunken", "#F1F1F7"], ["hairline", "#E4E4EC"], ["ink", "#16161D"], ["ink-muted", "#5A5A6B"], ["ink-faint", "#8E8EA0"], ["accent", "#5B4FE9"], ["accent-deep", "#3D33B8"], ["accent-soft", "#EEECFD"], ["haze", "#C9D8F2"], ["ember", "#F5D9C8"], ["success", "#2E7D5B"], ["warning", "#A8761D"], ["danger", "#C0392F"]];
const TYPE = [["display-xl", 72, 1, 500, "-0.03em", "var(--font-display)"], ["display-l", 56, 1.05, 500, "-0.025em", "var(--font-display)"], ["h1", 40, 1.1, 600, "-0.02em", "var(--font-body)"], ["h2", 32, 1.15, 600, "-0.018em", "var(--font-body)"], ["h3", 24, 1.25, 600, "-0.012em", "var(--font-body)"], ["body", 16, 1.65, 400, "0", "var(--font-body)"], ["body-s", 14, 1.6, 400, "0", "var(--font-body)"], ["mono", 13, 1.5, 400, "0", "var(--font-mono)"]];
function Catalog() {
  const [dark, setDark] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    document.body.style.background = "var(--canvas)";
  }, [dark]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: "0 auto",
      padding: "var(--space-16) var(--space-10) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 34,
      fontWeight: 500,
      letterSpacing: "-0.025em"
    }
  }, "Gradient"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: "var(--ink-muted)",
      marginTop: "var(--space-3)",
      maxWidth: "56ch"
    }
  }, "Subtle, beautiful, and minimalistic. Every specimen below is rendered from the shipped tokens.")), /*#__PURE__*/React.createElement(Switch, {
    id: "theme",
    checked: dark,
    onChange: e => setDark(e.target.checked),
    labelPosition: "start",
    label: "Dark"
  })), /*#__PURE__*/React.createElement(Section, {
    label: "Colour",
    title: "Palette"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "var(--space-4)"
    }
  }, SWATCHES.map(([n, hex]) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      borderRadius: "var(--radius-md)",
      background: "var(--" + n + ")",
      border: "1px solid var(--hairline)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      marginTop: 6
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--ink-faint)"
    }
  }, hex)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-4)",
      marginTop: "var(--space-6)"
    }
  }, [["gradient-veil", "canvas, hero"], ["gradient-surface", "cards at e3+"], ["gradient-accent", "primary buttons only"]].map(([g, use]) => /*#__PURE__*/React.createElement("div", {
    key: g
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--" + g + ")",
      border: "1px solid var(--hairline)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      marginTop: 6
    }
  }, g), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--ink-faint)"
    }
  }, use))))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement(Section, {
    label: "Type",
    title: "Scale"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, TYPE.map(([n, size, lh, w, tr, fam]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--ink-faint)",
      width: 90,
      flex: "0 0 auto",
      textTransform: "uppercase",
      letterSpacing: "0.06em"
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fam,
      fontSize: Math.min(size, 56),
      lineHeight: lh,
      fontWeight: w,
      letterSpacing: tr,
      flex: 1,
      minWidth: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, "Quiet, spacious, engineered"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--ink-faint)"
    }
  }, size + " / " + lh + " / " + w))))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement(Section, {
    label: "Components",
    title: "Actions"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "Save changes"), /*#__PURE__*/React.createElement(Button, null, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Dismiss"), /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "Read the docs"), /*#__PURE__*/React.createElement(Button, {
    variant: "destructive"
  }, "Delete"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: true
  }, "Disabled"), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "settings"
    }),
    label: "Settings"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Badge, null, "Draft"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Selected"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Live"), /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    dot: true
  }, "Queued"), /*#__PURE__*/React.createElement(Badge, {
    tone: "danger",
    dot: true
  }, "Failed"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    numeric: true
  }, "12"), /*#__PURE__*/React.createElement(Badge, {
    shape: "tag"
  }, "design-system"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(NavLink, {
    active: true
  }, "Product"), /*#__PURE__*/React.createElement(NavLink, null, "Docs"), /*#__PURE__*/React.createElement(NavLink, null, "Pricing"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)",
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: "a",
      label: "Overview"
    }, {
      value: "b",
      label: "Logs",
      count: 3
    }, {
      value: "c",
      label: "Settings"
    }]
  }))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement(Section, {
    label: "Components",
    title: "Forms"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-email",
    label: "Work email",
    placeholder: "you@company.com",
    help: "Used for billing only."
  }), /*#__PURE__*/React.createElement(Input, {
    id: "c-err",
    label: "Workspace",
    defaultValue: "gradient-web",
    error: "That name is taken."
  }), /*#__PURE__*/React.createElement(Select, {
    id: "c-env",
    label: "Environment",
    options: ["Production", "Staging", "Preview"]
  }), /*#__PURE__*/React.createElement(Input, {
    id: "c-dis",
    label: "Disabled",
    defaultValue: "acct_9f3a21c",
    disabled: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "c-notes",
    label: "Release notes",
    rows: 2,
    placeholder: "What changed?"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)",
      marginTop: "var(--space-5)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    id: "c-1",
    defaultChecked: true,
    label: "Email me deploy failures",
    description: "At most one message per incident."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    id: "c-2",
    label: "Weekly digest"
  }), /*#__PURE__*/React.createElement(Switch, {
    id: "c-3",
    defaultChecked: true,
    label: "Auto-deploy main"
  })), /*#__PURE__*/React.createElement(RadioGroup, {
    label: "Preview visibility"
  }, /*#__PURE__*/React.createElement(Radio, {
    id: "c-4",
    name: "cv",
    defaultChecked: true,
    label: "Anyone with the link"
  }), /*#__PURE__*/React.createElement(Radio, {
    id: "c-5",
    name: "cv",
    label: "Workspace members only"
  })))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement(Section, {
    label: "Components",
    title: "Surfaces and data"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Resting card",
    description: "surface, e1, radius-lg."
  }), /*#__PURE__*/React.createElement(Card, {
    elevated: true,
    title: "Elevated",
    description: "gradient-surface at e3."
  }), /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    title: "Interactive",
    description: "Hover lifts 2px."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Table, {
    rowKey: "id",
    selectedId: "2",
    primaryKey: "name",
    label: "Projects",
    columns: [{
      key: "name",
      label: "Project"
    }, {
      key: "env",
      label: "Environment"
    }, {
      key: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone,
        dot: true
      }, r.status)
    }, {
      key: "builds",
      label: "Builds",
      numeric: true
    }],
    rows: [{
      id: "1",
      name: "gradient-web",
      env: "Production",
      status: "Live",
      tone: "success",
      builds: 128
    }, {
      id: "2",
      name: "gradient-docs",
      env: "Production",
      status: "Live",
      tone: "success",
      builds: 76
    }, {
      id: "3",
      name: "marketing-site",
      env: "Preview",
      status: "Failed",
      tone: "danger",
      builds: 41
    }]
  }))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement(Section, {
    label: "Components",
    title: "Feedback"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "info",
    title: "Deploy queue is draining"
  }, "Preview URLs may lag by a minute."), /*#__PURE__*/React.createElement(Banner, {
    tone: "success",
    title: "Environment verified"
  }), /*#__PURE__*/React.createElement(Banner, {
    tone: "warning",
    title: "Build queue is backed up"
  }, "Deploys may take up to 10 minutes."), /*#__PURE__*/React.createElement(Banner, {
    tone: "danger",
    title: "Build failed",
    onDismiss: () => {}
  }, "Module not found: ./tokens/colors.css")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)",
      marginTop: "var(--space-6)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Deployed to production",
    onDismiss: () => {}
  }, "gradient-web@a91f3c2"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    height: 24,
    width: 200,
    radius: "var(--radius-md)"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    lines: 3
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)",
      marginTop: "var(--space-6)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "git-branch",
    title: "No deployments yet",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm"
    }, "Connect a repository")
  }, "Push to any branch and a preview URL appears here."), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setModal(true)
  }, "Open modal"))), /*#__PURE__*/React.createElement(Modal, {
    open: modal,
    title: "Delete environment",
    onClose: () => setModal(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => setModal(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "destructive",
      onClick: () => setModal(false)
    }, "Delete environment"))
  }, "This removes all preview URLs pointing at this environment. It cannot be undone.")));
}
window.Catalog = Catalog;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/catalog/catalog-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/app-shell.jsx
try { (() => {
const {
  TopBar,
  NavLink,
  Sidebar,
  SidebarSection,
  SidebarItem,
  Button,
  IconButton,
  Icon,
  Badge
} = window.GradientDesignSystem_46fafe;
function AppShell({
  view,
  onNavigate,
  onNewProject,
  children
}) {
  const [collapsed, setCollapsed] = React.useState(false);
  const item = (id, icon, label, count) => /*#__PURE__*/React.createElement(SidebarItem, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: icon
    }),
    active: view === id,
    collapsed: collapsed,
    count: count,
    onClick: () => onNavigate(id)
  }, label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    brand: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 17,
        fontWeight: 500,
        letterSpacing: "-0.02em"
      }
    }, "Gradient"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 20,
        background: "var(--hairline)",
        margin: "0 var(--space-2)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        color: "var(--ink-muted)"
      }
    }, "Acme Labs"), /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, "Pro")),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 10,
        top: "50%",
        transform: "translateY(-50%)",
        color: "var(--ink-faint)",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search"
    })), /*#__PURE__*/React.createElement("input", {
      className: "gds-control",
      placeholder: "Search projects",
      style: {
        width: 240,
        paddingLeft: 34
      }
    })), /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "bell"
      }),
      label: "Notifications"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "circle-user"
      }),
      label: "Account"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "plus"
      }),
      onClick: onNewProject
    }, "New project"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    collapsed: collapsed,
    footer: /*#__PURE__*/React.createElement(SidebarItem, {
      collapsed: collapsed,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: collapsed ? "panel-left-open" : "panel-left-close"
      }),
      onClick: () => setCollapsed(!collapsed)
    }, "Collapse")
  }, /*#__PURE__*/React.createElement(SidebarSection, {
    label: collapsed ? null : "Workspace"
  }, item("overview", "layout-dashboard", "Overview"), item("deployments", "git-branch", "Deployments", 4), item("logs", "file-text", "Logs")), /*#__PURE__*/React.createElement(SidebarSection, {
    label: collapsed ? null : "Account"
  }, item("settings", "settings", "Settings"), item("billing", "credit-card", "Billing"))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: "var(--space-8) var(--space-10)"
    }
  }, children)));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/app-shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/console-app.jsx
try { (() => {
const {
  Toast,
  ToastStack,
  EmptyState,
  Button,
  Modal,
  Input,
  Select,
  Icon
} = window.GradientDesignSystem_46fafe;
function ConsoleApp() {
  const [signedIn, setSignedIn] = React.useState(false);
  const [view, setView] = React.useState("overview");
  const [toast, setToast] = React.useState(null);
  const [newProject, setNewProject] = React.useState(false);
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(t);
  }, [toast]);
  if (!signedIn) return /*#__PURE__*/React.createElement(LoginScreen, {
    onSignIn: () => setSignedIn(true)
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppShell, {
    view: view,
    onNavigate: setView,
    onNewProject: () => setNewProject(true)
  }, view === "overview" ? /*#__PURE__*/React.createElement(OverviewScreen, {
    onNavigate: setView
  }) : null, view === "deployments" ? /*#__PURE__*/React.createElement(DeploymentsScreen, null) : null, view === "settings" ? /*#__PURE__*/React.createElement(SettingsScreen, {
    onSaved: () => setToast({
      tone: "success",
      title: "Settings saved",
      body: "Applied to 4 projects."
    })
  }) : null, view === "logs" ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "file-text",
    title: "No logs in this range",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => setView("deployments")
    }, "Pick a deployment")
  }, "Logs are kept for 30 days. Choose a deployment to stream its build output.") : null, view === "billing" ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "credit-card",
    title: "Billing is managed by the owner",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Request access")
  }, "Ask ada@gradient.dev to add you to the billing role.") : null), /*#__PURE__*/React.createElement(Modal, {
    open: newProject,
    title: "New project",
    onClose: () => setNewProject(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => setNewProject(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => {
        setNewProject(false);
        setToast({
          tone: "success",
          title: "Project created",
          body: "First deploy starts in a moment."
        });
      }
    }, "Create project"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "np-name",
    label: "Project name",
    placeholder: "gradient-marketing",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "folder"
    })
  }), /*#__PURE__*/React.createElement(Select, {
    id: "np-repo",
    label: "Repository",
    options: ["acme/gradient-web", "acme/gradient-docs", "acme/design-tokens"]
  }), /*#__PURE__*/React.createElement(Select, {
    id: "np-region",
    label: "Region",
    options: ["us-east-1", "eu-west-2"]
  }))), toast ? /*#__PURE__*/React.createElement(ToastStack, null, /*#__PURE__*/React.createElement(Toast, {
    tone: toast.tone,
    title: toast.title,
    onDismiss: () => setToast(null)
  }, toast.body)) : null);
}
window.ConsoleApp = ConsoleApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/console-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/deployments-screen.jsx
try { (() => {
const {
  Table,
  Badge,
  Button,
  Card,
  Tabs,
  Modal,
  Rule,
  Icon,
  EmptyState,
  Skeleton,
  Select
} = window.GradientDesignSystem_46fafe;
const DEPLOYS = [{
  id: "d1",
  project: "gradient-web",
  branch: "main",
  env: "Production",
  status: "Live",
  dur: "42s",
  when: "2m ago",
  sha: "a91f3c2"
}, {
  id: "d2",
  project: "gradient-docs",
  branch: "main",
  env: "Production",
  status: "Live",
  dur: "31s",
  when: "26m ago",
  sha: "4c02b91"
}, {
  id: "d3",
  project: "design-tokens",
  branch: "feat/dissolving-rule",
  env: "Preview",
  status: "Queued",
  dur: "—",
  when: "31m ago",
  sha: "77e10ab"
}, {
  id: "d4",
  project: "marketing-site",
  branch: "main",
  env: "Production",
  status: "Failed",
  dur: "1m 08s",
  when: "1h ago",
  sha: "b40d5e7"
}, {
  id: "d5",
  project: "gradient-web",
  branch: "fix/focus-ring",
  env: "Preview",
  status: "Live",
  dur: "38s",
  when: "3h ago",
  sha: "1de99c4"
}];
const TONE = {
  Live: "success",
  Queued: "warning",
  Failed: "danger"
};
function DeploymentsScreen() {
  const [env, setEnv] = React.useState("all");
  const [sel, setSel] = React.useState("d4");
  const [confirm, setConfirm] = React.useState(false);
  const rows = DEPLOYS.filter(d => env === "all" || d.env.toLowerCase() === env);
  const current = DEPLOYS.find(d => d.id === sel);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "gds-overline"
  }, "Workspace"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--h1-size)",
      lineHeight: "var(--h1-lh)",
      fontWeight: 600,
      letterSpacing: "var(--h1-track)",
      marginTop: "var(--space-2)"
    }
  }, "Deployments")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: [{
      value: "all",
      label: "All projects"
    }, {
      value: "web",
      label: "gradient-web"
    }]
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "rocket"
    })
  }, "Deploy latest"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: env,
    onChange: setEnv,
    items: [{
      value: "all",
      label: "All",
      count: DEPLOYS.length
    }, {
      value: "production",
      label: "Production"
    }, {
      value: "preview",
      label: "Preview"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: "var(--space-6)",
      marginTop: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Table, {
    rowKey: "id",
    rows: rows,
    selectedId: sel,
    onRowClick: r => setSel(r.id),
    responsive: "scroll",
    label: "Deployments",
    empty: /*#__PURE__*/React.createElement(EmptyState, {
      icon: "git-branch",
      title: "Nothing here yet"
    }, "No deployments match this filter."),
    columns: [{
      key: "project",
      label: "Project"
    }, {
      key: "branch",
      label: "Branch",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: 12
        }
      }, r.branch)
    }, {
      key: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: TONE[r.status],
        dot: true
      }, r.status)
    }, {
      key: "dur",
      label: "Build",
      numeric: true
    }, {
      key: "when",
      label: "When",
      numeric: true
    }]
  }), current ? /*#__PURE__*/React.createElement(Card, {
    elevated: true,
    title: current.project,
    description: current.env + " · " + current.branch,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "external-link"
      })
    }, "Visit"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "rotate-ccw"
      })
    }, "Redeploy"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "link",
      onClick: () => setConfirm(true)
    }, "Delete")))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: TONE[current.status],
    dot: true
  }, current.status), /*#__PURE__*/React.createElement(Badge, {
    numeric: true
  }, current.sha)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)",
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-3)",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      lineHeight: 1.7,
      color: "var(--ink-muted)",
      whiteSpace: "pre-wrap"
    }
  }, "$ pnpm build\n  ▲ compiling tokens…\n  ✓ 174 custom properties\n" + (current.status === "Failed" ? "  ✗ Module not found: ./tokens/colors.css" : "  ✓ build complete in " + current.dur)), /*#__PURE__*/React.createElement(Rule, {
    spacing: "tight"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, [["Commit", current.sha], ["Duration", current.dur], ["Triggered", current.when]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums"
    }
  }, v))))) : /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Skeleton, {
    lines: 4
  }))), /*#__PURE__*/React.createElement(Modal, {
    open: confirm,
    title: "Delete this deployment",
    onClose: () => setConfirm(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => setConfirm(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "destructive",
      onClick: () => setConfirm(false)
    }, "Delete deployment"))
  }, "The preview URL stops resolving immediately. Build logs are kept for 30 days."));
}
window.DeploymentsScreen = DeploymentsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/deployments-screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/login-screen.jsx
try { (() => {
const {
  Button,
  Input,
  Checkbox,
  Rule,
  Icon
} = window.GradientDesignSystem_46fafe;
function LoginScreen({
  onSignIn
}) {
  const [email, setEmail] = React.useState("ada@gradient.dev");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--gradient-veil)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gradient-halo)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 400,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: "-0.025em",
      textAlign: "center"
    }
  }, "Gradient"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      background: "var(--surface)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-xl)",
      padding: 28,
      boxShadow: "var(--e3)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--h4-size)",
      lineHeight: "var(--h4-lh)",
      fontWeight: 600,
      letterSpacing: "var(--h4-track)"
    }
  }, "Sign in to your workspace"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--ink-muted)",
      marginTop: "var(--space-2)"
    }
  }, "Use the email tied to your team seat."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSignIn();
    },
    style: {
      marginTop: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "login-email",
    label: "Work email",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "mail"
    })
  }), /*#__PURE__*/React.createElement(Input, {
    id: "login-pw",
    label: "Password",
    type: "password",
    defaultValue: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
    help: "Minimum 12 characters."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    id: "login-remember",
    defaultChecked: true,
    label: "Keep me signed in"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    type: "button"
  }, "Forgot password")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    block: true
  }, "Sign in")), /*#__PURE__*/React.createElement(Rule, {
    spacing: "tight"
  }), /*#__PURE__*/React.createElement(Button, {
    block: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "github"
    }),
    type: "button"
  }, "Continue with GitHub")), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: 13,
      color: "var(--ink-faint)",
      marginTop: "var(--space-6)"
    }
  }, "No workspace yet? ", /*#__PURE__*/React.createElement("a", {
    href: "#new"
  }, "Create one"))));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/login-screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/overview-screen.jsx
try { (() => {
const {
  Card,
  Badge,
  Rule,
  Button,
  Banner,
  Table,
  Icon,
  Tabs
} = window.GradientDesignSystem_46fafe;
const metrics = [{
  label: "Deploys this week",
  value: "38",
  delta: "+12%",
  tone: "success"
}, {
  label: "P95 build time",
  value: "42s",
  delta: "-6s",
  tone: "success"
}, {
  label: "Failed builds",
  value: "2",
  delta: "+1",
  tone: "warning"
}, {
  label: "Bandwidth",
  value: "1.4 TB",
  delta: "+3%",
  tone: "neutral"
}];
const activity = [{
  id: "1",
  who: "ada",
  what: "Deployed gradient-web to production",
  when: "2m ago",
  sha: "a91f3c2"
}, {
  id: "2",
  who: "linus",
  what: "Opened preview for feat/dissolving-rule",
  when: "18m ago",
  sha: "4c02b91"
}, {
  id: "3",
  who: "grace",
  what: "Rotated the production API token",
  when: "1h ago",
  sha: "—"
}];
function OverviewScreen({
  onNavigate
}) {
  const [range, setRange] = React.useState("7d");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "gds-overline"
  }, "Workspace"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--h1-size)",
      lineHeight: "var(--h1-lh)",
      fontWeight: 600,
      letterSpacing: "var(--h1-track)",
      marginTop: "var(--space-2)"
    }
  }, "Overview"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: "var(--ink-muted)",
      marginTop: "var(--space-2)",
      maxWidth: "72ch"
    }
  }, "Four projects, two environments. Everything green except the marketing site.")), /*#__PURE__*/React.createElement(Tabs, {
    value: range,
    onChange: setRange,
    items: [{
      value: "24h",
      label: "24 hours"
    }, {
      value: "7d",
      label: "7 days"
    }, {
      value: "30d",
      label: "30 days"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "warning",
    title: "marketing-site failed its last build",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onNavigate("deployments")
    }, "View deployment")
  }, "Module not found: ./tokens/colors.css \u2014 the import path changed in a91f3c2.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-8)"
    }
  }, metrics.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "gds-overline"
  }, m.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-3)",
      marginTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 32,
      fontWeight: 500,
      letterSpacing: "-0.018em",
      fontVariantNumeric: "tabular-nums"
    }
  }, m.value), /*#__PURE__*/React.createElement(Badge, {
    tone: m.tone,
    numeric: true
  }, m.delta))))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--h3-size)",
      lineHeight: "var(--h3-lh)",
      fontWeight: 600,
      letterSpacing: "var(--h3-track)"
    }
  }, "Recent activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Table, {
    rowKey: "id",
    rows: activity,
    responsive: "scroll",
    label: "Recent activity",
    columns: [{
      key: "what",
      label: "Event"
    }, {
      key: "who",
      label: "Actor"
    }, {
      key: "sha",
      label: "Commit",
      numeric: true
    }, {
      key: "when",
      label: "When",
      numeric: true
    }]
  }))), /*#__PURE__*/React.createElement(Card, {
    elevated: true,
    title: "Build minutes",
    description: "1,840 of 4,000 used this cycle."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      height: 8,
      borderRadius: "var(--radius-full)",
      background: "var(--surface-sunken)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "46%",
      height: "100%",
      background: "var(--gradient-accent)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "var(--space-3)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--ink-faint)",
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, "46% used"), /*#__PURE__*/React.createElement("span", null, "resets in 12 days")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, [["gradient-web", "820"], ["gradient-docs", "610"], ["design-tokens", "290"], ["marketing-site", "120"]].map(([n, v]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "git-branch",
    size: 14,
    color: "var(--ink-faint)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      color: "var(--ink-muted)"
    }
  }, v, " min")))))));
}
window.OverviewScreen = OverviewScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/overview-screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/settings-screen.jsx
try { (() => {
const {
  Card,
  Input,
  Select,
  Textarea,
  Switch,
  Checkbox,
  Radio,
  RadioGroup,
  Button,
  Rule,
  Banner,
  Tabs,
  Badge,
  Icon
} = window.GradientDesignSystem_46fafe;
function SettingsScreen({
  onSaved
}) {
  const [tab, setTab] = React.useState("general");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gds-overline"
  }, "Account"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--h1-size)",
      lineHeight: "var(--h1-lh)",
      fontWeight: 600,
      letterSpacing: "var(--h1-track)",
      marginTop: "var(--space-2)"
    }
  }, "Settings"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "general",
      label: "General"
    }, {
      value: "notifications",
      label: "Notifications"
    }, {
      value: "danger",
      label: "Danger zone"
    }]
  })), tab === "general" ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Workspace",
    description: "Visible to everyone with a seat."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)",
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ws-name",
    label: "Name",
    defaultValue: "Acme Labs"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "ws-slug",
    label: "Slug",
    defaultValue: "acme-labs",
    help: "Lowercase letters and dashes."
  }), /*#__PURE__*/React.createElement(Select, {
    id: "ws-region",
    label: "Primary region",
    options: ["us-east-1", "eu-west-2", "ap-south-1"]
  }), /*#__PURE__*/React.createElement(Input, {
    id: "ws-domain",
    label: "Custom domain",
    defaultValue: "acme.dev",
    suffix: /*#__PURE__*/React.createElement(Icon, {
      name: "check"
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "ws-about",
    label: "Description",
    rows: 2,
    defaultValue: "Design systems and the tooling around them."
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Deployment defaults",
    description: "Applied to every new project."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    id: "set-auto",
    defaultChecked: true,
    label: "Auto-deploy the main branch"
  }), /*#__PURE__*/React.createElement(Switch, {
    id: "set-review",
    label: "Require a review before production"
  }), /*#__PURE__*/React.createElement(Rule, {
    spacing: "tight"
  }), /*#__PURE__*/React.createElement(RadioGroup, {
    label: "Preview visibility"
  }, /*#__PURE__*/React.createElement(Radio, {
    id: "v1",
    name: "vis",
    defaultChecked: true,
    label: "Anyone with the link"
  }), /*#__PURE__*/React.createElement(Radio, {
    id: "v2",
    name: "vis",
    label: "Workspace members only",
    description: "Preview URLs ask for a seat login."
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Discard"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onSaved
  }, "Save changes"))) : null, tab === "notifications" ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Email",
    description: "Sent to ada@gradient.dev."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    id: "n1",
    defaultChecked: true,
    label: "Deploy failures",
    description: "At most one message per incident."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    id: "n2",
    defaultChecked: true,
    label: "Production deploys"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    id: "n3",
    label: "Weekly usage digest"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    id: "n4",
    disabled: true,
    label: "Security advisories",
    description: "Required on Pro plans."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onSaved
  }, "Save changes"))) : null, tab === "danger" ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "danger",
    title: "These actions cannot be undone"
  }, "Transfer or delete only after exporting your build logs."), /*#__PURE__*/React.createElement(Card, {
    title: "Transfer workspace",
    description: "Move Acme Labs to another owner.",
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "Start transfer")
  }), /*#__PURE__*/React.createElement(Card, {
    title: "Delete workspace",
    description: "Removes 4 projects, 12 environments and all logs.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
      tone: "danger",
      dot: true
    }, "Irreversible"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "destructive"
    }, "Delete workspace")))
  })) : null);
}
window.SettingsScreen = SettingsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/settings-screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/docs-page.jsx
try { (() => {
const {
  Sidebar,
  SidebarSection,
  SidebarItem,
  Rule,
  Badge,
  Card,
  Icon,
  Banner,
  Button
} = window.GradientDesignSystem_46fafe;
const NAV = [["Getting started", ["What is a DESIGN.md", "Install", "Prompt guide"]], ["Foundations", ["Colour", "Typography", "Spacing", "Depth"]], ["Components", ["Buttons", "Inputs", "Cards", "Navigation"]]];
function DocsPage() {
  const [active, setActive] = React.useState("What is a DESIGN.md");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: "calc(100vh - 64px)"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, null, NAV.map(([label, items]) => /*#__PURE__*/React.createElement(SidebarSection, {
    key: label,
    label: label
  }, items.map(i => /*#__PURE__*/React.createElement(SidebarItem, {
    key: i,
    active: active === i,
    onClick: () => setActive(i)
  }, i))))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: "var(--space-12) var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-prose)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontSize: 13,
      color: "var(--ink-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Docs"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, "Getting started")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--h1-size)",
      lineHeight: "var(--h1-lh)",
      fontWeight: 600,
      letterSpacing: "var(--h1-track)",
      marginTop: "var(--space-4)"
    }
  }, active), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: "var(--ink-muted)",
      marginTop: "var(--space-4)"
    }
  }, "A plain-text design system document that agents read to generate consistent UI. It is just a markdown file \u2014 nothing to parse, nothing to configure."), /*#__PURE__*/React.createElement(Rule, {
    spacing: "tight"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--h3-size)",
      lineHeight: "var(--h3-lh)",
      fontWeight: 600,
      letterSpacing: "var(--h3-track)"
    }
  }, "How to use it"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      marginTop: "var(--space-4)"
    }
  }, "Copy the file into your project root, then tell the agent to use it. Three phrasings cover most work:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      marginTop: "var(--space-4)"
    }
  }, ["Build a pricing page using DESIGN.md.", "Refactor this component to match DESIGN.md.", "Audit this page against DESIGN.md and list every violation."].map(q => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-3) var(--space-4)",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--ink-muted)"
    }
  }, q))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "info",
    title: "Two files, two audiences"
  }, "AGENTS.md tells a coding agent how to build the project; DESIGN.md tells a design agent how it should look.")), /*#__PURE__*/React.createElement(Rule, {
    spacing: "tight"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--h3-size)",
      lineHeight: "var(--h3-lh)",
      fontWeight: 600,
      letterSpacing: "var(--h3-track)"
    }
  }, "What ships"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)",
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    title: "DESIGN.md",
    description: "Nine sections: theme, colour, type, components, layout, depth, guardrails, responsive, prompts."
  }), /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    title: "preview.html",
    description: "Visual catalog \u2014 swatches, type scale, buttons, cards. A dark twin ships alongside."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "MIT"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "OFL typefaces"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "Next: Install"))))));
}
window.DocsPage = DocsPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/docs-page.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/home-page.jsx
try { (() => {
const {
  Button,
  Card,
  Rule,
  Badge,
  Icon,
  Banner
} = window.GradientDesignSystem_46fafe;
const SECTION = {
  maxWidth: "var(--container-content)",
  margin: "0 auto",
  padding: "0 var(--space-16)"
};
function HomePage({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--gradient-veil)",
      paddingTop: "var(--space-32)",
      paddingBottom: "var(--space-24)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gradient-halo)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "v2.0 \u2014 the dissolving rule"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-xl-size)",
      lineHeight: 1,
      fontWeight: 500,
      letterSpacing: "-0.03em",
      marginTop: "var(--space-6)",
      maxWidth: "20ch"
    }
  }, "A design system that never raises its voice."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: "var(--ink-muted)",
      marginTop: "var(--space-6)",
      maxWidth: "60ch"
    }
  }, "Gradient ships tokens, primitives and screens built on one constraint: no decorative gradient exceeds an 8% lightness delta. Hierarchy comes from space and weight, not colour volume."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "Start free"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate("docs")
  }, "Read DESIGN.md")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginTop: "var(--space-10)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--ink-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "174 tokens"), /*#__PURE__*/React.createElement("span", null, "23 primitives"), /*#__PURE__*/React.createElement("span", null, "3 typefaces"), /*#__PURE__*/React.createElement("span", null, "MIT licence")))), /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement(Rule, null)), /*#__PURE__*/React.createElement("section", {
    style: SECTION
  }, /*#__PURE__*/React.createElement("div", {
    className: "gds-overline"
  }, "Foundations"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--h2-size)",
      lineHeight: "var(--h2-lh)",
      fontWeight: 600,
      letterSpacing: "var(--h2-track)",
      marginTop: "var(--space-3)",
      maxWidth: "34ch"
    }
  }, "Three rules do most of the work."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-10)"
    }
  }, [["gauge", "Gradients as atmosphere", "Under 8% lightness delta everywhere except a primary action surface. A gradient you notice on a card has failed."], ["minus", "The dissolving rule", "Dividers fade out at both ends. Structure without hard edges — the one thing a page should be remembered for."], ["move-horizontal", "Space before borders", "Related elements at space-4, unrelated at space-10. Before adding a divider, try doubling the gap."]].map(([icon, title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: title
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--h3-size)",
      lineHeight: "var(--h3-lh)",
      fontWeight: 600,
      letterSpacing: "var(--h3-track)",
      marginTop: "var(--space-4)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--ink-muted)",
      marginTop: "var(--space-3)"
    }
  }, body))))), /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement(Rule, null)), /*#__PURE__*/React.createElement("section", {
    style: SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "gds-overline"
  }, "Drop-in"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--h2-size)",
      lineHeight: "var(--h2-lh)",
      fontWeight: 600,
      letterSpacing: "var(--h2-track)",
      marginTop: "var(--space-3)"
    }
  }, "One markdown file your agent already reads."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: "var(--ink-muted)",
      marginTop: "var(--space-4)",
      maxWidth: "56ch"
    }
  }, "No Figma export, no JSON schema, no plugin. Copy DESIGN.md into the project root and tell the agent to build against it. Audit an existing page the same way."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    }),
    onClick: () => onNavigate("docs")
  }, "See the prompt guide"))), /*#__PURE__*/React.createElement(Card, {
    elevated: true,
    flush: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "var(--space-3) var(--space-4)",
      borderBottom: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "terminal",
    size: 14,
    color: "var(--ink-faint)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--ink-muted)"
    }
  }, "agent")), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: "var(--space-5)",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      lineHeight: 1.7,
      color: "var(--ink-muted)",
      whiteSpace: "pre-wrap"
    }
  }, "> Build a pricing page using DESIGN.md.\n\n  ✓ canvas       gradient-veil\n  ✓ measure      1200px, prose 720px\n  ✓ sections     dissolving rule, space-16\n  ✓ primary      1 of 1 allowed\n  ✓ palette      0 colours off-system")))), /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement(Rule, null)), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SECTION,
      paddingBottom: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "info",
    title: "Everything here is licensed MIT",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onNavigate("pricing")
    }, "Compare plans")
  }, "Tokens, primitives and the three OFL typefaces. Paid plans add hosted audits and team review.")), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-sunken)",
      borderTop: "1px solid var(--hairline)",
      padding: "var(--space-16) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      fontWeight: 500,
      letterSpacing: "-0.02em"
    }
  }, "Gradient"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-faint)",
      marginTop: "var(--space-3)",
      maxWidth: "34ch"
    }
  }, "Subtle, beautiful, and minimalistic. A plain-text design system for agents.")), [["Product", ["Overview", "Pricing", "Changelog"]], ["Resources", ["DESIGN.md", "Preview catalog", "Licence"]], ["Company", ["About", "Contact"]]].map(([head, items]) => /*#__PURE__*/React.createElement("div", {
    key: head
  }, /*#__PURE__*/React.createElement("div", {
    className: "gds-overline"
  }, head), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      marginTop: "var(--space-4)"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#f",
    style: {
      fontSize: 14,
      color: "var(--ink-muted)",
      textDecoration: "none"
    }
  }, i))))))));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/home-page.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/pricing-page.jsx
try { (() => {
const {
  Button,
  Card,
  Rule,
  Badge,
  Switch,
  Icon,
  Table
} = window.GradientDesignSystem_46fafe;
const SECTION = {
  maxWidth: "var(--container-content)",
  margin: "0 auto",
  padding: "0 var(--space-16)"
};
const PLANS = [{
  name: "Free",
  price: ["0", "0"],
  blurb: "For a single designer auditing one project.",
  cta: "Start free",
  primary: false,
  features: ["DESIGN.md + preview catalog", "174 tokens, 23 primitives", "Community issues"]
}, {
  name: "Team",
  price: ["18", "15"],
  blurb: "For product teams shipping against one system.",
  cta: "Start 14-day trial",
  primary: true,
  features: ["Everything in Free", "Hosted adherence audits", "Figma + code token sync", "Review comments on screens"]
}, {
  name: "Enterprise",
  price: [null, null],
  blurb: "For orgs with several brands and a review board.",
  cta: "Talk to us",
  primary: false,
  features: ["Everything in Team", "Multi-brand theming", "SSO and audit log", "Named design partner"]
}];
function PricingPage() {
  const [annual, setAnnual] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gradient-veil)",
      paddingTop: "var(--space-24)",
      paddingBottom: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gds-overline"
  }, "Pricing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-l-size)",
      lineHeight: 1.05,
      fontWeight: 500,
      letterSpacing: "-0.025em",
      marginTop: "var(--space-4)"
    }
  }, "Priced per seat, not per surface."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: "var(--ink-muted)",
      marginTop: "var(--space-5)",
      maxWidth: "52ch",
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, "The system itself is MIT. You pay only when a team needs audits, sync and review."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    id: "billing",
    checked: annual,
    onChange: e => setAnnual(e.target.checked),
    label: "Billed annually"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "2 months free")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SECTION,
      marginTop: "calc(-1 * var(--space-10))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)",
      alignItems: "start"
    }
  }, PLANS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    elevated: p.primary,
    style: p.primary ? {
      borderColor: "var(--accent-edge)"
    } : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--h3-size)",
      lineHeight: "var(--h3-lh)",
      fontWeight: 600,
      letterSpacing: "var(--h3-track)"
    }
  }, p.name), p.primary ? /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Most teams") : null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--ink-muted)",
      marginTop: "var(--space-2)",
      minHeight: 44
    }
  }, p.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-2)",
      marginTop: "var(--space-5)"
    }
  }, p.price[0] === null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      fontWeight: 500,
      letterSpacing: "-0.02em"
    }
  }, "Custom") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      fontWeight: 500,
      letterSpacing: "-0.02em",
      fontVariantNumeric: "tabular-nums"
    }
  }, "$" + (annual ? p.price[1] : p.price[0])), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--ink-faint)"
    }
  }, "per seat / month"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: p.primary ? "primary" : "secondary",
    block: true
  }, p.cta)), /*#__PURE__*/React.createElement(Rule, {
    spacing: "tight"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, p.features.map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--ink-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  })), x))))))), /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement(Rule, null)), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SECTION,
      paddingBottom: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--h3-size)",
      lineHeight: "var(--h3-lh)",
      fontWeight: 600,
      letterSpacing: "var(--h3-track)"
    }
  }, "What is included"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Table, {
    rowKey: "f",
    responsive: "scroll",
    label: "Plan comparison",
    columns: [{
      key: "f",
      label: "Capability"
    }, {
      key: "free",
      label: "Free",
      numeric: true
    }, {
      key: "team",
      label: "Team",
      numeric: true
    }, {
      key: "ent",
      label: "Enterprise",
      numeric: true
    }],
    rows: [{
      f: "Seats",
      free: "1",
      team: "25",
      ent: "Unlimited"
    }, {
      f: "Adherence audits / month",
      free: "5",
      team: "2,000",
      ent: "Unlimited"
    }, {
      f: "Themes",
      free: "2",
      team: "8",
      ent: "Unlimited"
    }, {
      f: "Support response",
      free: "—",
      team: "1 day",
      ent: "2 hours"
    }]
  }))));
}
window.PricingPage = PricingPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/pricing-page.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/site-app.jsx
try { (() => {
function MarketingSite() {
  const [page, setPage] = React.useState("home");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteNav, {
    page: page,
    onNavigate: setPage
  }), page === "home" ? /*#__PURE__*/React.createElement(HomePage, {
    onNavigate: setPage
  }) : null, page === "pricing" ? /*#__PURE__*/React.createElement(PricingPage, null) : null, page === "docs" ? /*#__PURE__*/React.createElement(DocsPage, null) : null);
}
window.MarketingSite = MarketingSite;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/site-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/site-nav.jsx
try { (() => {
const {
  TopBar,
  NavLink,
  Button,
  Icon
} = window.GradientDesignSystem_46fafe;
function SiteNav({
  page,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(TopBar, {
    brand: /*#__PURE__*/React.createElement("a", {
      href: "#home",
      onClick: e => {
        e.preventDefault();
        onNavigate("home");
      },
      style: {
        textDecoration: "none",
        color: "var(--ink)",
        fontFamily: "var(--font-display)",
        fontSize: 17,
        fontWeight: 500,
        letterSpacing: "-0.02em"
      }
    }, "Gradient"),
    links: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavLink, {
      active: page === "home",
      onClick: () => onNavigate("home")
    }, "Product"), /*#__PURE__*/React.createElement(NavLink, {
      active: page === "pricing",
      onClick: () => onNavigate("pricing")
    }, "Pricing"), /*#__PURE__*/React.createElement(NavLink, {
      active: page === "docs",
      onClick: () => onNavigate("docs")
    }, "Docs"), /*#__PURE__*/React.createElement(NavLink, null, "Changelog")),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right"
      })
    }, "Start free"))
  });
}
window.SiteNav = SiteNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/site-nav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.SidebarSection = __ds_scope.SidebarSection;

__ds_ns.SidebarItem = __ds_scope.SidebarItem;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
