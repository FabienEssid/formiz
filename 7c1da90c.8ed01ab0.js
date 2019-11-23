(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{165:function(n,t,e){"use strict";e.r(t);e(59),e(32),e(23),e(24),e(60),e(0);var r=e(169),i=e(176),a=e(173),s=e(179),o=e(174),c=e(175),u="\n// 2. Create a form with multi steps & fields\nconst MyForm = () => {\n  const myForm = useForm()\n  const [isLoading, setIsLoading] = React.useState(false)\n  const submitForm = (values) => {\n    setIsLoading(true)\n\n    setTimeout(() => {\n      setIsLoading(false)\n      alert(JSON.stringify(values))\n      myForm.invalidateFields({\n        email: 'You can display an error after an API call',\n      })\n    }, 1000)\n  }\n  return (\n    <Formiz onValidSubmit={submitForm} connect={myForm}>\n      <form\n        noValidate\n        onSubmit={myForm.submit}\n        className=\"demo-form\"\n        style={{ minHeight: '16rem' }}\n      >\n        <div className=\"demo-form__content\">\n          "+Object(s.a)()+"\n          "+Object(o.a)()+"\n          "+Object(c.a)()+'\n        </div>\n\n        <div className="demo-form__footer">\n          <div\n            className="ml-auto"\n            style={{ minWidth: \'6rem\' }}\n          >\n            <button\n              className="demo-button is-full is-primary"\n              type="submit"\n              disabled={isLoading || (!myForm.isValid && myForm.isSubmitted)}\n            >\n              {isLoading ? \'Loading...\' : \'Submit\'}\n            </button>\n          </div>\n        </div>\n      </form>\n    </Formiz>\n  )\n}\n',p="\n"+a.a+"\n"+u+"\nrender(\n  <MyForm />\n)\n";function l(){return(l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}e.d(t,"frontMatter",(function(){return f})),e.d(t,"rightToc",(function(){return d})),e.d(t,"default",(function(){return _}));var f={id:"simple",title:"Simple Form"},d=[],j={rightToc:d},S="wrapper";function _(n){var t=n.components,e=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["components"]);return Object(r.b)(S,l({},j,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i.a,{code:p,mdxType:"CodePreview"}))}_.isMDXComponent=!0},173:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r="\n// 1. Create a reusable field\nconst MyField = (props) => {\n  const {\n    errorMessage,\n    id,\n    isValid,\n    isPristine,\n    isSubmitted,\n    resetKey,\n    setValue,\n    value,\n  } = useField(props)\n  const { label, type, required } = props\n  const [isFocused, setIsFocused] = React.useState(false);\n  const showError = !isValid && (!isPristine || isSubmitted)\n\n  return (\n    <div className={`demo-form-group ${(showError && !isFocused) ? 'is-error' : ''}`}>\n      <label\n        className=\"demo-label\"\n        htmlFor={id}\n      >\n        { label }\n        {required && ' *'}\n      </label>\n      <input\n        key={resetKey}\n        id={id}\n        type={type || 'text'}\n        value={value || ''}\n        className=\"demo-input\"\n        onChange={e => setValue(e.target.value)}\n        onFocus={() => setIsFocused(true)}\n        onBlur={() => setIsFocused(false)}\n        aria-invalid={!isValid}\n        aria-describedby={!isValid ? `${id}-error` : null}\n      />\n      {showError && (\n        <div id={`${id}-error`} className=\"demo-form-feedback\">\n          { errorMessage }\n        </div>\n      )}\n    </div>\n  )\n}\n"},174:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(n){return'\n            <MyField\n              name="email"\n              label="Email"\n              type="email"\n              required="Email is required"\n              validations={[\n                {\n                  rule: validations.isEmail(),\n                  message: \'Not a valid email\',\n                }\n              ]}\n              '+(n?'defaultValue="hailey@company.com"':"")+"\n            />\n"}},175:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(){return'\n            <MyField\n              name="password"\n              label="Password"\n              type="password"\n            />\n            <MyField\n              name="passwordConfirm"\n              label="Confirm password"\n              type="password"\n              validations={[\n                {\n                  rule: (value) => myForm.values.password === value,\n                  deps: [myForm.values.password],\n                  message: \'Passwords do not match\',\n                }\n              ]}\n            />\n'}},176:function(n,t,e){"use strict";var r={};e.r(r),e.d(r,"isEmail",(function(){return Pn})),e.d(r,"isInRangeNumber",(function(){return Mn})),e.d(r,"isLength",(function(){return Nn})),e.d(r,"isMaxLength",(function(){return Fn})),e.d(r,"isMaxNumber",(function(){return Bn})),e.d(r,"isMinLength",(function(){return Tn})),e.d(r,"isMinNumber",(function(){return Cn})),e.d(r,"isNotEmptyArray",(function(){return xn})),e.d(r,"isNotEmptyString",(function(){return vn})),e.d(r,"isNumber",(function(){return On})),e.d(r,"isPercentage",(function(){return wn})),e.d(r,"isRequired",(function(){return En}));var i=e(0),a=e.n(i),s=e(13),o=e.n(s),c=e(589),u=e(180),p=e.n(u);e(181),e(182),e(183),e(184),e(171),e(94),e(185),e(62),e(95),e(187),e(188),e(32),e(23),e(24),e(60),e(59),e(189),e(190);function l(n){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function d(){return(d=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function j(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function S(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?j(e,!0).forEach((function(t){f(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):j(e).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function _(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function m(n,t){return g(n)||function(n,t){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var e=[],r=!0,i=!1,a=void 0;try{for(var s,o=n[Symbol.iterator]();!(r=(s=o.next()).done)&&(e.push(s.value),!t||e.length!==t);r=!0);}catch(n){i=!0,a=n}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return e}}(n,t)||h()}function y(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||b(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(n){if(Array.isArray(n))return n}function b(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function h(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function E(n){var t=function(n,t){if("object"!=typeof n||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,t);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n,"string");return"symbol"==typeof t?t:String(t)}var v=function(n){return n&&"object"===l(n)&&n.constructor===Object},x=function(n){return Object.keys(n).reduce((function(n,t){return P(t,n)}),n)},P=function(n,t){if(n.indexOf(".")<0&&n.indexOf("[")<0)return t;var e,r=t[n],i=t||{},a=(i[n],_(i,[n].map(E))),s=g(e=n.split("."))||b(e)||h(),o=s[0],c=s.slice(1);if(o.match(/\[([0-9]*)\]$/g)){var u=m(o.split(/(\[|\])/g),3),p=u[0],l=u[2],d=t[p]||[];if(c.length){var j=S({},t[p]&&v(t[p][l])?t[p][l]:{},f({},c.join("."),r));d[l]=x(j)}else d[l]=r;return S({},a,f({},p,d))}var y=S({},v(t[o])?t[o]:{},f({},c.join("."),r));return S({},a,f({},o,x(y)))},O=function(n){var t=(n||[]).filter((function(n){return n.isEnabled})).reduce((function(n,t){return S({},n,f({},t.name,t.value))}),{});return x(t)},C=function(n,t){return(t||[]).filter((function(n){return n.isEnabled})).filter((function(t){return t.step===n}))},B=function(n,t){var e=function(n,t){return(t||[]).find((function(t){return t.name===n}))}(n,t);if(!e)return[];var r=(e.validations||[]).map((function(n){return n.rule&&!n.rule(e.value)?n.message:"___FIELD_IS_VALID___"})).filter((function(n){return"___FIELD_IS_VALID___"!==n}));return e.externalError?[e.externalError].concat(y(r)):r},M=function(n){return(n||[]).filter((function(n){return n.isEnabled}))},w=function(n){return(n||[]).sort((function(n,t){return n.index-t.index})).sort((function(n,t){return n.order-t.order})).map((function(n,t){return S({},n,{index:t})}))},N=function(n){return n.navigatedStepName||n.initialStepName},T=function(n,t){return(t||[]).filter((function(n){return n.isEnabled})).findIndex((function(t){return t.name===n}))||0},F=function(n,t){var e=M(t);return w(e).find((function(t){return t.name===n}))||{}},G=function(n){return"formiz-".concat(n,"-id-").concat(Math.random().toString(36).substr(2,9))},V=a.a.createContext(),k=function(){return Object(i.useContext)(V)},I=function(n){var t=n.children,e=n.onStateChange,r=n.onSubmit,s=n.onValidSubmit,o=n.onInvalidSubmit,c=Object(i.useMemo)((function(){return G("form")}),[]),u=m(Object(i.useState)({id:c,resetKey:1,isValid:!0,isSubmitted:!1,initialStepName:null,navigatedStepName:null,steps:[],fields:[]}),2),p=u[0],l=u[1],f=Object(i.useCallback)((function(n){l((function(t){return n(t)}))}),[]);return Object(i.useEffect)((function(){e(p)}),[p]),a.a.createElement(V.Provider,{value:{state:p,dispatch:f,onSubmit:r,onValidSubmit:s,onInvalidSubmit:o}},t)};I.propTypes={children:o.a.node.isRequired,onStateChange:o.a.func,onSubmit:o.a.func,onValidSubmit:o.a.func,onInvalidSubmit:o.a.func},I.defaultProps={onStateChange:function(){},onSubmit:function(){},onValidSubmit:function(){},onInvalidSubmit:function(){}};var L=function(){return function(n){var t=(n.fields||[]).map((function(t){return S({},t,{errors:B(t.name,n.fields)})})),e=t.filter((function(n){return n.isEnabled})).every((function(n){return!n.errors.length})),r=(n.steps||[]).map((function(n){return S({},n,{isValid:C(n.name,t).every((function(n){return!n.errors.length}))})}));return S({},n,{fields:t,steps:r,isValid:e})}},A=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};return function(r){var i=(r.steps||[]).map((function(n){return S({},n,{isSubmitted:!0})})),a=O(r.fields);n(a);var s=S({},r,{steps:i,isSubmitted:!0});return(s=L()(s)).isValid?t(a):e(a),s}},D=function(n){return function(t){var e=t.steps,r=M(e).find((function(t){return t.name===n}));if(!r||!r.name)return t;var i=S({},t,{navigatedStepName:r.name});return L()(i)}},H=function(n){return function(t){var e=t.steps,r=M(e)[n]||{};return D(r.name)(t)}},K=function(){return function(n){var t=n.steps,e=M(t).length,r=N(n),i=T(r,t),a=e>0?i+1:0;return H(a=a>e-1?i:a)(n)}},R=function(){return function(n){var t=n.steps,e=N(n),r=T(e,t)-1;return H(r=r<0?0:r)(n)}},z=function(n,t){return function(e){var r=e.fields.find((function(t){return t.id===n}));if(!r)return e;var i=e.fields.filter((function(t){return t.id!==n})),a=(r.externalError,_(r,["externalError"])),s=[].concat(y(i),[S({},a,{value:t,isPristine:!1})]),o=S({},e,{fields:s});return L()(o)}},W={id:null,submit:function(){},isValid:!0,isSubmitted:!1,values:{},invalidateFields:function(){},reset:function(){},resetKey:0,currentStep:{},steps:[],isStepValid:!0,isStepSubmitted:!1,isFirstStep:!0,isLastStep:!0,submitStep:function(){},getFieldStepName:function(){},nextStep:function(){},prevStep:function(){},goToStep:function(){}},q=function(){var n=k();if(!n)return null;var t=n.state,e=n.dispatch,r=n.onSubmit,i=n.onValidSubmit,a=n.onInvalidSubmit,s=t.id,o=t.fields,c=t.isValid,u=t.isSubmitted,p=t.steps,l=t.resetKey,f=O(o),d=function(n){return{name:n.name,label:n.label,isValid:n.isValid,isVisited:n.isVisited,isSubmitted:n.isSubmitted,index:n.index}},j=M(p),m=j.length,g=N(t),b=F(g,j),h=T(g,j);return{id:s,submit:function(n){n&&n.preventDefault(),e(A(r,i,a))},isValid:c,isSubmitted:u,values:f,invalidateFields:function(n){e(function(n){return function(t){var e=t.fields.map((function(t){var e=n[t.name];return e?S({},t,{externalError:e}):t})),r=S({},t,{fields:e});return L()(r)}}(n))},reset:function(){e((function(n){var t=(n.fields||[]).map((function(n){n.externalError;var t=_(n,["externalError"]);return S({},t,{isPristine:!0,value:t.defaultValue})})),e=(n.steps||[]).map((function(n){return S({},n,{isSubmitted:!1,isVisited:!1})})),r=S({},n,{fields:t,steps:e,isSubmitted:!1,navigatedStepName:n.initialStepName,resetKey:n.resetKey+1});return L()(r)}))},resetKey:l,currentStep:d(b),steps:j.map(d),isStepValid:b.isValid,isStepSubmitted:b.isSubmitted,isFirstStep:0===h,isLastStep:h===m-1,submitStep:function(n){n&&n.preventDefault(),e(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};return function(i){var a=i.steps.find((function(t){return t.name===n}))||{},s=i.steps.filter((function(t){return t.name!==n})),o=w([].concat(y(s),[S({},a,{isSubmitted:!0})])),c=S({},i,{steps:o});return a.isValid?(c.navigatedStepName===(c=K()(c)).navigatedStepName&&(c=A(t,e,r)(c)),c):c}}(g,r,i,a))},getFieldStepName:function(n){return function(n,t){var e=t.find((function(t){return t.name===n}));if(e&&e.isEnabled)return e.step}(n,o)},nextStep:function(){e(K())},prevStep:function(){e(R())},goToStep:function(n){e(D(n))}}},J={children:o.a.node,autoForm:o.a.bool,onValid:o.a.func,onInvalid:o.a.func,onChange:o.a.func,connect:o.a.shape({__connect__:o.a.func})},U={children:"",autoForm:!1,onValid:function(){},onInvalid:function(){},onChange:function(){},connect:{__connect__:function(){}}},$=function(n){var t=n.children,e=n.autoForm,r=n.onValid,s=n.onInvalid,o=n.onChange,c=n.connect,u=k().dispatch,p=q();return o(p.values),p.isValid?r():s(),Object(i.useEffect)((function(){c.__connect__(p)}),[u,JSON.stringify(c.__connect__),JSON.stringify(p)]),e?a.a.createElement("form",{noValidate:!0,onSubmit:p.submit},t):t};$.propTypes=J,$.defaultProps=U;var X=new Error("A <FormizStep> always needs a `name` attribute."),Y={as:o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),children:o.a.oneOfType([o.a.node,o.a.func]),isEnabled:o.a.bool,name:o.a.string.isRequired,label:o.a.node,order:o.a.number,style:o.a.oneOfType([o.a.object,o.a.array])},Z={as:"div",children:"",isEnabled:!0,label:"",order:0,style:{}},Q=function(n){var t=n.as,e=n.children,r=n.isEnabled,s=n.name,o=n.label,c=n.order,u=n.style,p=_(n,["as","children","isEnabled","name","label","order","style"]);if(!s)throw X;var l=k().dispatch,f=q().currentStep,j=f.name===s;return Object(i.useEffect)((function(){var n;f.name&&!f.isVisited&&j&&l((n=f.name,function(t){var e=t.steps.find((function(t){return t.name===n}))||{},r=t.steps.filter((function(t){return t.name!==n})),i=w([].concat(y(r),[S({},e,{isVisited:!0})]));return S({},t,{steps:i})}))})),Object(i.useEffect)((function(){j&&!r&&l(R())}),[r,j]),Object(i.useEffect)((function(){return l(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.order,r=void 0===e?0:e,i=t.label,a=void 0===i?"":i,s=t.isEnabled,o=void 0===s||s;return function(t){var e=t.steps.find((function(t){return t.name===n}))||{},i=t.steps.filter((function(t){return t.name!==n})),s=w([].concat(y(i),[S({},e,{name:n,label:a,order:r,isValid:!0,isVisited:!1,isSubmitted:!1,isEnabled:o})])),c=S({},t,{steps:s,initialStepName:s.length?s[0].name:null});return L()(c)}}(s,{order:c})),function(){var n;l((n=s,function(t){var e=t.steps.filter((function(t){return t.name!==n})),r=S({},t,{steps:w(e)});return L()(r)}))}}),[s,c]),Object(i.useEffect)((function(){l(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.label,r=t.isEnabled;return function(t){var i=t.steps.find((function(t){return t.name===n}))||{},a=t.steps.filter((function(t){return t.name!==n})),s=w([].concat(y(a),[S({},i,{label:e,isEnabled:r})]));return S({},t,{steps:s})}}(s,{label:o,isEnabled:!!r}))}),[r,o]),"function"==typeof e?e({isActive:j}):a.a.createElement(t,d({style:S({},u,{display:j?null:"none"})},p),r&&e)};Q.propTypes=Y,Q.defaultProps=Z;var nn=a.a.createContext(),tn=function(n){var t=n.children,e=n.name;return a.a.createElement(nn.Provider,{value:e},t)};tn.propTypes={children:o.a.node.isRequired,name:o.a.string},tn.defaultProps={name:null};var en=function(){var n=m(Object(i.useState)(W),2),t=n[0],e=n[1],r=q();return r||S({},t,{__connect__:function(n){e(n)}})};function rn(n,t,e,r){var i,a=null==(i=r)||"number"==typeof i||"boolean"==typeof i?r:e(r),s=t.get(a);return void 0===s&&(s=n.call(this,r),t.set(a,s)),s}function an(n,t,e){var r=Array.prototype.slice.call(arguments,3),i=e(r),a=t.get(i);return void 0===a&&(a=n.apply(this,r),t.set(i,a)),a}function sn(n,t,e,r,i){return e.bind(t,n,r,i)}function on(n,t){return sn(n,this,1===n.length?rn:an,t.cache.create(),t.serializer)}function cn(){return JSON.stringify(arguments)}function un(){this.cache=Object.create(null)}un.prototype.has=function(n){return n in this.cache},un.prototype.get=function(n){return this.cache[n]},un.prototype.set=function(n,t){this.cache[n]=t};var pn={create:function(){return new un}},ln=function(n,t){var e=t&&t.cache?t.cache:pn,r=t&&t.serializer?t.serializer:cn;return(t&&t.strategy?t.strategy:on)(n,{cache:e,serializer:r})};ln.strategies={variadic:function(n,t){return sn(n,this,an,t.cache.create(),t.serializer)},monadic:function(n,t){return sn(n,this,rn,t.cache.create(),t.serializer)}};var fn=new Error("A Formiz field always needs to be in a `<Formiz>` component."),dn=new Error("A Formiz field always needs a `name` attribute."),jn=(o.a.number,o.a.any,o.a.func,o.a.oneOfType([o.a.bool,o.a.node]),o.a.bool,o.a.string,o.a.func,o.a.arrayOf(o.a.shape({rule:o.a.func,message:o.a.node})),function(n){return n||""===n?{rule:function(n){return!!n||0===n},message:!0!==n?n:""}:{}}),Sn=function(n,t){var e=[jn(n)];return[].concat(e,y(t)).filter((function(n){return n.rule})).map((function(n){return S({},n,{rule:ln(n.rule)})}))},_n=function(n){var t=n.debounce,e=void 0===t?100:t,r=n.defaultValue,a=n.formatValue,s=void 0===a?function(n){return n}:a,o=n.required,c=n.keepValue,u=n.name,p=n.onChange,l=n.validations,f=void 0===l?[]:l,d=Object(i.useMemo)((function(){return G("field")}),[]);if(!u)throw dn;var j=k(),_=Object(i.useContext)(nn);if(!j)throw fn;var g=j.state,b=j.dispatch,h=g.fields.find((function(n){return n.name===u}))||{},E=(h.errors||[]).filter((function(n){return!!n})),v=F(_,g.steps),x=v.name?v.isSubmitted:g.isSubmitted,P=m(Object(i.useState)(h.value||r),2),O=P[0],C=P[1],B=Object(i.useRef)(e);B.current=e;var M=Object(i.useRef)();M.current=r;var w=Object(i.useRef)();w.current=O;var N=Object(i.useRef)();N.current=c;var T=Object(i.useRef)();T.current=s;var V=Object(i.useRef)(!0);return Object(i.useEffect)((function(){return b(function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.value,i=void 0===r?null:r,a=e.step,s=void 0===a?null:a,o=e.validations,c=void 0===o?[]:o;return function(e){var r=e.fields.find((function(n){return n.name===t}))||{},a=e.fields.filter((function(n){return n.name!==t})),o=[].concat(y(a),[S({},r,{id:n,name:t,value:r.value||i,defaultValue:i,isEnabled:!0,isPristine:!0,step:s,validations:c,errors:[]})]),u=S({},e,{fields:o});return L()(u)}}(d,u,{value:w.current||M.current,step:_,validations:Sn(o,f)})),function(){var n,t;b((n=d,t=N.current,function(e){var r=e.fields.find((function(t){return t.id===n}));if(!r)return e;var i=e.fields.filter((function(t){return t.id!==n})),a=t?[].concat(y(i),[S({},r,{isEnabled:!1})]):i,s=S({},e,{fields:a});return L()(s)}))}}),[d,u,_]),Object(i.useEffect)((function(){N.current||C(M.current)}),[g.resetKey]),Object(i.useEffect)((function(){if(V.current)return function(){};var n=T.current(O);if(!B.current)return b(z(d,n)),function(){};var t=setTimeout((function(){b(z(d,n))}),B.current);return function(){clearTimeout(t)}}),[JSON.stringify(O),d]),Object(i.useEffect)((function(){V.current||b(function(n,t){return function(e){var r=e.fields.find((function(t){return t.id===n}));if(!r)return e;var i=e.fields.filter((function(t){return t.id!==n})),a=[].concat(y(i),[S({},r,{validations:t})]),s=S({},e,{fields:a});return L()(s)}}(d,Sn(o,f)))}),[d,o].concat(y(f.reduce((function(n,t){return[].concat(y(n),y(t.deps||[]),[t.message])}),[])))),Object(i.useEffect)((function(){V.current=!1}),[]),{id:d,resetKey:g.resetKey,value:O||"",valueDebounced:h.value||r||"",errorMessages:E,errorMessage:E[0],isValid:!h.errors||!h.errors.length,isPristine:!!h.isPristine,isSubmitted:x,setValue:function(n){C(n),p&&p(T.current(n))}}},mn=function(n){return a.a.createElement(I,n,a.a.createElement($,n))};mn.propTypes=S({},J,{onSubmit:o.a.func,onValidSubmit:o.a.func,onInvalidSubmit:o.a.func}),mn.defaultProps=S({},U,{onSubmit:function(){},onValidSubmit:function(){},onInvalidSubmit:function(){}});var yn=function(n){var t=n.name,e=n.order,r=_(n,["name","order"]);return a.a.createElement(tn,{name:t},a.a.createElement(Q,d({},r,{name:t,order:e})))};yn.propTypes=Y,yn.defaultProps=Z;var gn=function(n){return"string"==typeof n||n instanceof String},bn=function(n){return"number"==typeof parseFloat(n)&&!isNaN(parseFloat(n))&&!isNaN(n)},hn=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,En=function(){return function(n){return!!n||0===n}},vn=function(){return function(n){return!!gn(n)&&!!(n||"").match(/^(?!\s*$).+/)}},xn=function(){return function(n){return!!Array.isArray(n)&&!!(n||[]).length}},Pn=function(){return function(n){return null==n||!!gn(n)&&(!n||hn.test(n))}},On=function(){return function(n){return bn(n)}},Cn=function(n){return function(t){return bn(t)&&parseFloat(t)>=n}},Bn=function(n){return function(t){return bn(t)&&parseFloat(t)<=n}},Mn=function(n,t){return function(e){return bn(e)&&parseFloat(e)>=n&&parseFloat(e)<=t}},wn=function(){return function(n){return bn(n)&&parseFloat(n)>=0&&parseFloat(n)<=100}},Nn=function(n){return function(t){return(gn(t)||Array.isArray(t))&&t.length===n}},Tn=function(n){return function(t){return(gn(t)||Array.isArray(t))&&t.length>=n}},Fn=function(n){return function(t){return(gn(t)||Array.isArray(t))&&t.length<=n}};e.d(t,"a",(function(){return Gn}));var Gn=function(n){var t=n.code;return a.a.createElement(c.d,{code:t.trim(),scope:{React:a.a,Formiz:mn,FormizStep:yn,useForm:en,useField:_n,validations:r},theme:p.a,noInline:!0},a.a.createElement("div",{className:"relative mx-4 xxl:mx-0 z-20 shadow-lg rounded-lg overflow-hidden bg-white"},a.a.createElement(c.c,null)),a.a.createElement(c.b,null),a.a.createElement("div",{className:"relative z-10 xxl:-mx-20 -mt-6 px-2 pb-2 pt-10 rounded-lg overflow-hidden",style:{background:"#011627"}},a.a.createElement(c.a,null)))};Gn.propTypes={code:o.a.string.isRequired}},179:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(n){return'\n            <MyField\n              name="name"\n              label="Name"\n              required="Name is required"\n              '+(n?'defaultValue="Hailey Terry"':"")+'\n            />\n\n            <MyField\n              name="nickname"\n              label="Nickname"\n              '+(n?'defaultValue="hailey"':"")+"\n            />\n"}},191:function(n,t,e){var r={"./Binary_Property/ASCII.js":192,"./Binary_Property/ASCII_Hex_Digit.js":193,"./Binary_Property/Alphabetic.js":194,"./Binary_Property/Any.js":195,"./Binary_Property/Assigned.js":196,"./Binary_Property/Bidi_Control.js":197,"./Binary_Property/Bidi_Mirrored.js":198,"./Binary_Property/Case_Ignorable.js":199,"./Binary_Property/Cased.js":200,"./Binary_Property/Changes_When_Casefolded.js":201,"./Binary_Property/Changes_When_Casemapped.js":202,"./Binary_Property/Changes_When_Lowercased.js":203,"./Binary_Property/Changes_When_NFKC_Casefolded.js":204,"./Binary_Property/Changes_When_Titlecased.js":205,"./Binary_Property/Changes_When_Uppercased.js":206,"./Binary_Property/Dash.js":207,"./Binary_Property/Default_Ignorable_Code_Point.js":208,"./Binary_Property/Deprecated.js":209,"./Binary_Property/Diacritic.js":210,"./Binary_Property/Emoji.js":211,"./Binary_Property/Emoji_Component.js":212,"./Binary_Property/Emoji_Modifier.js":213,"./Binary_Property/Emoji_Modifier_Base.js":214,"./Binary_Property/Emoji_Presentation.js":215,"./Binary_Property/Extended_Pictographic.js":216,"./Binary_Property/Extender.js":217,"./Binary_Property/Grapheme_Base.js":218,"./Binary_Property/Grapheme_Extend.js":219,"./Binary_Property/Hex_Digit.js":220,"./Binary_Property/IDS_Binary_Operator.js":221,"./Binary_Property/IDS_Trinary_Operator.js":222,"./Binary_Property/ID_Continue.js":223,"./Binary_Property/ID_Start.js":224,"./Binary_Property/Ideographic.js":225,"./Binary_Property/Join_Control.js":226,"./Binary_Property/Logical_Order_Exception.js":227,"./Binary_Property/Lowercase.js":228,"./Binary_Property/Math.js":229,"./Binary_Property/Noncharacter_Code_Point.js":230,"./Binary_Property/Pattern_Syntax.js":231,"./Binary_Property/Pattern_White_Space.js":232,"./Binary_Property/Quotation_Mark.js":233,"./Binary_Property/Radical.js":234,"./Binary_Property/Regional_Indicator.js":235,"./Binary_Property/Sentence_Terminal.js":236,"./Binary_Property/Soft_Dotted.js":237,"./Binary_Property/Terminal_Punctuation.js":238,"./Binary_Property/Unified_Ideograph.js":239,"./Binary_Property/Uppercase.js":240,"./Binary_Property/Variation_Selector.js":241,"./Binary_Property/White_Space.js":242,"./Binary_Property/XID_Continue.js":243,"./Binary_Property/XID_Start.js":244,"./General_Category/Cased_Letter.js":245,"./General_Category/Close_Punctuation.js":246,"./General_Category/Connector_Punctuation.js":247,"./General_Category/Control.js":248,"./General_Category/Currency_Symbol.js":249,"./General_Category/Dash_Punctuation.js":250,"./General_Category/Decimal_Number.js":251,"./General_Category/Enclosing_Mark.js":252,"./General_Category/Final_Punctuation.js":253,"./General_Category/Format.js":254,"./General_Category/Initial_Punctuation.js":255,"./General_Category/Letter.js":256,"./General_Category/Letter_Number.js":257,"./General_Category/Line_Separator.js":258,"./General_Category/Lowercase_Letter.js":259,"./General_Category/Mark.js":260,"./General_Category/Math_Symbol.js":261,"./General_Category/Modifier_Letter.js":262,"./General_Category/Modifier_Symbol.js":263,"./General_Category/Nonspacing_Mark.js":264,"./General_Category/Number.js":265,"./General_Category/Open_Punctuation.js":266,"./General_Category/Other.js":267,"./General_Category/Other_Letter.js":268,"./General_Category/Other_Number.js":269,"./General_Category/Other_Punctuation.js":270,"./General_Category/Other_Symbol.js":271,"./General_Category/Paragraph_Separator.js":272,"./General_Category/Private_Use.js":273,"./General_Category/Punctuation.js":274,"./General_Category/Separator.js":275,"./General_Category/Space_Separator.js":276,"./General_Category/Spacing_Mark.js":277,"./General_Category/Surrogate.js":278,"./General_Category/Symbol.js":279,"./General_Category/Titlecase_Letter.js":280,"./General_Category/Unassigned.js":281,"./General_Category/Uppercase_Letter.js":282,"./Script/Adlam.js":283,"./Script/Ahom.js":284,"./Script/Anatolian_Hieroglyphs.js":285,"./Script/Arabic.js":286,"./Script/Armenian.js":287,"./Script/Avestan.js":288,"./Script/Balinese.js":289,"./Script/Bamum.js":290,"./Script/Bassa_Vah.js":291,"./Script/Batak.js":292,"./Script/Bengali.js":293,"./Script/Bhaiksuki.js":294,"./Script/Bopomofo.js":295,"./Script/Brahmi.js":296,"./Script/Braille.js":297,"./Script/Buginese.js":298,"./Script/Buhid.js":299,"./Script/Canadian_Aboriginal.js":300,"./Script/Carian.js":301,"./Script/Caucasian_Albanian.js":302,"./Script/Chakma.js":303,"./Script/Cham.js":304,"./Script/Cherokee.js":305,"./Script/Common.js":306,"./Script/Coptic.js":307,"./Script/Cuneiform.js":308,"./Script/Cypriot.js":309,"./Script/Cyrillic.js":310,"./Script/Deseret.js":311,"./Script/Devanagari.js":312,"./Script/Dogra.js":313,"./Script/Duployan.js":314,"./Script/Egyptian_Hieroglyphs.js":315,"./Script/Elbasan.js":316,"./Script/Elymaic.js":317,"./Script/Ethiopic.js":318,"./Script/Georgian.js":319,"./Script/Glagolitic.js":320,"./Script/Gothic.js":321,"./Script/Grantha.js":322,"./Script/Greek.js":323,"./Script/Gujarati.js":324,"./Script/Gunjala_Gondi.js":325,"./Script/Gurmukhi.js":326,"./Script/Han.js":327,"./Script/Hangul.js":328,"./Script/Hanifi_Rohingya.js":329,"./Script/Hanunoo.js":330,"./Script/Hatran.js":331,"./Script/Hebrew.js":332,"./Script/Hiragana.js":333,"./Script/Imperial_Aramaic.js":334,"./Script/Inherited.js":335,"./Script/Inscriptional_Pahlavi.js":336,"./Script/Inscriptional_Parthian.js":337,"./Script/Javanese.js":338,"./Script/Kaithi.js":339,"./Script/Kannada.js":340,"./Script/Katakana.js":341,"./Script/Kayah_Li.js":342,"./Script/Kharoshthi.js":343,"./Script/Khmer.js":344,"./Script/Khojki.js":345,"./Script/Khudawadi.js":346,"./Script/Lao.js":347,"./Script/Latin.js":348,"./Script/Lepcha.js":349,"./Script/Limbu.js":350,"./Script/Linear_A.js":351,"./Script/Linear_B.js":352,"./Script/Lisu.js":353,"./Script/Lycian.js":354,"./Script/Lydian.js":355,"./Script/Mahajani.js":356,"./Script/Makasar.js":357,"./Script/Malayalam.js":358,"./Script/Mandaic.js":359,"./Script/Manichaean.js":360,"./Script/Marchen.js":361,"./Script/Masaram_Gondi.js":362,"./Script/Medefaidrin.js":363,"./Script/Meetei_Mayek.js":364,"./Script/Mende_Kikakui.js":365,"./Script/Meroitic_Cursive.js":366,"./Script/Meroitic_Hieroglyphs.js":367,"./Script/Miao.js":368,"./Script/Modi.js":369,"./Script/Mongolian.js":370,"./Script/Mro.js":371,"./Script/Multani.js":372,"./Script/Myanmar.js":373,"./Script/Nabataean.js":374,"./Script/Nandinagari.js":375,"./Script/New_Tai_Lue.js":376,"./Script/Newa.js":377,"./Script/Nko.js":378,"./Script/Nushu.js":379,"./Script/Nyiakeng_Puachue_Hmong.js":380,"./Script/Ogham.js":381,"./Script/Ol_Chiki.js":382,"./Script/Old_Hungarian.js":383,"./Script/Old_Italic.js":384,"./Script/Old_North_Arabian.js":385,"./Script/Old_Permic.js":386,"./Script/Old_Persian.js":387,"./Script/Old_Sogdian.js":388,"./Script/Old_South_Arabian.js":389,"./Script/Old_Turkic.js":390,"./Script/Oriya.js":391,"./Script/Osage.js":392,"./Script/Osmanya.js":393,"./Script/Pahawh_Hmong.js":394,"./Script/Palmyrene.js":395,"./Script/Pau_Cin_Hau.js":396,"./Script/Phags_Pa.js":397,"./Script/Phoenician.js":398,"./Script/Psalter_Pahlavi.js":399,"./Script/Rejang.js":400,"./Script/Runic.js":401,"./Script/Samaritan.js":402,"./Script/Saurashtra.js":403,"./Script/Sharada.js":404,"./Script/Shavian.js":405,"./Script/Siddham.js":406,"./Script/SignWriting.js":407,"./Script/Sinhala.js":408,"./Script/Sogdian.js":409,"./Script/Sora_Sompeng.js":410,"./Script/Soyombo.js":411,"./Script/Sundanese.js":412,"./Script/Syloti_Nagri.js":413,"./Script/Syriac.js":414,"./Script/Tagalog.js":415,"./Script/Tagbanwa.js":416,"./Script/Tai_Le.js":417,"./Script/Tai_Tham.js":418,"./Script/Tai_Viet.js":419,"./Script/Takri.js":420,"./Script/Tamil.js":421,"./Script/Tangut.js":422,"./Script/Telugu.js":423,"./Script/Thaana.js":424,"./Script/Thai.js":425,"./Script/Tibetan.js":426,"./Script/Tifinagh.js":427,"./Script/Tirhuta.js":428,"./Script/Ugaritic.js":429,"./Script/Vai.js":430,"./Script/Wancho.js":431,"./Script/Warang_Citi.js":432,"./Script/Yi.js":433,"./Script/Zanabazar_Square.js":434,"./Script_Extensions/Adlam.js":435,"./Script_Extensions/Ahom.js":436,"./Script_Extensions/Anatolian_Hieroglyphs.js":437,"./Script_Extensions/Arabic.js":438,"./Script_Extensions/Armenian.js":439,"./Script_Extensions/Avestan.js":440,"./Script_Extensions/Balinese.js":441,"./Script_Extensions/Bamum.js":442,"./Script_Extensions/Bassa_Vah.js":443,"./Script_Extensions/Batak.js":444,"./Script_Extensions/Bengali.js":445,"./Script_Extensions/Bhaiksuki.js":446,"./Script_Extensions/Bopomofo.js":447,"./Script_Extensions/Brahmi.js":448,"./Script_Extensions/Braille.js":449,"./Script_Extensions/Buginese.js":450,"./Script_Extensions/Buhid.js":451,"./Script_Extensions/Canadian_Aboriginal.js":452,"./Script_Extensions/Carian.js":453,"./Script_Extensions/Caucasian_Albanian.js":454,"./Script_Extensions/Chakma.js":455,"./Script_Extensions/Cham.js":456,"./Script_Extensions/Cherokee.js":457,"./Script_Extensions/Common.js":458,"./Script_Extensions/Coptic.js":459,"./Script_Extensions/Cuneiform.js":460,"./Script_Extensions/Cypriot.js":461,"./Script_Extensions/Cyrillic.js":462,"./Script_Extensions/Deseret.js":463,"./Script_Extensions/Devanagari.js":464,"./Script_Extensions/Dogra.js":465,"./Script_Extensions/Duployan.js":466,"./Script_Extensions/Egyptian_Hieroglyphs.js":467,"./Script_Extensions/Elbasan.js":468,"./Script_Extensions/Elymaic.js":469,"./Script_Extensions/Ethiopic.js":470,"./Script_Extensions/Georgian.js":471,"./Script_Extensions/Glagolitic.js":472,"./Script_Extensions/Gothic.js":473,"./Script_Extensions/Grantha.js":474,"./Script_Extensions/Greek.js":475,"./Script_Extensions/Gujarati.js":476,"./Script_Extensions/Gunjala_Gondi.js":477,"./Script_Extensions/Gurmukhi.js":478,"./Script_Extensions/Han.js":479,"./Script_Extensions/Hangul.js":480,"./Script_Extensions/Hanifi_Rohingya.js":481,"./Script_Extensions/Hanunoo.js":482,"./Script_Extensions/Hatran.js":483,"./Script_Extensions/Hebrew.js":484,"./Script_Extensions/Hiragana.js":485,"./Script_Extensions/Imperial_Aramaic.js":486,"./Script_Extensions/Inherited.js":487,"./Script_Extensions/Inscriptional_Pahlavi.js":488,"./Script_Extensions/Inscriptional_Parthian.js":489,"./Script_Extensions/Javanese.js":490,"./Script_Extensions/Kaithi.js":491,"./Script_Extensions/Kannada.js":492,"./Script_Extensions/Katakana.js":493,"./Script_Extensions/Kayah_Li.js":494,"./Script_Extensions/Kharoshthi.js":495,"./Script_Extensions/Khmer.js":496,"./Script_Extensions/Khojki.js":497,"./Script_Extensions/Khudawadi.js":498,"./Script_Extensions/Lao.js":499,"./Script_Extensions/Latin.js":500,"./Script_Extensions/Lepcha.js":501,"./Script_Extensions/Limbu.js":502,"./Script_Extensions/Linear_A.js":503,"./Script_Extensions/Linear_B.js":504,"./Script_Extensions/Lisu.js":505,"./Script_Extensions/Lycian.js":506,"./Script_Extensions/Lydian.js":507,"./Script_Extensions/Mahajani.js":508,"./Script_Extensions/Makasar.js":509,"./Script_Extensions/Malayalam.js":510,"./Script_Extensions/Mandaic.js":511,"./Script_Extensions/Manichaean.js":512,"./Script_Extensions/Marchen.js":513,"./Script_Extensions/Masaram_Gondi.js":514,"./Script_Extensions/Medefaidrin.js":515,"./Script_Extensions/Meetei_Mayek.js":516,"./Script_Extensions/Mende_Kikakui.js":517,"./Script_Extensions/Meroitic_Cursive.js":518,"./Script_Extensions/Meroitic_Hieroglyphs.js":519,"./Script_Extensions/Miao.js":520,"./Script_Extensions/Modi.js":521,"./Script_Extensions/Mongolian.js":522,"./Script_Extensions/Mro.js":523,"./Script_Extensions/Multani.js":524,"./Script_Extensions/Myanmar.js":525,"./Script_Extensions/Nabataean.js":526,"./Script_Extensions/Nandinagari.js":527,"./Script_Extensions/New_Tai_Lue.js":528,"./Script_Extensions/Newa.js":529,"./Script_Extensions/Nko.js":530,"./Script_Extensions/Nushu.js":531,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":532,"./Script_Extensions/Ogham.js":533,"./Script_Extensions/Ol_Chiki.js":534,"./Script_Extensions/Old_Hungarian.js":535,"./Script_Extensions/Old_Italic.js":536,"./Script_Extensions/Old_North_Arabian.js":537,"./Script_Extensions/Old_Permic.js":538,"./Script_Extensions/Old_Persian.js":539,"./Script_Extensions/Old_Sogdian.js":540,"./Script_Extensions/Old_South_Arabian.js":541,"./Script_Extensions/Old_Turkic.js":542,"./Script_Extensions/Oriya.js":543,"./Script_Extensions/Osage.js":544,"./Script_Extensions/Osmanya.js":545,"./Script_Extensions/Pahawh_Hmong.js":546,"./Script_Extensions/Palmyrene.js":547,"./Script_Extensions/Pau_Cin_Hau.js":548,"./Script_Extensions/Phags_Pa.js":549,"./Script_Extensions/Phoenician.js":550,"./Script_Extensions/Psalter_Pahlavi.js":551,"./Script_Extensions/Rejang.js":552,"./Script_Extensions/Runic.js":553,"./Script_Extensions/Samaritan.js":554,"./Script_Extensions/Saurashtra.js":555,"./Script_Extensions/Sharada.js":556,"./Script_Extensions/Shavian.js":557,"./Script_Extensions/Siddham.js":558,"./Script_Extensions/SignWriting.js":559,"./Script_Extensions/Sinhala.js":560,"./Script_Extensions/Sogdian.js":561,"./Script_Extensions/Sora_Sompeng.js":562,"./Script_Extensions/Soyombo.js":563,"./Script_Extensions/Sundanese.js":564,"./Script_Extensions/Syloti_Nagri.js":565,"./Script_Extensions/Syriac.js":566,"./Script_Extensions/Tagalog.js":567,"./Script_Extensions/Tagbanwa.js":568,"./Script_Extensions/Tai_Le.js":569,"./Script_Extensions/Tai_Tham.js":570,"./Script_Extensions/Tai_Viet.js":571,"./Script_Extensions/Takri.js":572,"./Script_Extensions/Tamil.js":573,"./Script_Extensions/Tangut.js":574,"./Script_Extensions/Telugu.js":575,"./Script_Extensions/Thaana.js":576,"./Script_Extensions/Thai.js":577,"./Script_Extensions/Tibetan.js":578,"./Script_Extensions/Tifinagh.js":579,"./Script_Extensions/Tirhuta.js":580,"./Script_Extensions/Ugaritic.js":581,"./Script_Extensions/Vai.js":582,"./Script_Extensions/Wancho.js":583,"./Script_Extensions/Warang_Citi.js":584,"./Script_Extensions/Yi.js":585,"./Script_Extensions/Zanabazar_Square.js":586,"./index.js":587,"./unicode-version.js":588};function i(n){var t=a(n);return e(t)}function a(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}i.keys=function(){return Object.keys(r)},i.resolve=a,n.exports=i,i.id=191}}]);