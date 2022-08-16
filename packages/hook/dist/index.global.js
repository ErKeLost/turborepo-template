"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.esm-bundler.js
  var shared_esm_bundler_exports = {};
  __export(shared_esm_bundler_exports, {
    EMPTY_ARR: () => EMPTY_ARR,
    EMPTY_OBJ: () => EMPTY_OBJ,
    NO: () => NO,
    NOOP: () => NOOP,
    PatchFlagNames: () => PatchFlagNames,
    camelize: () => camelize,
    capitalize: () => capitalize,
    def: () => def,
    escapeHtml: () => escapeHtml,
    escapeHtmlComment: () => escapeHtmlComment,
    extend: () => extend,
    genPropsAccessExp: () => genPropsAccessExp,
    generateCodeFrame: () => generateCodeFrame,
    getGlobalThis: () => getGlobalThis,
    hasChanged: () => hasChanged,
    hasOwn: () => hasOwn,
    hyphenate: () => hyphenate,
    includeBooleanAttr: () => includeBooleanAttr,
    invokeArrayFns: () => invokeArrayFns,
    isArray: () => isArray,
    isBooleanAttr: () => isBooleanAttr,
    isBuiltInDirective: () => isBuiltInDirective,
    isDate: () => isDate,
    isFunction: () => isFunction,
    isGloballyWhitelisted: () => isGloballyWhitelisted,
    isHTMLTag: () => isHTMLTag,
    isIntegerKey: () => isIntegerKey,
    isKnownHtmlAttr: () => isKnownHtmlAttr,
    isKnownSvgAttr: () => isKnownSvgAttr,
    isMap: () => isMap,
    isModelListener: () => isModelListener,
    isNoUnitNumericStyleProp: () => isNoUnitNumericStyleProp,
    isObject: () => isObject,
    isOn: () => isOn,
    isPlainObject: () => isPlainObject,
    isPromise: () => isPromise,
    isReservedProp: () => isReservedProp,
    isSSRSafeAttrName: () => isSSRSafeAttrName,
    isSVGTag: () => isSVGTag,
    isSet: () => isSet,
    isSpecialBooleanAttr: () => isSpecialBooleanAttr,
    isString: () => isString,
    isSymbol: () => isSymbol,
    isVoidTag: () => isVoidTag,
    looseEqual: () => looseEqual,
    looseIndexOf: () => looseIndexOf,
    makeMap: () => makeMap,
    normalizeClass: () => normalizeClass,
    normalizeProps: () => normalizeProps,
    normalizeStyle: () => normalizeStyle,
    objectToString: () => objectToString,
    parseStringStyle: () => parseStringStyle,
    propsToAttrMap: () => propsToAttrMap,
    remove: () => remove,
    slotFlagsText: () => slotFlagsText,
    stringifyStyle: () => stringifyStyle,
    toDisplayString: () => toDisplayString,
    toHandlerKey: () => toHandlerKey,
    toNumber: () => toNumber,
    toRawType: () => toRawType,
    toTypeString: () => toTypeString
  });
  function makeMap(str, expectsLowerCase) {
    const map2 = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map2[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map2[val.toLowerCase()] : (val) => !!map2[val];
  }
  function generateCodeFrame(source, start = 0, end = source.length) {
    let lines = source.split(/(\r?\n)/);
    const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
    lines = lines.filter((_, idx) => idx % 2 === 0);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
      if (count >= start) {
        for (let j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length)
            continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
          const lineLength = lines[j].length;
          const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
          if (j === i) {
            const pad = start - (count - (lineLength + newLineSeqLength));
            const length = Math.max(1, end > count ? lineLength - pad : end - start);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + newLineSeqLength;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  function includeBooleanAttr(value) {
    return !!value || value === "";
  }
  function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
      return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
      console.error(`unsafe attribute name: ${name}`);
    }
    return attrValidationCache[name] = !isUnsafe;
  }
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isString(value)) {
      return value;
    } else if (isObject(value)) {
      return value;
    }
  }
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function stringifyStyle(styles) {
    let ret = "";
    if (!styles || isString(styles)) {
      return ret;
    }
    for (const key in styles) {
      const value = styles[key];
      const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
      if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
        ret += `${normalizedKey}:${value};`;
      }
    }
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  function normalizeProps(props) {
    if (!props)
      return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (style) {
      props.style = normalizeStyle(style);
    }
    return props;
  }
  function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) {
      return str;
    }
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 34:
          escaped = "&quot;";
          break;
        case 38:
          escaped = "&amp;";
          break;
        case 39:
          escaped = "&#39;";
          break;
        case 60:
          escaped = "&lt;";
          break;
        case 62:
          escaped = "&gt;";
          break;
        default:
          continue;
      }
      if (lastIndex !== index) {
        html += str.slice(lastIndex, index);
      }
      lastIndex = index + 1;
      html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
  }
  function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
  }
  function looseCompareArrays(a, b) {
    if (a.length !== b.length)
      return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
      equal = looseEqual(a[i], b[i]);
    }
    return equal;
  }
  function looseEqual(a, b) {
    if (a === b)
      return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) {
      return a === b;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }
      const aKeysCount = Object.keys(a).length;
      const bKeysCount = Object.keys(b).length;
      if (aKeysCount !== bKeysCount) {
        return false;
      }
      for (const key in a) {
        const aHasKey = a.hasOwnProperty(key);
        const bHasKey = b.hasOwnProperty(key);
        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
          return false;
        }
      }
    }
    return String(a) === String(b);
  }
  function looseIndexOf(arr, val) {
    return arr.findIndex((item) => looseEqual(item, val));
  }
  function genPropsAccessExp(name) {
    return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
  }
  var PatchFlagNames, slotFlagsText, GLOBALS_WHITE_LISTED, isGloballyWhitelisted, range, specialBooleanAttrs, isSpecialBooleanAttr, isBooleanAttr, unsafeAttrCharRE, attrValidationCache, propsToAttrMap, isNoUnitNumericStyleProp, isKnownHtmlAttr, isKnownSvgAttr, listDelimiterRE, propertyDelimiterRE, HTML_TAGS, SVG_TAGS, VOID_TAGS, isHTMLTag, isSVGTag, isVoidTag, escapeRE, commentStripRE, toDisplayString, replacer, EMPTY_OBJ, EMPTY_ARR, NOOP, NO, onRE, isOn, isModelListener, extend, remove, hasOwnProperty, hasOwn, isArray, isMap, isSet, isDate, isFunction, isString, isSymbol, isObject, isPromise, objectToString, toTypeString, toRawType, isPlainObject, isIntegerKey, isReservedProp, isBuiltInDirective, cacheStringFunction, camelizeRE, camelize, hyphenateRE, hyphenate, capitalize, toHandlerKey, hasChanged, invokeArrayFns, def, toNumber, _globalThis, getGlobalThis, identRE;
  var init_shared_esm_bundler = __esm({
    "../../node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.esm-bundler.js"() {
      PatchFlagNames = {
        [1]: `TEXT`,
        [2]: `CLASS`,
        [4]: `STYLE`,
        [8]: `PROPS`,
        [16]: `FULL_PROPS`,
        [32]: `HYDRATE_EVENTS`,
        [64]: `STABLE_FRAGMENT`,
        [128]: `KEYED_FRAGMENT`,
        [256]: `UNKEYED_FRAGMENT`,
        [512]: `NEED_PATCH`,
        [1024]: `DYNAMIC_SLOTS`,
        [2048]: `DEV_ROOT_FRAGMENT`,
        [-1]: `HOISTED`,
        [-2]: `BAIL`
      };
      slotFlagsText = {
        [1]: "STABLE",
        [2]: "DYNAMIC",
        [3]: "FORWARDED"
      };
      GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
      isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
      range = 2;
      specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
      isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
      isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
      unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
      attrValidationCache = {};
      propsToAttrMap = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv"
      };
      isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
      isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
      isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
      listDelimiterRE = /;(?![^(]*\))/g;
      propertyDelimiterRE = /:(.+)/;
      HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
      SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
      VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
      isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
      isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
      isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
      escapeRE = /["'&<>]/;
      commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
      toDisplayString = (val) => {
        return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
      };
      replacer = (_key, val) => {
        if (val && val.__v_isRef) {
          return replacer(_key, val.value);
        } else if (isMap(val)) {
          return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
              entries[`${key} =>`] = val2;
              return entries;
            }, {})
          };
        } else if (isSet(val)) {
          return {
            [`Set(${val.size})`]: [...val.values()]
          };
        } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
          return String(val);
        }
        return val;
      };
      EMPTY_OBJ = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
      EMPTY_ARR = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
      NOOP = () => {
      };
      NO = () => false;
      onRE = /^on[^a-z]/;
      isOn = (key) => onRE.test(key);
      isModelListener = (key) => key.startsWith("onUpdate:");
      extend = Object.assign;
      remove = (arr, el) => {
        const i = arr.indexOf(el);
        if (i > -1) {
          arr.splice(i, 1);
        }
      };
      hasOwnProperty = Object.prototype.hasOwnProperty;
      hasOwn = (val, key) => hasOwnProperty.call(val, key);
      isArray = Array.isArray;
      isMap = (val) => toTypeString(val) === "[object Map]";
      isSet = (val) => toTypeString(val) === "[object Set]";
      isDate = (val) => toTypeString(val) === "[object Date]";
      isFunction = (val) => typeof val === "function";
      isString = (val) => typeof val === "string";
      isSymbol = (val) => typeof val === "symbol";
      isObject = (val) => val !== null && typeof val === "object";
      isPromise = (val) => {
        return isObject(val) && isFunction(val.then) && isFunction(val.catch);
      };
      objectToString = Object.prototype.toString;
      toTypeString = (value) => objectToString.call(value);
      toRawType = (value) => {
        return toTypeString(value).slice(8, -1);
      };
      isPlainObject = (val) => toTypeString(val) === "[object Object]";
      isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
      isReservedProp = /* @__PURE__ */ makeMap(
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
      );
      isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
      cacheStringFunction = (fn) => {
        const cache = /* @__PURE__ */ Object.create(null);
        return (str) => {
          const hit = cache[str];
          return hit || (cache[str] = fn(str));
        };
      };
      camelizeRE = /-(\w)/g;
      camelize = cacheStringFunction((str) => {
        return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
      });
      hyphenateRE = /\B([A-Z])/g;
      hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
      capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
      toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
      hasChanged = (value, oldValue) => !Object.is(value, oldValue);
      invokeArrayFns = (fns, arg) => {
        for (let i = 0; i < fns.length; i++) {
          fns[i](arg);
        }
      };
      def = (obj, key, value) => {
        Object.defineProperty(obj, key, {
          configurable: true,
          enumerable: false,
          value
        });
      };
      toNumber = (val) => {
        const n = parseFloat(val);
        return isNaN(n) ? val : n;
      };
      getGlobalThis = () => {
        return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      };
      identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
    }
  });

  // ../../node_modules/.pnpm/@vue+compiler-core@3.2.37/node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js
  function defaultOnError(error) {
    throw error;
  }
  function defaultOnWarn(msg) {
    process.env.NODE_ENV !== "production" && console.warn(`[Vue warn] ${msg.message}`);
  }
  function createCompilerError(code, loc, messages, additionalMessage) {
    const msg = process.env.NODE_ENV !== "production" || false ? (messages || errorMessages)[code] + (additionalMessage || ``) : code;
    const error = new SyntaxError(String(msg));
    error.code = code;
    error.loc = loc;
    return error;
  }
  function registerRuntimeHelpers(helpers) {
    Object.getOwnPropertySymbols(helpers).forEach((s) => {
      helperNameMap[s] = helpers[s];
    });
  }
  function createRoot(children, loc = locStub) {
    return {
      type: 0,
      children,
      helpers: [],
      components: [],
      directives: [],
      hoists: [],
      imports: [],
      cached: 0,
      temps: 0,
      codegenNode: void 0,
      loc
    };
  }
  function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent2 = false, loc = locStub) {
    if (context) {
      if (isBlock) {
        context.helper(OPEN_BLOCK);
        context.helper(getVNodeBlockHelper(context.inSSR, isComponent2));
      } else {
        context.helper(getVNodeHelper(context.inSSR, isComponent2));
      }
      if (directives) {
        context.helper(WITH_DIRECTIVES);
      }
    }
    return {
      type: 13,
      tag,
      props,
      children,
      patchFlag,
      dynamicProps,
      directives,
      isBlock,
      disableTracking,
      isComponent: isComponent2,
      loc
    };
  }
  function createArrayExpression(elements, loc = locStub) {
    return {
      type: 17,
      loc,
      elements
    };
  }
  function createObjectExpression(properties, loc = locStub) {
    return {
      type: 15,
      loc,
      properties
    };
  }
  function createObjectProperty(key, value) {
    return {
      type: 16,
      loc: locStub,
      key: isString(key) ? createSimpleExpression(key, true) : key,
      value
    };
  }
  function createSimpleExpression(content, isStatic = false, loc = locStub, constType = 0) {
    return {
      type: 4,
      loc,
      content,
      isStatic,
      constType: isStatic ? 3 : constType
    };
  }
  function createInterpolation(content, loc) {
    return {
      type: 5,
      loc,
      content: isString(content) ? createSimpleExpression(content, false, loc) : content
    };
  }
  function createCompoundExpression(children, loc = locStub) {
    return {
      type: 8,
      loc,
      children
    };
  }
  function createCallExpression(callee, args = [], loc = locStub) {
    return {
      type: 14,
      loc,
      callee,
      arguments: args
    };
  }
  function createFunctionExpression(params, returns = void 0, newline = false, isSlot = false, loc = locStub) {
    return {
      type: 18,
      params,
      returns,
      newline,
      isSlot,
      loc
    };
  }
  function createConditionalExpression(test, consequent, alternate, newline = true) {
    return {
      type: 19,
      test,
      consequent,
      alternate,
      newline,
      loc: locStub
    };
  }
  function createCacheExpression(index, value, isVNode2 = false) {
    return {
      type: 20,
      index,
      value,
      isVNode: isVNode2,
      loc: locStub
    };
  }
  function createBlockStatement(body) {
    return {
      type: 21,
      body,
      loc: locStub
    };
  }
  function createTemplateLiteral(elements) {
    return {
      type: 22,
      elements,
      loc: locStub
    };
  }
  function createIfStatement(test, consequent, alternate) {
    return {
      type: 23,
      test,
      consequent,
      alternate,
      loc: locStub
    };
  }
  function createAssignmentExpression(left, right) {
    return {
      type: 24,
      left,
      right,
      loc: locStub
    };
  }
  function createSequenceExpression(expressions) {
    return {
      type: 25,
      expressions,
      loc: locStub
    };
  }
  function createReturnStatement(returns) {
    return {
      type: 26,
      returns,
      loc: locStub
    };
  }
  function isCoreComponent(tag) {
    if (isBuiltInType(tag, "Teleport")) {
      return TELEPORT;
    } else if (isBuiltInType(tag, "Suspense")) {
      return SUSPENSE;
    } else if (isBuiltInType(tag, "KeepAlive")) {
      return KEEP_ALIVE;
    } else if (isBuiltInType(tag, "BaseTransition")) {
      return BASE_TRANSITION;
    }
  }
  function getInnerRange(loc, offset, length) {
    const source = loc.source.slice(offset, offset + length);
    const newLoc = {
      source,
      start: advancePositionWithClone(loc.start, loc.source, offset),
      end: loc.end
    };
    if (length != null) {
      newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
    }
    return newLoc;
  }
  function advancePositionWithClone(pos, source, numberOfCharacters = source.length) {
    return advancePositionWithMutation(extend({}, pos), source, numberOfCharacters);
  }
  function advancePositionWithMutation(pos, source, numberOfCharacters = source.length) {
    let linesCount = 0;
    let lastNewLinePos = -1;
    for (let i = 0; i < numberOfCharacters; i++) {
      if (source.charCodeAt(i) === 10) {
        linesCount++;
        lastNewLinePos = i;
      }
    }
    pos.offset += numberOfCharacters;
    pos.line += linesCount;
    pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
    return pos;
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error(msg || `unexpected compiler condition`);
    }
  }
  function findDir(node, name, allowEmpty = false) {
    for (let i = 0; i < node.props.length; i++) {
      const p2 = node.props[i];
      if (p2.type === 7 && (allowEmpty || p2.exp) && (isString(name) ? p2.name === name : name.test(p2.name))) {
        return p2;
      }
    }
  }
  function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
    for (let i = 0; i < node.props.length; i++) {
      const p2 = node.props[i];
      if (p2.type === 6) {
        if (dynamicOnly)
          continue;
        if (p2.name === name && (p2.value || allowEmpty)) {
          return p2;
        }
      } else if (p2.name === "bind" && (p2.exp || allowEmpty) && isStaticArgOf(p2.arg, name)) {
        return p2;
      }
    }
  }
  function isStaticArgOf(arg, name) {
    return !!(arg && isStaticExp(arg) && arg.content === name);
  }
  function hasDynamicKeyVBind(node) {
    return node.props.some(
      (p2) => p2.type === 7 && p2.name === "bind" && (!p2.arg || p2.arg.type !== 4 || !p2.arg.isStatic)
    );
  }
  function isText(node) {
    return node.type === 5 || node.type === 2;
  }
  function isVSlot(p2) {
    return p2.type === 7 && p2.name === "slot";
  }
  function isTemplateNode(node) {
    return node.type === 1 && node.tagType === 3;
  }
  function isSlotOutlet(node) {
    return node.type === 1 && node.tagType === 2;
  }
  function getVNodeHelper(ssr, isComponent2) {
    return ssr || isComponent2 ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
  }
  function getVNodeBlockHelper(ssr, isComponent2) {
    return ssr || isComponent2 ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
  }
  function getUnnormalizedProps(props, callPath = []) {
    if (props && !isString(props) && props.type === 14) {
      const callee = props.callee;
      if (!isString(callee) && propsHelperSet.has(callee)) {
        return getUnnormalizedProps(props.arguments[0], callPath.concat(props));
      }
    }
    return [props, callPath];
  }
  function injectProp(node, prop, context) {
    let propsWithInjection;
    let props = node.type === 13 ? node.props : node.arguments[2];
    let callPath = [];
    let parentCall;
    if (props && !isString(props) && props.type === 14) {
      const ret = getUnnormalizedProps(props);
      props = ret[0];
      callPath = ret[1];
      parentCall = callPath[callPath.length - 1];
    }
    if (props == null || isString(props)) {
      propsWithInjection = createObjectExpression([prop]);
    } else if (props.type === 14) {
      const first = props.arguments[0];
      if (!isString(first) && first.type === 15) {
        first.properties.unshift(prop);
      } else {
        if (props.callee === TO_HANDLERS) {
          propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
            createObjectExpression([prop]),
            props
          ]);
        } else {
          props.arguments.unshift(createObjectExpression([prop]));
        }
      }
      !propsWithInjection && (propsWithInjection = props);
    } else if (props.type === 15) {
      let alreadyExists = false;
      if (prop.key.type === 4) {
        const propKeyName = prop.key.content;
        alreadyExists = props.properties.some((p2) => p2.key.type === 4 && p2.key.content === propKeyName);
      }
      if (!alreadyExists) {
        props.properties.unshift(prop);
      }
      propsWithInjection = props;
    } else {
      propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
        createObjectExpression([prop]),
        props
      ]);
      if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
        parentCall = callPath[callPath.length - 2];
      }
    }
    if (node.type === 13) {
      if (parentCall) {
        parentCall.arguments[0] = propsWithInjection;
      } else {
        node.props = propsWithInjection;
      }
    } else {
      if (parentCall) {
        parentCall.arguments[0] = propsWithInjection;
      } else {
        node.arguments[2] = propsWithInjection;
      }
    }
  }
  function toValidAssetId(name, type) {
    return `_${type}_${name.replace(/[^\w]/g, (searchValue, replaceValue) => {
      return searchValue === "-" ? "_" : name.charCodeAt(replaceValue).toString();
    })}`;
  }
  function hasScopeRef(node, ids) {
    if (!node || Object.keys(ids).length === 0) {
      return false;
    }
    switch (node.type) {
      case 1:
        for (let i = 0; i < node.props.length; i++) {
          const p2 = node.props[i];
          if (p2.type === 7 && (hasScopeRef(p2.arg, ids) || hasScopeRef(p2.exp, ids))) {
            return true;
          }
        }
        return node.children.some((c) => hasScopeRef(c, ids));
      case 11:
        if (hasScopeRef(node.source, ids)) {
          return true;
        }
        return node.children.some((c) => hasScopeRef(c, ids));
      case 9:
        return node.branches.some((b) => hasScopeRef(b, ids));
      case 10:
        if (hasScopeRef(node.condition, ids)) {
          return true;
        }
        return node.children.some((c) => hasScopeRef(c, ids));
      case 4:
        return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];
      case 8:
        return node.children.some((c) => isObject(c) && hasScopeRef(c, ids));
      case 5:
      case 12:
        return hasScopeRef(node.content, ids);
      case 2:
      case 3:
        return false;
      default:
        if (process.env.NODE_ENV !== "production")
          ;
        return false;
    }
  }
  function getMemoedVNodeCall(node) {
    if (node.type === 14 && node.callee === WITH_MEMO) {
      return node.arguments[1].returns;
    } else {
      return node;
    }
  }
  function makeBlock(node, { helper, removeHelper, inSSR }) {
    if (!node.isBlock) {
      node.isBlock = true;
      removeHelper(getVNodeHelper(inSSR, node.isComponent));
      helper(OPEN_BLOCK);
      helper(getVNodeBlockHelper(inSSR, node.isComponent));
    }
  }
  function getCompatValue(key, context) {
    const config = context.options ? context.options.compatConfig : context.compatConfig;
    const value = config && config[key];
    if (key === "MODE") {
      return value || 3;
    } else {
      return value;
    }
  }
  function isCompatEnabled(key, context) {
    const mode = getCompatValue("MODE", context);
    const value = getCompatValue(key, context);
    return mode === 3 ? value === true : value !== false;
  }
  function checkCompatEnabled(key, context, loc, ...args) {
    const enabled = isCompatEnabled(key, context);
    if (process.env.NODE_ENV !== "production" && enabled) {
      warnDeprecation(key, context, loc, ...args);
    }
    return enabled;
  }
  function warnDeprecation(key, context, loc, ...args) {
    const val = getCompatValue(key, context);
    if (val === "suppress-warning") {
      return;
    }
    const { message, link } = deprecationData[key];
    const msg = `(deprecation ${key}) ${typeof message === "function" ? message(...args) : message}${link ? `
  Details: ${link}` : ``}`;
    const err = new SyntaxError(msg);
    err.code = key;
    if (loc)
      err.loc = loc;
    context.onWarn(err);
  }
  function baseParse(content, options = {}) {
    const context = createParserContext(content, options);
    const start = getCursor(context);
    return createRoot(parseChildren(context, 0, []), getSelection(context, start));
  }
  function createParserContext(content, rawOptions) {
    const options = extend({}, defaultParserOptions);
    let key;
    for (key in rawOptions) {
      options[key] = rawOptions[key] === void 0 ? defaultParserOptions[key] : rawOptions[key];
    }
    return {
      options,
      column: 1,
      line: 1,
      offset: 0,
      originalSource: content,
      source: content,
      inPre: false,
      inVPre: false,
      onWarn: options.onWarn
    };
  }
  function parseChildren(context, mode, ancestors) {
    const parent = last(ancestors);
    const ns = parent ? parent.ns : 0;
    const nodes = [];
    while (!isEnd(context, mode, ancestors)) {
      const s = context.source;
      let node = void 0;
      if (mode === 0 || mode === 1) {
        if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
          node = parseInterpolation(context, mode);
        } else if (mode === 0 && s[0] === "<") {
          if (s.length === 1) {
            emitError(context, 5, 1);
          } else if (s[1] === "!") {
            if (startsWith(s, "<!--")) {
              node = parseComment(context);
            } else if (startsWith(s, "<!DOCTYPE")) {
              node = parseBogusComment(context);
            } else if (startsWith(s, "<![CDATA[")) {
              if (ns !== 0) {
                node = parseCDATA(context, ancestors);
              } else {
                emitError(context, 1);
                node = parseBogusComment(context);
              }
            } else {
              emitError(context, 11);
              node = parseBogusComment(context);
            }
          } else if (s[1] === "/") {
            if (s.length === 2) {
              emitError(context, 5, 2);
            } else if (s[2] === ">") {
              emitError(context, 14, 2);
              advanceBy(context, 3);
              continue;
            } else if (/[a-z]/i.test(s[2])) {
              emitError(context, 23);
              parseTag(context, 1, parent);
              continue;
            } else {
              emitError(context, 12, 2);
              node = parseBogusComment(context);
            }
          } else if (/[a-z]/i.test(s[1])) {
            node = parseElement(context, ancestors);
            if (isCompatEnabled("COMPILER_NATIVE_TEMPLATE", context) && node && node.tag === "template" && !node.props.some((p2) => p2.type === 7 && isSpecialTemplateDirective(p2.name))) {
              process.env.NODE_ENV !== "production" && warnDeprecation("COMPILER_NATIVE_TEMPLATE", context, node.loc);
              node = node.children;
            }
          } else if (s[1] === "?") {
            emitError(context, 21, 1);
            node = parseBogusComment(context);
          } else {
            emitError(context, 12, 1);
          }
        }
      }
      if (!node) {
        node = parseText(context, mode);
      }
      if (isArray(node)) {
        for (let i = 0; i < node.length; i++) {
          pushNode(nodes, node[i]);
        }
      } else {
        pushNode(nodes, node);
      }
    }
    let removedWhitespace = false;
    if (mode !== 2 && mode !== 1) {
      const shouldCondense = context.options.whitespace !== "preserve";
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (!context.inPre && node.type === 2) {
          if (!/[^\t\r\n\f ]/.test(node.content)) {
            const prev = nodes[i - 1];
            const next = nodes[i + 1];
            if (!prev || !next || shouldCondense && (prev.type === 3 || next.type === 3 || prev.type === 1 && next.type === 1 && /[\r\n]/.test(node.content))) {
              removedWhitespace = true;
              nodes[i] = null;
            } else {
              node.content = " ";
            }
          } else if (shouldCondense) {
            node.content = node.content.replace(/[\t\r\n\f ]+/g, " ");
          }
        } else if (node.type === 3 && !context.options.comments) {
          removedWhitespace = true;
          nodes[i] = null;
        }
      }
      if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
        const first = nodes[0];
        if (first && first.type === 2) {
          first.content = first.content.replace(/^\r?\n/, "");
        }
      }
    }
    return removedWhitespace ? nodes.filter(Boolean) : nodes;
  }
  function pushNode(nodes, node) {
    if (node.type === 2) {
      const prev = last(nodes);
      if (prev && prev.type === 2 && prev.loc.end.offset === node.loc.start.offset) {
        prev.content += node.content;
        prev.loc.end = node.loc.end;
        prev.loc.source += node.loc.source;
        return;
      }
    }
    nodes.push(node);
  }
  function parseCDATA(context, ancestors) {
    advanceBy(context, 9);
    const nodes = parseChildren(context, 3, ancestors);
    if (context.source.length === 0) {
      emitError(context, 6);
    } else {
      advanceBy(context, 3);
    }
    return nodes;
  }
  function parseComment(context) {
    const start = getCursor(context);
    let content;
    const match = /--(\!)?>/.exec(context.source);
    if (!match) {
      content = context.source.slice(4);
      advanceBy(context, context.source.length);
      emitError(context, 7);
    } else {
      if (match.index <= 3) {
        emitError(context, 0);
      }
      if (match[1]) {
        emitError(context, 10);
      }
      content = context.source.slice(4, match.index);
      const s = context.source.slice(0, match.index);
      let prevIndex = 1, nestedIndex = 0;
      while ((nestedIndex = s.indexOf("<!--", prevIndex)) !== -1) {
        advanceBy(context, nestedIndex - prevIndex + 1);
        if (nestedIndex + 4 < s.length) {
          emitError(context, 16);
        }
        prevIndex = nestedIndex + 1;
      }
      advanceBy(context, match.index + match[0].length - prevIndex + 1);
    }
    return {
      type: 3,
      content,
      loc: getSelection(context, start)
    };
  }
  function parseBogusComment(context) {
    const start = getCursor(context);
    const contentStart = context.source[1] === "?" ? 1 : 2;
    let content;
    const closeIndex = context.source.indexOf(">");
    if (closeIndex === -1) {
      content = context.source.slice(contentStart);
      advanceBy(context, context.source.length);
    } else {
      content = context.source.slice(contentStart, closeIndex);
      advanceBy(context, closeIndex + 1);
    }
    return {
      type: 3,
      content,
      loc: getSelection(context, start)
    };
  }
  function parseElement(context, ancestors) {
    const wasInPre = context.inPre;
    const wasInVPre = context.inVPre;
    const parent = last(ancestors);
    const element = parseTag(context, 0, parent);
    const isPreBoundary = context.inPre && !wasInPre;
    const isVPreBoundary = context.inVPre && !wasInVPre;
    if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
      if (isPreBoundary) {
        context.inPre = false;
      }
      if (isVPreBoundary) {
        context.inVPre = false;
      }
      return element;
    }
    ancestors.push(element);
    const mode = context.options.getTextMode(element, parent);
    const children = parseChildren(context, mode, ancestors);
    ancestors.pop();
    {
      const inlineTemplateProp = element.props.find((p2) => p2.type === 6 && p2.name === "inline-template");
      if (inlineTemplateProp && checkCompatEnabled("COMPILER_INLINE_TEMPLATE", context, inlineTemplateProp.loc)) {
        const loc = getSelection(context, element.loc.end);
        inlineTemplateProp.value = {
          type: 2,
          content: loc.source,
          loc
        };
      }
    }
    element.children = children;
    if (startsWithEndTagOpen(context.source, element.tag)) {
      parseTag(context, 1, parent);
    } else {
      emitError(context, 24, 0, element.loc.start);
      if (context.source.length === 0 && element.tag.toLowerCase() === "script") {
        const first = children[0];
        if (first && startsWith(first.loc.source, "<!--")) {
          emitError(context, 8);
        }
      }
    }
    element.loc = getSelection(context, element.loc.start);
    if (isPreBoundary) {
      context.inPre = false;
    }
    if (isVPreBoundary) {
      context.inVPre = false;
    }
    return element;
  }
  function parseTag(context, type, parent) {
    const start = getCursor(context);
    const match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
    const tag = match[1];
    const ns = context.options.getNamespace(tag, parent);
    advanceBy(context, match[0].length);
    advanceSpaces(context);
    const cursor = getCursor(context);
    const currentSource = context.source;
    if (context.options.isPreTag(tag)) {
      context.inPre = true;
    }
    let props = parseAttributes(context, type);
    if (type === 0 && !context.inVPre && props.some((p2) => p2.type === 7 && p2.name === "pre")) {
      context.inVPre = true;
      extend(context, cursor);
      context.source = currentSource;
      props = parseAttributes(context, type).filter((p2) => p2.name !== "v-pre");
    }
    let isSelfClosing = false;
    if (context.source.length === 0) {
      emitError(context, 9);
    } else {
      isSelfClosing = startsWith(context.source, "/>");
      if (type === 1 && isSelfClosing) {
        emitError(context, 4);
      }
      advanceBy(context, isSelfClosing ? 2 : 1);
    }
    if (type === 1) {
      return;
    }
    if (process.env.NODE_ENV !== "production" && isCompatEnabled("COMPILER_V_IF_V_FOR_PRECEDENCE", context)) {
      let hasIf = false;
      let hasFor = false;
      for (let i = 0; i < props.length; i++) {
        const p2 = props[i];
        if (p2.type === 7) {
          if (p2.name === "if") {
            hasIf = true;
          } else if (p2.name === "for") {
            hasFor = true;
          }
        }
        if (hasIf && hasFor) {
          warnDeprecation("COMPILER_V_IF_V_FOR_PRECEDENCE", context, getSelection(context, start));
          break;
        }
      }
    }
    let tagType = 0;
    if (!context.inVPre) {
      if (tag === "slot") {
        tagType = 2;
      } else if (tag === "template") {
        if (props.some((p2) => p2.type === 7 && isSpecialTemplateDirective(p2.name))) {
          tagType = 3;
        }
      } else if (isComponent(tag, props, context)) {
        tagType = 1;
      }
    }
    return {
      type: 1,
      ns,
      tag,
      tagType,
      props,
      isSelfClosing,
      children: [],
      loc: getSelection(context, start),
      codegenNode: void 0
    };
  }
  function isComponent(tag, props, context) {
    const options = context.options;
    if (options.isCustomElement(tag)) {
      return false;
    }
    if (tag === "component" || /^[A-Z]/.test(tag) || isCoreComponent(tag) || options.isBuiltInComponent && options.isBuiltInComponent(tag) || options.isNativeTag && !options.isNativeTag(tag)) {
      return true;
    }
    for (let i = 0; i < props.length; i++) {
      const p2 = props[i];
      if (p2.type === 6) {
        if (p2.name === "is" && p2.value) {
          if (p2.value.content.startsWith("vue:")) {
            return true;
          } else if (checkCompatEnabled("COMPILER_IS_ON_ELEMENT", context, p2.loc)) {
            return true;
          }
        }
      } else {
        if (p2.name === "is") {
          return true;
        } else if (p2.name === "bind" && isStaticArgOf(p2.arg, "is") && true && checkCompatEnabled("COMPILER_IS_ON_ELEMENT", context, p2.loc)) {
          return true;
        }
      }
    }
  }
  function parseAttributes(context, type) {
    const props = [];
    const attributeNames = /* @__PURE__ */ new Set();
    while (context.source.length > 0 && !startsWith(context.source, ">") && !startsWith(context.source, "/>")) {
      if (startsWith(context.source, "/")) {
        emitError(context, 22);
        advanceBy(context, 1);
        advanceSpaces(context);
        continue;
      }
      if (type === 1) {
        emitError(context, 3);
      }
      const attr = parseAttribute(context, attributeNames);
      if (attr.type === 6 && attr.value && attr.name === "class") {
        attr.value.content = attr.value.content.replace(/\s+/g, " ").trim();
      }
      if (type === 0) {
        props.push(attr);
      }
      if (/^[^\t\r\n\f />]/.test(context.source)) {
        emitError(context, 15);
      }
      advanceSpaces(context);
    }
    return props;
  }
  function parseAttribute(context, nameSet) {
    const start = getCursor(context);
    const match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
    const name = match[0];
    if (nameSet.has(name)) {
      emitError(context, 2);
    }
    nameSet.add(name);
    if (name[0] === "=") {
      emitError(context, 19);
    }
    {
      const pattern = /["'<]/g;
      let m;
      while (m = pattern.exec(name)) {
        emitError(context, 17, m.index);
      }
    }
    advanceBy(context, name.length);
    let value = void 0;
    if (/^[\t\r\n\f ]*=/.test(context.source)) {
      advanceSpaces(context);
      advanceBy(context, 1);
      advanceSpaces(context);
      value = parseAttributeValue(context);
      if (!value) {
        emitError(context, 13);
      }
    }
    const loc = getSelection(context, start);
    if (!context.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(name)) {
      const match2 = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);
      let isPropShorthand = startsWith(name, ".");
      let dirName = match2[1] || (isPropShorthand || startsWith(name, ":") ? "bind" : startsWith(name, "@") ? "on" : "slot");
      let arg;
      if (match2[2]) {
        const isSlot = dirName === "slot";
        const startOffset = name.lastIndexOf(match2[2]);
        const loc2 = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + match2[2].length + (isSlot && match2[3] || "").length));
        let content = match2[2];
        let isStatic = true;
        if (content.startsWith("[")) {
          isStatic = false;
          if (!content.endsWith("]")) {
            emitError(context, 27);
            content = content.slice(1);
          } else {
            content = content.slice(1, content.length - 1);
          }
        } else if (isSlot) {
          content += match2[3] || "";
        }
        arg = {
          type: 4,
          content,
          isStatic,
          constType: isStatic ? 3 : 0,
          loc: loc2
        };
      }
      if (value && value.isQuoted) {
        const valueLoc = value.loc;
        valueLoc.start.offset++;
        valueLoc.start.column++;
        valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
        valueLoc.source = valueLoc.source.slice(1, -1);
      }
      const modifiers = match2[3] ? match2[3].slice(1).split(".") : [];
      if (isPropShorthand)
        modifiers.push("prop");
      if (dirName === "bind" && arg) {
        if (modifiers.includes("sync") && checkCompatEnabled("COMPILER_V_BIND_SYNC", context, loc, arg.loc.source)) {
          dirName = "model";
          modifiers.splice(modifiers.indexOf("sync"), 1);
        }
        if (process.env.NODE_ENV !== "production" && modifiers.includes("prop")) {
          checkCompatEnabled("COMPILER_V_BIND_PROP", context, loc);
        }
      }
      return {
        type: 7,
        name: dirName,
        exp: value && {
          type: 4,
          content: value.content,
          isStatic: false,
          constType: 0,
          loc: value.loc
        },
        arg,
        modifiers,
        loc
      };
    }
    if (!context.inVPre && startsWith(name, "v-")) {
      emitError(context, 26);
    }
    return {
      type: 6,
      name,
      value: value && {
        type: 2,
        content: value.content,
        loc: value.loc
      },
      loc
    };
  }
  function parseAttributeValue(context) {
    const start = getCursor(context);
    let content;
    const quote = context.source[0];
    const isQuoted = quote === `"` || quote === `'`;
    if (isQuoted) {
      advanceBy(context, 1);
      const endIndex = context.source.indexOf(quote);
      if (endIndex === -1) {
        content = parseTextData(context, context.source.length, 4);
      } else {
        content = parseTextData(context, endIndex, 4);
        advanceBy(context, 1);
      }
    } else {
      const match = /^[^\t\r\n\f >]+/.exec(context.source);
      if (!match) {
        return void 0;
      }
      const unexpectedChars = /["'<=`]/g;
      let m;
      while (m = unexpectedChars.exec(match[0])) {
        emitError(context, 18, m.index);
      }
      content = parseTextData(context, match[0].length, 4);
    }
    return { content, isQuoted, loc: getSelection(context, start) };
  }
  function parseInterpolation(context, mode) {
    const [open, close] = context.options.delimiters;
    const closeIndex = context.source.indexOf(close, open.length);
    if (closeIndex === -1) {
      emitError(context, 25);
      return void 0;
    }
    const start = getCursor(context);
    advanceBy(context, open.length);
    const innerStart = getCursor(context);
    const innerEnd = getCursor(context);
    const rawContentLength = closeIndex - open.length;
    const rawContent = context.source.slice(0, rawContentLength);
    const preTrimContent = parseTextData(context, rawContentLength, mode);
    const content = preTrimContent.trim();
    const startOffset = preTrimContent.indexOf(content);
    if (startOffset > 0) {
      advancePositionWithMutation(innerStart, rawContent, startOffset);
    }
    const endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
    advancePositionWithMutation(innerEnd, rawContent, endOffset);
    advanceBy(context, close.length);
    return {
      type: 5,
      content: {
        type: 4,
        isStatic: false,
        constType: 0,
        content,
        loc: getSelection(context, innerStart, innerEnd)
      },
      loc: getSelection(context, start)
    };
  }
  function parseText(context, mode) {
    const endTokens = mode === 3 ? ["]]>"] : ["<", context.options.delimiters[0]];
    let endIndex = context.source.length;
    for (let i = 0; i < endTokens.length; i++) {
      const index = context.source.indexOf(endTokens[i], 1);
      if (index !== -1 && endIndex > index) {
        endIndex = index;
      }
    }
    const start = getCursor(context);
    const content = parseTextData(context, endIndex, mode);
    return {
      type: 2,
      content,
      loc: getSelection(context, start)
    };
  }
  function parseTextData(context, length, mode) {
    const rawText = context.source.slice(0, length);
    advanceBy(context, length);
    if (mode === 2 || mode === 3 || !rawText.includes("&")) {
      return rawText;
    } else {
      return context.options.decodeEntities(rawText, mode === 4);
    }
  }
  function getCursor(context) {
    const { column, line, offset } = context;
    return { column, line, offset };
  }
  function getSelection(context, start, end) {
    end = end || getCursor(context);
    return {
      start,
      end,
      source: context.originalSource.slice(start.offset, end.offset)
    };
  }
  function last(xs) {
    return xs[xs.length - 1];
  }
  function startsWith(source, searchString) {
    return source.startsWith(searchString);
  }
  function advanceBy(context, numberOfCharacters) {
    const { source } = context;
    advancePositionWithMutation(context, source, numberOfCharacters);
    context.source = source.slice(numberOfCharacters);
  }
  function advanceSpaces(context) {
    const match = /^[\t\r\n\f ]+/.exec(context.source);
    if (match) {
      advanceBy(context, match[0].length);
    }
  }
  function getNewPosition(context, start, numberOfCharacters) {
    return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
  }
  function emitError(context, code, offset, loc = getCursor(context)) {
    if (offset) {
      loc.offset += offset;
      loc.column += offset;
    }
    context.options.onError(createCompilerError(code, {
      start: loc,
      end: loc,
      source: ""
    }));
  }
  function isEnd(context, mode, ancestors) {
    const s = context.source;
    switch (mode) {
      case 0:
        if (startsWith(s, "</")) {
          for (let i = ancestors.length - 1; i >= 0; --i) {
            if (startsWithEndTagOpen(s, ancestors[i].tag)) {
              return true;
            }
          }
        }
        break;
      case 1:
      case 2: {
        const parent = last(ancestors);
        if (parent && startsWithEndTagOpen(s, parent.tag)) {
          return true;
        }
        break;
      }
      case 3:
        if (startsWith(s, "]]>")) {
          return true;
        }
        break;
    }
    return !s;
  }
  function startsWithEndTagOpen(source, tag) {
    return startsWith(source, "</") && source.slice(2, 2 + tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || ">");
  }
  function hoistStatic(root, context) {
    walk(
      root,
      context,
      isSingleElementRoot(root, root.children[0])
    );
  }
  function isSingleElementRoot(root, child) {
    const { children } = root;
    return children.length === 1 && child.type === 1 && !isSlotOutlet(child);
  }
  function walk(node, context, doNotHoistNode = false) {
    const { children } = node;
    const originalCount = children.length;
    let hoistedCount = 0;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.type === 1 && child.tagType === 0) {
        const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
        if (constantType > 0) {
          if (constantType >= 2) {
            child.codegenNode.patchFlag = -1 + (process.env.NODE_ENV !== "production" ? ` /* HOISTED */` : ``);
            child.codegenNode = context.hoist(child.codegenNode);
            hoistedCount++;
            continue;
          }
        } else {
          const codegenNode = child.codegenNode;
          if (codegenNode.type === 13) {
            const flag = getPatchFlag(codegenNode);
            if ((!flag || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
              const props = getNodeProps(child);
              if (props) {
                codegenNode.props = context.hoist(props);
              }
            }
            if (codegenNode.dynamicProps) {
              codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
            }
          }
        }
      } else if (child.type === 12 && getConstantType(child.content, context) >= 2) {
        child.codegenNode = context.hoist(child.codegenNode);
        hoistedCount++;
      }
      if (child.type === 1) {
        const isComponent2 = child.tagType === 1;
        if (isComponent2) {
          context.scopes.vSlot++;
        }
        walk(child, context);
        if (isComponent2) {
          context.scopes.vSlot--;
        }
      } else if (child.type === 11) {
        walk(child, context, child.children.length === 1);
      } else if (child.type === 9) {
        for (let i2 = 0; i2 < child.branches.length; i2++) {
          walk(child.branches[i2], context, child.branches[i2].children.length === 1);
        }
      }
    }
    if (hoistedCount && context.transformHoist) {
      context.transformHoist(children, context, node);
    }
    if (hoistedCount && hoistedCount === originalCount && node.type === 1 && node.tagType === 0 && node.codegenNode && node.codegenNode.type === 13 && isArray(node.codegenNode.children)) {
      node.codegenNode.children = context.hoist(createArrayExpression(node.codegenNode.children));
    }
  }
  function getConstantType(node, context) {
    const { constantCache } = context;
    switch (node.type) {
      case 1:
        if (node.tagType !== 0) {
          return 0;
        }
        const cached = constantCache.get(node);
        if (cached !== void 0) {
          return cached;
        }
        const codegenNode = node.codegenNode;
        if (codegenNode.type !== 13) {
          return 0;
        }
        if (codegenNode.isBlock && node.tag !== "svg" && node.tag !== "foreignObject") {
          return 0;
        }
        const flag = getPatchFlag(codegenNode);
        if (!flag) {
          let returnType2 = 3;
          const generatedPropsType = getGeneratedPropsConstantType(node, context);
          if (generatedPropsType === 0) {
            constantCache.set(node, 0);
            return 0;
          }
          if (generatedPropsType < returnType2) {
            returnType2 = generatedPropsType;
          }
          for (let i = 0; i < node.children.length; i++) {
            const childType = getConstantType(node.children[i], context);
            if (childType === 0) {
              constantCache.set(node, 0);
              return 0;
            }
            if (childType < returnType2) {
              returnType2 = childType;
            }
          }
          if (returnType2 > 1) {
            for (let i = 0; i < node.props.length; i++) {
              const p2 = node.props[i];
              if (p2.type === 7 && p2.name === "bind" && p2.exp) {
                const expType = getConstantType(p2.exp, context);
                if (expType === 0) {
                  constantCache.set(node, 0);
                  return 0;
                }
                if (expType < returnType2) {
                  returnType2 = expType;
                }
              }
            }
          }
          if (codegenNode.isBlock) {
            for (let i = 0; i < node.props.length; i++) {
              const p2 = node.props[i];
              if (p2.type === 7) {
                constantCache.set(node, 0);
                return 0;
              }
            }
            context.removeHelper(OPEN_BLOCK);
            context.removeHelper(getVNodeBlockHelper(context.inSSR, codegenNode.isComponent));
            codegenNode.isBlock = false;
            context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
          }
          constantCache.set(node, returnType2);
          return returnType2;
        } else {
          constantCache.set(node, 0);
          return 0;
        }
      case 2:
      case 3:
        return 3;
      case 9:
      case 11:
      case 10:
        return 0;
      case 5:
      case 12:
        return getConstantType(node.content, context);
      case 4:
        return node.constType;
      case 8:
        let returnType = 3;
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (isString(child) || isSymbol(child)) {
            continue;
          }
          const childType = getConstantType(child, context);
          if (childType === 0) {
            return 0;
          } else if (childType < returnType) {
            returnType = childType;
          }
        }
        return returnType;
      default:
        if (process.env.NODE_ENV !== "production")
          ;
        return 0;
    }
  }
  function getConstantTypeOfHelperCall(value, context) {
    if (value.type === 14 && !isString(value.callee) && allowHoistedHelperSet.has(value.callee)) {
      const arg = value.arguments[0];
      if (arg.type === 4) {
        return getConstantType(arg, context);
      } else if (arg.type === 14) {
        return getConstantTypeOfHelperCall(arg, context);
      }
    }
    return 0;
  }
  function getGeneratedPropsConstantType(node, context) {
    let returnType = 3;
    const props = getNodeProps(node);
    if (props && props.type === 15) {
      const { properties } = props;
      for (let i = 0; i < properties.length; i++) {
        const { key, value } = properties[i];
        const keyType = getConstantType(key, context);
        if (keyType === 0) {
          return keyType;
        }
        if (keyType < returnType) {
          returnType = keyType;
        }
        let valueType;
        if (value.type === 4) {
          valueType = getConstantType(value, context);
        } else if (value.type === 14) {
          valueType = getConstantTypeOfHelperCall(value, context);
        } else {
          valueType = 0;
        }
        if (valueType === 0) {
          return valueType;
        }
        if (valueType < returnType) {
          returnType = valueType;
        }
      }
    }
    return returnType;
  }
  function getNodeProps(node) {
    const codegenNode = node.codegenNode;
    if (codegenNode.type === 13) {
      return codegenNode.props;
    }
  }
  function getPatchFlag(node) {
    const flag = node.patchFlag;
    return flag ? parseInt(flag, 10) : void 0;
  }
  function createTransformContext(root, { filename = "", prefixIdentifiers = false, hoistStatic: hoistStatic2 = false, cacheHandlers = false, nodeTransforms = [], directiveTransforms = {}, transformHoist = null, isBuiltInComponent = NOOP, isCustomElement = NOOP, expressionPlugins = [], scopeId = null, slotted = true, ssr = false, inSSR = false, ssrCssVars = ``, bindingMetadata = EMPTY_OBJ, inline = false, isTS = false, onError = defaultOnError, onWarn = defaultOnWarn, compatConfig }) {
    const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
    const context = {
      selfName: nameMatch && capitalize(camelize(nameMatch[1])),
      prefixIdentifiers,
      hoistStatic: hoistStatic2,
      cacheHandlers,
      nodeTransforms,
      directiveTransforms,
      transformHoist,
      isBuiltInComponent,
      isCustomElement,
      expressionPlugins,
      scopeId,
      slotted,
      ssr,
      inSSR,
      ssrCssVars,
      bindingMetadata,
      inline,
      isTS,
      onError,
      onWarn,
      compatConfig,
      root,
      helpers: /* @__PURE__ */ new Map(),
      components: /* @__PURE__ */ new Set(),
      directives: /* @__PURE__ */ new Set(),
      hoists: [],
      imports: [],
      constantCache: /* @__PURE__ */ new Map(),
      temps: 0,
      cached: 0,
      identifiers: /* @__PURE__ */ Object.create(null),
      scopes: {
        vFor: 0,
        vSlot: 0,
        vPre: 0,
        vOnce: 0
      },
      parent: null,
      currentNode: root,
      childIndex: 0,
      inVOnce: false,
      helper(name) {
        const count = context.helpers.get(name) || 0;
        context.helpers.set(name, count + 1);
        return name;
      },
      removeHelper(name) {
        const count = context.helpers.get(name);
        if (count) {
          const currentCount = count - 1;
          if (!currentCount) {
            context.helpers.delete(name);
          } else {
            context.helpers.set(name, currentCount);
          }
        }
      },
      helperString(name) {
        return `_${helperNameMap[context.helper(name)]}`;
      },
      replaceNode(node) {
        if (process.env.NODE_ENV !== "production") {
          if (!context.currentNode) {
            throw new Error(`Node being replaced is already removed.`);
          }
          if (!context.parent) {
            throw new Error(`Cannot replace root node.`);
          }
        }
        context.parent.children[context.childIndex] = context.currentNode = node;
      },
      removeNode(node) {
        if (process.env.NODE_ENV !== "production" && !context.parent) {
          throw new Error(`Cannot remove root node.`);
        }
        const list = context.parent.children;
        const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
        if (process.env.NODE_ENV !== "production" && removalIndex < 0) {
          throw new Error(`node being removed is not a child of current parent`);
        }
        if (!node || node === context.currentNode) {
          context.currentNode = null;
          context.onNodeRemoved();
        } else {
          if (context.childIndex > removalIndex) {
            context.childIndex--;
            context.onNodeRemoved();
          }
        }
        context.parent.children.splice(removalIndex, 1);
      },
      onNodeRemoved: () => {
      },
      addIdentifiers(exp) {
      },
      removeIdentifiers(exp) {
      },
      hoist(exp) {
        if (isString(exp))
          exp = createSimpleExpression(exp);
        context.hoists.push(exp);
        const identifier = createSimpleExpression(`_hoisted_${context.hoists.length}`, false, exp.loc, 2);
        identifier.hoisted = exp;
        return identifier;
      },
      cache(exp, isVNode2 = false) {
        return createCacheExpression(context.cached++, exp, isVNode2);
      }
    };
    {
      context.filters = /* @__PURE__ */ new Set();
    }
    return context;
  }
  function transform(root, options) {
    const context = createTransformContext(root, options);
    traverseNode(root, context);
    if (options.hoistStatic) {
      hoistStatic(root, context);
    }
    if (!options.ssr) {
      createRootCodegen(root, context);
    }
    root.helpers = [...context.helpers.keys()];
    root.components = [...context.components];
    root.directives = [...context.directives];
    root.imports = context.imports;
    root.hoists = context.hoists;
    root.temps = context.temps;
    root.cached = context.cached;
    {
      root.filters = [...context.filters];
    }
  }
  function createRootCodegen(root, context) {
    const { helper } = context;
    const { children } = root;
    if (children.length === 1) {
      const child = children[0];
      if (isSingleElementRoot(root, child) && child.codegenNode) {
        const codegenNode = child.codegenNode;
        if (codegenNode.type === 13) {
          makeBlock(codegenNode, context);
        }
        root.codegenNode = codegenNode;
      } else {
        root.codegenNode = child;
      }
    } else if (children.length > 1) {
      let patchFlag = 64;
      let patchFlagText = PatchFlagNames[64];
      if (process.env.NODE_ENV !== "production" && children.filter((c) => c.type !== 3).length === 1) {
        patchFlag |= 2048;
        patchFlagText += `, ${PatchFlagNames[2048]}`;
      }
      root.codegenNode = createVNodeCall(context, helper(FRAGMENT), void 0, root.children, patchFlag + (process.env.NODE_ENV !== "production" ? ` /* ${patchFlagText} */` : ``), void 0, void 0, true, void 0, false);
    } else
      ;
  }
  function traverseChildren(parent, context) {
    let i = 0;
    const nodeRemoved = () => {
      i--;
    };
    for (; i < parent.children.length; i++) {
      const child = parent.children[i];
      if (isString(child))
        continue;
      context.parent = parent;
      context.childIndex = i;
      context.onNodeRemoved = nodeRemoved;
      traverseNode(child, context);
    }
  }
  function traverseNode(node, context) {
    context.currentNode = node;
    const { nodeTransforms } = context;
    const exitFns = [];
    for (let i2 = 0; i2 < nodeTransforms.length; i2++) {
      const onExit = nodeTransforms[i2](node, context);
      if (onExit) {
        if (isArray(onExit)) {
          exitFns.push(...onExit);
        } else {
          exitFns.push(onExit);
        }
      }
      if (!context.currentNode) {
        return;
      } else {
        node = context.currentNode;
      }
    }
    switch (node.type) {
      case 3:
        if (!context.ssr) {
          context.helper(CREATE_COMMENT);
        }
        break;
      case 5:
        if (!context.ssr) {
          context.helper(TO_DISPLAY_STRING);
        }
        break;
      case 9:
        for (let i2 = 0; i2 < node.branches.length; i2++) {
          traverseNode(node.branches[i2], context);
        }
        break;
      case 10:
      case 11:
      case 1:
      case 0:
        traverseChildren(node, context);
        break;
    }
    context.currentNode = node;
    let i = exitFns.length;
    while (i--) {
      exitFns[i]();
    }
  }
  function createStructuralDirectiveTransform(name, fn) {
    const matches2 = isString(name) ? (n) => n === name : (n) => name.test(n);
    return (node, context) => {
      if (node.type === 1) {
        const { props } = node;
        if (node.tagType === 3 && props.some(isVSlot)) {
          return;
        }
        const exitFns = [];
        for (let i = 0; i < props.length; i++) {
          const prop = props[i];
          if (prop.type === 7 && matches2(prop.name)) {
            props.splice(i, 1);
            i--;
            const onExit = fn(node, prop, context);
            if (onExit)
              exitFns.push(onExit);
          }
        }
        return exitFns;
      }
    };
  }
  function createCodegenContext(ast, { mode = "function", prefixIdentifiers = mode === "module", sourceMap = false, filename = `template.vue.html`, scopeId = null, optimizeImports = false, runtimeGlobalName = `Vue`, runtimeModuleName = `vue`, ssrRuntimeModuleName = "vue/server-renderer", ssr = false, isTS = false, inSSR = false }) {
    const context = {
      mode,
      prefixIdentifiers,
      sourceMap,
      filename,
      scopeId,
      optimizeImports,
      runtimeGlobalName,
      runtimeModuleName,
      ssrRuntimeModuleName,
      ssr,
      isTS,
      inSSR,
      source: ast.loc.source,
      code: ``,
      column: 1,
      line: 1,
      offset: 0,
      indentLevel: 0,
      pure: false,
      map: void 0,
      helper(key) {
        return `_${helperNameMap[key]}`;
      },
      push(code, node) {
        context.code += code;
      },
      indent() {
        newline(++context.indentLevel);
      },
      deindent(withoutNewLine = false) {
        if (withoutNewLine) {
          --context.indentLevel;
        } else {
          newline(--context.indentLevel);
        }
      },
      newline() {
        newline(context.indentLevel);
      }
    };
    function newline(n) {
      context.push("\n" + `  `.repeat(n));
    }
    return context;
  }
  function generate(ast, options = {}) {
    const context = createCodegenContext(ast, options);
    if (options.onContextCreated)
      options.onContextCreated(context);
    const { mode, push, prefixIdentifiers, indent, deindent, newline, scopeId, ssr } = context;
    const hasHelpers = ast.helpers.length > 0;
    const useWithBlock = !prefixIdentifiers && mode !== "module";
    const preambleContext = context;
    {
      genFunctionPreamble(ast, preambleContext);
    }
    const functionName = ssr ? `ssrRender` : `render`;
    const args = ssr ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
    const signature = args.join(", ");
    {
      push(`function ${functionName}(${signature}) {`);
    }
    indent();
    if (useWithBlock) {
      push(`with (_ctx) {`);
      indent();
      if (hasHelpers) {
        push(`const { ${ast.helpers.map(aliasHelper).join(", ")} } = _Vue`);
        push(`
`);
        newline();
      }
    }
    if (ast.components.length) {
      genAssets(ast.components, "component", context);
      if (ast.directives.length || ast.temps > 0) {
        newline();
      }
    }
    if (ast.directives.length) {
      genAssets(ast.directives, "directive", context);
      if (ast.temps > 0) {
        newline();
      }
    }
    if (ast.filters && ast.filters.length) {
      newline();
      genAssets(ast.filters, "filter", context);
      newline();
    }
    if (ast.temps > 0) {
      push(`let `);
      for (let i = 0; i < ast.temps; i++) {
        push(`${i > 0 ? `, ` : ``}_temp${i}`);
      }
    }
    if (ast.components.length || ast.directives.length || ast.temps) {
      push(`
`);
      newline();
    }
    if (!ssr) {
      push(`return `);
    }
    if (ast.codegenNode) {
      genNode(ast.codegenNode, context);
    } else {
      push(`null`);
    }
    if (useWithBlock) {
      deindent();
      push(`}`);
    }
    deindent();
    push(`}`);
    return {
      ast,
      code: context.code,
      preamble: ``,
      map: context.map ? context.map.toJSON() : void 0
    };
  }
  function genFunctionPreamble(ast, context) {
    const { ssr, prefixIdentifiers, push, newline, runtimeModuleName, runtimeGlobalName, ssrRuntimeModuleName } = context;
    const VueBinding = runtimeGlobalName;
    if (ast.helpers.length > 0) {
      {
        push(`const _Vue = ${VueBinding}
`);
        if (ast.hoists.length) {
          const staticHelpers = [
            CREATE_VNODE,
            CREATE_ELEMENT_VNODE,
            CREATE_COMMENT,
            CREATE_TEXT,
            CREATE_STATIC
          ].filter((helper) => ast.helpers.includes(helper)).map(aliasHelper).join(", ");
          push(`const { ${staticHelpers} } = _Vue
`);
        }
      }
    }
    genHoists(ast.hoists, context);
    newline();
    push(`return `);
  }
  function genAssets(assets, type, { helper, push, newline, isTS }) {
    const resolver = helper(type === "filter" ? RESOLVE_FILTER : type === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);
    for (let i = 0; i < assets.length; i++) {
      let id = assets[i];
      const maybeSelfReference = id.endsWith("__self");
      if (maybeSelfReference) {
        id = id.slice(0, -6);
      }
      push(`const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`);
      if (i < assets.length - 1) {
        newline();
      }
    }
  }
  function genHoists(hoists, context) {
    if (!hoists.length) {
      return;
    }
    context.pure = true;
    const { push, newline, helper, scopeId, mode } = context;
    newline();
    for (let i = 0; i < hoists.length; i++) {
      const exp = hoists[i];
      if (exp) {
        push(`const _hoisted_${i + 1} = ${``}`);
        genNode(exp, context);
        newline();
      }
    }
    context.pure = false;
  }
  function isText$1(n) {
    return isString(n) || n.type === 4 || n.type === 2 || n.type === 5 || n.type === 8;
  }
  function genNodeListAsArray(nodes, context) {
    const multilines = nodes.length > 3 || process.env.NODE_ENV !== "production" && nodes.some((n) => isArray(n) || !isText$1(n));
    context.push(`[`);
    multilines && context.indent();
    genNodeList(nodes, context, multilines);
    multilines && context.deindent();
    context.push(`]`);
  }
  function genNodeList(nodes, context, multilines = false, comma = true) {
    const { push, newline } = context;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (isString(node)) {
        push(node);
      } else if (isArray(node)) {
        genNodeListAsArray(node, context);
      } else {
        genNode(node, context);
      }
      if (i < nodes.length - 1) {
        if (multilines) {
          comma && push(",");
          newline();
        } else {
          comma && push(", ");
        }
      }
    }
  }
  function genNode(node, context) {
    if (isString(node)) {
      context.push(node);
      return;
    }
    if (isSymbol(node)) {
      context.push(context.helper(node));
      return;
    }
    switch (node.type) {
      case 1:
      case 9:
      case 11:
        process.env.NODE_ENV !== "production" && assert(node.codegenNode != null, `Codegen node is missing for element/if/for node. Apply appropriate transforms first.`);
        genNode(node.codegenNode, context);
        break;
      case 2:
        genText(node, context);
        break;
      case 4:
        genExpression(node, context);
        break;
      case 5:
        genInterpolation(node, context);
        break;
      case 12:
        genNode(node.codegenNode, context);
        break;
      case 8:
        genCompoundExpression(node, context);
        break;
      case 3:
        genComment(node, context);
        break;
      case 13:
        genVNodeCall(node, context);
        break;
      case 14:
        genCallExpression(node, context);
        break;
      case 15:
        genObjectExpression(node, context);
        break;
      case 17:
        genArrayExpression(node, context);
        break;
      case 18:
        genFunctionExpression(node, context);
        break;
      case 19:
        genConditionalExpression(node, context);
        break;
      case 20:
        genCacheExpression(node, context);
        break;
      case 21:
        genNodeList(node.body, context, true, false);
        break;
      case 22:
        break;
      case 23:
        break;
      case 24:
        break;
      case 25:
        break;
      case 26:
        break;
      case 10:
        break;
      default:
        if (process.env.NODE_ENV !== "production") {
          assert(false, `unhandled codegen node type: ${node.type}`);
          const exhaustiveCheck = node;
          return exhaustiveCheck;
        }
    }
  }
  function genText(node, context) {
    context.push(JSON.stringify(node.content), node);
  }
  function genExpression(node, context) {
    const { content, isStatic } = node;
    context.push(isStatic ? JSON.stringify(content) : content, node);
  }
  function genInterpolation(node, context) {
    const { push, helper, pure } = context;
    if (pure)
      push(PURE_ANNOTATION);
    push(`${helper(TO_DISPLAY_STRING)}(`);
    genNode(node.content, context);
    push(`)`);
  }
  function genCompoundExpression(node, context) {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (isString(child)) {
        context.push(child);
      } else {
        genNode(child, context);
      }
    }
  }
  function genExpressionAsPropertyKey(node, context) {
    const { push } = context;
    if (node.type === 8) {
      push(`[`);
      genCompoundExpression(node, context);
      push(`]`);
    } else if (node.isStatic) {
      const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
      push(text, node);
    } else {
      push(`[${node.content}]`, node);
    }
  }
  function genComment(node, context) {
    const { push, helper, pure } = context;
    if (pure) {
      push(PURE_ANNOTATION);
    }
    push(`${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`, node);
  }
  function genVNodeCall(node, context) {
    const { push, helper, pure } = context;
    const { tag, props, children, patchFlag, dynamicProps, directives, isBlock, disableTracking, isComponent: isComponent2 } = node;
    if (directives) {
      push(helper(WITH_DIRECTIVES) + `(`);
    }
    if (isBlock) {
      push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
    }
    if (pure) {
      push(PURE_ANNOTATION);
    }
    const callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent2) : getVNodeHelper(context.inSSR, isComponent2);
    push(helper(callHelper) + `(`, node);
    genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
    push(`)`);
    if (isBlock) {
      push(`)`);
    }
    if (directives) {
      push(`, `);
      genNode(directives, context);
      push(`)`);
    }
  }
  function genNullableArgs(args) {
    let i = args.length;
    while (i--) {
      if (args[i] != null)
        break;
    }
    return args.slice(0, i + 1).map((arg) => arg || `null`);
  }
  function genCallExpression(node, context) {
    const { push, helper, pure } = context;
    const callee = isString(node.callee) ? node.callee : helper(node.callee);
    if (pure) {
      push(PURE_ANNOTATION);
    }
    push(callee + `(`, node);
    genNodeList(node.arguments, context);
    push(`)`);
  }
  function genObjectExpression(node, context) {
    const { push, indent, deindent, newline } = context;
    const { properties } = node;
    if (!properties.length) {
      push(`{}`, node);
      return;
    }
    const multilines = properties.length > 1 || process.env.NODE_ENV !== "production" && properties.some((p2) => p2.value.type !== 4);
    push(multilines ? `{` : `{ `);
    multilines && indent();
    for (let i = 0; i < properties.length; i++) {
      const { key, value } = properties[i];
      genExpressionAsPropertyKey(key, context);
      push(`: `);
      genNode(value, context);
      if (i < properties.length - 1) {
        push(`,`);
        newline();
      }
    }
    multilines && deindent();
    push(multilines ? `}` : ` }`);
  }
  function genArrayExpression(node, context) {
    genNodeListAsArray(node.elements, context);
  }
  function genFunctionExpression(node, context) {
    const { push, indent, deindent } = context;
    const { params, returns, body, newline, isSlot } = node;
    if (isSlot) {
      push(`_${helperNameMap[WITH_CTX]}(`);
    }
    push(`(`, node);
    if (isArray(params)) {
      genNodeList(params, context);
    } else if (params) {
      genNode(params, context);
    }
    push(`) => `);
    if (newline || body) {
      push(`{`);
      indent();
    }
    if (returns) {
      if (newline) {
        push(`return `);
      }
      if (isArray(returns)) {
        genNodeListAsArray(returns, context);
      } else {
        genNode(returns, context);
      }
    } else if (body) {
      genNode(body, context);
    }
    if (newline || body) {
      deindent();
      push(`}`);
    }
    if (isSlot) {
      if (node.isNonScopedSlot) {
        push(`, undefined, true`);
      }
      push(`)`);
    }
  }
  function genConditionalExpression(node, context) {
    const { test, consequent, alternate, newline: needNewline } = node;
    const { push, indent, deindent, newline } = context;
    if (test.type === 4) {
      const needsParens = !isSimpleIdentifier(test.content);
      needsParens && push(`(`);
      genExpression(test, context);
      needsParens && push(`)`);
    } else {
      push(`(`);
      genNode(test, context);
      push(`)`);
    }
    needNewline && indent();
    context.indentLevel++;
    needNewline || push(` `);
    push(`? `);
    genNode(consequent, context);
    context.indentLevel--;
    needNewline && newline();
    needNewline || push(` `);
    push(`: `);
    const isNested = alternate.type === 19;
    if (!isNested) {
      context.indentLevel++;
    }
    genNode(alternate, context);
    if (!isNested) {
      context.indentLevel--;
    }
    needNewline && deindent(true);
  }
  function genCacheExpression(node, context) {
    const { push, helper, indent, deindent, newline } = context;
    push(`_cache[${node.index}] || (`);
    if (node.isVNode) {
      indent();
      push(`${helper(SET_BLOCK_TRACKING)}(-1),`);
      newline();
    }
    push(`_cache[${node.index}] = `);
    genNode(node.value, context);
    if (node.isVNode) {
      push(`,`);
      newline();
      push(`${helper(SET_BLOCK_TRACKING)}(1),`);
      newline();
      push(`_cache[${node.index}]`);
      deindent();
    }
    push(`)`);
  }
  function walkIdentifiers(root, onIdentifier, includeAll = false, parentStack = [], knownIds = /* @__PURE__ */ Object.create(null)) {
    {
      return;
    }
  }
  function isReferencedIdentifier(id, parent, parentStack) {
    {
      return false;
    }
  }
  function isInDestructureAssignment(parent, parentStack) {
    if (parent && (parent.type === "ObjectProperty" || parent.type === "ArrayPattern")) {
      let i = parentStack.length;
      while (i--) {
        const p2 = parentStack[i];
        if (p2.type === "AssignmentExpression") {
          return true;
        } else if (p2.type !== "ObjectProperty" && !p2.type.endsWith("Pattern")) {
          break;
        }
      }
    }
    return false;
  }
  function walkFunctionParams(node, onIdent) {
    for (const p2 of node.params) {
      for (const id of extractIdentifiers(p2)) {
        onIdent(id);
      }
    }
  }
  function walkBlockDeclarations(block, onIdent) {
    for (const stmt of block.body) {
      if (stmt.type === "VariableDeclaration") {
        if (stmt.declare)
          continue;
        for (const decl of stmt.declarations) {
          for (const id of extractIdentifiers(decl.id)) {
            onIdent(id);
          }
        }
      } else if (stmt.type === "FunctionDeclaration" || stmt.type === "ClassDeclaration") {
        if (stmt.declare || !stmt.id)
          continue;
        onIdent(stmt.id);
      }
    }
  }
  function extractIdentifiers(param, nodes = []) {
    switch (param.type) {
      case "Identifier":
        nodes.push(param);
        break;
      case "MemberExpression":
        let object = param;
        while (object.type === "MemberExpression") {
          object = object.object;
        }
        nodes.push(object);
        break;
      case "ObjectPattern":
        for (const prop of param.properties) {
          if (prop.type === "RestElement") {
            extractIdentifiers(prop.argument, nodes);
          } else {
            extractIdentifiers(prop.value, nodes);
          }
        }
        break;
      case "ArrayPattern":
        param.elements.forEach((element) => {
          if (element)
            extractIdentifiers(element, nodes);
        });
        break;
      case "RestElement":
        extractIdentifiers(param.argument, nodes);
        break;
      case "AssignmentPattern":
        extractIdentifiers(param.left, nodes);
        break;
    }
    return nodes;
  }
  function validateBrowserExpression(node, context, asParams = false, asRawStatements = false) {
    const exp = node.content;
    if (!exp.trim()) {
      return;
    }
    try {
      new Function(asRawStatements ? ` ${exp} ` : `return ${asParams ? `(${exp}) => {}` : `(${exp})`}`);
    } catch (e) {
      let message = e.message;
      const keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
      if (keywordMatch) {
        message = `avoid using JavaScript keyword as property name: "${keywordMatch[0]}"`;
      }
      context.onError(createCompilerError(44, node.loc, void 0, message));
    }
  }
  function processExpression(node, context, asParams = false, asRawStatements = false, localVars = Object.create(context.identifiers)) {
    {
      if (process.env.NODE_ENV !== "production") {
        validateBrowserExpression(node, context, asParams, asRawStatements);
      }
      return node;
    }
  }
  function processIf(node, dir, context, processCodegen) {
    if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
      const loc = dir.exp ? dir.exp.loc : node.loc;
      context.onError(createCompilerError(28, dir.loc));
      dir.exp = createSimpleExpression(`true`, false, loc);
    }
    if (process.env.NODE_ENV !== "production" && true && dir.exp) {
      validateBrowserExpression(dir.exp, context);
    }
    if (dir.name === "if") {
      const branch = createIfBranch(node, dir);
      const ifNode = {
        type: 9,
        loc: node.loc,
        branches: [branch]
      };
      context.replaceNode(ifNode);
      if (processCodegen) {
        return processCodegen(ifNode, branch, true);
      }
    } else {
      const siblings = context.parent.children;
      const comments = [];
      let i = siblings.indexOf(node);
      while (i-- >= -1) {
        const sibling = siblings[i];
        if (process.env.NODE_ENV !== "production" && sibling && sibling.type === 3) {
          context.removeNode(sibling);
          comments.unshift(sibling);
          continue;
        }
        if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
          context.removeNode(sibling);
          continue;
        }
        if (sibling && sibling.type === 9) {
          if (dir.name === "else-if" && sibling.branches[sibling.branches.length - 1].condition === void 0) {
            context.onError(createCompilerError(30, node.loc));
          }
          context.removeNode();
          const branch = createIfBranch(node, dir);
          if (process.env.NODE_ENV !== "production" && comments.length && !(context.parent && context.parent.type === 1 && isBuiltInType(context.parent.tag, "transition"))) {
            branch.children = [...comments, ...branch.children];
          }
          if (process.env.NODE_ENV !== "production" || false) {
            const key = branch.userKey;
            if (key) {
              sibling.branches.forEach(({ userKey }) => {
                if (isSameKey(userKey, key)) {
                  context.onError(createCompilerError(29, branch.userKey.loc));
                }
              });
            }
          }
          sibling.branches.push(branch);
          const onExit = processCodegen && processCodegen(sibling, branch, false);
          traverseNode(branch, context);
          if (onExit)
            onExit();
          context.currentNode = null;
        } else {
          context.onError(createCompilerError(30, node.loc));
        }
        break;
      }
    }
  }
  function createIfBranch(node, dir) {
    const isTemplateIf = node.tagType === 3;
    return {
      type: 10,
      loc: node.loc,
      condition: dir.name === "else" ? void 0 : dir.exp,
      children: isTemplateIf && !findDir(node, "for") ? node.children : [node],
      userKey: findProp(node, `key`),
      isTemplateIf
    };
  }
  function createCodegenNodeForBranch(branch, keyIndex, context) {
    if (branch.condition) {
      return createConditionalExpression(
        branch.condition,
        createChildrenCodegenNode(branch, keyIndex, context),
        createCallExpression(context.helper(CREATE_COMMENT), [
          process.env.NODE_ENV !== "production" ? '"v-if"' : '""',
          "true"
        ])
      );
    } else {
      return createChildrenCodegenNode(branch, keyIndex, context);
    }
  }
  function createChildrenCodegenNode(branch, keyIndex, context) {
    const { helper } = context;
    const keyProperty = createObjectProperty(`key`, createSimpleExpression(`${keyIndex}`, false, locStub, 2));
    const { children } = branch;
    const firstChild = children[0];
    const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
    if (needFragmentWrapper) {
      if (children.length === 1 && firstChild.type === 11) {
        const vnodeCall = firstChild.codegenNode;
        injectProp(vnodeCall, keyProperty, context);
        return vnodeCall;
      } else {
        let patchFlag = 64;
        let patchFlagText = PatchFlagNames[64];
        if (process.env.NODE_ENV !== "production" && !branch.isTemplateIf && children.filter((c) => c.type !== 3).length === 1) {
          patchFlag |= 2048;
          patchFlagText += `, ${PatchFlagNames[2048]}`;
        }
        return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, patchFlag + (process.env.NODE_ENV !== "production" ? ` /* ${patchFlagText} */` : ``), void 0, void 0, true, false, false, branch.loc);
      }
    } else {
      const ret = firstChild.codegenNode;
      const vnodeCall = getMemoedVNodeCall(ret);
      if (vnodeCall.type === 13) {
        makeBlock(vnodeCall, context);
      }
      injectProp(vnodeCall, keyProperty, context);
      return ret;
    }
  }
  function isSameKey(a, b) {
    if (!a || a.type !== b.type) {
      return false;
    }
    if (a.type === 6) {
      if (a.value.content !== b.value.content) {
        return false;
      }
    } else {
      const exp = a.exp;
      const branchExp = b.exp;
      if (exp.type !== branchExp.type) {
        return false;
      }
      if (exp.type !== 4 || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) {
        return false;
      }
    }
    return true;
  }
  function getParentCondition(node) {
    while (true) {
      if (node.type === 19) {
        if (node.alternate.type === 19) {
          node = node.alternate;
        } else {
          return node;
        }
      } else if (node.type === 20) {
        node = node.value;
      }
    }
  }
  function processFor(node, dir, context, processCodegen) {
    if (!dir.exp) {
      context.onError(createCompilerError(31, dir.loc));
      return;
    }
    const parseResult = parseForExpression(
      dir.exp,
      context
    );
    if (!parseResult) {
      context.onError(createCompilerError(32, dir.loc));
      return;
    }
    const { addIdentifiers, removeIdentifiers, scopes } = context;
    const { source, value, key, index } = parseResult;
    const forNode = {
      type: 11,
      loc: dir.loc,
      source,
      valueAlias: value,
      keyAlias: key,
      objectIndexAlias: index,
      parseResult,
      children: isTemplateNode(node) ? node.children : [node]
    };
    context.replaceNode(forNode);
    scopes.vFor++;
    const onExit = processCodegen && processCodegen(forNode);
    return () => {
      scopes.vFor--;
      if (onExit)
        onExit();
    };
  }
  function parseForExpression(input, context) {
    const loc = input.loc;
    const exp = input.content;
    const inMatch = exp.match(forAliasRE);
    if (!inMatch)
      return;
    const [, LHS, RHS] = inMatch;
    const result = {
      source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
      value: void 0,
      key: void 0,
      index: void 0
    };
    if (process.env.NODE_ENV !== "production" && true) {
      validateBrowserExpression(result.source, context);
    }
    let valueContent = LHS.trim().replace(stripParensRE, "").trim();
    const trimmedOffset = LHS.indexOf(valueContent);
    const iteratorMatch = valueContent.match(forIteratorRE);
    if (iteratorMatch) {
      valueContent = valueContent.replace(forIteratorRE, "").trim();
      const keyContent = iteratorMatch[1].trim();
      let keyOffset;
      if (keyContent) {
        keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
        result.key = createAliasExpression(loc, keyContent, keyOffset);
        if (process.env.NODE_ENV !== "production" && true) {
          validateBrowserExpression(result.key, context, true);
        }
      }
      if (iteratorMatch[2]) {
        const indexContent = iteratorMatch[2].trim();
        if (indexContent) {
          result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length));
          if (process.env.NODE_ENV !== "production" && true) {
            validateBrowserExpression(result.index, context, true);
          }
        }
      }
    }
    if (valueContent) {
      result.value = createAliasExpression(loc, valueContent, trimmedOffset);
      if (process.env.NODE_ENV !== "production" && true) {
        validateBrowserExpression(result.value, context, true);
      }
    }
    return result;
  }
  function createAliasExpression(range2, content, offset) {
    return createSimpleExpression(content, false, getInnerRange(range2, offset, content.length));
  }
  function createForLoopParams({ value, key, index }, memoArgs = []) {
    return createParamsList([value, key, index, ...memoArgs]);
  }
  function createParamsList(args) {
    let i = args.length;
    while (i--) {
      if (args[i])
        break;
    }
    return args.slice(0, i + 1).map((arg, i2) => arg || createSimpleExpression(`_`.repeat(i2 + 1), false));
  }
  function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
    context.helper(WITH_CTX);
    const { children, loc } = node;
    const slotsProperties = [];
    const dynamicSlots = [];
    let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
    const onComponentSlot = findDir(node, "slot", true);
    if (onComponentSlot) {
      const { arg, exp } = onComponentSlot;
      if (arg && !isStaticExp(arg)) {
        hasDynamicSlots = true;
      }
      slotsProperties.push(createObjectProperty(arg || createSimpleExpression("default", true), buildSlotFn(exp, children, loc)));
    }
    let hasTemplateSlots = false;
    let hasNamedDefaultSlot = false;
    const implicitDefaultChildren = [];
    const seenSlotNames = /* @__PURE__ */ new Set();
    for (let i = 0; i < children.length; i++) {
      const slotElement = children[i];
      let slotDir;
      if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
        if (slotElement.type !== 3) {
          implicitDefaultChildren.push(slotElement);
        }
        continue;
      }
      if (onComponentSlot) {
        context.onError(createCompilerError(37, slotDir.loc));
        break;
      }
      hasTemplateSlots = true;
      const { children: slotChildren, loc: slotLoc } = slotElement;
      const { arg: slotName = createSimpleExpression(`default`, true), exp: slotProps, loc: dirLoc } = slotDir;
      let staticSlotName;
      if (isStaticExp(slotName)) {
        staticSlotName = slotName ? slotName.content : `default`;
      } else {
        hasDynamicSlots = true;
      }
      const slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc);
      let vIf;
      let vElse;
      let vFor;
      if (vIf = findDir(slotElement, "if")) {
        hasDynamicSlots = true;
        dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback));
      } else if (vElse = findDir(slotElement, /^else(-if)?$/, true)) {
        let j = i;
        let prev;
        while (j--) {
          prev = children[j];
          if (prev.type !== 3) {
            break;
          }
        }
        if (prev && isTemplateNode(prev) && findDir(prev, "if")) {
          children.splice(i, 1);
          i--;
          let conditional = dynamicSlots[dynamicSlots.length - 1];
          while (conditional.alternate.type === 19) {
            conditional = conditional.alternate;
          }
          conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback) : buildDynamicSlot(slotName, slotFunction);
        } else {
          context.onError(createCompilerError(30, vElse.loc));
        }
      } else if (vFor = findDir(slotElement, "for")) {
        hasDynamicSlots = true;
        const parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);
        if (parseResult) {
          dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [
            parseResult.source,
            createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true)
          ]));
        } else {
          context.onError(createCompilerError(32, vFor.loc));
        }
      } else {
        if (staticSlotName) {
          if (seenSlotNames.has(staticSlotName)) {
            context.onError(createCompilerError(38, dirLoc));
            continue;
          }
          seenSlotNames.add(staticSlotName);
          if (staticSlotName === "default") {
            hasNamedDefaultSlot = true;
          }
        }
        slotsProperties.push(createObjectProperty(slotName, slotFunction));
      }
    }
    if (!onComponentSlot) {
      const buildDefaultSlotProperty = (props, children2) => {
        const fn = buildSlotFn(props, children2, loc);
        if (context.compatConfig) {
          fn.isNonScopedSlot = true;
        }
        return createObjectProperty(`default`, fn);
      };
      if (!hasTemplateSlots) {
        slotsProperties.push(buildDefaultSlotProperty(void 0, children));
      } else if (implicitDefaultChildren.length && implicitDefaultChildren.some((node2) => isNonWhitespaceContent(node2))) {
        if (hasNamedDefaultSlot) {
          context.onError(createCompilerError(39, implicitDefaultChildren[0].loc));
        } else {
          slotsProperties.push(buildDefaultSlotProperty(void 0, implicitDefaultChildren));
        }
      }
    }
    const slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
    let slots = createObjectExpression(slotsProperties.concat(createObjectProperty(
      `_`,
      createSimpleExpression(slotFlag + (process.env.NODE_ENV !== "production" ? ` /* ${slotFlagsText[slotFlag]} */` : ``), false)
    )), loc);
    if (dynamicSlots.length) {
      slots = createCallExpression(context.helper(CREATE_SLOTS), [
        slots,
        createArrayExpression(dynamicSlots)
      ]);
    }
    return {
      slots,
      hasDynamicSlots
    };
  }
  function buildDynamicSlot(name, fn) {
    return createObjectExpression([
      createObjectProperty(`name`, name),
      createObjectProperty(`fn`, fn)
    ]);
  }
  function hasForwardedSlots(children) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      switch (child.type) {
        case 1:
          if (child.tagType === 2 || hasForwardedSlots(child.children)) {
            return true;
          }
          break;
        case 9:
          if (hasForwardedSlots(child.branches))
            return true;
          break;
        case 10:
        case 11:
          if (hasForwardedSlots(child.children))
            return true;
          break;
      }
    }
    return false;
  }
  function isNonWhitespaceContent(node) {
    if (node.type !== 2 && node.type !== 12)
      return true;
    return node.type === 2 ? !!node.content.trim() : isNonWhitespaceContent(node.content);
  }
  function resolveComponentType(node, context, ssr = false) {
    let { tag } = node;
    const isExplicitDynamic = isComponentTag(tag);
    const isProp = findProp(node, "is");
    if (isProp) {
      if (isExplicitDynamic || isCompatEnabled("COMPILER_IS_ON_ELEMENT", context)) {
        const exp = isProp.type === 6 ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;
        if (exp) {
          return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
            exp
          ]);
        }
      } else if (isProp.type === 6 && isProp.value.content.startsWith("vue:")) {
        tag = isProp.value.content.slice(4);
      }
    }
    const isDir = !isExplicitDynamic && findDir(node, "is");
    if (isDir && isDir.exp) {
      return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
        isDir.exp
      ]);
    }
    const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
    if (builtIn) {
      if (!ssr)
        context.helper(builtIn);
      return builtIn;
    }
    context.helper(RESOLVE_COMPONENT);
    context.components.add(tag);
    return toValidAssetId(tag, `component`);
  }
  function buildProps(node, context, props = node.props, isComponent2, isDynamicComponent, ssr = false) {
    const { tag, loc: elementLoc, children } = node;
    let properties = [];
    const mergeArgs = [];
    const runtimeDirectives = [];
    const hasChildren = children.length > 0;
    let shouldUseBlock = false;
    let patchFlag = 0;
    let hasRef = false;
    let hasClassBinding = false;
    let hasStyleBinding = false;
    let hasHydrationEventBinding = false;
    let hasDynamicKeys = false;
    let hasVnodeHook = false;
    const dynamicPropNames = [];
    const analyzePatchFlag = ({ key, value }) => {
      if (isStaticExp(key)) {
        const name = key.content;
        const isEventHandler = isOn(name);
        if (isEventHandler && (!isComponent2 || isDynamicComponent) && name.toLowerCase() !== "onclick" && name !== "onUpdate:modelValue" && !isReservedProp(name)) {
          hasHydrationEventBinding = true;
        }
        if (isEventHandler && isReservedProp(name)) {
          hasVnodeHook = true;
        }
        if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) {
          return;
        }
        if (name === "ref") {
          hasRef = true;
        } else if (name === "class") {
          hasClassBinding = true;
        } else if (name === "style") {
          hasStyleBinding = true;
        } else if (name !== "key" && !dynamicPropNames.includes(name)) {
          dynamicPropNames.push(name);
        }
        if (isComponent2 && (name === "class" || name === "style") && !dynamicPropNames.includes(name)) {
          dynamicPropNames.push(name);
        }
      } else {
        hasDynamicKeys = true;
      }
    };
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      if (prop.type === 6) {
        const { loc, name, value } = prop;
        let isStatic = true;
        if (name === "ref") {
          hasRef = true;
          if (context.scopes.vFor > 0) {
            properties.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
          }
        }
        if (name === "is" && (isComponentTag(tag) || value && value.content.startsWith("vue:") || isCompatEnabled("COMPILER_IS_ON_ELEMENT", context))) {
          continue;
        }
        properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : "", isStatic, value ? value.loc : loc)));
      } else {
        const { name, arg, exp, loc } = prop;
        const isVBind = name === "bind";
        const isVOn = name === "on";
        if (name === "slot") {
          if (!isComponent2) {
            context.onError(createCompilerError(40, loc));
          }
          continue;
        }
        if (name === "once" || name === "memo") {
          continue;
        }
        if (name === "is" || isVBind && isStaticArgOf(arg, "is") && (isComponentTag(tag) || isCompatEnabled("COMPILER_IS_ON_ELEMENT", context))) {
          continue;
        }
        if (isVOn && ssr) {
          continue;
        }
        if (isVBind && isStaticArgOf(arg, "key") || isVOn && hasChildren && isStaticArgOf(arg, "vue:before-update")) {
          shouldUseBlock = true;
        }
        if (isVBind && isStaticArgOf(arg, "ref") && context.scopes.vFor > 0) {
          properties.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
        }
        if (!arg && (isVBind || isVOn)) {
          hasDynamicKeys = true;
          if (exp) {
            if (properties.length) {
              mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
              properties = [];
            }
            if (isVBind) {
              {
                if (process.env.NODE_ENV !== "production") {
                  const hasOverridableKeys = mergeArgs.some((arg2) => {
                    if (arg2.type === 15) {
                      return arg2.properties.some(({ key }) => {
                        if (key.type !== 4 || !key.isStatic) {
                          return true;
                        }
                        return key.content !== "class" && key.content !== "style" && !isOn(key.content);
                      });
                    } else {
                      return true;
                    }
                  });
                  if (hasOverridableKeys) {
                    checkCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER", context, loc);
                  }
                }
                if (isCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER", context)) {
                  mergeArgs.unshift(exp);
                  continue;
                }
              }
              mergeArgs.push(exp);
            } else {
              mergeArgs.push({
                type: 14,
                loc,
                callee: context.helper(TO_HANDLERS),
                arguments: [exp]
              });
            }
          } else {
            context.onError(createCompilerError(isVBind ? 34 : 35, loc));
          }
          continue;
        }
        const directiveTransform = context.directiveTransforms[name];
        if (directiveTransform) {
          const { props: props2, needRuntime } = directiveTransform(prop, node, context);
          !ssr && props2.forEach(analyzePatchFlag);
          properties.push(...props2);
          if (needRuntime) {
            runtimeDirectives.push(prop);
            if (isSymbol(needRuntime)) {
              directiveImportMap.set(prop, needRuntime);
            }
          }
        } else if (!isBuiltInDirective(name)) {
          runtimeDirectives.push(prop);
          if (hasChildren) {
            shouldUseBlock = true;
          }
        }
      }
    }
    let propsExpression = void 0;
    if (mergeArgs.length) {
      if (properties.length) {
        mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
      }
      if (mergeArgs.length > 1) {
        propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
      } else {
        propsExpression = mergeArgs[0];
      }
    } else if (properties.length) {
      propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
    }
    if (hasDynamicKeys) {
      patchFlag |= 16;
    } else {
      if (hasClassBinding && !isComponent2) {
        patchFlag |= 2;
      }
      if (hasStyleBinding && !isComponent2) {
        patchFlag |= 4;
      }
      if (dynamicPropNames.length) {
        patchFlag |= 8;
      }
      if (hasHydrationEventBinding) {
        patchFlag |= 32;
      }
    }
    if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
      patchFlag |= 512;
    }
    if (!context.inSSR && propsExpression) {
      switch (propsExpression.type) {
        case 15:
          let classKeyIndex = -1;
          let styleKeyIndex = -1;
          let hasDynamicKey = false;
          for (let i = 0; i < propsExpression.properties.length; i++) {
            const key = propsExpression.properties[i].key;
            if (isStaticExp(key)) {
              if (key.content === "class") {
                classKeyIndex = i;
              } else if (key.content === "style") {
                styleKeyIndex = i;
              }
            } else if (!key.isHandlerKey) {
              hasDynamicKey = true;
            }
          }
          const classProp = propsExpression.properties[classKeyIndex];
          const styleProp = propsExpression.properties[styleKeyIndex];
          if (!hasDynamicKey) {
            if (classProp && !isStaticExp(classProp.value)) {
              classProp.value = createCallExpression(context.helper(NORMALIZE_CLASS), [classProp.value]);
            }
            if (styleProp && (hasStyleBinding || styleProp.value.type === 4 && styleProp.value.content.trim()[0] === `[` || styleProp.value.type === 17)) {
              styleProp.value = createCallExpression(context.helper(NORMALIZE_STYLE), [styleProp.value]);
            }
          } else {
            propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [propsExpression]);
          }
          break;
        case 14:
          break;
        default:
          propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [
            createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
              propsExpression
            ])
          ]);
          break;
      }
    }
    return {
      props: propsExpression,
      directives: runtimeDirectives,
      patchFlag,
      dynamicPropNames,
      shouldUseBlock
    };
  }
  function dedupeProperties(properties) {
    const knownProps = /* @__PURE__ */ new Map();
    const deduped = [];
    for (let i = 0; i < properties.length; i++) {
      const prop = properties[i];
      if (prop.key.type === 8 || !prop.key.isStatic) {
        deduped.push(prop);
        continue;
      }
      const name = prop.key.content;
      const existing = knownProps.get(name);
      if (existing) {
        if (name === "style" || name === "class" || isOn(name)) {
          mergeAsArray(existing, prop);
        }
      } else {
        knownProps.set(name, prop);
        deduped.push(prop);
      }
    }
    return deduped;
  }
  function mergeAsArray(existing, incoming) {
    if (existing.value.type === 17) {
      existing.value.elements.push(incoming.value);
    } else {
      existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
    }
  }
  function buildDirectiveArgs(dir, context) {
    const dirArgs = [];
    const runtime = directiveImportMap.get(dir);
    if (runtime) {
      dirArgs.push(context.helperString(runtime));
    } else {
      {
        context.helper(RESOLVE_DIRECTIVE);
        context.directives.add(dir.name);
        dirArgs.push(toValidAssetId(dir.name, `directive`));
      }
    }
    const { loc } = dir;
    if (dir.exp)
      dirArgs.push(dir.exp);
    if (dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`);
      }
      dirArgs.push(dir.arg);
    }
    if (Object.keys(dir.modifiers).length) {
      if (!dir.arg) {
        if (!dir.exp) {
          dirArgs.push(`void 0`);
        }
        dirArgs.push(`void 0`);
      }
      const trueExpression = createSimpleExpression(`true`, false, loc);
      dirArgs.push(createObjectExpression(dir.modifiers.map((modifier) => createObjectProperty(modifier, trueExpression)), loc));
    }
    return createArrayExpression(dirArgs, dir.loc);
  }
  function stringifyDynamicPropNames(props) {
    let propsNamesString = `[`;
    for (let i = 0, l = props.length; i < l; i++) {
      propsNamesString += JSON.stringify(props[i]);
      if (i < l - 1)
        propsNamesString += ", ";
    }
    return propsNamesString + `]`;
  }
  function isComponentTag(tag) {
    return tag === "component" || tag === "Component";
  }
  function processSlotOutlet(node, context) {
    let slotName = `"default"`;
    let slotProps = void 0;
    const nonNameProps = [];
    for (let i = 0; i < node.props.length; i++) {
      const p2 = node.props[i];
      if (p2.type === 6) {
        if (p2.value) {
          if (p2.name === "name") {
            slotName = JSON.stringify(p2.value.content);
          } else {
            p2.name = camelize2(p2.name);
            nonNameProps.push(p2);
          }
        }
      } else {
        if (p2.name === "bind" && isStaticArgOf(p2.arg, "name")) {
          if (p2.exp)
            slotName = p2.exp;
        } else {
          if (p2.name === "bind" && p2.arg && isStaticExp(p2.arg)) {
            p2.arg.content = camelize2(p2.arg.content);
          }
          nonNameProps.push(p2);
        }
      }
    }
    if (nonNameProps.length > 0) {
      const { props, directives } = buildProps(node, context, nonNameProps, false, false);
      slotProps = props;
      if (directives.length) {
        context.onError(createCompilerError(36, directives[0].loc));
      }
    }
    return {
      slotName,
      slotProps
    };
  }
  function createTransformProps(props = []) {
    return { props };
  }
  function rewriteFilter(node, context) {
    if (node.type === 4) {
      parseFilter(node, context);
    } else {
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (typeof child !== "object")
          continue;
        if (child.type === 4) {
          parseFilter(child, context);
        } else if (child.type === 8) {
          rewriteFilter(node, context);
        } else if (child.type === 5) {
          rewriteFilter(child.content, context);
        }
      }
    }
  }
  function parseFilter(node, context) {
    const exp = node.content;
    let inSingle = false;
    let inDouble = false;
    let inTemplateString = false;
    let inRegex = false;
    let curly = 0;
    let square = 0;
    let paren = 0;
    let lastFilterIndex = 0;
    let c, prev, i, expression, filters = [];
    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 39 && prev !== 92)
          inSingle = false;
      } else if (inDouble) {
        if (c === 34 && prev !== 92)
          inDouble = false;
      } else if (inTemplateString) {
        if (c === 96 && prev !== 92)
          inTemplateString = false;
      } else if (inRegex) {
        if (c === 47 && prev !== 92)
          inRegex = false;
      } else if (c === 124 && exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
        if (expression === void 0) {
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 34:
            inDouble = true;
            break;
          case 39:
            inSingle = true;
            break;
          case 96:
            inTemplateString = true;
            break;
          case 40:
            paren++;
            break;
          case 41:
            paren--;
            break;
          case 91:
            square++;
            break;
          case 93:
            square--;
            break;
          case 123:
            curly++;
            break;
          case 125:
            curly--;
            break;
        }
        if (c === 47) {
          let j = i - 1;
          let p2;
          for (; j >= 0; j--) {
            p2 = exp.charAt(j);
            if (p2 !== " ")
              break;
          }
          if (!p2 || !validDivisionCharRE.test(p2)) {
            inRegex = true;
          }
        }
      }
    }
    if (expression === void 0) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }
    function pushFilter() {
      filters.push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }
    if (filters.length) {
      process.env.NODE_ENV !== "production" && warnDeprecation("COMPILER_FILTER", context, node.loc);
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i], context);
      }
      node.content = expression;
    }
  }
  function wrapFilter(exp, filter, context) {
    context.helper(RESOLVE_FILTER);
    const i = filter.indexOf("(");
    if (i < 0) {
      context.filters.add(filter);
      return `${toValidAssetId(filter, "filter")}(${exp})`;
    } else {
      const name = filter.slice(0, i);
      const args = filter.slice(i + 1);
      context.filters.add(name);
      return `${toValidAssetId(name, "filter")}(${exp}${args !== ")" ? "," + args : args}`;
    }
  }
  function getBaseTransformPreset(prefixIdentifiers) {
    return [
      [
        transformOnce,
        transformIf,
        transformMemo,
        transformFor,
        ...[transformFilter],
        ...process.env.NODE_ENV !== "production" ? [transformExpression] : [],
        transformSlotOutlet,
        transformElement,
        trackSlotScopes,
        transformText
      ],
      {
        on: transformOn,
        bind: transformBind,
        model: transformModel
      }
    ];
  }
  function baseCompile(template, options = {}) {
    const onError = options.onError || defaultOnError;
    const isModuleMode = options.mode === "module";
    {
      if (options.prefixIdentifiers === true) {
        onError(createCompilerError(46));
      } else if (isModuleMode) {
        onError(createCompilerError(47));
      }
    }
    const prefixIdentifiers = false;
    if (options.cacheHandlers) {
      onError(createCompilerError(48));
    }
    if (options.scopeId && !isModuleMode) {
      onError(createCompilerError(49));
    }
    const ast = isString(template) ? baseParse(template, options) : template;
    const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
    transform(ast, extend({}, options, {
      prefixIdentifiers,
      nodeTransforms: [
        ...nodeTransforms,
        ...options.nodeTransforms || []
      ],
      directiveTransforms: extend(
        {},
        directiveTransforms,
        options.directiveTransforms || {}
      )
    }));
    return generate(ast, extend({}, options, {
      prefixIdentifiers
    }));
  }
  var errorMessages, FRAGMENT, TELEPORT, SUSPENSE, KEEP_ALIVE, BASE_TRANSITION, OPEN_BLOCK, CREATE_BLOCK, CREATE_ELEMENT_BLOCK, CREATE_VNODE, CREATE_ELEMENT_VNODE, CREATE_COMMENT, CREATE_TEXT, CREATE_STATIC, RESOLVE_COMPONENT, RESOLVE_DYNAMIC_COMPONENT, RESOLVE_DIRECTIVE, RESOLVE_FILTER, WITH_DIRECTIVES, RENDER_LIST, RENDER_SLOT, CREATE_SLOTS, TO_DISPLAY_STRING, MERGE_PROPS, NORMALIZE_CLASS, NORMALIZE_STYLE, NORMALIZE_PROPS, GUARD_REACTIVE_PROPS, TO_HANDLERS, CAMELIZE, CAPITALIZE, TO_HANDLER_KEY, SET_BLOCK_TRACKING, PUSH_SCOPE_ID, POP_SCOPE_ID, WITH_CTX, UNREF, IS_REF, WITH_MEMO, IS_MEMO_SAME, helperNameMap, locStub, isStaticExp, isBuiltInType, nonIdentifierRE, isSimpleIdentifier, validFirstIdentCharRE, validIdentCharRE, whitespaceRE, isMemberExpressionBrowser, isMemberExpressionNode, isMemberExpression, propsHelperSet, deprecationData, decodeRE, decodeMap, defaultParserOptions, isSpecialTemplateDirective, allowHoistedHelperSet, PURE_ANNOTATION, aliasHelper, isFunctionType, isStaticProperty, isStaticPropertyKey, prohibitedKeywordRE, stripStringRE, transformExpression, transformIf, transformFor, forAliasRE, forIteratorRE, stripParensRE, defaultFallback, trackSlotScopes, trackVForSlotScopes, buildClientSlotFn, directiveImportMap, transformElement, cacheStringFunction2, camelizeRE2, camelize2, transformSlotOutlet, fnExpRE, transformOn, transformBind, injectPrefix, transformText, seen, transformOnce, transformModel, validDivisionCharRE, transformFilter, seen$1, transformMemo, noopDirectiveTransform;
  var init_compiler_core_esm_bundler = __esm({
    "../../node_modules/.pnpm/@vue+compiler-core@3.2.37/node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js"() {
      init_shared_esm_bundler();
      init_shared_esm_bundler();
      errorMessages = {
        [0]: "Illegal comment.",
        [1]: "CDATA section is allowed only in XML context.",
        [2]: "Duplicate attribute.",
        [3]: "End tag cannot have attributes.",
        [4]: "Illegal '/' in tags.",
        [5]: "Unexpected EOF in tag.",
        [6]: "Unexpected EOF in CDATA section.",
        [7]: "Unexpected EOF in comment.",
        [8]: "Unexpected EOF in script.",
        [9]: "Unexpected EOF in tag.",
        [10]: "Incorrectly closed comment.",
        [11]: "Incorrectly opened comment.",
        [12]: "Illegal tag name. Use '&lt;' to print '<'.",
        [13]: "Attribute value was expected.",
        [14]: "End tag name was expected.",
        [15]: "Whitespace was expected.",
        [16]: "Unexpected '<!--' in comment.",
        [17]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
        [18]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
        [19]: "Attribute name cannot start with '='.",
        [21]: "'<?' is allowed only in XML context.",
        [20]: `Unexpected null character.`,
        [22]: "Illegal '/' in tags.",
        [23]: "Invalid end tag.",
        [24]: "Element is missing end tag.",
        [25]: "Interpolation end sign was not found.",
        [27]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
        [26]: "Legal directive name was expected.",
        [28]: `v-if/v-else-if is missing expression.`,
        [29]: `v-if/else branches must use unique keys.`,
        [30]: `v-else/v-else-if has no adjacent v-if or v-else-if.`,
        [31]: `v-for is missing expression.`,
        [32]: `v-for has invalid expression.`,
        [33]: `<template v-for> key should be placed on the <template> tag.`,
        [34]: `v-bind is missing expression.`,
        [35]: `v-on is missing expression.`,
        [36]: `Unexpected custom directive on <slot> outlet.`,
        [37]: `Mixed v-slot usage on both the component and nested <template>.When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.`,
        [38]: `Duplicate slot names found. `,
        [39]: `Extraneous children found when component already has explicitly named default slot. These children will be ignored.`,
        [40]: `v-slot can only be used on components or <template> tags.`,
        [41]: `v-model is missing expression.`,
        [42]: `v-model value must be a valid JavaScript member expression.`,
        [43]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
        [44]: `Error parsing JavaScript expression: `,
        [45]: `<KeepAlive> expects exactly one child component.`,
        [46]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
        [47]: `ES module mode is not supported in this build of compiler.`,
        [48]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
        [49]: `"scopeId" option is only supported in module mode.`,
        [50]: ``
      };
      FRAGMENT = Symbol(process.env.NODE_ENV !== "production" ? `Fragment` : ``);
      TELEPORT = Symbol(process.env.NODE_ENV !== "production" ? `Teleport` : ``);
      SUSPENSE = Symbol(process.env.NODE_ENV !== "production" ? `Suspense` : ``);
      KEEP_ALIVE = Symbol(process.env.NODE_ENV !== "production" ? `KeepAlive` : ``);
      BASE_TRANSITION = Symbol(process.env.NODE_ENV !== "production" ? `BaseTransition` : ``);
      OPEN_BLOCK = Symbol(process.env.NODE_ENV !== "production" ? `openBlock` : ``);
      CREATE_BLOCK = Symbol(process.env.NODE_ENV !== "production" ? `createBlock` : ``);
      CREATE_ELEMENT_BLOCK = Symbol(process.env.NODE_ENV !== "production" ? `createElementBlock` : ``);
      CREATE_VNODE = Symbol(process.env.NODE_ENV !== "production" ? `createVNode` : ``);
      CREATE_ELEMENT_VNODE = Symbol(process.env.NODE_ENV !== "production" ? `createElementVNode` : ``);
      CREATE_COMMENT = Symbol(process.env.NODE_ENV !== "production" ? `createCommentVNode` : ``);
      CREATE_TEXT = Symbol(process.env.NODE_ENV !== "production" ? `createTextVNode` : ``);
      CREATE_STATIC = Symbol(process.env.NODE_ENV !== "production" ? `createStaticVNode` : ``);
      RESOLVE_COMPONENT = Symbol(process.env.NODE_ENV !== "production" ? `resolveComponent` : ``);
      RESOLVE_DYNAMIC_COMPONENT = Symbol(process.env.NODE_ENV !== "production" ? `resolveDynamicComponent` : ``);
      RESOLVE_DIRECTIVE = Symbol(process.env.NODE_ENV !== "production" ? `resolveDirective` : ``);
      RESOLVE_FILTER = Symbol(process.env.NODE_ENV !== "production" ? `resolveFilter` : ``);
      WITH_DIRECTIVES = Symbol(process.env.NODE_ENV !== "production" ? `withDirectives` : ``);
      RENDER_LIST = Symbol(process.env.NODE_ENV !== "production" ? `renderList` : ``);
      RENDER_SLOT = Symbol(process.env.NODE_ENV !== "production" ? `renderSlot` : ``);
      CREATE_SLOTS = Symbol(process.env.NODE_ENV !== "production" ? `createSlots` : ``);
      TO_DISPLAY_STRING = Symbol(process.env.NODE_ENV !== "production" ? `toDisplayString` : ``);
      MERGE_PROPS = Symbol(process.env.NODE_ENV !== "production" ? `mergeProps` : ``);
      NORMALIZE_CLASS = Symbol(process.env.NODE_ENV !== "production" ? `normalizeClass` : ``);
      NORMALIZE_STYLE = Symbol(process.env.NODE_ENV !== "production" ? `normalizeStyle` : ``);
      NORMALIZE_PROPS = Symbol(process.env.NODE_ENV !== "production" ? `normalizeProps` : ``);
      GUARD_REACTIVE_PROPS = Symbol(process.env.NODE_ENV !== "production" ? `guardReactiveProps` : ``);
      TO_HANDLERS = Symbol(process.env.NODE_ENV !== "production" ? `toHandlers` : ``);
      CAMELIZE = Symbol(process.env.NODE_ENV !== "production" ? `camelize` : ``);
      CAPITALIZE = Symbol(process.env.NODE_ENV !== "production" ? `capitalize` : ``);
      TO_HANDLER_KEY = Symbol(process.env.NODE_ENV !== "production" ? `toHandlerKey` : ``);
      SET_BLOCK_TRACKING = Symbol(process.env.NODE_ENV !== "production" ? `setBlockTracking` : ``);
      PUSH_SCOPE_ID = Symbol(process.env.NODE_ENV !== "production" ? `pushScopeId` : ``);
      POP_SCOPE_ID = Symbol(process.env.NODE_ENV !== "production" ? `popScopeId` : ``);
      WITH_CTX = Symbol(process.env.NODE_ENV !== "production" ? `withCtx` : ``);
      UNREF = Symbol(process.env.NODE_ENV !== "production" ? `unref` : ``);
      IS_REF = Symbol(process.env.NODE_ENV !== "production" ? `isRef` : ``);
      WITH_MEMO = Symbol(process.env.NODE_ENV !== "production" ? `withMemo` : ``);
      IS_MEMO_SAME = Symbol(process.env.NODE_ENV !== "production" ? `isMemoSame` : ``);
      helperNameMap = {
        [FRAGMENT]: `Fragment`,
        [TELEPORT]: `Teleport`,
        [SUSPENSE]: `Suspense`,
        [KEEP_ALIVE]: `KeepAlive`,
        [BASE_TRANSITION]: `BaseTransition`,
        [OPEN_BLOCK]: `openBlock`,
        [CREATE_BLOCK]: `createBlock`,
        [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
        [CREATE_VNODE]: `createVNode`,
        [CREATE_ELEMENT_VNODE]: `createElementVNode`,
        [CREATE_COMMENT]: `createCommentVNode`,
        [CREATE_TEXT]: `createTextVNode`,
        [CREATE_STATIC]: `createStaticVNode`,
        [RESOLVE_COMPONENT]: `resolveComponent`,
        [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
        [RESOLVE_DIRECTIVE]: `resolveDirective`,
        [RESOLVE_FILTER]: `resolveFilter`,
        [WITH_DIRECTIVES]: `withDirectives`,
        [RENDER_LIST]: `renderList`,
        [RENDER_SLOT]: `renderSlot`,
        [CREATE_SLOTS]: `createSlots`,
        [TO_DISPLAY_STRING]: `toDisplayString`,
        [MERGE_PROPS]: `mergeProps`,
        [NORMALIZE_CLASS]: `normalizeClass`,
        [NORMALIZE_STYLE]: `normalizeStyle`,
        [NORMALIZE_PROPS]: `normalizeProps`,
        [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
        [TO_HANDLERS]: `toHandlers`,
        [CAMELIZE]: `camelize`,
        [CAPITALIZE]: `capitalize`,
        [TO_HANDLER_KEY]: `toHandlerKey`,
        [SET_BLOCK_TRACKING]: `setBlockTracking`,
        [PUSH_SCOPE_ID]: `pushScopeId`,
        [POP_SCOPE_ID]: `popScopeId`,
        [WITH_CTX]: `withCtx`,
        [UNREF]: `unref`,
        [IS_REF]: `isRef`,
        [WITH_MEMO]: `withMemo`,
        [IS_MEMO_SAME]: `isMemoSame`
      };
      locStub = {
        source: "",
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 1, offset: 0 }
      };
      isStaticExp = (p2) => p2.type === 4 && p2.isStatic;
      isBuiltInType = (tag, expected) => tag === expected || tag === hyphenate(expected);
      nonIdentifierRE = /^\d|[^\$\w]/;
      isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
      validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
      validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
      whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
      isMemberExpressionBrowser = (path) => {
        path = path.trim().replace(whitespaceRE, (s) => s.trim());
        let state = 0;
        let stateStack = [];
        let currentOpenBracketCount = 0;
        let currentOpenParensCount = 0;
        let currentStringType = null;
        for (let i = 0; i < path.length; i++) {
          const char = path.charAt(i);
          switch (state) {
            case 0:
              if (char === "[") {
                stateStack.push(state);
                state = 1;
                currentOpenBracketCount++;
              } else if (char === "(") {
                stateStack.push(state);
                state = 2;
                currentOpenParensCount++;
              } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) {
                return false;
              }
              break;
            case 1:
              if (char === `'` || char === `"` || char === "`") {
                stateStack.push(state);
                state = 3;
                currentStringType = char;
              } else if (char === `[`) {
                currentOpenBracketCount++;
              } else if (char === `]`) {
                if (!--currentOpenBracketCount) {
                  state = stateStack.pop();
                }
              }
              break;
            case 2:
              if (char === `'` || char === `"` || char === "`") {
                stateStack.push(state);
                state = 3;
                currentStringType = char;
              } else if (char === `(`) {
                currentOpenParensCount++;
              } else if (char === `)`) {
                if (i === path.length - 1) {
                  return false;
                }
                if (!--currentOpenParensCount) {
                  state = stateStack.pop();
                }
              }
              break;
            case 3:
              if (char === currentStringType) {
                state = stateStack.pop();
                currentStringType = null;
              }
              break;
          }
        }
        return !currentOpenBracketCount && !currentOpenParensCount;
      };
      isMemberExpressionNode = NOOP;
      isMemberExpression = isMemberExpressionBrowser;
      propsHelperSet = /* @__PURE__ */ new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
      deprecationData = {
        ["COMPILER_IS_ON_ELEMENT"]: {
          message: `Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".`,
          link: `https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html`
        },
        ["COMPILER_V_BIND_SYNC"]: {
          message: (key) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${key}.sync\` should be changed to \`v-model:${key}\`.`,
          link: `https://v3-migration.vuejs.org/breaking-changes/v-model.html`
        },
        ["COMPILER_V_BIND_PROP"]: {
          message: `.prop modifier for v-bind has been removed and no longer necessary. Vue 3 will automatically set a binding as DOM property when appropriate.`
        },
        ["COMPILER_V_BIND_OBJECT_ORDER"]: {
          message: `v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.`,
          link: `https://v3-migration.vuejs.org/breaking-changes/v-bind.html`
        },
        ["COMPILER_V_ON_NATIVE"]: {
          message: `.native modifier for v-on has been removed as is no longer necessary.`,
          link: `https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html`
        },
        ["COMPILER_V_IF_V_FOR_PRECEDENCE"]: {
          message: `v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.`,
          link: `https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html`
        },
        ["COMPILER_NATIVE_TEMPLATE"]: {
          message: `<template> with no special directives will render as a native template element instead of its inner content in Vue 3.`
        },
        ["COMPILER_INLINE_TEMPLATE"]: {
          message: `"inline-template" has been removed in Vue 3.`,
          link: `https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html`
        },
        ["COMPILER_FILTER"]: {
          message: `filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.`,
          link: `https://v3-migration.vuejs.org/breaking-changes/filters.html`
        }
      };
      decodeRE = /&(gt|lt|amp|apos|quot);/g;
      decodeMap = {
        gt: ">",
        lt: "<",
        amp: "&",
        apos: "'",
        quot: '"'
      };
      defaultParserOptions = {
        delimiters: [`{{`, `}}`],
        getNamespace: () => 0,
        getTextMode: () => 0,
        isVoidTag: NO,
        isPreTag: NO,
        isCustomElement: NO,
        decodeEntities: (rawText) => rawText.replace(decodeRE, (_, p1) => decodeMap[p1]),
        onError: defaultOnError,
        onWarn: defaultOnWarn,
        comments: process.env.NODE_ENV !== "production"
      };
      isSpecialTemplateDirective = /* @__PURE__ */ makeMap(`if,else,else-if,for,slot`);
      allowHoistedHelperSet = /* @__PURE__ */ new Set([
        NORMALIZE_CLASS,
        NORMALIZE_STYLE,
        NORMALIZE_PROPS,
        GUARD_REACTIVE_PROPS
      ]);
      PURE_ANNOTATION = `/*#__PURE__*/`;
      aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
      isFunctionType = (node) => {
        return /Function(?:Expression|Declaration)$|Method$/.test(node.type);
      };
      isStaticProperty = (node) => node && (node.type === "ObjectProperty" || node.type === "ObjectMethod") && !node.computed;
      isStaticPropertyKey = (node, parent) => isStaticProperty(parent) && parent.key === node;
      prohibitedKeywordRE = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b") + "\\b");
      stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
      transformExpression = (node, context) => {
        if (node.type === 5) {
          node.content = processExpression(node.content, context);
        } else if (node.type === 1) {
          for (let i = 0; i < node.props.length; i++) {
            const dir = node.props[i];
            if (dir.type === 7 && dir.name !== "for") {
              const exp = dir.exp;
              const arg = dir.arg;
              if (exp && exp.type === 4 && !(dir.name === "on" && arg)) {
                dir.exp = processExpression(
                  exp,
                  context,
                  dir.name === "slot"
                );
              }
              if (arg && arg.type === 4 && !arg.isStatic) {
                dir.arg = processExpression(arg, context);
              }
            }
          }
        }
      };
      transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, (node, dir, context) => {
        return processIf(node, dir, context, (ifNode, branch, isRoot) => {
          const siblings = context.parent.children;
          let i = siblings.indexOf(ifNode);
          let key = 0;
          while (i-- >= 0) {
            const sibling = siblings[i];
            if (sibling && sibling.type === 9) {
              key += sibling.branches.length;
            }
          }
          return () => {
            if (isRoot) {
              ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
            } else {
              const parentCondition = getParentCondition(ifNode.codegenNode);
              parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
            }
          };
        });
      });
      transformFor = createStructuralDirectiveTransform("for", (node, dir, context) => {
        const { helper, removeHelper } = context;
        return processFor(node, dir, context, (forNode) => {
          const renderExp = createCallExpression(helper(RENDER_LIST), [
            forNode.source
          ]);
          const isTemplate = isTemplateNode(node);
          const memo = findDir(node, "memo");
          const keyProp = findProp(node, `key`);
          const keyExp = keyProp && (keyProp.type === 6 ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp);
          const keyProperty = keyProp ? createObjectProperty(`key`, keyExp) : null;
          const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
          const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
          forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), void 0, renderExp, fragmentFlag + (process.env.NODE_ENV !== "production" ? ` /* ${PatchFlagNames[fragmentFlag]} */` : ``), void 0, void 0, true, !isStableFragment, false, node.loc);
          return () => {
            let childBlock;
            const { children } = forNode;
            if ((process.env.NODE_ENV !== "production" || false) && isTemplate) {
              node.children.some((c) => {
                if (c.type === 1) {
                  const key = findProp(c, "key");
                  if (key) {
                    context.onError(createCompilerError(33, key.loc));
                    return true;
                  }
                }
              });
            }
            const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
            const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
            if (slotOutlet) {
              childBlock = slotOutlet.codegenNode;
              if (isTemplate && keyProperty) {
                injectProp(childBlock, keyProperty, context);
              }
            } else if (needFragmentWrapper) {
              childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([keyProperty]) : void 0, node.children, 64 + (process.env.NODE_ENV !== "production" ? ` /* ${PatchFlagNames[64]} */` : ``), void 0, void 0, true, void 0, false);
            } else {
              childBlock = children[0].codegenNode;
              if (isTemplate && keyProperty) {
                injectProp(childBlock, keyProperty, context);
              }
              if (childBlock.isBlock !== !isStableFragment) {
                if (childBlock.isBlock) {
                  removeHelper(OPEN_BLOCK);
                  removeHelper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
                } else {
                  removeHelper(getVNodeHelper(context.inSSR, childBlock.isComponent));
                }
              }
              childBlock.isBlock = !isStableFragment;
              if (childBlock.isBlock) {
                helper(OPEN_BLOCK);
                helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
              } else {
                helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
              }
            }
            if (memo) {
              const loop = createFunctionExpression(createForLoopParams(forNode.parseResult, [
                createSimpleExpression(`_cached`)
              ]));
              loop.body = createBlockStatement([
                createCompoundExpression([`const _memo = (`, memo.exp, `)`]),
                createCompoundExpression([
                  `if (_cached`,
                  ...keyExp ? [` && _cached.key === `, keyExp] : [],
                  ` && ${context.helperString(IS_MEMO_SAME)}(_cached, _memo)) return _cached`
                ]),
                createCompoundExpression([`const _item = `, childBlock]),
                createSimpleExpression(`_item.memo = _memo`),
                createSimpleExpression(`return _item`)
              ]);
              renderExp.arguments.push(loop, createSimpleExpression(`_cache`), createSimpleExpression(String(context.cached++)));
            } else {
              renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true));
            }
          };
        });
      });
      forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
      forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
      stripParensRE = /^\(|\)$/g;
      defaultFallback = createSimpleExpression(`undefined`, false);
      trackSlotScopes = (node, context) => {
        if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
          const vSlot = findDir(node, "slot");
          if (vSlot) {
            vSlot.exp;
            context.scopes.vSlot++;
            return () => {
              context.scopes.vSlot--;
            };
          }
        }
      };
      trackVForSlotScopes = (node, context) => {
        let vFor;
        if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, "for"))) {
          const result = vFor.parseResult = parseForExpression(vFor.exp, context);
          if (result) {
            const { value, key, index } = result;
            const { addIdentifiers, removeIdentifiers } = context;
            value && addIdentifiers(value);
            key && addIdentifiers(key);
            index && addIdentifiers(index);
            return () => {
              value && removeIdentifiers(value);
              key && removeIdentifiers(key);
              index && removeIdentifiers(index);
            };
          }
        }
      };
      buildClientSlotFn = (props, children, loc) => createFunctionExpression(props, children, false, true, children.length ? children[0].loc : loc);
      directiveImportMap = /* @__PURE__ */ new WeakMap();
      transformElement = (node, context) => {
        return function postTransformElement() {
          node = context.currentNode;
          if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) {
            return;
          }
          const { tag, props } = node;
          const isComponent2 = node.tagType === 1;
          let vnodeTag = isComponent2 ? resolveComponentType(node, context) : `"${tag}"`;
          const isDynamicComponent = isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
          let vnodeProps;
          let vnodeChildren;
          let vnodePatchFlag;
          let patchFlag = 0;
          let vnodeDynamicProps;
          let dynamicPropNames;
          let vnodeDirectives;
          let shouldUseBlock = isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent2 && (tag === "svg" || tag === "foreignObject");
          if (props.length > 0) {
            const propsBuildResult = buildProps(node, context, void 0, isComponent2, isDynamicComponent);
            vnodeProps = propsBuildResult.props;
            patchFlag = propsBuildResult.patchFlag;
            dynamicPropNames = propsBuildResult.dynamicPropNames;
            const directives = propsBuildResult.directives;
            vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map((dir) => buildDirectiveArgs(dir, context))) : void 0;
            if (propsBuildResult.shouldUseBlock) {
              shouldUseBlock = true;
            }
          }
          if (node.children.length > 0) {
            if (vnodeTag === KEEP_ALIVE) {
              shouldUseBlock = true;
              patchFlag |= 1024;
              if (process.env.NODE_ENV !== "production" && node.children.length > 1) {
                context.onError(createCompilerError(45, {
                  start: node.children[0].loc.start,
                  end: node.children[node.children.length - 1].loc.end,
                  source: ""
                }));
              }
            }
            const shouldBuildAsSlots = isComponent2 && vnodeTag !== TELEPORT && vnodeTag !== KEEP_ALIVE;
            if (shouldBuildAsSlots) {
              const { slots, hasDynamicSlots } = buildSlots(node, context);
              vnodeChildren = slots;
              if (hasDynamicSlots) {
                patchFlag |= 1024;
              }
            } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
              const child = node.children[0];
              const type = child.type;
              const hasDynamicTextChild = type === 5 || type === 8;
              if (hasDynamicTextChild && getConstantType(child, context) === 0) {
                patchFlag |= 1;
              }
              if (hasDynamicTextChild || type === 2) {
                vnodeChildren = child;
              } else {
                vnodeChildren = node.children;
              }
            } else {
              vnodeChildren = node.children;
            }
          }
          if (patchFlag !== 0) {
            if (process.env.NODE_ENV !== "production") {
              if (patchFlag < 0) {
                vnodePatchFlag = patchFlag + ` /* ${PatchFlagNames[patchFlag]} */`;
              } else {
                const flagNames = Object.keys(PatchFlagNames).map(Number).filter((n) => n > 0 && patchFlag & n).map((n) => PatchFlagNames[n]).join(`, `);
                vnodePatchFlag = patchFlag + ` /* ${flagNames} */`;
              }
            } else {
              vnodePatchFlag = String(patchFlag);
            }
            if (dynamicPropNames && dynamicPropNames.length) {
              vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
            }
          }
          node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false, isComponent2, node.loc);
        };
      };
      process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
      process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
      cacheStringFunction2 = (fn) => {
        const cache = /* @__PURE__ */ Object.create(null);
        return (str) => {
          const hit = cache[str];
          return hit || (cache[str] = fn(str));
        };
      };
      camelizeRE2 = /-(\w)/g;
      camelize2 = cacheStringFunction2((str) => {
        return str.replace(camelizeRE2, (_, c) => c ? c.toUpperCase() : "");
      });
      transformSlotOutlet = (node, context) => {
        if (isSlotOutlet(node)) {
          const { children, loc } = node;
          const { slotName, slotProps } = processSlotOutlet(node, context);
          const slotArgs = [
            context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
            slotName,
            "{}",
            "undefined",
            "true"
          ];
          let expectedLen = 2;
          if (slotProps) {
            slotArgs[2] = slotProps;
            expectedLen = 3;
          }
          if (children.length) {
            slotArgs[3] = createFunctionExpression([], children, false, false, loc);
            expectedLen = 4;
          }
          if (context.scopeId && !context.slotted) {
            expectedLen = 5;
          }
          slotArgs.splice(expectedLen);
          node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
        }
      };
      fnExpRE = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
      transformOn = (dir, node, context, augmentor) => {
        const { loc, modifiers, arg } = dir;
        if (!dir.exp && !modifiers.length) {
          context.onError(createCompilerError(35, loc));
        }
        let eventName;
        if (arg.type === 4) {
          if (arg.isStatic) {
            let rawName = arg.content;
            if (rawName.startsWith("vue:")) {
              rawName = `vnode-${rawName.slice(4)}`;
            }
            eventName = createSimpleExpression(toHandlerKey(camelize(rawName)), true, arg.loc);
          } else {
            eventName = createCompoundExpression([
              `${context.helperString(TO_HANDLER_KEY)}(`,
              arg,
              `)`
            ]);
          }
        } else {
          eventName = arg;
          eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
          eventName.children.push(`)`);
        }
        let exp = dir.exp;
        if (exp && !exp.content.trim()) {
          exp = void 0;
        }
        let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
        if (exp) {
          const isMemberExp = isMemberExpression(exp.content);
          const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
          const hasMultipleStatements = exp.content.includes(`;`);
          if (process.env.NODE_ENV !== "production" && true) {
            validateBrowserExpression(exp, context, false, hasMultipleStatements);
          }
          if (isInlineStatement || shouldCache && isMemberExp) {
            exp = createCompoundExpression([
              `${isInlineStatement ? `$event` : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
              exp,
              hasMultipleStatements ? `}` : `)`
            ]);
          }
        }
        let ret = {
          props: [
            createObjectProperty(eventName, exp || createSimpleExpression(`() => {}`, false, loc))
          ]
        };
        if (augmentor) {
          ret = augmentor(ret);
        }
        if (shouldCache) {
          ret.props[0].value = context.cache(ret.props[0].value);
        }
        ret.props.forEach((p2) => p2.key.isHandlerKey = true);
        return ret;
      };
      transformBind = (dir, _node, context) => {
        const { exp, modifiers, loc } = dir;
        const arg = dir.arg;
        if (arg.type !== 4) {
          arg.children.unshift(`(`);
          arg.children.push(`) || ""`);
        } else if (!arg.isStatic) {
          arg.content = `${arg.content} || ""`;
        }
        if (modifiers.includes("camel")) {
          if (arg.type === 4) {
            if (arg.isStatic) {
              arg.content = camelize(arg.content);
            } else {
              arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
            }
          } else {
            arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
            arg.children.push(`)`);
          }
        }
        if (!context.inSSR) {
          if (modifiers.includes("prop")) {
            injectPrefix(arg, ".");
          }
          if (modifiers.includes("attr")) {
            injectPrefix(arg, "^");
          }
        }
        if (!exp || exp.type === 4 && !exp.content.trim()) {
          context.onError(createCompilerError(34, loc));
          return {
            props: [createObjectProperty(arg, createSimpleExpression("", true, loc))]
          };
        }
        return {
          props: [createObjectProperty(arg, exp)]
        };
      };
      injectPrefix = (arg, prefix) => {
        if (arg.type === 4) {
          if (arg.isStatic) {
            arg.content = prefix + arg.content;
          } else {
            arg.content = `\`${prefix}\${${arg.content}}\``;
          }
        } else {
          arg.children.unshift(`'${prefix}' + (`);
          arg.children.push(`)`);
        }
      };
      transformText = (node, context) => {
        if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) {
          return () => {
            const children = node.children;
            let currentContainer = void 0;
            let hasText = false;
            for (let i = 0; i < children.length; i++) {
              const child = children[i];
              if (isText(child)) {
                hasText = true;
                for (let j = i + 1; j < children.length; j++) {
                  const next = children[j];
                  if (isText(next)) {
                    if (!currentContainer) {
                      currentContainer = children[i] = createCompoundExpression([child], child.loc);
                    }
                    currentContainer.children.push(` + `, next);
                    children.splice(j, 1);
                    j--;
                  } else {
                    currentContainer = void 0;
                    break;
                  }
                }
              }
            }
            if (!hasText || children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0 && !node.props.find((p2) => p2.type === 7 && !context.directiveTransforms[p2.name]) && !(node.tag === "template"))) {
              return;
            }
            for (let i = 0; i < children.length; i++) {
              const child = children[i];
              if (isText(child) || child.type === 8) {
                const callArgs = [];
                if (child.type !== 2 || child.content !== " ") {
                  callArgs.push(child);
                }
                if (!context.ssr && getConstantType(child, context) === 0) {
                  callArgs.push(1 + (process.env.NODE_ENV !== "production" ? ` /* ${PatchFlagNames[1]} */` : ``));
                }
                children[i] = {
                  type: 12,
                  content: child,
                  loc: child.loc,
                  codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
                };
              }
            }
          };
        }
      };
      seen = /* @__PURE__ */ new WeakSet();
      transformOnce = (node, context) => {
        if (node.type === 1 && findDir(node, "once", true)) {
          if (seen.has(node) || context.inVOnce) {
            return;
          }
          seen.add(node);
          context.inVOnce = true;
          context.helper(SET_BLOCK_TRACKING);
          return () => {
            context.inVOnce = false;
            const cur = context.currentNode;
            if (cur.codegenNode) {
              cur.codegenNode = context.cache(cur.codegenNode, true);
            }
          };
        }
      };
      transformModel = (dir, node, context) => {
        const { exp, arg } = dir;
        if (!exp) {
          context.onError(createCompilerError(41, dir.loc));
          return createTransformProps();
        }
        const rawExp = exp.loc.source;
        const expString = exp.type === 4 ? exp.content : rawExp;
        context.bindingMetadata[rawExp];
        const maybeRef = false;
        if (!expString.trim() || !isMemberExpression(expString) && !maybeRef) {
          context.onError(createCompilerError(42, exp.loc));
          return createTransformProps();
        }
        const propName = arg ? arg : createSimpleExpression("modelValue", true);
        const eventName = arg ? isStaticExp(arg) ? `onUpdate:${arg.content}` : createCompoundExpression(['"onUpdate:" + ', arg]) : `onUpdate:modelValue`;
        let assignmentExp;
        const eventArg = context.isTS ? `($event: any)` : `$event`;
        {
          assignmentExp = createCompoundExpression([
            `${eventArg} => ((`,
            exp,
            `) = $event)`
          ]);
        }
        const props = [
          createObjectProperty(propName, dir.exp),
          createObjectProperty(eventName, assignmentExp)
        ];
        if (dir.modifiers.length && node.tagType === 1) {
          const modifiers = dir.modifiers.map((m) => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`).join(`, `);
          const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([arg, ' + "Modifiers"']) : `modelModifiers`;
          props.push(createObjectProperty(modifiersKey, createSimpleExpression(`{ ${modifiers} }`, false, dir.loc, 2)));
        }
        return createTransformProps(props);
      };
      validDivisionCharRE = /[\w).+\-_$\]]/;
      transformFilter = (node, context) => {
        if (!isCompatEnabled("COMPILER_FILTER", context)) {
          return;
        }
        if (node.type === 5) {
          rewriteFilter(node.content, context);
        }
        if (node.type === 1) {
          node.props.forEach((prop) => {
            if (prop.type === 7 && prop.name !== "for" && prop.exp) {
              rewriteFilter(prop.exp, context);
            }
          });
        }
      };
      seen$1 = /* @__PURE__ */ new WeakSet();
      transformMemo = (node, context) => {
        if (node.type === 1) {
          const dir = findDir(node, "memo");
          if (!dir || seen$1.has(node)) {
            return;
          }
          seen$1.add(node);
          return () => {
            const codegenNode = node.codegenNode || context.currentNode.codegenNode;
            if (codegenNode && codegenNode.type === 13) {
              if (node.tagType !== 1) {
                makeBlock(codegenNode, context);
              }
              node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
                dir.exp,
                createFunctionExpression(void 0, codegenNode),
                `_cache`,
                String(context.cached++)
              ]);
            }
          };
        }
      };
      noopDirectiveTransform = () => ({ props: [] });
    }
  });

  // ../../node_modules/.pnpm/@vue+compiler-dom@3.2.37/node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js
  var compiler_dom_esm_bundler_exports = {};
  __export(compiler_dom_esm_bundler_exports, {
    BASE_TRANSITION: () => BASE_TRANSITION,
    CAMELIZE: () => CAMELIZE,
    CAPITALIZE: () => CAPITALIZE,
    CREATE_BLOCK: () => CREATE_BLOCK,
    CREATE_COMMENT: () => CREATE_COMMENT,
    CREATE_ELEMENT_BLOCK: () => CREATE_ELEMENT_BLOCK,
    CREATE_ELEMENT_VNODE: () => CREATE_ELEMENT_VNODE,
    CREATE_SLOTS: () => CREATE_SLOTS,
    CREATE_STATIC: () => CREATE_STATIC,
    CREATE_TEXT: () => CREATE_TEXT,
    CREATE_VNODE: () => CREATE_VNODE,
    DOMDirectiveTransforms: () => DOMDirectiveTransforms,
    DOMNodeTransforms: () => DOMNodeTransforms,
    FRAGMENT: () => FRAGMENT,
    GUARD_REACTIVE_PROPS: () => GUARD_REACTIVE_PROPS,
    IS_MEMO_SAME: () => IS_MEMO_SAME,
    IS_REF: () => IS_REF,
    KEEP_ALIVE: () => KEEP_ALIVE,
    MERGE_PROPS: () => MERGE_PROPS,
    NORMALIZE_CLASS: () => NORMALIZE_CLASS,
    NORMALIZE_PROPS: () => NORMALIZE_PROPS,
    NORMALIZE_STYLE: () => NORMALIZE_STYLE,
    OPEN_BLOCK: () => OPEN_BLOCK,
    POP_SCOPE_ID: () => POP_SCOPE_ID,
    PUSH_SCOPE_ID: () => PUSH_SCOPE_ID,
    RENDER_LIST: () => RENDER_LIST,
    RENDER_SLOT: () => RENDER_SLOT,
    RESOLVE_COMPONENT: () => RESOLVE_COMPONENT,
    RESOLVE_DIRECTIVE: () => RESOLVE_DIRECTIVE,
    RESOLVE_DYNAMIC_COMPONENT: () => RESOLVE_DYNAMIC_COMPONENT,
    RESOLVE_FILTER: () => RESOLVE_FILTER,
    SET_BLOCK_TRACKING: () => SET_BLOCK_TRACKING,
    SUSPENSE: () => SUSPENSE,
    TELEPORT: () => TELEPORT,
    TO_DISPLAY_STRING: () => TO_DISPLAY_STRING,
    TO_HANDLERS: () => TO_HANDLERS,
    TO_HANDLER_KEY: () => TO_HANDLER_KEY,
    TRANSITION: () => TRANSITION,
    TRANSITION_GROUP: () => TRANSITION_GROUP,
    UNREF: () => UNREF,
    V_MODEL_CHECKBOX: () => V_MODEL_CHECKBOX,
    V_MODEL_DYNAMIC: () => V_MODEL_DYNAMIC,
    V_MODEL_RADIO: () => V_MODEL_RADIO,
    V_MODEL_SELECT: () => V_MODEL_SELECT,
    V_MODEL_TEXT: () => V_MODEL_TEXT,
    V_ON_WITH_KEYS: () => V_ON_WITH_KEYS,
    V_ON_WITH_MODIFIERS: () => V_ON_WITH_MODIFIERS,
    V_SHOW: () => V_SHOW,
    WITH_CTX: () => WITH_CTX,
    WITH_DIRECTIVES: () => WITH_DIRECTIVES,
    WITH_MEMO: () => WITH_MEMO,
    advancePositionWithClone: () => advancePositionWithClone,
    advancePositionWithMutation: () => advancePositionWithMutation,
    assert: () => assert,
    baseCompile: () => baseCompile,
    baseParse: () => baseParse,
    buildDirectiveArgs: () => buildDirectiveArgs,
    buildProps: () => buildProps,
    buildSlots: () => buildSlots,
    checkCompatEnabled: () => checkCompatEnabled,
    compile: () => compile,
    createArrayExpression: () => createArrayExpression,
    createAssignmentExpression: () => createAssignmentExpression,
    createBlockStatement: () => createBlockStatement,
    createCacheExpression: () => createCacheExpression,
    createCallExpression: () => createCallExpression,
    createCompilerError: () => createCompilerError,
    createCompoundExpression: () => createCompoundExpression,
    createConditionalExpression: () => createConditionalExpression,
    createDOMCompilerError: () => createDOMCompilerError,
    createForLoopParams: () => createForLoopParams,
    createFunctionExpression: () => createFunctionExpression,
    createIfStatement: () => createIfStatement,
    createInterpolation: () => createInterpolation,
    createObjectExpression: () => createObjectExpression,
    createObjectProperty: () => createObjectProperty,
    createReturnStatement: () => createReturnStatement,
    createRoot: () => createRoot,
    createSequenceExpression: () => createSequenceExpression,
    createSimpleExpression: () => createSimpleExpression,
    createStructuralDirectiveTransform: () => createStructuralDirectiveTransform,
    createTemplateLiteral: () => createTemplateLiteral,
    createTransformContext: () => createTransformContext,
    createVNodeCall: () => createVNodeCall,
    extractIdentifiers: () => extractIdentifiers,
    findDir: () => findDir,
    findProp: () => findProp,
    generate: () => generate,
    generateCodeFrame: () => generateCodeFrame,
    getBaseTransformPreset: () => getBaseTransformPreset,
    getConstantType: () => getConstantType,
    getInnerRange: () => getInnerRange,
    getMemoedVNodeCall: () => getMemoedVNodeCall,
    getVNodeBlockHelper: () => getVNodeBlockHelper,
    getVNodeHelper: () => getVNodeHelper,
    hasDynamicKeyVBind: () => hasDynamicKeyVBind,
    hasScopeRef: () => hasScopeRef,
    helperNameMap: () => helperNameMap,
    injectProp: () => injectProp,
    isBuiltInType: () => isBuiltInType,
    isCoreComponent: () => isCoreComponent,
    isFunctionType: () => isFunctionType,
    isInDestructureAssignment: () => isInDestructureAssignment,
    isMemberExpression: () => isMemberExpression,
    isMemberExpressionBrowser: () => isMemberExpressionBrowser,
    isMemberExpressionNode: () => isMemberExpressionNode,
    isReferencedIdentifier: () => isReferencedIdentifier,
    isSimpleIdentifier: () => isSimpleIdentifier,
    isSlotOutlet: () => isSlotOutlet,
    isStaticArgOf: () => isStaticArgOf,
    isStaticExp: () => isStaticExp,
    isStaticProperty: () => isStaticProperty,
    isStaticPropertyKey: () => isStaticPropertyKey,
    isTemplateNode: () => isTemplateNode,
    isText: () => isText,
    isVSlot: () => isVSlot,
    locStub: () => locStub,
    makeBlock: () => makeBlock,
    noopDirectiveTransform: () => noopDirectiveTransform,
    parse: () => parse,
    parserOptions: () => parserOptions,
    processExpression: () => processExpression,
    processFor: () => processFor,
    processIf: () => processIf,
    processSlotOutlet: () => processSlotOutlet,
    registerRuntimeHelpers: () => registerRuntimeHelpers,
    resolveComponentType: () => resolveComponentType,
    toValidAssetId: () => toValidAssetId,
    trackSlotScopes: () => trackSlotScopes,
    trackVForSlotScopes: () => trackVForSlotScopes,
    transform: () => transform,
    transformBind: () => transformBind,
    transformElement: () => transformElement,
    transformExpression: () => transformExpression,
    transformModel: () => transformModel,
    transformOn: () => transformOn,
    transformStyle: () => transformStyle,
    traverseNode: () => traverseNode,
    walkBlockDeclarations: () => walkBlockDeclarations,
    walkFunctionParams: () => walkFunctionParams,
    walkIdentifiers: () => walkIdentifiers,
    warnDeprecation: () => warnDeprecation
  });
  function decodeHtmlBrowser(raw, asAttr = false) {
    if (!decoder) {
      decoder = document.createElement("div");
    }
    if (asAttr) {
      decoder.innerHTML = `<div foo="${raw.replace(/"/g, "&quot;")}">`;
      return decoder.children[0].getAttribute("foo");
    } else {
      decoder.innerHTML = raw;
      return decoder.textContent;
    }
  }
  function createDOMCompilerError(code, loc) {
    return createCompilerError(code, loc, process.env.NODE_ENV !== "production" || false ? DOMErrorMessages : void 0);
  }
  function hasMultipleChildren(node) {
    const children = node.children = node.children.filter((c) => c.type !== 3 && !(c.type === 2 && !c.content.trim()));
    const child = children[0];
    return children.length !== 1 || child.type === 11 || child.type === 9 && child.branches.some(hasMultipleChildren);
  }
  function compile(template, options = {}) {
    return baseCompile(template, extend({}, parserOptions, options, {
      nodeTransforms: [
        ignoreSideEffectTags,
        ...DOMNodeTransforms,
        ...options.nodeTransforms || []
      ],
      directiveTransforms: extend({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
      transformHoist: null
    }));
  }
  function parse(template, options = {}) {
    return baseParse(template, extend({}, parserOptions, options));
  }
  var V_MODEL_RADIO, V_MODEL_CHECKBOX, V_MODEL_TEXT, V_MODEL_SELECT, V_MODEL_DYNAMIC, V_ON_WITH_MODIFIERS, V_ON_WITH_KEYS, V_SHOW, TRANSITION, TRANSITION_GROUP, decoder, isRawTextContainer, parserOptions, transformStyle, parseInlineCSS, DOMErrorMessages, transformVHtml, transformVText, transformModel2, isEventOptionModifier, isNonKeyModifier, maybeKeyModifier, isKeyboardEvent, resolveModifiers, transformClick, transformOn2, transformShow, transformTransition, ignoreSideEffectTags, DOMNodeTransforms, DOMDirectiveTransforms;
  var init_compiler_dom_esm_bundler = __esm({
    "../../node_modules/.pnpm/@vue+compiler-dom@3.2.37/node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js"() {
      init_compiler_core_esm_bundler();
      init_compiler_core_esm_bundler();
      init_shared_esm_bundler();
      V_MODEL_RADIO = Symbol(process.env.NODE_ENV !== "production" ? `vModelRadio` : ``);
      V_MODEL_CHECKBOX = Symbol(process.env.NODE_ENV !== "production" ? `vModelCheckbox` : ``);
      V_MODEL_TEXT = Symbol(process.env.NODE_ENV !== "production" ? `vModelText` : ``);
      V_MODEL_SELECT = Symbol(process.env.NODE_ENV !== "production" ? `vModelSelect` : ``);
      V_MODEL_DYNAMIC = Symbol(process.env.NODE_ENV !== "production" ? `vModelDynamic` : ``);
      V_ON_WITH_MODIFIERS = Symbol(process.env.NODE_ENV !== "production" ? `vOnModifiersGuard` : ``);
      V_ON_WITH_KEYS = Symbol(process.env.NODE_ENV !== "production" ? `vOnKeysGuard` : ``);
      V_SHOW = Symbol(process.env.NODE_ENV !== "production" ? `vShow` : ``);
      TRANSITION = Symbol(process.env.NODE_ENV !== "production" ? `Transition` : ``);
      TRANSITION_GROUP = Symbol(process.env.NODE_ENV !== "production" ? `TransitionGroup` : ``);
      registerRuntimeHelpers({
        [V_MODEL_RADIO]: `vModelRadio`,
        [V_MODEL_CHECKBOX]: `vModelCheckbox`,
        [V_MODEL_TEXT]: `vModelText`,
        [V_MODEL_SELECT]: `vModelSelect`,
        [V_MODEL_DYNAMIC]: `vModelDynamic`,
        [V_ON_WITH_MODIFIERS]: `withModifiers`,
        [V_ON_WITH_KEYS]: `withKeys`,
        [V_SHOW]: `vShow`,
        [TRANSITION]: `Transition`,
        [TRANSITION_GROUP]: `TransitionGroup`
      });
      isRawTextContainer = /* @__PURE__ */ makeMap("style,iframe,script,noscript", true);
      parserOptions = {
        isVoidTag,
        isNativeTag: (tag) => isHTMLTag(tag) || isSVGTag(tag),
        isPreTag: (tag) => tag === "pre",
        decodeEntities: decodeHtmlBrowser,
        isBuiltInComponent: (tag) => {
          if (isBuiltInType(tag, `Transition`)) {
            return TRANSITION;
          } else if (isBuiltInType(tag, `TransitionGroup`)) {
            return TRANSITION_GROUP;
          }
        },
        getNamespace(tag, parent) {
          let ns = parent ? parent.ns : 0;
          if (parent && ns === 2) {
            if (parent.tag === "annotation-xml") {
              if (tag === "svg") {
                return 1;
              }
              if (parent.props.some((a) => a.type === 6 && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml"))) {
                ns = 0;
              }
            } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") {
              ns = 0;
            }
          } else if (parent && ns === 1) {
            if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") {
              ns = 0;
            }
          }
          if (ns === 0) {
            if (tag === "svg") {
              return 1;
            }
            if (tag === "math") {
              return 2;
            }
          }
          return ns;
        },
        getTextMode({ tag, ns }) {
          if (ns === 0) {
            if (tag === "textarea" || tag === "title") {
              return 1;
            }
            if (isRawTextContainer(tag)) {
              return 2;
            }
          }
          return 0;
        }
      };
      transformStyle = (node) => {
        if (node.type === 1) {
          node.props.forEach((p2, i) => {
            if (p2.type === 6 && p2.name === "style" && p2.value) {
              node.props[i] = {
                type: 7,
                name: `bind`,
                arg: createSimpleExpression(`style`, true, p2.loc),
                exp: parseInlineCSS(p2.value.content, p2.loc),
                modifiers: [],
                loc: p2.loc
              };
            }
          });
        }
      };
      parseInlineCSS = (cssText, loc) => {
        const normalized = parseStringStyle(cssText);
        return createSimpleExpression(JSON.stringify(normalized), false, loc, 3);
      };
      DOMErrorMessages = {
        [50]: `v-html is missing expression.`,
        [51]: `v-html will override element children.`,
        [52]: `v-text is missing expression.`,
        [53]: `v-text will override element children.`,
        [54]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
        [55]: `v-model argument is not supported on plain elements.`,
        [56]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
        [57]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
        [58]: `v-show is missing expression.`,
        [59]: `<Transition> expects exactly one child element or component.`,
        [60]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`
      };
      transformVHtml = (dir, node, context) => {
        const { exp, loc } = dir;
        if (!exp) {
          context.onError(createDOMCompilerError(50, loc));
        }
        if (node.children.length) {
          context.onError(createDOMCompilerError(51, loc));
          node.children.length = 0;
        }
        return {
          props: [
            createObjectProperty(createSimpleExpression(`innerHTML`, true, loc), exp || createSimpleExpression("", true))
          ]
        };
      };
      transformVText = (dir, node, context) => {
        const { exp, loc } = dir;
        if (!exp) {
          context.onError(createDOMCompilerError(52, loc));
        }
        if (node.children.length) {
          context.onError(createDOMCompilerError(53, loc));
          node.children.length = 0;
        }
        return {
          props: [
            createObjectProperty(createSimpleExpression(`textContent`, true), exp ? getConstantType(exp, context) > 0 ? exp : createCallExpression(context.helperString(TO_DISPLAY_STRING), [exp], loc) : createSimpleExpression("", true))
          ]
        };
      };
      transformModel2 = (dir, node, context) => {
        const baseResult = transformModel(dir, node, context);
        if (!baseResult.props.length || node.tagType === 1) {
          return baseResult;
        }
        if (dir.arg) {
          context.onError(createDOMCompilerError(55, dir.arg.loc));
        }
        function checkDuplicatedValue() {
          const value = findProp(node, "value");
          if (value) {
            context.onError(createDOMCompilerError(57, value.loc));
          }
        }
        const { tag } = node;
        const isCustomElement = context.isCustomElement(tag);
        if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
          let directiveToUse = V_MODEL_TEXT;
          let isInvalidType = false;
          if (tag === "input" || isCustomElement) {
            const type = findProp(node, `type`);
            if (type) {
              if (type.type === 7) {
                directiveToUse = V_MODEL_DYNAMIC;
              } else if (type.value) {
                switch (type.value.content) {
                  case "radio":
                    directiveToUse = V_MODEL_RADIO;
                    break;
                  case "checkbox":
                    directiveToUse = V_MODEL_CHECKBOX;
                    break;
                  case "file":
                    isInvalidType = true;
                    context.onError(createDOMCompilerError(56, dir.loc));
                    break;
                  default:
                    process.env.NODE_ENV !== "production" && checkDuplicatedValue();
                    break;
                }
              }
            } else if (hasDynamicKeyVBind(node)) {
              directiveToUse = V_MODEL_DYNAMIC;
            } else {
              process.env.NODE_ENV !== "production" && checkDuplicatedValue();
            }
          } else if (tag === "select") {
            directiveToUse = V_MODEL_SELECT;
          } else {
            process.env.NODE_ENV !== "production" && checkDuplicatedValue();
          }
          if (!isInvalidType) {
            baseResult.needRuntime = context.helper(directiveToUse);
          }
        } else {
          context.onError(createDOMCompilerError(54, dir.loc));
        }
        baseResult.props = baseResult.props.filter((p2) => !(p2.key.type === 4 && p2.key.content === "modelValue"));
        return baseResult;
      };
      isEventOptionModifier = /* @__PURE__ */ makeMap(`passive,once,capture`);
      isNonKeyModifier = /* @__PURE__ */ makeMap(
        `stop,prevent,self,ctrl,shift,alt,meta,exact,middle`
      );
      maybeKeyModifier = /* @__PURE__ */ makeMap("left,right");
      isKeyboardEvent = /* @__PURE__ */ makeMap(`onkeyup,onkeydown,onkeypress`, true);
      resolveModifiers = (key, modifiers, context, loc) => {
        const keyModifiers = [];
        const nonKeyModifiers = [];
        const eventOptionModifiers = [];
        for (let i = 0; i < modifiers.length; i++) {
          const modifier = modifiers[i];
          if (modifier === "native" && checkCompatEnabled("COMPILER_V_ON_NATIVE", context, loc)) {
            eventOptionModifiers.push(modifier);
          } else if (isEventOptionModifier(modifier)) {
            eventOptionModifiers.push(modifier);
          } else {
            if (maybeKeyModifier(modifier)) {
              if (isStaticExp(key)) {
                if (isKeyboardEvent(key.content)) {
                  keyModifiers.push(modifier);
                } else {
                  nonKeyModifiers.push(modifier);
                }
              } else {
                keyModifiers.push(modifier);
                nonKeyModifiers.push(modifier);
              }
            } else {
              if (isNonKeyModifier(modifier)) {
                nonKeyModifiers.push(modifier);
              } else {
                keyModifiers.push(modifier);
              }
            }
          }
        }
        return {
          keyModifiers,
          nonKeyModifiers,
          eventOptionModifiers
        };
      };
      transformClick = (key, event) => {
        const isStaticClick = isStaticExp(key) && key.content.toLowerCase() === "onclick";
        return isStaticClick ? createSimpleExpression(event, true) : key.type !== 4 ? createCompoundExpression([
          `(`,
          key,
          `) === "onClick" ? "${event}" : (`,
          key,
          `)`
        ]) : key;
      };
      transformOn2 = (dir, node, context) => {
        return transformOn(dir, node, context, (baseResult) => {
          const { modifiers } = dir;
          if (!modifiers.length)
            return baseResult;
          let { key, value: handlerExp } = baseResult.props[0];
          const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key, modifiers, context, dir.loc);
          if (nonKeyModifiers.includes("right")) {
            key = transformClick(key, `onContextmenu`);
          }
          if (nonKeyModifiers.includes("middle")) {
            key = transformClick(key, `onMouseup`);
          }
          if (nonKeyModifiers.length) {
            handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [
              handlerExp,
              JSON.stringify(nonKeyModifiers)
            ]);
          }
          if (keyModifiers.length && (!isStaticExp(key) || isKeyboardEvent(key.content))) {
            handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [
              handlerExp,
              JSON.stringify(keyModifiers)
            ]);
          }
          if (eventOptionModifiers.length) {
            const modifierPostfix = eventOptionModifiers.map(capitalize).join("");
            key = isStaticExp(key) ? createSimpleExpression(`${key.content}${modifierPostfix}`, true) : createCompoundExpression([`(`, key, `) + "${modifierPostfix}"`]);
          }
          return {
            props: [createObjectProperty(key, handlerExp)]
          };
        });
      };
      transformShow = (dir, node, context) => {
        const { exp, loc } = dir;
        if (!exp) {
          context.onError(createDOMCompilerError(58, loc));
        }
        return {
          props: [],
          needRuntime: context.helper(V_SHOW)
        };
      };
      transformTransition = (node, context) => {
        if (node.type === 1 && node.tagType === 1) {
          const component = context.isBuiltInComponent(node.tag);
          if (component === TRANSITION) {
            return () => {
              if (!node.children.length) {
                return;
              }
              if (hasMultipleChildren(node)) {
                context.onError(createDOMCompilerError(59, {
                  start: node.children[0].loc.start,
                  end: node.children[node.children.length - 1].loc.end,
                  source: ""
                }));
              }
              const child = node.children[0];
              if (child.type === 1) {
                for (const p2 of child.props) {
                  if (p2.type === 7 && p2.name === "show") {
                    node.props.push({
                      type: 6,
                      name: "persisted",
                      value: void 0,
                      loc: node.loc
                    });
                  }
                }
              }
            };
          }
        }
      };
      ignoreSideEffectTags = (node, context) => {
        if (node.type === 1 && node.tagType === 0 && (node.tag === "script" || node.tag === "style")) {
          context.onError(createDOMCompilerError(60, node.loc));
          context.removeNode();
        }
      };
      DOMNodeTransforms = [
        transformStyle,
        ...process.env.NODE_ENV !== "production" ? [transformTransition] : []
      ];
      DOMDirectiveTransforms = {
        cloak: noopDirectiveTransform,
        html: transformVHtml,
        text: transformVText,
        model: transformModel2,
        on: transformOn2,
        show: transformShow
      };
    }
  });

  // ../../node_modules/.pnpm/@vue+reactivity@3.2.37/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
  function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
  }
  function effectScope(detached) {
    return new EffectScope(detached);
  }
  function recordEffectScope(effect2, scope = activeEffectScope) {
    if (scope && scope.active) {
      scope.effects.push(effect2);
    }
  }
  function getCurrentScope() {
    return activeEffectScope;
  }
  function onScopeDispose(fn) {
    if (activeEffectScope) {
      activeEffectScope.cleanups.push(fn);
    } else if (process.env.NODE_ENV !== "production") {
      warn(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
    }
  }
  function cleanupEffect(effect2) {
    const { deps } = effect2;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect2);
      }
      deps.length = 0;
    }
  }
  function effect(fn, options) {
    if (fn.effect) {
      fn = fn.effect.fn;
    }
    const _effect = new ReactiveEffect(fn);
    if (options) {
      extend(_effect, options);
      if (options.scope)
        recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) {
      _effect.run();
    }
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
  }
  function stop(runner) {
    runner.effect.stop();
  }
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function resetTracking() {
    const last2 = trackStack.pop();
    shouldTrack = last2 === void 0 ? true : last2;
  }
  function track(target, type, key) {
    if (shouldTrack && activeEffect) {
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
      }
      let dep = depsMap.get(key);
      if (!dep) {
        depsMap.set(key, dep = createDep());
      }
      const eventInfo = process.env.NODE_ENV !== "production" ? { effect: activeEffect, target, type, key } : void 0;
      trackEffects(dep, eventInfo);
    }
  }
  function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack2 = false;
    if (effectTrackDepth <= maxMarkerBits) {
      if (!newTracked(dep)) {
        dep.n |= trackOpBit;
        shouldTrack2 = !wasTracked(dep);
      }
    } else {
      shouldTrack2 = !dep.has(activeEffect);
    }
    if (shouldTrack2) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (process.env.NODE_ENV !== "production" && activeEffect.onTrack) {
        activeEffect.onTrack(Object.assign({ effect: activeEffect }, debuggerEventExtraInfo));
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    let deps = [];
    if (type === "clear") {
      deps = [...depsMap.values()];
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          deps.push(dep);
        }
      });
    } else {
      if (key !== void 0) {
        deps.push(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            deps.push(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const eventInfo = process.env.NODE_ENV !== "production" ? { target, type, key, newValue, oldValue, oldTarget } : void 0;
    if (deps.length === 1) {
      if (deps[0]) {
        if (process.env.NODE_ENV !== "production") {
          triggerEffects(deps[0], eventInfo);
        } else {
          triggerEffects(deps[0]);
        }
      }
    } else {
      const effects = [];
      for (const dep of deps) {
        if (dep) {
          effects.push(...dep);
        }
      }
      if (process.env.NODE_ENV !== "production") {
        triggerEffects(createDep(effects), eventInfo);
      } else {
        triggerEffects(createDep(effects));
      }
    }
  }
  function triggerEffects(dep, debuggerEventExtraInfo) {
    const effects = isArray(dep) ? dep : [...dep];
    for (const effect2 of effects) {
      if (effect2.computed) {
        triggerEffect(effect2, debuggerEventExtraInfo);
      }
    }
    for (const effect2 of effects) {
      if (!effect2.computed) {
        triggerEffect(effect2, debuggerEventExtraInfo);
      }
    }
  }
  function triggerEffect(effect2, debuggerEventExtraInfo) {
    if (effect2 !== activeEffect || effect2.allowRecurse) {
      if (process.env.NODE_ENV !== "production" && effect2.onTrigger) {
        effect2.onTrigger(extend({ effect: effect2 }, debuggerEventExtraInfo));
      }
      if (effect2.scheduler) {
        effect2.scheduler();
      } else {
        effect2.run();
      }
    }
  }
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
          track(arr, "get", i + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        const res = toRaw(this)[key].apply(this, args);
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function createGetter(isReadonly2 = false, shallow = false) {
    return function get2(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_isShallow") {
        return shallow;
      } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly2) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        return targetIsArray && isIntegerKey(key) ? res : res.value;
      }
      if (isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive(res);
      }
      return res;
    };
  }
  function createSetter(shallow = false) {
    return function set2(target, key, value, receiver) {
      let oldValue = target[key];
      if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
        return false;
      }
      if (!shallow && !isReadonly(value)) {
        if (!isShallow(value)) {
          value = toRaw(value);
          oldValue = toRaw(oldValue);
        }
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  function get$1(target, key, isReadonly2 = false, isShallow3 = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly2) {
      if (key !== rawKey) {
        track(rawTarget, "get", key);
      }
      track(rawTarget, "get", rawKey);
    }
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow3 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly2 = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly2) {
      if (key !== rawKey) {
        track(rawTarget, "has", key);
      }
      track(rawTarget, "has", rawKey);
    }
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly2 = false) {
    target = target["__v_raw"];
    !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (process.env.NODE_ENV !== "production") {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get2.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (process.env.NODE_ENV !== "production") {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get2 ? get2.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = process.env.NODE_ENV !== "production" ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly2, isShallow3) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = isShallow3 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly2, isShallow3) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow3 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (process.env.NODE_ENV !== "production") {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive(target) {
    if (isReadonly(target)) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive(value) {
    if (isReadonly(value)) {
      return isReactive(value["__v_raw"]);
    }
    return !!(value && value["__v_isReactive"]);
  }
  function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
  }
  function isShallow(value) {
    return !!(value && value["__v_isShallow"]);
  }
  function isProxy(value) {
    return isReactive(value) || isReadonly(value);
  }
  function toRaw(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? toRaw(raw) : observed;
  }
  function markRaw(value) {
    def(value, "__v_skip", true);
    return value;
  }
  function trackRefValue(ref3) {
    if (shouldTrack && activeEffect) {
      ref3 = toRaw(ref3);
      if (process.env.NODE_ENV !== "production") {
        trackEffects(ref3.dep || (ref3.dep = createDep()), {
          target: ref3,
          type: "get",
          key: "value"
        });
      } else {
        trackEffects(ref3.dep || (ref3.dep = createDep()));
      }
    }
  }
  function triggerRefValue(ref3, newVal) {
    ref3 = toRaw(ref3);
    if (ref3.dep) {
      if (process.env.NODE_ENV !== "production") {
        triggerEffects(ref3.dep, {
          target: ref3,
          type: "set",
          key: "value",
          newValue: newVal
        });
      } else {
        triggerEffects(ref3.dep);
      }
    }
  }
  function isRef(r) {
    return !!(r && r.__v_isRef === true);
  }
  function ref(value) {
    return createRef(value, false);
  }
  function shallowRef(value) {
    return createRef(value, true);
  }
  function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
      return rawValue;
    }
    return new RefImpl(rawValue, shallow);
  }
  function triggerRef(ref3) {
    triggerRefValue(ref3, process.env.NODE_ENV !== "production" ? ref3.value : void 0);
  }
  function unref(ref3) {
    return isRef(ref3) ? ref3.value : ref3;
  }
  function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  function customRef(factory) {
    return new CustomRefImpl(factory);
  }
  function toRefs(object) {
    if (process.env.NODE_ENV !== "production" && !isProxy(object)) {
      console.warn(`toRefs() expects a reactive object but received a plain one.`);
    }
    const ret = isArray(object) ? new Array(object.length) : {};
    for (const key in object) {
      ret[key] = toRef(object, key);
    }
    return ret;
  }
  function toRef(object, key, defaultValue) {
    const val = object[key];
    return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
  }
  function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = isFunction(getterOrOptions);
    if (onlyGetter) {
      getter = getterOrOptions;
      setter = process.env.NODE_ENV !== "production" ? () => {
        console.warn("Write operation failed: computed value is readonly");
      } : NOOP;
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (process.env.NODE_ENV !== "production" && debugOptions && !isSSR) {
      cRef.effect.onTrack = debugOptions.onTrack;
      cRef.effect.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
  }
  var activeEffectScope, EffectScope, createDep, wasTracked, newTracked, initDepMarkers, finalizeDepMarkers, targetMap, effectTrackDepth, trackOpBit, maxMarkerBits, activeEffect, ITERATE_KEY, MAP_KEY_ITERATE_KEY, ReactiveEffect, shouldTrack, trackStack, isNonTrackableKeys, builtInSymbols, get, shallowGet, readonlyGet, shallowReadonlyGet, arrayInstrumentations, set, shallowSet, mutableHandlers, readonlyHandlers, shallowReactiveHandlers, shallowReadonlyHandlers, toShallow, getProto, mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations, mutableCollectionHandlers, shallowCollectionHandlers, readonlyCollectionHandlers, shallowReadonlyCollectionHandlers, reactiveMap, shallowReactiveMap, readonlyMap, shallowReadonlyMap, toReactive, toReadonly, RefImpl, shallowUnwrapHandlers, CustomRefImpl, ObjectRefImpl, ComputedRefImpl, _a;
  var init_reactivity_esm_bundler = __esm({
    "../../node_modules/.pnpm/@vue+reactivity@3.2.37/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js"() {
      init_shared_esm_bundler();
      EffectScope = class {
        constructor(detached = false) {
          this.active = true;
          this.effects = [];
          this.cleanups = [];
          if (!detached && activeEffectScope) {
            this.parent = activeEffectScope;
            this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
          }
        }
        run(fn) {
          if (this.active) {
            const currentEffectScope = activeEffectScope;
            try {
              activeEffectScope = this;
              return fn();
            } finally {
              activeEffectScope = currentEffectScope;
            }
          } else if (process.env.NODE_ENV !== "production") {
            warn(`cannot run an inactive effect scope.`);
          }
        }
        on() {
          activeEffectScope = this;
        }
        off() {
          activeEffectScope = this.parent;
        }
        stop(fromParent) {
          if (this.active) {
            let i, l;
            for (i = 0, l = this.effects.length; i < l; i++) {
              this.effects[i].stop();
            }
            for (i = 0, l = this.cleanups.length; i < l; i++) {
              this.cleanups[i]();
            }
            if (this.scopes) {
              for (i = 0, l = this.scopes.length; i < l; i++) {
                this.scopes[i].stop(true);
              }
            }
            if (this.parent && !fromParent) {
              const last2 = this.parent.scopes.pop();
              if (last2 && last2 !== this) {
                this.parent.scopes[this.index] = last2;
                last2.index = this.index;
              }
            }
            this.active = false;
          }
        }
      };
      createDep = (effects) => {
        const dep = new Set(effects);
        dep.w = 0;
        dep.n = 0;
        return dep;
      };
      wasTracked = (dep) => (dep.w & trackOpBit) > 0;
      newTracked = (dep) => (dep.n & trackOpBit) > 0;
      initDepMarkers = ({ deps }) => {
        if (deps.length) {
          for (let i = 0; i < deps.length; i++) {
            deps[i].w |= trackOpBit;
          }
        }
      };
      finalizeDepMarkers = (effect2) => {
        const { deps } = effect2;
        if (deps.length) {
          let ptr = 0;
          for (let i = 0; i < deps.length; i++) {
            const dep = deps[i];
            if (wasTracked(dep) && !newTracked(dep)) {
              dep.delete(effect2);
            } else {
              deps[ptr++] = dep;
            }
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
          }
          deps.length = ptr;
        }
      };
      targetMap = /* @__PURE__ */ new WeakMap();
      effectTrackDepth = 0;
      trackOpBit = 1;
      maxMarkerBits = 30;
      ITERATE_KEY = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : "");
      MAP_KEY_ITERATE_KEY = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
      ReactiveEffect = class {
        constructor(fn, scheduler = null, scope) {
          this.fn = fn;
          this.scheduler = scheduler;
          this.active = true;
          this.deps = [];
          this.parent = void 0;
          recordEffectScope(this, scope);
        }
        run() {
          if (!this.active) {
            return this.fn();
          }
          let parent = activeEffect;
          let lastShouldTrack = shouldTrack;
          while (parent) {
            if (parent === this) {
              return;
            }
            parent = parent.parent;
          }
          try {
            this.parent = activeEffect;
            activeEffect = this;
            shouldTrack = true;
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) {
              initDepMarkers(this);
            } else {
              cleanupEffect(this);
            }
            return this.fn();
          } finally {
            if (effectTrackDepth <= maxMarkerBits) {
              finalizeDepMarkers(this);
            }
            trackOpBit = 1 << --effectTrackDepth;
            activeEffect = this.parent;
            shouldTrack = lastShouldTrack;
            this.parent = void 0;
            if (this.deferStop) {
              this.stop();
            }
          }
        }
        stop() {
          if (activeEffect === this) {
            this.deferStop = true;
          } else if (this.active) {
            cleanupEffect(this);
            if (this.onStop) {
              this.onStop();
            }
            this.active = false;
          }
        }
      };
      shouldTrack = true;
      trackStack = [];
      isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
      builtInSymbols = new Set(
        /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
      );
      get = /* @__PURE__ */ createGetter();
      shallowGet = /* @__PURE__ */ createGetter(false, true);
      readonlyGet = /* @__PURE__ */ createGetter(true);
      shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
      arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
      set = /* @__PURE__ */ createSetter();
      shallowSet = /* @__PURE__ */ createSetter(true);
      mutableHandlers = {
        get,
        set,
        deleteProperty,
        has,
        ownKeys
      };
      readonlyHandlers = {
        get: readonlyGet,
        set(target, key) {
          if (process.env.NODE_ENV !== "production") {
            warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
          }
          return true;
        },
        deleteProperty(target, key) {
          if (process.env.NODE_ENV !== "production") {
            warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
          }
          return true;
        }
      };
      shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
        get: shallowGet,
        set: shallowSet
      });
      shallowReadonlyHandlers = /* @__PURE__ */ extend({}, readonlyHandlers, {
        get: shallowReadonlyGet
      });
      toShallow = (value) => value;
      getProto = (v) => Reflect.getPrototypeOf(v);
      [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
      mutableCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(false, false)
      };
      shallowCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(false, true)
      };
      readonlyCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(true, false)
      };
      shallowReadonlyCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(true, true)
      };
      reactiveMap = /* @__PURE__ */ new WeakMap();
      shallowReactiveMap = /* @__PURE__ */ new WeakMap();
      readonlyMap = /* @__PURE__ */ new WeakMap();
      shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
      toReactive = (value) => isObject(value) ? reactive(value) : value;
      toReadonly = (value) => isObject(value) ? readonly(value) : value;
      RefImpl = class {
        constructor(value, __v_isShallow) {
          this.__v_isShallow = __v_isShallow;
          this.dep = void 0;
          this.__v_isRef = true;
          this._rawValue = __v_isShallow ? value : toRaw(value);
          this._value = __v_isShallow ? value : toReactive(value);
        }
        get value() {
          trackRefValue(this);
          return this._value;
        }
        set value(newVal) {
          newVal = this.__v_isShallow ? newVal : toRaw(newVal);
          if (hasChanged(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = this.__v_isShallow ? newVal : toReactive(newVal);
            triggerRefValue(this, newVal);
          }
        }
      };
      shallowUnwrapHandlers = {
        get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
        set: (target, key, value, receiver) => {
          const oldValue = target[key];
          if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
          } else {
            return Reflect.set(target, key, value, receiver);
          }
        }
      };
      CustomRefImpl = class {
        constructor(factory) {
          this.dep = void 0;
          this.__v_isRef = true;
          const { get: get2, set: set2 } = factory(() => trackRefValue(this), () => triggerRefValue(this));
          this._get = get2;
          this._set = set2;
        }
        get value() {
          return this._get();
        }
        set value(newVal) {
          this._set(newVal);
        }
      };
      ObjectRefImpl = class {
        constructor(_object, _key, _defaultValue) {
          this._object = _object;
          this._key = _key;
          this._defaultValue = _defaultValue;
          this.__v_isRef = true;
        }
        get value() {
          const val = this._object[this._key];
          return val === void 0 ? this._defaultValue : val;
        }
        set value(newVal) {
          this._object[this._key] = newVal;
        }
      };
      ComputedRefImpl = class {
        constructor(getter, _setter, isReadonly2, isSSR) {
          this._setter = _setter;
          this.dep = void 0;
          this.__v_isRef = true;
          this._dirty = true;
          this.effect = new ReactiveEffect(getter, () => {
            if (!this._dirty) {
              this._dirty = true;
              triggerRefValue(this);
            }
          });
          this.effect.computed = this;
          this.effect.active = this._cacheable = !isSSR;
          this["__v_isReadonly"] = isReadonly2;
        }
        get value() {
          const self2 = toRaw(this);
          trackRefValue(self2);
          if (self2._dirty || !self2._cacheable) {
            self2._dirty = false;
            self2._value = self2.effect.run();
          }
          return self2._value;
        }
        set value(newValue) {
          this._setter(newValue);
        }
      };
      _a = "__v_isReadonly";
    }
  });

  // ../../node_modules/.pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
  function pushWarningContext(vnode) {
    stack.push(vnode);
  }
  function popWarningContext() {
    stack.pop();
  }
  function warn2(msg, ...args) {
    pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
      callWithErrorHandling(appWarnHandler, instance, 11, [
        msg + args.join(""),
        instance && instance.proxy,
        trace.map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
        trace
      ]);
    } else {
      const warnArgs = [`[Vue warn]: ${msg}`, ...args];
      if (trace.length && true) {
        warnArgs.push(`
`, ...formatTrace(trace));
      }
      console.warn(...warnArgs);
    }
    resetTracking();
  }
  function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
      return [];
    }
    const normalizedStack = [];
    while (currentVNode) {
      const last2 = normalizedStack[0];
      if (last2 && last2.vnode === currentVNode) {
        last2.recurseCount++;
      } else {
        normalizedStack.push({
          vnode: currentVNode,
          recurseCount: 0
        });
      }
      const parentInstance = currentVNode.component && currentVNode.component.parent;
      currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
  }
  function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i) => {
      logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
    });
    return logs;
  }
  function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
  }
  function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key) => {
      res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
      res.push(` ...`);
    }
    return res;
  }
  function formatProp(key, value, raw) {
    if (isString(value)) {
      value = JSON.stringify(value);
      return raw ? value : [`${key}=${value}`];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
      return raw ? value : [`${key}=${value}`];
    } else if (isRef(value)) {
      value = formatProp(key, toRaw(value.value), true);
      return raw ? value : [`${key}=Ref<`, value, `>`];
    } else if (isFunction(value)) {
      return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    } else {
      value = toRaw(value);
      return raw ? value : [`${key}=`, value];
    }
  }
  function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
      res = args ? fn(...args) : fn();
    } catch (err) {
      handleError(err, instance, type);
    }
    return res;
  }
  function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction(fn)) {
      const res = callWithErrorHandling(fn, instance, type, args);
      if (res && isPromise(res)) {
        res.catch((err) => {
          handleError(err, instance, type);
        });
      }
      return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  }
  function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
      let cur = instance.parent;
      const exposedInstance = instance.proxy;
      const errorInfo = process.env.NODE_ENV !== "production" ? ErrorTypeStrings[type] : type;
      while (cur) {
        const errorCapturedHooks = cur.ec;
        if (errorCapturedHooks) {
          for (let i = 0; i < errorCapturedHooks.length; i++) {
            if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
              return;
            }
          }
        }
        cur = cur.parent;
      }
      const appErrorHandler = instance.appContext.config.errorHandler;
      if (appErrorHandler) {
        callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
        return;
      }
    }
    logError(err, type, contextVNode, throwInDev);
  }
  function logError(err, type, contextVNode, throwInDev = true) {
    if (process.env.NODE_ENV !== "production") {
      const info = ErrorTypeStrings[type];
      if (contextVNode) {
        pushWarningContext(contextVNode);
      }
      warn2(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
      if (contextVNode) {
        popWarningContext();
      }
      if (throwInDev) {
        throw err;
      } else {
        console.error(err);
      }
    } else {
      console.error(err);
    }
  }
  function nextTick(fn) {
    const p2 = currentFlushPromise || resolvedPromise;
    return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
  }
  function findInsertionIndex(id) {
    let start = flushIndex + 1;
    let end = queue.length;
    while (start < end) {
      const middle = start + end >>> 1;
      const middleJobId = getId(queue[middle]);
      middleJobId < id ? start = middle + 1 : end = middle;
    }
    return start;
  }
  function queueJob(job) {
    if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
      if (job.id == null) {
        queue.push(job);
      } else {
        queue.splice(findInsertionIndex(job.id), 0, job);
      }
      queueFlush();
    }
  }
  function queueFlush() {
    if (!isFlushing && !isFlushPending) {
      isFlushPending = true;
      currentFlushPromise = resolvedPromise.then(flushJobs);
    }
  }
  function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) {
      queue.splice(i, 1);
    }
  }
  function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!isArray(cb)) {
      if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
        pendingQueue.push(cb);
      }
    } else {
      pendingQueue.push(...cb);
    }
    queueFlush();
  }
  function queuePreFlushCb(cb) {
    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
  }
  function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
  }
  function flushPreFlushCbs(seen2, parentJob = null) {
    if (pendingPreFlushCbs.length) {
      currentPreFlushParentJob = parentJob;
      activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
      pendingPreFlushCbs.length = 0;
      if (process.env.NODE_ENV !== "production") {
        seen2 = seen2 || /* @__PURE__ */ new Map();
      }
      for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
        if (process.env.NODE_ENV !== "production" && checkRecursiveUpdates(seen2, activePreFlushCbs[preFlushIndex])) {
          continue;
        }
        activePreFlushCbs[preFlushIndex]();
      }
      activePreFlushCbs = null;
      preFlushIndex = 0;
      currentPreFlushParentJob = null;
      flushPreFlushCbs(seen2, parentJob);
    }
  }
  function flushPostFlushCbs(seen2) {
    flushPreFlushCbs();
    if (pendingPostFlushCbs.length) {
      const deduped = [...new Set(pendingPostFlushCbs)];
      pendingPostFlushCbs.length = 0;
      if (activePostFlushCbs) {
        activePostFlushCbs.push(...deduped);
        return;
      }
      activePostFlushCbs = deduped;
      if (process.env.NODE_ENV !== "production") {
        seen2 = seen2 || /* @__PURE__ */ new Map();
      }
      activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
      for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
        if (process.env.NODE_ENV !== "production" && checkRecursiveUpdates(seen2, activePostFlushCbs[postFlushIndex])) {
          continue;
        }
        activePostFlushCbs[postFlushIndex]();
      }
      activePostFlushCbs = null;
      postFlushIndex = 0;
    }
  }
  function flushJobs(seen2) {
    isFlushPending = false;
    isFlushing = true;
    if (process.env.NODE_ENV !== "production") {
      seen2 = seen2 || /* @__PURE__ */ new Map();
    }
    flushPreFlushCbs(seen2);
    queue.sort((a, b) => getId(a) - getId(b));
    const check = process.env.NODE_ENV !== "production" ? (job) => checkRecursiveUpdates(seen2, job) : NOOP;
    try {
      for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job && job.active !== false) {
          if (process.env.NODE_ENV !== "production" && check(job)) {
            continue;
          }
          callWithErrorHandling(job, null, 14);
        }
      }
    } finally {
      flushIndex = 0;
      queue.length = 0;
      flushPostFlushCbs(seen2);
      isFlushing = false;
      currentFlushPromise = null;
      if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
        flushJobs(seen2);
      }
    }
  }
  function checkRecursiveUpdates(seen2, fn) {
    if (!seen2.has(fn)) {
      seen2.set(fn, 1);
    } else {
      const count = seen2.get(fn);
      if (count > RECURSION_LIMIT) {
        const instance = fn.ownerInstance;
        const componentName = instance && getComponentName(instance.type);
        warn2(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`);
        return true;
      } else {
        seen2.set(fn, count + 1);
      }
    }
  }
  function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
      createRecord(id, instance.type);
      record = map.get(id);
    }
    record.instances.add(instance);
  }
  function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
  }
  function createRecord(id, initialDef) {
    if (map.has(id)) {
      return false;
    }
    map.set(id, {
      initialDef: normalizeClassComponent(initialDef),
      instances: /* @__PURE__ */ new Set()
    });
    return true;
  }
  function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
  }
  function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) {
      return;
    }
    record.initialDef.render = newRender;
    [...record.instances].forEach((instance) => {
      if (newRender) {
        instance.render = newRender;
        normalizeClassComponent(instance.type).render = newRender;
      }
      instance.renderCache = [];
      isHmrUpdating = true;
      instance.update();
      isHmrUpdating = false;
    });
  }
  function reload(id, newComp) {
    const record = map.get(id);
    if (!record)
      return;
    newComp = normalizeClassComponent(newComp);
    updateComponentDef(record.initialDef, newComp);
    const instances = [...record.instances];
    for (const instance of instances) {
      const oldComp = normalizeClassComponent(instance.type);
      if (!hmrDirtyComponents.has(oldComp)) {
        if (oldComp !== record.initialDef) {
          updateComponentDef(oldComp, newComp);
        }
        hmrDirtyComponents.add(oldComp);
      }
      instance.appContext.optionsCache.delete(instance.type);
      if (instance.ceReload) {
        hmrDirtyComponents.add(oldComp);
        instance.ceReload(newComp.styles);
        hmrDirtyComponents.delete(oldComp);
      } else if (instance.parent) {
        queueJob(instance.parent.update);
        if (instance.parent.type.__asyncLoader && instance.parent.ceReload) {
          instance.parent.ceReload(newComp.styles);
        }
      } else if (instance.appContext.reload) {
        instance.appContext.reload();
      } else if (typeof window !== "undefined") {
        window.location.reload();
      } else {
        console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
      }
    }
    queuePostFlushCb(() => {
      for (const instance of instances) {
        hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
      }
    });
  }
  function updateComponentDef(oldComp, newComp) {
    extend(oldComp, newComp);
    for (const key in oldComp) {
      if (key !== "__file" && !(key in newComp)) {
        delete oldComp[key];
      }
    }
  }
  function tryWrap(fn) {
    return (id, arg) => {
      try {
        return fn(id, arg);
      } catch (e) {
        console.error(e);
        console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
      }
    };
  }
  function emit(event, ...args) {
    if (devtools) {
      devtools.emit(event, ...args);
    } else if (!devtoolsNotInstalled) {
      buffer.push({ event, args });
    }
  }
  function setDevtoolsHook(hook, target) {
    var _a2, _b;
    devtools = hook;
    if (devtools) {
      devtools.enabled = true;
      buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
      buffer = [];
    } else if (typeof window !== "undefined" && window.HTMLElement && !((_b = (_a2 = window.navigator) === null || _a2 === void 0 ? void 0 : _a2.userAgent) === null || _b === void 0 ? void 0 : _b.includes("jsdom"))) {
      const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
      replay.push((newHook) => {
        setDevtoolsHook(newHook, target);
      });
      setTimeout(() => {
        if (!devtools) {
          target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
          devtoolsNotInstalled = true;
          buffer = [];
        }
      }, 3e3);
    } else {
      devtoolsNotInstalled = true;
      buffer = [];
    }
  }
  function devtoolsInitApp(app, version2) {
    emit("app:init", app, version2, {
      Fragment,
      Text,
      Comment,
      Static
    });
  }
  function devtoolsUnmountApp(app) {
    emit("app:unmount", app);
  }
  function createDevtoolsComponentHook(hook) {
    return (component) => {
      emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
    };
  }
  function createDevtoolsPerformanceHook(hook) {
    return (component, type, time) => {
      emit(hook, component.appContext.app, component.uid, component, type, time);
    };
  }
  function devtoolsComponentEmit(component, event, params) {
    emit("component:emit", component.appContext.app, component, event, params);
  }
  function emit$1(instance, event, ...rawArgs) {
    if (instance.isUnmounted)
      return;
    const props = instance.vnode.props || EMPTY_OBJ;
    if (process.env.NODE_ENV !== "production") {
      const { emitsOptions, propsOptions: [propsOptions] } = instance;
      if (emitsOptions) {
        if (!(event in emitsOptions) && true) {
          if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
            warn2(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`);
          }
        } else {
          const validator = emitsOptions[event];
          if (isFunction(validator)) {
            const isValid = validator(...rawArgs);
            if (!isValid) {
              warn2(`Invalid event arguments: event validation failed for event "${event}".`);
            }
          }
        }
      }
    }
    let args = rawArgs;
    const isModelListener2 = event.startsWith("update:");
    const modelArg = isModelListener2 && event.slice(7);
    if (modelArg && modelArg in props) {
      const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
      const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
      if (trim) {
        args = rawArgs.map((a) => a.trim());
      }
      if (number) {
        args = rawArgs.map(toNumber);
      }
    }
    if (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) {
      devtoolsComponentEmit(instance, event, args);
    }
    if (process.env.NODE_ENV !== "production") {
      const lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
        warn2(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`);
      }
    }
    let handlerName;
    let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
    if (!handler && isModelListener2) {
      handler = props[handlerName = toHandlerKey(hyphenate(event))];
    }
    if (handler) {
      callWithAsyncErrorHandling(handler, instance, 6, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
      if (!instance.emitted) {
        instance.emitted = {};
      } else if (instance.emitted[handlerName]) {
        return;
      }
      instance.emitted[handlerName] = true;
      callWithAsyncErrorHandling(onceHandler, instance, 6, args);
    }
  }
  function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) {
      return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !isFunction(comp)) {
      const extendEmits = (raw2) => {
        const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
        if (normalizedFromExtend) {
          hasExtends = true;
          extend(normalized, normalizedFromExtend);
        }
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendEmits);
      }
      if (comp.extends) {
        extendEmits(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendEmits);
      }
    }
    if (!raw && !hasExtends) {
      cache.set(comp, null);
      return null;
    }
    if (isArray(raw)) {
      raw.forEach((key) => normalized[key] = null);
    } else {
      extend(normalized, raw);
    }
    cache.set(comp, normalized);
    return normalized;
  }
  function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
      return false;
    }
    key = key.slice(2).replace(/Once$/, "");
    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
  }
  function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
  }
  function pushScopeId(id) {
    currentScopeId = id;
  }
  function popScopeId() {
    currentScopeId = null;
  }
  function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
    if (!ctx)
      return fn;
    if (fn._n) {
      return fn;
    }
    const renderFnWithContext = (...args) => {
      if (renderFnWithContext._d) {
        setBlockTracking(-1);
      }
      const prevInstance = setCurrentRenderingInstance(ctx);
      const res = fn(...args);
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
      if (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) {
        devtoolsComponentUpdated(ctx);
      }
      return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
  }
  function markAttrsAccessed() {
    accessedAttrs = true;
  }
  function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit: emit2, render: render2, renderCache, data, setupState, ctx, inheritAttrs } = instance;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance);
    if (process.env.NODE_ENV !== "production") {
      accessedAttrs = false;
    }
    try {
      if (vnode.shapeFlag & 4) {
        const proxyToUse = withProxy || proxy;
        result = normalizeVNode(render2.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
        fallthroughAttrs = attrs;
      } else {
        const render3 = Component;
        if (process.env.NODE_ENV !== "production" && attrs === props) {
          markAttrsAccessed();
        }
        result = normalizeVNode(render3.length > 1 ? render3(props, process.env.NODE_ENV !== "production" ? {
          get attrs() {
            markAttrsAccessed();
            return attrs;
          },
          slots,
          emit: emit2
        } : { attrs, slots, emit: emit2 }) : render3(props, null));
        fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
      }
    } catch (err) {
      blockStack.length = 0;
      handleError(err, instance, 1);
      result = createVNode(Comment);
    }
    let root = result;
    let setRoot = void 0;
    if (process.env.NODE_ENV !== "production" && result.patchFlag > 0 && result.patchFlag & 2048) {
      [root, setRoot] = getChildRoot(result);
    }
    if (fallthroughAttrs && inheritAttrs !== false) {
      const keys = Object.keys(fallthroughAttrs);
      const { shapeFlag } = root;
      if (keys.length) {
        if (shapeFlag & (1 | 6)) {
          if (propsOptions && keys.some(isModelListener)) {
            fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
          }
          root = cloneVNode(root, fallthroughAttrs);
        } else if (process.env.NODE_ENV !== "production" && !accessedAttrs && root.type !== Comment) {
          const allAttrs = Object.keys(attrs);
          const eventAttrs = [];
          const extraAttrs = [];
          for (let i = 0, l = allAttrs.length; i < l; i++) {
            const key = allAttrs[i];
            if (isOn(key)) {
              if (!isModelListener(key)) {
                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
              }
            } else {
              extraAttrs.push(key);
            }
          }
          if (extraAttrs.length) {
            warn2(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`);
          }
          if (eventAttrs.length) {
            warn2(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
          }
        }
      }
    }
    if (vnode.dirs) {
      if (process.env.NODE_ENV !== "production" && !isElementRoot(root)) {
        warn2(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
      }
      root = cloneVNode(root);
      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
      if (process.env.NODE_ENV !== "production" && !isElementRoot(root)) {
        warn2(`Component inside <Transition> renders non-element root node that cannot be animated.`);
      }
      root.transition = vnode.transition;
    }
    if (process.env.NODE_ENV !== "production" && setRoot) {
      setRoot(root);
    } else {
      result = root;
    }
    setCurrentRenderingInstance(prev);
    return result;
  }
  function filterSingleRoot(children) {
    let singleRoot;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (isVNode(child)) {
        if (child.type !== Comment || child.children === "v-if") {
          if (singleRoot) {
            return;
          } else {
            singleRoot = child;
          }
        }
      } else {
        return;
      }
    }
    return singleRoot;
  }
  function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if (process.env.NODE_ENV !== "production" && (prevChildren || nextChildren) && isHmrUpdating) {
      return true;
    }
    if (nextVNode.dirs || nextVNode.transition) {
      return true;
    }
    if (optimized && patchFlag >= 0) {
      if (patchFlag & 1024) {
        return true;
      }
      if (patchFlag & 16) {
        if (!prevProps) {
          return !!nextProps;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8) {
        const dynamicProps = nextVNode.dynamicProps;
        for (let i = 0; i < dynamicProps.length; i++) {
          const key = dynamicProps[i];
          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
    } else {
      if (prevChildren || nextChildren) {
        if (!nextChildren || !nextChildren.$stable) {
          return true;
        }
      }
      if (prevProps === nextProps) {
        return false;
      }
      if (!prevProps) {
        return !!nextProps;
      }
      if (!nextProps) {
        return true;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
  }
  function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
      return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
      const key = nextKeys[i];
      if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
        return true;
      }
    }
    return false;
  }
  function updateHOCHostEl({ vnode, parent }, el) {
    while (parent && parent.subTree === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    }
  }
  function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if (isFunction(eventListener)) {
      eventListener();
    }
  }
  function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
    const { p: patch, o: { createElement } } = rendererInternals;
    const hiddenContainer = createElement("div");
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals);
    patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
    if (suspense.deps > 0) {
      triggerEvent(vnode, "onPending");
      triggerEvent(vnode, "onFallback");
      patch(
        null,
        vnode.ssFallback,
        container,
        anchor,
        parentComponent,
        null,
        isSVG,
        slotScopeIds
      );
      setActiveBranch(suspense, vnode.ssFallback);
    } else {
      suspense.resolve();
    }
  }
  function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = n2.suspense = n1.suspense;
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
      suspense.pendingBranch = newBranch;
      if (isSameVNodeType(newBranch, pendingBranch)) {
        patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else if (isInFallback) {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            isSVG,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      } else {
        suspense.pendingId++;
        if (isHydrating) {
          suspense.isHydrating = false;
          suspense.activeBranch = pendingBranch;
        } else {
          unmount(pendingBranch, parentComponent, suspense);
        }
        suspense.deps = 0;
        suspense.effects.length = 0;
        suspense.hiddenContainer = createElement("div");
        if (isInFallback) {
          patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
          if (suspense.deps <= 0) {
            suspense.resolve();
          } else {
            patch(
              activeBranch,
              newFallback,
              container,
              anchor,
              parentComponent,
              null,
              isSVG,
              slotScopeIds,
              optimized
            );
            setActiveBranch(suspense, newFallback);
          }
        } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
          patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
          suspense.resolve(true);
        } else {
          patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
          if (suspense.deps <= 0) {
            suspense.resolve();
          }
        }
      }
    } else {
      if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, newBranch);
      } else {
        triggerEvent(n2, "onPending");
        suspense.pendingBranch = newBranch;
        suspense.pendingId++;
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          const { timeout, pendingId } = suspense;
          if (timeout > 0) {
            setTimeout(() => {
              if (suspense.pendingId === pendingId) {
                suspense.fallback(newFallback);
              }
            }, timeout);
          } else if (timeout === 0) {
            suspense.fallback(newFallback);
          }
        }
      }
    }
  }
  function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    if (process.env.NODE_ENV !== "production" && true && !hasWarned) {
      hasWarned = true;
      console[console.info ? "info" : "log"](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove: remove2 } } = rendererInternals;
    const timeout = toNumber(vnode.props && vnode.props.timeout);
    const suspense = {
      vnode,
      parent,
      parentComponent,
      isSVG,
      container,
      hiddenContainer,
      anchor,
      deps: 0,
      pendingId: 0,
      timeout: typeof timeout === "number" ? timeout : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: true,
      isHydrating,
      isUnmounted: false,
      effects: [],
      resolve(resume = false) {
        if (process.env.NODE_ENV !== "production") {
          if (!resume && !suspense.pendingBranch) {
            throw new Error(`suspense.resolve() is called without a pending branch.`);
          }
          if (suspense.isUnmounted) {
            throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
          }
        }
        const { vnode: vnode2, activeBranch, pendingBranch, pendingId, effects, parentComponent: parentComponent2, container: container2 } = suspense;
        if (suspense.isHydrating) {
          suspense.isHydrating = false;
        } else if (!resume) {
          const delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
          if (delayEnter) {
            activeBranch.transition.afterLeave = () => {
              if (pendingId === suspense.pendingId) {
                move(pendingBranch, container2, anchor2, 0);
              }
            };
          }
          let { anchor: anchor2 } = suspense;
          if (activeBranch) {
            anchor2 = next(activeBranch);
            unmount(activeBranch, parentComponent2, suspense, true);
          }
          if (!delayEnter) {
            move(pendingBranch, container2, anchor2, 0);
          }
        }
        setActiveBranch(suspense, pendingBranch);
        suspense.pendingBranch = null;
        suspense.isInFallback = false;
        let parent2 = suspense.parent;
        let hasUnresolvedAncestor = false;
        while (parent2) {
          if (parent2.pendingBranch) {
            parent2.effects.push(...effects);
            hasUnresolvedAncestor = true;
            break;
          }
          parent2 = parent2.parent;
        }
        if (!hasUnresolvedAncestor) {
          queuePostFlushCb(effects);
        }
        suspense.effects = [];
        triggerEvent(vnode2, "onResolve");
      },
      fallback(fallbackVNode) {
        if (!suspense.pendingBranch) {
          return;
        }
        const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, isSVG: isSVG2 } = suspense;
        triggerEvent(vnode2, "onFallback");
        const anchor2 = next(activeBranch);
        const mountFallback = () => {
          if (!suspense.isInFallback) {
            return;
          }
          patch(
            null,
            fallbackVNode,
            container2,
            anchor2,
            parentComponent2,
            null,
            isSVG2,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, fallbackVNode);
        };
        const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
        if (delayEnter) {
          activeBranch.transition.afterLeave = mountFallback;
        }
        suspense.isInFallback = true;
        unmount(
          activeBranch,
          parentComponent2,
          null,
          true
        );
        if (!delayEnter) {
          mountFallback();
        }
      },
      move(container2, anchor2, type) {
        suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
        suspense.container = container2;
      },
      next() {
        return suspense.activeBranch && next(suspense.activeBranch);
      },
      registerDep(instance, setupRenderEffect) {
        const isInPendingSuspense = !!suspense.pendingBranch;
        if (isInPendingSuspense) {
          suspense.deps++;
        }
        const hydratedEl = instance.vnode.el;
        instance.asyncDep.catch((err) => {
          handleError(err, instance, 0);
        }).then((asyncSetupResult) => {
          if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
            return;
          }
          instance.asyncResolved = true;
          const { vnode: vnode2 } = instance;
          if (process.env.NODE_ENV !== "production") {
            pushWarningContext(vnode2);
          }
          handleSetupResult(instance, asyncSetupResult, false);
          if (hydratedEl) {
            vnode2.el = hydratedEl;
          }
          const placeholder = !hydratedEl && instance.subTree.el;
          setupRenderEffect(
            instance,
            vnode2,
            parentNode(hydratedEl || instance.subTree.el),
            hydratedEl ? null : next(instance.subTree),
            suspense,
            isSVG,
            optimized
          );
          if (placeholder) {
            remove2(placeholder);
          }
          updateHOCHostEl(instance, vnode2.el);
          if (process.env.NODE_ENV !== "production") {
            popWarningContext();
          }
          if (isInPendingSuspense && --suspense.deps === 0) {
            suspense.resolve();
          }
        });
      },
      unmount(parentSuspense, doRemove) {
        suspense.isUnmounted = true;
        if (suspense.activeBranch) {
          unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
        }
        if (suspense.pendingBranch) {
          unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
        }
      }
    };
    return suspense;
  }
  function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement("div"), null, isSVG, slotScopeIds, optimized, rendererInternals, true);
    const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) {
      suspense.resolve();
    }
    return result;
  }
  function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    const isSlotChildren = shapeFlag & 32;
    vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
  }
  function normalizeSuspenseSlot(s) {
    let block;
    if (isFunction(s)) {
      const trackBlock = isBlockTreeEnabled && s._c;
      if (trackBlock) {
        s._d = false;
        openBlock();
      }
      s = s();
      if (trackBlock) {
        s._d = true;
        block = currentBlock;
        closeBlock();
      }
    }
    if (isArray(s)) {
      const singleChild = filterSingleRoot(s);
      if (process.env.NODE_ENV !== "production" && !singleChild) {
        warn2(`<Suspense> slots expect a single root node.`);
      }
      s = singleChild;
    }
    s = normalizeVNode(s);
    if (block && !s.dynamicChildren) {
      s.dynamicChildren = block.filter((c) => c !== s);
    }
    return s;
  }
  function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
      if (isArray(fn)) {
        suspense.effects.push(...fn);
      } else {
        suspense.effects.push(fn);
      }
    } else {
      queuePostFlushCb(fn);
    }
  }
  function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    const el = vnode.el = branch.el;
    if (parentComponent && parentComponent.subTree === vnode) {
      parentComponent.vnode.el = el;
      updateHOCHostEl(parentComponent, el);
    }
  }
  function provide(key, value) {
    if (!currentInstance) {
      if (process.env.NODE_ENV !== "production") {
        warn2(`provide() can only be used inside setup().`);
      }
    } else {
      let provides = currentInstance.provides;
      const parentProvides = currentInstance.parent && currentInstance.parent.provides;
      if (parentProvides === provides) {
        provides = currentInstance.provides = Object.create(parentProvides);
      }
      provides[key] = value;
    }
  }
  function inject(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
      const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
      if (provides && key in provides) {
        return provides[key];
      } else if (arguments.length > 1) {
        return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
      } else if (process.env.NODE_ENV !== "production") {
        warn2(`injection "${String(key)}" not found.`);
      }
    } else if (process.env.NODE_ENV !== "production") {
      warn2(`inject() can only be used inside setup() or functional components.`);
    }
  }
  function watchEffect(effect2, options) {
    return doWatch(effect2, null, options);
  }
  function watchPostEffect(effect2, options) {
    return doWatch(effect2, null, process.env.NODE_ENV !== "production" ? Object.assign(Object.assign({}, options), { flush: "post" }) : { flush: "post" });
  }
  function watchSyncEffect(effect2, options) {
    return doWatch(effect2, null, process.env.NODE_ENV !== "production" ? Object.assign(Object.assign({}, options), { flush: "sync" }) : { flush: "sync" });
  }
  function watch(source, cb, options) {
    if (process.env.NODE_ENV !== "production" && !isFunction(cb)) {
      warn2(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
    }
    return doWatch(source, cb, options);
  }
  function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
    if (process.env.NODE_ENV !== "production" && !cb) {
      if (immediate !== void 0) {
        warn2(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
      }
      if (deep !== void 0) {
        warn2(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
      }
    }
    const warnInvalidSource = (s) => {
      warn2(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
    };
    const instance = currentInstance;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
      getter = () => source.value;
      forceTrigger = isShallow(source);
    } else if (isReactive(source)) {
      getter = () => source;
      deep = true;
    } else if (isArray(source)) {
      isMultiSource = true;
      forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
      getter = () => source.map((s) => {
        if (isRef(s)) {
          return s.value;
        } else if (isReactive(s)) {
          return traverse(s);
        } else if (isFunction(s)) {
          return callWithErrorHandling(s, instance, 2);
        } else {
          process.env.NODE_ENV !== "production" && warnInvalidSource(s);
        }
      });
    } else if (isFunction(source)) {
      if (cb) {
        getter = () => callWithErrorHandling(source, instance, 2);
      } else {
        getter = () => {
          if (instance && instance.isUnmounted) {
            return;
          }
          if (cleanup) {
            cleanup();
          }
          return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
        };
      }
    } else {
      getter = NOOP;
      process.env.NODE_ENV !== "production" && warnInvalidSource(source);
    }
    if (cb && deep) {
      const baseGetter = getter;
      getter = () => traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn) => {
      cleanup = effect2.onStop = () => {
        callWithErrorHandling(fn, instance, 4);
      };
    };
    if (isInSSRComponentSetup) {
      onCleanup = NOOP;
      if (!cb) {
        getter();
      } else if (immediate) {
        callWithAsyncErrorHandling(cb, instance, 3, [
          getter(),
          isMultiSource ? [] : void 0,
          onCleanup
        ]);
      }
      return NOOP;
    }
    let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    const job = () => {
      if (!effect2.active) {
        return;
      }
      if (cb) {
        const newValue = effect2.run();
        if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
          if (cleanup) {
            cleanup();
          }
          callWithAsyncErrorHandling(cb, instance, 3, [
            newValue,
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
            onCleanup
          ]);
          oldValue = newValue;
        }
      } else {
        effect2.run();
      }
    };
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === "sync") {
      scheduler = job;
    } else if (flush === "post") {
      scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    } else {
      scheduler = () => queuePreFlushCb(job);
    }
    const effect2 = new ReactiveEffect(getter, scheduler);
    if (process.env.NODE_ENV !== "production") {
      effect2.onTrack = onTrack;
      effect2.onTrigger = onTrigger;
    }
    if (cb) {
      if (immediate) {
        job();
      } else {
        oldValue = effect2.run();
      }
    } else if (flush === "post") {
      queuePostRenderEffect(effect2.run.bind(effect2), instance && instance.suspense);
    } else {
      effect2.run();
    }
    return () => {
      effect2.stop();
      if (instance && instance.scope) {
        remove(instance.scope.effects, effect2);
      }
    };
  }
  function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if (isFunction(value)) {
      cb = value;
    } else {
      cb = value.handler;
      options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) {
      setCurrentInstance(cur);
    } else {
      unsetCurrentInstance();
    }
    return res;
  }
  function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return () => {
      let cur = ctx;
      for (let i = 0; i < segments.length && cur; i++) {
        cur = cur[segments[i]];
      }
      return cur;
    };
  }
  function traverse(value, seen2) {
    if (!isObject(value) || value["__v_skip"]) {
      return value;
    }
    seen2 = seen2 || /* @__PURE__ */ new Set();
    if (seen2.has(value)) {
      return value;
    }
    seen2.add(value);
    if (isRef(value)) {
      traverse(value.value, seen2);
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        traverse(value[i], seen2);
      }
    } else if (isSet(value) || isMap(value)) {
      value.forEach((v) => {
        traverse(v, seen2);
      });
    } else if (isPlainObject(value)) {
      for (const key in value) {
        traverse(value[key], seen2);
      }
    }
    return value;
  }
  function useTransitionState() {
    const state = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    onMounted(() => {
      state.isMounted = true;
    });
    onBeforeUnmount(() => {
      state.isUnmounting = true;
    });
    return state;
  }
  function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
      leavingVNodesCache = /* @__PURE__ */ Object.create(null);
      leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
  }
  function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook3 = (hook, args) => {
      hook && callWithAsyncErrorHandling(hook, instance, 9, args);
    };
    const callAsyncHook = (hook, args) => {
      const done = args[1];
      callHook3(hook, args);
      if (isArray(hook)) {
        if (hook.every((hook2) => hook2.length <= 1))
          done();
      } else if (hook.length <= 1) {
        done();
      }
    };
    const hooks = {
      mode,
      persisted,
      beforeEnter(el) {
        let hook = onBeforeEnter;
        if (!state.isMounted) {
          if (appear) {
            hook = onBeforeAppear || onBeforeEnter;
          } else {
            return;
          }
        }
        if (el._leaveCb) {
          el._leaveCb(true);
        }
        const leavingVNode = leavingVNodesCache[key];
        if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
          leavingVNode.el._leaveCb();
        }
        callHook3(hook, [el]);
      },
      enter(el) {
        let hook = onEnter;
        let afterHook = onAfterEnter;
        let cancelHook = onEnterCancelled;
        if (!state.isMounted) {
          if (appear) {
            hook = onAppear || onEnter;
            afterHook = onAfterAppear || onAfterEnter;
            cancelHook = onAppearCancelled || onEnterCancelled;
          } else {
            return;
          }
        }
        let called = false;
        const done = el._enterCb = (cancelled) => {
          if (called)
            return;
          called = true;
          if (cancelled) {
            callHook3(cancelHook, [el]);
          } else {
            callHook3(afterHook, [el]);
          }
          if (hooks.delayedLeave) {
            hooks.delayedLeave();
          }
          el._enterCb = void 0;
        };
        if (hook) {
          callAsyncHook(hook, [el, done]);
        } else {
          done();
        }
      },
      leave(el, remove2) {
        const key2 = String(vnode.key);
        if (el._enterCb) {
          el._enterCb(true);
        }
        if (state.isUnmounting) {
          return remove2();
        }
        callHook3(onBeforeLeave, [el]);
        let called = false;
        const done = el._leaveCb = (cancelled) => {
          if (called)
            return;
          called = true;
          remove2();
          if (cancelled) {
            callHook3(onLeaveCancelled, [el]);
          } else {
            callHook3(onAfterLeave, [el]);
          }
          el._leaveCb = void 0;
          if (leavingVNodesCache[key2] === vnode) {
            delete leavingVNodesCache[key2];
          }
        };
        leavingVNodesCache[key2] = vnode;
        if (onLeave) {
          callAsyncHook(onLeave, [el, done]);
        } else {
          done();
        }
      },
      clone(vnode2) {
        return resolveTransitionHooks(vnode2, props, state, instance);
      }
    };
    return hooks;
  }
  function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
      vnode = cloneVNode(vnode);
      vnode.children = null;
      return vnode;
    }
  }
  function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
  }
  function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 && vnode.component) {
      setTransitionHooks(vnode.component.subTree, hooks);
    } else if (vnode.shapeFlag & 128) {
      vnode.ssContent.transition = hooks.clone(vnode.ssContent);
      vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else {
      vnode.transition = hooks;
    }
  }
  function getTransitionRawChildren(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
      if (child.type === Fragment) {
        if (child.patchFlag & 128)
          keyedFragmentCount++;
        ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
      } else if (keepComment || child.type !== Comment) {
        ret.push(key != null ? cloneVNode(child, { key }) : child);
      }
    }
    if (keyedFragmentCount > 1) {
      for (let i = 0; i < ret.length; i++) {
        ret[i].patchFlag = -2;
      }
    }
    return ret;
  }
  function defineComponent(options) {
    return isFunction(options) ? { setup: options, name: options.name } : options;
  }
  function defineAsyncComponent(source) {
    if (isFunction(source)) {
      source = { loader: source };
    }
    const {
      loader,
      loadingComponent,
      errorComponent,
      delay = 200,
      timeout,
      suspensible = true,
      onError: userOnError
    } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = () => {
      retries++;
      pendingRequest = null;
      return load();
    };
    const load = () => {
      let thisRequest;
      return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
        err = err instanceof Error ? err : new Error(String(err));
        if (userOnError) {
          return new Promise((resolve2, reject) => {
            const userRetry = () => resolve2(retry());
            const userFail = () => reject(err);
            userOnError(err, userRetry, userFail, retries + 1);
          });
        } else {
          throw err;
        }
      }).then((comp) => {
        if (thisRequest !== pendingRequest && pendingRequest) {
          return pendingRequest;
        }
        if (process.env.NODE_ENV !== "production" && !comp) {
          warn2(`Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`);
        }
        if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
          comp = comp.default;
        }
        if (process.env.NODE_ENV !== "production" && comp && !isObject(comp) && !isFunction(comp)) {
          throw new Error(`Invalid async component load result: ${comp}`);
        }
        resolvedComp = comp;
        return comp;
      }));
    };
    return defineComponent({
      name: "AsyncComponentWrapper",
      __asyncLoader: load,
      get __asyncResolved() {
        return resolvedComp;
      },
      setup() {
        const instance = currentInstance;
        if (resolvedComp) {
          return () => createInnerComp(resolvedComp, instance);
        }
        const onError = (err) => {
          pendingRequest = null;
          handleError(err, instance, 13, !errorComponent);
        };
        if (suspensible && instance.suspense || isInSSRComponentSetup) {
          return load().then((comp) => {
            return () => createInnerComp(comp, instance);
          }).catch((err) => {
            onError(err);
            return () => errorComponent ? createVNode(errorComponent, {
              error: err
            }) : null;
          });
        }
        const loaded = ref(false);
        const error = ref();
        const delayed = ref(!!delay);
        if (delay) {
          setTimeout(() => {
            delayed.value = false;
          }, delay);
        }
        if (timeout != null) {
          setTimeout(() => {
            if (!loaded.value && !error.value) {
              const err = new Error(`Async component timed out after ${timeout}ms.`);
              onError(err);
              error.value = err;
            }
          }, timeout);
        }
        load().then(() => {
          loaded.value = true;
          if (instance.parent && isKeepAlive(instance.parent.vnode)) {
            queueJob(instance.parent.update);
          }
        }).catch((err) => {
          onError(err);
          error.value = err;
        });
        return () => {
          if (loaded.value && resolvedComp) {
            return createInnerComp(resolvedComp, instance);
          } else if (error.value && errorComponent) {
            return createVNode(errorComponent, {
              error: error.value
            });
          } else if (loadingComponent && !delayed.value) {
            return createVNode(loadingComponent);
          }
        };
      }
    });
  }
  function createInnerComp(comp, { vnode: { ref: ref3, props, children, shapeFlag }, parent }) {
    const vnode = createVNode(comp, props, children);
    vnode.ref = ref3;
    return vnode;
  }
  function matches(pattern, name) {
    if (isArray(pattern)) {
      return pattern.some((p2) => matches(p2, name));
    } else if (isString(pattern)) {
      return pattern.split(",").includes(name);
    } else if (pattern.test) {
      return pattern.test(name);
    }
    return false;
  }
  function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
  }
  function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
  }
  function registerKeepAliveHook(hook, type, target = currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = () => {
      let current = target;
      while (current) {
        if (current.isDeactivated) {
          return;
        }
        current = current.parent;
      }
      return hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
      let current = target.parent;
      while (current && current.parent) {
        if (isKeepAlive(current.parent.vnode)) {
          injectToKeepAliveRoot(wrappedHook, type, target, current);
        }
        current = current.parent;
      }
    }
  }
  function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = injectHook(type, hook, keepAliveRoot, true);
    onUnmounted(() => {
      remove(keepAliveRoot[type], injected);
    }, target);
  }
  function resetShapeFlag(vnode) {
    let shapeFlag = vnode.shapeFlag;
    if (shapeFlag & 256) {
      shapeFlag -= 256;
    }
    if (shapeFlag & 512) {
      shapeFlag -= 512;
    }
    vnode.shapeFlag = shapeFlag;
  }
  function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
  }
  function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
      const hooks = target[type] || (target[type] = []);
      const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
        if (target.isUnmounted) {
          return;
        }
        pauseTracking();
        setCurrentInstance(target);
        const res = callWithAsyncErrorHandling(hook, target, type, args);
        unsetCurrentInstance();
        resetTracking();
        return res;
      });
      if (prepend) {
        hooks.unshift(wrappedHook);
      } else {
        hooks.push(wrappedHook);
      }
      return wrappedHook;
    } else if (process.env.NODE_ENV !== "production") {
      const apiName = toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ""));
      warn2(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
    }
  }
  function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec", hook, target);
  }
  function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
      warn2("Do not use built-in directive ids as custom directive id: " + name);
    }
  }
  function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
      process.env.NODE_ENV !== "production" && warn2(`withDirectives can only be used inside render functions.`);
      return vnode;
    }
    const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i = 0; i < directives.length; i++) {
      let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
      if (isFunction(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
    return vnode;
  }
  function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
      const binding = bindings[i];
      if (oldBindings) {
        binding.oldValue = oldBindings[i].value;
      }
      let hook = binding.dir[name];
      if (hook) {
        pauseTracking();
        callWithAsyncErrorHandling(hook, instance, 8, [
          vnode.el,
          binding,
          vnode,
          prevVNode
        ]);
        resetTracking();
      }
    }
  }
  function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
  }
  function resolveDynamicComponent(component) {
    if (isString(component)) {
      return resolveAsset(COMPONENTS, component, false) || component;
    } else {
      return component || NULL_DYNAMIC_COMPONENT;
    }
  }
  function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
  }
  function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
      const Component = instance.type;
      if (type === COMPONENTS) {
        const selfName = getComponentName(Component, false);
        if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
          return Component;
        }
      }
      const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
      if (!res && maybeSelfReference) {
        return Component;
      }
      if (process.env.NODE_ENV !== "production" && warnMissing && !res) {
        const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
        warn2(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
      }
      return res;
    } else if (process.env.NODE_ENV !== "production") {
      warn2(`resolve${capitalize(type.slice(0, -1))} can only be used in render() or setup().`);
    }
  }
  function resolve(registry, name) {
    return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
  }
  function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    if (isArray(source) || isString(source)) {
      ret = new Array(source.length);
      for (let i = 0, l = source.length; i < l; i++) {
        ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
      }
    } else if (typeof source === "number") {
      if (process.env.NODE_ENV !== "production" && !Number.isInteger(source)) {
        warn2(`The v-for range expect an integer value but got ${source}.`);
      }
      ret = new Array(source);
      for (let i = 0; i < source; i++) {
        ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
      }
    } else if (isObject(source)) {
      if (source[Symbol.iterator]) {
        ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
      } else {
        const keys = Object.keys(source);
        ret = new Array(keys.length);
        for (let i = 0, l = keys.length; i < l; i++) {
          const key = keys[i];
          ret[i] = renderItem(source[key], key, i, cached && cached[i]);
        }
      }
    } else {
      ret = [];
    }
    if (cache) {
      cache[index] = ret;
    }
    return ret;
  }
  function createSlots(slots, dynamicSlots) {
    for (let i = 0; i < dynamicSlots.length; i++) {
      const slot = dynamicSlots[i];
      if (isArray(slot)) {
        for (let j = 0; j < slot.length; j++) {
          slots[slot[j].name] = slot[j].fn;
        }
      } else if (slot) {
        slots[slot.name] = slot.fn;
      }
    }
    return slots;
  }
  function renderSlot(slots, name, props = {}, fallback, noSlotted) {
    if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
      return createVNode("slot", name === "default" ? null : { name }, fallback && fallback());
    }
    let slot = slots[name];
    if (process.env.NODE_ENV !== "production" && slot && slot.length > 1) {
      warn2(`SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`);
      slot = () => [];
    }
    if (slot && slot._c) {
      slot._d = false;
    }
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
    if (!noSlotted && rendered.scopeId) {
      rendered.slotScopeIds = [rendered.scopeId + "-s"];
    }
    if (slot && slot._c) {
      slot._d = true;
    }
    return rendered;
  }
  function ensureValidVNode(vnodes) {
    return vnodes.some((child) => {
      if (!isVNode(child))
        return true;
      if (child.type === Comment)
        return false;
      if (child.type === Fragment && !ensureValidVNode(child.children))
        return false;
      return true;
    }) ? vnodes : null;
  }
  function toHandlers(obj) {
    const ret = {};
    if (process.env.NODE_ENV !== "production" && !isObject(obj)) {
      warn2(`v-on with no argument expects an object value.`);
      return ret;
    }
    for (const key in obj) {
      ret[toHandlerKey(key)] = obj[key];
    }
    return ret;
  }
  function createDevRenderContext(instance) {
    const target = {};
    Object.defineProperty(target, `_`, {
      configurable: true,
      enumerable: false,
      get: () => instance
    });
    Object.keys(publicPropertiesMap).forEach((key) => {
      Object.defineProperty(target, key, {
        configurable: true,
        enumerable: false,
        get: () => publicPropertiesMap[key](instance),
        set: NOOP
      });
    });
    return target;
  }
  function exposePropsOnRenderContext(instance) {
    const { ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) {
      Object.keys(propsOptions).forEach((key) => {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => instance.props[key],
          set: NOOP
        });
      });
    }
  }
  function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys(toRaw(setupState)).forEach((key) => {
      if (!setupState.__isScriptSetup) {
        if (isReservedPrefix(key[0])) {
          warn2(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
          return;
        }
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => setupState[key],
          set: NOOP
        });
      }
    });
  }
  function createDuplicateChecker() {
    const cache = /* @__PURE__ */ Object.create(null);
    return (type, key) => {
      if (cache[key]) {
        warn2(`${type} property "${key}" is already defined in ${cache[key]}.`);
      } else {
        cache[key] = type;
      }
    };
  }
  function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    shouldCacheAccess = false;
    if (options.beforeCreate) {
      callHook(options.beforeCreate, instance, "bc");
    }
    const {
      data: dataOptions,
      computed: computedOptions,
      methods,
      watch: watchOptions,
      provide: provideOptions,
      inject: injectOptions,
      created,
      beforeMount,
      mounted,
      beforeUpdate,
      updated,
      activated,
      deactivated,
      beforeDestroy,
      beforeUnmount,
      destroyed,
      unmounted,
      render: render2,
      renderTracked,
      renderTriggered,
      errorCaptured,
      serverPrefetch,
      expose,
      inheritAttrs,
      components,
      directives,
      filters
    } = options;
    const checkDuplicateProperties = process.env.NODE_ENV !== "production" ? createDuplicateChecker() : null;
    if (process.env.NODE_ENV !== "production") {
      const [propsOptions] = instance.propsOptions;
      if (propsOptions) {
        for (const key in propsOptions) {
          checkDuplicateProperties("Props", key);
        }
      }
    }
    if (injectOptions) {
      resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
    }
    if (methods) {
      for (const key in methods) {
        const methodHandler = methods[key];
        if (isFunction(methodHandler)) {
          if (process.env.NODE_ENV !== "production") {
            Object.defineProperty(ctx, key, {
              value: methodHandler.bind(publicThis),
              configurable: true,
              enumerable: true,
              writable: true
            });
          } else {
            ctx[key] = methodHandler.bind(publicThis);
          }
          if (process.env.NODE_ENV !== "production") {
            checkDuplicateProperties("Methods", key);
          }
        } else if (process.env.NODE_ENV !== "production") {
          warn2(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
        }
      }
    }
    if (dataOptions) {
      if (process.env.NODE_ENV !== "production" && !isFunction(dataOptions)) {
        warn2(`The data option must be a function. Plain object usage is no longer supported.`);
      }
      const data = dataOptions.call(publicThis, publicThis);
      if (process.env.NODE_ENV !== "production" && isPromise(data)) {
        warn2(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
      }
      if (!isObject(data)) {
        process.env.NODE_ENV !== "production" && warn2(`data() should return an object.`);
      } else {
        instance.data = reactive(data);
        if (process.env.NODE_ENV !== "production") {
          for (const key in data) {
            checkDuplicateProperties("Data", key);
            if (!isReservedPrefix(key[0])) {
              Object.defineProperty(ctx, key, {
                configurable: true,
                enumerable: true,
                get: () => data[key],
                set: NOOP
              });
            }
          }
        }
      }
    }
    shouldCacheAccess = true;
    if (computedOptions) {
      for (const key in computedOptions) {
        const opt = computedOptions[key];
        const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
        if (process.env.NODE_ENV !== "production" && get2 === NOOP) {
          warn2(`Computed property "${key}" has no getter.`);
        }
        const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : process.env.NODE_ENV !== "production" ? () => {
          warn2(`Write operation failed: computed property "${key}" is readonly.`);
        } : NOOP;
        const c = computed2({
          get: get2,
          set: set2
        });
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => c.value,
          set: (v) => c.value = v
        });
        if (process.env.NODE_ENV !== "production") {
          checkDuplicateProperties("Computed", key);
        }
      }
    }
    if (watchOptions) {
      for (const key in watchOptions) {
        createWatcher(watchOptions[key], ctx, publicThis, key);
      }
    }
    if (provideOptions) {
      const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
    if (created) {
      callHook(created, instance, "c");
    }
    function registerLifecycleHook(register, hook) {
      if (isArray(hook)) {
        hook.forEach((_hook) => register(_hook.bind(publicThis)));
      } else if (hook) {
        register(hook.bind(publicThis));
      }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (isArray(expose)) {
      if (expose.length) {
        const exposed = instance.exposed || (instance.exposed = {});
        expose.forEach((key) => {
          Object.defineProperty(exposed, key, {
            get: () => publicThis[key],
            set: (val) => publicThis[key] = val
          });
        });
      } else if (!instance.exposed) {
        instance.exposed = {};
      }
    }
    if (render2 && instance.render === NOOP) {
      instance.render = render2;
    }
    if (inheritAttrs != null) {
      instance.inheritAttrs = inheritAttrs;
    }
    if (components)
      instance.components = components;
    if (directives)
      instance.directives = directives;
  }
  function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
    if (isArray(injectOptions)) {
      injectOptions = normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
      const opt = injectOptions[key];
      let injected;
      if (isObject(opt)) {
        if ("default" in opt) {
          injected = inject(opt.from || key, opt.default, true);
        } else {
          injected = inject(opt.from || key);
        }
      } else {
        injected = inject(opt);
      }
      if (isRef(injected)) {
        if (unwrapRef) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: () => injected.value,
            set: (v) => injected.value = v
          });
        } else {
          if (process.env.NODE_ENV !== "production") {
            warn2(`injected property "${key}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`);
          }
          ctx[key] = injected;
        }
      } else {
        ctx[key] = injected;
      }
      if (process.env.NODE_ENV !== "production") {
        checkDuplicateProperties("Inject", key);
      }
    }
  }
  function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
  }
  function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
    if (isString(raw)) {
      const handler = ctx[raw];
      if (isFunction(handler)) {
        watch(getter, handler);
      } else if (process.env.NODE_ENV !== "production") {
        warn2(`Invalid watch handler specified by key "${raw}"`, handler);
      }
    } else if (isFunction(raw)) {
      watch(getter, raw.bind(publicThis));
    } else if (isObject(raw)) {
      if (isArray(raw)) {
        raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
      } else {
        const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
        if (isFunction(handler)) {
          watch(getter, handler, raw);
        } else if (process.env.NODE_ENV !== "production") {
          warn2(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
      }
    } else if (process.env.NODE_ENV !== "production") {
      warn2(`Invalid watch option: "${key}"`, raw);
    }
  }
  function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) {
      resolved = cached;
    } else if (!globalMixins.length && !mixins && !extendsOptions) {
      {
        resolved = base;
      }
    } else {
      resolved = {};
      if (globalMixins.length) {
        globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
      }
      mergeOptions(resolved, base, optionMergeStrategies);
    }
    cache.set(base, resolved);
    return resolved;
  }
  function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) {
      mergeOptions(to, extendsOptions, strats, true);
    }
    if (mixins) {
      mixins.forEach((m) => mergeOptions(to, m, strats, true));
    }
    for (const key in from) {
      if (asMixin && key === "expose") {
        process.env.NODE_ENV !== "production" && warn2(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
      } else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
      }
    }
    return to;
  }
  function mergeDataFn(to, from) {
    if (!from) {
      return to;
    }
    if (!to) {
      return from;
    }
    return function mergedDataFn() {
      return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
    };
  }
  function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
  }
  function normalizeInject(raw) {
    if (isArray(raw)) {
      const res = {};
      for (let i = 0; i < raw.length; i++) {
        res[raw[i]] = raw[i];
      }
      return res;
    }
    return raw;
  }
  function mergeAsArray2(to, from) {
    return to ? [...new Set([].concat(to, from))] : from;
  }
  function mergeObjectOptions(to, from) {
    return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
  }
  function mergeWatchOptions(to, from) {
    if (!to)
      return from;
    if (!from)
      return to;
    const merged = extend(/* @__PURE__ */ Object.create(null), to);
    for (const key in from) {
      merged[key] = mergeAsArray2(to[key], from[key]);
    }
    return merged;
  }
  function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = {};
    def(attrs, InternalObjectKey, 1);
    instance.propsDefaults = /* @__PURE__ */ Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    for (const key in instance.propsOptions[0]) {
      if (!(key in props)) {
        props[key] = void 0;
      }
    }
    if (process.env.NODE_ENV !== "production") {
      validateProps(rawProps || {}, props, instance);
    }
    if (isStateful) {
      instance.props = isSSR ? props : shallowReactive(props);
    } else {
      if (!instance.type.props) {
        instance.props = attrs;
      } else {
        instance.props = props;
      }
    }
    instance.attrs = attrs;
  }
  function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (!(process.env.NODE_ENV !== "production" && (instance.type.__hmrId || instance.parent && instance.parent.type.__hmrId)) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
      if (patchFlag & 8) {
        const propsToUpdate = instance.vnode.dynamicProps;
        for (let i = 0; i < propsToUpdate.length; i++) {
          let key = propsToUpdate[i];
          if (isEmitListener(instance.emitsOptions, key)) {
            continue;
          }
          const value = rawProps[key];
          if (options) {
            if (hasOwn(attrs, key)) {
              if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            } else {
              const camelizedKey = camelize(key);
              props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
            }
          } else {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          }
        }
      }
    } else {
      if (setFullProps(instance, rawProps, props, attrs)) {
        hasAttrsChanged = true;
      }
      let kebabKey;
      for (const key in rawCurrentProps) {
        if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
          if (options) {
            if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
              props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
            }
          } else {
            delete props[key];
          }
        }
      }
      if (attrs !== rawCurrentProps) {
        for (const key in attrs) {
          if (!rawProps || !hasOwn(rawProps, key) && true) {
            delete attrs[key];
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (hasAttrsChanged) {
      trigger(instance, "set", "$attrs");
    }
    if (process.env.NODE_ENV !== "production") {
      validateProps(rawProps || {}, props, instance);
    }
  }
  function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
      for (let key in rawProps) {
        if (isReservedProp(key)) {
          continue;
        }
        const value = rawProps[key];
        let camelKey;
        if (options && hasOwn(options, camelKey = camelize(key))) {
          if (!needCastKeys || !needCastKeys.includes(camelKey)) {
            props[camelKey] = value;
          } else {
            (rawCastValues || (rawCastValues = {}))[camelKey] = value;
          }
        } else if (!isEmitListener(instance.emitsOptions, key)) {
          if (!(key in attrs) || value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (needCastKeys) {
      const rawCurrentProps = toRaw(props);
      const castValues = rawCastValues || EMPTY_OBJ;
      for (let i = 0; i < needCastKeys.length; i++) {
        const key = needCastKeys[i];
        props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
      }
    }
    return hasAttrsChanged;
  }
  function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
      const hasDefault = hasOwn(opt, "default");
      if (hasDefault && value === void 0) {
        const defaultValue = opt.default;
        if (opt.type !== Function && isFunction(defaultValue)) {
          const { propsDefaults } = instance;
          if (key in propsDefaults) {
            value = propsDefaults[key];
          } else {
            setCurrentInstance(instance);
            value = propsDefaults[key] = defaultValue.call(null, props);
            unsetCurrentInstance();
          }
        } else {
          value = defaultValue;
        }
      }
      if (opt[0]) {
        if (isAbsent && !hasDefault) {
          value = false;
        } else if (opt[1] && (value === "" || value === hyphenate(key))) {
          value = true;
        }
      }
    }
    return value;
  }
  function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
      return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !isFunction(comp)) {
      const extendProps = (raw2) => {
        hasExtends = true;
        const [props, keys] = normalizePropsOptions(raw2, appContext, true);
        extend(normalized, props);
        if (keys)
          needCastKeys.push(...keys);
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendProps);
      }
      if (comp.extends) {
        extendProps(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendProps);
      }
    }
    if (!raw && !hasExtends) {
      cache.set(comp, EMPTY_ARR);
      return EMPTY_ARR;
    }
    if (isArray(raw)) {
      for (let i = 0; i < raw.length; i++) {
        if (process.env.NODE_ENV !== "production" && !isString(raw[i])) {
          warn2(`props must be strings when using array syntax.`, raw[i]);
        }
        const normalizedKey = camelize(raw[i]);
        if (validatePropName(normalizedKey)) {
          normalized[normalizedKey] = EMPTY_OBJ;
        }
      }
    } else if (raw) {
      if (process.env.NODE_ENV !== "production" && !isObject(raw)) {
        warn2(`invalid props options`, raw);
      }
      for (const key in raw) {
        const normalizedKey = camelize(key);
        if (validatePropName(normalizedKey)) {
          const opt = raw[key];
          const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : opt;
          if (prop) {
            const booleanIndex = getTypeIndex(Boolean, prop.type);
            const stringIndex = getTypeIndex(String, prop.type);
            prop[0] = booleanIndex > -1;
            prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
            if (booleanIndex > -1 || hasOwn(prop, "default")) {
              needCastKeys.push(normalizedKey);
            }
          }
        }
      }
    }
    const res = [normalized, needCastKeys];
    cache.set(comp, res);
    return res;
  }
  function validatePropName(key) {
    if (key[0] !== "$") {
      return true;
    } else if (process.env.NODE_ENV !== "production") {
      warn2(`Invalid prop name: "${key}" is a reserved property.`);
    }
    return false;
  }
  function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ctor === null ? "null" : "";
  }
  function isSameType(a, b) {
    return getType(a) === getType(b);
  }
  function getTypeIndex(type, expectedTypes) {
    if (isArray(expectedTypes)) {
      return expectedTypes.findIndex((t) => isSameType(t, type));
    } else if (isFunction(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
  }
  function validateProps(rawProps, props, instance) {
    const resolvedValues = toRaw(props);
    const options = instance.propsOptions[0];
    for (const key in options) {
      let opt = options[key];
      if (opt == null)
        continue;
      validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
    }
  }
  function validateProp(name, value, prop, isAbsent) {
    const { type, required, validator } = prop;
    if (required && isAbsent) {
      warn2('Missing required prop: "' + name + '"');
      return;
    }
    if (value == null && !prop.required) {
      return;
    }
    if (type != null && type !== true) {
      let isValid = false;
      const types = isArray(type) ? type : [type];
      const expectedTypes = [];
      for (let i = 0; i < types.length && !isValid; i++) {
        const { valid, expectedType } = assertType(value, types[i]);
        expectedTypes.push(expectedType || "");
        isValid = valid;
      }
      if (!isValid) {
        warn2(getInvalidTypeMessage(name, value, expectedTypes));
        return;
      }
    }
    if (validator && !validator(value)) {
      warn2('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
  }
  function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
      const t = typeof value;
      valid = t === expectedType.toLowerCase();
      if (!valid && t === "object") {
        valid = value instanceof type;
      }
    } else if (expectedType === "Object") {
      valid = isObject(value);
    } else if (expectedType === "Array") {
      valid = isArray(value);
    } else if (expectedType === "null") {
      valid = value === null;
    } else {
      valid = value instanceof type;
    }
    return {
      valid,
      expectedType
    };
  }
  function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = toRawType(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
      message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    if (isExplicable(receivedType)) {
      message += `with value ${receivedValue}.`;
    }
    return message;
  }
  function styleValue(value, type) {
    if (type === "String") {
      return `"${value}"`;
    } else if (type === "Number") {
      return `${Number(value)}`;
    } else {
      return `${value}`;
    }
  }
  function isExplicable(type) {
    const explicitTypes = ["string", "number", "boolean"];
    return explicitTypes.some((elem) => type.toLowerCase() === elem);
  }
  function isBoolean(...args) {
    return args.some((elem) => elem.toLowerCase() === "boolean");
  }
  function createAppContext() {
    return {
      app: null,
      config: {
        isNativeTag: NO,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  function createAppAPI(render2, hydrate2) {
    return function createApp2(rootComponent, rootProps = null) {
      if (!isFunction(rootComponent)) {
        rootComponent = Object.assign({}, rootComponent);
      }
      if (rootProps != null && !isObject(rootProps)) {
        process.env.NODE_ENV !== "production" && warn2(`root props passed to app.mount() must be an object.`);
        rootProps = null;
      }
      const context = createAppContext();
      const installedPlugins = /* @__PURE__ */ new Set();
      let isMounted = false;
      const app = context.app = {
        _uid: uid++,
        _component: rootComponent,
        _props: rootProps,
        _container: null,
        _context: context,
        _instance: null,
        version,
        get config() {
          return context.config;
        },
        set config(v) {
          if (process.env.NODE_ENV !== "production") {
            warn2(`app.config cannot be replaced. Modify individual options instead.`);
          }
        },
        use(plugin, ...options) {
          if (installedPlugins.has(plugin)) {
            process.env.NODE_ENV !== "production" && warn2(`Plugin has already been applied to target app.`);
          } else if (plugin && isFunction(plugin.install)) {
            installedPlugins.add(plugin);
            plugin.install(app, ...options);
          } else if (isFunction(plugin)) {
            installedPlugins.add(plugin);
            plugin(app, ...options);
          } else if (process.env.NODE_ENV !== "production") {
            warn2(`A plugin must either be a function or an object with an "install" function.`);
          }
          return app;
        },
        mixin(mixin) {
          if (__VUE_OPTIONS_API__) {
            if (!context.mixins.includes(mixin)) {
              context.mixins.push(mixin);
            } else if (process.env.NODE_ENV !== "production") {
              warn2("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
            }
          } else if (process.env.NODE_ENV !== "production") {
            warn2("Mixins are only available in builds supporting Options API");
          }
          return app;
        },
        component(name, component) {
          if (process.env.NODE_ENV !== "production") {
            validateComponentName(name, context.config);
          }
          if (!component) {
            return context.components[name];
          }
          if (process.env.NODE_ENV !== "production" && context.components[name]) {
            warn2(`Component "${name}" has already been registered in target app.`);
          }
          context.components[name] = component;
          return app;
        },
        directive(name, directive) {
          if (process.env.NODE_ENV !== "production") {
            validateDirectiveName(name);
          }
          if (!directive) {
            return context.directives[name];
          }
          if (process.env.NODE_ENV !== "production" && context.directives[name]) {
            warn2(`Directive "${name}" has already been registered in target app.`);
          }
          context.directives[name] = directive;
          return app;
        },
        mount(rootContainer, isHydrate, isSVG) {
          if (!isMounted) {
            if (process.env.NODE_ENV !== "production" && rootContainer.__vue_app__) {
              warn2(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
            }
            const vnode = createVNode(rootComponent, rootProps);
            vnode.appContext = context;
            if (process.env.NODE_ENV !== "production") {
              context.reload = () => {
                render2(cloneVNode(vnode), rootContainer, isSVG);
              };
            }
            if (isHydrate && hydrate2) {
              hydrate2(vnode, rootContainer);
            } else {
              render2(vnode, rootContainer, isSVG);
            }
            isMounted = true;
            app._container = rootContainer;
            rootContainer.__vue_app__ = app;
            if (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) {
              app._instance = vnode.component;
              devtoolsInitApp(app, version);
            }
            return getExposeProxy(vnode.component) || vnode.component.proxy;
          } else if (process.env.NODE_ENV !== "production") {
            warn2(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
          }
        },
        unmount() {
          if (isMounted) {
            render2(null, app._container);
            if (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) {
              app._instance = null;
              devtoolsUnmountApp(app);
            }
            delete app._container.__vue_app__;
          } else if (process.env.NODE_ENV !== "production") {
            warn2(`Cannot unmount an app that is not mounted.`);
          }
        },
        provide(key, value) {
          if (process.env.NODE_ENV !== "production" && key in context.provides) {
            warn2(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
          }
          context.provides[key] = value;
          return app;
        }
      };
      return app;
    };
  }
  function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (isArray(rawRef)) {
      rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
      return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
      return;
    }
    const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref3 } = rawRef;
    if (process.env.NODE_ENV !== "production" && !owner) {
      warn2(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
      return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    if (oldRef != null && oldRef !== ref3) {
      if (isString(oldRef)) {
        refs[oldRef] = null;
        if (hasOwn(setupState, oldRef)) {
          setupState[oldRef] = null;
        }
      } else if (isRef(oldRef)) {
        oldRef.value = null;
      }
    }
    if (isFunction(ref3)) {
      callWithErrorHandling(ref3, owner, 12, [value, refs]);
    } else {
      const _isString = isString(ref3);
      const _isRef = isRef(ref3);
      if (_isString || _isRef) {
        const doSet = () => {
          if (rawRef.f) {
            const existing = _isString ? refs[ref3] : ref3.value;
            if (isUnmount) {
              isArray(existing) && remove(existing, refValue);
            } else {
              if (!isArray(existing)) {
                if (_isString) {
                  refs[ref3] = [refValue];
                  if (hasOwn(setupState, ref3)) {
                    setupState[ref3] = refs[ref3];
                  }
                } else {
                  ref3.value = [refValue];
                  if (rawRef.k)
                    refs[rawRef.k] = ref3.value;
                }
              } else if (!existing.includes(refValue)) {
                existing.push(refValue);
              }
            }
          } else if (_isString) {
            refs[ref3] = value;
            if (hasOwn(setupState, ref3)) {
              setupState[ref3] = value;
            }
          } else if (_isRef) {
            ref3.value = value;
            if (rawRef.k)
              refs[rawRef.k] = value;
          } else if (process.env.NODE_ENV !== "production") {
            warn2("Invalid template ref type:", ref3, `(${typeof ref3})`);
          }
        };
        if (value) {
          doSet.id = -1;
          queuePostRenderEffect(doSet, parentSuspense);
        } else {
          doSet();
        }
      } else if (process.env.NODE_ENV !== "production") {
        warn2("Invalid template ref type:", ref3, `(${typeof ref3})`);
      }
    }
  }
  function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp: patchProp2, createText, nextSibling, parentNode, remove: remove2, insert, createComment } } = rendererInternals;
    const hydrate2 = (vnode, container) => {
      if (!container.hasChildNodes()) {
        process.env.NODE_ENV !== "production" && warn2(`Attempting to hydrate existing markup but container is empty. Performing full mount instead.`);
        patch(null, vnode, container);
        flushPostFlushCbs();
        container._vnode = vnode;
        return;
      }
      hasMismatch = false;
      hydrateNode(container.firstChild, vnode, null, null, null);
      flushPostFlushCbs();
      container._vnode = vnode;
      if (hasMismatch && true) {
        console.error(`Hydration completed but contains mismatches.`);
      }
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
      const isFragmentStart = isComment(node) && node.data === "[";
      const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
      const { type, ref: ref3, shapeFlag, patchFlag } = vnode;
      const domType = node.nodeType;
      vnode.el = node;
      if (patchFlag === -2) {
        optimized = false;
        vnode.dynamicChildren = null;
      }
      let nextNode = null;
      switch (type) {
        case Text:
          if (domType !== 3) {
            if (vnode.children === "") {
              insert(vnode.el = createText(""), parentNode(node), node);
              nextNode = node;
            } else {
              nextNode = onMismatch();
            }
          } else {
            if (node.data !== vnode.children) {
              hasMismatch = true;
              process.env.NODE_ENV !== "production" && warn2(`Hydration text mismatch:
- Client: ${JSON.stringify(node.data)}
- Server: ${JSON.stringify(vnode.children)}`);
              node.data = vnode.children;
            }
            nextNode = nextSibling(node);
          }
          break;
        case Comment:
          if (domType !== 8 || isFragmentStart) {
            nextNode = onMismatch();
          } else {
            nextNode = nextSibling(node);
          }
          break;
        case Static:
          if (domType !== 1 && domType !== 3) {
            nextNode = onMismatch();
          } else {
            nextNode = node;
            const needToAdoptContent = !vnode.children.length;
            for (let i = 0; i < vnode.staticCount; i++) {
              if (needToAdoptContent)
                vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
              if (i === vnode.staticCount - 1) {
                vnode.anchor = nextNode;
              }
              nextNode = nextSibling(nextNode);
            }
            return nextNode;
          }
          break;
        case Fragment:
          if (!isFragmentStart) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
          }
          break;
        default:
          if (shapeFlag & 1) {
            if (domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
              nextNode = onMismatch();
            } else {
              nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
          } else if (shapeFlag & 6) {
            vnode.slotScopeIds = slotScopeIds;
            const container = parentNode(node);
            mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
            nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
            if (nextNode && isComment(nextNode) && nextNode.data === "teleport end") {
              nextNode = nextSibling(nextNode);
            }
            if (isAsyncWrapper(vnode)) {
              let subTree;
              if (isFragmentStart) {
                subTree = createVNode(Fragment);
                subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
              } else {
                subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
              }
              subTree.el = node;
              vnode.component.subTree = subTree;
            }
          } else if (shapeFlag & 64) {
            if (domType !== 8) {
              nextNode = onMismatch();
            } else {
              nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
            }
          } else if (shapeFlag & 128) {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
          } else if (process.env.NODE_ENV !== "production") {
            warn2("Invalid HostVNode type:", type, `(${typeof type})`);
          }
      }
      if (ref3 != null) {
        setRef(ref3, null, parentSuspense, vnode);
      }
      return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
      optimized = optimized || !!vnode.dynamicChildren;
      const { type, props, patchFlag, shapeFlag, dirs } = vnode;
      const forcePatchValue = type === "input" && dirs || type === "option";
      if (process.env.NODE_ENV !== "production" || forcePatchValue || patchFlag !== -1) {
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "created");
        }
        if (props) {
          if (forcePatchValue || !optimized || patchFlag & (16 | 32)) {
            for (const key in props) {
              if (forcePatchValue && key.endsWith("value") || isOn(key) && !isReservedProp(key)) {
                patchProp2(el, key, null, props[key], false, void 0, parentComponent);
              }
            }
          } else if (props.onClick) {
            patchProp2(el, "onClick", null, props.onClick, false, void 0, parentComponent);
          }
        }
        let vnodeHooks;
        if (vnodeHooks = props && props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHooks, parentComponent, vnode);
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        }
        if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
          queueEffectWithSuspense(() => {
            vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
          }, parentSuspense);
        }
        if (shapeFlag & 16 && !(props && (props.innerHTML || props.textContent))) {
          let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
          let hasWarned2 = false;
          while (next) {
            hasMismatch = true;
            if (process.env.NODE_ENV !== "production" && !hasWarned2) {
              warn2(`Hydration children mismatch in <${vnode.type}>: server rendered element contains more child nodes than client vdom.`);
              hasWarned2 = true;
            }
            const cur = next;
            next = next.nextSibling;
            remove2(cur);
          }
        } else if (shapeFlag & 8) {
          if (el.textContent !== vnode.children) {
            hasMismatch = true;
            process.env.NODE_ENV !== "production" && warn2(`Hydration text content mismatch in <${vnode.type}>:
- Client: ${el.textContent}
- Server: ${vnode.children}`);
            el.textContent = vnode.children;
          }
        }
      }
      return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
      optimized = optimized || !!parentVNode.dynamicChildren;
      const children = parentVNode.children;
      const l = children.length;
      let hasWarned2 = false;
      for (let i = 0; i < l; i++) {
        const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
        if (node) {
          node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        } else if (vnode.type === Text && !vnode.children) {
          continue;
        } else {
          hasMismatch = true;
          if (process.env.NODE_ENV !== "production" && !hasWarned2) {
            warn2(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: server rendered element contains fewer child nodes than client vdom.`);
            hasWarned2 = true;
          }
          patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
        }
      }
      return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
      const { slotScopeIds: fragmentSlotScopeIds } = vnode;
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      const container = parentNode(node);
      const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
      if (next && isComment(next) && next.data === "]") {
        return nextSibling(vnode.anchor = next);
      } else {
        hasMismatch = true;
        insert(vnode.anchor = createComment(`]`), container, next);
        return next;
      }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
      hasMismatch = true;
      process.env.NODE_ENV !== "production" && warn2(`Hydration node mismatch:
- Client vnode:`, vnode.type, `
- Server rendered DOM:`, node, node.nodeType === 3 ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``);
      vnode.el = null;
      if (isFragment) {
        const end = locateClosingAsyncAnchor(node);
        while (true) {
          const next2 = nextSibling(node);
          if (next2 && next2 !== end) {
            remove2(next2);
          } else {
            break;
          }
        }
      }
      const next = nextSibling(node);
      const container = parentNode(node);
      remove2(node);
      patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
      return next;
    };
    const locateClosingAsyncAnchor = (node) => {
      let match = 0;
      while (node) {
        node = nextSibling(node);
        if (node && isComment(node)) {
          if (node.data === "[")
            match++;
          if (node.data === "]") {
            if (match === 0) {
              return nextSibling(node);
            } else {
              match--;
            }
          }
        }
      }
      return node;
    };
    return [hydrate2, hydrateNode];
  }
  function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      perf.mark(`vue-${type}-${instance.uid}`);
    }
    if (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) {
      devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
    }
  }
  function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      const startTag = `vue-${type}-${instance.uid}`;
      const endTag = startTag + `:end`;
      perf.mark(endTag);
      perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
    }
    if (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) {
      devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
    }
  }
  function isSupported() {
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function initFeatureFlags() {
    const needWarn = [];
    if (typeof __VUE_OPTIONS_API__ !== "boolean") {
      process.env.NODE_ENV !== "production" && needWarn.push(`__VUE_OPTIONS_API__`);
      getGlobalThis().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== "boolean") {
      process.env.NODE_ENV !== "production" && needWarn.push(`__VUE_PROD_DEVTOOLS__`);
      getGlobalThis().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (process.env.NODE_ENV !== "production" && needWarn.length) {
      const multi = needWarn.length > 1;
      console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
    }
  }
  function createRenderer(options) {
    return baseCreateRenderer(options);
  }
  function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
  }
  function baseCreateRenderer(options, createHydrationFns) {
    {
      initFeatureFlags();
    }
    const target = getGlobalThis();
    target.__VUE__ = true;
    if (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) {
      setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    }
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = process.env.NODE_ENV !== "production" && isHmrUpdating ? false : !!n2.dynamicChildren) => {
      if (n1 === n2) {
        return;
      }
      if (n1 && !isSameVNodeType(n1, n2)) {
        anchor = getNextHostNode(n1);
        unmount(n1, parentComponent, parentSuspense, true);
        n1 = null;
      }
      if (n2.patchFlag === -2) {
        optimized = false;
        n2.dynamicChildren = null;
      }
      const { type, ref: ref3, shapeFlag } = n2;
      switch (type) {
        case Text:
          processText(n1, n2, container, anchor);
          break;
        case Comment:
          processCommentNode(n1, n2, container, anchor);
          break;
        case Static:
          if (n1 == null) {
            mountStaticNode(n2, container, anchor, isSVG);
          } else if (process.env.NODE_ENV !== "production") {
            patchStaticNode(n1, n2, container, isSVG);
          }
          break;
        case Fragment:
          processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          break;
        default:
          if (shapeFlag & 1) {
            processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 6) {
            processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 64) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else if (shapeFlag & 128) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else if (process.env.NODE_ENV !== "production") {
            warn2("Invalid VNode type:", type, `(${typeof type})`);
          }
      }
      if (ref3 != null && parentComponent) {
        setRef(ref3, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
      }
    };
    const processText = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
      } else {
        const el = n2.el = n1.el;
        if (n2.children !== n1.children) {
          hostSetText(el, n2.children);
        }
      }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
      } else {
        n2.el = n1.el;
      }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
      [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
    };
    const patchStaticNode = (n1, n2, container, isSVG) => {
      if (n2.children !== n1.children) {
        const anchor = hostNextSibling(n1.anchor);
        removeStaticNode(n1);
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
      } else {
        n2.el = n1.el;
        n2.anchor = n1.anchor;
      }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostInsert(el, container, nextSibling);
        el = next;
      }
      hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostRemove(el);
        el = next;
      }
      hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      isSVG = isSVG || n2.type === "svg";
      if (n1 == null) {
        mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let el;
      let vnodeHook;
      const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
      if (!(process.env.NODE_ENV !== "production") && vnode.el && hostCloneNode !== void 0 && patchFlag === -1) {
        el = vnode.el = hostCloneNode(vnode.el);
      } else {
        el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
        if (shapeFlag & 8) {
          hostSetElementText(el, vnode.children);
        } else if (shapeFlag & 16) {
          mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "created");
        }
        if (props) {
          for (const key in props) {
            if (key !== "value" && !isReservedProp(key)) {
              hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
          if ("value" in props) {
            hostPatchProp(el, "value", null, props.value);
          }
          if (vnodeHook = props.onVnodeBeforeMount) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
          }
        }
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
      }
      if (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) {
        Object.defineProperty(el, "__vnode", {
          value: vnode,
          enumerable: false
        });
        Object.defineProperty(el, "__vueParentComponent", {
          value: parentComponent,
          enumerable: false
        });
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
      if (needCallTransitionHooks) {
        transition.beforeEnter(el);
      }
      hostInsert(el, container, anchor);
      if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
      if (scopeId) {
        hostSetScopeId(el, scopeId);
      }
      if (slotScopeIds) {
        for (let i = 0; i < slotScopeIds.length; i++) {
          hostSetScopeId(el, slotScopeIds[i]);
        }
      }
      if (parentComponent) {
        let subTree = parentComponent.subTree;
        if (process.env.NODE_ENV !== "production" && subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
          subTree = filterSingleRoot(subTree.children) || subTree;
        }
        if (vnode === subTree) {
          const parentVNode = parentComponent.vnode;
          setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
        }
      }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
      for (let i = start; i < children.length; i++) {
        const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
        patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const el = n2.el = n1.el;
      let { patchFlag, dynamicChildren, dirs } = n2;
      patchFlag |= n1.patchFlag & 16;
      const oldProps = n1.props || EMPTY_OBJ;
      const newProps = n2.props || EMPTY_OBJ;
      let vnodeHook;
      parentComponent && toggleRecurse(parentComponent, false);
      if (vnodeHook = newProps.onVnodeBeforeUpdate) {
        invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
      }
      if (dirs) {
        invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
      }
      parentComponent && toggleRecurse(parentComponent, true);
      if (process.env.NODE_ENV !== "production" && isHmrUpdating) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      const areChildrenSVG = isSVG && n2.type !== "foreignObject";
      if (dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
        if (process.env.NODE_ENV !== "production" && parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        }
      } else if (!optimized) {
        patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
      }
      if (patchFlag > 0) {
        if (patchFlag & 16) {
          patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        } else {
          if (patchFlag & 2) {
            if (oldProps.class !== newProps.class) {
              hostPatchProp(el, "class", null, newProps.class, isSVG);
            }
          }
          if (patchFlag & 4) {
            hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
          }
          if (patchFlag & 8) {
            const propsToUpdate = n2.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
              const key = propsToUpdate[i];
              const prev = oldProps[key];
              const next = newProps[key];
              if (next !== prev || key === "value") {
                hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
              }
            }
          }
        }
        if (patchFlag & 1) {
          if (n1.children !== n2.children) {
            hostSetElementText(el, n2.children);
          }
        }
      } else if (!optimized && dynamicChildren == null) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      }
      if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
      }
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
      for (let i = 0; i < newChildren.length; i++) {
        const oldVNode = oldChildren[i];
        const newVNode = newChildren[i];
        const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
        patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
      }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
      if (oldProps !== newProps) {
        for (const key in newProps) {
          if (isReservedProp(key))
            continue;
          const next = newProps[key];
          const prev = oldProps[key];
          if (next !== prev && key !== "value") {
            hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if (oldProps !== EMPTY_OBJ) {
          for (const key in oldProps) {
            if (!isReservedProp(key) && !(key in newProps)) {
              hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
        if ("value" in newProps) {
          hostPatchProp(el, "value", oldProps.value, newProps.value);
        }
      }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
      const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
      let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
      if (process.env.NODE_ENV !== "production" && (isHmrUpdating || patchFlag & 2048)) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      if (n1 == null) {
        hostInsert(fragmentStartAnchor, container, anchor);
        hostInsert(fragmentEndAnchor, container, anchor);
        mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
          patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
          if (process.env.NODE_ENV !== "production" && parentComponent && parentComponent.type.__hmrId) {
            traverseStaticChildren(n1, n2);
          } else if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
            traverseStaticChildren(n1, n2, true);
          }
        } else {
          patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      n2.slotScopeIds = slotScopeIds;
      if (n1 == null) {
        if (n2.shapeFlag & 512) {
          parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
        } else {
          mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
      } else {
        updateComponent(n1, n2, optimized);
      }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
      const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
      if (process.env.NODE_ENV !== "production" && instance.type.__hmrId) {
        registerHMR(instance);
      }
      if (process.env.NODE_ENV !== "production") {
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
      }
      if (isKeepAlive(initialVNode)) {
        instance.ctx.renderer = internals;
      }
      {
        if (process.env.NODE_ENV !== "production") {
          startMeasure(instance, `init`);
        }
        setupComponent(instance);
        if (process.env.NODE_ENV !== "production") {
          endMeasure(instance, `init`);
        }
      }
      if (instance.asyncDep) {
        parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
        if (!initialVNode.el) {
          const placeholder = instance.subTree = createVNode(Comment);
          processCommentNode(null, placeholder, container, anchor);
        }
        return;
      }
      setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
      if (process.env.NODE_ENV !== "production") {
        popWarningContext();
        endMeasure(instance, `mount`);
      }
    };
    const updateComponent = (n1, n2, optimized) => {
      const instance = n2.component = n1.component;
      if (shouldUpdateComponent(n1, n2, optimized)) {
        if (instance.asyncDep && !instance.asyncResolved) {
          if (process.env.NODE_ENV !== "production") {
            pushWarningContext(n2);
          }
          updateComponentPreRender(instance, n2, optimized);
          if (process.env.NODE_ENV !== "production") {
            popWarningContext();
          }
          return;
        } else {
          instance.next = n2;
          invalidateJob(instance.update);
          instance.update();
        }
      } else {
        n2.el = n1.el;
        instance.vnode = n2;
      }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
      const componentUpdateFn = () => {
        if (!instance.isMounted) {
          let vnodeHook;
          const { el, props } = initialVNode;
          const { bm, m, parent } = instance;
          const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
          toggleRecurse(instance, false);
          if (bm) {
            invokeArrayFns(bm);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
            invokeVNodeHook(vnodeHook, parent, initialVNode);
          }
          toggleRecurse(instance, true);
          if (el && hydrateNode) {
            const hydrateSubTree = () => {
              if (process.env.NODE_ENV !== "production") {
                startMeasure(instance, `render`);
              }
              instance.subTree = renderComponentRoot(instance);
              if (process.env.NODE_ENV !== "production") {
                endMeasure(instance, `render`);
              }
              if (process.env.NODE_ENV !== "production") {
                startMeasure(instance, `hydrate`);
              }
              hydrateNode(el, instance.subTree, instance, parentSuspense, null);
              if (process.env.NODE_ENV !== "production") {
                endMeasure(instance, `hydrate`);
              }
            };
            if (isAsyncWrapperVNode) {
              initialVNode.type.__asyncLoader().then(
                () => !instance.isUnmounted && hydrateSubTree()
              );
            } else {
              hydrateSubTree();
            }
          } else {
            if (process.env.NODE_ENV !== "production") {
              startMeasure(instance, `render`);
            }
            const subTree = instance.subTree = renderComponentRoot(instance);
            if (process.env.NODE_ENV !== "production") {
              endMeasure(instance, `render`);
            }
            if (process.env.NODE_ENV !== "production") {
              startMeasure(instance, `patch`);
            }
            patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
            if (process.env.NODE_ENV !== "production") {
              endMeasure(instance, `patch`);
            }
            initialVNode.el = subTree.el;
          }
          if (m) {
            queuePostRenderEffect(m, parentSuspense);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
            const scopedInitialVNode = initialVNode;
            queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
          }
          if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
            instance.a && queuePostRenderEffect(instance.a, parentSuspense);
          }
          instance.isMounted = true;
          if (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) {
            devtoolsComponentAdded(instance);
          }
          initialVNode = container = anchor = null;
        } else {
          let { next, bu, u, parent, vnode } = instance;
          let originNext = next;
          let vnodeHook;
          if (process.env.NODE_ENV !== "production") {
            pushWarningContext(next || instance.vnode);
          }
          toggleRecurse(instance, false);
          if (next) {
            next.el = vnode.el;
            updateComponentPreRender(instance, next, optimized);
          } else {
            next = vnode;
          }
          if (bu) {
            invokeArrayFns(bu);
          }
          if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
            invokeVNodeHook(vnodeHook, parent, next, vnode);
          }
          toggleRecurse(instance, true);
          if (process.env.NODE_ENV !== "production") {
            startMeasure(instance, `render`);
          }
          const nextTree = renderComponentRoot(instance);
          if (process.env.NODE_ENV !== "production") {
            endMeasure(instance, `render`);
          }
          const prevTree = instance.subTree;
          instance.subTree = nextTree;
          if (process.env.NODE_ENV !== "production") {
            startMeasure(instance, `patch`);
          }
          patch(
            prevTree,
            nextTree,
            hostParentNode(prevTree.el),
            getNextHostNode(prevTree),
            instance,
            parentSuspense,
            isSVG
          );
          if (process.env.NODE_ENV !== "production") {
            endMeasure(instance, `patch`);
          }
          next.el = nextTree.el;
          if (originNext === null) {
            updateHOCHostEl(instance, nextTree.el);
          }
          if (u) {
            queuePostRenderEffect(u, parentSuspense);
          }
          if (vnodeHook = next.props && next.props.onVnodeUpdated) {
            queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
          }
          if (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) {
            devtoolsComponentUpdated(instance);
          }
          if (process.env.NODE_ENV !== "production") {
            popWarningContext();
          }
        }
      };
      const effect2 = instance.effect = new ReactiveEffect(
        componentUpdateFn,
        () => queueJob(update),
        instance.scope
      );
      const update = instance.update = () => effect2.run();
      update.id = instance.uid;
      toggleRecurse(instance, true);
      if (process.env.NODE_ENV !== "production") {
        effect2.onTrack = instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0;
        effect2.onTrigger = instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0;
        update.ownerInstance = instance;
      }
      update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
      nextVNode.component = instance;
      const prevProps = instance.vnode.props;
      instance.vnode = nextVNode;
      instance.next = null;
      updateProps(instance, nextVNode.props, prevProps, optimized);
      updateSlots(instance, nextVNode.children, optimized);
      pauseTracking();
      flushPreFlushCbs(void 0, instance.update);
      resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
      const c1 = n1 && n1.children;
      const prevShapeFlag = n1 ? n1.shapeFlag : 0;
      const c2 = n2.children;
      const { patchFlag, shapeFlag } = n2;
      if (patchFlag > 0) {
        if (patchFlag & 128) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        } else if (patchFlag & 256) {
          patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        }
      }
      if (shapeFlag & 8) {
        if (prevShapeFlag & 16) {
          unmountChildren(c1, parentComponent, parentSuspense);
        }
        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
        if (prevShapeFlag & 16) {
          if (shapeFlag & 16) {
            patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else {
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
          if (prevShapeFlag & 8) {
            hostSetElementText(container, "");
          }
          if (shapeFlag & 16) {
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
        }
      }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      c1 = c1 || EMPTY_ARR;
      c2 = c2 || EMPTY_ARR;
      const oldLength = c1.length;
      const newLength = c2.length;
      const commonLength = Math.min(oldLength, newLength);
      let i;
      for (i = 0; i < commonLength; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
      if (oldLength > newLength) {
        unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
      } else {
        mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
      }
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let i = 0;
      const l2 = c2.length;
      let e1 = c1.length - 1;
      let e2 = l2 - 1;
      while (i <= e1 && i <= e2) {
        const n1 = c1[i];
        const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        i++;
      }
      while (i <= e1 && i <= e2) {
        const n1 = c1[e1];
        const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        e1--;
        e2--;
      }
      if (i > e1) {
        if (i <= e2) {
          const nextPos = e2 + 1;
          const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
          while (i <= e2) {
            patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            i++;
          }
        }
      } else if (i > e2) {
        while (i <= e1) {
          unmount(c1[i], parentComponent, parentSuspense, true);
          i++;
        }
      } else {
        const s1 = i;
        const s2 = i;
        const keyToNewIndexMap = /* @__PURE__ */ new Map();
        for (i = s2; i <= e2; i++) {
          const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
          if (nextChild.key != null) {
            if (process.env.NODE_ENV !== "production" && keyToNewIndexMap.has(nextChild.key)) {
              warn2(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
            }
            keyToNewIndexMap.set(nextChild.key, i);
          }
        }
        let j;
        let patched = 0;
        const toBePatched = e2 - s2 + 1;
        let moved = false;
        let maxNewIndexSoFar = 0;
        const newIndexToOldIndexMap = new Array(toBePatched);
        for (i = 0; i < toBePatched; i++)
          newIndexToOldIndexMap[i] = 0;
        for (i = s1; i <= e1; i++) {
          const prevChild = c1[i];
          if (patched >= toBePatched) {
            unmount(prevChild, parentComponent, parentSuspense, true);
            continue;
          }
          let newIndex;
          if (prevChild.key != null) {
            newIndex = keyToNewIndexMap.get(prevChild.key);
          } else {
            for (j = s2; j <= e2; j++) {
              if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                newIndex = j;
                break;
              }
            }
          }
          if (newIndex === void 0) {
            unmount(prevChild, parentComponent, parentSuspense, true);
          } else {
            newIndexToOldIndexMap[newIndex - s2] = i + 1;
            if (newIndex >= maxNewIndexSoFar) {
              maxNewIndexSoFar = newIndex;
            } else {
              moved = true;
            }
            patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            patched++;
          }
        }
        const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
        j = increasingNewIndexSequence.length - 1;
        for (i = toBePatched - 1; i >= 0; i--) {
          const nextIndex = s2 + i;
          const nextChild = c2[nextIndex];
          const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
          if (newIndexToOldIndexMap[i] === 0) {
            patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (moved) {
            if (j < 0 || i !== increasingNewIndexSequence[j]) {
              move(nextChild, container, anchor, 2);
            } else {
              j--;
            }
          }
        }
      }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
      const { el, type, transition, children, shapeFlag } = vnode;
      if (shapeFlag & 6) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }
      if (shapeFlag & 128) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }
      if (shapeFlag & 64) {
        type.move(vnode, container, anchor, internals);
        return;
      }
      if (type === Fragment) {
        hostInsert(el, container, anchor);
        for (let i = 0; i < children.length; i++) {
          move(children[i], container, anchor, moveType);
        }
        hostInsert(vnode.anchor, container, anchor);
        return;
      }
      if (type === Static) {
        moveStaticNode(vnode, container, anchor);
        return;
      }
      const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
      if (needTransition) {
        if (moveType === 0) {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(() => transition.enter(el), parentSuspense);
        } else {
          const { leave, delayLeave, afterLeave } = transition;
          const remove3 = () => hostInsert(el, container, anchor);
          const performLeave = () => {
            leave(el, () => {
              remove3();
              afterLeave && afterLeave();
            });
          };
          if (delayLeave) {
            delayLeave(el, remove3, performLeave);
          } else {
            performLeave();
          }
        }
      } else {
        hostInsert(el, container, anchor);
      }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
      const { type, props, ref: ref3, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
      if (ref3 != null) {
        setRef(ref3, null, parentSuspense, vnode, true);
      }
      if (shapeFlag & 256) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }
      const shouldInvokeDirs = shapeFlag & 1 && dirs;
      const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
      let vnodeHook;
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
      if (shapeFlag & 6) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
        if (shapeFlag & 128) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }
        if (shouldInvokeDirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
        }
        if (shapeFlag & 64) {
          vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
        } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
          unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
        } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
          unmountChildren(children, parentComponent, parentSuspense);
        }
        if (doRemove) {
          remove2(vnode);
        }
      }
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
      }
    };
    const remove2 = (vnode) => {
      const { type, el, anchor, transition } = vnode;
      if (type === Fragment) {
        if (process.env.NODE_ENV !== "production" && vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
          vnode.children.forEach((child) => {
            if (child.type === Comment) {
              hostRemove(child.el);
            } else {
              remove2(child);
            }
          });
        } else {
          removeFragment(el, anchor);
        }
        return;
      }
      if (type === Static) {
        removeStaticNode(vnode);
        return;
      }
      const performRemove = () => {
        hostRemove(el);
        if (transition && !transition.persisted && transition.afterLeave) {
          transition.afterLeave();
        }
      };
      if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
        const { leave, delayLeave } = transition;
        const performLeave = () => leave(el, performRemove);
        if (delayLeave) {
          delayLeave(vnode.el, performRemove, performLeave);
        } else {
          performLeave();
        }
      } else {
        performRemove();
      }
    };
    const removeFragment = (cur, end) => {
      let next;
      while (cur !== end) {
        next = hostNextSibling(cur);
        hostRemove(cur);
        cur = next;
      }
      hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
      if (process.env.NODE_ENV !== "production" && instance.type.__hmrId) {
        unregisterHMR(instance);
      }
      const { bum, scope, update, subTree, um } = instance;
      if (bum) {
        invokeArrayFns(bum);
      }
      scope.stop();
      if (update) {
        update.active = false;
        unmount(subTree, instance, parentSuspense, doRemove);
      }
      if (um) {
        queuePostRenderEffect(um, parentSuspense);
      }
      queuePostRenderEffect(() => {
        instance.isUnmounted = true;
      }, parentSuspense);
      if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
        parentSuspense.deps--;
        if (parentSuspense.deps === 0) {
          parentSuspense.resolve();
        }
      }
      if (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) {
        devtoolsComponentRemoved(instance);
      }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
      for (let i = start; i < children.length; i++) {
        unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
      }
    };
    const getNextHostNode = (vnode) => {
      if (vnode.shapeFlag & 6) {
        return getNextHostNode(vnode.component.subTree);
      }
      if (vnode.shapeFlag & 128) {
        return vnode.suspense.next();
      }
      return hostNextSibling(vnode.anchor || vnode.el);
    };
    const render2 = (vnode, container, isSVG) => {
      if (vnode == null) {
        if (container._vnode) {
          unmount(container._vnode, null, null, true);
        }
      } else {
        patch(container._vnode || null, vnode, container, null, null, null, isSVG);
      }
      flushPostFlushCbs();
      container._vnode = vnode;
    };
    const internals = {
      p: patch,
      um: unmount,
      m: move,
      r: remove2,
      mt: mountComponent,
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      n: getNextHostNode,
      o: options
    };
    let hydrate2;
    let hydrateNode;
    if (createHydrationFns) {
      [hydrate2, hydrateNode] = createHydrationFns(internals);
    }
    return {
      render: render2,
      hydrate: hydrate2,
      createApp: createAppAPI(render2, hydrate2)
    };
  }
  function toggleRecurse({ effect: effect2, update }, allowed) {
    effect2.allowRecurse = update.allowRecurse = allowed;
  }
  function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray(ch1) && isArray(ch2)) {
      for (let i = 0; i < ch1.length; i++) {
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
          if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
            c2 = ch2[i] = cloneIfMounted(ch2[i]);
            c2.el = c1.el;
          }
          if (!shallow)
            traverseStaticChildren(c1, c2);
        }
        if (process.env.NODE_ENV !== "production" && c2.type === Comment && !c2.el) {
          c2.el = c1.el;
        }
      }
    }
  }
  function getSequence(arr) {
    const p2 = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
      const arrI = arr[i];
      if (arrI !== 0) {
        j = result[result.length - 1];
        if (arr[j] < arrI) {
          p2[i] = j;
          result.push(i);
          continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
          c = u + v >> 1;
          if (arr[result[c]] < arrI) {
            u = c + 1;
          } else {
            v = c;
          }
        }
        if (arrI < arr[result[u]]) {
          if (u > 0) {
            p2[i] = result[u - 1];
          }
          result[u] = i;
        }
      }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
      result[u] = v;
      v = p2[v];
    }
    return result;
  }
  function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
    if (moveType === 0) {
      insert(vnode.targetAnchor, container, parentAnchor);
    }
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2;
    if (isReorder) {
      insert(el, container, parentAnchor);
    }
    if (!isReorder || isTeleportDisabled(props)) {
      if (shapeFlag & 16) {
        for (let i = 0; i < children.length; i++) {
          move(children[i], container, parentAnchor, 2);
        }
      }
    }
    if (isReorder) {
      insert(anchor, container, parentAnchor);
    }
  }
  function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
    const target = vnode.target = resolveTarget(vnode.props, querySelector);
    if (target) {
      const targetNode = target._lpa || target.firstChild;
      if (vnode.shapeFlag & 16) {
        if (isTeleportDisabled(vnode.props)) {
          vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
          vnode.targetAnchor = targetNode;
        } else {
          vnode.anchor = nextSibling(node);
          let targetAnchor = targetNode;
          while (targetAnchor) {
            targetAnchor = nextSibling(targetAnchor);
            if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
              vnode.targetAnchor = targetAnchor;
              target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
              break;
            }
          }
          hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
        }
      }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
  }
  function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
  }
  function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
  }
  function setBlockTracking(value) {
    isBlockTreeEnabled += value;
  }
  function setupBlock(vnode) {
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
    closeBlock();
    if (isBlockTreeEnabled > 0 && currentBlock) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
  }
  function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
  }
  function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
  }
  function isSameVNodeType(n1, n2) {
    if (process.env.NODE_ENV !== "production" && n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
      return false;
    }
    return n1.type === n2.type && n1.key === n2.key;
  }
  function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
  }
  function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
      __v_isVNode: true,
      __v_skip: true,
      type,
      props,
      key: props && normalizeKey(props),
      ref: props && normalizeRef(props),
      scopeId: currentScopeId,
      slotScopeIds: null,
      children,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag,
      patchFlag,
      dynamicProps,
      dynamicChildren: null,
      appContext: null
    };
    if (needFullChildrenNormalization) {
      normalizeChildren(vnode, children);
      if (shapeFlag & 128) {
        type.normalize(vnode);
      }
    } else if (children) {
      vnode.shapeFlag |= isString(children) ? 8 : 16;
    }
    if (process.env.NODE_ENV !== "production" && vnode.key !== vnode.key) {
      warn2(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
      if (process.env.NODE_ENV !== "production" && !type) {
        warn2(`Invalid vnode type when creating vnode: ${type}.`);
      }
      type = Comment;
    }
    if (isVNode(type)) {
      const cloned = cloneVNode(type, props, true);
      if (children) {
        normalizeChildren(cloned, children);
      }
      if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
        if (cloned.shapeFlag & 6) {
          currentBlock[currentBlock.indexOf(type)] = cloned;
        } else {
          currentBlock.push(cloned);
        }
      }
      cloned.patchFlag |= -2;
      return cloned;
    }
    if (isClassComponent(type)) {
      type = type.__vccOpts;
    }
    if (props) {
      props = guardReactiveProps(props);
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
      }
      if (isObject(style)) {
        if (isProxy(style) && !isArray(style)) {
          style = extend({}, style);
        }
        props.style = normalizeStyle(style);
      }
    }
    const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
    if (process.env.NODE_ENV !== "production" && shapeFlag & 4 && isProxy(type)) {
      type = toRaw(type);
      warn2(`Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
    }
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
  }
  function guardReactiveProps(props) {
    if (!props)
      return null;
    return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
  }
  function cloneVNode(vnode, extraProps, mergeRef = false) {
    const { props, ref: ref3, patchFlag, children } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
      __v_isVNode: true,
      __v_skip: true,
      type: vnode.type,
      props: mergedProps,
      key: mergedProps && normalizeKey(mergedProps),
      ref: extraProps && extraProps.ref ? mergeRef && ref3 ? isArray(ref3) ? ref3.concat(normalizeRef(extraProps)) : [ref3, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref3,
      scopeId: vnode.scopeId,
      slotScopeIds: vnode.slotScopeIds,
      children: process.env.NODE_ENV !== "production" && patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
      target: vnode.target,
      targetAnchor: vnode.targetAnchor,
      staticCount: vnode.staticCount,
      shapeFlag: vnode.shapeFlag,
      patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
      dynamicProps: vnode.dynamicProps,
      dynamicChildren: vnode.dynamicChildren,
      appContext: vnode.appContext,
      dirs: vnode.dirs,
      transition: vnode.transition,
      component: vnode.component,
      suspense: vnode.suspense,
      ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
      ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
      el: vnode.el,
      anchor: vnode.anchor
    };
    return cloned;
  }
  function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (isArray(vnode.children)) {
      cloned.children = vnode.children.map(deepCloneVNode);
    }
    return cloned;
  }
  function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
  }
  function createStaticVNode(content, numberOfNodes) {
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
  }
  function createCommentVNode(text = "", asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
  }
  function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") {
      return createVNode(Comment);
    } else if (isArray(child)) {
      return createVNode(
        Fragment,
        null,
        child.slice()
      );
    } else if (typeof child === "object") {
      return cloneIfMounted(child);
    } else {
      return createVNode(Text, null, String(child));
    }
  }
  function cloneIfMounted(child) {
    return child.el === null || child.memo ? child : cloneVNode(child);
  }
  function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
      children = null;
    } else if (isArray(children)) {
      type = 16;
    } else if (typeof children === "object") {
      if (shapeFlag & (1 | 64)) {
        const slot = children.default;
        if (slot) {
          slot._c && (slot._d = false);
          normalizeChildren(vnode, slot());
          slot._c && (slot._d = true);
        }
        return;
      } else {
        type = 32;
        const slotFlag = children._;
        if (!slotFlag && !(InternalObjectKey in children)) {
          children._ctx = currentRenderingInstance;
        } else if (slotFlag === 3 && currentRenderingInstance) {
          if (currentRenderingInstance.slots._ === 1) {
            children._ = 1;
          } else {
            children._ = 2;
            vnode.patchFlag |= 1024;
          }
        }
      }
    } else if (isFunction(children)) {
      children = { default: children, _ctx: currentRenderingInstance };
      type = 32;
    } else {
      children = String(children);
      if (shapeFlag & 64) {
        type = 16;
        children = [createTextVNode(children)];
      } else {
        type = 8;
      }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
  }
  function mergeProps(...args) {
    const ret = {};
    for (let i = 0; i < args.length; i++) {
      const toMerge = args[i];
      for (const key in toMerge) {
        if (key === "class") {
          if (ret.class !== toMerge.class) {
            ret.class = normalizeClass([ret.class, toMerge.class]);
          }
        } else if (key === "style") {
          ret.style = normalizeStyle([ret.style, toMerge.style]);
        } else if (isOn(key)) {
          const existing = ret[key];
          const incoming = toMerge[key];
          if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
            ret[key] = existing ? [].concat(existing, incoming) : incoming;
          }
        } else if (key !== "") {
          ret[key] = toMerge[key];
        }
      }
    }
    return ret;
  }
  function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7, [
      vnode,
      prevVNode
    ]);
  }
  function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
      uid: uid$1++,
      vnode,
      type,
      parent,
      appContext,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new EffectScope(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: parent ? parent.provides : Object.create(appContext.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: normalizePropsOptions(type, appContext),
      emitsOptions: normalizeEmitsOptions(type, appContext),
      emit: null,
      emitted: null,
      propsDefaults: EMPTY_OBJ,
      inheritAttrs: type.inheritAttrs,
      ctx: EMPTY_OBJ,
      data: EMPTY_OBJ,
      props: EMPTY_OBJ,
      attrs: EMPTY_OBJ,
      slots: EMPTY_OBJ,
      refs: EMPTY_OBJ,
      setupState: EMPTY_OBJ,
      setupContext: null,
      suspense,
      suspenseId: suspense ? suspense.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    if (process.env.NODE_ENV !== "production") {
      instance.ctx = createDevRenderContext(instance);
    } else {
      instance.ctx = { _: instance };
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit$1.bind(null, instance);
    if (vnode.ce) {
      vnode.ce(instance);
    }
    return instance;
  }
  function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || NO;
    if (isBuiltInTag(name) || appIsNativeTag(name)) {
      warn2("Do not use built-in or reserved HTML elements as component id: " + name);
    }
  }
  function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
  }
  function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
    isInSSRComponentSetup = false;
    return setupResult;
  }
  function setupStatefulComponent(instance, isSSR) {
    var _a2;
    const Component = instance.type;
    if (process.env.NODE_ENV !== "production") {
      if (Component.name) {
        validateComponentName(Component.name, instance.appContext.config);
      }
      if (Component.components) {
        const names = Object.keys(Component.components);
        for (let i = 0; i < names.length; i++) {
          validateComponentName(names[i], instance.appContext.config);
        }
      }
      if (Component.directives) {
        const names = Object.keys(Component.directives);
        for (let i = 0; i < names.length; i++) {
          validateDirectiveName(names[i]);
        }
      }
      if (Component.compilerOptions && isRuntimeOnly()) {
        warn2(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
      }
    }
    instance.accessCache = /* @__PURE__ */ Object.create(null);
    instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    if (process.env.NODE_ENV !== "production") {
      exposePropsOnRenderContext(instance);
    }
    const { setup } = Component;
    if (setup) {
      const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
      setCurrentInstance(instance);
      pauseTracking();
      const setupResult = callWithErrorHandling(setup, instance, 0, [process.env.NODE_ENV !== "production" ? shallowReadonly(instance.props) : instance.props, setupContext]);
      resetTracking();
      unsetCurrentInstance();
      if (isPromise(setupResult)) {
        setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
        if (isSSR) {
          return setupResult.then((resolvedResult) => {
            handleSetupResult(instance, resolvedResult, isSSR);
          }).catch((e) => {
            handleError(e, instance, 0);
          });
        } else {
          instance.asyncDep = setupResult;
          if (process.env.NODE_ENV !== "production" && !instance.suspense) {
            const name = (_a2 = Component.name) !== null && _a2 !== void 0 ? _a2 : "Anonymous";
            warn2(`Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
          }
        }
      } else {
        handleSetupResult(instance, setupResult, isSSR);
      }
    } else {
      finishComponentSetup(instance, isSSR);
    }
  }
  function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction(setupResult)) {
      if (instance.type.__ssrInlineRender) {
        instance.ssrRender = setupResult;
      } else {
        instance.render = setupResult;
      }
    } else if (isObject(setupResult)) {
      if (process.env.NODE_ENV !== "production" && isVNode(setupResult)) {
        warn2(`setup() should not return VNodes directly - return a render function instead.`);
      }
      if (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) {
        instance.devtoolsRawSetupState = setupResult;
      }
      instance.setupState = proxyRefs(setupResult);
      if (process.env.NODE_ENV !== "production") {
        exposeSetupStateOnRenderContext(instance);
      }
    } else if (process.env.NODE_ENV !== "production" && setupResult !== void 0) {
      warn2(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
    }
    finishComponentSetup(instance, isSSR);
  }
  function registerRuntimeCompiler(_compile) {
    compile2 = _compile;
    installWithProxy = (i) => {
      if (i.render._rc) {
        i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
      }
    };
  }
  function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
      if (!isSSR && compile2 && !Component.render) {
        const template = Component.template;
        if (template) {
          if (process.env.NODE_ENV !== "production") {
            startMeasure(instance, `compile`);
          }
          const { isCustomElement, compilerOptions } = instance.appContext.config;
          const { delimiters, compilerOptions: componentCompilerOptions } = Component;
          const finalCompilerOptions = extend(extend({
            isCustomElement,
            delimiters
          }, compilerOptions), componentCompilerOptions);
          Component.render = compile2(template, finalCompilerOptions);
          if (process.env.NODE_ENV !== "production") {
            endMeasure(instance, `compile`);
          }
        }
      }
      instance.render = Component.render || NOOP;
      if (installWithProxy) {
        installWithProxy(instance);
      }
    }
    if (__VUE_OPTIONS_API__ && true) {
      setCurrentInstance(instance);
      pauseTracking();
      applyOptions(instance);
      resetTracking();
      unsetCurrentInstance();
    }
    if (process.env.NODE_ENV !== "production" && !Component.render && instance.render === NOOP && !isSSR) {
      if (!compile2 && Component.template) {
        warn2(`Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
      } else {
        warn2(`Component is missing template or render function.`);
      }
    }
  }
  function createAttrsProxy(instance) {
    return new Proxy(instance.attrs, process.env.NODE_ENV !== "production" ? {
      get(target, key) {
        markAttrsAccessed();
        track(instance, "get", "$attrs");
        return target[key];
      },
      set() {
        warn2(`setupContext.attrs is readonly.`);
        return false;
      },
      deleteProperty() {
        warn2(`setupContext.attrs is readonly.`);
        return false;
      }
    } : {
      get(target, key) {
        track(instance, "get", "$attrs");
        return target[key];
      }
    });
  }
  function createSetupContext(instance) {
    const expose = (exposed) => {
      if (process.env.NODE_ENV !== "production" && instance.exposed) {
        warn2(`expose() should be called only once per setup().`);
      }
      instance.exposed = exposed || {};
    };
    let attrs;
    if (process.env.NODE_ENV !== "production") {
      return Object.freeze({
        get attrs() {
          return attrs || (attrs = createAttrsProxy(instance));
        },
        get slots() {
          return shallowReadonly(instance.slots);
        },
        get emit() {
          return (event, ...args) => instance.emit(event, ...args);
        },
        expose
      });
    } else {
      return {
        get attrs() {
          return attrs || (attrs = createAttrsProxy(instance));
        },
        slots: instance.slots,
        emit: instance.emit,
        expose
      };
    }
  }
  function getExposeProxy(instance) {
    if (instance.exposed) {
      return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
        get(target, key) {
          if (key in target) {
            return target[key];
          } else if (key in publicPropertiesMap) {
            return publicPropertiesMap[key](instance);
          }
        }
      }));
    }
  }
  function getComponentName(Component, includeInferred = true) {
    return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
  }
  function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
      const match = Component.__file.match(/([^/\\]+)\.\w+$/);
      if (match) {
        name = match[1];
      }
    }
    if (!name && instance && instance.parent) {
      const inferFromRegistry = (registry) => {
        for (const key in registry) {
          if (registry[key] === Component) {
            return key;
          }
        }
      };
      name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
  }
  function isClassComponent(value) {
    return isFunction(value) && "__vccOpts" in value;
  }
  function defineProps() {
    if (process.env.NODE_ENV !== "production") {
      warnRuntimeUsage(`defineProps`);
    }
    return null;
  }
  function defineEmits() {
    if (process.env.NODE_ENV !== "production") {
      warnRuntimeUsage(`defineEmits`);
    }
    return null;
  }
  function defineExpose(exposed) {
    if (process.env.NODE_ENV !== "production") {
      warnRuntimeUsage(`defineExpose`);
    }
  }
  function withDefaults(props, defaults) {
    if (process.env.NODE_ENV !== "production") {
      warnRuntimeUsage(`withDefaults`);
    }
    return null;
  }
  function useSlots() {
    return getContext().slots;
  }
  function useAttrs() {
    return getContext().attrs;
  }
  function getContext() {
    const i = getCurrentInstance();
    if (process.env.NODE_ENV !== "production" && !i) {
      warn2(`useContext() called without active instance.`);
    }
    return i.setupContext || (i.setupContext = createSetupContext(i));
  }
  function mergeDefaults(raw, defaults) {
    const props = isArray(raw) ? raw.reduce((normalized, p2) => (normalized[p2] = {}, normalized), {}) : raw;
    for (const key in defaults) {
      const opt = props[key];
      if (opt) {
        if (isArray(opt) || isFunction(opt)) {
          props[key] = { type: opt, default: defaults[key] };
        } else {
          opt.default = defaults[key];
        }
      } else if (opt === null) {
        props[key] = { default: defaults[key] };
      } else if (process.env.NODE_ENV !== "production") {
        warn2(`props default key "${key}" has no corresponding declaration.`);
      }
    }
    return props;
  }
  function createPropsRestProxy(props, excludedKeys) {
    const ret = {};
    for (const key in props) {
      if (!excludedKeys.includes(key)) {
        Object.defineProperty(ret, key, {
          enumerable: true,
          get: () => props[key]
        });
      }
    }
    return ret;
  }
  function withAsyncContext(getAwaitable) {
    const ctx = getCurrentInstance();
    if (process.env.NODE_ENV !== "production" && !ctx) {
      warn2(`withAsyncContext called without active current instance. This is likely a bug.`);
    }
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if (isPromise(awaitable)) {
      awaitable = awaitable.catch((e) => {
        setCurrentInstance(ctx);
        throw e;
      });
    }
    return [awaitable, () => setCurrentInstance(ctx)];
  }
  function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
      if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
        if (isVNode(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        return createVNode(type, propsOrChildren);
      } else {
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l > 3) {
        children = Array.prototype.slice.call(arguments, 2);
      } else if (l === 3 && isVNode(children)) {
        children = [children];
      }
      return createVNode(type, propsOrChildren, children);
    }
  }
  function isShallow2(value) {
    return !!(value && value["__v_isShallow"]);
  }
  function initCustomFormatter() {
    if (!(process.env.NODE_ENV !== "production") || typeof window === "undefined") {
      return;
    }
    const vueStyle = { style: "color:#3ba776" };
    const numberStyle = { style: "color:#0b1bc9" };
    const stringStyle = { style: "color:#b62e24" };
    const keywordStyle = { style: "color:#9d288c" };
    const formatter = {
      header(obj) {
        if (!isObject(obj)) {
          return null;
        }
        if (obj.__isVue) {
          return ["div", vueStyle, `VueInstance`];
        } else if (isRef(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, genRefFlag(obj)],
            "<",
            formatValue(obj.value),
            `>`
          ];
        } else if (isReactive(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, isShallow2(obj) ? "ShallowReactive" : "Reactive"],
            "<",
            formatValue(obj),
            `>${isReadonly(obj) ? ` (readonly)` : ``}`
          ];
        } else if (isReadonly(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, isShallow2(obj) ? "ShallowReadonly" : "Readonly"],
            "<",
            formatValue(obj),
            ">"
          ];
        }
        return null;
      },
      hasBody(obj) {
        return obj && obj.__isVue;
      },
      body(obj) {
        if (obj && obj.__isVue) {
          return [
            "div",
            {},
            ...formatInstance(obj.$)
          ];
        }
      }
    };
    function formatInstance(instance) {
      const blocks = [];
      if (instance.type.props && instance.props) {
        blocks.push(createInstanceBlock("props", toRaw(instance.props)));
      }
      if (instance.setupState !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("setup", instance.setupState));
      }
      if (instance.data !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("data", toRaw(instance.data)));
      }
      const computed3 = extractKeys(instance, "computed");
      if (computed3) {
        blocks.push(createInstanceBlock("computed", computed3));
      }
      const injected = extractKeys(instance, "inject");
      if (injected) {
        blocks.push(createInstanceBlock("injected", injected));
      }
      blocks.push([
        "div",
        {},
        [
          "span",
          {
            style: keywordStyle.style + ";opacity:0.66"
          },
          "$ (internal): "
        ],
        ["object", { object: instance }]
      ]);
      return blocks;
    }
    function createInstanceBlock(type, target) {
      target = extend({}, target);
      if (!Object.keys(target).length) {
        return ["span", {}];
      }
      return [
        "div",
        { style: "line-height:1.25em;margin-bottom:0.6em" },
        [
          "div",
          {
            style: "color:#476582"
          },
          type
        ],
        [
          "div",
          {
            style: "padding-left:1.25em"
          },
          ...Object.keys(target).map((key) => {
            return [
              "div",
              {},
              ["span", keywordStyle, key + ": "],
              formatValue(target[key], false)
            ];
          })
        ]
      ];
    }
    function formatValue(v, asRaw = true) {
      if (typeof v === "number") {
        return ["span", numberStyle, v];
      } else if (typeof v === "string") {
        return ["span", stringStyle, JSON.stringify(v)];
      } else if (typeof v === "boolean") {
        return ["span", keywordStyle, v];
      } else if (isObject(v)) {
        return ["object", { object: asRaw ? toRaw(v) : v }];
      } else {
        return ["span", stringStyle, String(v)];
      }
    }
    function extractKeys(instance, type) {
      const Comp = instance.type;
      if (isFunction(Comp)) {
        return;
      }
      const extracted = {};
      for (const key in instance.ctx) {
        if (isKeyOfType(Comp, key, type)) {
          extracted[key] = instance.ctx[key];
        }
      }
      return extracted;
    }
    function isKeyOfType(Comp, key, type) {
      const opts = Comp[type];
      if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
        return true;
      }
      if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
        return true;
      }
      if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
        return true;
      }
    }
    function genRefFlag(v) {
      if (isShallow2(v)) {
        return `ShallowRef`;
      }
      if (v.effect) {
        return `ComputedRef`;
      }
      return `Ref`;
    }
    if (window.devtoolsFormatters) {
      window.devtoolsFormatters.push(formatter);
    } else {
      window.devtoolsFormatters = [formatter];
    }
  }
  function withMemo(memo, render2, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) {
      return cached;
    }
    const ret = render2();
    ret.memo = memo.slice();
    return cache[index] = ret;
  }
  function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) {
      return false;
    }
    for (let i = 0; i < prev.length; i++) {
      if (hasChanged(prev[i], memo[i])) {
        return false;
      }
    }
    if (isBlockTreeEnabled > 0 && currentBlock) {
      currentBlock.push(cached);
    }
    return true;
  }
  var stack, ErrorTypeStrings, isFlushing, isFlushPending, queue, flushIndex, pendingPreFlushCbs, activePreFlushCbs, preFlushIndex, pendingPostFlushCbs, activePostFlushCbs, postFlushIndex, resolvedPromise, currentFlushPromise, currentPreFlushParentJob, RECURSION_LIMIT, getId, isHmrUpdating, hmrDirtyComponents, map, devtools, buffer, devtoolsNotInstalled, devtoolsComponentAdded, devtoolsComponentUpdated, devtoolsComponentRemoved, devtoolsPerfStart, devtoolsPerfEnd, currentRenderingInstance, currentScopeId, withScopeId, accessedAttrs, getChildRoot, getFunctionalFallthrough, filterModelListeners, isElementRoot, isSuspense, SuspenseImpl, Suspense, hasWarned, INITIAL_WATCHER_VALUE, TransitionHookValidator, BaseTransitionImpl, BaseTransition, isAsyncWrapper, isKeepAlive, KeepAliveImpl, KeepAlive, createHook, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onServerPrefetch, onRenderTriggered, onRenderTracked, COMPONENTS, DIRECTIVES, NULL_DYNAMIC_COMPONENT, getPublicInstance, publicPropertiesMap, isReservedPrefix, PublicInstanceProxyHandlers, RuntimeCompiledPublicInstanceProxyHandlers, shouldCacheAccess, internalOptionMergeStrats, isSimpleType, isInternalKey, normalizeSlotValue, normalizeSlot, normalizeObjectSlots, normalizeVNodeSlots, initSlots, updateSlots, uid, hasMismatch, isSVGContainer, isComment, supported, perf, queuePostRenderEffect, isTeleport, isTeleportDisabled, isTargetSVG, resolveTarget, TeleportImpl, Teleport, Fragment, Text, Comment, Static, blockStack, currentBlock, isBlockTreeEnabled, vnodeArgsTransformer, createVNodeWithArgsTransform, InternalObjectKey, normalizeKey, normalizeRef, createVNode, emptyAppContext, uid$1, currentInstance, getCurrentInstance, setCurrentInstance, unsetCurrentInstance, isBuiltInTag, isInSSRComponentSetup, compile2, installWithProxy, isRuntimeOnly, classifyRE, classify, computed2, warnRuntimeUsage, ssrContextKey, useSSRContext, version, _ssrUtils, ssrUtils, resolveFilter, compatUtils;
  var init_runtime_core_esm_bundler = __esm({
    "../../node_modules/.pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js"() {
      init_reactivity_esm_bundler();
      init_reactivity_esm_bundler();
      init_shared_esm_bundler();
      init_shared_esm_bundler();
      stack = [];
      ErrorTypeStrings = {
        ["sp"]: "serverPrefetch hook",
        ["bc"]: "beforeCreate hook",
        ["c"]: "created hook",
        ["bm"]: "beforeMount hook",
        ["m"]: "mounted hook",
        ["bu"]: "beforeUpdate hook",
        ["u"]: "updated",
        ["bum"]: "beforeUnmount hook",
        ["um"]: "unmounted hook",
        ["a"]: "activated hook",
        ["da"]: "deactivated hook",
        ["ec"]: "errorCaptured hook",
        ["rtc"]: "renderTracked hook",
        ["rtg"]: "renderTriggered hook",
        [0]: "setup function",
        [1]: "render function",
        [2]: "watcher getter",
        [3]: "watcher callback",
        [4]: "watcher cleanup function",
        [5]: "native event handler",
        [6]: "component event handler",
        [7]: "vnode hook",
        [8]: "directive hook",
        [9]: "transition hook",
        [10]: "app errorHandler",
        [11]: "app warnHandler",
        [12]: "ref function",
        [13]: "async component loader",
        [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
      };
      isFlushing = false;
      isFlushPending = false;
      queue = [];
      flushIndex = 0;
      pendingPreFlushCbs = [];
      activePreFlushCbs = null;
      preFlushIndex = 0;
      pendingPostFlushCbs = [];
      activePostFlushCbs = null;
      postFlushIndex = 0;
      resolvedPromise = /* @__PURE__ */ Promise.resolve();
      currentFlushPromise = null;
      currentPreFlushParentJob = null;
      RECURSION_LIMIT = 100;
      getId = (job) => job.id == null ? Infinity : job.id;
      isHmrUpdating = false;
      hmrDirtyComponents = /* @__PURE__ */ new Set();
      if (process.env.NODE_ENV !== "production") {
        getGlobalThis().__VUE_HMR_RUNTIME__ = {
          createRecord: tryWrap(createRecord),
          rerender: tryWrap(rerender),
          reload: tryWrap(reload)
        };
      }
      map = /* @__PURE__ */ new Map();
      buffer = [];
      devtoolsNotInstalled = false;
      devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook("component:added");
      devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated");
      devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook("component:removed");
      devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:start");
      devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:end");
      currentRenderingInstance = null;
      currentScopeId = null;
      withScopeId = (_id) => withCtx;
      accessedAttrs = false;
      getChildRoot = (vnode) => {
        const rawChildren = vnode.children;
        const dynamicChildren = vnode.dynamicChildren;
        const childRoot = filterSingleRoot(rawChildren);
        if (!childRoot) {
          return [vnode, void 0];
        }
        const index = rawChildren.indexOf(childRoot);
        const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
        const setRoot = (updatedRoot) => {
          rawChildren[index] = updatedRoot;
          if (dynamicChildren) {
            if (dynamicIndex > -1) {
              dynamicChildren[dynamicIndex] = updatedRoot;
            } else if (updatedRoot.patchFlag > 0) {
              vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
            }
          }
        };
        return [normalizeVNode(childRoot), setRoot];
      };
      getFunctionalFallthrough = (attrs) => {
        let res;
        for (const key in attrs) {
          if (key === "class" || key === "style" || isOn(key)) {
            (res || (res = {}))[key] = attrs[key];
          }
        }
        return res;
      };
      filterModelListeners = (attrs, props) => {
        const res = {};
        for (const key in attrs) {
          if (!isModelListener(key) || !(key.slice(9) in props)) {
            res[key] = attrs[key];
          }
        }
        return res;
      };
      isElementRoot = (vnode) => {
        return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
      };
      isSuspense = (type) => type.__isSuspense;
      SuspenseImpl = {
        name: "Suspense",
        __isSuspense: true,
        process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
          if (n1 == null) {
            mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
          } else {
            patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
          }
        },
        hydrate: hydrateSuspense,
        create: createSuspenseBoundary,
        normalize: normalizeSuspenseChildren
      };
      Suspense = SuspenseImpl;
      hasWarned = false;
      INITIAL_WATCHER_VALUE = {};
      TransitionHookValidator = [Function, Array];
      BaseTransitionImpl = {
        name: `BaseTransition`,
        props: {
          mode: String,
          appear: Boolean,
          persisted: Boolean,
          onBeforeEnter: TransitionHookValidator,
          onEnter: TransitionHookValidator,
          onAfterEnter: TransitionHookValidator,
          onEnterCancelled: TransitionHookValidator,
          onBeforeLeave: TransitionHookValidator,
          onLeave: TransitionHookValidator,
          onAfterLeave: TransitionHookValidator,
          onLeaveCancelled: TransitionHookValidator,
          onBeforeAppear: TransitionHookValidator,
          onAppear: TransitionHookValidator,
          onAfterAppear: TransitionHookValidator,
          onAppearCancelled: TransitionHookValidator
        },
        setup(props, { slots }) {
          const instance = getCurrentInstance();
          const state = useTransitionState();
          let prevTransitionKey;
          return () => {
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) {
              return;
            }
            let child = children[0];
            if (children.length > 1) {
              let hasFound = false;
              for (const c of children) {
                if (c.type !== Comment) {
                  if (process.env.NODE_ENV !== "production" && hasFound) {
                    warn2("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
                    break;
                  }
                  child = c;
                  hasFound = true;
                  if (!(process.env.NODE_ENV !== "production"))
                    break;
                }
              }
            }
            const rawProps = toRaw(props);
            const { mode } = rawProps;
            if (process.env.NODE_ENV !== "production" && mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") {
              warn2(`invalid <transition> mode: ${mode}`);
            }
            if (state.isLeaving) {
              return emptyPlaceholder(child);
            }
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) {
              return emptyPlaceholder(child);
            }
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
              const key = getTransitionKey();
              if (prevTransitionKey === void 0) {
                prevTransitionKey = key;
              } else if (key !== prevTransitionKey) {
                prevTransitionKey = key;
                transitionKeyChanged = true;
              }
            }
            if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
              const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
              setTransitionHooks(oldInnerChild, leavingHooks);
              if (mode === "out-in") {
                state.isLeaving = true;
                leavingHooks.afterLeave = () => {
                  state.isLeaving = false;
                  instance.update();
                };
                return emptyPlaceholder(child);
              } else if (mode === "in-out" && innerChild.type !== Comment) {
                leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                  const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                  leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                  el._leaveCb = () => {
                    earlyRemove();
                    el._leaveCb = void 0;
                    delete enterHooks.delayedLeave;
                  };
                  enterHooks.delayedLeave = delayedLeave;
                };
              }
            }
            return child;
          };
        }
      };
      BaseTransition = BaseTransitionImpl;
      isAsyncWrapper = (i) => !!i.type.__asyncLoader;
      isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
      KeepAliveImpl = {
        name: `KeepAlive`,
        __isKeepAlive: true,
        props: {
          include: [String, RegExp, Array],
          exclude: [String, RegExp, Array],
          max: [String, Number]
        },
        setup(props, { slots }) {
          const instance = getCurrentInstance();
          const sharedContext = instance.ctx;
          if (!sharedContext.renderer) {
            return () => {
              const children = slots.default && slots.default();
              return children && children.length === 1 ? children[0] : children;
            };
          }
          const cache = /* @__PURE__ */ new Map();
          const keys = /* @__PURE__ */ new Set();
          let current = null;
          if (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) {
            instance.__v_cache = cache;
          }
          const parentSuspense = instance.suspense;
          const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
          const storageContainer = createElement("div");
          sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
            const instance2 = vnode.component;
            move(vnode, container, anchor, 0, parentSuspense);
            patch(instance2.vnode, vnode, container, anchor, instance2, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(() => {
              instance2.isDeactivated = false;
              if (instance2.a) {
                invokeArrayFns(instance2.a);
              }
              const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
              if (vnodeHook) {
                invokeVNodeHook(vnodeHook, instance2.parent, vnode);
              }
            }, parentSuspense);
            if (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) {
              devtoolsComponentAdded(instance2);
            }
          };
          sharedContext.deactivate = (vnode) => {
            const instance2 = vnode.component;
            move(vnode, storageContainer, null, 1, parentSuspense);
            queuePostRenderEffect(() => {
              if (instance2.da) {
                invokeArrayFns(instance2.da);
              }
              const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
              if (vnodeHook) {
                invokeVNodeHook(vnodeHook, instance2.parent, vnode);
              }
              instance2.isDeactivated = true;
            }, parentSuspense);
            if (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) {
              devtoolsComponentAdded(instance2);
            }
          };
          function unmount(vnode) {
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
          }
          function pruneCache(filter) {
            cache.forEach((vnode, key) => {
              const name = getComponentName(vnode.type);
              if (name && (!filter || !filter(name))) {
                pruneCacheEntry(key);
              }
            });
          }
          function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || cached.type !== current.type) {
              unmount(cached);
            } else if (current) {
              resetShapeFlag(current);
            }
            cache.delete(key);
            keys.delete(key);
          }
          watch(
            () => [props.include, props.exclude],
            ([include, exclude]) => {
              include && pruneCache((name) => matches(include, name));
              exclude && pruneCache((name) => !matches(exclude, name));
            },
            { flush: "post", deep: true }
          );
          let pendingCacheKey = null;
          const cacheSubtree = () => {
            if (pendingCacheKey != null) {
              cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }
          };
          onMounted(cacheSubtree);
          onUpdated(cacheSubtree);
          onBeforeUnmount(() => {
            cache.forEach((cached) => {
              const { subTree, suspense } = instance;
              const vnode = getInnerChild(subTree);
              if (cached.type === vnode.type) {
                resetShapeFlag(vnode);
                const da = vnode.component.da;
                da && queuePostRenderEffect(da, suspense);
                return;
              }
              unmount(cached);
            });
          });
          return () => {
            pendingCacheKey = null;
            if (!slots.default) {
              return null;
            }
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
              if (process.env.NODE_ENV !== "production") {
                warn2(`KeepAlive should contain exactly one component child.`);
              }
              current = null;
              return children;
            } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
              current = null;
              return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
            const { include, exclude, max } = props;
            if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
              current = vnode;
              return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            if (vnode.el) {
              vnode = cloneVNode(vnode);
              if (rawVNode.shapeFlag & 128) {
                rawVNode.ssContent = vnode;
              }
            }
            pendingCacheKey = key;
            if (cachedVNode) {
              vnode.el = cachedVNode.el;
              vnode.component = cachedVNode.component;
              if (vnode.transition) {
                setTransitionHooks(vnode, vnode.transition);
              }
              vnode.shapeFlag |= 512;
              keys.delete(key);
              keys.add(key);
            } else {
              keys.add(key);
              if (max && keys.size > parseInt(max, 10)) {
                pruneCacheEntry(keys.values().next().value);
              }
            }
            vnode.shapeFlag |= 256;
            current = vnode;
            return isSuspense(rawVNode.type) ? rawVNode : vnode;
          };
        }
      };
      KeepAlive = KeepAliveImpl;
      createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
      onBeforeMount = createHook("bm");
      onMounted = createHook("m");
      onBeforeUpdate = createHook("bu");
      onUpdated = createHook("u");
      onBeforeUnmount = createHook("bum");
      onUnmounted = createHook("um");
      onServerPrefetch = createHook("sp");
      onRenderTriggered = createHook("rtg");
      onRenderTracked = createHook("rtc");
      COMPONENTS = "components";
      DIRECTIVES = "directives";
      NULL_DYNAMIC_COMPONENT = Symbol();
      getPublicInstance = (i) => {
        if (!i)
          return null;
        if (isStatefulComponent(i))
          return getExposeProxy(i) || i.proxy;
        return getPublicInstance(i.parent);
      };
      publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
        $: (i) => i,
        $el: (i) => i.vnode.el,
        $data: (i) => i.data,
        $props: (i) => process.env.NODE_ENV !== "production" ? shallowReadonly(i.props) : i.props,
        $attrs: (i) => process.env.NODE_ENV !== "production" ? shallowReadonly(i.attrs) : i.attrs,
        $slots: (i) => process.env.NODE_ENV !== "production" ? shallowReadonly(i.slots) : i.slots,
        $refs: (i) => process.env.NODE_ENV !== "production" ? shallowReadonly(i.refs) : i.refs,
        $parent: (i) => getPublicInstance(i.parent),
        $root: (i) => getPublicInstance(i.root),
        $emit: (i) => i.emit,
        $options: (i) => __VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type,
        $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
        $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
        $watch: (i) => __VUE_OPTIONS_API__ ? instanceWatch.bind(i) : NOOP
      });
      isReservedPrefix = (key) => key === "_" || key === "$";
      PublicInstanceProxyHandlers = {
        get({ _: instance }, key) {
          const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
          if (process.env.NODE_ENV !== "production" && key === "__isVue") {
            return true;
          }
          if (process.env.NODE_ENV !== "production" && setupState !== EMPTY_OBJ && setupState.__isScriptSetup && hasOwn(setupState, key)) {
            return setupState[key];
          }
          let normalizedProps;
          if (key[0] !== "$") {
            const n = accessCache[key];
            if (n !== void 0) {
              switch (n) {
                case 1:
                  return setupState[key];
                case 2:
                  return data[key];
                case 4:
                  return ctx[key];
                case 3:
                  return props[key];
              }
            } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
              accessCache[key] = 1;
              return setupState[key];
            } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
              accessCache[key] = 2;
              return data[key];
            } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
              accessCache[key] = 3;
              return props[key];
            } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
              accessCache[key] = 4;
              return ctx[key];
            } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) {
              accessCache[key] = 0;
            }
          }
          const publicGetter = publicPropertiesMap[key];
          let cssModule, globalProperties;
          if (publicGetter) {
            if (key === "$attrs") {
              track(instance, "get", key);
              process.env.NODE_ENV !== "production" && markAttrsAccessed();
            }
            return publicGetter(instance);
          } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
            return cssModule;
          } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
            accessCache[key] = 4;
            return ctx[key];
          } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
            {
              return globalProperties[key];
            }
          } else if (process.env.NODE_ENV !== "production" && currentRenderingInstance && (!isString(key) || key.indexOf("__v") !== 0)) {
            if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
              warn2(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
            } else if (instance === currentRenderingInstance) {
              warn2(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
            }
          }
        },
        set({ _: instance }, key, value) {
          const { data, setupState, ctx } = instance;
          if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
            setupState[key] = value;
            return true;
          } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
            data[key] = value;
            return true;
          } else if (hasOwn(instance.props, key)) {
            process.env.NODE_ENV !== "production" && warn2(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
            return false;
          }
          if (key[0] === "$" && key.slice(1) in instance) {
            process.env.NODE_ENV !== "production" && warn2(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`, instance);
            return false;
          } else {
            if (process.env.NODE_ENV !== "production" && key in instance.appContext.config.globalProperties) {
              Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                value
              });
            } else {
              ctx[key] = value;
            }
          }
          return true;
        },
        has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
          let normalizedProps;
          return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
        },
        defineProperty(target, key, descriptor) {
          if (descriptor.get != null) {
            target._.accessCache[key] = 0;
          } else if (hasOwn(descriptor, "value")) {
            this.set(target, key, descriptor.value, null);
          }
          return Reflect.defineProperty(target, key, descriptor);
        }
      };
      if (process.env.NODE_ENV !== "production" && true) {
        PublicInstanceProxyHandlers.ownKeys = (target) => {
          warn2(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
          return Reflect.ownKeys(target);
        };
      }
      RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ extend({}, PublicInstanceProxyHandlers, {
        get(target, key) {
          if (key === Symbol.unscopables) {
            return;
          }
          return PublicInstanceProxyHandlers.get(target, key, target);
        },
        has(_, key) {
          const has2 = key[0] !== "_" && !isGloballyWhitelisted(key);
          if (process.env.NODE_ENV !== "production" && !has2 && PublicInstanceProxyHandlers.has(_, key)) {
            warn2(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
          }
          return has2;
        }
      });
      shouldCacheAccess = true;
      internalOptionMergeStrats = {
        data: mergeDataFn,
        props: mergeObjectOptions,
        emits: mergeObjectOptions,
        methods: mergeObjectOptions,
        computed: mergeObjectOptions,
        beforeCreate: mergeAsArray2,
        created: mergeAsArray2,
        beforeMount: mergeAsArray2,
        mounted: mergeAsArray2,
        beforeUpdate: mergeAsArray2,
        updated: mergeAsArray2,
        beforeDestroy: mergeAsArray2,
        beforeUnmount: mergeAsArray2,
        destroyed: mergeAsArray2,
        unmounted: mergeAsArray2,
        activated: mergeAsArray2,
        deactivated: mergeAsArray2,
        errorCaptured: mergeAsArray2,
        serverPrefetch: mergeAsArray2,
        components: mergeObjectOptions,
        directives: mergeObjectOptions,
        watch: mergeWatchOptions,
        provide: mergeDataFn,
        inject: mergeInject
      };
      isSimpleType = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol,BigInt");
      isInternalKey = (key) => key[0] === "_" || key === "$stable";
      normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
      normalizeSlot = (key, rawSlot, ctx) => {
        if (rawSlot._n) {
          return rawSlot;
        }
        const normalized = withCtx((...args) => {
          if (process.env.NODE_ENV !== "production" && currentInstance) {
            warn2(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
          }
          return normalizeSlotValue(rawSlot(...args));
        }, ctx);
        normalized._c = false;
        return normalized;
      };
      normalizeObjectSlots = (rawSlots, slots, instance) => {
        const ctx = rawSlots._ctx;
        for (const key in rawSlots) {
          if (isInternalKey(key))
            continue;
          const value = rawSlots[key];
          if (isFunction(value)) {
            slots[key] = normalizeSlot(key, value, ctx);
          } else if (value != null) {
            if (process.env.NODE_ENV !== "production" && true) {
              warn2(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
            }
            const normalized = normalizeSlotValue(value);
            slots[key] = () => normalized;
          }
        }
      };
      normalizeVNodeSlots = (instance, children) => {
        if (process.env.NODE_ENV !== "production" && !isKeepAlive(instance.vnode) && true) {
          warn2(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
        }
        const normalized = normalizeSlotValue(children);
        instance.slots.default = () => normalized;
      };
      initSlots = (instance, children) => {
        if (instance.vnode.shapeFlag & 32) {
          const type = children._;
          if (type) {
            instance.slots = toRaw(children);
            def(children, "_", type);
          } else {
            normalizeObjectSlots(children, instance.slots = {});
          }
        } else {
          instance.slots = {};
          if (children) {
            normalizeVNodeSlots(instance, children);
          }
        }
        def(instance.slots, InternalObjectKey, 1);
      };
      updateSlots = (instance, children, optimized) => {
        const { vnode, slots } = instance;
        let needDeletionCheck = true;
        let deletionComparisonTarget = EMPTY_OBJ;
        if (vnode.shapeFlag & 32) {
          const type = children._;
          if (type) {
            if (process.env.NODE_ENV !== "production" && isHmrUpdating) {
              extend(slots, children);
            } else if (optimized && type === 1) {
              needDeletionCheck = false;
            } else {
              extend(slots, children);
              if (!optimized && type === 1) {
                delete slots._;
              }
            }
          } else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
          }
          deletionComparisonTarget = children;
        } else if (children) {
          normalizeVNodeSlots(instance, children);
          deletionComparisonTarget = { default: 1 };
        }
        if (needDeletionCheck) {
          for (const key in slots) {
            if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
              delete slots[key];
            }
          }
        }
      };
      uid = 0;
      hasMismatch = false;
      isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
      isComment = (node) => node.nodeType === 8;
      queuePostRenderEffect = queueEffectWithSuspense;
      isTeleport = (type) => type.__isTeleport;
      isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
      isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
      resolveTarget = (props, select) => {
        const targetSelector = props && props.to;
        if (isString(targetSelector)) {
          if (!select) {
            process.env.NODE_ENV !== "production" && warn2(`Current renderer does not support string target for Teleports. (missing querySelector renderer option)`);
            return null;
          } else {
            const target = select(targetSelector);
            if (!target) {
              process.env.NODE_ENV !== "production" && warn2(`Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`);
            }
            return target;
          }
        } else {
          if (process.env.NODE_ENV !== "production" && !targetSelector && !isTeleportDisabled(props)) {
            warn2(`Invalid Teleport target: ${targetSelector}`);
          }
          return targetSelector;
        }
      };
      TeleportImpl = {
        __isTeleport: true,
        process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
          const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
          const disabled = isTeleportDisabled(n2.props);
          let { shapeFlag, children, dynamicChildren } = n2;
          if (process.env.NODE_ENV !== "production" && isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
          }
          if (n1 == null) {
            const placeholder = n2.el = process.env.NODE_ENV !== "production" ? createComment("teleport start") : createText("");
            const mainAnchor = n2.anchor = process.env.NODE_ENV !== "production" ? createComment("teleport end") : createText("");
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = n2.target = resolveTarget(n2.props, querySelector);
            const targetAnchor = n2.targetAnchor = createText("");
            if (target) {
              insert(targetAnchor, target);
              isSVG = isSVG || isTargetSVG(target);
            } else if (process.env.NODE_ENV !== "production" && !disabled) {
              warn2("Invalid Teleport target on mount:", target, `(${typeof target})`);
            }
            const mount = (container2, anchor2) => {
              if (shapeFlag & 16) {
                mountChildren(children, container2, anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              }
            };
            if (disabled) {
              mount(container, mainAnchor);
            } else if (target) {
              mount(target, targetAnchor);
            }
          } else {
            n2.el = n1.el;
            const mainAnchor = n2.anchor = n1.anchor;
            const target = n2.target = n1.target;
            const targetAnchor = n2.targetAnchor = n1.targetAnchor;
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (dynamicChildren) {
              patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
              traverseStaticChildren(n1, n2, true);
            } else if (!optimized) {
              patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
            }
            if (disabled) {
              if (!wasDisabled) {
                moveTeleport(n2, container, mainAnchor, internals, 1);
              }
            } else {
              if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
                if (nextTarget) {
                  moveTeleport(n2, nextTarget, null, internals, 0);
                } else if (process.env.NODE_ENV !== "production") {
                  warn2("Invalid Teleport target on update:", target, `(${typeof target})`);
                }
              } else if (wasDisabled) {
                moveTeleport(n2, target, targetAnchor, internals, 1);
              }
            }
          }
        },
        remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
          const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
          if (target) {
            hostRemove(targetAnchor);
          }
          if (doRemove || !isTeleportDisabled(props)) {
            hostRemove(anchor);
            if (shapeFlag & 16) {
              for (let i = 0; i < children.length; i++) {
                const child = children[i];
                unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
              }
            }
          }
        },
        move: moveTeleport,
        hydrate: hydrateTeleport
      };
      Teleport = TeleportImpl;
      Fragment = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0);
      Text = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0);
      Comment = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0);
      Static = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0);
      blockStack = [];
      currentBlock = null;
      isBlockTreeEnabled = 1;
      createVNodeWithArgsTransform = (...args) => {
        return _createVNode(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
      };
      InternalObjectKey = `__vInternal`;
      normalizeKey = ({ key }) => key != null ? key : null;
      normalizeRef = ({ ref: ref3, ref_key, ref_for }) => {
        return ref3 != null ? isString(ref3) || isRef(ref3) || isFunction(ref3) ? { i: currentRenderingInstance, r: ref3, k: ref_key, f: !!ref_for } : ref3 : null;
      };
      createVNode = process.env.NODE_ENV !== "production" ? createVNodeWithArgsTransform : _createVNode;
      emptyAppContext = createAppContext();
      uid$1 = 0;
      currentInstance = null;
      getCurrentInstance = () => currentInstance || currentRenderingInstance;
      setCurrentInstance = (instance) => {
        currentInstance = instance;
        instance.scope.on();
      };
      unsetCurrentInstance = () => {
        currentInstance && currentInstance.scope.off();
        currentInstance = null;
      };
      isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
      isInSSRComponentSetup = false;
      isRuntimeOnly = () => !compile2;
      classifyRE = /(?:^|[-_])(\w)/g;
      classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
      computed2 = (getterOrOptions, debugOptions) => {
        return computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
      };
      warnRuntimeUsage = (method) => warn2(`${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
      ssrContextKey = Symbol(process.env.NODE_ENV !== "production" ? `ssrContext` : ``);
      useSSRContext = () => {
        {
          const ctx = inject(ssrContextKey);
          if (!ctx) {
            warn2(`Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`);
          }
          return ctx;
        }
      };
      version = "3.2.37";
      _ssrUtils = {
        createComponentInstance,
        setupComponent,
        renderComponentRoot,
        setCurrentRenderingInstance,
        isVNode,
        normalizeVNode
      };
      ssrUtils = _ssrUtils;
      resolveFilter = null;
      compatUtils = null;
    }
  });

  // ../../node_modules/.pnpm/@vue+runtime-dom@3.2.37/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
  var runtime_dom_esm_bundler_exports = {};
  __export(runtime_dom_esm_bundler_exports, {
    BaseTransition: () => BaseTransition,
    Comment: () => Comment,
    EffectScope: () => EffectScope,
    Fragment: () => Fragment,
    KeepAlive: () => KeepAlive,
    ReactiveEffect: () => ReactiveEffect,
    Static: () => Static,
    Suspense: () => Suspense,
    Teleport: () => Teleport,
    Text: () => Text,
    Transition: () => Transition,
    TransitionGroup: () => TransitionGroup,
    VueElement: () => VueElement,
    callWithAsyncErrorHandling: () => callWithAsyncErrorHandling,
    callWithErrorHandling: () => callWithErrorHandling,
    camelize: () => camelize,
    capitalize: () => capitalize,
    cloneVNode: () => cloneVNode,
    compatUtils: () => compatUtils,
    computed: () => computed2,
    createApp: () => createApp,
    createBlock: () => createBlock,
    createCommentVNode: () => createCommentVNode,
    createElementBlock: () => createElementBlock,
    createElementVNode: () => createBaseVNode,
    createHydrationRenderer: () => createHydrationRenderer,
    createPropsRestProxy: () => createPropsRestProxy,
    createRenderer: () => createRenderer,
    createSSRApp: () => createSSRApp,
    createSlots: () => createSlots,
    createStaticVNode: () => createStaticVNode,
    createTextVNode: () => createTextVNode,
    createVNode: () => createVNode,
    customRef: () => customRef,
    defineAsyncComponent: () => defineAsyncComponent,
    defineComponent: () => defineComponent,
    defineCustomElement: () => defineCustomElement,
    defineEmits: () => defineEmits,
    defineExpose: () => defineExpose,
    defineProps: () => defineProps,
    defineSSRCustomElement: () => defineSSRCustomElement,
    devtools: () => devtools,
    effect: () => effect,
    effectScope: () => effectScope,
    getCurrentInstance: () => getCurrentInstance,
    getCurrentScope: () => getCurrentScope,
    getTransitionRawChildren: () => getTransitionRawChildren,
    guardReactiveProps: () => guardReactiveProps,
    h: () => h,
    handleError: () => handleError,
    hydrate: () => hydrate,
    initCustomFormatter: () => initCustomFormatter,
    initDirectivesForSSR: () => initDirectivesForSSR,
    inject: () => inject,
    isMemoSame: () => isMemoSame,
    isProxy: () => isProxy,
    isReactive: () => isReactive,
    isReadonly: () => isReadonly,
    isRef: () => isRef,
    isRuntimeOnly: () => isRuntimeOnly,
    isShallow: () => isShallow,
    isVNode: () => isVNode,
    markRaw: () => markRaw,
    mergeDefaults: () => mergeDefaults,
    mergeProps: () => mergeProps,
    nextTick: () => nextTick,
    normalizeClass: () => normalizeClass,
    normalizeProps: () => normalizeProps,
    normalizeStyle: () => normalizeStyle,
    onActivated: () => onActivated,
    onBeforeMount: () => onBeforeMount,
    onBeforeUnmount: () => onBeforeUnmount,
    onBeforeUpdate: () => onBeforeUpdate,
    onDeactivated: () => onDeactivated,
    onErrorCaptured: () => onErrorCaptured,
    onMounted: () => onMounted,
    onRenderTracked: () => onRenderTracked,
    onRenderTriggered: () => onRenderTriggered,
    onScopeDispose: () => onScopeDispose,
    onServerPrefetch: () => onServerPrefetch,
    onUnmounted: () => onUnmounted,
    onUpdated: () => onUpdated,
    openBlock: () => openBlock,
    popScopeId: () => popScopeId,
    provide: () => provide,
    proxyRefs: () => proxyRefs,
    pushScopeId: () => pushScopeId,
    queuePostFlushCb: () => queuePostFlushCb,
    reactive: () => reactive,
    readonly: () => readonly,
    ref: () => ref,
    registerRuntimeCompiler: () => registerRuntimeCompiler,
    render: () => render,
    renderList: () => renderList,
    renderSlot: () => renderSlot,
    resolveComponent: () => resolveComponent,
    resolveDirective: () => resolveDirective,
    resolveDynamicComponent: () => resolveDynamicComponent,
    resolveFilter: () => resolveFilter,
    resolveTransitionHooks: () => resolveTransitionHooks,
    setBlockTracking: () => setBlockTracking,
    setDevtoolsHook: () => setDevtoolsHook,
    setTransitionHooks: () => setTransitionHooks,
    shallowReactive: () => shallowReactive,
    shallowReadonly: () => shallowReadonly,
    shallowRef: () => shallowRef,
    ssrContextKey: () => ssrContextKey,
    ssrUtils: () => ssrUtils,
    stop: () => stop,
    toDisplayString: () => toDisplayString,
    toHandlerKey: () => toHandlerKey,
    toHandlers: () => toHandlers,
    toRaw: () => toRaw,
    toRef: () => toRef,
    toRefs: () => toRefs,
    transformVNodeArgs: () => transformVNodeArgs,
    triggerRef: () => triggerRef,
    unref: () => unref,
    useAttrs: () => useAttrs,
    useCssModule: () => useCssModule,
    useCssVars: () => useCssVars,
    useSSRContext: () => useSSRContext,
    useSlots: () => useSlots,
    useTransitionState: () => useTransitionState,
    vModelCheckbox: () => vModelCheckbox,
    vModelDynamic: () => vModelDynamic,
    vModelRadio: () => vModelRadio,
    vModelSelect: () => vModelSelect,
    vModelText: () => vModelText,
    vShow: () => vShow,
    version: () => version,
    warn: () => warn2,
    watch: () => watch,
    watchEffect: () => watchEffect,
    watchPostEffect: () => watchPostEffect,
    watchSyncEffect: () => watchSyncEffect,
    withAsyncContext: () => withAsyncContext,
    withCtx: () => withCtx,
    withDefaults: () => withDefaults,
    withDirectives: () => withDirectives,
    withKeys: () => withKeys,
    withMemo: () => withMemo,
    withModifiers: () => withModifiers,
    withScopeId: () => withScopeId
  });
  function patchClass(el, value, isSVG) {
    const transitionClasses = el._vtc;
    if (transitionClasses) {
      value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
    }
    if (value == null) {
      el.removeAttribute("class");
    } else if (isSVG) {
      el.setAttribute("class", value);
    } else {
      el.className = value;
    }
  }
  function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = isString(next);
    if (next && !isCssString) {
      for (const key in next) {
        setStyle(style, key, next[key]);
      }
      if (prev && !isString(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    } else {
      const currentDisplay = style.display;
      if (isCssString) {
        if (prev !== next) {
          style.cssText = next;
        }
      } else if (prev) {
        el.removeAttribute("style");
      }
      if ("_vod" in el) {
        style.display = currentDisplay;
      }
    }
  }
  function setStyle(style, name, val) {
    if (isArray(val)) {
      val.forEach((v) => setStyle(style, name, v));
    } else {
      if (val == null)
        val = "";
      if (name.startsWith("--")) {
        style.setProperty(name, val);
      } else {
        const prefixed = autoPrefix(style, name);
        if (importantRE.test(val)) {
          style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
        } else {
          style[prefixed] = val;
        }
      }
    }
  }
  function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
      return cached;
    }
    let name = camelize(rawName);
    if (name !== "filter" && name in style) {
      return prefixCache[rawName] = name;
    }
    name = capitalize(name);
    for (let i = 0; i < prefixes.length; i++) {
      const prefixed = prefixes[i] + name;
      if (prefixed in style) {
        return prefixCache[rawName] = prefixed;
      }
    }
    return rawName;
  }
  function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith("xlink:")) {
      if (value == null) {
        el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      const isBoolean2 = isSpecialBooleanAttr(key);
      if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, isBoolean2 ? "" : value);
      }
    }
  }
  function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === "innerHTML" || key === "textContent") {
      if (prevChildren) {
        unmountChildren(prevChildren, parentComponent, parentSuspense);
      }
      el[key] = value == null ? "" : value;
      return;
    }
    if (key === "value" && el.tagName !== "PROGRESS" && !el.tagName.includes("-")) {
      el._value = value;
      const newValue = value == null ? "" : value;
      if (el.value !== newValue || el.tagName === "OPTION") {
        el.value = newValue;
      }
      if (value == null) {
        el.removeAttribute(key);
      }
      return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
      const type = typeof el[key];
      if (type === "boolean") {
        value = includeBooleanAttr(value);
      } else if (value == null && type === "string") {
        value = "";
        needRemove = true;
      } else if (type === "number") {
        value = 0;
        needRemove = true;
      }
    }
    try {
      el[key] = value;
    } catch (e) {
      if (process.env.NODE_ENV !== "production") {
        warn2(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: value ${value} is invalid.`, e);
      }
    }
    needRemove && el.removeAttribute(key);
  }
  function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
  }
  function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
  }
  function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
      existingInvoker.value = nextValue;
    } else {
      const [name, options] = parseName(rawName);
      if (nextValue) {
        const invoker = invokers[rawName] = createInvoker(nextValue, instance);
        addEventListener(el, name, invoker, options);
      } else if (existingInvoker) {
        removeEventListener(el, name, existingInvoker, options);
        invokers[rawName] = void 0;
      }
    }
  }
  function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
      options = {};
      let m;
      while (m = name.match(optionsModifierRE)) {
        name = name.slice(0, name.length - m[0].length);
        options[m[0].toLowerCase()] = true;
      }
    }
    return [hyphenate(name.slice(2)), options];
  }
  function createInvoker(initialValue, instance) {
    const invoker = (e) => {
      const timeStamp = e.timeStamp || _getNow();
      if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
        callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
      }
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
  }
  function patchStopImmediatePropagation(e, value) {
    if (isArray(value)) {
      const originalStop = e.stopImmediatePropagation;
      e.stopImmediatePropagation = () => {
        originalStop.call(e);
        e._stopped = true;
      };
      return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
    } else {
      return value;
    }
  }
  function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
      if (key === "innerHTML" || key === "textContent") {
        return true;
      }
      if (key in el && nativeOnRE.test(key) && isFunction(value)) {
        return true;
      }
      return false;
    }
    if (key === "spellcheck" || key === "draggable" || key === "translate") {
      return false;
    }
    if (key === "form") {
      return false;
    }
    if (key === "list" && el.tagName === "INPUT") {
      return false;
    }
    if (key === "type" && el.tagName === "TEXTAREA") {
      return false;
    }
    if (nativeOnRE.test(key) && isString(value)) {
      return false;
    }
    return key in el;
  }
  function defineCustomElement(options, hydrate2) {
    const Comp = defineComponent(options);
    class VueCustomElement extends VueElement {
      constructor(initialProps) {
        super(Comp, initialProps, hydrate2);
      }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
  }
  function useCssModule(name = "$style") {
    {
      const instance = getCurrentInstance();
      if (!instance) {
        process.env.NODE_ENV !== "production" && warn2(`useCssModule must be called inside setup()`);
        return EMPTY_OBJ;
      }
      const modules = instance.type.__cssModules;
      if (!modules) {
        process.env.NODE_ENV !== "production" && warn2(`Current instance does not have CSS modules injected.`);
        return EMPTY_OBJ;
      }
      const mod = modules[name];
      if (!mod) {
        process.env.NODE_ENV !== "production" && warn2(`Current instance does not have CSS module named "${name}".`);
        return EMPTY_OBJ;
      }
      return mod;
    }
  }
  function useCssVars(getter) {
    const instance = getCurrentInstance();
    if (!instance) {
      process.env.NODE_ENV !== "production" && warn2(`useCssVars is called without current active component instance.`);
      return;
    }
    const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
    watchPostEffect(setVars);
    onMounted(() => {
      const ob = new MutationObserver(setVars);
      ob.observe(instance.subTree.el.parentNode, { childList: true });
      onUnmounted(() => ob.disconnect());
    });
  }
  function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128) {
      const suspense = vnode.suspense;
      vnode = suspense.activeBranch;
      if (suspense.pendingBranch && !suspense.isHydrating) {
        suspense.effects.push(() => {
          setVarsOnVNode(suspense.activeBranch, vars);
        });
      }
    }
    while (vnode.component) {
      vnode = vnode.component.subTree;
    }
    if (vnode.shapeFlag & 1 && vnode.el) {
      setVarsOnNode(vnode.el, vars);
    } else if (vnode.type === Fragment) {
      vnode.children.forEach((c) => setVarsOnVNode(c, vars));
    } else if (vnode.type === Static) {
      let { el, anchor } = vnode;
      while (el) {
        setVarsOnNode(el, vars);
        if (el === anchor)
          break;
        el = el.nextSibling;
      }
    }
  }
  function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
      const style = el.style;
      for (const key in vars) {
        style.setProperty(`--${key}`, vars[key]);
      }
    }
  }
  function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for (const key in rawProps) {
      if (!(key in DOMTransitionPropsValidators)) {
        baseProps[key] = rawProps[key];
      }
    }
    if (rawProps.css === false) {
      return baseProps;
    }
    const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done) => {
      removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
      removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
      done && done();
    };
    const finishLeave = (el, done) => {
      el._isLeaving = false;
      removeTransitionClass(el, leaveFromClass);
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
      done && done();
    };
    const makeEnterHook = (isAppear) => {
      return (el, done) => {
        const hook = isAppear ? onAppear : onEnter;
        const resolve2 = () => finishEnter(el, isAppear, done);
        callHook2(hook, [el, resolve2]);
        nextFrame(() => {
          removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
          addTransitionClass(el, isAppear ? appearToClass : enterToClass);
          if (!hasExplicitCallback(hook)) {
            whenTransitionEnds(el, type, enterDuration, resolve2);
          }
        });
      };
    };
    return extend(baseProps, {
      onBeforeEnter(el) {
        callHook2(onBeforeEnter, [el]);
        addTransitionClass(el, enterFromClass);
        addTransitionClass(el, enterActiveClass);
      },
      onBeforeAppear(el) {
        callHook2(onBeforeAppear, [el]);
        addTransitionClass(el, appearFromClass);
        addTransitionClass(el, appearActiveClass);
      },
      onEnter: makeEnterHook(false),
      onAppear: makeEnterHook(true),
      onLeave(el, done) {
        el._isLeaving = true;
        const resolve2 = () => finishLeave(el, done);
        addTransitionClass(el, leaveFromClass);
        forceReflow();
        addTransitionClass(el, leaveActiveClass);
        nextFrame(() => {
          if (!el._isLeaving) {
            return;
          }
          removeTransitionClass(el, leaveFromClass);
          addTransitionClass(el, leaveToClass);
          if (!hasExplicitCallback(onLeave)) {
            whenTransitionEnds(el, type, leaveDuration, resolve2);
          }
        });
        callHook2(onLeave, [el, resolve2]);
      },
      onEnterCancelled(el) {
        finishEnter(el, false);
        callHook2(onEnterCancelled, [el]);
      },
      onAppearCancelled(el) {
        finishEnter(el, true);
        callHook2(onAppearCancelled, [el]);
      },
      onLeaveCancelled(el) {
        finishLeave(el);
        callHook2(onLeaveCancelled, [el]);
      }
    });
  }
  function normalizeDuration(duration) {
    if (duration == null) {
      return null;
    } else if (isObject(duration)) {
      return [NumberOf(duration.enter), NumberOf(duration.leave)];
    } else {
      const n = NumberOf(duration);
      return [n, n];
    }
  }
  function NumberOf(val) {
    const res = toNumber(val);
    if (process.env.NODE_ENV !== "production")
      validateDuration(res);
    return res;
  }
  function validateDuration(val) {
    if (typeof val !== "number") {
      warn2(`<transition> explicit duration is not a valid number - got ${JSON.stringify(val)}.`);
    } else if (isNaN(val)) {
      warn2(`<transition> explicit duration is NaN - the duration expression might be incorrect.`);
    }
  }
  function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
    (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
  }
  function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
    const { _vtc } = el;
    if (_vtc) {
      _vtc.delete(cls);
      if (!_vtc.size) {
        el._vtc = void 0;
      }
    }
  }
  function nextFrame(cb) {
    requestAnimationFrame(() => {
      requestAnimationFrame(cb);
    });
  }
  function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
    const id = el._endId = ++endId;
    const resolveIfNotStale = () => {
      if (id === el._endId) {
        resolve2();
      }
    };
    if (explicitTimeout) {
      return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
      return resolve2();
    }
    const endEvent = type + "end";
    let ended = 0;
    const end = () => {
      el.removeEventListener(endEvent, onEnd);
      resolveIfNotStale();
    };
    const onEnd = (e) => {
      if (e.target === el && ++ended >= propCount) {
        end();
      }
    };
    setTimeout(() => {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
  }
  function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    const getStyleProperties = (key) => (styles[key] || "").split(", ");
    const transitionDelays = getStyleProperties(TRANSITION2 + "Delay");
    const transitionDurations = getStyleProperties(TRANSITION2 + "Duration");
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + "Delay");
    const animationDurations = getStyleProperties(ANIMATION + "Duration");
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    if (expectedType === TRANSITION2) {
      if (transitionTimeout > 0) {
        type = TRANSITION2;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION2 : ANIMATION : null;
      propCount = type ? type === TRANSITION2 ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION2 && /\b(transform|all)(,|$)/.test(styles[TRANSITION2 + "Property"]);
    return {
      type,
      timeout,
      propCount,
      hasTransform
    };
  }
  function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
  }
  function toMs(s) {
    return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function forceReflow() {
    return document.body.offsetHeight;
  }
  function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) {
      el._moveCb();
    }
    if (el._enterCb) {
      el._enterCb();
    }
  }
  function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
  }
  function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
      const s = c.el.style;
      s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
      s.transitionDuration = "0s";
      return c;
    }
  }
  function hasCSSTransform(el, root, moveClass) {
    const clone = el.cloneNode();
    if (el._vtc) {
      el._vtc.forEach((cls) => {
        cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
      });
    }
    moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
    clone.style.display = "none";
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
  }
  function onCompositionStart(e) {
    e.target.composing = true;
  }
  function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
      target.composing = false;
      target.dispatchEvent(new Event("input"));
    }
  }
  function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if (isArray(value)) {
      el.checked = looseIndexOf(value, vnode.props.value) > -1;
    } else if (isSet(value)) {
      el.checked = value.has(vnode.props.value);
    } else if (value !== oldValue) {
      el.checked = looseEqual(value, getCheckboxValue(el, true));
    }
  }
  function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !isArray(value) && !isSet(value)) {
      process.env.NODE_ENV !== "production" && warn2(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
      return;
    }
    for (let i = 0, l = el.options.length; i < l; i++) {
      const option = el.options[i];
      const optionValue = getValue(option);
      if (isMultiple) {
        if (isArray(value)) {
          option.selected = looseIndexOf(value, optionValue) > -1;
        } else {
          option.selected = value.has(optionValue);
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i)
            el.selectedIndex = i;
          return;
        }
      }
    }
    if (!isMultiple && el.selectedIndex !== -1) {
      el.selectedIndex = -1;
    }
  }
  function getValue(el) {
    return "_value" in el ? el._value : el.value;
  }
  function getCheckboxValue(el, checked) {
    const key = checked ? "_trueValue" : "_falseValue";
    return key in el ? el[key] : checked;
  }
  function resolveDynamicModel(tagName, type) {
    switch (tagName) {
      case "SELECT":
        return vModelSelect;
      case "TEXTAREA":
        return vModelText;
      default:
        switch (type) {
          case "checkbox":
            return vModelCheckbox;
          case "radio":
            return vModelRadio;
          default:
            return vModelText;
        }
    }
  }
  function callModelHook(el, binding, vnode, prevVNode, hook) {
    const modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
  }
  function initVModelForSSR() {
    vModelText.getSSRProps = ({ value }) => ({ value });
    vModelRadio.getSSRProps = ({ value }, vnode) => {
      if (vnode.props && looseEqual(vnode.props.value, value)) {
        return { checked: true };
      }
    };
    vModelCheckbox.getSSRProps = ({ value }, vnode) => {
      if (isArray(value)) {
        if (vnode.props && looseIndexOf(value, vnode.props.value) > -1) {
          return { checked: true };
        }
      } else if (isSet(value)) {
        if (vnode.props && value.has(vnode.props.value)) {
          return { checked: true };
        }
      } else if (value) {
        return { checked: true };
      }
    };
    vModelDynamic.getSSRProps = (binding, vnode) => {
      if (typeof vnode.type !== "string") {
        return;
      }
      const modelToUse = resolveDynamicModel(
        vnode.type.toUpperCase(),
        vnode.props && vnode.props.type
      );
      if (modelToUse.getSSRProps) {
        return modelToUse.getSSRProps(binding, vnode);
      }
    };
  }
  function setDisplay(el, value) {
    el.style.display = value ? el._vod : "none";
  }
  function initVShowForSSR() {
    vShow.getSSRProps = ({ value }) => {
      if (!value) {
        return { style: { display: "none" } };
      }
    };
  }
  function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions));
  }
  function ensureHydrationRenderer() {
    renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
    enabledHydration = true;
    return renderer;
  }
  function injectNativeTagCheck(app) {
    Object.defineProperty(app.config, "isNativeTag", {
      value: (tag) => isHTMLTag(tag) || isSVGTag(tag),
      writable: false
    });
  }
  function injectCompilerOptionsCheck(app) {
    if (isRuntimeOnly()) {
      const isCustomElement = app.config.isCustomElement;
      Object.defineProperty(app.config, "isCustomElement", {
        get() {
          return isCustomElement;
        },
        set() {
          warn2(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
        }
      });
      const compilerOptions = app.config.compilerOptions;
      const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
      Object.defineProperty(app.config, "compilerOptions", {
        get() {
          warn2(msg);
          return compilerOptions;
        },
        set() {
          warn2(msg);
        }
      });
    }
  }
  function normalizeContainer(container) {
    if (isString(container)) {
      const res = document.querySelector(container);
      if (process.env.NODE_ENV !== "production" && !res) {
        warn2(`Failed to mount app: mount target selector "${container}" returned null.`);
      }
      return res;
    }
    if (process.env.NODE_ENV !== "production" && window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
      warn2(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    }
    return container;
  }
  var svgNS, doc, templateContainer, nodeOps, importantRE, prefixes, prefixCache, xlinkNS, _getNow, skipTimestampCheck, cachedNow, p, reset, getNow, optionsModifierRE, nativeOnRE, patchProp, defineSSRCustomElement, BaseClass, VueElement, TRANSITION2, ANIMATION, Transition, DOMTransitionPropsValidators, TransitionPropsValidators, callHook2, hasExplicitCallback, endId, positionMap, newPositionMap, TransitionGroupImpl, TransitionGroup, getModelAssigner, vModelText, vModelCheckbox, vModelRadio, vModelSelect, vModelDynamic, systemModifiers, modifierGuards, withModifiers, keyNames, withKeys, vShow, rendererOptions, renderer, enabledHydration, render, hydrate, createApp, createSSRApp, ssrDirectiveInitialized, initDirectivesForSSR;
  var init_runtime_dom_esm_bundler = __esm({
    "../../node_modules/.pnpm/@vue+runtime-dom@3.2.37/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js"() {
      init_runtime_core_esm_bundler();
      init_runtime_core_esm_bundler();
      init_shared_esm_bundler();
      svgNS = "http://www.w3.org/2000/svg";
      doc = typeof document !== "undefined" ? document : null;
      templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
      nodeOps = {
        insert: (child, parent, anchor) => {
          parent.insertBefore(child, anchor || null);
        },
        remove: (child) => {
          const parent = child.parentNode;
          if (parent) {
            parent.removeChild(child);
          }
        },
        createElement: (tag, isSVG, is, props) => {
          const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
          if (tag === "select" && props && props.multiple != null) {
            el.setAttribute("multiple", props.multiple);
          }
          return el;
        },
        createText: (text) => doc.createTextNode(text),
        createComment: (text) => doc.createComment(text),
        setText: (node, text) => {
          node.nodeValue = text;
        },
        setElementText: (el, text) => {
          el.textContent = text;
        },
        parentNode: (node) => node.parentNode,
        nextSibling: (node) => node.nextSibling,
        querySelector: (selector) => doc.querySelector(selector),
        setScopeId(el, id) {
          el.setAttribute(id, "");
        },
        cloneNode(el) {
          const cloned = el.cloneNode(true);
          if (`_value` in el) {
            cloned._value = el._value;
          }
          return cloned;
        },
        insertStaticContent(content, parent, anchor, isSVG, start, end) {
          const before = anchor ? anchor.previousSibling : parent.lastChild;
          if (start && (start === end || start.nextSibling)) {
            while (true) {
              parent.insertBefore(start.cloneNode(true), anchor);
              if (start === end || !(start = start.nextSibling))
                break;
            }
          } else {
            templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            const template = templateContainer.content;
            if (isSVG) {
              const wrapper = template.firstChild;
              while (wrapper.firstChild) {
                template.appendChild(wrapper.firstChild);
              }
              template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
          }
          return [
            before ? before.nextSibling : parent.firstChild,
            anchor ? anchor.previousSibling : parent.lastChild
          ];
        }
      };
      importantRE = /\s*!important$/;
      prefixes = ["Webkit", "Moz", "ms"];
      prefixCache = {};
      xlinkNS = "http://www.w3.org/1999/xlink";
      [_getNow, skipTimestampCheck] = /* @__PURE__ */ (() => {
        let _getNow2 = Date.now;
        let skipTimestampCheck2 = false;
        if (typeof window !== "undefined") {
          if (Date.now() > document.createEvent("Event").timeStamp) {
            _getNow2 = performance.now.bind(performance);
          }
          const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
          skipTimestampCheck2 = !!(ffMatch && Number(ffMatch[1]) <= 53);
        }
        return [_getNow2, skipTimestampCheck2];
      })();
      cachedNow = 0;
      p = /* @__PURE__ */ Promise.resolve();
      reset = () => {
        cachedNow = 0;
      };
      getNow = () => cachedNow || (p.then(reset), cachedNow = _getNow());
      optionsModifierRE = /(?:Once|Passive|Capture)$/;
      nativeOnRE = /^on[a-z]/;
      patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
        if (key === "class") {
          patchClass(el, nextValue, isSVG);
        } else if (key === "style") {
          patchStyle(el, prevValue, nextValue);
        } else if (isOn(key)) {
          if (!isModelListener(key)) {
            patchEvent(el, key, prevValue, nextValue, parentComponent);
          }
        } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
          patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
        } else {
          if (key === "true-value") {
            el._trueValue = nextValue;
          } else if (key === "false-value") {
            el._falseValue = nextValue;
          }
          patchAttr(el, key, nextValue, isSVG);
        }
      };
      defineSSRCustomElement = (options) => {
        return defineCustomElement(options, hydrate);
      };
      BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
      };
      VueElement = class extends BaseClass {
        constructor(_def, _props = {}, hydrate2) {
          super();
          this._def = _def;
          this._props = _props;
          this._instance = null;
          this._connected = false;
          this._resolved = false;
          this._numberProps = null;
          if (this.shadowRoot && hydrate2) {
            hydrate2(this._createVNode(), this.shadowRoot);
          } else {
            if (process.env.NODE_ENV !== "production" && this.shadowRoot) {
              warn2(`Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`);
            }
            this.attachShadow({ mode: "open" });
          }
        }
        connectedCallback() {
          this._connected = true;
          if (!this._instance) {
            this._resolveDef();
          }
        }
        disconnectedCallback() {
          this._connected = false;
          nextTick(() => {
            if (!this._connected) {
              render(null, this.shadowRoot);
              this._instance = null;
            }
          });
        }
        _resolveDef() {
          if (this._resolved) {
            return;
          }
          this._resolved = true;
          for (let i = 0; i < this.attributes.length; i++) {
            this._setAttr(this.attributes[i].name);
          }
          new MutationObserver((mutations) => {
            for (const m of mutations) {
              this._setAttr(m.attributeName);
            }
          }).observe(this, { attributes: true });
          const resolve2 = (def2) => {
            const { props, styles } = def2;
            const hasOptions = !isArray(props);
            const rawKeys = props ? hasOptions ? Object.keys(props) : props : [];
            let numberProps;
            if (hasOptions) {
              for (const key in this._props) {
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                  this._props[key] = toNumber(this._props[key]);
                  (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[key] = true;
                }
              }
            }
            this._numberProps = numberProps;
            for (const key of Object.keys(this)) {
              if (key[0] !== "_") {
                this._setProp(key, this[key], true, false);
              }
            }
            for (const key of rawKeys.map(camelize)) {
              Object.defineProperty(this, key, {
                get() {
                  return this._getProp(key);
                },
                set(val) {
                  this._setProp(key, val);
                }
              });
            }
            this._applyStyles(styles);
            this._update();
          };
          const asyncDef = this._def.__asyncLoader;
          if (asyncDef) {
            asyncDef().then(resolve2);
          } else {
            resolve2(this._def);
          }
        }
        _setAttr(key) {
          let value = this.getAttribute(key);
          if (this._numberProps && this._numberProps[key]) {
            value = toNumber(value);
          }
          this._setProp(camelize(key), value, false);
        }
        _getProp(key) {
          return this._props[key];
        }
        _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
          if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) {
              this._update();
            }
            if (shouldReflect) {
              if (val === true) {
                this.setAttribute(hyphenate(key), "");
              } else if (typeof val === "string" || typeof val === "number") {
                this.setAttribute(hyphenate(key), val + "");
              } else if (!val) {
                this.removeAttribute(hyphenate(key));
              }
            }
          }
        }
        _update() {
          render(this._createVNode(), this.shadowRoot);
        }
        _createVNode() {
          const vnode = createVNode(this._def, extend({}, this._props));
          if (!this._instance) {
            vnode.ce = (instance) => {
              this._instance = instance;
              instance.isCE = true;
              if (process.env.NODE_ENV !== "production") {
                instance.ceReload = (newStyles) => {
                  if (this._styles) {
                    this._styles.forEach((s) => this.shadowRoot.removeChild(s));
                    this._styles.length = 0;
                  }
                  this._applyStyles(newStyles);
                  if (!this._def.__asyncLoader) {
                    this._instance = null;
                    this._update();
                  }
                };
              }
              instance.emit = (event, ...args) => {
                this.dispatchEvent(new CustomEvent(event, {
                  detail: args
                }));
              };
              let parent = this;
              while (parent = parent && (parent.parentNode || parent.host)) {
                if (parent instanceof VueElement) {
                  instance.parent = parent._instance;
                  break;
                }
              }
            };
          }
          return vnode;
        }
        _applyStyles(styles) {
          if (styles) {
            styles.forEach((css) => {
              const s = document.createElement("style");
              s.textContent = css;
              this.shadowRoot.appendChild(s);
              if (process.env.NODE_ENV !== "production") {
                (this._styles || (this._styles = [])).push(s);
              }
            });
          }
        }
      };
      TRANSITION2 = "transition";
      ANIMATION = "animation";
      Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
      Transition.displayName = "Transition";
      DOMTransitionPropsValidators = {
        name: String,
        type: String,
        css: {
          type: Boolean,
          default: true
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
      };
      TransitionPropsValidators = Transition.props = /* @__PURE__ */ extend({}, BaseTransition.props, DOMTransitionPropsValidators);
      callHook2 = (hook, args = []) => {
        if (isArray(hook)) {
          hook.forEach((h2) => h2(...args));
        } else if (hook) {
          hook(...args);
        }
      };
      hasExplicitCallback = (hook) => {
        return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
      };
      endId = 0;
      positionMap = /* @__PURE__ */ new WeakMap();
      newPositionMap = /* @__PURE__ */ new WeakMap();
      TransitionGroupImpl = {
        name: "TransitionGroup",
        props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
          tag: String,
          moveClass: String
        }),
        setup(props, { slots }) {
          const instance = getCurrentInstance();
          const state = useTransitionState();
          let prevChildren;
          let children;
          onUpdated(() => {
            if (!prevChildren.length) {
              return;
            }
            const moveClass = props.moveClass || `${props.name || "v"}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
              return;
            }
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            forceReflow();
            movedChildren.forEach((c) => {
              const el = c.el;
              const style = el.style;
              addTransitionClass(el, moveClass);
              style.transform = style.webkitTransform = style.transitionDuration = "";
              const cb = el._moveCb = (e) => {
                if (e && e.target !== el) {
                  return;
                }
                if (!e || /transform$/.test(e.propertyName)) {
                  el.removeEventListener("transitionend", cb);
                  el._moveCb = null;
                  removeTransitionClass(el, moveClass);
                }
              };
              el.addEventListener("transitionend", cb);
            });
          });
          return () => {
            const rawProps = toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || Fragment;
            prevChildren = children;
            children = slots.default ? getTransitionRawChildren(slots.default()) : [];
            for (let i = 0; i < children.length; i++) {
              const child = children[i];
              if (child.key != null) {
                setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
              } else if (process.env.NODE_ENV !== "production") {
                warn2(`<TransitionGroup> children must be keyed.`);
              }
            }
            if (prevChildren) {
              for (let i = 0; i < prevChildren.length; i++) {
                const child = prevChildren[i];
                setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                positionMap.set(child, child.el.getBoundingClientRect());
              }
            }
            return createVNode(tag, null, children);
          };
        }
      };
      TransitionGroup = TransitionGroupImpl;
      getModelAssigner = (vnode) => {
        const fn = vnode.props["onUpdate:modelValue"] || false;
        return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn;
      };
      vModelText = {
        created(el, { modifiers: { lazy, trim, number } }, vnode) {
          el._assign = getModelAssigner(vnode);
          const castToNumber = number || vnode.props && vnode.props.type === "number";
          addEventListener(el, lazy ? "change" : "input", (e) => {
            if (e.target.composing)
              return;
            let domValue = el.value;
            if (trim) {
              domValue = domValue.trim();
            }
            if (castToNumber) {
              domValue = toNumber(domValue);
            }
            el._assign(domValue);
          });
          if (trim) {
            addEventListener(el, "change", () => {
              el.value = el.value.trim();
            });
          }
          if (!lazy) {
            addEventListener(el, "compositionstart", onCompositionStart);
            addEventListener(el, "compositionend", onCompositionEnd);
            addEventListener(el, "change", onCompositionEnd);
          }
        },
        mounted(el, { value }) {
          el.value = value == null ? "" : value;
        },
        beforeUpdate(el, { value, modifiers: { lazy, trim, number } }, vnode) {
          el._assign = getModelAssigner(vnode);
          if (el.composing)
            return;
          if (document.activeElement === el && el.type !== "range") {
            if (lazy) {
              return;
            }
            if (trim && el.value.trim() === value) {
              return;
            }
            if ((number || el.type === "number") && toNumber(el.value) === value) {
              return;
            }
          }
          const newValue = value == null ? "" : value;
          if (el.value !== newValue) {
            el.value = newValue;
          }
        }
      };
      vModelCheckbox = {
        deep: true,
        created(el, _, vnode) {
          el._assign = getModelAssigner(vnode);
          addEventListener(el, "change", () => {
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if (isArray(modelValue)) {
              const index = looseIndexOf(modelValue, elementValue);
              const found = index !== -1;
              if (checked && !found) {
                assign(modelValue.concat(elementValue));
              } else if (!checked && found) {
                const filtered = [...modelValue];
                filtered.splice(index, 1);
                assign(filtered);
              }
            } else if (isSet(modelValue)) {
              const cloned = new Set(modelValue);
              if (checked) {
                cloned.add(elementValue);
              } else {
                cloned.delete(elementValue);
              }
              assign(cloned);
            } else {
              assign(getCheckboxValue(el, checked));
            }
          });
        },
        mounted: setChecked,
        beforeUpdate(el, binding, vnode) {
          el._assign = getModelAssigner(vnode);
          setChecked(el, binding, vnode);
        }
      };
      vModelRadio = {
        created(el, { value }, vnode) {
          el.checked = looseEqual(value, vnode.props.value);
          el._assign = getModelAssigner(vnode);
          addEventListener(el, "change", () => {
            el._assign(getValue(el));
          });
        },
        beforeUpdate(el, { value, oldValue }, vnode) {
          el._assign = getModelAssigner(vnode);
          if (value !== oldValue) {
            el.checked = looseEqual(value, vnode.props.value);
          }
        }
      };
      vModelSelect = {
        deep: true,
        created(el, { value, modifiers: { number } }, vnode) {
          const isSetModel = isSet(value);
          addEventListener(el, "change", () => {
            const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map((o) => number ? toNumber(getValue(o)) : getValue(o));
            el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
          });
          el._assign = getModelAssigner(vnode);
        },
        mounted(el, { value }) {
          setSelected(el, value);
        },
        beforeUpdate(el, _binding, vnode) {
          el._assign = getModelAssigner(vnode);
        },
        updated(el, { value }) {
          setSelected(el, value);
        }
      };
      vModelDynamic = {
        created(el, binding, vnode) {
          callModelHook(el, binding, vnode, null, "created");
        },
        mounted(el, binding, vnode) {
          callModelHook(el, binding, vnode, null, "mounted");
        },
        beforeUpdate(el, binding, vnode, prevVNode) {
          callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
        },
        updated(el, binding, vnode, prevVNode) {
          callModelHook(el, binding, vnode, prevVNode, "updated");
        }
      };
      systemModifiers = ["ctrl", "shift", "alt", "meta"];
      modifierGuards = {
        stop: (e) => e.stopPropagation(),
        prevent: (e) => e.preventDefault(),
        self: (e) => e.target !== e.currentTarget,
        ctrl: (e) => !e.ctrlKey,
        shift: (e) => !e.shiftKey,
        alt: (e) => !e.altKey,
        meta: (e) => !e.metaKey,
        left: (e) => "button" in e && e.button !== 0,
        middle: (e) => "button" in e && e.button !== 1,
        right: (e) => "button" in e && e.button !== 2,
        exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
      };
      withModifiers = (fn, modifiers) => {
        return (event, ...args) => {
          for (let i = 0; i < modifiers.length; i++) {
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers))
              return;
          }
          return fn(event, ...args);
        };
      };
      keyNames = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
      };
      withKeys = (fn, modifiers) => {
        return (event) => {
          if (!("key" in event)) {
            return;
          }
          const eventKey = hyphenate(event.key);
          if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) {
            return fn(event);
          }
        };
      };
      vShow = {
        beforeMount(el, { value }, { transition }) {
          el._vod = el.style.display === "none" ? "" : el.style.display;
          if (transition && value) {
            transition.beforeEnter(el);
          } else {
            setDisplay(el, value);
          }
        },
        mounted(el, { value }, { transition }) {
          if (transition && value) {
            transition.enter(el);
          }
        },
        updated(el, { value, oldValue }, { transition }) {
          if (!value === !oldValue)
            return;
          if (transition) {
            if (value) {
              transition.beforeEnter(el);
              setDisplay(el, true);
              transition.enter(el);
            } else {
              transition.leave(el, () => {
                setDisplay(el, false);
              });
            }
          } else {
            setDisplay(el, value);
          }
        },
        beforeUnmount(el, { value }) {
          setDisplay(el, value);
        }
      };
      rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
      enabledHydration = false;
      render = (...args) => {
        ensureRenderer().render(...args);
      };
      hydrate = (...args) => {
        ensureHydrationRenderer().hydrate(...args);
      };
      createApp = (...args) => {
        const app = ensureRenderer().createApp(...args);
        if (process.env.NODE_ENV !== "production") {
          injectNativeTagCheck(app);
          injectCompilerOptionsCheck(app);
        }
        const { mount } = app;
        app.mount = (containerOrSelector) => {
          const container = normalizeContainer(containerOrSelector);
          if (!container)
            return;
          const component = app._component;
          if (!isFunction(component) && !component.render && !component.template) {
            component.template = container.innerHTML;
          }
          container.innerHTML = "";
          const proxy = mount(container, false, container instanceof SVGElement);
          if (container instanceof Element) {
            container.removeAttribute("v-cloak");
            container.setAttribute("data-v-app", "");
          }
          return proxy;
        };
        return app;
      };
      createSSRApp = (...args) => {
        const app = ensureHydrationRenderer().createApp(...args);
        if (process.env.NODE_ENV !== "production") {
          injectNativeTagCheck(app);
          injectCompilerOptionsCheck(app);
        }
        const { mount } = app;
        app.mount = (containerOrSelector) => {
          const container = normalizeContainer(containerOrSelector);
          if (container) {
            return mount(container, true, container instanceof SVGElement);
          }
        };
        return app;
      };
      ssrDirectiveInitialized = false;
      initDirectivesForSSR = () => {
        if (!ssrDirectiveInitialized) {
          ssrDirectiveInitialized = true;
          initVModelForSSR();
          initVShowForSSR();
        }
      };
    }
  });

  // ../../node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.prod.js
  var require_vue_cjs_prod = __commonJS({
    "../../node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var compilerDom = (init_compiler_dom_esm_bundler(), __toCommonJS(compiler_dom_esm_bundler_exports));
      var runtimeDom = (init_runtime_dom_esm_bundler(), __toCommonJS(runtime_dom_esm_bundler_exports));
      var shared = (init_shared_esm_bundler(), __toCommonJS(shared_esm_bundler_exports));
      function _interopNamespace(e) {
        if (e && e.__esModule)
          return e;
        var n = /* @__PURE__ */ Object.create(null);
        if (e) {
          Object.keys(e).forEach(function(k) {
            n[k] = e[k];
          });
        }
        n["default"] = e;
        return Object.freeze(n);
      }
      var runtimeDom__namespace = /* @__PURE__ */ _interopNamespace(runtimeDom);
      var compileCache = /* @__PURE__ */ Object.create(null);
      function compileToFunction(template, options) {
        if (!shared.isString(template)) {
          if (template.nodeType) {
            template = template.innerHTML;
          } else {
            return shared.NOOP;
          }
        }
        const key = template;
        const cached = compileCache[key];
        if (cached) {
          return cached;
        }
        if (template[0] === "#") {
          const el = document.querySelector(template);
          template = el ? el.innerHTML : ``;
        }
        const { code } = compilerDom.compile(template, shared.extend({
          hoistStatic: true,
          onError: void 0,
          onWarn: shared.NOOP
        }, options));
        const render2 = new Function("Vue", code)(runtimeDom__namespace);
        render2._rc = true;
        return compileCache[key] = render2;
      }
      runtimeDom.registerRuntimeCompiler(compileToFunction);
      Object.keys(runtimeDom).forEach(function(k) {
        if (k !== "default")
          exports[k] = runtimeDom[k];
      });
      exports.compile = compileToFunction;
    }
  });

  // ../../node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js
  var require_vue_cjs = __commonJS({
    "../../node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var compilerDom = (init_compiler_dom_esm_bundler(), __toCommonJS(compiler_dom_esm_bundler_exports));
      var runtimeDom = (init_runtime_dom_esm_bundler(), __toCommonJS(runtime_dom_esm_bundler_exports));
      var shared = (init_shared_esm_bundler(), __toCommonJS(shared_esm_bundler_exports));
      function _interopNamespace(e) {
        if (e && e.__esModule)
          return e;
        var n = /* @__PURE__ */ Object.create(null);
        if (e) {
          Object.keys(e).forEach(function(k) {
            n[k] = e[k];
          });
        }
        n["default"] = e;
        return Object.freeze(n);
      }
      var runtimeDom__namespace = /* @__PURE__ */ _interopNamespace(runtimeDom);
      var compileCache = /* @__PURE__ */ Object.create(null);
      function compileToFunction(template, options) {
        if (!shared.isString(template)) {
          if (template.nodeType) {
            template = template.innerHTML;
          } else {
            runtimeDom.warn(`invalid template option: `, template);
            return shared.NOOP;
          }
        }
        const key = template;
        const cached = compileCache[key];
        if (cached) {
          return cached;
        }
        if (template[0] === "#") {
          const el = document.querySelector(template);
          if (!el) {
            runtimeDom.warn(`Template element not found or is empty: ${template}`);
          }
          template = el ? el.innerHTML : ``;
        }
        const { code } = compilerDom.compile(template, shared.extend({
          hoistStatic: true,
          onError,
          onWarn: (e) => onError(e, true)
        }, options));
        function onError(err, asWarning = false) {
          const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
          const codeFrame = err.loc && shared.generateCodeFrame(template, err.loc.start.offset, err.loc.end.offset);
          runtimeDom.warn(codeFrame ? `${message}
${codeFrame}` : message);
        }
        const render2 = new Function("Vue", code)(runtimeDom__namespace);
        render2._rc = true;
        return compileCache[key] = render2;
      }
      runtimeDom.registerRuntimeCompiler(compileToFunction);
      Object.keys(runtimeDom).forEach(function(k) {
        if (k !== "default")
          exports[k] = runtimeDom[k];
      });
      exports.compile = compileToFunction;
    }
  });

  // ../../node_modules/.pnpm/vue@3.2.37/node_modules/vue/index.js
  var require_vue = __commonJS({
    "../../node_modules/.pnpm/vue@3.2.37/node_modules/vue/index.js"(exports, module) {
      "use strict";
      if (process.env.NODE_ENV === "production") {
        module.exports = require_vue_cjs_prod();
      } else {
        module.exports = require_vue_cjs();
      }
    }
  });

  // ../../node_modules/.pnpm/vue@3.2.37/node_modules/vue/index.mjs
  var vue_exports = {};
  __reExport(vue_exports, __toESM(require_vue(), 1));

  // src/index.ts
  function useBoolean(initValue = false) {
    const bool = (0, vue_exports.ref)(initValue);
    function setBool(value) {
      bool.value = value;
    }
    function setTrue() {
      setBool(true);
    }
    function setFalse() {
      setBool(false);
    }
    function toggle() {
      setBool(!bool.value);
    }
    return {
      bool,
      setBool,
      setTrue,
      setFalse,
      toggle
    };
  }
})();
//# sourceMappingURL=index.global.js.map