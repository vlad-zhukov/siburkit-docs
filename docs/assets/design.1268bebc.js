import{_ as E}from"./index.89b8945d.js";import{d as s,j as l,l as i,x as M}from"./vendor.3a0021aa.js";import{aD as g}from"./index.e3aa6b11.js";import{_ as h}from"./index.0a9757fa.js";import"./Status.49b026cf.js";import{I as o}from"./Image.3a65a19e.js";var P="/assets/img-1.254a2155.png",f="/assets/img-2.465375fd.png",R="/assets/img-3.4e925a70.png",S="/assets/img-4.f2f47a5e.png";function w(t={}){const{wrapper:n}=t.components||{};return n?s(n,{...t,children:s(r,{})}):r();function r(){const a=Object.assign({p:"p",code:"code",a:"a",h2:"h2",hr:"hr",ul:"ul",li:"li"},t.components),{CodePreview:d}=a;return d||x("CodePreview",!0),l(i,{children:[s(d,{code:`<pre class="shiki one-dark-pro twoslash lsp" style="background-color: #282c34; color: #abb2bf" preview="true"><div class="language-id">tsx</div><div class='code-container'><code><div class='line'><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> {</span></div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #E06C75"><data-lsp lsp='(alias) function createModal&lt;Props extends Record&lt;string, any>>(args: CreateModalArgs&lt;Props>): {&#10;    open: (props: Props &amp; Partial&lt;ModalProps>) => void;&#10;    dismiss: () => void;&#10;}&#10;import createModal' >createModal</data-lsp></span><span style="color: #ABB2BF">,</span></div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #E06C75"><data-lsp lsp='(alias) function ModalTitle({ children }: ModalDescriptionProps): JSX.Element&#10;import ModalTitle' >ModalTitle</data-lsp></span><span style="color: #ABB2BF">,</span></div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #E06C75"><data-lsp lsp='(alias) function ModalDescription({ children }: ModalDescriptionProps): JSX.Element&#10;import ModalDescription' >ModalDescription</data-lsp></span><span style="color: #ABB2BF">,</span></div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #E06C75"><data-lsp lsp='(alias) function ModalButtons({ children }: ModalButtonsProps): JSX.Element&#10;import ModalButtons' >ModalButtons</data-lsp></span><span style="color: #ABB2BF">,</span></div><div class='line'><span style="color: #ABB2BF">} </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&apos;@siburkit/modal&apos;</span><span style="color: #ABB2BF">;</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B"><data-lsp lsp='const mySidePage: {&#10;    open: (props: Record&lt;string, any> &amp; Partial&lt;ModalProps>) => void;&#10;    dismiss: () => void;&#10;}' >mySidePage</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF"><data-lsp lsp='(alias) createModal&lt;Record&lt;string, any>>(args: CreateModalArgs&lt;Record&lt;string, any>>): {&#10;    open: (props: Record&lt;string, any> &amp; Partial&lt;ModalProps>) => void;&#10;    dismiss: () => void;&#10;}&#10;import createModal' >createModal</data-lsp></span><span style="color: #ABB2BF">({</span></div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #E06C75"><data-lsp lsp='(property) CreateModalArgs&lt;Props extends Record&lt;string, any>>.kind: ModalKind' >kind</data-lsp></span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&apos;side-page&apos;</span><span style="color: #ABB2BF">,</span></div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #61AFEF"><data-lsp lsp='(method) CreateModalArgs&lt;Record&lt;string, any>>.component(this: void, props: Record&lt;string, any> &amp; ModalProps): JSX.Element' >component</data-lsp></span><span style="color: #ABB2BF">: ({ </span><span style="color: #E06C75"><data-lsp lsp='(parameter) onDismiss: (this: void) => void' >onDismiss</data-lsp></span><span style="color: #ABB2BF"> }) </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> (</span></div><div class='line'><span style="color: #ABB2BF">        &lt;&gt;</span></div><div class='line'><span style="color: #ABB2BF">            &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function ModalTitle({ children }: ModalDescriptionProps): JSX.Element&#10;import ModalTitle' >ModalTitle</data-lsp></span><span style="color: #ABB2BF">&gt;\u0421\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436&lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function ModalTitle({ children }: ModalDescriptionProps): JSX.Element&#10;import ModalTitle' >ModalTitle</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">            &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function ModalDescription({ children }: ModalDescriptionProps): JSX.Element&#10;import ModalDescription' >ModalDescription</data-lsp></span><span style="color: #ABB2BF">&gt;\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436\u0430&lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function ModalDescription({ children }: ModalDescriptionProps): JSX.Element&#10;import ModalDescription' >ModalDescription</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">            &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) const Gap: React.NamedExoticComponent&lt;GapProps>&#10;import Gap' >Gap</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #D19A66"><data-lsp lsp='(property) GapProps.size: number' >size</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #D19A66">16</span><span style="color: #C678DD">}</span><span style="color: #ABB2BF"> /&gt;</span></div><div class='line'><span style="color: #ABB2BF">            &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Text({ size, weight, tag, className, children, ...rest }: TextProps): JSX.Element&#10;import Text' >Text</data-lsp></span><span style="color: #ABB2BF">&gt;</span><span style="color: #C678DD">{</span><span style="color: #E5C07B"><data-lsp lsp='const LOREM_IPSUM: JSX.Element' >LOREM_IPSUM</data-lsp></span><span style="color: #C678DD">}</span><span style="color: #ABB2BF">&lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Text({ size, weight, tag, className, children, ...rest }: TextProps): JSX.Element&#10;import Text' >Text</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">            &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function ModalButtons({ children }: ModalButtonsProps): JSX.Element&#10;import ModalButtons' >ModalButtons</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) const Button: React.ForwardRefExoticComponent&lt;ButtonProps &amp; React.RefAttributes&lt;HTMLButtonElement>>&#10;import Button' >Button</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #D19A66"><data-lsp lsp='(property) ButtonProps.size?: ButtonSize' >size</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #E5C07B"><data-lsp lsp='(alias) enum ButtonSize&#10;import ButtonSize' >ButtonSize</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E06C75"><data-lsp lsp='(enum member) ButtonSize.L = "l"' >L</data-lsp></span><span style="color: #C678DD">}</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66"><data-lsp lsp='(property) onClick?: React.MouseEventHandler&lt;HTMLButtonElement> | undefined' >onClick</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #E06C75"><data-lsp lsp='(parameter) onDismiss: (this: void) => void' >onDismiss</data-lsp></span><span style="color: #C678DD">}</span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                    \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</span></div><div class='line'><span style="color: #ABB2BF">                &lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) const Button: React.ForwardRefExoticComponent&lt;ButtonProps &amp; React.RefAttributes&lt;HTMLButtonElement>>&#10;import Button' >Button</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) const Button: React.ForwardRefExoticComponent&lt;ButtonProps &amp; React.RefAttributes&lt;HTMLButtonElement>>&#10;import Button' >Button</data-lsp></span></div><div class='line'><span style="color: #ABB2BF">                    </span><span style="color: #D19A66"><data-lsp lsp='(property) ButtonProps.kind?: ButtonKind' >kind</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #E5C07B"><data-lsp lsp='(alias) enum ButtonKind&#10;import ButtonKind' >ButtonKind</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E06C75"><data-lsp lsp='(enum member) ButtonKind.PLAIN = "plain"' >PLAIN</data-lsp></span><span style="color: #C678DD">}</span></div><div class='line'><span style="color: #ABB2BF">                    </span><span style="color: #D19A66"><data-lsp lsp='(property) ButtonProps.size?: ButtonSize' >size</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #E5C07B"><data-lsp lsp='(alias) enum ButtonSize&#10;import ButtonSize' >ButtonSize</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E06C75"><data-lsp lsp='(enum member) ButtonSize.L = "l"' >L</data-lsp></span><span style="color: #C678DD">}</span></div><div class='line'><span style="color: #ABB2BF">                    </span><span style="color: #D19A66"><data-lsp lsp='(property) onClick?: React.MouseEventHandler&lt;HTMLButtonElement> | undefined' >onClick</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #E06C75"><data-lsp lsp='(parameter) onDismiss: (this: void) => void' >onDismiss</data-lsp></span><span style="color: #C678DD">}</span></div><div class='line'><span style="color: #ABB2BF">                &gt;</span></div><div class='line'><span style="color: #ABB2BF">                    \u041E\u0442\u043C\u0435\u043D\u0430</span></div><div class='line'><span style="color: #ABB2BF">                &lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) const Button: React.ForwardRefExoticComponent&lt;ButtonProps &amp; React.RefAttributes&lt;HTMLButtonElement>>&#10;import Button' >Button</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">            &lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function ModalButtons({ children }: ModalButtonsProps): JSX.Element&#10;import ModalButtons' >ModalButtons</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">        &lt;/&gt;</span></div><div class='line'><span style="color: #ABB2BF">    ),</span></div><div class='line'><span style="color: #ABB2BF">});</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> () </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> {</span></div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> (</span></div><div class='line'><span style="color: #ABB2BF">        &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) const Button: React.ForwardRefExoticComponent&lt;ButtonProps &amp; React.RefAttributes&lt;HTMLButtonElement>>&#10;import Button' >Button</data-lsp></span></div><div class='line'><span style="color: #ABB2BF">            </span><span style="color: #D19A66"><data-lsp lsp='(property) ButtonProps.kind?: ButtonKind' >kind</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #E5C07B"><data-lsp lsp='(alias) enum ButtonKind&#10;import ButtonKind' >ButtonKind</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E06C75"><data-lsp lsp='(enum member) ButtonKind.SECONDARY = "secondary"' >SECONDARY</data-lsp></span><span style="color: #C678DD">}</span></div><div class='line'><span style="color: #ABB2BF">            </span><span style="color: #D19A66"><data-lsp lsp='(property) ButtonProps.size?: ButtonSize' >size</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #E5C07B"><data-lsp lsp='(alias) enum ButtonSize&#10;import ButtonSize' >ButtonSize</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E06C75"><data-lsp lsp='(enum member) ButtonSize.L = "l"' >L</data-lsp></span><span style="color: #C678DD">}</span></div><div class='line'><span style="color: #ABB2BF">            </span><span style="color: #D19A66"><data-lsp lsp='(property) onClick?: React.MouseEventHandler&lt;HTMLButtonElement> | undefined' >onClick</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #ABB2BF">() </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> {</span></div><div class='line'><span style="color: #ABB2BF">                </span><span style="color: #E5C07B"><data-lsp lsp='const mySidePage: {&#10;    open: (props: Record&lt;string, any> &amp; Partial&lt;ModalProps>) => void;&#10;    dismiss: () => void;&#10;}' >mySidePage</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF"><data-lsp lsp='(property) open: (props: Record&lt;string, any> &amp; Partial&lt;ModalProps>) => void' >open</data-lsp></span><span style="color: #ABB2BF">({});</span></div><div class='line'><span style="color: #ABB2BF">            }</span><span style="color: #C678DD">}</span></div><div class='line'><span style="color: #ABB2BF">        &gt;</span></div><div class='line'><span style="color: #ABB2BF">            \u041E\u0442\u043A\u0440\u044B\u0442\u044C</span></div><div class='line'><span style="color: #ABB2BF">        &lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) const Button: React.ForwardRefExoticComponent&lt;ButtonProps &amp; React.RefAttributes&lt;HTMLButtonElement>>&#10;import Button' >Button</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">    );</span></div><div class='line'><span style="color: #ABB2BF">};</span></div></code></div></pre>`,preview:async()=>{const{Button:p,ButtonKind:c,ButtonSize:e}=h,{Text:u}=E,{Gap:y}=M,m=s(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),{createModal:v,ModalTitle:A,ModalDescription:C,ModalButtons:D}=g,F=v({kind:"side-page",component:({onDismiss:B})=>l(i,{children:[s(A,{children:"\u0421\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436"}),s(C,{children:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436\u0430"}),s(y,{size:16}),s(u,{children:m}),l(D,{children:[s(p,{size:e.L,onClick:B,children:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}),s(p,{kind:c.PLAIN,size:e.L,onClick:B,children:"\u041E\u0442\u043C\u0435\u043D\u0430"})]})]})});return()=>s(p,{kind:c.SECONDARY,size:e.L,onClick:()=>{F.open({})},children:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C"})}}),`
`,l(a.p,{children:[s(a.code,{children:"SidePage"}),` (\u0441\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436) \u2014 \u044D\u0442\u043E \u0440\u0430\u0437\u043D\u043E\u0432\u0438\u0434\u043D\u043E\u0441\u0442\u044C \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u044B\u0435\u0437\u0436\u0430\u0435\u0442
\u0438\u0437-\u0437\u0430 \u043F\u0440\u0430\u0432\u043E\u0439 \u0433\u0440\u0430\u043D\u0438\u0446\u044B \u0438 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u0432\u0441\u044E \u0432\u044B\u0441\u043E\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0437\u0430\u0442\u0435\u043C\u043D\u044F\u044F \u0438 \u0431\u043B\u043E\u043A\u0438\u0440\u0443\u044F \u0435\u0451
\u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435. \u041C\u043E\u0436\u0435\u0442 \u043F\u043E\u044F\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u043A\u0430\u043A \u043E\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0442\u0430\u043A \u0438 \u043F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438
\u0430\u0434\u0440\u0435\u0441\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B.`]}),`
`,l(a.p,{children:["\u0421\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043D\u0430\u043B\u043E\u0433\u043E\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 ",s(a.a,{href:"/dialog",children:s(a.code,{children:"Dialog"})}),` \u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0432 \u0442\u0435\u0445
\u0441\u043B\u0443\u0447\u0430\u044F\u0445, \u043A\u043E\u0433\u0434\u0430 \u043D\u0443\u0436\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0438 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E
\u0434\u0430\u043D\u043D\u044B\u0445.`]}),`
`,l(a.p,{children:["\u0421\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436 \u0438\u043C\u0435\u0435\u0442 \u0442\u0430\u043A\u0436\u0435 ",s(a.a,{href:"#non-modal",children:"\u043D\u0435\u043C\u043E\u0434\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442"}),"."]}),`
`,s(a.h2,{children:"\u0420\u0430\u0437\u043C\u0435\u0440 \u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435"}),`
`,s(a.p,{children:`\u041A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u043E, \u0441\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436 \xAB\u043F\u0440\u0438\u043B\u0435\u043F\u043B\u0435\u043D\xBB \u043A \u043F\u0440\u0430\u0432\u043E\u0439 \u0447\u0430\u0441\u0442\u0438 \u043E\u043A\u043D\u0430 \u0438 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u0432\u0441\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0443\u044E
\u0432\u044B\u0441\u043E\u0442\u0443, \u0448\u0438\u0440\u0438\u043D\u0430 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0430, \u043D\u043E \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u0448\u0438\u0440\u0438\u043D\u044B \u043E\u043A\u043D\u0430.`}),`
`,s(a.p,{children:`\u0421\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436 \u043C\u043E\u0436\u0435\u0442 \u043F\u0435\u0440\u0435\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0431\u043E\u0301\u043B\u044C\u0448\u0443\u044E \u0447\u0430\u0441\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u0430\u044F
\u0448\u0438\u0440\u0438\u043D\u0430 \u2014 800px.`}),`
`,s(o,{src:P}),`
`,s(a.h2,{children:"\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435"}),`
`,s(a.p,{children:`\u0421\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430, \u043F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 (\u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438), \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430,
\u0431\u043B\u043E\u043A\u0430 \u0441 \u043A\u043D\u043E\u043F\u043A\u0430\u043C\u0438 \u0438 \u043A\u0440\u0435\u0441\u0442\u0438\u043A\u0430 (\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442).`}),`
`,s(a.p,{children:`\u041A\u043D\u043E\u043F\u043A\u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u044E\u0442\u0441\u044F \u0441\u043B\u0435\u0432\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043E, \u043E\u0442 \u0431\u043E\u043B\u0435\u0435 \u0432\u0430\u0436\u043D\u044B\u0445 (\u0421\u0422\u0410) \u043A \u043C\u0435\u043D\u0435\u0435 \u0432\u0430\u0436\u043D\u044B\u043C. \u041A\u043D\u043E\u043F\u043A\u0438
\u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043A\u0430\u043A \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u043C\u0438 (\u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u043C\u0438 \u0441\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436), \u0442\u0430\u043A \u0438 \u0438\u0437\u043C\u0435\u043D\u044F\u044E\u0449\u0438\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u0435
\u0441\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436\u0430 \u0431\u0435\u0437 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F.`}),`
`,s(a.p,{children:`\u0412 \u043F\u0440\u0430\u0432\u043E\u043C \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u0443\u0433\u043B\u0443 \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043A\u0440\u0435\u0441\u0442\u0438\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0445\u043E\u043B\u043E\u0434\u043E\u0441. \u0422\u0430\u043A
\u0436\u0435 \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0445\u043E\u043B\u043E\u0434\u043E\u0441 \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 Esc. \u0425\u043E\u043B\u043E\u0434\u043E\u0441 \u0441 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B
\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0436\u0430\u0432 \u043D\u0430 \u0437\u0430\u0442\u0435\u043C\u043D\u0451\u043D\u043D\u0443\u044E \u043E\u0441\u043D\u043E\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.`}),`
`,s(o,{src:f}),`
`,s(a.h2,{children:"\u041D\u0435\u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 [#non-modal]"}),`
`,s(a.p,{children:`\u0421\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436 \u043C\u043E\u0436\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u043D\u0435\u043C\u043E\u0434\u0430\u043B\u044C\u043D\u044B\u043C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0435. \u0412 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u0441\u0435
\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u043C\u0438, \u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439
\u0432\u044B\u0437\u0432\u0430\u043B \u0441\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436, \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E \u0432\u044B\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F.`}),`
`,s(a.p,{children:`\u0422\u0430\u043A\u043E\u0439 \u0441\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0435\u0440\u0435\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u0414\u043B\u044F \u0441\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436\u0435\u0439
\u043E\u0434\u043D\u043E\u0433\u043E \u0442\u0438\u043F\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u0443\u044E \u0448\u0438\u0440\u0438\u043D\u0443, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u043C\u0435\u0436\u0434\u0443
\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u043E\u043D\u0430 \u043D\u0435 \u043C\u0435\u043D\u044F\u043B\u0430\u0441\u044C. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430 \u2014 480px.`}),`
`,s(a.p,{children:"\u0421\u043A\u0440\u043E\u043B\u043B\u0438\u0442\u044C\u0441\u044F \u043C\u043E\u0436\u0435\u0442 \u043A\u0430\u043A \u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u0442\u0430\u043A \u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u0432\u043D\u0443\u0442\u0440\u0438 \u0441\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436\u0430."}),`
`,s(o,{src:R}),`
`,s(a.p,{children:`\u0422\u0430\u043A\u0436\u0435 \u0431\u044B\u0432\u0430\u044E\u0442 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F, \u043A\u043E\u0433\u0434\u0430 \u0441\u0430\u0439\u0434\u043F\u0435\u0439\u0434\u0436 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u0435\u043F\u043B\u0451\u043D \u043A \u043F\u0440\u0430\u0432\u043E\u0439 \u0447\u0430\u0441\u0442\u0438 \u044D\u043A\u0440\u0430\u043D\u0430, \u0430
\u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043C\u0435\u043D\u044E.`}),`
`,s(o,{src:S}),`
`,s(a.hr,{}),`
`,s(a.p,{children:"TODO:"}),`
`,l(a.ul,{children:[`
`,s(a.li,{children:"\u041F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 (\u0444\u043E\u043A\u0443\u0441, \u0441\u043A\u0440\u043E\u043B\u043B, \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u043F\u043E \u043A\u043B\u0438\u043A\u0443 \u0438 ESC)"}),`
`,s(a.li,{children:"\u041D\u0430\u043B\u043E\u0436\u0435\u043D\u0438\u0435"}),`
`]})]})}}function x(t,n){throw new Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};
