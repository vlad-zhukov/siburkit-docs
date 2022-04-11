import{_ as v}from"./index.5402eca9.js";import{_ as C}from"./index.e1e04b77.js";import{j as s,r as D,a as t}from"./index.2dd3319a.js";import{_ as g}from"./index.1dd07aa7.js";import"./Popover.module.0ac43eb9.js";function h(a={}){const{wrapper:l}=a.components||{};return l?s(l,{...a,children:s(o,{})}):o();function o(){const u=Object.assign({div:"div"},a.components),{CodePreview:r}=u;return r||F("CodePreview",!0),s(r,{code:`<pre class="shiki one-dark-pro twoslash lsp" style="background-color: #282c34; color: #abb2bf" preview="true"><div class="language-id">tsx</div><div class='code-container'><code><div class='line'><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> { </span><span style="color: #E06C75"><data-lsp lsp='(alias) function RadioGroup({ selected, onChange, children, error, className }: RadioGroupProps): JSX.Element&#10;import RadioGroup' >RadioGroup</data-lsp></span><span style="color: #ABB2BF">, </span><span style="color: #E06C75"><data-lsp lsp='(alias) function Radio({ value, disabled, children, ...rest }: RadioProps): JSX.Element&#10;import Radio' >Radio</data-lsp></span><span style="color: #ABB2BF"> } </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&apos;@siburkit/selections&apos;</span><span style="color: #ABB2BF">;</span></div><div class='line'><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> { </span><span style="color: #E06C75"><data-lsp lsp='(alias) function Heading({ level, className, children, ...rest }: HeadingProps): JSX.Element&#10;import Heading' >Heading</data-lsp></span><span style="color: #ABB2BF">, </span><span style="color: #E06C75"><data-lsp lsp='(alias) function Text({ size, weight, tag, className, children, ...rest }: TextProps): JSX.Element&#10;import Text' >Text</data-lsp></span><span style="color: #ABB2BF">, </span><span style="color: #E06C75"><data-lsp lsp='(alias) function HintMessage(props: HintMessageProps): JSX.Element | null&#10;import HintMessage' >HintMessage</data-lsp></span><span style="color: #ABB2BF"> } </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&apos;@siburkit/typography&apos;</span><span style="color: #ABB2BF">;</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B"><data-lsp lsp='const SampleOption: {&#10;    PERMANENT: string;&#10;    TEMPORARY: string;&#10;    ACTING: string;&#10;}' >SampleOption</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> {</span></div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #E06C75"><data-lsp lsp='(property) PERMANENT: string' >PERMANENT</data-lsp></span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&apos;PERMANENT&apos;</span><span style="color: #ABB2BF">,</span></div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #E06C75"><data-lsp lsp='(property) TEMPORARY: string' >TEMPORARY</data-lsp></span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&apos;TEMPORARY&apos;</span><span style="color: #ABB2BF">,</span></div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #E06C75"><data-lsp lsp='(property) ACTING: string' >ACTING</data-lsp></span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&apos;ACTING&apos;</span><span style="color: #ABB2BF">,</span></div><div class='line'><span style="color: #ABB2BF">};</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> () </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> {</span></div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> [</span><span style="color: #E5C07B"><data-lsp lsp='const selected: string' >selected</data-lsp></span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B"><data-lsp lsp='const setSelected: React.Dispatch&lt;React.SetStateAction&lt;string>>' >setSelected</data-lsp></span><span style="color: #ABB2BF">] </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B"><data-lsp lsp='(alias) namespace React&#10;import React' >React</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF"><data-lsp lsp='function React.useState&lt;string>(initialState: string | (() => string)): [string, React.Dispatch&lt;React.SetStateAction&lt;string>>] (+1 overload)' >useState</data-lsp></span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B"><data-lsp lsp='const SampleOption: {&#10;    PERMANENT: string;&#10;    TEMPORARY: string;&#10;    ACTING: string;&#10;}' >SampleOption</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E06C75"><data-lsp lsp='(property) PERMANENT: string' >PERMANENT</data-lsp></span><span style="color: #ABB2BF">);</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> (</span></div><div class='line'><span style="color: #ABB2BF">        &lt;</span><span style="color: #E06C75"><data-lsp lsp='(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps&lt;React.HTMLAttributes&lt;HTMLDivElement>, HTMLDivElement>' >div</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #D19A66"><data-lsp lsp='(property) React.HTMLAttributes&lt;HTMLDivElement>.style?: React.CSSProperties | undefined' >style</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #ABB2BF">{ </span><span style="color: #E06C75"><data-lsp lsp='(property) StandardLonghandProperties&lt;string | number, string &amp; {}>.maxWidth?: Property.MaxWidth&lt;string | number> | undefined' >maxWidth</data-lsp></span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">320</span><span style="color: #ABB2BF"> }</span><span style="color: #C678DD">}</span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">            &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Heading({ level, className, children, ...rest }: HeadingProps): JSX.Element&#10;import Heading' >Heading</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #D19A66"><data-lsp lsp='(property) HeadingProps.level: HeadingLevel' >level</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #D19A66">4</span><span style="color: #C678DD">}</span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                \u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u0418\u0432\u0430\u043D\u043E\u0432\u0430 \u0410.\u041D. \u043D\u0430 \u0440\u043E\u043B\u044C \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430</span></div><div class='line'><span style="color: #ABB2BF">            &lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Heading({ level, className, children, ...rest }: HeadingProps): JSX.Element&#10;import Heading' >Heading</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">            &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) const Gap: React.NamedExoticComponent&lt;GapProps>&#10;import Gap' >Gap</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #D19A66"><data-lsp lsp='(property) GapProps.size: number' >size</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #D19A66">24</span><span style="color: #C678DD">}</span><span style="color: #ABB2BF"> /&gt;</span></div><div class='line'><span style="color: #ABB2BF">            &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function RadioGroup({ selected, onChange, children, error, className }: RadioGroupProps): JSX.Element&#10;import RadioGroup' >RadioGroup</data-lsp></span></div><div class='line'><span style="color: #ABB2BF">                </span><span style="color: #D19A66"><data-lsp lsp='(property) RadioGroupProps.selected: string | undefined' >selected</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #E06C75"><data-lsp lsp='const selected: string' >selected</data-lsp></span><span style="color: #C678DD">}</span></div><div class='line'><span style="color: #ABB2BF">                </span><span style="color: #D19A66"><data-lsp lsp='(method) RadioGroupProps.onChange(value: string): void' >onChange</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75"><data-lsp lsp='(parameter) value: string' >value</data-lsp></span><span style="color: #ABB2BF">) </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> {</span></div><div class='line'><span style="color: #ABB2BF">                    </span><span style="color: #61AFEF"><data-lsp lsp='const setSelected: (value: React.SetStateAction&lt;string>) => void' >setSelected</data-lsp></span><span style="color: #ABB2BF">(</span><span style="color: #E06C75"><data-lsp lsp='(parameter) value: string' >value</data-lsp></span><span style="color: #ABB2BF">);</span></div><div class='line'><span style="color: #ABB2BF">                }</span><span style="color: #C678DD">}</span></div><div class='line'><span style="color: #ABB2BF">            &gt;</span></div><div class='line'><span style="color: #ABB2BF">                &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Radio({ value, disabled, children, ...rest }: RadioProps): JSX.Element&#10;import Radio' >Radio</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #D19A66"><data-lsp lsp='(property) RadioProps.value: string' >value</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #E5C07B"><data-lsp lsp='const SampleOption: {&#10;    PERMANENT: string;&#10;    TEMPORARY: string;&#10;    ACTING: string;&#10;}' >SampleOption</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E06C75"><data-lsp lsp='(property) PERMANENT: string' >PERMANENT</data-lsp></span><span style="color: #C678DD">}</span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                    &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Text({ size, weight, tag, className, children, ...rest }: TextProps): JSX.Element&#10;import Text' >Text</data-lsp></span><span style="color: #ABB2BF">&gt;\u0428\u0442\u0430\u0442\u043D\u0430\u044F \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C&lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Text({ size, weight, tag, className, children, ...rest }: TextProps): JSX.Element&#10;import Text' >Text</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                &lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Radio({ value, disabled, children, ...rest }: RadioProps): JSX.Element&#10;import Radio' >Radio</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Radio({ value, disabled, children, ...rest }: RadioProps): JSX.Element&#10;import Radio' >Radio</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #D19A66"><data-lsp lsp='(property) RadioProps.value: string' >value</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #E5C07B"><data-lsp lsp='const SampleOption: {&#10;    PERMANENT: string;&#10;    TEMPORARY: string;&#10;    ACTING: string;&#10;}' >SampleOption</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E06C75"><data-lsp lsp='(property) TEMPORARY: string' >TEMPORARY</data-lsp></span><span style="color: #C678DD">}</span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                    &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Text({ size, weight, tag, className, children, ...rest }: TextProps): JSX.Element&#10;import Text' >Text</data-lsp></span><span style="color: #ABB2BF">&gt;\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0432\u043E\u0434&lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Text({ size, weight, tag, className, children, ...rest }: TextProps): JSX.Element&#10;import Text' >Text</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                    &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function HintMessage(props: HintMessageProps): JSX.Element | null&#10;import HintMessage' >HintMessage</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                        \u0417\u0430\u043C\u0435\u0449\u0430\u044E\u0449\u0438\u0439 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A \u0442\u0440\u0430\u0442\u0438\u0442 100% \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043D\u0430</span></div><div class='line'><span style="color: #ABB2BF">                        \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u0442\u043E\u0433\u043E, \u043A\u043E\u0433\u043E \u043E\u043D \u0437\u0430\u043C\u0435\u0449\u0430\u0435\u0442.</span></div><div class='line'><span style="color: #ABB2BF">                    &lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function HintMessage(props: HintMessageProps): JSX.Element | null&#10;import HintMessage' >HintMessage</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                &lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Radio({ value, disabled, children, ...rest }: RadioProps): JSX.Element&#10;import Radio' >Radio</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Radio({ value, disabled, children, ...rest }: RadioProps): JSX.Element&#10;import Radio' >Radio</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #D19A66"><data-lsp lsp='(property) RadioProps.value: string' >value</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #E5C07B"><data-lsp lsp='const SampleOption: {&#10;    PERMANENT: string;&#10;    TEMPORARY: string;&#10;    ACTING: string;&#10;}' >SampleOption</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E06C75"><data-lsp lsp='(property) ACTING: string' >ACTING</data-lsp></span><span style="color: #C678DD">}</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66"><data-lsp lsp='(property) disabled?: boolean | undefined' >disabled</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                    &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Text({ size, weight, tag, className, children, ...rest }: TextProps): JSX.Element&#10;import Text' >Text</data-lsp></span><span style="color: #ABB2BF">&gt;\u0412\u0420\u0438\u041E&lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Text({ size, weight, tag, className, children, ...rest }: TextProps): JSX.Element&#10;import Text' >Text</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                    &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function HintMessage(props: HintMessageProps): JSX.Element | null&#10;import HintMessage' >HintMessage</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                        \u0417\u0430\u043C\u0435\u0449\u0430\u044E\u0449\u0438\u0439 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A \u0441\u043E\u0432\u043C\u0435\u0449\u0430\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445</span></div><div class='line'><span style="color: #ABB2BF">                        \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u0441 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u0442\u043E\u0433\u043E, \u043A\u043E\u0433\u043E \u043E\u043D \u0437\u0430\u043C\u0435\u0449\u0430\u0435\u0442.</span></div><div class='line'><span style="color: #ABB2BF">                    &lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function HintMessage(props: HintMessageProps): JSX.Element | null&#10;import HintMessage' >HintMessage</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                &lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Radio({ value, disabled, children, ...rest }: RadioProps): JSX.Element&#10;import Radio' >Radio</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">            &lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function RadioGroup({ selected, onChange, children, error, className }: RadioGroupProps): JSX.Element&#10;import RadioGroup' >RadioGroup</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">        &lt;/</span><span style="color: #E06C75"><data-lsp lsp='(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps&lt;React.HTMLAttributes&lt;HTMLDivElement>, HTMLDivElement>' >div</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">    );</span></div><div class='line'><span style="color: #ABB2BF">};</span></div></code></div></pre>`,preview:async()=>{const{Gap:c}=C,{RadioGroup:d,Radio:n}=g,{Heading:B,Text:e,HintMessage:i}=v,p={PERMANENT:"PERMANENT",TEMPORARY:"TEMPORARY",ACTING:"ACTING"};return()=>{const[y,E]=D.exports.useState(p.PERMANENT);return t(u.div,{style:{maxWidth:320},children:[s(B,{level:4,children:"\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u0418\u0432\u0430\u043D\u043E\u0432\u0430 \u0410.\u041D. \u043D\u0430 \u0440\u043E\u043B\u044C \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"}),s(c,{size:24}),t(d,{selected:y,onChange:A=>{E(A)},children:[s(n,{value:p.PERMANENT,children:s(e,{children:"\u0428\u0442\u0430\u0442\u043D\u0430\u044F \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"})}),t(n,{value:p.TEMPORARY,children:[s(e,{children:"\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0432\u043E\u0434"}),s(i,{children:"\u0417\u0430\u043C\u0435\u0449\u0430\u044E\u0449\u0438\u0439 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A \u0442\u0440\u0430\u0442\u0438\u0442 100% \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043D\u0430 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u0442\u043E\u0433\u043E, \u043A\u043E\u0433\u043E \u043E\u043D \u0437\u0430\u043C\u0435\u0449\u0430\u0435\u0442."})]}),t(n,{value:p.ACTING,disabled:!0,children:[s(e,{children:"\u0412\u0420\u0438\u041E"}),s(i,{children:"\u0417\u0430\u043C\u0435\u0449\u0430\u044E\u0449\u0438\u0439 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A \u0441\u043E\u0432\u043C\u0435\u0449\u0430\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u0441 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u0442\u043E\u0433\u043E, \u043A\u043E\u0433\u043E \u043E\u043D \u0437\u0430\u043C\u0435\u0449\u0430\u0435\u0442."})]})]})]})}}})}}function F(a,l){throw new Error("Expected "+(l?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default};
