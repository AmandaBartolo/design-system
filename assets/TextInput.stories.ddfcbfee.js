var u=Object.defineProperty;var i=(e,r)=>u(e,"name",{value:r,configurable:!0});import{I as k,r as p,$ as c}from"./IconBase.esm.2ab830f6.js";import{a as s,F as o,j as n,r as h}from"./jsx-runtime.673fb777.js";import"./iframe.394919ac.js";var t=new Map;t.set("bold",function(e){return s(o,{children:[n("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});t.set("duotone",function(e){return s(o,{children:[n("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),n("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});t.set("fill",function(){return n(o,{children:n("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"})})});t.set("light",function(e){return s(o,{children:[n("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});t.set("thin",function(e){return s(o,{children:[n("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});t.set("regular",function(e){return s(o,{children:[n("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var f=i(function(r,l){return p(r,l,t)},"renderPath"),a=h.exports.forwardRef(function(e,r){return n(k,{...Object.assign({ref:r},e,{renderPath:f})})});a.displayName="Envelope";const L=a;function x(e){return n("div",{className:"flex items-center gap-3 h-12 bg-blue-800 rounded-lg py-4 px-3 w-full focus-within:ring-2 ring-blue-700",children:e.children})}i(x,"TextInputRoot");function y(e){return n(c,{className:"w-6 h-6 text-gray-800",children:e.children})}i(y,"TextInputIcon");function j(e){return n("input",{className:"bg-transparent flex-1 text-gray-800 text-xs placeholder:text-gray-800 outline-none",...e})}i(j,"TextInputInput");const d={Root:x,Input:j,Icon:y},V={title:"Components/TextInput",component:d.Root,args:{children:[n(d.Icon,{children:n(L,{})}),n(d.Input,{placeholder:"Type your e-mail address"})]},argTypes:{children:{table:{disable:!0}}}},H={},M=["Default"];export{H as Default,M as __namedExportsOrder,V as default};
//# sourceMappingURL=TextInput.stories.ddfcbfee.js.map