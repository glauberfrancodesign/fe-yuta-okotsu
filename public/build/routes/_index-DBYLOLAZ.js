import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  ReactSdkContext,
  getIndexWithinAncestorFromComponentProps,
  getInstanceIdFromComponentProps
} from "/build/_shared/chunk-WFRUTNE7.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  NavLink,
  Scripts,
  ScrollRestoration,
  useFetcher
} from "/build/_shared/chunk-4NDJK7A4.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-WBVPNCHV.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/warn-once/index.js
var require_warn_once = __commonJS({
  "node_modules/warn-once/index.js"(exports, module) {
    var DEV = true;
    var warnings = /* @__PURE__ */ new Set();
    function warnOnce2(condition, ...rest) {
      if (DEV && condition) {
        const key = rest.join(" ");
        if (warnings.has(key)) {
          return;
        }
        warnings.add(key);
        console.warn(...rest);
      }
    }
    module.exports = warnOnce2;
  }
});

// node_modules/@webstudio-is/form-handlers/lib/index.js
var formHiddenFieldPrefix = "ws--form";
var formIdFieldName = `${formHiddenFieldPrefix}-id`;

// app/__generated__/_index.tsx
var import_react84 = __toESM(require_react());

// node_modules/@webstudio-is/sdk-components-react-remix/lib/components.js
var import_react35 = __toESM(require_react(), 1);
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);

// node_modules/@webstudio-is/sdk-components-react/lib/components.js
var import_react3 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/import.mjs
var import_react = __toESM(require_react(), 1);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, import_react.default).useLayoutEffect : () => {
};
var $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
function $5dc95899b306f630$export$c9058316764c140e(...refs) {
  if (refs.length === 1)
    return refs[0];
  return (value) => {
    for (let ref of refs) {
      if (typeof ref === "function")
        ref(value);
      else if (ref != null)
        ref.current = value;
    }
  };
}
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll())
    element.focus({
      preventScroll: true
    });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      var focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e2) {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  var parent = element.parentNode;
  var scrollableElements = [];
  var rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth)
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement)
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
function $c87311424ea30a05$var$testUserAgent(re) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null)
    return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$78551043582a6a98() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$b7d78993b74f766d() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
}
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ((0, $c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
    if ((0, $c87311424ea30a05$export$9ac100e40613ea10)())
      metaKey = true;
    else
      ctrlKey = true;
  }
  let event = (0, $c87311424ea30a05$export$78551043582a6a98)() && (0, $c87311424ea30a05$export$9ac100e40613ea10)() && !(0, $c87311424ea30a05$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: true,
    cancelable: true
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
  (0, $7215afc6de606d6b$export$de79e2c695e052f3)(target);
  target.dispatchEvent(event);
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined")
    return;
  let onTransitionStart = (e2) => {
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e2.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e2.target, transitions);
      e2.target.addEventListener("transitioncancel", onTransitionEnd);
    }
    transitions.add(e2.propertyName);
  };
  let onTransitionEnd = (e2) => {
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e2.target);
    if (!properties)
      return;
    properties.delete(e2.propertyName);
    if (properties.size === 0) {
      e2.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e2.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)
        cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading")
    $bbed8b41f857bcc0$var$setupGlobalEvents();
  else
    document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
var $5df64b3807dc15ee$var$visualViewport = typeof document !== "undefined" && window.visualViewport;

// node_modules/@webstudio-is/sdk-components-react/lib/components.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var import_react9 = __toESM(require_react(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var import_react10 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var import_react11 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var import_react12 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var import_react13 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var import_react14 = __toESM(require_react(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var import_react15 = __toESM(require_react(), 1);
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var import_react16 = __toESM(require_react(), 1);
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var import_react17 = __toESM(require_react(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var import_react18 = __toESM(require_react(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var import_react19 = __toESM(require_react(), 1);
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var import_react20 = __toESM(require_react(), 1);
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var import_react21 = __toESM(require_react(), 1);

// node_modules/@webstudio-is/image/lib/index.js
var import_react2 = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_warn_once = __toESM(require_warn_once(), 1);
var imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
var deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
var allSizes = [...imageSizes, ...deviceSizes];
var getWidths = (width, sizes) => {
  if (sizes) {
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];
    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(Number.parseInt(match[2], 10));
    }
    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(
          (size2) => size2 >= deviceSizes[0] * smallestRatio
        ),
        kind: "w"
      };
    }
    return { widths: allSizes, kind: "w" };
  }
  if (width == null) {
    return { widths: deviceSizes, kind: "w" };
  }
  const MAX_DEVICE_PIXEL_RATIO = 2;
  let index2 = allSizes.findIndex(
    (size2) => size2 >= MAX_DEVICE_PIXEL_RATIO * width
  );
  index2 = index2 < 0 ? allSizes.length : index2;
  return {
    widths: allSizes.slice(0, index2 + 1),
    kind: "w"
  };
};
var generateImgAttrs = ({
  src,
  width,
  quality,
  sizes,
  loader
}) => {
  const { widths, kind } = getWidths(width, sizes);
  return {
    sizes: !sizes && kind === "w" ? "100vw" : sizes,
    srcSet: widths.map(
      (w2, i2) => `${loader({ src, quality, width: w2 })} ${kind === "w" ? w2 : i2 + 1}${kind}`
    ).join(", "),
    // Must be last, to prevent Safari to load images twice
    src: loader({
      src,
      quality,
      width: widths[widths.length - 1]
    })
  };
};
var getInt = (value) => {
  if (typeof value === "number") {
    return Math.round(value);
  }
  if (typeof value === "string") {
    const vNum = Number.parseFloat(value);
    if (!Number.isNaN(vNum)) {
      return Math.round(vNum);
    }
  }
  return void 0;
};
var DEFAULT_SIZES = "(min-width: 1280px) 50vw, 100vw";
var DEFAULT_QUALITY = 80;
var getImageAttributes = (props) => {
  const width = getInt(props.width);
  const quality = Math.max(
    Math.min(getInt(props.quality) ?? DEFAULT_QUALITY, 100),
    0
  );
  if (props.src != null && props.src !== "") {
    if (props.srcSet == null && props.optimize) {
      const sizes = props.sizes ?? (props.width == null ? DEFAULT_SIZES : void 0);
      return generateImgAttrs({
        src: props.src,
        width,
        quality,
        sizes,
        loader: props.loader
      });
    }
    const resAttrs = { src: props.src };
    if (props.srcSet != null) {
      resAttrs.srcSet = props.srcSet;
    }
    if (props.sizes != null) {
      resAttrs.sizes = props.sizes;
    }
    return resAttrs;
  }
  return null;
};
var Image = (0, import_react2.forwardRef)(
  ({
    quality,
    loader,
    optimize = true,
    loading = "lazy",
    decoding = "async",
    ...imageProps
  }, ref) => {
    const imageAttributes = getImageAttributes({
      src: imageProps.src,
      srcSet: imageProps.srcSet,
      sizes: imageProps.sizes,
      width: imageProps.width,
      quality,
      loader,
      optimize
    }) ?? { src: imagePlaceholderSvg };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "img",
      {
        ...imageProps,
        ...imageAttributes,
        decoding,
        loading,
        ref
      }
    );
  }
);
Image.displayName = "Image";
var imagePlaceholderSvg = `data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`;

// node_modules/@webstudio-is/sdk-components-react/lib/components.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var import_react22 = __toESM(require_react(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var import_react23 = __toESM(require_react(), 1);
var import_react24 = __toESM(require_react(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var import_react25 = __toESM(require_react(), 1);
var import_react26 = __toESM(require_react(), 1);
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var import_react27 = __toESM(require_react(), 1);
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var import_react28 = __toESM(require_react(), 1);
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var import_react29 = __toESM(require_react(), 1);
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var import_react30 = __toESM(require_react(), 1);
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);

// node_modules/colord/index.mjs
var r = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
var t = function(r2) {
  return "string" == typeof r2 ? r2.length > 0 : "number" == typeof r2;
};
var n = function(r2, t2, n2) {
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = Math.pow(10, t2)), Math.round(n2 * r2) / n2 + 0;
};
var e = function(r2, t2, n2) {
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 1), r2 > n2 ? n2 : r2 > t2 ? r2 : t2;
};
var u = function(r2) {
  return (r2 = isFinite(r2) ? r2 % 360 : 0) > 0 ? r2 : r2 + 360;
};
var a = function(r2) {
  return { r: e(r2.r, 0, 255), g: e(r2.g, 0, 255), b: e(r2.b, 0, 255), a: e(r2.a) };
};
var o = function(r2) {
  return { r: n(r2.r), g: n(r2.g), b: n(r2.b), a: n(r2.a, 3) };
};
var i = /^#([0-9a-f]{3,8})$/i;
var s = function(r2) {
  var t2 = r2.toString(16);
  return t2.length < 2 ? "0" + t2 : t2;
};
var h = function(r2) {
  var t2 = r2.r, n2 = r2.g, e2 = r2.b, u2 = r2.a, a2 = Math.max(t2, n2, e2), o2 = a2 - Math.min(t2, n2, e2), i2 = o2 ? a2 === t2 ? (n2 - e2) / o2 : a2 === n2 ? 2 + (e2 - t2) / o2 : 4 + (t2 - n2) / o2 : 0;
  return { h: 60 * (i2 < 0 ? i2 + 6 : i2), s: a2 ? o2 / a2 * 100 : 0, v: a2 / 255 * 100, a: u2 };
};
var b = function(r2) {
  var t2 = r2.h, n2 = r2.s, e2 = r2.v, u2 = r2.a;
  t2 = t2 / 360 * 6, n2 /= 100, e2 /= 100;
  var a2 = Math.floor(t2), o2 = e2 * (1 - n2), i2 = e2 * (1 - (t2 - a2) * n2), s2 = e2 * (1 - (1 - t2 + a2) * n2), h2 = a2 % 6;
  return { r: 255 * [e2, i2, o2, o2, s2, e2][h2], g: 255 * [s2, e2, e2, i2, o2, o2][h2], b: 255 * [o2, o2, s2, e2, e2, i2][h2], a: u2 };
};
var g = function(r2) {
  return { h: u(r2.h), s: e(r2.s, 0, 100), l: e(r2.l, 0, 100), a: e(r2.a) };
};
var d = function(r2) {
  return { h: n(r2.h), s: n(r2.s), l: n(r2.l), a: n(r2.a, 3) };
};
var f = function(r2) {
  return b((n2 = (t2 = r2).s, { h: t2.h, s: (n2 *= ((e2 = t2.l) < 50 ? e2 : 100 - e2) / 100) > 0 ? 2 * n2 / (e2 + n2) * 100 : 0, v: e2 + n2, a: t2.a }));
  var t2, n2, e2;
};
var c = function(r2) {
  return { h: (t2 = h(r2)).h, s: (u2 = (200 - (n2 = t2.s)) * (e2 = t2.v) / 100) > 0 && u2 < 200 ? n2 * e2 / 100 / (u2 <= 100 ? u2 : 200 - u2) * 100 : 0, l: u2 / 2, a: t2.a };
  var t2, n2, e2, u2;
};
var l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var p = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var m = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var y = { string: [[function(r2) {
  var t2 = i.exec(r2);
  return t2 ? (r2 = t2[1]).length <= 4 ? { r: parseInt(r2[0] + r2[0], 16), g: parseInt(r2[1] + r2[1], 16), b: parseInt(r2[2] + r2[2], 16), a: 4 === r2.length ? n(parseInt(r2[3] + r2[3], 16) / 255, 2) : 1 } : 6 === r2.length || 8 === r2.length ? { r: parseInt(r2.substr(0, 2), 16), g: parseInt(r2.substr(2, 2), 16), b: parseInt(r2.substr(4, 2), 16), a: 8 === r2.length ? n(parseInt(r2.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(r2) {
  var t2 = v.exec(r2) || m.exec(r2);
  return t2 ? t2[2] !== t2[4] || t2[4] !== t2[6] ? null : a({ r: Number(t2[1]) / (t2[2] ? 100 / 255 : 1), g: Number(t2[3]) / (t2[4] ? 100 / 255 : 1), b: Number(t2[5]) / (t2[6] ? 100 / 255 : 1), a: void 0 === t2[7] ? 1 : Number(t2[7]) / (t2[8] ? 100 : 1) }) : null;
}, "rgb"], [function(t2) {
  var n2 = l.exec(t2) || p.exec(t2);
  if (!n2)
    return null;
  var e2, u2, a2 = g({ h: (e2 = n2[1], u2 = n2[2], void 0 === u2 && (u2 = "deg"), Number(e2) * (r[u2] || 1)), s: Number(n2[3]), l: Number(n2[4]), a: void 0 === n2[5] ? 1 : Number(n2[5]) / (n2[6] ? 100 : 1) });
  return f(a2);
}, "hsl"]], object: [[function(r2) {
  var n2 = r2.r, e2 = r2.g, u2 = r2.b, o2 = r2.a, i2 = void 0 === o2 ? 1 : o2;
  return t(n2) && t(e2) && t(u2) ? a({ r: Number(n2), g: Number(e2), b: Number(u2), a: Number(i2) }) : null;
}, "rgb"], [function(r2) {
  var n2 = r2.h, e2 = r2.s, u2 = r2.l, a2 = r2.a, o2 = void 0 === a2 ? 1 : a2;
  if (!t(n2) || !t(e2) || !t(u2))
    return null;
  var i2 = g({ h: Number(n2), s: Number(e2), l: Number(u2), a: Number(o2) });
  return f(i2);
}, "hsl"], [function(r2) {
  var n2 = r2.h, a2 = r2.s, o2 = r2.v, i2 = r2.a, s2 = void 0 === i2 ? 1 : i2;
  if (!t(n2) || !t(a2) || !t(o2))
    return null;
  var h2 = function(r3) {
    return { h: u(r3.h), s: e(r3.s, 0, 100), v: e(r3.v, 0, 100), a: e(r3.a) };
  }({ h: Number(n2), s: Number(a2), v: Number(o2), a: Number(s2) });
  return b(h2);
}, "hsv"]] };
var N = function(r2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var e2 = t2[n2][0](r2);
    if (e2)
      return [e2, t2[n2][1]];
  }
  return [null, void 0];
};
var x = function(r2) {
  return "string" == typeof r2 ? N(r2.trim(), y.string) : "object" == typeof r2 && null !== r2 ? N(r2, y.object) : [null, void 0];
};
var M = function(r2, t2) {
  var n2 = c(r2);
  return { h: n2.h, s: e(n2.s + 100 * t2, 0, 100), l: n2.l, a: n2.a };
};
var H = function(r2) {
  return (299 * r2.r + 587 * r2.g + 114 * r2.b) / 1e3 / 255;
};
var $ = function(r2, t2) {
  var n2 = c(r2);
  return { h: n2.h, s: n2.s, l: e(n2.l + 100 * t2, 0, 100), a: n2.a };
};
var j = function() {
  function r2(r3) {
    this.parsed = x(r3)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return r2.prototype.isValid = function() {
    return null !== this.parsed;
  }, r2.prototype.brightness = function() {
    return n(H(this.rgba), 2);
  }, r2.prototype.isDark = function() {
    return H(this.rgba) < 0.5;
  }, r2.prototype.isLight = function() {
    return H(this.rgba) >= 0.5;
  }, r2.prototype.toHex = function() {
    return r3 = o(this.rgba), t2 = r3.r, e2 = r3.g, u2 = r3.b, i2 = (a2 = r3.a) < 1 ? s(n(255 * a2)) : "", "#" + s(t2) + s(e2) + s(u2) + i2;
    var r3, t2, e2, u2, a2, i2;
  }, r2.prototype.toRgb = function() {
    return o(this.rgba);
  }, r2.prototype.toRgbString = function() {
    return r3 = o(this.rgba), t2 = r3.r, n2 = r3.g, e2 = r3.b, (u2 = r3.a) < 1 ? "rgba(" + t2 + ", " + n2 + ", " + e2 + ", " + u2 + ")" : "rgb(" + t2 + ", " + n2 + ", " + e2 + ")";
    var r3, t2, n2, e2, u2;
  }, r2.prototype.toHsl = function() {
    return d(c(this.rgba));
  }, r2.prototype.toHslString = function() {
    return r3 = d(c(this.rgba)), t2 = r3.h, n2 = r3.s, e2 = r3.l, (u2 = r3.a) < 1 ? "hsla(" + t2 + ", " + n2 + "%, " + e2 + "%, " + u2 + ")" : "hsl(" + t2 + ", " + n2 + "%, " + e2 + "%)";
    var r3, t2, n2, e2, u2;
  }, r2.prototype.toHsv = function() {
    return r3 = h(this.rgba), { h: n(r3.h), s: n(r3.s), v: n(r3.v), a: n(r3.a, 3) };
    var r3;
  }, r2.prototype.invert = function() {
    return w({ r: 255 - (r3 = this.rgba).r, g: 255 - r3.g, b: 255 - r3.b, a: r3.a });
    var r3;
  }, r2.prototype.saturate = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w(M(this.rgba, r3));
  }, r2.prototype.desaturate = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w(M(this.rgba, -r3));
  }, r2.prototype.grayscale = function() {
    return w(M(this.rgba, -1));
  }, r2.prototype.lighten = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w($(this.rgba, r3));
  }, r2.prototype.darken = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w($(this.rgba, -r3));
  }, r2.prototype.rotate = function(r3) {
    return void 0 === r3 && (r3 = 15), this.hue(this.hue() + r3);
  }, r2.prototype.alpha = function(r3) {
    return "number" == typeof r3 ? w({ r: (t2 = this.rgba).r, g: t2.g, b: t2.b, a: r3 }) : n(this.rgba.a, 3);
    var t2;
  }, r2.prototype.hue = function(r3) {
    var t2 = c(this.rgba);
    return "number" == typeof r3 ? w({ h: r3, s: t2.s, l: t2.l, a: t2.a }) : n(t2.h);
  }, r2.prototype.isEqual = function(r3) {
    return this.toHex() === w(r3).toHex();
  }, r2;
}();
var w = function(r2) {
  return r2 instanceof j ? r2 : new j(r2);
};

// node_modules/@webstudio-is/sdk-components-react/lib/components.js
var import_react31 = __toESM(require_react(), 1);

// node_modules/shallow-equal/dist/index.modern.mjs
function shallowEqualArrays(arrA, arrB) {
  if (arrA === arrB) {
    return true;
  }
  if (!arrA || !arrB) {
    return false;
  }
  const len = arrA.length;
  if (arrB.length !== len) {
    return false;
  }
  for (let i2 = 0; i2 < len; i2++) {
    if (arrA[i2] !== arrB[i2]) {
      return false;
    }
  }
  return true;
}
function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }
  if (!objA || !objB) {
    return false;
  }
  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  const len = aKeys.length;
  if (bKeys.length !== len) {
    return false;
  }
  for (let i2 = 0; i2 < len; i2++) {
    const key = aKeys[i2];
    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }
  return true;
}
function shallowEqual(a2, b2) {
  const aIsArr = Array.isArray(a2);
  const bIsArr = Array.isArray(b2);
  if (aIsArr !== bIsArr) {
    return false;
  }
  if (aIsArr && bIsArr) {
    return shallowEqualArrays(a2, b2);
  }
  return shallowEqualObjects(a2, b2);
}

// node_modules/@webstudio-is/sdk-components-react/lib/components.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var import_react32 = __toESM(require_react(), 1);
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var import_react33 = __toESM(require_react(), 1);
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
var import_react34 = __toESM(require_react(), 1);
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var Slot = (0, import_react3.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      ...props,
      ref,
      style: { display: props.children ? "contents" : "block" }
    }
  );
});
Slot.displayName = "Slot";
var Fragment = (0, import_react4.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { ...props, ref, style: { display: "contents" } });
});
Fragment.displayName = "Fragment";
var ExecutableHtml = (props) => {
  const { code, innerRef, ...rest } = props;
  const containerRef = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    const container = containerRef.current;
    if (container === null || code === void 0) {
      return;
    }
    const range = document.createRange();
    range.setStart(container, 0);
    const fragment = range.createContextualFragment(code);
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.append(fragment);
  }, [code]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      ...rest,
      ref: $5dc95899b306f630$export$c9058316764c140e(innerRef, containerRef),
      style: { display: "contents" }
    }
  );
};
var InnerHtml = (props) => {
  const { code, innerRef, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      ...rest,
      ref: innerRef,
      style: { display: "contents" },
      dangerouslySetInnerHTML: { __html: props.code ?? "" }
    }
  );
};
var Placeholder = (props) => {
  const { code, innerRef, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { ref: innerRef, ...rest, style: { padding: "20px" }, children: 'Open the "Settings" panel to insert HTML code' });
};
var HtmlEmbed = (0, import_react5.forwardRef)((props, ref) => {
  const { renderer } = (0, import_react5.useContext)(ReactSdkContext);
  const { code, executeScriptOnCanvas, clientOnly, ...rest } = props;
  if (code === void 0 || code.trim().length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Placeholder, { innerRef: ref, ...rest });
  }
  if (renderer === "canvas" && executeScriptOnCanvas === true || renderer === "preview" || clientOnly) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ExecutableHtml, { innerRef: ref, code, ...rest });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InnerHtml, { innerRef: ref, code, ...rest });
});
HtmlEmbed.displayName = "HtmlEmbed";
var Body = (0, import_react6.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("body", { ...props, ref }));
Body.displayName = "Body";
var defaultTag = "div";
var Box = (0, import_react7.forwardRef)(
  ({ tag = defaultTag, ...props }, ref) => {
    return (0, import_react7.createElement)(tag, { ...props, ref });
  }
);
Box.displayName = "Box";
var defaultTag2 = "div";
var Text = (0, import_react8.forwardRef)(
  ({ tag: Tag = defaultTag2, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tag, { ...props, ref, children: children ?? "The text you can edit" });
  }
);
Text.displayName = "Text";
var defaultTag3 = "h1";
var Heading = (0, import_react9.forwardRef)(
  ({ tag: Tag = defaultTag3, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Tag, { ...props, ref, children: children ?? "Heading you can edit" });
  }
);
Heading.displayName = "Heading";
var Paragraph = (0, import_react10.forwardRef)(({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { ...props, ref, children: children ?? "Paragraph you can edit" }));
Paragraph.displayName = "Paragraph";
var Link = (0, import_react11.forwardRef)(
  ({ children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", { ...props, href: props.href ?? "#", ref, children: children ?? "Link text you can edit" });
  }
);
Link.displayName = "Link";
var RichTextLink = (0, import_react12.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Link, { ...props, ref }));
RichTextLink.displayName = "RichTextLink";
var Span = (0, import_react13.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { ...props, ref }));
Span.displayName = "Span";
var Bold = (0, import_react14.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("b", { ...props, ref }));
Bold.displayName = "Bold";
var Italic = (0, import_react15.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("i", { ...props, ref }));
Italic.displayName = "Italic";
var Superscript = (0, import_react16.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("sup", { ...props, ref }));
Superscript.displayName = "Bold";
var Subscript = (0, import_react17.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("sub", { ...props, ref }));
Subscript.displayName = "Subscript";
var Button = (0, import_react18.forwardRef)(
  ({ type = "submit", children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { type, ...props, ref, children: children ?? "Button you can edit" })
);
Button.displayName = "Button";
var Input = (0, import_react19.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", { ...props, ref }));
Input.displayName = "Input";
var Form = (0, import_react20.forwardRef)(({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("form", { ...props, ref, children }));
Form.displayName = "Form";
var imagePlaceholderSvg2 = `data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#CCCCCC" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#A2A2A2"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#A2A2A2"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#A2A2A2"
  />
</svg>`)}`;
var Image2 = (0, import_react21.forwardRef)(
  ({ loading = "lazy", ...props }, ref) => {
    const { imageLoader: imageLoader2, assetBaseUrl: assetBaseUrl2 } = (0, import_react21.useContext)(ReactSdkContext);
    if (props.src === void 0 || props.src.startsWith(assetBaseUrl2) === false) {
      return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "img",
        {
          loading,
          ...props,
          src: props.src || imagePlaceholderSvg2,
          ref
        },
        props.src
      );
    }
    const src = props.src.slice(assetBaseUrl2.length);
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      Image,
      {
        loading,
        ...props,
        loader: imageLoader2,
        src,
        ref
      },
      src
    );
  }
);
Image2.displayName = "Image";
var Blockquote = (0, import_react22.forwardRef)(
  ({ children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("blockquote", { ...props, ref, children: children ?? "Blockquote you can edit" });
  }
);
Blockquote.displayName = "Blockquote";
var unorderedTag = "ul";
var orderedTag = "ol";
var List = (0, import_react23.forwardRef)(({ ordered = false, ...props }, ref) => {
  const tag = ordered ? orderedTag : unorderedTag;
  return (0, import_react23.createElement)(tag, { ...props, ref });
});
List.displayName = "List";
var ListItem = (0, import_react24.forwardRef)(
  ({ children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("li", { ...props, ref, children: children ?? "List Item you can edit" });
  }
);
ListItem.displayName = "ListItem";
var defaultTag4 = "hr";
var Separator = (0, import_react25.forwardRef)(
  (props, ref) => {
    return (0, import_react25.createElement)(defaultTag4, { ...props, ref });
  }
);
Separator.displayName = "Separator";
var CodeText = (0, import_react26.forwardRef)(({ children, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("code", { ...props, ref, children: children ?? "Code you can edit" });
});
CodeText.displayName = "CodeText";
var Label = (0, import_react27.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("label", { ...props, ref }));
Label.displayName = "Label";
var Textarea = (0, import_react28.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("textarea", { ...props, ref }));
Textarea.displayName = "Textarea";
var RadioButton = (0, import_react29.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("input", { ...props, type: "radio", ref }));
RadioButton.displayName = "RadioButton";
var Checkbox = (0, import_react30.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("input", { ...props, type: "checkbox", ref }));
Checkbox.displayName = "Checkbox";
var getUrl = (options) => {
  if (options.url === void 0) {
    return;
  }
  let url;
  try {
    const userUrl = new URL(options.url);
    url = new URL(IFRAME_CDN);
    url.pathname = `/video${userUrl.pathname}`;
  } catch {
  }
  if (url === void 0) {
    return;
  }
  let option;
  for (option in options) {
    const value = options[option];
    if (option === "url" || value === void 0) {
      continue;
    }
    url.searchParams.append(option, value.toString());
  }
  url.searchParams.set("autoplay", "true");
  if (typeof options.color === "string") {
    const color = w(options.color).toHex().replace("#", "");
    url.searchParams.set("color", color);
  }
  if (options.portrait) {
    url.searchParams.set("title", "true");
  }
  if (options.byline) {
    url.searchParams.set("portrait", "true");
    url.searchParams.set("title", "true");
  }
  return url.toString();
};
var preconnect = (url) => {
  const link = document.createElement("link");
  link.rel = "preconnect";
  link.href = url;
  link.crossOrigin = "true";
  document.head.append(link);
};
var warmed = false;
var PLAYER_CDN = "https://f.vimeocdn.com";
var IFRAME_CDN = "https://player.vimeo.com";
var IMAGE_CDN = "https://i.vimeocdn.com";
var warmConnections = () => {
  if (warmed) {
    return;
  }
  preconnect(PLAYER_CDN);
  preconnect(IFRAME_CDN);
  preconnect(IMAGE_CDN);
  warmed = true;
};
var createPlayer = (parent, options, callback) => {
  const url = getUrl(options);
  if (url === void 0) {
    return;
  }
  const iframe = document.createElement("iframe");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "true");
  iframe.setAttribute("src", url);
  iframe.setAttribute(
    "style",
    "position: absolute; width: 100%; height: 100%; opacity: 0; transition: opacity 1s;"
  );
  iframe.addEventListener(
    "load",
    () => {
      iframe.style.opacity = "1";
      callback();
    },
    { once: true }
  );
  parent.appendChild(iframe);
  return () => {
    iframe.parentElement?.removeChild(iframe);
  };
};
var getVideoId = (url) => {
  try {
    const parsedUrl = new URL(url);
    const id = parsedUrl.pathname.split("/")[1];
    if (id === "" || id == null) {
      return;
    }
    return id;
  } catch {
  }
};
var loadPreviewImage = async (element, videoUrl) => {
  const videoId = getVideoId(videoUrl);
  const apiUrl = `https://vimeo.com/api/v2/video/${videoId}.json`;
  const response = (await (await fetch(apiUrl)).json())[0];
  const thumbnail = response.thumbnail_large;
  const imgId = thumbnail.substr(thumbnail.lastIndexOf("/") + 1).split("_")[0];
  const imageUrl = new URL(IMAGE_CDN);
  imageUrl.pathname = `/video/${imgId}.webp`;
  imageUrl.searchParams.append("mw", "1100");
  imageUrl.searchParams.append("mh", "619");
  imageUrl.searchParams.append("q", "70");
  return imageUrl;
};
var useVimeo = ({
  options,
  renderer,
  showPreview
}) => {
  const [playerStatus, setPlayerStatus] = (0, import_react31.useState)("initial");
  const elementRef = (0, import_react31.useRef)(null);
  const [previewImageUrl, setPreviewImageUrl] = (0, import_react31.useState)();
  (0, import_react31.useEffect)(() => {
    setPlayerStatus(
      options.autoplay && renderer !== "canvas" ? "initialized" : "initial"
    );
  }, [options.autoplay, renderer]);
  (0, import_react31.useEffect)(() => {
    if (elementRef.current === null || playerStatus === "ready" || options.url === void 0) {
      return;
    }
    if (showPreview) {
      loadPreviewImage(elementRef.current, options.url).then(
        setPreviewImageUrl
      );
      return;
    }
    setPreviewImageUrl(void 0);
  }, [renderer, showPreview, options.url, playerStatus]);
  const optionsRef = (0, import_react31.useRef)(options);
  const stableOptions = (0, import_react31.useMemo)(() => {
    if (shallowEqual(options, optionsRef.current) === false) {
      optionsRef.current = options;
    }
    return optionsRef.current;
  }, [options]);
  (0, import_react31.useEffect)(() => {
    if (elementRef.current === null || playerStatus === "initial") {
      return;
    }
    return createPlayer(elementRef.current, stableOptions, () => {
      setPlayerStatus("ready");
    });
  }, [stableOptions, playerStatus]);
  return { previewImageUrl, playerStatus, setPlayerStatus, elementRef };
};
var Vimeo = (0, import_react31.forwardRef)(
  ({
    url,
    autoplay = false,
    autopause = true,
    backgroundMode = false,
    showByline = false,
    showControls = true,
    doNotTrack = false,
    keyboard = true,
    loop = false,
    muted = false,
    pip = false,
    playsinline = true,
    showPortrait = true,
    quality = "auto",
    responsive = true,
    speed = false,
    showTitle = false,
    transparent = true,
    showPreview = false,
    autopip,
    controlsColor,
    interactiveParams,
    texttrack,
    children,
    ...rest
  }, ref) => {
    const { renderer } = (0, import_react31.useContext)(ReactSdkContext);
    const { previewImageUrl, playerStatus, setPlayerStatus, elementRef } = useVimeo({
      renderer,
      showPreview,
      options: {
        url,
        autoplay,
        autopause,
        keyboard,
        loop,
        muted,
        pip,
        playsinline,
        quality,
        responsive,
        speed,
        transparent,
        portrait: showPortrait,
        byline: showByline,
        title: showTitle,
        color: controlsColor,
        controls: showControls,
        interactive_params: interactiveParams,
        background: backgroundMode,
        dnt: doNotTrack
      }
    });
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      VimeoContext.Provider,
      {
        value: {
          status: playerStatus,
          previewImageUrl,
          onInitPlayer() {
            if (renderer !== "canvas") {
              setPlayerStatus("initialized");
            }
          }
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          "div",
          {
            ...rest,
            ref: (value) => {
              elementRef.current = value;
              if (ref !== null) {
                typeof ref === "function" ? ref(value) : ref.current = value;
              }
            },
            onPointerOver: () => {
              if (renderer !== "canvas") {
                warmConnections();
              }
            },
            children: url === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(EmptyState, {}) : children
          }
        )
      }
    );
  }
);
Vimeo.displayName = "Vimeo";
var EmptyState = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    "div",
    {
      style: {
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2em"
      },
      children: 'Open the "Settings" panel and paste a video URL, e.g. https://vimeo.com/831343124.'
    }
  );
};
var VimeoContext = (0, import_react31.createContext)({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onInitPlayer: () => {
  },
  status: "initial"
});
var base64Preview = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkOAMAANIAzr59FiYAAAAASUVORK5CYII=`;
var VimeoPreviewImage = (0, import_react32.forwardRef)(({ src, ...rest }, ref) => {
  const vimeoContext = (0, import_react32.useContext)(VimeoContext);
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    Image2,
    {
      ...rest,
      src: String(vimeoContext.previewImageUrl ?? src ?? base64Preview),
      ref
    }
  );
});
VimeoPreviewImage.displayName = "VimeoPreviewImage";
var VimeoPlayButton = (0, import_react33.forwardRef)(
  (props, ref) => {
    const vimeoContext = (0, import_react33.useContext)(VimeoContext);
    if (vimeoContext.status !== "initial") {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Button, { ...props, onClick: vimeoContext.onInitPlayer, ref });
  }
);
VimeoPlayButton.displayName = "VimeoPlayButton";
var VimeoSpinner = (0, import_react34.forwardRef)(
  (props, ref) => {
    const vimeoContext = (0, import_react34.useContext)(VimeoContext);
    if (vimeoContext.status !== "initialized") {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { ...props, ref });
  }
);
VimeoSpinner.displayName = "VimeoSpinner";

// node_modules/@webstudio-is/sdk-components-react-remix/lib/components.js
var import_react37 = __toESM(require_react(), 1);
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var import_react39 = __toESM(require_react(), 1);
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var Body2 = (0, import_react35.forwardRef)(
  ({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("body", { ...props, ref, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Scripts, {}),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(ScrollRestoration, {})
  ] })
);
Body2.displayName = "Body";
var wrapLinkComponent = (BaseLink3) => {
  const Component = (0, import_react37.forwardRef)((props, ref) => {
    const { pagesPaths: pagesPaths2 } = (0, import_react37.useContext)(ReactSdkContext);
    const href = props.href;
    if (href !== void 0) {
      const url = new URL(href, "https://any-valid.url");
      if (pagesPaths2.has(url.pathname === "/" ? "" : url.pathname)) {
        return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(NavLink, { ...props, to: href, ref });
      }
    }
    const { prefetch, reloadDocument, replace, preventScrollReset, ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(BaseLink3, { ...rest, ref });
  });
  Component.displayName = BaseLink3.displayName;
  return Component;
};
var Link2 = wrapLinkComponent(Link);
var RichTextLink2 = wrapLinkComponent(RichTextLink);
var useOnFetchEnd = (fetcher, handler) => {
  const latestHandler = (0, import_react39.useRef)(handler);
  latestHandler.current = handler;
  const prevFetcher = (0, import_react39.useRef)(fetcher);
  (0, import_react39.useEffect)(() => {
    if (prevFetcher.current.state !== fetcher.state && fetcher.state === "idle" && fetcher.data !== void 0) {
      latestHandler.current(fetcher.data);
    }
    prevFetcher.current = fetcher;
  }, [fetcher]);
};
var Form2 = (0, import_react39.forwardRef)(
  ({ children, action, method, state = "initial", onStateChange, ...rest }, ref) => {
    const fetcher = useFetcher();
    const instanceId = getInstanceIdFromComponentProps(rest);
    useOnFetchEnd(fetcher, (data) => {
      const state2 = data?.success === true ? "success" : "error";
      onStateChange?.(state2);
    });
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(fetcher.Form, { ...rest, method: "post", "data-state": state, ref, children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("input", { type: "hidden", name: formIdFieldName, value: instanceId }),
      children
    ] });
  }
);
Form2.displayName = "Form";

// node_modules/@webstudio-is/sdk-components-react-radix/lib/components.js
var import_react73 = __toESM(require_react(), 1);

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/@radix-ui/react-collapsible/dist/index.mjs
var import_react49 = __toESM(require_react(), 1);

// node_modules/@radix-ui/primitive/dist/index.mjs
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// node_modules/@radix-ui/react-context/dist/index.mjs
var import_react41 = __toESM(require_react(), 1);
function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
  const Context = /* @__PURE__ */ (0, import_react41.createContext)(defaultContext);
  function Provider(props) {
    const { children, ...context } = props;
    const value = (0, import_react41.useMemo)(
      () => context,
      Object.values(context)
    );
    return /* @__PURE__ */ (0, import_react41.createElement)(Context.Provider, {
      value
    }, children);
  }
  function useContext9(consumerName) {
    const context = (0, import_react41.useContext)(Context);
    if (context)
      return context;
    if (defaultContext !== void 0)
      return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  Provider.displayName = rootComponentName + "Provider";
  return [
    Provider,
    useContext9
  ];
}
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae11092(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ (0, import_react41.createContext)(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = (0, import_react41.useMemo)(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ (0, import_react41.createElement)(Context.Provider, {
        value
      }, children);
    }
    function useContext9(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = (0, import_react41.useContext)(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext9
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ (0, import_react41.createContext)(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return (0, import_react41.useMemo)(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae11092,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return (0, import_react41.useMemo)(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var import_react43 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var import_react42 = __toESM(require_react(), 1);
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = (0, import_react42.useRef)(callback);
  (0, import_react42.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react42.useMemo)(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = (0, import_react43.useCallback)((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = (0, import_react43.useState)(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = (0, import_react43.useRef)(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  (0, import_react43.useEffect)(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var import_react44 = __toESM(require_react(), 1);
var $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? import_react44.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var import_react45 = __toESM(require_react(), 1);
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return (0, import_react45.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_react47 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-slot/dist/index.mjs
var import_react46 = __toESM(require_react(), 1);
var $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ (0, import_react46.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = import_react46.Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (import_react46.Children.count(newElement) > 1)
          return import_react46.Children.only(null);
        return /* @__PURE__ */ (0, import_react46.isValidElement)(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ (0, import_react46.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ (0, import_react46.isValidElement)(newElement) ? /* @__PURE__ */ (0, import_react46.cloneElement)(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ (0, import_react46.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
var $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ (0, import_react46.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (/* @__PURE__ */ (0, import_react46.isValidElement)(children))
    return /* @__PURE__ */ (0, import_react46.cloneElement)(children, {
      ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
      ref: forwardedRef ? $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref) : children.ref
    });
  return import_react46.Children.count(children) > 1 ? import_react46.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ (0, import_react46.createElement)(import_react46.Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ (0, import_react46.isValidElement)(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue)
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      else if (slotPropValue)
        overrideProps[propName] = slotPropValue;
    } else if (propName === "style")
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node2 = /* @__PURE__ */ (0, import_react47.forwardRef)((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    (0, import_react47.useEffect)(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ (0, import_react47.createElement)(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node2.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node2
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    (0, import_react_dom.flushSync)(
      () => target.dispatchEvent(event)
    );
}

// node_modules/@radix-ui/react-presence/dist/index.mjs
var import_react48 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return (0, import_react48.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : import_react48.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ (0, import_react48.cloneElement)(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = (0, import_react48.useState)();
  const stylesRef = (0, import_react48.useRef)({});
  const prevPresentRef = (0, import_react48.useRef)(present);
  const prevAnimationNameRef = (0, import_react48.useRef)("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  (0, import_react48.useEffect)(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          (0, import_react_dom2.flushSync)(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: (0, import_react48.useCallback)((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}

// node_modules/@radix-ui/react-id/dist/index.mjs
var $2AODx$react = __toESM(require_react(), 1);
var $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
var $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  const [id, setId] = $2AODx$react.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!deterministicId)
      setId(
        (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
      );
  }, [
    deterministicId
  ]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/@radix-ui/react-collapsible/dist/index.mjs
var $409067139f391064$var$COLLAPSIBLE_NAME = "Collapsible";
var [$409067139f391064$var$createCollapsibleContext, $409067139f391064$export$952b32dcbe73087a] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($409067139f391064$var$COLLAPSIBLE_NAME);
var [$409067139f391064$var$CollapsibleProvider, $409067139f391064$var$useCollapsibleContext] = $409067139f391064$var$createCollapsibleContext($409067139f391064$var$COLLAPSIBLE_NAME);
var $409067139f391064$export$6eb0f7ddcda6131f = /* @__PURE__ */ (0, import_react49.forwardRef)((props, forwardedRef) => {
  const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react49.createElement)($409067139f391064$var$CollapsibleProvider, {
    scope: __scopeCollapsible,
    disabled,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenToggle: (0, import_react49.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    )
  }, /* @__PURE__ */ (0, import_react49.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $409067139f391064$var$getState(open),
    "data-disabled": disabled ? "" : void 0
  }, collapsibleProps, {
    ref: forwardedRef
  })));
});
var $409067139f391064$var$TRIGGER_NAME = "CollapsibleTrigger";
var $409067139f391064$export$c135dce7b15bbbdc = /* @__PURE__ */ (0, import_react49.forwardRef)((props, forwardedRef) => {
  const { __scopeCollapsible, ...triggerProps } = props;
  const context = $409067139f391064$var$useCollapsibleContext($409067139f391064$var$TRIGGER_NAME, __scopeCollapsible);
  return /* @__PURE__ */ (0, import_react49.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-controls": context.contentId,
    "aria-expanded": context.open || false,
    "data-state": $409067139f391064$var$getState(context.open),
    "data-disabled": context.disabled ? "" : void 0,
    disabled: context.disabled
  }, triggerProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
});
var $409067139f391064$var$CONTENT_NAME = "CollapsibleContent";
var $409067139f391064$export$aadde00976f34151 = /* @__PURE__ */ (0, import_react49.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = $409067139f391064$var$useCollapsibleContext($409067139f391064$var$CONTENT_NAME, props.__scopeCollapsible);
  return /* @__PURE__ */ (0, import_react49.createElement)(
    $921a889cee6df7e8$export$99c2b779aa4e8b8b,
    {
      present: forceMount || context.open
    },
    ({ present }) => /* @__PURE__ */ (0, import_react49.createElement)($409067139f391064$var$CollapsibleContentImpl, _extends({}, contentProps, {
      ref: forwardedRef,
      present
    }))
  );
});
var $409067139f391064$var$CollapsibleContentImpl = /* @__PURE__ */ (0, import_react49.forwardRef)((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = $409067139f391064$var$useCollapsibleContext($409067139f391064$var$CONTENT_NAME, __scopeCollapsible);
  const [isPresent, setIsPresent] = (0, import_react49.useState)(present);
  const ref = (0, import_react49.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const heightRef = (0, import_react49.useRef)(0);
  const height = heightRef.current;
  const widthRef = (0, import_react49.useRef)(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = (0, import_react49.useRef)(isOpen);
  const originalStylesRef = (0, import_react49.useRef)();
  (0, import_react49.useEffect)(() => {
    const rAF = requestAnimationFrame(
      () => isMountAnimationPreventedRef.current = false
    );
    return () => cancelAnimationFrame(rAF);
  }, []);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [
    context.open,
    present
  ]);
  return /* @__PURE__ */ (0, import_react49.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $409067139f391064$var$getState(context.open),
    "data-disabled": context.disabled ? "" : void 0,
    id: context.contentId,
    hidden: !isOpen
  }, contentProps, {
    ref: composedRefs,
    style: {
      [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
      [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
      ...props.style
    }
  }), isOpen && children);
});
function $409067139f391064$var$getState(open) {
  return open ? "open" : "closed";
}
var $409067139f391064$export$be92b6f5f03c0fe9 = $409067139f391064$export$6eb0f7ddcda6131f;
var $409067139f391064$export$41fb9f06171c75f4 = $409067139f391064$export$c135dce7b15bbbdc;
var $409067139f391064$export$7c6e2c02157bb7d2 = $409067139f391064$export$aadde00976f34151;

// node_modules/@webstudio-is/sdk-components-react-radix/lib/components.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var import_react74 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var import_react56 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_react51 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var import_react50 = __toESM(require_react(), 1);
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  (0, import_react50.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape")
        onEscapeKeyDown(event);
    };
    ownerDocument.addEventListener("keydown", handleKeyDown);
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown,
    ownerDocument
  ]);
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
var $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var $5cb92bef7577960e$var$originalBodyPointerEvents;
var $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ (0, import_react51.createContext)({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var $5cb92bef7577960e$export$177fb62ff3ec1f22 = /* @__PURE__ */ (0, import_react51.forwardRef)((props, forwardedRef) => {
  var _node$ownerDocument;
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = (0, import_react51.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = (0, import_react51.useState)(null);
  const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
  const [, force] = (0, import_react51.useState)({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index2 = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch)
      return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index2 === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  }, ownerDocument);
  (0, import_react51.useEffect)(() => {
    if (!node1)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
        ownerDocument.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
        ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    ownerDocument,
    disableOutsidePointerEvents,
    context
  ]);
  (0, import_react51.useEffect)(() => {
    return () => {
      if (!node1)
        return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  (0, import_react51.useEffect)(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ (0, import_react51.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = (0, import_react51.useRef)(false);
  const handleClickRef = (0, import_react51.useRef)(() => {
  });
  (0, import_react51.useEffect)(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          ownerDocument.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else
          handleAndDispatchPointerDownOutsideEvent();
      } else
        ownerDocument.removeEventListener("click", handleClickRef.current);
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [
    ownerDocument,
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = (0, import_react51.useRef)(false);
  (0, import_react51.useEffect)(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [
    ownerDocument,
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler)
    target.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else
    target.dispatchEvent(event);
}

// node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var import_react52 = __toESM(require_react(), 1);
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var $d3863c46a17e8a28$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d3863c46a17e8a28$export$20e40289641fbbb6 = /* @__PURE__ */ (0, import_react52.forwardRef)((props, forwardedRef) => {
  const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
  const [container1, setContainer] = (0, import_react52.useState)(null);
  const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
  const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
  const lastFocusedElementRef = (0, import_react52.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContainer(node)
  );
  const focusScope = (0, import_react52.useRef)({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  (0, import_react52.useEffect)(() => {
    if (trapped) {
      let handleFocusIn = function(event) {
        if (focusScope.paused || !container1)
          return;
        const target = event.target;
        if (container1.contains(target))
          lastFocusedElementRef.current = target;
        else
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleFocusOut = function(event) {
        if (focusScope.paused || !container1)
          return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null)
          return;
        if (!container1.contains(relatedTarget))
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleMutations = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body)
          return;
        for (const mutation of mutations)
          if (mutation.removedNodes.length > 0)
            $d3863c46a17e8a28$var$focus(container1);
      };
      document.addEventListener("focusin", handleFocusIn);
      document.addEventListener("focusout", handleFocusOut);
      const mutationObserver = new MutationObserver(handleMutations);
      if (container1)
        mutationObserver.observe(container1, {
          childList: true,
          subtree: true
        });
      return () => {
        document.removeEventListener("focusin", handleFocusIn);
        document.removeEventListener("focusout", handleFocusOut);
        mutationObserver.disconnect();
      };
    }
  }, [
    trapped,
    container1,
    focusScope.paused
  ]);
  (0, import_react52.useEffect)(() => {
    if (container1) {
      $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
        container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container1.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
            select: true
          });
          if (document.activeElement === previouslyFocusedElement)
            $d3863c46a17e8a28$var$focus(container1);
        }
      }
      return () => {
        container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container1.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented)
            $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
              select: true
            });
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [
    container1,
    onMountAutoFocus,
    onUnmountAutoFocus,
    focusScope
  ]);
  const handleKeyDown = (0, import_react52.useCallback)((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container = event.currentTarget;
      const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(first, {
              select: true
            });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(last, {
              select: true
            });
        }
      }
    }
  }, [
    loop,
    trapped,
    focusScope.paused
  ]);
  return /* @__PURE__ */ (0, import_react52.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: -1
  }, scopeProps, {
    ref: composedRefs,
    onKeyDown: handleKeyDown
  }));
});
function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    $d3863c46a17e8a28$var$focus(candidate, {
      select
    });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
  const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
  const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
  return [
    first,
    last
  ];
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (const element of elements) {
    if (!$d3863c46a17e8a28$var$isHidden(element, {
      upTo: container
    }))
      return element;
  }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });
    if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
      element.select();
  }
}
var $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope)
        activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _stack$;
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
    }
  };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  const updatedArray = [
    ...array
  ];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1)
    updatedArray.splice(index2, 1);
  return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
  return items.filter(
    (item) => item.tagName !== "A"
  );
}

// node_modules/@radix-ui/react-portal/dist/index.mjs
var import_react53 = __toESM(require_react(), 1);
var import_react_dom3 = __toESM(require_react_dom(), 1);
var $f1701beae083dbae$export$602eac185826482c = /* @__PURE__ */ (0, import_react53.forwardRef)((props, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
  return container ? /* @__PURE__ */ import_react_dom3.default.createPortal(/* @__PURE__ */ (0, import_react53.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});

// node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var import_react54 = __toESM(require_react(), 1);
var $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
  (0, import_react54.useEffect)(() => {
    var _edgeGuards$, _edgeGuards$2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
    $3db38b7d1fb3fe6a$var$count++;
    return () => {
      if ($3db38b7d1fb3fe6a$var$count === 1)
        document.querySelectorAll("[data-radix-focus-guard]").forEach(
          (node) => node.remove()
        );
      $3db38b7d1fb3fe6a$var$count--;
    };
  }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}

// node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s2, e2) {
  var t2 = {};
  for (var p2 in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var React6 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
var React2 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react55 = __toESM(require_react());
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react55.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
function useMergeRefs(refs, defaultValue) {
  return useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
}

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a2) {
  return a2;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x2) {
          return x2 !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x2) {
          return cb(x2);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x2) {
          pendingQueue.push(x2);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/exports.js
var React = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React2.forwardRef(function(props, parentRef) {
  var ref = React2.useRef(null);
  var _a = React2.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React2.createElement(
    React2.Fragment,
    null,
    enabled && React2.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React2.cloneElement(React2.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React2.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React5 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React4 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React3 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React3.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x2) {
  return parseInt(x2 || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var RemoveScrollBar = function(props) {
  var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
  var gap = React4.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React4.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s2 = _a[1], d2 = _a[2];
      if (s2 > d2) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x2, y2) {
  return x2[0] === y2[0] && x2[1] === y2[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React5.useRef([]);
  var touchStartRef = React5.useRef([0, 0]);
  var activeAxis = React5.useRef();
  var id = React5.useState(idCounter++)[0];
  var Style2 = React5.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React5.useRef(props);
  React5.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React5.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React5.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React5.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e2) {
      return e2.name === event.type && e2.target === event.target && deltaCompare(e2.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React5.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e2) {
        return e2 !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React5.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React5.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React5.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React5.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React5.createElement(
    React5.Fragment,
    null,
    inert ? React5.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React5.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React6.forwardRef(function(props, ref) {
  return React6.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x2) {
    return Boolean(x2);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        var attr = node.getAttribute(controlAttribute);
        var alreadyHidden = attr !== null && attr !== "false";
        var counterValue = (counterMap.get(node) || 0) + 1;
        var markerValue = (markerCounter.get(node) || 0) + 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        hiddenNodes.push(node);
        if (counterValue === 1 && alreadyHidden) {
          uncontrolledNodes.set(node, true);
        }
        if (markerValue === 1) {
          node.setAttribute(markerName, "true");
        }
        if (!alreadyHidden) {
          node.setAttribute(controlAttribute, "true");
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
var [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
  const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const triggerRef = (0, import_react56.useRef)(null);
  const contentRef = (0, import_react56.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react56.createElement)($5d3850c4d0b4e6c7$var$DialogProvider, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
    descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react56.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, children);
};
var $5d3850c4d0b4e6c7$var$TRIGGER_NAME = "DialogTrigger";
var $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88 = /* @__PURE__ */ (0, import_react56.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...triggerProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TRIGGER_NAME, __scopeDialog);
  const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
  return /* @__PURE__ */ (0, import_react56.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": context.open,
    "aria-controls": context.contentId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, triggerProps, {
    ref: composedTriggerRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
});
var $5d3850c4d0b4e6c7$var$PORTAL_NAME = "DialogPortal";
var [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
  forceMount: void 0
});
var $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react56.createElement)($5d3850c4d0b4e6c7$var$PortalProvider, {
    scope: __scopeDialog,
    forceMount
  }, import_react56.Children.map(
    children,
    (child) => /* @__PURE__ */ (0, import_react56.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ (0, import_react56.createElement)($f1701beae083dbae$export$602eac185826482c, {
      asChild: true,
      container
    }, child))
  ));
};
var $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
var $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /* @__PURE__ */ (0, import_react56.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  return context.modal ? /* @__PURE__ */ (0, import_react56.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react56.createElement)($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
    ref: forwardedRef
  }))) : null;
});
var $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /* @__PURE__ */ (0, import_react56.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, import_react56.createElement)(Combination_default, {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
      allowPinchZoom: true,
      shards: [
        context.contentRef
      ]
    }, /* @__PURE__ */ (0, import_react56.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, overlayProps, {
      ref: forwardedRef,
      style: {
        pointerEvents: "auto",
        ...overlayProps.style
      }
    })))
  );
});
var $5d3850c4d0b4e6c7$var$CONTENT_NAME = "DialogContent";
var $5d3850c4d0b4e6c7$var$TITLE_NAME = "DialogTitle";
var $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = /* @__PURE__ */ (0, import_react56.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...titleProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TITLE_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react56.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.h2, _extends({
    id: context.titleId
  }, titleProps, {
    ref: forwardedRef
  }));
});
function $5d3850c4d0b4e6c7$var$getState(open) {
  return open ? "open" : "closed";
}
var $5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME = "DialogTitleWarning";
var [$5d3850c4d0b4e6c7$export$69b62a49393917d6, $5d3850c4d0b4e6c7$var$useWarningContext] = $c512c27ab02ef895$export$fd42f52fd3ae1109($5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME, {
  contentName: $5d3850c4d0b4e6c7$var$CONTENT_NAME,
  titleName: $5d3850c4d0b4e6c7$var$TITLE_NAME,
  docsSlug: "dialog"
});
var $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
var $5d3850c4d0b4e6c7$export$41fb9f06171c75f4 = $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88;
var $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;

// node_modules/@webstudio-is/sdk-components-react-radix/lib/components.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var import_react75 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-popover/dist/index.mjs
var import_react60 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-popper/dist/index.mjs
var import_react59 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v2) => ({
  x: v2,
  y: v2
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x2,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i2 = 0; i2 < validMiddleware.length; i2++) {
    const {
      name,
      fn
    } = validMiddleware[i2];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x2,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x2 = nextX != null ? nextX : x2;
    y2 = nextY != null ? nextY : y2;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x2,
          y: y2
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i2 = -1;
      continue;
    }
  }
  return {
    x: x2,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x2,
    y: y2,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x: x2,
    y: y2
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x: x2,
      y: y2,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x: x2,
      y: y2
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d2) => d2.overflows[0] <= 0).sort((a2, b2) => a2.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d2) => [d2.placement, d2.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b2) => a2[1] - b2[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      const {
        x: x2,
        y: y2
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      return {
        x: x2 + diffCoords.x,
        y: y2 + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x2,
        y: y2,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x3,
              y: y3
            } = _ref;
            return {
              x: x3,
              y: y3
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x2,
        y: y2
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x2,
          y: limitedCoords.y - y2
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x: x2,
        y: y2,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x: x2,
        y: y2
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/utils/dom/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x2 = ($2 ? round(rect.width) : rect.width) / width;
  let y2 = ($2 ? round(rect.height) : rect.height) / height;
  if (!x2 || !Number.isFinite(x2)) {
    x2 = 1;
  }
  if (!y2 || !Number.isFinite(y2)) {
    y2 = 1;
  }
  return {
    x: x2,
    y: y2
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x2 = (clientRect.left + visualOffsets.x) / scale.x;
  let y2 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x2 *= iframeScale.x;
      y2 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x2 += left;
      y2 += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x2,
    y: y2
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y2 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x2 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x2 = 0;
  let y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x2 = left * scale.x;
  const y2 = top * scale.y;
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  return getCssDimensions(element);
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = async function(_ref) {
  let {
    reference,
    floating,
    strategy
  } = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(floating)
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e2) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React7 = __toESM(require_react(), 1);
var import_react57 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var arrow2 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      } else if (element) {
        return arrow({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var index = typeof document !== "undefined" ? import_react57.useLayoutEffect : import_react57.useEffect;
function deepEqual(a2, b2) {
  if (a2 === b2) {
    return true;
  }
  if (typeof a2 !== typeof b2) {
    return false;
  }
  if (typeof a2 === "function" && a2.toString() === b2.toString()) {
    return true;
  }
  let length, i2, keys;
  if (a2 && b2 && typeof a2 == "object") {
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length != b2.length)
        return false;
      for (i2 = length; i2-- !== 0; ) {
        if (!deepEqual(a2[i2], b2[i2])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a2);
    length = keys.length;
    if (length !== Object.keys(b2).length) {
      return false;
    }
    for (i2 = length; i2-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b2, keys[i2])) {
        return false;
      }
    }
    for (i2 = length; i2-- !== 0; ) {
      const key = keys[i2];
      if (key === "_owner" && a2.$$typeof) {
        continue;
      }
      if (!deepEqual(a2[key], b2[key])) {
        return false;
      }
    }
    return true;
  }
  return a2 !== a2 && b2 !== b2;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React7.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React7.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React7.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React7.useState(null);
  const [_floating, _setFloating] = React7.useState(null);
  const setReference = React7.useCallback((node) => {
    if (node != referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, [_setReference]);
  const setFloating = React7.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, [_setFloating]);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React7.useRef(null);
  const floatingRef = React7.useRef(null);
  const dataRef = React7.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React7.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React7.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      } else {
        update();
      }
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef]);
  const refs = React7.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React7.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React7.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x2 = roundByDPR(elements.floating, data.x);
    const y2 = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x2 + "px, " + y2 + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x2,
      top: y2
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React7.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

// node_modules/@radix-ui/react-use-size/dist/index.mjs
var import_react58 = __toESM(require_react(), 1);
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size2, setSize] = (0, import_react58.useState)(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries))
          return;
        if (!entries.length)
          return;
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size2;
}

// node_modules/@radix-ui/react-popper/dist/index.mjs
var $cf1ac5d9fe0e8206$var$POPPER_NAME = "Popper";
var [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
var [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
var $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = (0, import_react59.useState)(null);
  return /* @__PURE__ */ (0, import_react59.createElement)($cf1ac5d9fe0e8206$var$PopperProvider, {
    scope: __scopePopper,
    anchor,
    onAnchorChange: setAnchor
  }, children);
};
var $cf1ac5d9fe0e8206$var$ANCHOR_NAME = "PopperAnchor";
var $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = /* @__PURE__ */ (0, import_react59.forwardRef)((props, forwardedRef) => {
  const { __scopePopper, virtualRef, ...anchorProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
  const ref = (0, import_react59.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react59.useEffect)(() => {
    context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
  });
  return virtualRef ? null : /* @__PURE__ */ (0, import_react59.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, anchorProps, {
    ref: composedRefs
  }));
});
var $cf1ac5d9fe0e8206$var$CONTENT_NAME = "PopperContent";
var [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
var $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /* @__PURE__ */ (0, import_react59.forwardRef)((props, forwardedRef) => {
  var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$trans, _middlewareData$trans2, _middlewareData$hide;
  const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
  const [content, setContent] = (0, import_react59.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const [arrow3, setArrow] = (0, import_react59.useState)(null);
  const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow3);
  const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
  const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
  const desiredPlacement = side + (align !== "center" ? "-" + align : "");
  const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...collisionPaddingProp
  };
  const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
    collisionBoundary
  ];
  const hasExplicitBoundaries = boundary.length > 0;
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: hasExplicitBoundaries
  };
  const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: desiredPlacement,
    whileElementsMounted: (...args) => {
      const cleanup = autoUpdate(...args, {
        animationFrame: updatePositionStrategy === "always"
      });
      return cleanup;
    },
    elements: {
      reference: context.anchor
    },
    middleware: [
      offset({
        mainAxis: sideOffset + arrowHeight,
        alignmentAxis: alignOffset
      }),
      avoidCollisions && shift({
        mainAxis: true,
        crossAxis: false,
        limiter: sticky === "partial" ? limitShift() : void 0,
        ...detectOverflowOptions
      }),
      avoidCollisions && flip({
        ...detectOverflowOptions
      }),
      size({
        ...detectOverflowOptions,
        apply: ({ elements, rects, availableWidth, availableHeight }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference;
          const contentStyle = elements.floating.style;
          contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
          contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
          contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
          contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
        }
      }),
      arrow3 && arrow2({
        element: arrow3,
        padding: arrowPadding
      }),
      $cf1ac5d9fe0e8206$var$transformOrigin({
        arrowWidth,
        arrowHeight
      }),
      hideWhenDetached && hide({
        strategy: "referenceHidden",
        ...detectOverflowOptions
      })
    ]
  });
  const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
  const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (isPositioned)
      handlePlaced === null || handlePlaced === void 0 || handlePlaced();
  }, [
    isPositioned,
    handlePlaced
  ]);
  const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
  const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
  const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
  const [contentZIndex, setContentZIndex] = (0, import_react59.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  return /* @__PURE__ */ (0, import_react59.createElement)("div", {
    ref: refs.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...floatingStyles,
      transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: contentZIndex,
      ["--radix-popper-transform-origin"]: [
        (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
        (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
      ].join(" ")
    },
    dir: props.dir
  }, /* @__PURE__ */ (0, import_react59.createElement)($cf1ac5d9fe0e8206$var$PopperContentProvider, {
    scope: __scopePopper,
    placedSide,
    onArrowChange: setArrow,
    arrowX,
    arrowY,
    shouldHideArrow: cannotCenterArrow
  }, /* @__PURE__ */ (0, import_react59.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-side": placedSide,
    "data-align": placedAlign
  }, contentProps, {
    ref: composedRefs,
    style: {
      ...contentProps.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: !isPositioned ? "none" : void 0,
      // hide the content if using the hide middleware and should be hidden
      opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : void 0
    }
  }))));
});
function $cf1ac5d9fe0e8206$var$isNotNull(value) {
  return value !== null;
}
var $cf1ac5d9fe0e8206$var$transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const noArrowAlign = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[placedAlign];
    const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
    const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
    let x2 = "";
    let y2 = "";
    if (placedSide === "bottom") {
      x2 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y2 = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x2 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y2 = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x2 = `${-arrowHeight}px`;
      y2 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x2 = `${rects.floating.width + arrowHeight}px`;
      y2 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return {
      data: {
        x: x2,
        y: y2
      }
    };
  }
});
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [
    side,
    align
  ];
}
var $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
var $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
var $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;

// node_modules/@radix-ui/react-popover/dist/index.mjs
var $cb5cc270b50c6fcd$var$POPOVER_NAME = "Popover";
var [$cb5cc270b50c6fcd$var$createPopoverContext, $cb5cc270b50c6fcd$export$c8393c9e73286932] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cb5cc270b50c6fcd$var$POPOVER_NAME, [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
var $cb5cc270b50c6fcd$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var [$cb5cc270b50c6fcd$var$PopoverProvider, $cb5cc270b50c6fcd$var$usePopoverContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$POPOVER_NAME);
var $cb5cc270b50c6fcd$export$5b6b19405a83ff9d = (props) => {
  const { __scopePopover, children, open: openProp, defaultOpen, onOpenChange, modal = false } = props;
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  const triggerRef = (0, import_react60.useRef)(null);
  const [hasCustomAnchor, setHasCustomAnchor] = (0, import_react60.useState)(false);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react60.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ (0, import_react60.createElement)($cb5cc270b50c6fcd$var$PopoverProvider, {
    scope: __scopePopover,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    triggerRef,
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react60.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    hasCustomAnchor,
    onCustomAnchorAdd: (0, import_react60.useCallback)(
      () => setHasCustomAnchor(true),
      []
    ),
    onCustomAnchorRemove: (0, import_react60.useCallback)(
      () => setHasCustomAnchor(false),
      []
    ),
    modal
  }, children));
};
var $cb5cc270b50c6fcd$var$TRIGGER_NAME = "PopoverTrigger";
var $cb5cc270b50c6fcd$export$7dacb05d26466c3 = /* @__PURE__ */ (0, import_react60.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, ...triggerProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$TRIGGER_NAME, __scopePopover);
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
  const trigger = /* @__PURE__ */ (0, import_react60.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": context.open,
    "aria-controls": context.contentId,
    "data-state": $cb5cc270b50c6fcd$var$getState(context.open)
  }, triggerProps, {
    ref: composedTriggerRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
  return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0, import_react60.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
    asChild: true
  }, popperScope), trigger);
});
var $cb5cc270b50c6fcd$var$PORTAL_NAME = "PopoverPortal";
var [$cb5cc270b50c6fcd$var$PortalProvider, $cb5cc270b50c6fcd$var$usePortalContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, {
  forceMount: void 0
});
var $cb5cc270b50c6fcd$export$dd679ffb4362d2d4 = (props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, __scopePopover);
  return /* @__PURE__ */ (0, import_react60.createElement)($cb5cc270b50c6fcd$var$PortalProvider, {
    scope: __scopePopover,
    forceMount
  }, /* @__PURE__ */ (0, import_react60.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react60.createElement)($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
var $cb5cc270b50c6fcd$var$CONTENT_NAME = "PopoverContent";
var $cb5cc270b50c6fcd$export$d7e1f420b25549ff = /* @__PURE__ */ (0, import_react60.forwardRef)((props, forwardedRef) => {
  const portalContext = $cb5cc270b50c6fcd$var$usePortalContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  return /* @__PURE__ */ (0, import_react60.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ (0, import_react60.createElement)($cb5cc270b50c6fcd$var$PopoverContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react60.createElement)($cb5cc270b50c6fcd$var$PopoverContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
var $cb5cc270b50c6fcd$var$PopoverContentModal = /* @__PURE__ */ (0, import_react60.forwardRef)((props, forwardedRef) => {
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const contentRef = (0, import_react60.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  const isRightClickOutsideRef = (0, import_react60.useRef)(false);
  (0, import_react60.useEffect)(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ (0, import_react60.createElement)(Combination_default, {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  }, /* @__PURE__ */ (0, import_react60.createElement)($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      if (!isRightClickOutsideRef.current)
        (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      isRightClickOutsideRef.current = isRightClick;
    }, {
      checkForDefaultPrevented: false
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault(),
      {
        checkForDefaultPrevented: false
      }
    )
  })));
});
var $cb5cc270b50c6fcd$var$PopoverContentNonModal = /* @__PURE__ */ (0, import_react60.forwardRef)((props, forwardedRef) => {
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const hasInteractedOutsideRef = (0, import_react60.useRef)(false);
  const hasPointerDownOutsideRef = (0, import_react60.useRef)(false);
  return /* @__PURE__ */ (0, import_react60.createElement)($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
      hasPointerDownOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true;
        if (event.detail.originalEvent.type === "pointerdown")
          hasPointerDownOutsideRef.current = true;
      }
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
      if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
        event.preventDefault();
    }
  }));
});
var $cb5cc270b50c6fcd$var$PopoverContentImpl = /* @__PURE__ */ (0, import_react60.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, __scopePopover);
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return /* @__PURE__ */ (0, import_react60.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ (0, import_react60.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents,
    onInteractOutside,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onDismiss: () => context.onOpenChange(false)
  }, /* @__PURE__ */ (0, import_react60.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
    "data-state": $cb5cc270b50c6fcd$var$getState(context.open),
    role: "dialog",
    id: context.contentId
  }, popperScope, contentProps, {
    ref: forwardedRef,
    style: {
      ...contentProps.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function $cb5cc270b50c6fcd$var$getState(open) {
  return open ? "open" : "closed";
}
var $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9 = $cb5cc270b50c6fcd$export$5b6b19405a83ff9d;
var $cb5cc270b50c6fcd$export$41fb9f06171c75f4 = $cb5cc270b50c6fcd$export$7dacb05d26466c3;
var $cb5cc270b50c6fcd$export$602eac185826482c = $cb5cc270b50c6fcd$export$dd679ffb4362d2d4;
var $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2 = $cb5cc270b50c6fcd$export$d7e1f420b25549ff;

// node_modules/@webstudio-is/sdk-components-react-radix/lib/components.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);

// node_modules/@radix-ui/react-tooltip/dist/index.mjs
var import_react62 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var import_react61 = __toESM(require_react(), 1);
var $ea1ef594cf570d83$export$439d29a4e110a164 = /* @__PURE__ */ (0, import_react61.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react61.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, props, {
    ref: forwardedRef,
    style: {
      // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...props.style
    }
  }));
});
var $ea1ef594cf570d83$export$be92b6f5f03c0fe9 = $ea1ef594cf570d83$export$439d29a4e110a164;

// node_modules/@radix-ui/react-tooltip/dist/index.mjs
var [$a093c7e1ec25a057$var$createTooltipContext, $a093c7e1ec25a057$export$1c540a2224f0d865] = $c512c27ab02ef895$export$50c7b4e9d9f19c1("Tooltip", [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
var $a093c7e1ec25a057$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var $a093c7e1ec25a057$var$PROVIDER_NAME = "TooltipProvider";
var $a093c7e1ec25a057$var$DEFAULT_DELAY_DURATION = 700;
var $a093c7e1ec25a057$var$TOOLTIP_OPEN = "tooltip.open";
var [$a093c7e1ec25a057$var$TooltipProviderContextProvider, $a093c7e1ec25a057$var$useTooltipProviderContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PROVIDER_NAME);
var $a093c7e1ec25a057$export$f78649fb9ca566b8 = (props) => {
  const { __scopeTooltip, delayDuration = $a093c7e1ec25a057$var$DEFAULT_DELAY_DURATION, skipDelayDuration = 300, disableHoverableContent = false, children } = props;
  const [isOpenDelayed, setIsOpenDelayed] = (0, import_react62.useState)(true);
  const isPointerInTransitRef = (0, import_react62.useRef)(false);
  const skipDelayTimerRef = (0, import_react62.useRef)(0);
  (0, import_react62.useEffect)(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return /* @__PURE__ */ (0, import_react62.createElement)($a093c7e1ec25a057$var$TooltipProviderContextProvider, {
    scope: __scopeTooltip,
    isOpenDelayed,
    delayDuration,
    onOpen: (0, import_react62.useCallback)(() => {
      window.clearTimeout(skipDelayTimerRef.current);
      setIsOpenDelayed(false);
    }, []),
    onClose: (0, import_react62.useCallback)(() => {
      window.clearTimeout(skipDelayTimerRef.current);
      skipDelayTimerRef.current = window.setTimeout(
        () => setIsOpenDelayed(true),
        skipDelayDuration
      );
    }, [
      skipDelayDuration
    ]),
    isPointerInTransitRef,
    onPointerInTransitChange: (0, import_react62.useCallback)((inTransit) => {
      isPointerInTransitRef.current = inTransit;
    }, []),
    disableHoverableContent
  }, children);
};
var $a093c7e1ec25a057$var$TOOLTIP_NAME = "Tooltip";
var [$a093c7e1ec25a057$var$TooltipContextProvider, $a093c7e1ec25a057$var$useTooltipContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME);
var $a093c7e1ec25a057$export$28c660c63b792dea = (props) => {
  const { __scopeTooltip, children, open: openProp, defaultOpen = false, onOpenChange, disableHoverableContent: disableHoverableContentProp, delayDuration: delayDurationProp } = props;
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$TOOLTIP_NAME, props.__scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const [trigger, setTrigger] = (0, import_react62.useState)(null);
  const contentId = $1746a345f3d73bb7$export$f680877a34711e37();
  const openTimerRef = (0, import_react62.useRef)(0);
  const disableHoverableContent = disableHoverableContentProp !== null && disableHoverableContentProp !== void 0 ? disableHoverableContentProp : providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp !== null && delayDurationProp !== void 0 ? delayDurationProp : providerContext.delayDuration;
  const wasOpenDelayedRef = (0, import_react62.useRef)(false);
  const [open1 = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: (open) => {
      if (open) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent($a093c7e1ec25a057$var$TOOLTIP_OPEN));
      } else
        providerContext.onClose();
      onOpenChange === null || onOpenChange === void 0 || onOpenChange(open);
    }
  });
  const stateAttribute = (0, import_react62.useMemo)(() => {
    return open1 ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [
    open1
  ]);
  const handleOpen = (0, import_react62.useCallback)(() => {
    window.clearTimeout(openTimerRef.current);
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [
    setOpen
  ]);
  const handleClose = (0, import_react62.useCallback)(() => {
    window.clearTimeout(openTimerRef.current);
    setOpen(false);
  }, [
    setOpen
  ]);
  const handleDelayedOpen = (0, import_react62.useCallback)(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
    }, delayDuration);
  }, [
    delayDuration,
    setOpen
  ]);
  (0, import_react62.useEffect)(() => {
    return () => window.clearTimeout(openTimerRef.current);
  }, []);
  return /* @__PURE__ */ (0, import_react62.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ (0, import_react62.createElement)($a093c7e1ec25a057$var$TooltipContextProvider, {
    scope: __scopeTooltip,
    contentId,
    open: open1,
    stateAttribute,
    trigger,
    onTriggerChange: setTrigger,
    onTriggerEnter: (0, import_react62.useCallback)(() => {
      if (providerContext.isOpenDelayed)
        handleDelayedOpen();
      else
        handleOpen();
    }, [
      providerContext.isOpenDelayed,
      handleDelayedOpen,
      handleOpen
    ]),
    onTriggerLeave: (0, import_react62.useCallback)(() => {
      if (disableHoverableContent)
        handleClose();
      else
        window.clearTimeout(openTimerRef.current);
    }, [
      handleClose,
      disableHoverableContent
    ]),
    onOpen: handleOpen,
    onClose: handleClose,
    disableHoverableContent
  }, children));
};
var $a093c7e1ec25a057$var$TRIGGER_NAME = "TooltipTrigger";
var $a093c7e1ec25a057$export$8c610744efcf8a1d = /* @__PURE__ */ (0, import_react62.forwardRef)((props, forwardedRef) => {
  const { __scopeTooltip, ...triggerProps } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$TRIGGER_NAME, __scopeTooltip);
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$TRIGGER_NAME, __scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const ref = (0, import_react62.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onTriggerChange);
  const isPointerDownRef = (0, import_react62.useRef)(false);
  const hasPointerMoveOpenedRef = (0, import_react62.useRef)(false);
  const handlePointerUp = (0, import_react62.useCallback)(
    () => isPointerDownRef.current = false,
    []
  );
  (0, import_react62.useEffect)(() => {
    return () => document.removeEventListener("pointerup", handlePointerUp);
  }, [
    handlePointerUp
  ]);
  return /* @__PURE__ */ (0, import_react62.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
    asChild: true
  }, popperScope), /* @__PURE__ */ (0, import_react62.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": context.open ? context.contentId : void 0,
    "data-state": context.stateAttribute
  }, triggerProps, {
    ref: composedRefs,
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, (event) => {
      if (event.pointerType === "touch")
        return;
      if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
        context.onTriggerEnter();
        hasPointerMoveOpenedRef.current = true;
      }
    }),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, () => {
      context.onTriggerLeave();
      hasPointerMoveOpenedRef.current = false;
    }),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, () => {
      isPointerDownRef.current = true;
      document.addEventListener("pointerup", handlePointerUp, {
        once: true
      });
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, () => {
      if (!isPointerDownRef.current)
        context.onOpen();
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, context.onClose),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onClose)
  })));
});
var $a093c7e1ec25a057$var$PORTAL_NAME = "TooltipPortal";
var [$a093c7e1ec25a057$var$PortalProvider, $a093c7e1ec25a057$var$usePortalContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PORTAL_NAME, {
  forceMount: void 0
});
var $a093c7e1ec25a057$export$7b36b8f925ab7497 = (props) => {
  const { __scopeTooltip, forceMount, children, container } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$PORTAL_NAME, __scopeTooltip);
  return /* @__PURE__ */ (0, import_react62.createElement)($a093c7e1ec25a057$var$PortalProvider, {
    scope: __scopeTooltip,
    forceMount
  }, /* @__PURE__ */ (0, import_react62.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react62.createElement)($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
var $a093c7e1ec25a057$var$CONTENT_NAME = "TooltipContent";
var $a093c7e1ec25a057$export$e9003e2be37ec060 = /* @__PURE__ */ (0, import_react62.forwardRef)((props, forwardedRef) => {
  const portalContext = $a093c7e1ec25a057$var$usePortalContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  return /* @__PURE__ */ (0, import_react62.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.disableHoverableContent ? /* @__PURE__ */ (0, import_react62.createElement)($a093c7e1ec25a057$var$TooltipContentImpl, _extends({
    side
  }, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react62.createElement)($a093c7e1ec25a057$var$TooltipContentHoverable, _extends({
    side
  }, contentProps, {
    ref: forwardedRef
  })));
});
var $a093c7e1ec25a057$var$TooltipContentHoverable = /* @__PURE__ */ (0, import_react62.forwardRef)((props, forwardedRef) => {
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  const ref = (0, import_react62.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = (0, import_react62.useState)(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = (0, import_react62.useCallback)(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [
    onPointerInTransitChange
  ]);
  const handleCreateGraceArea = (0, import_react62.useCallback)((event, hoverTarget) => {
    const currentTarget = event.currentTarget;
    const exitPoint = {
      x: event.clientX,
      y: event.clientY
    };
    const exitSide = $a093c7e1ec25a057$var$getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
    const paddedExitPoints = $a093c7e1ec25a057$var$getPaddedExitPoints(exitPoint, exitSide);
    const hoverTargetPoints = $a093c7e1ec25a057$var$getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = $a093c7e1ec25a057$var$getHull([
      ...paddedExitPoints,
      ...hoverTargetPoints
    ]);
    setPointerGraceArea(graceArea);
    onPointerInTransitChange(true);
  }, [
    onPointerInTransitChange
  ]);
  (0, import_react62.useEffect)(() => {
    return () => handleRemoveGraceArea();
  }, [
    handleRemoveGraceArea
  ]);
  (0, import_react62.useEffect)(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [
    trigger,
    content,
    handleCreateGraceArea,
    handleRemoveGraceArea
  ]);
  (0, import_react62.useEffect)(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = {
          x: event.clientX,
          y: event.clientY
        };
        const hasEnteredTarget = (trigger === null || trigger === void 0 ? void 0 : trigger.contains(target)) || (content === null || content === void 0 ? void 0 : content.contains(target));
        const isPointerOutsideGraceArea = !$a093c7e1ec25a057$var$isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget)
          handleRemoveGraceArea();
        else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [
    trigger,
    content,
    pointerGraceArea,
    onClose,
    handleRemoveGraceArea
  ]);
  return /* @__PURE__ */ (0, import_react62.createElement)($a093c7e1ec25a057$var$TooltipContentImpl, _extends({}, props, {
    ref: composedRefs
  }));
});
var [$a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, $a093c7e1ec25a057$var$useVisuallyHiddenContentContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME, {
  isInside: false
});
var $a093c7e1ec25a057$var$TooltipContentImpl = /* @__PURE__ */ (0, import_react62.forwardRef)((props, forwardedRef) => {
  const { __scopeTooltip, children, "aria-label": ariaLabel, onEscapeKeyDown, onPointerDownOutside, ...contentProps } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, __scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const { onClose } = context;
  (0, import_react62.useEffect)(() => {
    document.addEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose);
    return () => document.removeEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose);
  }, [
    onClose
  ]);
  (0, import_react62.useEffect)(() => {
    if (context.trigger) {
      const handleScroll2 = (event) => {
        const target = event.target;
        if (target !== null && target !== void 0 && target.contains(context.trigger))
          onClose();
      };
      window.addEventListener("scroll", handleScroll2, {
        capture: true
      });
      return () => window.removeEventListener("scroll", handleScroll2, {
        capture: true
      });
    }
  }, [
    context.trigger,
    onClose
  ]);
  return /* @__PURE__ */ (0, import_react62.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents: false,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: (event) => event.preventDefault(),
    onDismiss: onClose
  }, /* @__PURE__ */ (0, import_react62.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
    "data-state": context.stateAttribute
  }, popperScope, contentProps, {
    ref: forwardedRef,
    style: {
      ...contentProps.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ (0, import_react62.createElement)($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, children), /* @__PURE__ */ (0, import_react62.createElement)($a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, {
    scope: __scopeTooltip,
    isInside: true
  }, /* @__PURE__ */ (0, import_react62.createElement)($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
    id: context.contentId,
    role: "tooltip"
  }, ariaLabel || children))));
});
function $a093c7e1ec25a057$var$getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function $a093c7e1ec25a057$var$getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "bottom":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      });
      break;
    case "left":
      paddedExitPoints.push({
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "right":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      });
      break;
  }
  return paddedExitPoints;
}
function $a093c7e1ec25a057$var$getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    {
      x: left,
      y: top
    },
    {
      x: right,
      y: top
    },
    {
      x: right,
      y: bottom
    },
    {
      x: left,
      y: bottom
    }
  ];
}
function $a093c7e1ec25a057$var$isPointInPolygon(point, polygon) {
  const { x: x2, y: y2 } = point;
  let inside = false;
  for (let i2 = 0, j2 = polygon.length - 1; i2 < polygon.length; j2 = i2++) {
    const xi = polygon[i2].x;
    const yi = polygon[i2].y;
    const xj = polygon[j2].x;
    const yj = polygon[j2].y;
    const intersect = yi > y2 !== yj > y2 && x2 < (xj - xi) * (y2 - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function $a093c7e1ec25a057$var$getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a2, b2) => {
    if (a2.x < b2.x)
      return -1;
    else if (a2.x > b2.x)
      return 1;
    else if (a2.y < b2.y)
      return -1;
    else if (a2.y > b2.y)
      return 1;
    else
      return 0;
  });
  return $a093c7e1ec25a057$var$getHullPresorted(newPoints);
}
function $a093c7e1ec25a057$var$getHullPresorted(points) {
  if (points.length <= 1)
    return points.slice();
  const upperHull = [];
  for (let i2 = 0; i2 < points.length; i2++) {
    const p2 = points[i2];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r2 = upperHull[upperHull.length - 2];
      if ((q.x - r2.x) * (p2.y - r2.y) >= (q.y - r2.y) * (p2.x - r2.x))
        upperHull.pop();
      else
        break;
    }
    upperHull.push(p2);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i1 = points.length - 1; i1 >= 0; i1--) {
    const p2 = points[i1];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r2 = lowerHull[lowerHull.length - 2];
      if ((q.x - r2.x) * (p2.y - r2.y) >= (q.y - r2.y) * (p2.x - r2.x))
        lowerHull.pop();
      else
        break;
    }
    lowerHull.push(p2);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y)
    return upperHull;
  else
    return upperHull.concat(lowerHull);
}
var $a093c7e1ec25a057$export$2881499e37b75b9a = $a093c7e1ec25a057$export$f78649fb9ca566b8;
var $a093c7e1ec25a057$export$be92b6f5f03c0fe9 = $a093c7e1ec25a057$export$28c660c63b792dea;
var $a093c7e1ec25a057$export$41fb9f06171c75f4 = $a093c7e1ec25a057$export$8c610744efcf8a1d;
var $a093c7e1ec25a057$export$602eac185826482c = $a093c7e1ec25a057$export$7b36b8f925ab7497;
var $a093c7e1ec25a057$export$7c6e2c02157bb7d2 = $a093c7e1ec25a057$export$e9003e2be37ec060;

// node_modules/@webstudio-is/sdk-components-react-radix/lib/components.js
var import_react76 = __toESM(require_react(), 1);
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var import_react77 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-tabs/dist/index.mjs
var import_react66 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var import_react65 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-collection/dist/index.mjs
var import_react63 = __toESM(require_react(), 1);
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  });
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = import_react63.default.useRef(null);
    const itemMap = import_react63.default.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ import_react63.default.createElement(CollectionProviderImpl, {
      scope,
      itemMap,
      collectionRef: ref
    }, children);
  };
  /* @__PURE__ */ Object.assign(CollectionProvider, {
    displayName: PROVIDER_NAME
  });
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = /* @__PURE__ */ import_react63.default.forwardRef((props, forwardedRef) => {
    const { scope, children } = props;
    const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.collectionRef);
    return /* @__PURE__ */ import_react63.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      ref: composedRefs
    }, children);
  });
  /* @__PURE__ */ Object.assign(CollectionSlot, {
    displayName: COLLECTION_SLOT_NAME
  });
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = /* @__PURE__ */ import_react63.default.forwardRef((props, forwardedRef) => {
    const { scope, children, ...itemData } = props;
    const ref = import_react63.default.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const context = useCollectionContext(ITEM_SLOT_NAME, scope);
    import_react63.default.useEffect(() => {
      context.itemMap.set(ref, {
        ref,
        ...itemData
      });
      return () => void context.itemMap.delete(ref);
    });
    return /* @__PURE__ */ import_react63.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      [ITEM_DATA_ATTR]: "",
      ref: composedRefs
    }, children);
  });
  /* @__PURE__ */ Object.assign(CollectionItemSlot, {
    displayName: ITEM_SLOT_NAME
  });
  function useCollection(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = import_react63.default.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a2, b2) => orderedNodes.indexOf(a2.ref.current) - orderedNodes.indexOf(b2.ref.current)
      );
      return orderedItems;
    }, [
      context.collectionRef,
      context.itemMap
    ]);
    return getItems;
  }
  return [
    {
      Provider: CollectionProvider,
      Slot: CollectionSlot,
      ItemSlot: CollectionItemSlot
    },
    useCollection,
    createCollectionScope
  ];
}

// node_modules/@radix-ui/react-direction/dist/index.mjs
var import_react64 = __toESM(require_react(), 1);
var $f631663db3294ace$var$DirectionContext = /* @__PURE__ */ (0, import_react64.createContext)(void 0);
function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
  const globalDir = (0, import_react64.useContext)($f631663db3294ace$var$DirectionContext);
  return localDir || globalDir || "ltr";
}

// node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var $d7bdfb9eb0fdf311$var$GROUP_NAME = "RovingFocusGroup";
var [$d7bdfb9eb0fdf311$var$Collection, $d7bdfb9eb0fdf311$var$useCollection, $d7bdfb9eb0fdf311$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($d7bdfb9eb0fdf311$var$GROUP_NAME);
var [$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext, $d7bdfb9eb0fdf311$export$c7109489551a4f4] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d7bdfb9eb0fdf311$var$GROUP_NAME, [
  $d7bdfb9eb0fdf311$var$createCollectionScope
]);
var [$d7bdfb9eb0fdf311$var$RovingFocusProvider, $d7bdfb9eb0fdf311$var$useRovingFocusContext] = $d7bdfb9eb0fdf311$var$createRovingFocusGroupContext($d7bdfb9eb0fdf311$var$GROUP_NAME);
var $d7bdfb9eb0fdf311$var$ITEM_NAME = "RovingFocusGroupItem";
var $d7bdfb9eb0fdf311$export$ab9df7c53fe8454 = /* @__PURE__ */ (0, import_react65.forwardRef)((props, forwardedRef) => {
  const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, ...itemProps } = props;
  const autoId = $1746a345f3d73bb7$export$f680877a34711e37();
  const id = tabStopId || autoId;
  const context = $d7bdfb9eb0fdf311$var$useRovingFocusContext($d7bdfb9eb0fdf311$var$ITEM_NAME, __scopeRovingFocusGroup);
  const isCurrentTabStop = context.currentTabStopId === id;
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const { onFocusableItemAdd, onFocusableItemRemove } = context;
  (0, import_react65.useEffect)(() => {
    if (focusable) {
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }
  }, [
    focusable,
    onFocusableItemAdd,
    onFocusableItemRemove
  ]);
  return /* @__PURE__ */ (0, import_react65.createElement)($d7bdfb9eb0fdf311$var$Collection.ItemSlot, {
    scope: __scopeRovingFocusGroup,
    id,
    focusable,
    active
  }, /* @__PURE__ */ (0, import_react65.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    tabIndex: isCurrentTabStop ? 0 : -1,
    "data-orientation": context.orientation
  }, itemProps, {
    ref: forwardedRef,
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, (event) => {
      if (!focusable)
        event.preventDefault();
      else
        context.onItemFocus(id);
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => context.onItemFocus(id)
    ),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Tab" && event.shiftKey) {
        context.onItemShiftTab();
        return;
      }
      if (event.target !== event.currentTarget)
        return;
      const focusIntent = $d7bdfb9eb0fdf311$var$getFocusIntent(event, context.orientation, context.dir);
      if (focusIntent !== void 0) {
        event.preventDefault();
        const items = getItems().filter(
          (item) => item.focusable
        );
        let candidateNodes = items.map(
          (item) => item.ref.current
        );
        if (focusIntent === "last")
          candidateNodes.reverse();
        else if (focusIntent === "prev" || focusIntent === "next") {
          if (focusIntent === "prev")
            candidateNodes.reverse();
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = context.loop ? $d7bdfb9eb0fdf311$var$wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes)
        );
      }
    })
  })));
});
var $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function $d7bdfb9eb0fdf311$var$getDirectionAwareKey(key, dir) {
  if (dir !== "rtl")
    return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function $d7bdfb9eb0fdf311$var$getFocusIntent(event, orientation, dir) {
  const key = $d7bdfb9eb0fdf311$var$getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(key))
    return void 0;
  if (orientation === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(key))
    return void 0;
  return $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT[key];
}
function $d7bdfb9eb0fdf311$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $d7bdfb9eb0fdf311$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index2) => array[(startIndex + index2) % array.length]
  );
}
var $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2 = $d7bdfb9eb0fdf311$export$ab9df7c53fe8454;

// node_modules/@radix-ui/react-tabs/dist/index.mjs
var $69cb30bb0017df05$var$TABS_NAME = "Tabs";
var [$69cb30bb0017df05$var$createTabsContext, $69cb30bb0017df05$export$355f5bd209d7b13a] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($69cb30bb0017df05$var$TABS_NAME, [
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
]);
var $69cb30bb0017df05$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var [$69cb30bb0017df05$var$TabsProvider, $69cb30bb0017df05$var$useTabsContext] = $69cb30bb0017df05$var$createTabsContext($69cb30bb0017df05$var$TABS_NAME);
var $69cb30bb0017df05$var$TRIGGER_NAME = "TabsTrigger";
var $69cb30bb0017df05$export$8114b9fdfdf9f3ba = /* @__PURE__ */ (0, import_react66.forwardRef)((props, forwardedRef) => {
  const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
  const context = $69cb30bb0017df05$var$useTabsContext($69cb30bb0017df05$var$TRIGGER_NAME, __scopeTabs);
  const rovingFocusGroupScope = $69cb30bb0017df05$var$useRovingFocusGroupScope(__scopeTabs);
  const triggerId = $69cb30bb0017df05$var$makeTriggerId(context.baseId, value);
  const contentId = $69cb30bb0017df05$var$makeContentId(context.baseId, value);
  const isSelected = value === context.value;
  return /* @__PURE__ */ (0, import_react66.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !disabled,
    active: isSelected
  }), /* @__PURE__ */ (0, import_react66.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "tab",
    "aria-selected": isSelected,
    "aria-controls": contentId,
    "data-state": isSelected ? "active" : "inactive",
    "data-disabled": disabled ? "" : void 0,
    disabled,
    id: triggerId
  }, triggerProps, {
    ref: forwardedRef,
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, (event) => {
      if (!disabled && event.button === 0 && event.ctrlKey === false)
        context.onValueChange(value);
      else
        event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if ([
        " ",
        "Enter"
      ].includes(event.key))
        context.onValueChange(value);
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, () => {
      const isAutomaticActivation = context.activationMode !== "manual";
      if (!isSelected && !disabled && isAutomaticActivation)
        context.onValueChange(value);
    })
  })));
});
var $69cb30bb0017df05$var$CONTENT_NAME = "TabsContent";
var $69cb30bb0017df05$export$bd905d70e8fd2ebb = /* @__PURE__ */ (0, import_react66.forwardRef)((props, forwardedRef) => {
  const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
  const context = $69cb30bb0017df05$var$useTabsContext($69cb30bb0017df05$var$CONTENT_NAME, __scopeTabs);
  const triggerId = $69cb30bb0017df05$var$makeTriggerId(context.baseId, value);
  const contentId = $69cb30bb0017df05$var$makeContentId(context.baseId, value);
  const isSelected = value === context.value;
  const isMountAnimationPreventedRef = (0, import_react66.useRef)(isSelected);
  (0, import_react66.useEffect)(() => {
    const rAF = requestAnimationFrame(
      () => isMountAnimationPreventedRef.current = false
    );
    return () => cancelAnimationFrame(rAF);
  }, []);
  return /* @__PURE__ */ (0, import_react66.createElement)(
    $921a889cee6df7e8$export$99c2b779aa4e8b8b,
    {
      present: forceMount || isSelected
    },
    ({ present }) => /* @__PURE__ */ (0, import_react66.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-state": isSelected ? "active" : "inactive",
      "data-orientation": context.orientation,
      role: "tabpanel",
      "aria-labelledby": triggerId,
      hidden: !present,
      id: contentId,
      tabIndex: 0
    }, contentProps, {
      ref: forwardedRef,
      style: {
        ...props.style,
        animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
      }
    }), present && children)
  );
});
function $69cb30bb0017df05$var$makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function $69cb30bb0017df05$var$makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var $69cb30bb0017df05$export$41fb9f06171c75f4 = $69cb30bb0017df05$export$8114b9fdfdf9f3ba;
var $69cb30bb0017df05$export$7c6e2c02157bb7d2 = $69cb30bb0017df05$export$bd905d70e8fd2ebb;

// node_modules/@webstudio-is/sdk-components-react-radix/lib/components.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var import_react78 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-label/dist/index.mjs
var import_react67 = __toESM(require_react(), 1);
var $b73a6c6685e72184$export$b04be29aa201d4f5 = /* @__PURE__ */ (0, import_react67.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react67.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.label, _extends({}, props, {
    ref: forwardedRef,
    onMouseDown: (event) => {
      var _props$onMouseDown;
      (_props$onMouseDown = props.onMouseDown) === null || _props$onMouseDown === void 0 || _props$onMouseDown.call(props, event);
      if (!event.defaultPrevented && event.detail > 1)
        event.preventDefault();
    }
  }));
});
var $b73a6c6685e72184$export$be92b6f5f03c0fe9 = $b73a6c6685e72184$export$b04be29aa201d4f5;

// node_modules/@webstudio-is/sdk-components-react-radix/lib/components.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var import_react79 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-accordion/dist/index.mjs
var import_react68 = __toESM(require_react(), 1);
var $1bf158f521e1b1b4$var$ACCORDION_NAME = "Accordion";
var $1bf158f521e1b1b4$var$ACCORDION_KEYS = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
];
var [$1bf158f521e1b1b4$var$Collection, $1bf158f521e1b1b4$var$useCollection, $1bf158f521e1b1b4$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($1bf158f521e1b1b4$var$ACCORDION_NAME);
var [$1bf158f521e1b1b4$var$createAccordionContext, $1bf158f521e1b1b4$export$9748edc328a73be1] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($1bf158f521e1b1b4$var$ACCORDION_NAME, [
  $1bf158f521e1b1b4$var$createCollectionScope,
  $409067139f391064$export$952b32dcbe73087a
]);
var $1bf158f521e1b1b4$var$useCollapsibleScope = $409067139f391064$export$952b32dcbe73087a();
var $1bf158f521e1b1b4$export$a766cd26d0d69044 = /* @__PURE__ */ import_react68.default.forwardRef((props, forwardedRef) => {
  const { type, ...accordionProps } = props;
  const singleProps = accordionProps;
  const multipleProps = accordionProps;
  return /* @__PURE__ */ import_react68.default.createElement($1bf158f521e1b1b4$var$Collection.Provider, {
    scope: props.__scopeAccordion
  }, type === "multiple" ? /* @__PURE__ */ import_react68.default.createElement($1bf158f521e1b1b4$var$AccordionImplMultiple, _extends({}, multipleProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ import_react68.default.createElement($1bf158f521e1b1b4$var$AccordionImplSingle, _extends({}, singleProps, {
    ref: forwardedRef
  })));
});
$1bf158f521e1b1b4$export$a766cd26d0d69044.propTypes = {
  type(props) {
    const value = props.value || props.defaultValue;
    if (props.type && ![
      "single",
      "multiple"
    ].includes(props.type))
      return new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.");
    if (props.type === "multiple" && typeof value === "string")
      return new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.");
    if (props.type === "single" && Array.isArray(value))
      return new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.");
    return null;
  }
};
var [$1bf158f521e1b1b4$var$AccordionValueProvider, $1bf158f521e1b1b4$var$useAccordionValueContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME);
var [$1bf158f521e1b1b4$var$AccordionCollapsibleProvider, $1bf158f521e1b1b4$var$useAccordionCollapsibleContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, {
  collapsible: false
});
var $1bf158f521e1b1b4$var$AccordionImplSingle = /* @__PURE__ */ import_react68.default.forwardRef((props, forwardedRef) => {
  const { value: valueProp, defaultValue, onValueChange = () => {
  }, collapsible = false, ...accordionSingleProps } = props;
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return /* @__PURE__ */ import_react68.default.createElement($1bf158f521e1b1b4$var$AccordionValueProvider, {
    scope: props.__scopeAccordion,
    value: value ? [
      value
    ] : [],
    onItemOpen: setValue,
    onItemClose: import_react68.default.useCallback(
      () => collapsible && setValue(""),
      [
        collapsible,
        setValue
      ]
    )
  }, /* @__PURE__ */ import_react68.default.createElement($1bf158f521e1b1b4$var$AccordionCollapsibleProvider, {
    scope: props.__scopeAccordion,
    collapsible
  }, /* @__PURE__ */ import_react68.default.createElement($1bf158f521e1b1b4$var$AccordionImpl, _extends({}, accordionSingleProps, {
    ref: forwardedRef
  }))));
});
var $1bf158f521e1b1b4$var$AccordionImplMultiple = /* @__PURE__ */ import_react68.default.forwardRef((props, forwardedRef) => {
  const { value: valueProp, defaultValue, onValueChange = () => {
  }, ...accordionMultipleProps } = props;
  const [value1 = [], setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const handleItemOpen = import_react68.default.useCallback(
    (itemValue) => setValue(
      (prevValue = []) => [
        ...prevValue,
        itemValue
      ]
    ),
    [
      setValue
    ]
  );
  const handleItemClose = import_react68.default.useCallback(
    (itemValue) => setValue(
      (prevValue = []) => prevValue.filter(
        (value) => value !== itemValue
      )
    ),
    [
      setValue
    ]
  );
  return /* @__PURE__ */ import_react68.default.createElement($1bf158f521e1b1b4$var$AccordionValueProvider, {
    scope: props.__scopeAccordion,
    value: value1,
    onItemOpen: handleItemOpen,
    onItemClose: handleItemClose
  }, /* @__PURE__ */ import_react68.default.createElement($1bf158f521e1b1b4$var$AccordionCollapsibleProvider, {
    scope: props.__scopeAccordion,
    collapsible: true
  }, /* @__PURE__ */ import_react68.default.createElement($1bf158f521e1b1b4$var$AccordionImpl, _extends({}, accordionMultipleProps, {
    ref: forwardedRef
  }))));
});
var [$1bf158f521e1b1b4$var$AccordionImplProvider, $1bf158f521e1b1b4$var$useAccordionContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME);
var $1bf158f521e1b1b4$var$AccordionImpl = /* @__PURE__ */ import_react68.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
  const accordionRef = import_react68.default.useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(accordionRef, forwardedRef);
  const getItems = $1bf158f521e1b1b4$var$useCollection(__scopeAccordion);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const isDirectionLTR = direction === "ltr";
  const handleKeyDown = $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
    var _triggerCollection$cl;
    if (!$1bf158f521e1b1b4$var$ACCORDION_KEYS.includes(event.key))
      return;
    const target = event.target;
    const triggerCollection = getItems().filter((item) => {
      var _item$ref$current;
      return !((_item$ref$current = item.ref.current) !== null && _item$ref$current !== void 0 && _item$ref$current.disabled);
    });
    const triggerIndex = triggerCollection.findIndex(
      (item) => item.ref.current === target
    );
    const triggerCount = triggerCollection.length;
    if (triggerIndex === -1)
      return;
    event.preventDefault();
    let nextIndex = triggerIndex;
    const homeIndex = 0;
    const endIndex = triggerCount - 1;
    const moveNext = () => {
      nextIndex = triggerIndex + 1;
      if (nextIndex > endIndex)
        nextIndex = homeIndex;
    };
    const movePrev = () => {
      nextIndex = triggerIndex - 1;
      if (nextIndex < homeIndex)
        nextIndex = endIndex;
    };
    switch (event.key) {
      case "Home":
        nextIndex = homeIndex;
        break;
      case "End":
        nextIndex = endIndex;
        break;
      case "ArrowRight":
        if (orientation === "horizontal") {
          if (isDirectionLTR)
            moveNext();
          else
            movePrev();
        }
        break;
      case "ArrowDown":
        if (orientation === "vertical")
          moveNext();
        break;
      case "ArrowLeft":
        if (orientation === "horizontal") {
          if (isDirectionLTR)
            movePrev();
          else
            moveNext();
        }
        break;
      case "ArrowUp":
        if (orientation === "vertical")
          movePrev();
        break;
    }
    const clampedIndex = nextIndex % triggerCount;
    (_triggerCollection$cl = triggerCollection[clampedIndex].ref.current) === null || _triggerCollection$cl === void 0 || _triggerCollection$cl.focus();
  });
  return /* @__PURE__ */ import_react68.default.createElement($1bf158f521e1b1b4$var$AccordionImplProvider, {
    scope: __scopeAccordion,
    disabled,
    direction: dir,
    orientation
  }, /* @__PURE__ */ import_react68.default.createElement($1bf158f521e1b1b4$var$Collection.Slot, {
    scope: __scopeAccordion
  }, /* @__PURE__ */ import_react68.default.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, accordionProps, {
    "data-orientation": orientation,
    ref: composedRefs,
    onKeyDown: disabled ? void 0 : handleKeyDown
  }))));
});
var $1bf158f521e1b1b4$var$ITEM_NAME = "AccordionItem";
var [$1bf158f521e1b1b4$var$AccordionItemProvider, $1bf158f521e1b1b4$var$useAccordionItemContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ITEM_NAME);
var $1bf158f521e1b1b4$export$d99097c13d4dac9f = /* @__PURE__ */ import_react68.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, value, ...accordionItemProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ITEM_NAME, __scopeAccordion);
  const valueContext = $1bf158f521e1b1b4$var$useAccordionValueContext($1bf158f521e1b1b4$var$ITEM_NAME, __scopeAccordion);
  const collapsibleScope = $1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);
  const triggerId = $1746a345f3d73bb7$export$f680877a34711e37();
  const open1 = value && valueContext.value.includes(value) || false;
  const disabled = accordionContext.disabled || props.disabled;
  return /* @__PURE__ */ import_react68.default.createElement($1bf158f521e1b1b4$var$AccordionItemProvider, {
    scope: __scopeAccordion,
    open: open1,
    disabled,
    triggerId
  }, /* @__PURE__ */ import_react68.default.createElement($409067139f391064$export$be92b6f5f03c0fe9, _extends({
    "data-orientation": accordionContext.orientation,
    "data-state": $1bf158f521e1b1b4$var$getState(open1)
  }, collapsibleScope, accordionItemProps, {
    ref: forwardedRef,
    disabled,
    open: open1,
    onOpenChange: (open) => {
      if (open)
        valueContext.onItemOpen(value);
      else
        valueContext.onItemClose(value);
    }
  })));
});
var $1bf158f521e1b1b4$var$HEADER_NAME = "AccordionHeader";
var $1bf158f521e1b1b4$export$5e3e5deaaf81ee41 = /* @__PURE__ */ import_react68.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...headerProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, __scopeAccordion);
  const itemContext = $1bf158f521e1b1b4$var$useAccordionItemContext($1bf158f521e1b1b4$var$HEADER_NAME, __scopeAccordion);
  return /* @__PURE__ */ import_react68.default.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.h3, _extends({
    "data-orientation": accordionContext.orientation,
    "data-state": $1bf158f521e1b1b4$var$getState(itemContext.open),
    "data-disabled": itemContext.disabled ? "" : void 0
  }, headerProps, {
    ref: forwardedRef
  }));
});
var $1bf158f521e1b1b4$var$TRIGGER_NAME = "AccordionTrigger";
var $1bf158f521e1b1b4$export$94e939b1f85bdd73 = /* @__PURE__ */ import_react68.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...triggerProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, __scopeAccordion);
  const itemContext = $1bf158f521e1b1b4$var$useAccordionItemContext($1bf158f521e1b1b4$var$TRIGGER_NAME, __scopeAccordion);
  const collapsibleContext = $1bf158f521e1b1b4$var$useAccordionCollapsibleContext($1bf158f521e1b1b4$var$TRIGGER_NAME, __scopeAccordion);
  const collapsibleScope = $1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);
  return /* @__PURE__ */ import_react68.default.createElement($1bf158f521e1b1b4$var$Collection.ItemSlot, {
    scope: __scopeAccordion
  }, /* @__PURE__ */ import_react68.default.createElement($409067139f391064$export$41fb9f06171c75f4, _extends({
    "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
    "data-orientation": accordionContext.orientation,
    id: itemContext.triggerId
  }, collapsibleScope, triggerProps, {
    ref: forwardedRef
  })));
});
var $1bf158f521e1b1b4$var$CONTENT_NAME = "AccordionContent";
var $1bf158f521e1b1b4$export$985b9a77379b54a0 = /* @__PURE__ */ import_react68.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...contentProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, __scopeAccordion);
  const itemContext = $1bf158f521e1b1b4$var$useAccordionItemContext($1bf158f521e1b1b4$var$CONTENT_NAME, __scopeAccordion);
  const collapsibleScope = $1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);
  return /* @__PURE__ */ import_react68.default.createElement($409067139f391064$export$7c6e2c02157bb7d2, _extends({
    role: "region",
    "aria-labelledby": itemContext.triggerId,
    "data-orientation": accordionContext.orientation
  }, collapsibleScope, contentProps, {
    ref: forwardedRef,
    style: {
      ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
      ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
      ...props.style
    }
  }));
});
function $1bf158f521e1b1b4$var$getState(open) {
  return open ? "open" : "closed";
}
var $1bf158f521e1b1b4$export$be92b6f5f03c0fe9 = $1bf158f521e1b1b4$export$a766cd26d0d69044;
var $1bf158f521e1b1b4$export$6d08773d2e66f8f2 = $1bf158f521e1b1b4$export$d99097c13d4dac9f;
var $1bf158f521e1b1b4$export$8b251419efc915eb = $1bf158f521e1b1b4$export$5e3e5deaaf81ee41;
var $1bf158f521e1b1b4$export$41fb9f06171c75f4 = $1bf158f521e1b1b4$export$94e939b1f85bdd73;
var $1bf158f521e1b1b4$export$7c6e2c02157bb7d2 = $1bf158f521e1b1b4$export$985b9a77379b54a0;

// node_modules/@webstudio-is/sdk-components-react-radix/lib/components.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);

// node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var import_react70 = __toESM(require_react(), 1);
var import_react_dom5 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-use-previous/dist/index.mjs
var import_react69 = __toESM(require_react(), 1);
function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
  const ref = (0, import_react69.useRef)({
    value,
    previous: value
  });
  return (0, import_react69.useMemo)(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [
    value
  ]);
}

// node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var $322c88a641701f3b$var$NAVIGATION_MENU_NAME = "NavigationMenu";
var [$322c88a641701f3b$var$Collection, $322c88a641701f3b$var$useCollection, $322c88a641701f3b$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$FocusGroupCollection, $322c88a641701f3b$var$useFocusGroupCollection, $322c88a641701f3b$var$createFocusGroupCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$createNavigationMenuContext, $322c88a641701f3b$export$fb8ea5af8c9fcdf0] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($322c88a641701f3b$var$NAVIGATION_MENU_NAME, [
  $322c88a641701f3b$var$createCollectionScope,
  $322c88a641701f3b$var$createFocusGroupCollectionScope
]);
var [$322c88a641701f3b$var$NavigationMenuProviderImpl, $322c88a641701f3b$var$useNavigationMenuContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$ViewportContentProvider, $322c88a641701f3b$var$useViewportContentContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var $322c88a641701f3b$export$5b2278cf1e8bcae2 = /* @__PURE__ */ (0, import_react70.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, delayDuration = 200, skipDelayDuration = 300, orientation = "horizontal", dir, ...NavigationMenuProps } = props;
  const [navigationMenu, setNavigationMenu] = (0, import_react70.useState)(null);
  const composedRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNavigationMenu(node)
  );
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const openTimerRef = (0, import_react70.useRef)(0);
  const closeTimerRef = (0, import_react70.useRef)(0);
  const skipDelayTimerRef = (0, import_react70.useRef)(0);
  const [isOpenDelayed, setIsOpenDelayed] = (0, import_react70.useState)(true);
  const [value1 = "", setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    onChange: (value) => {
      const isOpen = value !== "";
      const hasSkipDelayDuration = skipDelayDuration > 0;
      if (isOpen) {
        window.clearTimeout(skipDelayTimerRef.current);
        if (hasSkipDelayDuration)
          setIsOpenDelayed(false);
      } else {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => setIsOpenDelayed(true),
          skipDelayDuration
        );
      }
      onValueChange === null || onValueChange === void 0 || onValueChange(value);
    },
    defaultProp: defaultValue
  });
  const startCloseTimer = (0, import_react70.useCallback)(() => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(
      () => setValue(""),
      150
    );
  }, [
    setValue
  ]);
  const handleOpen = (0, import_react70.useCallback)((itemValue) => {
    window.clearTimeout(closeTimerRef.current);
    setValue(itemValue);
  }, [
    setValue
  ]);
  const handleDelayedOpen = (0, import_react70.useCallback)((itemValue) => {
    const isOpenItem = value1 === itemValue;
    if (isOpenItem)
      window.clearTimeout(closeTimerRef.current);
    else
      openTimerRef.current = window.setTimeout(() => {
        window.clearTimeout(closeTimerRef.current);
        setValue(itemValue);
      }, delayDuration);
  }, [
    value1,
    setValue,
    delayDuration
  ]);
  (0, import_react70.useEffect)(() => {
    return () => {
      window.clearTimeout(openTimerRef.current);
      window.clearTimeout(closeTimerRef.current);
      window.clearTimeout(skipDelayTimerRef.current);
    };
  }, []);
  return /* @__PURE__ */ (0, import_react70.createElement)($322c88a641701f3b$var$NavigationMenuProvider, {
    scope: __scopeNavigationMenu,
    isRootMenu: true,
    value: value1,
    dir: direction,
    orientation,
    rootNavigationMenu: navigationMenu,
    onTriggerEnter: (itemValue) => {
      window.clearTimeout(openTimerRef.current);
      if (isOpenDelayed)
        handleDelayedOpen(itemValue);
      else
        handleOpen(itemValue);
    },
    onTriggerLeave: () => {
      window.clearTimeout(openTimerRef.current);
      startCloseTimer();
    },
    onContentEnter: () => window.clearTimeout(closeTimerRef.current),
    onContentLeave: startCloseTimer,
    onItemSelect: (itemValue) => {
      setValue(
        (prevValue) => prevValue === itemValue ? "" : itemValue
      );
    },
    onItemDismiss: () => setValue("")
  }, /* @__PURE__ */ (0, import_react70.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.nav, _extends({
    "aria-label": "Main",
    "data-orientation": orientation,
    dir: direction
  }, NavigationMenuProps, {
    ref: composedRef
  })));
});
var $322c88a641701f3b$var$NavigationMenuProvider = (props) => {
  const { scope, isRootMenu, rootNavigationMenu, dir, orientation, children, value, onItemSelect, onItemDismiss, onTriggerEnter, onTriggerLeave, onContentEnter, onContentLeave } = props;
  const [viewport, setViewport] = (0, import_react70.useState)(null);
  const [viewportContent, setViewportContent] = (0, import_react70.useState)(/* @__PURE__ */ new Map());
  const [indicatorTrack, setIndicatorTrack] = (0, import_react70.useState)(null);
  return /* @__PURE__ */ (0, import_react70.createElement)($322c88a641701f3b$var$NavigationMenuProviderImpl, {
    scope,
    isRootMenu,
    rootNavigationMenu,
    value,
    previousValue: $010c2913dbd2fe3d$export$5cae361ad82dce8b(value),
    baseId: $1746a345f3d73bb7$export$f680877a34711e37(),
    dir,
    orientation,
    viewport,
    onViewportChange: setViewport,
    indicatorTrack,
    onIndicatorTrackChange: setIndicatorTrack,
    onTriggerEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerEnter),
    onTriggerLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerLeave),
    onContentEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentEnter),
    onContentLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentLeave),
    onItemSelect: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemSelect),
    onItemDismiss: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemDismiss),
    onViewportContentChange: (0, import_react70.useCallback)((contentValue, contentData) => {
      setViewportContent((prevContent) => {
        prevContent.set(contentValue, contentData);
        return new Map(prevContent);
      });
    }, []),
    onViewportContentRemove: (0, import_react70.useCallback)((contentValue) => {
      setViewportContent((prevContent) => {
        if (!prevContent.has(contentValue))
          return prevContent;
        prevContent.delete(contentValue);
        return new Map(prevContent);
      });
    }, [])
  }, /* @__PURE__ */ (0, import_react70.createElement)($322c88a641701f3b$var$Collection.Provider, {
    scope
  }, /* @__PURE__ */ (0, import_react70.createElement)($322c88a641701f3b$var$ViewportContentProvider, {
    scope,
    items: viewportContent
  }, children)));
};
var $322c88a641701f3b$var$ITEM_NAME = "NavigationMenuItem";
var [$322c88a641701f3b$var$NavigationMenuItemContextProvider, $322c88a641701f3b$var$useNavigationMenuItemContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$ITEM_NAME);
var $322c88a641701f3b$export$ffdbb83a2de845c2 = /* @__PURE__ */ (0, import_react70.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, ...itemProps } = props;
  const autoValue = $1746a345f3d73bb7$export$f680877a34711e37();
  const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
  const contentRef = (0, import_react70.useRef)(null);
  const triggerRef = (0, import_react70.useRef)(null);
  const focusProxyRef = (0, import_react70.useRef)(null);
  const restoreContentTabOrderRef = (0, import_react70.useRef)(() => {
  });
  const wasEscapeCloseRef = (0, import_react70.useRef)(false);
  const handleContentEntry = (0, import_react70.useCallback)((side = "start") => {
    if (contentRef.current) {
      restoreContentTabOrderRef.current();
      const candidates = $322c88a641701f3b$var$getTabbableCandidates(contentRef.current);
      if (candidates.length)
        $322c88a641701f3b$var$focusFirst(side === "start" ? candidates : candidates.reverse());
    }
  }, []);
  const handleContentExit = (0, import_react70.useCallback)(() => {
    if (contentRef.current) {
      const candidates = $322c88a641701f3b$var$getTabbableCandidates(contentRef.current);
      if (candidates.length)
        restoreContentTabOrderRef.current = $322c88a641701f3b$var$removeFromTabOrder(candidates);
    }
  }, []);
  return /* @__PURE__ */ (0, import_react70.createElement)($322c88a641701f3b$var$NavigationMenuItemContextProvider, {
    scope: __scopeNavigationMenu,
    value,
    triggerRef,
    contentRef,
    focusProxyRef,
    wasEscapeCloseRef,
    onEntryKeyDown: handleContentEntry,
    onFocusProxyEnter: handleContentEntry,
    onRootContentClose: handleContentExit,
    onContentFocusOutside: handleContentExit
  }, /* @__PURE__ */ (0, import_react70.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.li, _extends({}, itemProps, {
    ref: forwardedRef
  })));
});
var $322c88a641701f3b$var$TRIGGER_NAME = "NavigationMenuTrigger";
var $322c88a641701f3b$export$37fe8002734d8f2 = /* @__PURE__ */ (0, import_react70.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, disabled, ...triggerProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const ref = (0, import_react70.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(ref, itemContext.triggerRef, forwardedRef);
  const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, itemContext.value);
  const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, itemContext.value);
  const hasPointerMoveOpenedRef = (0, import_react70.useRef)(false);
  const wasClickCloseRef = (0, import_react70.useRef)(false);
  const open = itemContext.value === context.value;
  return /* @__PURE__ */ (0, import_react70.createElement)(import_react70.Fragment, null, /* @__PURE__ */ (0, import_react70.createElement)($322c88a641701f3b$var$Collection.ItemSlot, {
    scope: __scopeNavigationMenu,
    value: itemContext.value
  }, /* @__PURE__ */ (0, import_react70.createElement)($322c88a641701f3b$var$FocusGroupItem, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react70.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    id: triggerId,
    disabled,
    "data-disabled": disabled ? "" : void 0,
    "data-state": $322c88a641701f3b$var$getOpenState(open),
    "aria-expanded": open,
    "aria-controls": contentId
  }, triggerProps, {
    ref: composedRefs,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, () => {
      wasClickCloseRef.current = false;
      itemContext.wasEscapeCloseRef.current = false;
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current)
        return;
      context.onTriggerEnter(itemContext.value);
      hasPointerMoveOpenedRef.current = true;
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled)
        return;
      context.onTriggerLeave();
      hasPointerMoveOpenedRef.current = false;
    })),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, () => {
      context.onItemSelect(itemContext.value);
      wasClickCloseRef.current = open;
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const verticalEntryKey = context.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
      const entryKey = {
        horizontal: "ArrowDown",
        vertical: verticalEntryKey
      }[context.orientation];
      if (open && event.key === entryKey) {
        itemContext.onEntryKeyDown();
        event.preventDefault();
      }
    })
  })))), open && /* @__PURE__ */ (0, import_react70.createElement)(import_react70.Fragment, null, /* @__PURE__ */ (0, import_react70.createElement)($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
    "aria-hidden": true,
    tabIndex: 0,
    ref: itemContext.focusProxyRef,
    onFocus: (event) => {
      const content = itemContext.contentRef.current;
      const prevFocusedElement = event.relatedTarget;
      const wasTriggerFocused = prevFocusedElement === ref.current;
      const wasFocusFromContent = content === null || content === void 0 ? void 0 : content.contains(prevFocusedElement);
      if (wasTriggerFocused || !wasFocusFromContent)
        itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
    }
  }), context.viewport && /* @__PURE__ */ (0, import_react70.createElement)("span", {
    "aria-owns": contentId
  })));
});
var $322c88a641701f3b$var$LINK_SELECT = "navigationMenu.linkSelect";
var $322c88a641701f3b$export$6893bf21536567da = /* @__PURE__ */ (0, import_react70.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, active, onSelect, ...linkProps } = props;
  return /* @__PURE__ */ (0, import_react70.createElement)($322c88a641701f3b$var$FocusGroupItem, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react70.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.a, _extends({
    "data-active": active ? "" : void 0,
    "aria-current": active ? "page" : void 0
  }, linkProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event1) => {
      const target = event1.target;
      const linkSelectEvent = new CustomEvent($322c88a641701f3b$var$LINK_SELECT, {
        bubbles: true,
        cancelable: true
      });
      target.addEventListener(
        $322c88a641701f3b$var$LINK_SELECT,
        (event) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(event),
        {
          once: true
        }
      );
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, linkSelectEvent);
      if (!linkSelectEvent.defaultPrevented && !event1.metaKey) {
        const rootContentDismissEvent = new CustomEvent($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
          bubbles: true,
          cancelable: true
        });
        $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, rootContentDismissEvent);
      }
    }, {
      checkForDefaultPrevented: false
    })
  })));
});
var $322c88a641701f3b$var$ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
var $322c88a641701f3b$var$ARROW_KEYS = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
];
var $322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME = "FocusGroupItem";
var $322c88a641701f3b$var$FocusGroupItem = /* @__PURE__ */ (0, import_react70.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const getItems = $322c88a641701f3b$var$useFocusGroupCollection(__scopeNavigationMenu);
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
  return /* @__PURE__ */ (0, import_react70.createElement)($322c88a641701f3b$var$FocusGroupCollection.ItemSlot, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react70.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({}, groupProps, {
    ref: forwardedRef,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isFocusNavigationKey = [
        "Home",
        "End",
        ...$322c88a641701f3b$var$ARROW_KEYS
      ].includes(event.key);
      if (isFocusNavigationKey) {
        let candidateNodes = getItems().map(
          (item) => item.ref.current
        );
        const prevItemKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
        const prevKeys = [
          prevItemKey,
          "ArrowUp",
          "End"
        ];
        if (prevKeys.includes(event.key))
          candidateNodes.reverse();
        if ($322c88a641701f3b$var$ARROW_KEYS.includes(event.key)) {
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $322c88a641701f3b$var$focusFirst(candidateNodes)
        );
        event.preventDefault();
      }
    })
  })));
});
function $322c88a641701f3b$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $322c88a641701f3b$var$focusFirst(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement)
      return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
function $322c88a641701f3b$var$removeFromTabOrder(candidates) {
  candidates.forEach((candidate) => {
    candidate.dataset.tabindex = candidate.getAttribute("tabindex") || "";
    candidate.setAttribute("tabindex", "-1");
  });
  return () => {
    candidates.forEach((candidate) => {
      const prevTabIndex = candidate.dataset.tabindex;
      candidate.setAttribute("tabindex", prevTabIndex);
    });
  };
}
function $322c88a641701f3b$var$getOpenState(open) {
  return open ? "open" : "closed";
}
function $322c88a641701f3b$var$makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function $322c88a641701f3b$var$makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
function $322c88a641701f3b$var$whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var $322c88a641701f3b$export$be92b6f5f03c0fe9 = $322c88a641701f3b$export$5b2278cf1e8bcae2;
var $322c88a641701f3b$export$6d08773d2e66f8f2 = $322c88a641701f3b$export$ffdbb83a2de845c2;
var $322c88a641701f3b$export$41fb9f06171c75f4 = $322c88a641701f3b$export$37fe8002734d8f2;
var $322c88a641701f3b$export$a6c7ac8248d6e38a = $322c88a641701f3b$export$6893bf21536567da;

// node_modules/@webstudio-is/sdk-components-react-radix/lib/components.js
var import_react80 = __toESM(require_react(), 1);
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var import_react81 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-select/dist/index.mjs
var import_react71 = __toESM(require_react(), 1);
var import_react_dom6 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/number/dist/index.mjs
function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min2, max2]) {
  return Math.min(max2, Math.max(min2, value));
}

// node_modules/@radix-ui/react-select/dist/index.mjs
var $cc7e05a45900e73f$var$SELECT_NAME = "Select";
var [$cc7e05a45900e73f$var$Collection, $cc7e05a45900e73f$var$useCollection, $cc7e05a45900e73f$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($cc7e05a45900e73f$var$SELECT_NAME);
var [$cc7e05a45900e73f$var$createSelectContext, $cc7e05a45900e73f$export$286727a75dc039bd] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cc7e05a45900e73f$var$SELECT_NAME, [
  $cc7e05a45900e73f$var$createCollectionScope,
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
var $cc7e05a45900e73f$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var [$cc7e05a45900e73f$var$SelectProvider, $cc7e05a45900e73f$var$useSelectContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
var [$cc7e05a45900e73f$var$SelectNativeOptionsProvider, $cc7e05a45900e73f$var$useSelectNativeOptionsContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
var $cc7e05a45900e73f$export$ef9b1a59e592288f = (props) => {
  const { __scopeSelect, children, open: openProp, defaultOpen, onOpenChange, value: valueProp, defaultValue, onValueChange, dir, name, autoComplete, disabled, required } = props;
  const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
  const [trigger, setTrigger] = (0, import_react71.useState)(null);
  const [valueNode, setValueNode] = (0, import_react71.useState)(null);
  const [valueNodeHasChildren, setValueNodeHasChildren] = (0, import_react71.useState)(false);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const triggerPointerDownPosRef = (0, import_react71.useRef)(null);
  const isFormControl = trigger ? Boolean(trigger.closest("form")) : true;
  const [nativeOptionsSet, setNativeOptionsSet] = (0, import_react71.useState)(/* @__PURE__ */ new Set());
  const nativeSelectKey = Array.from(nativeOptionsSet).map(
    (option) => option.props.value
  ).join(";");
  return /* @__PURE__ */ (0, import_react71.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ (0, import_react71.createElement)($cc7e05a45900e73f$var$SelectProvider, {
    required,
    scope: __scopeSelect,
    trigger,
    onTriggerChange: setTrigger,
    valueNode,
    onValueNodeChange: setValueNode,
    valueNodeHasChildren,
    onValueNodeHasChildrenChange: setValueNodeHasChildren,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    value,
    onValueChange: setValue,
    open,
    onOpenChange: setOpen,
    dir: direction,
    triggerPointerDownPosRef,
    disabled
  }, /* @__PURE__ */ (0, import_react71.createElement)($cc7e05a45900e73f$var$Collection.Provider, {
    scope: __scopeSelect
  }, /* @__PURE__ */ (0, import_react71.createElement)($cc7e05a45900e73f$var$SelectNativeOptionsProvider, {
    scope: props.__scopeSelect,
    onNativeOptionAdd: (0, import_react71.useCallback)((option) => {
      setNativeOptionsSet(
        (prev) => new Set(prev).add(option)
      );
    }, []),
    onNativeOptionRemove: (0, import_react71.useCallback)((option) => {
      setNativeOptionsSet((prev) => {
        const optionsSet = new Set(prev);
        optionsSet.delete(option);
        return optionsSet;
      });
    }, [])
  }, children)), isFormControl ? /* @__PURE__ */ (0, import_react71.createElement)($cc7e05a45900e73f$var$BubbleSelect, {
    key: nativeSelectKey,
    "aria-hidden": true,
    required,
    tabIndex: -1,
    name,
    autoComplete,
    value,
    onChange: (event) => setValue(event.target.value),
    disabled
  }, value === void 0 ? /* @__PURE__ */ (0, import_react71.createElement)("option", {
    value: ""
  }) : null, Array.from(nativeOptionsSet)) : null));
};
var $cc7e05a45900e73f$var$VALUE_NAME = "SelectValue";
var $cc7e05a45900e73f$export$e288731fd71264f0 = /* @__PURE__ */ (0, import_react71.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$VALUE_NAME, __scopeSelect);
  const { onValueNodeHasChildrenChange } = context;
  const hasChildren = children !== void 0;
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onValueNodeChange);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    onValueNodeHasChildrenChange(hasChildren);
  }, [
    onValueNodeHasChildrenChange,
    hasChildren
  ]);
  return /* @__PURE__ */ (0, import_react71.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, valueProps, {
    ref: composedRefs,
    style: {
      pointerEvents: "none"
    }
  }), $cc7e05a45900e73f$var$shouldShowPlaceholder(context.value) ? /* @__PURE__ */ (0, import_react71.createElement)(import_react71.Fragment, null, placeholder) : children);
});
var $cc7e05a45900e73f$export$b2af6c9944296213 = (props) => {
  return /* @__PURE__ */ (0, import_react71.createElement)($f1701beae083dbae$export$602eac185826482c, _extends({
    asChild: true
  }, props));
};
var $cc7e05a45900e73f$var$CONTENT_NAME = "SelectContent";
var $cc7e05a45900e73f$export$c973a4b3cb86a03d = /* @__PURE__ */ (0, import_react71.forwardRef)((props, forwardedRef) => {
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, props.__scopeSelect);
  const [fragment, setFragment] = (0, import_react71.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    setFragment(new DocumentFragment());
  }, []);
  if (!context.open) {
    const frag = fragment;
    return frag ? /* @__PURE__ */ (0, import_react_dom6.createPortal)(/* @__PURE__ */ (0, import_react71.createElement)($cc7e05a45900e73f$var$SelectContentProvider, {
      scope: props.__scopeSelect
    }, /* @__PURE__ */ (0, import_react71.createElement)($cc7e05a45900e73f$var$Collection.Slot, {
      scope: props.__scopeSelect
    }, /* @__PURE__ */ (0, import_react71.createElement)("div", null, props.children))), frag) : null;
  }
  return /* @__PURE__ */ (0, import_react71.createElement)($cc7e05a45900e73f$var$SelectContentImpl, _extends({}, props, {
    ref: forwardedRef
  }));
});
var $cc7e05a45900e73f$var$CONTENT_MARGIN = 10;
var [$cc7e05a45900e73f$var$SelectContentProvider, $cc7e05a45900e73f$var$useSelectContentContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME);
var $cc7e05a45900e73f$var$SelectContentImpl = /* @__PURE__ */ (0, import_react71.forwardRef)((props, forwardedRef) => {
  const {
    __scopeSelect,
    position = "item-aligned",
    onCloseAutoFocus,
    onEscapeKeyDown,
    onPointerDownOutside,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions,
    //
    ...contentProps
  } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
  const [content, setContent] = (0, import_react71.useState)(null);
  const [viewport, setViewport] = (0, import_react71.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const [selectedItem, setSelectedItem] = (0, import_react71.useState)(null);
  const [selectedItemText, setSelectedItemText] = (0, import_react71.useState)(null);
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const [isPositioned, setIsPositioned] = (0, import_react71.useState)(false);
  const firstValidItemFoundRef = (0, import_react71.useRef)(false);
  (0, import_react71.useEffect)(() => {
    if (content)
      return hideOthers(content);
  }, [
    content
  ]);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  const focusFirst = (0, import_react71.useCallback)((candidates) => {
    const [firstItem, ...restItems] = getItems().map(
      (item) => item.ref.current
    );
    const [lastItem] = restItems.slice(-1);
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
        return;
      candidate === null || candidate === void 0 || candidate.scrollIntoView({
        block: "nearest"
      });
      if (candidate === firstItem && viewport)
        viewport.scrollTop = 0;
      if (candidate === lastItem && viewport)
        viewport.scrollTop = viewport.scrollHeight;
      candidate === null || candidate === void 0 || candidate.focus();
      if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
        return;
    }
  }, [
    getItems,
    viewport
  ]);
  const focusSelectedItem = (0, import_react71.useCallback)(
    () => focusFirst([
      selectedItem,
      content
    ]),
    [
      focusFirst,
      selectedItem,
      content
    ]
  );
  (0, import_react71.useEffect)(() => {
    if (isPositioned)
      focusSelectedItem();
  }, [
    isPositioned,
    focusSelectedItem
  ]);
  const { onOpenChange, triggerPointerDownPosRef } = context;
  (0, import_react71.useEffect)(() => {
    if (content) {
      let pointerMoveDelta = {
        x: 0,
        y: 0
      };
      const handlePointerMove = (event) => {
        var _triggerPointerDownPo, _triggerPointerDownPo2, _triggerPointerDownPo3, _triggerPointerDownPo4;
        pointerMoveDelta = {
          x: Math.abs(Math.round(event.pageX) - ((_triggerPointerDownPo = (_triggerPointerDownPo2 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo2 === void 0 ? void 0 : _triggerPointerDownPo2.x) !== null && _triggerPointerDownPo !== void 0 ? _triggerPointerDownPo : 0)),
          y: Math.abs(Math.round(event.pageY) - ((_triggerPointerDownPo3 = (_triggerPointerDownPo4 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo4 === void 0 ? void 0 : _triggerPointerDownPo4.y) !== null && _triggerPointerDownPo3 !== void 0 ? _triggerPointerDownPo3 : 0))
        };
      };
      const handlePointerUp = (event) => {
        if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10)
          event.preventDefault();
        else if (!content.contains(event.target))
          onOpenChange(false);
        document.removeEventListener("pointermove", handlePointerMove);
        triggerPointerDownPosRef.current = null;
      };
      if (triggerPointerDownPosRef.current !== null) {
        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("pointerup", handlePointerUp, {
          capture: true,
          once: true
        });
      }
      return () => {
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerup", handlePointerUp, {
          capture: true
        });
      };
    }
  }, [
    content,
    onOpenChange,
    triggerPointerDownPosRef
  ]);
  (0, import_react71.useEffect)(() => {
    const close = () => onOpenChange(false);
    window.addEventListener("blur", close);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("blur", close);
      window.removeEventListener("resize", close);
    };
  }, [
    onOpenChange
  ]);
  const [searchRef, handleTypeaheadSearch] = $cc7e05a45900e73f$var$useTypeaheadSearch((search) => {
    const enabledItems = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = enabledItems.find(
      (item) => item.ref.current === document.activeElement
    );
    const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
    if (nextItem)
      setTimeout(
        () => nextItem.ref.current.focus()
      );
  });
  const itemRefCallback = (0, import_react71.useCallback)((node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== void 0 && context.value === value;
    if (isSelectedItem || isFirstValidItem) {
      setSelectedItem(node);
      if (isFirstValidItem)
        firstValidItemFoundRef.current = true;
    }
  }, [
    context.value
  ]);
  const handleItemLeave = (0, import_react71.useCallback)(
    () => content === null || content === void 0 ? void 0 : content.focus(),
    [
      content
    ]
  );
  const itemTextRefCallback = (0, import_react71.useCallback)((node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== void 0 && context.value === value;
    if (isSelectedItem || isFirstValidItem)
      setSelectedItemText(node);
  }, [
    context.value
  ]);
  const SelectPosition = position === "popper" ? $cc7e05a45900e73f$var$SelectPopperPosition : $cc7e05a45900e73f$var$SelectItemAlignedPosition;
  const popperContentProps = SelectPosition === $cc7e05a45900e73f$var$SelectPopperPosition ? {
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions
  } : {};
  return /* @__PURE__ */ (0, import_react71.createElement)($cc7e05a45900e73f$var$SelectContentProvider, {
    scope: __scopeSelect,
    content,
    viewport,
    onViewportChange: setViewport,
    itemRefCallback,
    selectedItem,
    onItemLeave: handleItemLeave,
    itemTextRefCallback,
    focusSelectedItem,
    selectedItemText,
    position,
    isPositioned,
    searchRef
  }, /* @__PURE__ */ (0, import_react71.createElement)(Combination_default, {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  }, /* @__PURE__ */ (0, import_react71.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    trapped: context.open,
    onMountAutoFocus: (event) => {
      event.preventDefault();
    },
    onUnmountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onCloseAutoFocus, (event) => {
      var _context$trigger;
      (_context$trigger = context.trigger) === null || _context$trigger === void 0 || _context$trigger.focus({
        preventScroll: true
      });
      event.preventDefault();
    })
  }, /* @__PURE__ */ (0, import_react71.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents: true,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: (event) => event.preventDefault(),
    onDismiss: () => context.onOpenChange(false)
  }, /* @__PURE__ */ (0, import_react71.createElement)(SelectPosition, _extends({
    role: "listbox",
    id: context.contentId,
    "data-state": context.open ? "open" : "closed",
    dir: context.dir,
    onContextMenu: (event) => event.preventDefault()
  }, contentProps, popperContentProps, {
    onPlaced: () => setIsPositioned(true),
    ref: composedRefs,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...contentProps.style
    },
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event) => {
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      if (event.key === "Tab")
        event.preventDefault();
      if (!isModifierKey && event.key.length === 1)
        handleTypeaheadSearch(event.key);
      if ([
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(event.key)) {
        const items = getItems().filter(
          (item) => !item.disabled
        );
        let candidateNodes = items.map(
          (item) => item.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(event.key))
          candidateNodes = candidateNodes.slice().reverse();
        if ([
          "ArrowUp",
          "ArrowDown"
        ].includes(event.key)) {
          const currentElement = event.target;
          const currentIndex = candidateNodes.indexOf(currentElement);
          candidateNodes = candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => focusFirst(candidateNodes)
        );
        event.preventDefault();
      }
    })
  }))))));
});
var $cc7e05a45900e73f$var$SelectItemAlignedPosition = /* @__PURE__ */ (0, import_react71.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, onPlaced, ...popperProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
  const [contentWrapper, setContentWrapper] = (0, import_react71.useState)(null);
  const [content, setContent] = (0, import_react71.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const shouldExpandOnScrollRef = (0, import_react71.useRef)(false);
  const shouldRepositionRef = (0, import_react71.useRef)(true);
  const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
  const position = (0, import_react71.useCallback)(() => {
    if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
      const triggerRect = context.trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const valueNodeRect = context.valueNode.getBoundingClientRect();
      const itemTextRect = selectedItemText.getBoundingClientRect();
      if (context.dir !== "rtl") {
        const itemTextOffset = itemTextRect.left - contentRect.left;
        const left = valueNodeRect.left - itemTextOffset;
        const leftDelta = triggerRect.left - left;
        const minContentWidth = triggerRect.width + leftDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const rightEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
        const clampedLeft = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(left, [
          $cc7e05a45900e73f$var$CONTENT_MARGIN,
          rightEdge - contentWidth
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.left = clampedLeft + "px";
      } else {
        const itemTextOffset = contentRect.right - itemTextRect.right;
        const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
        const rightDelta = window.innerWidth - triggerRect.right - right;
        const minContentWidth = triggerRect.width + rightDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const leftEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
        const clampedRight = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(right, [
          $cc7e05a45900e73f$var$CONTENT_MARGIN,
          leftEdge - contentWidth
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.right = clampedRight + "px";
      }
      const items = getItems();
      const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
      const itemsHeight = viewport.scrollHeight;
      const contentStyles = window.getComputedStyle(content);
      const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
      const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
      const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
      const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
      const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
      const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
      const viewportStyles = window.getComputedStyle(viewport);
      const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
      const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
      const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - $cc7e05a45900e73f$var$CONTENT_MARGIN;
      const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
      const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
      const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
      const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
      const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
      const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
      if (willAlignWithoutTopOverflow) {
        const isLastItem = selectedItem === items[items.length - 1].ref.current;
        contentWrapper.style.bottom = "0px";
        const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
        const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
        const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
        contentWrapper.style.height = height + "px";
      } else {
        const isFirstItem = selectedItem === items[0].ref.current;
        contentWrapper.style.top = "0px";
        const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
        const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
        contentWrapper.style.height = height + "px";
        viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
      }
      contentWrapper.style.margin = `${$cc7e05a45900e73f$var$CONTENT_MARGIN}px 0`;
      contentWrapper.style.minHeight = minContentHeight + "px";
      contentWrapper.style.maxHeight = availableHeight + "px";
      onPlaced === null || onPlaced === void 0 || onPlaced();
      requestAnimationFrame(
        () => shouldExpandOnScrollRef.current = true
      );
    }
  }, [
    getItems,
    context.trigger,
    context.valueNode,
    contentWrapper,
    content,
    viewport,
    selectedItem,
    selectedItemText,
    context.dir,
    onPlaced
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(
    () => position(),
    [
      position
    ]
  );
  const [contentZIndex, setContentZIndex] = (0, import_react71.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  const handleScrollButtonChange = (0, import_react71.useCallback)((node) => {
    if (node && shouldRepositionRef.current === true) {
      position();
      focusSelectedItem === null || focusSelectedItem === void 0 || focusSelectedItem();
      shouldRepositionRef.current = false;
    }
  }, [
    position,
    focusSelectedItem
  ]);
  return /* @__PURE__ */ (0, import_react71.createElement)($cc7e05a45900e73f$var$SelectViewportProvider, {
    scope: __scopeSelect,
    contentWrapper,
    shouldExpandOnScrollRef,
    onScrollButtonChange: handleScrollButtonChange
  }, /* @__PURE__ */ (0, import_react71.createElement)("div", {
    ref: setContentWrapper,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: contentZIndex
    }
  }, /* @__PURE__ */ (0, import_react71.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, popperProps, {
    ref: composedRefs,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...popperProps.style
    }
  }))));
});
var $cc7e05a45900e73f$var$SelectPopperPosition = /* @__PURE__ */ (0, import_react71.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, align = "start", collisionPadding = $cc7e05a45900e73f$var$CONTENT_MARGIN, ...popperProps } = props;
  const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
  return /* @__PURE__ */ (0, import_react71.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({}, popperScope, popperProps, {
    ref: forwardedRef,
    align,
    collisionPadding,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...popperProps.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
var [$cc7e05a45900e73f$var$SelectViewportProvider, $cc7e05a45900e73f$var$useSelectViewportContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, {});
var $cc7e05a45900e73f$var$GROUP_NAME = "SelectGroup";
var [$cc7e05a45900e73f$var$SelectGroupContextProvider, $cc7e05a45900e73f$var$useSelectGroupContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$GROUP_NAME);
var $cc7e05a45900e73f$var$ITEM_NAME = "SelectItem";
var [$cc7e05a45900e73f$var$SelectItemContextProvider, $cc7e05a45900e73f$var$useSelectItemContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$ITEM_NAME);
function $cc7e05a45900e73f$var$shouldShowPlaceholder(value) {
  return value === "" || value === void 0;
}
var $cc7e05a45900e73f$var$BubbleSelect = /* @__PURE__ */ (0, import_react71.forwardRef)((props, forwardedRef) => {
  const { value, ...selectProps } = props;
  const ref = (0, import_react71.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const prevValue = $010c2913dbd2fe3d$export$5cae361ad82dce8b(value);
  (0, import_react71.useEffect)(() => {
    const select = ref.current;
    const selectProto = window.HTMLSelectElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(selectProto, "value");
    const setValue = descriptor.set;
    if (prevValue !== value && setValue) {
      const event = new Event("change", {
        bubbles: true
      });
      setValue.call(select, value);
      select.dispatchEvent(event);
    }
  }, [
    prevValue,
    value
  ]);
  return /* @__PURE__ */ (0, import_react71.createElement)($ea1ef594cf570d83$export$439d29a4e110a164, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react71.createElement)("select", _extends({}, selectProps, {
    ref: composedRefs,
    defaultValue: value
  })));
});
$cc7e05a45900e73f$var$BubbleSelect.displayName = "BubbleSelect";
function $cc7e05a45900e73f$var$useTypeaheadSearch(onSearchChange) {
  const handleSearchChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onSearchChange);
  const searchRef = (0, import_react71.useRef)("");
  const timerRef = (0, import_react71.useRef)(0);
  const handleTypeaheadSearch = (0, import_react71.useCallback)((key) => {
    const search = searchRef.current + key;
    handleSearchChange(search);
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "")
        timerRef.current = window.setTimeout(
          () => updateSearch(""),
          1e3
        );
    })(search);
  }, [
    handleSearchChange
  ]);
  const resetTypeahead = (0, import_react71.useCallback)(() => {
    searchRef.current = "";
    window.clearTimeout(timerRef.current);
  }, []);
  (0, import_react71.useEffect)(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  return [
    searchRef,
    handleTypeaheadSearch,
    resetTypeahead
  ];
}
function $cc7e05a45900e73f$var$findNextItem(items, search, currentItem) {
  const isRepeated = search.length > 1 && Array.from(search).every(
    (char) => char === search[0]
  );
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
  let wrappedItems = $cc7e05a45900e73f$var$wrapArray(items, Math.max(currentItemIndex, 0));
  const excludeCurrentItem = normalizedSearch.length === 1;
  if (excludeCurrentItem)
    wrappedItems = wrappedItems.filter(
      (v2) => v2 !== currentItem
    );
  const nextItem = wrappedItems.find(
    (item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextItem !== currentItem ? nextItem : void 0;
}
function $cc7e05a45900e73f$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index2) => array[(startIndex + index2) % array.length]
  );
}
var $cc7e05a45900e73f$export$be92b6f5f03c0fe9 = $cc7e05a45900e73f$export$ef9b1a59e592288f;
var $cc7e05a45900e73f$export$4c8d1a57a761ef94 = $cc7e05a45900e73f$export$e288731fd71264f0;
var $cc7e05a45900e73f$export$602eac185826482c = $cc7e05a45900e73f$export$b2af6c9944296213;
var $cc7e05a45900e73f$export$7c6e2c02157bb7d2 = $cc7e05a45900e73f$export$c973a4b3cb86a03d;

// node_modules/@webstudio-is/sdk-components-react-radix/lib/components.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
var import_react82 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-checkbox/dist/index.mjs
var import_react72 = __toESM(require_react(), 1);
var $e698a72e93240346$var$CHECKBOX_NAME = "Checkbox";
var [$e698a72e93240346$var$createCheckboxContext, $e698a72e93240346$export$b566c4ff5488ea01] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($e698a72e93240346$var$CHECKBOX_NAME);
var [$e698a72e93240346$var$CheckboxProvider, $e698a72e93240346$var$useCheckboxContext] = $e698a72e93240346$var$createCheckboxContext($e698a72e93240346$var$CHECKBOX_NAME);
var $e698a72e93240346$export$48513f6b9f8ce62d = /* @__PURE__ */ (0, import_react72.forwardRef)((props, forwardedRef) => {
  const { __scopeCheckbox, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, ...checkboxProps } = props;
  const [button, setButton] = (0, import_react72.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = (0, import_react72.useRef)(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  const [checked = false, setChecked] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange
  });
  const initialCheckedStateRef = (0, import_react72.useRef)(checked);
  (0, import_react72.useEffect)(() => {
    const form = button === null || button === void 0 ? void 0 : button.form;
    if (form) {
      const reset = () => setChecked(initialCheckedStateRef.current);
      form.addEventListener("reset", reset);
      return () => form.removeEventListener("reset", reset);
    }
  }, [
    button,
    setChecked
  ]);
  return /* @__PURE__ */ (0, import_react72.createElement)($e698a72e93240346$var$CheckboxProvider, {
    scope: __scopeCheckbox,
    state: checked,
    disabled
  }, /* @__PURE__ */ (0, import_react72.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": $e698a72e93240346$var$isIndeterminate(checked) ? "mixed" : checked,
    "aria-required": required,
    "data-state": $e698a72e93240346$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, checkboxProps, {
    ref: composedRefs,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Enter")
        event.preventDefault();
    }),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      setChecked(
        (prevChecked) => $e698a72e93240346$var$isIndeterminate(prevChecked) ? true : !prevChecked
      );
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && /* @__PURE__ */ (0, import_react72.createElement)($e698a72e93240346$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
var $e698a72e93240346$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = (0, import_react72.useRef)(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  (0, import_react72.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      input.indeterminate = $e698a72e93240346$var$isIndeterminate(checked);
      setChecked.call(input, $e698a72e93240346$var$isIndeterminate(checked) ? false : checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return /* @__PURE__ */ (0, import_react72.createElement)("input", _extends({
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: $e698a72e93240346$var$isIndeterminate(checked) ? false : checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $e698a72e93240346$var$isIndeterminate(checked) {
  return checked === "indeterminate";
}
function $e698a72e93240346$var$getState(checked) {
  return $e698a72e93240346$var$isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
var $e698a72e93240346$export$be92b6f5f03c0fe9 = $e698a72e93240346$export$48513f6b9f8ce62d;

// node_modules/@webstudio-is/sdk-components-react-radix/lib/components.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
var import_react83 = __toESM(require_react(), 1);
var CollapsibleTrigger = (0, import_react73.forwardRef)(({ children, ...props }, ref) => {
  const firstChild = import_react73.Children.toArray(children)[0];
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)($409067139f391064$export$41fb9f06171c75f4, { asChild: true, ref, ...props, children: firstChild ?? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("button", { children: "Add button" }) });
});
var Dialog = (0, import_react74.forwardRef)((props, _ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { ...props });
});
var DialogTrigger = (0, import_react74.forwardRef)(({ children, ...props }, ref) => {
  const firstChild = import_react74.Children.toArray(children)[0];
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)($5d3850c4d0b4e6c7$export$41fb9f06171c75f4, { ref, asChild: true, ...props, children: firstChild ?? /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("button", { children: "Add button or link" }) });
});
var DialogOverlay = (0, import_react74.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)($5d3850c4d0b4e6c7$export$dad7c95542bacce0, { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, { ref, ...props }) });
});
var defaultTag5 = "h1";
var DialogTitle2 = (0, import_react74.forwardRef)(({ tag: Tag = defaultTag5, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)($5d3850c4d0b4e6c7$export$16f7638e4a34b909, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Tag, { ref, ...props, children: children ?? "Heading title you can edit" }) }));
var Popover = (0, import_react75.forwardRef)((props, _ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)($cb5cc270b50c6fcd$export$be92b6f5f03c0fe9, { ...props });
});
var PopoverTrigger = (0, import_react75.forwardRef)(({ children, ...props }, ref) => {
  const firstChild = import_react75.Children.toArray(children)[0];
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)($cb5cc270b50c6fcd$export$41fb9f06171c75f4, { asChild: true, ref, ...props, children: firstChild ?? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("button", { children: "Add button or link" }) });
});
var PopoverContent = (0, import_react75.forwardRef)(
  ({ sideOffset = 4, align = "center", hideWhenDetached = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)($cb5cc270b50c6fcd$export$602eac185826482c, { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2,
    {
      ref,
      align: "center",
      sideOffset,
      hideWhenDetached,
      ...props
    }
  ) })
);
var Tooltip = (0, import_react76.forwardRef)((props, _ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)($a093c7e1ec25a057$export$2881499e37b75b9a, { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)($a093c7e1ec25a057$export$be92b6f5f03c0fe9, { ...props }) });
});
var TooltipTrigger = (0, import_react76.forwardRef)(({ children, ...props }, ref) => {
  const firstChild = import_react76.Children.toArray(children)[0];
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)($a093c7e1ec25a057$export$41fb9f06171c75f4, { asChild: true, ref, ...props, children: firstChild ?? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("button", { children: "Add button or link" }) });
});
var TooltipContent = (0, import_react76.forwardRef)(({ sideOffset = 4, hideWhenDetached = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)($a093c7e1ec25a057$export$602eac185826482c, { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
  $a093c7e1ec25a057$export$7c6e2c02157bb7d2,
  {
    ref,
    hideWhenDetached,
    sideOffset,
    ...props
  }
) }));
var TabsTrigger = (0, import_react77.forwardRef)(({ value, ...props }, ref) => {
  const index2 = getIndexWithinAncestorFromComponentProps(props);
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)($69cb30bb0017df05$export$41fb9f06171c75f4, { ref, value: value ?? index2 ?? "", ...props });
});
var TabsContent = (0, import_react77.forwardRef)(({ value, ...props }, ref) => {
  const index2 = getIndexWithinAncestorFromComponentProps(props);
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)($69cb30bb0017df05$export$7c6e2c02157bb7d2, { ref, value: value ?? index2 ?? "", ...props });
});
var Label2 = (0, import_react78.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)($b73a6c6685e72184$export$be92b6f5f03c0fe9, { ref, ...props }));
var Accordion = (0, import_react79.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)($1bf158f521e1b1b4$export$be92b6f5f03c0fe9, { ref, type: "single", ...props });
});
var AccordionItem = (0, import_react79.forwardRef)(({ value, ...props }, ref) => {
  const index2 = getIndexWithinAncestorFromComponentProps(props);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)($1bf158f521e1b1b4$export$6d08773d2e66f8f2, { ref, value: value ?? index2 ?? "", ...props });
});
var AccordionHeader = $1bf158f521e1b1b4$export$8b251419efc915eb;
var AccordionTrigger = $1bf158f521e1b1b4$export$41fb9f06171c75f4;
var AccordionContent = $1bf158f521e1b1b4$export$7c6e2c02157bb7d2;
var NavigationMenu = (0, import_react80.forwardRef)(({ value: propsValue, ...props }, ref) => {
  const { renderer } = (0, import_react80.useContext)(ReactSdkContext);
  let value = propsValue;
  if (renderer === "canvas") {
    value = value === "" ? "-1" : value;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)($322c88a641701f3b$export$be92b6f5f03c0fe9, { ref, value, ...props });
});
var NavigationMenuItem = (0, import_react80.forwardRef)(({ value, ...props }, ref) => {
  const index2 = getIndexWithinAncestorFromComponentProps(props);
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)($322c88a641701f3b$export$6d08773d2e66f8f2, { ref, value: value ?? index2, ...props });
});
var NavigationMenuLink = (0, import_react80.forwardRef)(({ children, ...props }, ref) => {
  const firstChild = import_react80.Children.toArray(children)[0];
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)($322c88a641701f3b$export$a6c7ac8248d6e38a, { asChild: true, ref, ...props, children: firstChild ?? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("a", { children: "Add link component" }) });
});
var NavigationMenuTrigger = (0, import_react80.forwardRef)(({ children, ...props }, ref) => {
  const firstChild = import_react80.Children.toArray(children)[0];
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)($322c88a641701f3b$export$41fb9f06171c75f4, { asChild: true, ref, ...props, children: firstChild ?? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("button", { children: "Add button or link" }) });
});
var Select = (0, import_react81.forwardRef)((props, _ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)($cc7e05a45900e73f$export$be92b6f5f03c0fe9, { ...props });
});
var SelectValue = (0, import_react81.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)($cc7e05a45900e73f$export$4c8d1a57a761ef94, { ref, ...props });
});
var SelectContent = (0, import_react81.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)($cc7e05a45900e73f$export$602eac185826482c, { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)($cc7e05a45900e73f$export$7c6e2c02157bb7d2, { ref, ...props, position: "popper" }) });
});
var Checkbox2 = (0, import_react82.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)($e698a72e93240346$export$be92b6f5f03c0fe9, { ref, ...props });
});

// app/__generated__/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/__generated__/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/__generated__/_index.tsx"
  );
  import.meta.hot.lastModified = "1701239612950.3008";
}
var fontAssets = [{
  "id": "fc5457a0-9130-4f63-99c1-3cbe273d0691",
  "name": "DMSans-VariableFont_opsz_wght_024TU8xKTl_JWSQ8iEN-W.ttf",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 238984,
  "type": "font",
  "createdAt": "2023-08-30T20:58:14.976Z",
  "format": "ttf",
  "meta": {
    "family": "DM Sans",
    "variationAxes": {
      "opsz": {
        "name": "Optical size",
        "min": 9,
        "default": 9,
        "max": 40
      },
      "wght": {
        "name": "Weight",
        "min": 100,
        "default": 400,
        "max": 1e3
      }
    }
  }
}];
var imageAssets = [{
  "id": "2119a892-74b9-445f-826f-5dfd14b3d9f1",
  "name": "josh-rocklage-HAAsKeZbHAc-unsplash_NE1qfBY6TNANGiAFuXiKA.jpg",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 1074399,
  "type": "image",
  "format": "jpeg",
  "createdAt": "2023-09-18T18:23:56.511Z",
  "meta": {
    "width": 3240,
    "height": 2160
  }
}, {
  "id": "973a83e0-11b9-491a-b292-b7583c2fac66",
  "name": "rocco-dipoppa-_uDj_lyPVpA-unsplash_KeTV-4SQ04K-NYYOPSopk.jpg",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 536800,
  "type": "image",
  "format": "jpeg",
  "createdAt": "2023-08-31T19:50:19.787Z",
  "meta": {
    "width": 1920,
    "height": 1216
  }
}, {
  "id": "b96fe4c2-52d4-41a3-b196-8486d9cba1df",
  "name": "Twitter_Icon_White_BVEhCDE-LW9kXpzM-xuKP.svg",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 845,
  "type": "image",
  "format": "svg",
  "createdAt": "2023-08-31T05:27:48.409Z",
  "meta": {
    "width": 16,
    "height": 13
  }
}, {
  "id": "06432619-c391-4d15-a0e3-1cfbd5bcca9d",
  "name": "LinkedIn_Icon_White_rDiQBCYd17Isq8l8CP2Nn.svg",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 749,
  "type": "image",
  "format": "svg",
  "createdAt": "2023-08-31T05:27:48.406Z",
  "meta": {
    "width": 15,
    "height": 15
  }
}, {
  "id": "3403ce87-d9b6-4f0f-bd00-ac891f4caf2a",
  "name": "Facebook_Icon_White_GwMppwRTnN0knd6Pgzgcd.svg",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 529,
  "type": "image",
  "format": "svg",
  "createdAt": "2023-08-31T05:27:48.335Z",
  "meta": {
    "width": 9,
    "height": 18
  }
}, {
  "id": "2578e5f8-b137-4c82-a29a-20fdad5fd5e1",
  "name": "Pinterest_Icon_White_Y5L0cQG-4f3vBZY-4e2uU.svg",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 1213,
  "type": "image",
  "format": "svg",
  "createdAt": "2023-08-31T05:27:48.328Z",
  "meta": {
    "width": 13,
    "height": 17
  }
}, {
  "id": "1a440c67-b3af-4ce6-85a0-fdc0c6e6a9f2",
  "name": "leo-wieling-bG8U3kaZltE-unsplash_0XfLoiqtZtJeO11OGIl1Q.jpg",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 278983,
  "type": "image",
  "format": "jpeg",
  "createdAt": "2023-08-31T01:43:26.453Z",
  "meta": {
    "width": 1280,
    "height": 1920
  }
}, {
  "id": "bf6bd9fa-cc07-4a87-bb33-b68f0c9618bf",
  "name": "luke-thornton-JNl7o-Mj2cc-unsplash_0qWTlSv7B4rmUKvB_Y1cl.jpg",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 613792,
  "type": "image",
  "format": "jpeg",
  "createdAt": "2023-08-31T01:26:25.342Z",
  "meta": {
    "width": 1920,
    "height": 1280
  }
}, {
  "id": "4cab4c9d-3c3f-4a16-855d-bb7fb25ff0b4",
  "name": "kyle-smith-x0dtRYZovLo-unsplash_BahcweLIUAdV9LkMyFU6v.jpg",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 650871,
  "type": "image",
  "format": "jpeg",
  "createdAt": "2023-08-31T01:26:25.273Z",
  "meta": {
    "width": 1280,
    "height": 1920
  }
}, {
  "id": "e753cac6-d978-4b4c-9c52-155e2367ffae",
  "name": "alex-wong-RIo45CycGCs-unsplash_5z3vcfZKOncrqJsrUk0Dg.jpg",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 520576,
  "type": "image",
  "format": "jpeg",
  "createdAt": "2023-08-31T01:26:25.160Z",
  "meta": {
    "width": 1920,
    "height": 1280
  }
}, {
  "id": "624f0661-c4de-4504-b7c5-e534e38472b6",
  "name": "Facebook_1bZ8k5eTlmlCbZ8bVdC_D.svg",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 535,
  "type": "image",
  "format": "svg",
  "createdAt": "2023-08-30T06:01:39.102Z",
  "meta": {
    "width": 8,
    "height": 18
  }
}, {
  "id": "b7ab152f-0263-45b3-a0af-84196c2d9be6",
  "name": "Twitter_8ER4uHstrL3pVvvllcY5i.svg",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 865,
  "type": "image",
  "format": "svg",
  "createdAt": "2023-08-30T06:01:39.096Z",
  "meta": {
    "width": 16,
    "height": 13
  }
}, {
  "id": "fb7c20d8-f647-49f6-a811-a43bac5c7077",
  "name": "LinkedIn_cWCVUBxqrbsxuDSdF1gAE.svg",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 755,
  "type": "image",
  "format": "svg",
  "createdAt": "2023-08-30T06:01:39.094Z",
  "meta": {
    "width": 15,
    "height": 15
  }
}, {
  "id": "e04b2f18-eff3-43d7-a8a5-e0fe61d8f3d3",
  "name": "logo-icon-color_7lPMMn5N1_sztj7QUZvvx.svg",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 16276,
  "type": "image",
  "format": "svg",
  "createdAt": "2023-03-24T21:43:47.942Z",
  "meta": {
    "width": 280,
    "height": 211
  }
}, {
  "id": "fd5358bb-1c6a-444a-88e0-a372dd971196",
  "name": "cib-github_lGytwpLtQ6Y-OqmnrFxq2.svg",
  "description": null,
  "projectId": "3cbeaff9-b371-4122-9aeb-6e04bc3c7120",
  "size": 1458,
  "type": "image",
  "format": "svg",
  "createdAt": "2023-02-25T03:33:13.012Z",
  "meta": {
    "width": 24,
    "height": 24
  }
}];
var pageData = {
  "site": {
    "siteName": "",
    "faviconAssetId": "",
    "code": ""
  },
  "page": {
    "id": "ubi4k5x4dJzJCCchMIwtC",
    "name": "Home",
    "title": "Home",
    "meta": {},
    "rootInstanceId": "quj5c9wlKZkBNobFjf6z8",
    "path": ""
  }
};
var Page = () => {
  _s();
  let [accordionValue, set$accordionValue] = (0, import_react84.useState)("0");
  let [dialogOpen, set$dialogOpen] = (0, import_react84.useState)(false);
  let [formState, set$formState] = (0, import_react84.useState)("initial");
  let onValueChange = (value) => {
    accordionValue = value;
    set$accordionValue(accordionValue);
  };
  let onStateChange = (state) => {
    formState = state;
    set$formState(formState);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Body2, { "data-ws-id": "quj5c9wlKZkBNobFjf6z8", "data-ws-component": "Body", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Ak9ZhwbKBuzkM-OCNjcN6", "data-ws-component": "Box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "BuCPOOz5RHRFyI9WJ3J_b", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image2, { "data-ws-id": "XujQUzamIdiu6IuxbIeK2", "data-ws-component": "Image", src: "/assets/josh-rocklage-HAAsKeZbHAc-unsplash_NE1qfBY6TNANGiAFuXiKA.jpg", loading: "eager", alt: "Hero Image" }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 287,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 286,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "hCFyX9PqfZt6Y9ZoOOdKY", "data-ws-component": "Box" }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 289,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "U_qJ1KmliHkYWUhqZ1XBN", "data-ws-component": "Box" }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 290,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { "data-ws-id": "RAplALchDa3Qianckm_4Q", "data-ws-component": "Link", children: "Voiceworks Studios" }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 291,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "8KtB-gVEWANmmIUxPBkPL", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "kh3BIqzrb2WhzewNaWqo1", "data-ws-component": "Heading", tag: "h1", children: [
        "Your Voice, ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Span, { "data-ws-id": "_ymBRJeh8oenSgmwT2fzG", "data-ws-component": "Span", children: "Your Story" }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 297,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 295,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 294,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "6lDFTBHpEnn0hxQpuUCZH", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "mE2x3WDtXUT-36J_D5jsT", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "5gKfnVa_xu-1e0iFgqx4F", "data-ws-component": "Text", tag: "span", children: "Whether you're an aspiring singer, a professional speaker, or simply someone who wants to enhance their vocal prowess, we're here to guide you on a transformative journey." }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 304,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { "data-ws-id": "O1r5_luYeCOtPNIFEK9NN", "data-ws-component": "Link", href: "/#CTA", target: "_self", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bold, { "data-ws-id": "iOSrTMeBAfyfmIjrn1Et3", "data-ws-component": "Bold", children: "Get In Touch" }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 308,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 307,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 303,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 302,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 285,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "pF8PI2rO7876IBLVLx7vF", "data-ws-component": "Box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "N369L2hZXRrFUU__5MtWA", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "T_gJ-0Bvl48VdIVebrU8x", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "e7TU2w4qSVNVp3l8IgRbY", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "9ssGDknyHcMFnKc_eFGV_", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "GCo1aFQdSxeSEI6nAFOOY", "data-ws-component": "Heading", tag: "h3", children: "Vocal Recording Perfection" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 320,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "ssnIxpnRDtCCRvrwOtCLo", "data-ws-component": "Paragraph", children: "Your voice plays a critical role in creating the perfect studio sound. Elevate your studio sessions and leave your mark on every recording." }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 323,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 319,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "fUoHCVPM25odbpPQGz1bs", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "DPebGmU6obavUODqVjQee", "data-ws-component": "Heading", tag: "h3", children: "Command the Spotlight" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 328,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "wmuqOKn1vYuII2qhSxSrL", "data-ws-component": "Paragraph", children: "With our guidance, you'll gain the confidence to deliver powerful, pitch-perfect performances that resonate with every audience member." }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 331,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 327,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "hrcymtY4FVmCFvsDUOcv2", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "YZdT1L4rVaUX2dMiZncnS", "data-ws-component": "Heading", tag: "h3", children: "Shape Stories With Your Voice" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 336,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "UIhr_K8iRJ9ov4VR8GY-A", "data-ws-component": "Paragraph", children: "Our specialized training programs cater to the unique demands of audiobook narration, focusing on techniques that enhance clarity, expression, and pacing." }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 339,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 335,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 318,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 317,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "TcNmY8rBR4xvkJT-nd4Qs", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "awsBitCua5FwtdyzhSRKa", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "utZonpNqRYFjhoi10VGQf", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image2, { "data-ws-id": "DPGSl0avP2fHYAw1LyFB6", "data-ws-component": "Image", src: "/assets/luke-thornton-JNl7o-Mj2cc-unsplash_0qWTlSv7B4rmUKvB_Y1cl.jpg" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 348,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 347,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "0gX_VutVnR7M03ytW7WkD", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "PbPZ3CmOKyfN0tZeWy8aC", "data-ws-component": "Heading", tag: "h2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bold, { "data-ws-id": "ZIFKKS_VBdXSRujuiGh8d", "data-ws-component": "Bold", children: "Personalized Approach" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 352,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 351,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "J5JmNLQxWJhTv3Kqy2u6O", "data-ws-component": "Text", tag: "span", children: "Whether you're a seasoned performer or just starting to explore your vocal potential, we design a customized training program that aligns with your goals. Through one-on-one coaching and targeted exercises, we empower you to reach new levels of vocal mastery." }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 356,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 350,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 346,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "AWpAxQ3qCHTQ9j2x3Okva", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "7e2JO-ARIg23AfmgJ1Zru", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "Kv_lFT3upevBRBATvlUL-", "data-ws-component": "Heading", tag: "h2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bold, { "data-ws-id": "iiDZQF6oSX_7nZIoSqtTl", "data-ws-component": "Bold", children: "Expert Trainers" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 364,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 363,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "jXHApvxVMZmg6xIYoMq4S", "data-ws-component": "Text", tag: "span", children: "With a combined wealth of experience spanning various musical genres and professional stages, our trainers are dedicated to imparting their knowledge to aspiring vocalists like you. Their achievements include captivating performances, recording successes, and years of teaching excellence." }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 368,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 362,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "9VSZvnCFXIcaI3oH5n7GS", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image2, { "data-ws-id": "nt3DxoNzXsgWt5Q5MLJvO", "data-ws-component": "Image", src: "/assets/alex-wong-RIo45CycGCs-unsplash_5z3vcfZKOncrqJsrUk0Dg.jpg" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 373,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 372,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 361,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "3y8DXaYqQqXvySqAG04A7", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "j8dph9ajfrZo6a9usupVt", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image2, { "data-ws-id": "Gm4BITG6pc_qcL1Jmzr21", "data-ws-component": "Image", src: "/assets/kyle-smith-x0dtRYZovLo-unsplash_BahcweLIUAdV9LkMyFU6v.jpg" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 378,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 377,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "u068NZVYZURC7kmsawGm5", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "yNNVixheUhB3MOxnGANLn", "data-ws-component": "Heading", tag: "h2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bold, { "data-ws-id": "q3rwG7dT0ROElNWqJiXA9", "data-ws-component": "Bold", children: "Supportive Community" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 382,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 381,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "5nB3OdkF-vbfWzB59stAA", "data-ws-component": "Text", tag: "span", children: "When you join us, you're not just a student; you're a valued member of our creative family. Our nurturing environment fosters connections with fellow vocal enthusiasts, creating opportunities for collaboration, networking, and inspiration." }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 386,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 380,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 376,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 345,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 316,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "gZyXUo8zdHnzm5oW4kbeR", "data-ws-component": "Box" }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 393,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 315,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "iQF1WCohnQq9CUl3VqCWj", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "8SHrGh8eXtlqH97cKho1m", "data-ws-component": "Box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "5J5HwuqjiHVc25wvYGrkT", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "4lg7fqZZpwa4eHkecTjcw", "data-ws-component": "Heading", tag: "h2", children: "About us" }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 398,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "JT85HKY6uW6B1acH61ORv", "data-ws-component": "Text", tag: "span", children: "We believe that every voice has a unique story to tell. Led by a team of experienced trainers who are not only accomplished in their craft but also dedicated mentors, we provide a nurturing environment where our students can thrive." }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 401,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 397,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "PaXqprqS8ByCXwizRV4Od", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "wX7A04BxkqRa7nuhi6jsP", "data-ws-component": "Heading", tag: "h2", children: "Testimonials" }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 406,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "DGURY3yL9JBxnXNKauF3V", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "YTJiRIE6pZfRXEqCymrLB", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "6PLt8I4n97rV9cGAK3ZF_", "data-ws-component": "Heading", tag: "h3", children: " Their supportive coaching helped me overcome my stage anxiety." }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 411,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "_hjwVcLW1x21tJBBYFdkj", "data-ws-component": "Paragraph", children: "Sarah M. - Public Speaker" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 414,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 410,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "i4fopuPvu5z6wvQOzTVFG", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "2-ZXYMr3CQj8pHME1W9jT", "data-ws-component": "Heading", tag: "h3", children: "I'm consistently impressed by the level of vocal artistry they bring to the studio." }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 419,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "rG5MVEeHB2sSTw5WBwtUU", "data-ws-component": "Paragraph", children: "David L. - Music Producer" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 422,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 418,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "8scgJ7tjeRvg8HsL7g0tf", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "kZKhbVoZoo_p7nYmz2XOH", "data-ws-component": "Heading", tag: "h3", children: "From the first note to the final encore, my voice has never sounded better." }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 427,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "M0aFnOOLjQDqytJB-FHuk", "data-ws-component": "Paragraph", children: "Jake M. - Live Musician" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 430,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 426,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 409,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 405,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "SjWdUWpDIvbOdsNOEVVMI", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "B7iQFMaN4NKDxFmwA3eVn", "data-ws-component": "Heading", tag: "h2", children: "Frequently Asked Questions" }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 437,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion, { "data-ws-id": "K1c7HyKjZWGVGCW0BYXzJ", "data-ws-component": "@webstudio-is/sdk-components-react-radix:Accordion", collapsible: true, value: accordionValue, onValueChange, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionItem, { "data-ws-id": "uPWUG57LFLZmSCBm1N7H4", "data-ws-component": "@webstudio-is/sdk-components-react-radix:AccordionItem", "data-ws-index": "0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionHeader, { "data-ws-id": "uAZt4p7E9ucxE_B7sFCXi", "data-ws-component": "@webstudio-is/sdk-components-react-radix:AccordionHeader", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionTrigger, { "data-ws-id": "D49IkaUq1dnYYaPIqpXYo", "data-ws-component": "@webstudio-is/sdk-components-react-radix:AccordionTrigger", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "8xkfZoB0vZtcEXljkvtXB", "data-ws-component": "Text", children: "What is voice training?" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 444,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "CKgFdeWEBXyMauTb7Wxw9", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "EQNMAFefwFYaVpMdCZ9X7", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z"/></svg>' }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 448,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 447,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 443,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 442,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionContent, { "data-ws-id": "6owCq7PeAC6Ohy_YrvF22", "data-ws-component": "@webstudio-is/sdk-components-react-radix:AccordionContent", children: "Voice training involves techniques and exercises designed to improve vocal quality, range, control, and overall performance." }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 452,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 441,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionItem, { "data-ws-id": "KJEHkskbX0kGCW6-KBW4N", "data-ws-component": "@webstudio-is/sdk-components-react-radix:AccordionItem", "data-ws-index": "1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionHeader, { "data-ws-id": "efUEmOVUfMVfTjQhodTTT", "data-ws-component": "@webstudio-is/sdk-components-react-radix:AccordionHeader", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionTrigger, { "data-ws-id": "tlWluFnI6Pc-hFgjKt5_t", "data-ws-component": "@webstudio-is/sdk-components-react-radix:AccordionTrigger", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "r9ySRM7GtEyVU9KcFQ_xS", "data-ws-component": "Text", children: "Who can benefit from voice training?" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 459,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "PgZdF0MVHU_y-1_u-x4CM", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "Qzkn0oztbwkDZOZpevtBc", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z"/></svg>' }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 463,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 462,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 458,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 457,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionContent, { "data-ws-id": "EzUYyCixMM15zA_3vxwfF", "data-ws-component": "@webstudio-is/sdk-components-react-radix:AccordionContent", children: "Voice training benefits singers, speakers, actors, musicians, and anyone seeking to improve their vocal skills and communication abilities." }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 467,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 456,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionItem, { "data-ws-id": "vD_1br77UVY6YF04TUAmV", "data-ws-component": "@webstudio-is/sdk-components-react-radix:AccordionItem", "data-ws-index": "2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionHeader, { "data-ws-id": "VvghNyxgUcj9LHNElHhbM", "data-ws-component": "@webstudio-is/sdk-components-react-radix:AccordionHeader", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionTrigger, { "data-ws-id": "PtL3zqaK7QDD4sgkC6ubB", "data-ws-component": "@webstudio-is/sdk-components-react-radix:AccordionTrigger", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "XH62qFfFUZLVhg-pFt2Cd", "data-ws-component": "Text", children: "Do I need prior experience to join your programs?" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 474,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "XThpzvMolal7xzArU7WDM", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "61uQ8ik0-f-9Pe6i6vkgf", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z"/></svg>' }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 478,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 477,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 473,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 472,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionContent, { "data-ws-id": "IMy2UfrKi3gUJMMepyxWB", "data-ws-component": "@webstudio-is/sdk-components-react-radix:AccordionContent", children: "No, our programs cater to individuals of all skill levels, from beginners to experienced performers." }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 482,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 471,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 440,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 436,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 396,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 395,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "80aYdm6XW8phLSGTZIgFP", "data-ws-component": "Box", id: "CTA", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "MZ9sEERhOo5j-0F_BVm43", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image2, { "data-ws-id": "Uo7E2TybKmR1HZZ3WCGGg", "data-ws-component": "Image", src: "/assets/rocco-dipoppa-_uDj_lyPVpA-unsplash_KeTV-4SQ04K-NYYOPSopk.jpg" }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 492,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "fyC2jjU61cNzyTXbNMyD5", "data-ws-component": "Box" }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 493,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "tjyaEN-nIMfuMDbWs6cLU", "data-ws-component": "Box" }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 494,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 491,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "HitDST4NCN1qw7CpBk3qP", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "5cHWgHn9M32PZf3zSaCAQ", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "OatIIEsK4SosZ_hlfu2Hb", "data-ws-component": "Heading", tag: "h2", children: "Start Your Journey to Vocal Confidence" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 498,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "hSf7uY9gcLzN5YiZq0t-x", "data-ws-component": "Text", children: "Our commitment to personalized training, expert guidance, and a supportive community awaits you. Feel free to reach out with any questions, inquiries, or to schedule a trial session. " }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 501,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 497,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form2, { "data-ws-id": "IvyTfyVBtQrbGVT45xUqD", "data-ws-component": "Form", state: formState, onStateChange, action: "https://hooks.airtable.com/workflows/v1/genericWebhook/app00Nncuo9prBtDi/wflXzXJni2KJnbsXc/wtrtXAghYRDGjquKx", children: [
          (formState === "initial" || formState === "error") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "bp6FtQZ_IWrxiJTxCO6WC", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "qPeorsTCanp1xza3NpEe8", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "rEAJcLc5eGAx6H2xou2I_", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { "data-ws-id": "XgxgSGBW5HJGO22Dub0yK", "data-ws-component": "Label", children: "Name" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 509,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { "data-ws-id": "XEybdFsHRXEtV--PGClPX", "data-ws-component": "Input", name: "name", type: "text", placeholder: "nome" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 512,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 508,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "kFIXSbX5tv6t0Ftamzhu4", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { "data-ws-id": "evnC-bQ5dv1XqdQJ60XQN", "data-ws-component": "Label", children: "Email" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 515,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { "data-ws-id": "dSu9tj3-9xi3cxw6NIvb_", "data-ws-component": "Input", name: "email", type: "email", placeholder: "telefone" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 518,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 514,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ezm_4IkadZEjI-ET0enXP", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { "data-ws-id": "XdgveBZyF1MvyQ2Q2i4oZ", "data-ws-component": "Label", children: "Message" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 521,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, { "data-ws-id": "RMvX31bWJXANggaDw8V2n", "data-ws-component": "Textarea", placeholder: "mensagem", name: "message" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 524,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 520,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 507,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { "data-ws-id": "sD7ffSFISCQ7spgYT28mm", "data-ws-component": "Button", type: "submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bold, { "data-ws-id": "zycA9cG17v2J8Ur7o72HM", "data-ws-component": "Bold", children: "Submit" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 528,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 527,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 506,
            columnNumber: 66
          }, this),
          formState === "success" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "LYadCqAh0BVW8BnCjN959", "data-ws-component": "Box", children: "Thank you for getting in touch!" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 533,
            columnNumber: 39
          }, this),
          formState === "error" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Im3Qrm-fMVhkElknXOazg", "data-ws-component": "Box", children: "Sorry, something went wrong." }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 536,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 505,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 496,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 490,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "LPg-BAnYqcwFhR0DMd7Fx", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "hwjT2urzxjKC53VH3zMvG", "data-ws-component": "Box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "9VFeS98F9oX4PZoEJh8cV", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "Tp_-Kr6Nlj_XJXpnvByE6", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "8Q0MFjkJh-vVI0hdQZYjl", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { "data-ws-id": "FyT-v6nLSDC-Jx_stzBTr", "data-ws-component": "Link", target: "_blank", href: "https://webstudio.is/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "Rgqq3M76cgkuYQPFU5bWK", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9.32426C12.313 9.32426 9.32426 12.313 9.32426 16C9.32426 19.6868 12.313 22.6756 16 22.6756C19.6868 22.6756 22.6756 19.6868 22.6756 16C22.6756 12.313 19.6868 9.32426 16 9.32426ZM16 20.3333C13.6067 20.3333 11.6666 18.3932 11.6666 16C11.6666 13.6067 13.6067 11.6666 16 11.6666C18.3932 11.6666 20.3333 13.6067 20.3333 16C20.3333 18.3932 18.3932 20.3333 16 20.3333Z" fill="currentcolor"></path>\n  <path d="M22.9422 10.6203C23.8038 10.6203 24.5023 9.92187 24.5023 9.06029C24.5023 8.19872 23.8038 7.50032 22.9422 7.50032C22.0807 7.50032 21.3822 8.19872 21.3822 9.06029C21.3822 9.92187 22.0807 10.6203 22.9422 10.6203Z" fill="currentcolor"></path>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 3C12.4694 3 12.0267 3.01497 10.6401 3.07823C9.25642 3.14139 8.3114 3.36112 7.48445 3.68251C6.62959 4.01473 5.90461 4.45925 5.1819 5.18195C4.45919 5.90466 4.01468 6.62964 3.68246 7.48451C3.36107 8.3114 3.14134 9.25642 3.07818 10.6401C3.01491 12.0267 3 12.4694 3 16C3 19.5306 3.01491 19.9733 3.07818 21.3599C3.14134 22.7436 3.36107 23.6886 3.68246 24.5155C4.01468 25.3704 4.45919 26.0953 5.1819 26.8181C5.90461 27.5408 6.62959 27.9853 7.48445 28.3175C8.3114 28.6389 9.25642 28.8587 10.6401 28.9218C12.0267 28.985 12.4694 29 16 29C19.5306 29 19.9733 28.985 21.3599 28.9218C22.7436 28.8587 23.6886 28.6389 24.5155 28.3175C25.3704 27.9853 26.0953 27.5408 26.8181 26.8181C27.5408 26.0953 27.9853 25.3704 28.3175 24.5155C28.6389 23.6886 28.8587 22.7436 28.9218 21.3599C28.985 19.9733 29 19.5306 29 16C29 12.4694 28.985 12.0267 28.9218 10.6401C28.8587 9.25642 28.6389 8.3114 28.3175 7.48451C27.9853 6.62964 27.5408 5.90466 26.8181 5.18195C26.0953 4.45925 25.3704 4.01473 24.5155 3.68251C23.6886 3.36112 22.7436 3.14139 21.3599 3.07823C19.9733 3.01497 19.5306 3 16 3ZM16 5.34239C19.4711 5.34239 19.8823 5.3556 21.2531 5.41814C22.5206 5.47599 23.2089 5.68777 23.667 5.86575C24.2738 6.10158 24.7069 6.38334 25.1618 6.83822C25.6167 7.29311 25.8984 7.72622 26.1342 8.33297C26.3123 8.79106 26.5241 9.4794 26.5819 10.7469C26.6444 12.1177 26.6577 12.5289 26.6577 16C26.6577 19.4711 26.6444 19.8823 26.5819 21.2531C26.5241 22.5206 26.3123 23.2089 26.1342 23.667C25.8984 24.2738 25.6167 24.7069 25.1618 25.1618C24.7069 25.6167 24.2738 25.8984 23.667 26.1342C23.2089 26.3123 22.5206 26.5241 21.2531 26.5819C19.8825 26.6444 19.4714 26.6577 16 26.6577C12.5286 26.6577 12.1175 26.6444 10.7469 26.5819C9.4794 26.5241 8.79106 26.3123 8.33297 26.1342C7.72617 25.8984 7.29311 25.6167 6.83817 25.1618C6.38329 24.7069 6.10153 24.2738 5.86575 23.667C5.68772 23.2089 5.47594 22.5206 5.41809 21.2531C5.35555 19.8823 5.34234 19.4711 5.34234 16C5.34234 12.5289 5.35555 12.1177 5.41809 10.7469C5.47594 9.4794 5.68772 8.79106 5.86575 8.33297C6.10153 7.72622 6.38329 7.29311 6.83817 6.83822C7.29311 6.38334 7.72617 6.10158 8.33297 5.86575C8.79106 5.68777 9.4794 5.47599 10.7469 5.41814C12.1177 5.3556 12.5289 5.34239 16 5.34239Z" fill="currentcolor"></path>\n</svg>\n' }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 548,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 547,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 546,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 545,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "1stvqn_URUxBfuAYny_6T", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "V__dGEzfKk2gxPcXttGk7", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { "data-ws-id": "5gU7J6v9W1gJ2xEf1vi7V", "data-ws-component": "Link", target: "_blank", href: "https://webstudio.is/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "iwC3fh8QmiifAx0IRPE-2", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none">\n  <path d="M26.9055 6.45923C24.8411 5.5141 22.6617 4.8436 20.4232 4.46484C20.1168 5.01247 19.8396 5.5759 19.5928 6.15278C17.2082 5.79345 14.7833 5.79345 12.3987 6.15278C12.1517 5.57596 11.8745 5.01253 11.5683 4.46484C9.32824 4.8468 7.14745 5.51889 5.08099 6.46417C0.978546 12.5338 -0.133562 18.4527 0.422492 24.2876C2.82499 26.0626 5.51407 27.4126 8.37286 28.2788C9.01658 27.413 9.58618 26.4945 10.0756 25.5331C9.14599 25.1859 8.24865 24.7575 7.39418 24.253C7.61907 24.0898 7.83905 23.9218 8.05159 23.7587C10.538 24.928 13.2518 25.5342 15.9994 25.5342C18.7471 25.5342 21.4609 24.928 23.9473 23.7587C24.1623 23.9342 24.3822 24.1022 24.6047 24.253C23.7485 24.7584 22.8496 25.1875 21.9183 25.5356C22.4072 26.4965 22.9768 27.4143 23.6211 28.2788C26.4823 27.4161 29.1735 26.0668 31.5764 24.29C32.2288 17.5234 30.4618 11.659 26.9055 6.45923ZM10.7799 20.6992C9.23038 20.6992 7.95023 19.293 7.95023 17.563C7.95023 15.833 9.18588 14.4145 10.775 14.4145C12.3641 14.4145 13.6343 15.833 13.6072 17.563C13.58 19.293 12.3591 20.6992 10.7799 20.6992ZM21.2189 20.6992C19.6669 20.6992 18.3917 19.293 18.3917 17.563C18.3917 15.833 19.6274 14.4145 21.2189 14.4145C22.8104 14.4145 24.0709 15.833 24.0437 17.563C24.0165 19.293 22.7981 20.6992 21.2189 20.6992Z" fill="currentcolor\n"></path>\n</svg>' }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 555,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 554,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 553,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 552,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "mwXOl68Y2paUTcxaBZL5j", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "3jrC23nBls-CM78bjn-Dl", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { "data-ws-id": "jtzW3xMWxlp1BN8bObwp9", "data-ws-component": "Link", target: "_blank", href: "https://webstudio.is/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "oFrcr5Qzs101Q1aHxu5wB", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.19097 9.38193C7.96372 9.38193 9.38193 7.96372 9.38193 6.19097C9.38193 4.41821 7.96372 3 6.19097 3C4.41821 3 3 4.41821 3 6.19097C3 7.96372 4.41821 9.38193 6.19097 9.38193ZM8.79225 11.6267H3.47397V28.9997H8.79225V11.6267ZM20.7266 16.0003C18.5993 16.0003 17.4174 17.4186 17.4174 19.9004C17.4174 22.5005 17.4174 29.0006 17.5356 29.0006H12.3355V11.6275H17.5356V13.9912C17.5356 13.9912 19.072 11.1548 22.7357 11.1548C26.3994 11.1548 28.9994 13.4003 28.9994 18.0095V29.0006H23.6812V19.9004C23.6812 17.4186 22.7357 16.0003 20.7266 16.0003Z" fill="currentcolor"></path>\n</svg>' }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 562,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 561,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 560,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 559,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "LPdhoZ11veTLM6TZNhMBf", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "N8xvoUUMU4iEZhTZ_YStb", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { "data-ws-id": "6PbVZPW_OOpYEIAUQXWbi", "data-ws-component": "Link", target: "_blank", href: "https://webstudio.is/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "QTJJIkJHZRch3gjMePDDN", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none">\n  <path d="M24.0516 3.3457H28.3452L18.9651 14.0671L30 28.6564H21.3598L14.5924 19.8081L6.84902 28.6564H2.55291L12.5858 17.1887L2 3.3457H10.8596L16.9767 11.4335L24.0516 3.3457ZM22.5448 26.0864H24.9238L9.56687 5.78073H7.01386L22.5448 26.0864Z" fill="currentcolor\n"></path>\n</svg>' }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 569,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 568,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 567,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 566,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "EPSXB4S3AnsmaPVc5pJDG", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "iaqPGmCuZsh9y6qNU9KNb", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { "data-ws-id": "pPg-kjiSnu1dxt14b10E-", "data-ws-component": "Link", target: "_blank", href: "https://webstudio.is/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "ymq07x9rzHp-WhdBL64nv", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none">\n  <path d="M13.0755 28H17.8395V15.9551H21.1654L21.5249 11.9101H17.8395C17.8395 11.9101 17.8395 10.382 17.8395 9.57303C17.8395 8.58427 18.0193 8.22472 18.9182 8.22472C19.6373 8.22472 21.5249 8.22472 21.5249 8.22472V4C21.5249 4 18.7384 4 18.1991 4C14.6036 4 12.9856 5.61798 12.9856 8.58427C12.9856 11.191 12.9856 11.8202 12.9856 11.8202H10.4688V15.8652H12.9856V28H13.0755Z" fill="currentcolor"></path>\n</svg>' }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 576,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 575,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 574,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 573,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "e_Waz5Ltf6pKiStKI_Fte", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "DB63_vpXUbIa1HEgVopI6", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { "data-ws-id": "_pjjt_K9DkY5x8AicXQPj", "data-ws-component": "Link", target: "_blank", href: "https://webstudio.is/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "doFh1VNa7tD8DiHYpBJYl", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none">\n  <path d="M31.281 8.28904C31.9488 10.7806 31.9488 15.979 31.9488 15.979C31.9488 15.979 31.9488 21.1774 31.281 23.6687C30.9136 25.0433 29.8311 26.126 28.4565 26.4934C25.9648 27.1608 15.9743 27.1608 15.9743 27.1608C15.9743 27.1608 5.98369 27.1608 3.49191 26.4934C2.11755 26.126 1.03486 25.0433 0.667456 23.6687C0 21.1774 0 15.979 0 15.979C0 15.979 0 10.7806 0.667456 8.28904C1.03486 6.91443 2.11755 5.83198 3.49191 5.46458C5.98369 4.79688 15.9743 4.79688 15.9743 4.79688C15.9743 4.79688 25.9648 4.79688 28.4565 5.46458C29.8311 5.83198 30.9136 6.91443 31.281 8.28904ZM12.7792 20.7714L21.0795 15.979L12.7792 11.1867V20.7714Z" fill="currentcolor\n"></path>\n</svg>' }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 583,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 582,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 581,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 580,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "_abmI1DubQp-nr2qRiGFn", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "W2g-yNwK4cOqkj-wQ_Hs5", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { "data-ws-id": "u6F9s3Un8S0_Uh1A8E9SZ", "data-ws-component": "Link", target: "_blank", href: "https://webstudio.is/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "AmaHiHJnHXWD5WMKCLQHs", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none">\n  <path d="M9.10234 17.7908C9.39008 17.8867 9.77372 17.7908 9.86963 17.4072C9.96555 17.1194 10.0615 16.544 10.1574 16.2562C10.2533 15.8726 10.2533 15.7767 9.96555 15.4889C9.39008 14.8176 9.00643 13.9544 9.00643 12.7075C9.00643 9.06287 11.692 5.80188 16.1039 5.80188C19.9403 5.80188 22.0504 8.19967 22.0504 11.2688C22.0504 15.393 20.2281 18.9418 17.4466 18.9418C15.9121 18.9418 14.857 17.6949 15.1448 16.1603C15.6243 14.338 16.3916 12.4198 16.3916 11.077C16.3916 9.92607 15.7202 8.96696 14.4734 8.96696C12.9388 8.96696 11.692 10.5975 11.692 12.7075C11.692 14.0503 12.1715 15.0094 12.1715 15.0094C12.1715 15.0094 10.6369 21.6273 10.3492 22.8741C9.77372 25.176 10.2533 28.0534 10.3492 28.3411C10.3492 28.5329 10.6369 28.5329 10.7328 28.437C10.8288 28.2452 12.747 26.0392 13.3225 23.7373C13.5143 23.066 14.3775 19.805 14.3775 19.805C14.857 20.7641 16.2957 21.6273 17.9262 21.6273C22.53 21.6273 25.695 17.4072 25.695 11.7484C25.695 7.52829 22.0504 3.5 16.5834 3.5C9.77372 3.5 6.32091 8.39149 6.32091 12.5157C6.12909 14.8176 7.0882 17.0235 9.10234 17.7908Z" fill="currentcolor"></path>\n</svg>' }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 590,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 589,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 588,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 587,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "YEYaj0_f_4uUyqL8sDKWu", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "vt2y9hNBQ-KXLTFaWun-S", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { "data-ws-id": "Sh_TpCT5uCm-Bz2DWmZku", "data-ws-component": "Link", target: "_blank", href: "https://webstudio.is/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "aRUqZA4U2NkHMnR3HowhV", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none">\n  <path d="M13.75 16H18.0002C18.597 16 19.1693 15.7629 19.5912 15.341C20.0132 14.919 20.2502 14.3467 20.2502 13.75C20.2502 13.1533 20.0132 12.581 19.5912 12.159C19.1693 11.7371 18.597 11.5 18.0002 11.5H13.75V16Z" fill="currentcolor\n"></path>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 31C24.2845 31 31 24.2845 31 16C31 7.7155 24.2845 1 16 1C7.7155 1 1 7.7155 1 16C1 24.2845 7.7155 31 16 31ZM10.75 8.5H18.0002C19.3926 8.5 20.728 9.05312 21.7126 10.0377C22.6971 11.0223 23.2502 12.3576 23.2502 13.75C23.2502 15.1424 22.6971 16.4777 21.7126 17.4623C20.728 18.4469 19.3926 19 18.0002 19H13.75V23.5H10.75V8.5Z" fill="currentcolor\n"></path>\n</svg>' }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 597,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 596,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 595,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 594,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 544,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "Rw7rQWN8k7kOMitZGqprI", "data-ws-component": "Text", children: "\xA92023 Voiceworks Studios. All rights reserved. Created with Webstudio" }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 602,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 543,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 542,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "iPJFBZp1Rc0vgcr9oEhHN", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "TpTp2RjbCtW5ofWZSiagR", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image2, { "data-ws-id": "xP5kvTqG1Ud1udrWZC0cD", "data-ws-component": "Image", src: "/assets/logo-icon-color_7lPMMn5N1_sztj7QUZvvx.svg", alt: "", loading: "eager", "aria-hidden": true }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 610,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "dt6LFeOnmEKrCnCGPuGeB", "data-ws-component": "Text", children: "Built with Webstudio" }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 611,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 609,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 608,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 607,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/__generated__/_index.tsx",
    lineNumber: 284,
    columnNumber: 10
  }, this);
};
_s(Page, "rX1DgUH0IUdlEIZ6zUuKnLWpXIw=");
_c = Page;
var pagesPaths = /* @__PURE__ */ new Set([""]);
var _c;
$RefreshReg$(_c, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/__generated__/index.css
var generated_default = "/build/_assets/index-DG6IQRGR.css";

// app/constants.mjs
var assetBaseUrl = "/assets/";
var imageBaseUrl = "/assets/";
var imageLoader = (props) => {
  if (true) {
    return imageBaseUrl + props.src;
  }
  if (props.format === "raw") {
    return imageBaseUrl + props.src;
  }
  return "/_vercel/image?url=" + encodeURIComponent(imageBaseUrl + props.src) + "&w=" + props.width + "&q=" + props.quality;
};

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
}
var meta = ({
  data
}) => {
  const {
    page,
    site
  } = pageData;
  const metas = [];
  if (data?.url) {
    metas.push({
      property: "og:url",
      content: data.url
    });
  }
  if (page.title) {
    metas.push({
      title: page.title
    });
    metas.push({
      property: "og:title",
      content: page.title
    });
  }
  metas.push({
    property: "og:type",
    content: "website"
  });
  const origin = `https://${data?.host}`;
  if (site?.siteName) {
    metas.push({
      property: "og:site_name",
      content: site.siteName
    });
    metas.push({
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: site.siteName,
        url: origin
      }
    });
  }
  if (page.meta.excludePageFromSearch || data?.excludeFromSearch) {
    metas.push({
      name: "robots",
      content: "noindex, nofollow"
    });
  }
  if (page.meta.description) {
    metas.push({
      name: "description",
      content: page.meta.description
    });
    metas.push({
      property: "og:description",
      content: page.meta.description
    });
  }
  if (page.meta.socialImageAssetId) {
    const imageAsset = imageAssets.find((asset) => asset.id === page.meta.socialImageAssetId);
    if (imageAsset) {
      metas.push({
        property: "og:image",
        content: `https://${data?.host}${imageLoader({
          src: imageAsset.name,
          // Do not transform social image (not enough information do we need to do this)
          format: "raw"
        })}`
      });
    }
  }
  for (const customMeta of page.meta.custom ?? []) {
    if (customMeta.property.trim().length === 0) {
      continue;
    }
    metas.push(customMeta);
  }
  return metas;
};
var links = () => {
  const result = [];
  result.push({
    rel: "stylesheet",
    href: generated_default
  });
  const {
    site
  } = pageData;
  if (site?.faviconAssetId) {
    const imageAsset = imageAssets.find((asset) => asset.id === site.faviconAssetId);
    if (imageAsset) {
      result.push({
        rel: "icon",
        href: imageLoader({
          src: imageAsset.name,
          width: 128,
          quality: 100,
          format: "auto"
        }),
        type: void 0
      });
    }
  } else {
    result.push({
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon"
    });
    result.push({
      rel: "shortcut icon",
      href: "/favicon.ico",
      type: "image/x-icon"
    });
  }
  for (const asset of fontAssets) {
    if (asset.type === "font") {
      result.push({
        rel: "preload",
        href: assetBaseUrl + asset.name,
        as: "font",
        crossOrigin: "anonymous"
        // @todo add mimeType
        // type: asset.mimeType,
      });
    }
  }
  return result;
};
var Outlet = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ReactSdkContext.Provider, { value: {
    imageLoader,
    assetBaseUrl,
    imageBaseUrl,
    pagesPaths
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Page, {}, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 268,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 261,
    columnNumber: 10
  }, this);
};
_c2 = Outlet;
var index_default = Outlet;
var _c2;
$RefreshReg$(_c2, "Outlet");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  index_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_index-DBYLOLAZ.js.map
