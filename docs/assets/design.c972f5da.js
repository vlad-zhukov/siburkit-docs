import{r as h,c as l,G as w}from"./vendor.c82a0da0.js";import{j as t,a,T as x,b as _,F as u}from"./index.3ea845eb.js";const p="_columns_1kxv9_1",E="_column_1kxv9_1";var g={columns:p,column:E,"width-content":"_width-content_1kxv9_19","width-1-2":"_width-1-2_1kxv9_23","width-1-3":"_width-1-3_1kxv9_26","width-2-3":"_width-2-3_1kxv9_29","width-1-4":"_width-1-4_1kxv9_32","width-3-4":"_width-3-4_1kxv9_35","width-1-5":"_width-1-5_1kxv9_38","width-2-5":"_width-2-5_1kxv9_41","width-3-5":"_width-3-5_1kxv9_44","width-4-5":"_width-4-5_1kxv9_47"};const R=h.exports.createContext(!1),B={left:"start",center:"center",right:"end"};function D(n,r){return{"--columns-spacing":n?`${n}px`:"0",justifyContent:r?B[r]:void 0}}function s({spacing:n,align:r,children:i}){if(h.exports.useContext(R))throw new Error("Nesting `Columns` is not allowed");return t("div",{className:g.columns,style:D(n,r),children:t(R.Provider,{value:!0,children:i})})}function c({width:n="auto",children:r}){if(!h.exports.useContext(R))throw new Error("`Column` must be inside `Columns`");return t("div",{className:l(g.column,g[`width-${n.replace("/","-")}`]),children:r})}const F="_colorBlock_1sb9l_1",A="_withBorder_1sb9l_10",k="_name_1sb9l_14",v="_item_1sb9l_19",f="_first_1sb9l_24";var d={colorBlock:F,withBorder:A,name:k,item:v,first:f};function m({hex:n,contrastRatio:r}){return{background:n,color:r>4?"var(--sk-base-low-contrast-background-color)":"var(--sk-base-low-contrast-text-color)"}}function o({name:n,colors:r}){const i=r[0];if(!i)throw new TypeError("ColorBlock `colors` must have at least one element");return a("div",{className:l(d.colorBlock,i.contrastRatio<1.15&&d.withBorder),children:[t("div",{className:d.name,style:m(i),children:t(x,{size:_.L,weight:"medium",children:n})}),r.map((e,C)=>a("div",{className:l(d.item,C===0&&d.first),style:m(e),children:[a(x,{children:[e.grade?`${e.grade}  `:"",e.hex.toUpperCase()]}),a(x,{children:[e.contrastRatio.toFixed(2).replace(".",",")," : 1"]})]},e.hex))]})}function j(n={}){const{wrapper:r}=n.components||{};return r?t(r,{...n,children:t(i,{})}):i();function i(){const e=Object.assign({h2:"h2",p:"p",a:"a"},n.components);return a(u,{children:[t(e.h2,{children:"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435"}),`
`,t(e.p,{children:`\u0412 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043F\u0430\u043B\u0438\u0442\u0440\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u044B \u0446\u0432\u0435\u0442\u0430, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430. \u041D\u0438\u0436\u0435 \u0434\u043B\u044F
\u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0435\u0433\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435, \u0448\u0435\u0441\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u0435\u0440\u0438\u0447\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u043A\u043E\u0434 \u0446\u0432\u0435\u0442\u0430,
\u0435\u0441\u043B\u0438 \u043E\u043D \u0438\u043C\u0435\u0435\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0433\u0440\u0430\u0434\u0430\u0446\u0438\u0439, \u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442 \u043F\u043E \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044E \u043A \u0431\u0435\u043B\u043E\u043C\u0443 \u0446\u0432\u0435\u0442\u0443.`}),`
`,t(o,{name:"Sibur",colors:[{hex:"#008C95",contrastRatio:4.04}]}),`
`,t(e.p,{children:"\u0424\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0446\u0432\u0435\u0442 \u0421\u0438\u0431\u0443\u0440\u0430. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u0430\u043A\u0446\u0435\u043D\u0442\u043D\u044B\u0439 \u0446\u0432\u0435\u0442."}),`
`,t(o,{name:"Text",colors:[{hex:"#1E2021",contrastRatio:16.35}]}),`
`,t(e.p,{children:`\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0446\u0432\u0435\u0442 \u0432 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u0430, \u0438\u043A\u043E\u043D\u043E\u043A, \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0439
\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432.`}),`
`,t(o,{name:"Whitesmoke",colors:[{grade:60,hex:"#757677",contrastRatio:4.55}]}),`
`,t(e.p,{children:`\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0446\u0432\u0435\u0442 \u0434\u043B\u044F \u043D\u0430\u0431\u043E\u0440\u0430 \u0442\u0435\u043A\u0441\u0442\u0430 \u043D\u0430 \u0431\u0435\u043B\u043E\u043C \u0444\u043E\u043D\u0435. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F
\u0432\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438.`}),`
`,a(s,{spacing:24,children:[t(c,{width:"content",children:t(o,{name:"BG",colors:[{hex:"#EEF0F1",contrastRatio:1.14}]})}),t(c,{width:"content",children:t(o,{name:"BG Island",colors:[{hex:"#FFFFFF",contrastRatio:1}]})})]}),`
`,t(e.p,{children:`\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u043A\u0430\u043A \u0446\u0432\u0435\u0442\u0430 \u0434\u043B\u044F \u0444\u043E\u043D\u043E\u0432. \u0412 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0435 \u0441\u043B\u0443\u0447\u0430\u0435\u0432 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u0421\u0438\u0431\u0443\u0440\u0430
\u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u0441\u043C\u044B\u0441\u043B\u043E\u0432\u044B\u0435 \u0431\u043B\u043E\u043A\u0438 \u0431\u0435\u043B\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 (\xAB\u043E\u0441\u0442\u0440\u043E\u0432\u0430\xBB), \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435 \u043D\u0430
\u0441\u0435\u0440\u043E\u043C \u0444\u043E\u043D\u0435.`}),`
`,a(s,{spacing:24,children:[t(c,{width:"content",children:t(o,{name:"Hover",colors:[{hex:"#1E202114",contrastRatio:1.16}]})}),t(c,{width:"content",children:t(o,{name:"Click",colors:[{hex:"#1E202129",contrastRatio:1.38}]})})]}),`
`,t(e.p,{children:"\u0426\u0432\u0435\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0438 \u043A\u043B\u0438\u043A\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E."}),`
`,t(e.h2,{children:"\u0413\u0440\u0430\u0434\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u043E\u0433\u043E \u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u043D\u043E\u0441\u0442\u044C"}),`
`,a(s,{spacing:24,children:[t(c,{width:"content",children:t(o,{name:"Whitesmoke",colors:[{grade:10,hex:"#E9E9E9",contrastRatio:1.21},{grade:20,hex:"#D2D2D3",contrastRatio:1.51},{grade:30,hex:"#BCBCBC",contrastRatio:1.9},{grade:40,hex:"#A5A6A6",contrastRatio:2.44},{grade:50,hex:"#8E8F90",contrastRatio:3.23},{grade:60,hex:"#757677",contrastRatio:4.55},{grade:70,hex:"#626364",contrastRatio:6.02},{grade:80,hex:"#4B4D4D",contrastRatio:8.5},{grade:90,hex:"#353637",contrastRatio:12}]})}),a(c,{children:[t(w,{size:8}),t(e.p,{children:`\u0421\u0435\u0440\u044B\u0439 \u0446\u0432\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0448\u0438\u0440\u043E\u043A\u043E\u0433\u043E \u0441\u043F\u0435\u043A\u0442\u0440\u0430 \u0437\u0430\u0434\u0430\u0447: \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F
\u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430,
\u043A\u0430\u043A \u0444\u043E\u043D\u043E\u0432\u044B\u0439 \u0446\u0432\u0435\u0442.`}),a(e.p,{children:[`\u041F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0433\u0440\u0430\u0434\u0430\u0446\u0438\u0439 \u0441\u0435\u0440\u043E\u0433\u043E \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0446\u0432\u0435\u0442\u043E\u0432 \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E
\u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u044F\u0435\u0442 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C
`,t(e.a,{href:"https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast",children:"\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430 WCAG \u0443\u0440\u043E\u0432\u043D\u044F AA"}),`:
\u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u043D\u043E\u0441\u0442\u0438 \u0442\u0435\u043A\u0441\u0442\u0430 \u043A \u0444\u043E\u043D\u0443 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 4,5.`]}),t(e.p,{children:`\u041D\u0430 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0435 \u044D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0440\u0430\u0437\u043D\u0438\u0446\u0430 \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u0434\u0430\u043C\u0438 \u0446\u0432\u0435\u0442\u043E\u0432 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043D\u0435
\u043C\u0435\u043D\u0435\u0435 60. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043D\u0430 \u0444\u043E\u043D\u0435 \u0446\u0432\u0435\u0442\u0430 Whitesmoke 10 \u043D\u0443\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442
\u0446\u0432\u0435\u0442\u0430 Whitesmoke 70 \u0438\u043B\u0438 \u0432\u044B\u0448\u0435.`}),t(e.p,{children:"\u041F\u0440\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E\u043C \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u0435 \u0433\u0440\u0430\u043D\u0438\u0446 \u0444\u043E\u043D\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043B\u0438\u043D\u0438\u044E."})]})]}),`
`,t(e.h2,{children:"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430"}),`
`,t(e.p,{children:`\u0426\u0432\u0435\u0442\u0430 \u0432 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u0430\u043B\u0438\u0442\u0440\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F
\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F: \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0434\u043B\u044F \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430, \u0441\u0441\u044B\u043B\u043E\u043A \u0438\u043B\u0438 \u0432 \u0442\u043E\u0441\u0442\u0430\u0445.`}),`
`,a(s,{spacing:24,children:[a(c,{width:"content",children:[t(o,{name:"Homeworld",colors:[{grade:50,hex:"#1B96DD",contrastRatio:3.25}]}),t(o,{name:"Poppy Red",colors:[{grade:40,hex:"#DD363C",contrastRatio:4.5}]})]}),a(c,{width:"content",children:[t(o,{name:"Militant Vegan",colors:[{grade:50,hex:"#29A354",contrastRatio:3.22}]}),t(o,{name:"Nebula",colors:[{grade:70,hex:"#A10DCF",contrastRatio:6.04}]})]}),t(c,{width:"content",children:t(o,{name:"Gold Drop",colors:[{grade:40,hex:"#F9891C",contrastRatio:2.43}]})})]}),`
`,t(e.h2,{children:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430"}),`
`,t(e.p,{children:`\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F, \u0435\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u044B \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0442\u0435\u043D\u043A\u0438 \u0446\u0432\u0435\u0442\u043E\u0432,
\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0432 \u0438\u043B\u043B\u044E\u0441\u0442\u0440\u0430\u0446\u0438\u044F\u0445 \u0438\u043B\u0438 \u0432 \u0441\u0442\u0430\u0442\u0443\u0441\u0430\u0445. \u041A \u043D\u0438\u043C \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u044B \u0442\u0435 \u0436\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430
\u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u043D\u043E\u0441\u0442\u0438, \u0447\u0442\u043E \u0438 \u043A \u0441\u0435\u0440\u044B\u043C \u0446\u0432\u0435\u0442\u0430\u043C.`}),`
`,a(s,{spacing:24,children:[a(c,{width:"content",children:[t(o,{name:"Blue Chill",colors:[{grade:10,hex:"#D9EEEF",contrastRatio:1.2},{grade:20,hex:"#AEDADD",contrastRatio:1.51},{grade:30,hex:"#84C7CC",contrastRatio:1.9},{grade:40,hex:"#57B3B9",contrastRatio:2.45},{grade:50,hex:"#279EA5",contrastRatio:3.22},{grade:60,hex:"#008C95",contrastRatio:4.5},{grade:70,hex:"#006E75",contrastRatio:6.02},{grade:80,hex:"#00565B",contrastRatio:8.46},{grade:90,hex:"#003D40",contrastRatio:12.05}]}),t(o,{name:"Gold Drop",colors:[{grade:10,hex:"#FEE5C3",contrastRatio:1.21},{grade:20,hex:"#FCC988",contrastRatio:1.51},{grade:30,hex:"#FBAB51",contrastRatio:1.89},{grade:40,hex:"#F9891C",contrastRatio:2.43},{grade:50,hex:"#DF7016",contrastRatio:3.24},{grade:60,hex:"#BE5A13",contrastRatio:4.5},{grade:70,hex:"#A24810",contrastRatio:6.02},{grade:80,hex:"#83340C",contrastRatio:8.57},{grade:90,hex:"#61230A",contrastRatio:11.98}]})]}),a(c,{width:"content",children:[t(o,{name:"Homeworld",colors:[{grade:10,hex:"#D6ECF9",contrastRatio:1.21},{grade:20,hex:"#ABD9F4",contrastRatio:1.51},{grade:30,hex:"#7DC4ED",contrastRatio:1.91},{grade:40,hex:"#4DAFE7",contrastRatio:2.44},{grade:50,hex:"#1B96DD",contrastRatio:3.25},{grade:60,hex:"#1B7CB7",contrastRatio:4.55},{grade:70,hex:"#13689A",contrastRatio:6.04},{grade:80,hex:"#0E5178",contrastRatio:8.51},{grade:90,hex:"#0A3A55",contrastRatio:12}]}),t(o,{name:"Poppy Red",colors:[{grade:10,hex:"#FCE4E5",contrastRatio:1.2},{grade:20,hex:"#F9C7CA",contrastRatio:1.49},{grade:30,hex:"#F6A6AC",contrastRatio:1.91},{grade:40,hex:"#F3868E",contrastRatio:2.43},{grade:50,hex:"#EF5E67",contrastRatio:3.24},{grade:60,hex:"#DD363C",contrastRatio:4.5},{grade:70,hex:"#C6101C",contrastRatio:6.01},{grade:80,hex:"#9C0D16",contrastRatio:8.45},{grade:90,hex:"#710910",contrastRatio:12}]})]}),a(c,{width:"content",children:[t(o,{name:"Militant Vegan",colors:[{grade:10,hex:"#DAEFE1",contrastRatio:1.2},{grade:20,hex:"#B0DDC0",contrastRatio:1.5},{grade:30,hex:"#84CB9D",contrastRatio:1.9},{grade:40,hex:"#5AB97C",contrastRatio:2.42},{grade:50,hex:"#29A354",contrastRatio:3.25},{grade:60,hex:"#14883E",contrastRatio:4.51},{grade:70,hex:"#0E7332",contrastRatio:5.97},{grade:80,hex:"#0B5927",contrastRatio:8.49},{grade:90,hex:"#083F1C",contrastRatio:12.08}]}),t(o,{name:"Nebula",colors:[{grade:10,hex:"#F5E4FB",contrastRatio:1.2},{grade:20,hex:"#EBC6F6",contrastRatio:1.5},{grade:30,hex:"#E0A7F1",contrastRatio:1.91},{grade:40,hex:"#D589EC",contrastRatio:2.43},{grade:50,hex:"#C763F1",contrastRatio:3.23},{grade:60,hex:"#B638E0",contrastRatio:4.52},{grade:70,hex:"#A10DCF",contrastRatio:6.04},{grade:80,hex:"#7E0AA2",contrastRatio:8.56},{grade:90,hex:"#5B0875",contrastRatio:12.09}]})]})]}),`
`,t(e.p,{children:`\u0412 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u0445 \u0421\u0438\u0431\u0443\u0440\u0430 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0435 \u0446\u0432\u0435\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u0441\u044F \u0432
\u044D\u0442\u043E\u043C \u0433\u0430\u0439\u0434\u043B\u0430\u0439\u043D\u0435.`})]})}}export{j as default};
