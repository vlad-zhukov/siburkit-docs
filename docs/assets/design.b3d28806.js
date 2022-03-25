import{_ as u}from"./index.2b780f7e.js";import{d as s,r as h,j as b}from"./vendor.5e4153cb.js";import"./index.afb9f5be.js";import{_ as m}from"./index.a49d63c1.js";import"./Popover.module.21b0bfe4.js";function f(a={}){const{wrapper:e}=a.components||{};return e?s(e,{...a,children:s(o,{})}):o();function o(){const t=Object.assign({div:"div"},a.components),{CodePreview:r}=t;return r||E("CodePreview",!0),s(r,{code:`<pre class="shiki one-dark-pro twoslash lsp" style="background-color: #282c34; color: #abb2bf" preview="true"><div class="language-id">tsx</div><div class='code-container'><code><div class='line'><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> { </span><span style="color: #E06C75"><data-lsp lsp='(alias) function Checkbox({ checked, onChange, disabled, error, children, ...rest }: CheckboxProps): JSX.Element&#10;import Checkbox' >Checkbox</data-lsp></span><span style="color: #ABB2BF">, </span><span style="color: #E06C75"><data-lsp lsp='(alias) interface CheckboxProps&#10;import CheckboxProps' >CheckboxProps</data-lsp></span><span style="color: #ABB2BF"> } </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&apos;@siburkit/selections&apos;</span><span style="color: #ABB2BF">;</span></div><div class='line'><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> { </span><span style="color: #E06C75"><data-lsp lsp='(alias) function Text({ size, weight, tag, className, children, ...rest }: TextProps): JSX.Element&#10;import Text' >Text</data-lsp></span><span style="color: #ABB2BF"> } </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&apos;@siburkit/typography&apos;</span><span style="color: #ABB2BF">;</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B"><data-lsp lsp='const labels: string[]' >labels</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> [</span><span style="color: #98C379">&apos;\u0411\u0443\u0442\u0430\u0434\u0438\u0435\u043D&apos;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&apos;\u0414\u0413\u041F&apos;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&apos;\u0428\u0424\u041B\u0423&apos;</span><span style="color: #ABB2BF">];</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> () </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> {</span></div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> [</span><span style="color: #E5C07B"><data-lsp lsp='const states: boolean[]' >states</data-lsp></span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B"><data-lsp lsp='const setStates: React.Dispatch&lt;React.SetStateAction&lt;boolean[]>>' >setStates</data-lsp></span><span style="color: #ABB2BF">] </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B"><data-lsp lsp='(alias) namespace React&#10;import React' >React</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF"><data-lsp lsp='function React.useState&lt;boolean[]>(initialState: boolean[] | (() => boolean[])): [boolean[], React.Dispatch&lt;React.SetStateAction&lt;boolean[]>>] (+1 overload)' >useState</data-lsp></span><span style="color: #ABB2BF">([</span><span style="color: #D19A66">false</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">false</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">false</span><span style="color: #ABB2BF">]);</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75"><data-lsp lsp='let groupState: boolean | "mixed"' >groupState</data-lsp></span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B"><data-lsp lsp='(alias) interface CheckboxProps&#10;import CheckboxProps' >CheckboxProps</data-lsp></span><span style="color: #ABB2BF">[</span><span style="color: #98C379">&apos;checked&apos;</span><span style="color: #ABB2BF">] </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">false</span><span style="color: #ABB2BF">;</span></div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B"><data-lsp lsp='const uncheckedStates: boolean[]' >uncheckedStates</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B"><data-lsp lsp='const states: boolean[]' >states</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF"><data-lsp lsp='(method) Array&lt;boolean>.filter(predicate: (value: boolean, index: number, array: boolean[]) => unknown, thisArg?: any): boolean[] (+1 overload)' >filter</data-lsp></span><span style="color: #ABB2BF">((</span><span style="color: #E06C75"><data-lsp lsp='(parameter) c: boolean' >c</data-lsp></span><span style="color: #ABB2BF">) </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75"><data-lsp lsp='(parameter) c: boolean' >c</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">===</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">false</span><span style="color: #ABB2BF">);</span></div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #C678DD">if</span><span style="color: #ABB2BF"> (</span><span style="color: #E5C07B"><data-lsp lsp='const uncheckedStates: boolean[]' >uncheckedStates</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E06C75"><data-lsp lsp='(property) Array&lt;boolean>.length: number' >length</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">===</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">0</span><span style="color: #ABB2BF">) {</span></div><div class='line'><span style="color: #ABB2BF">        </span><span style="color: #E06C75"><data-lsp lsp='let groupState: boolean | "mixed"' >groupState</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">;</span></div><div class='line'><span style="color: #ABB2BF">    } </span><span style="color: #C678DD">else</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">if</span><span style="color: #ABB2BF"> (</span><span style="color: #E5C07B"><data-lsp lsp='const uncheckedStates: boolean[]' >uncheckedStates</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E06C75"><data-lsp lsp='(property) Array&lt;boolean>.length: number' >length</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">!==</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B"><data-lsp lsp='const states: boolean[]' >states</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E06C75"><data-lsp lsp='(property) Array&lt;boolean>.length: number' >length</data-lsp></span><span style="color: #ABB2BF">) {</span></div><div class='line'><span style="color: #ABB2BF">        </span><span style="color: #E06C75"><data-lsp lsp='let groupState: boolean | "mixed"' >groupState</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&apos;mixed&apos;</span><span style="color: #ABB2BF">;</span></div><div class='line'><span style="color: #ABB2BF">    }</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> (</span></div><div class='line'><span style="color: #ABB2BF">        &lt;</span><span style="color: #E06C75"><data-lsp lsp='(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps&lt;React.HTMLAttributes&lt;HTMLDivElement>, HTMLDivElement>' >div</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">            &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Checkbox({ checked, onChange, disabled, error, children, ...rest }: CheckboxProps): JSX.Element&#10;import Checkbox' >Checkbox</data-lsp></span></div><div class='line'><span style="color: #ABB2BF">                </span><span style="color: #D19A66"><data-lsp lsp='(property) CheckboxProps.checked: boolean | "mixed"' >checked</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #E06C75"><data-lsp lsp='let groupState: boolean | "mixed"' >groupState</data-lsp></span><span style="color: #C678DD">}</span></div><div class='line'><span style="color: #ABB2BF">                </span><span style="color: #D19A66"><data-lsp lsp='(property) CheckboxProps.onChange: React.ChangeEventHandler&lt;HTMLInputElement>' >onChange</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75"><data-lsp lsp='(parameter) evt: React.ChangeEvent&lt;HTMLInputElement>' >evt</data-lsp></span><span style="color: #ABB2BF">) </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> {</span></div><div class='line'><span style="color: #ABB2BF">                    </span><span style="color: #61AFEF"><data-lsp lsp='const setStates: (value: React.SetStateAction&lt;boolean[]>) => void' >setStates</data-lsp></span><span style="color: #ABB2BF">(</span></div><div class='line'><span style="color: #ABB2BF">                        </span><span style="color: #E5C07B"><data-lsp lsp='(parameter) evt: React.ChangeEvent&lt;HTMLInputElement>' >evt</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B"><data-lsp lsp='(property) React.ChangeEvent&lt;HTMLInputElement>.target: EventTarget &amp; HTMLInputElement' >target</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E06C75"><data-lsp lsp='(property) HTMLInputElement.checked: boolean' >checked</data-lsp></span></div><div class='line'><span style="color: #ABB2BF">                            </span><span style="color: #C678DD">?</span><span style="color: #ABB2BF"> [</span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">]</span></div><div class='line'><span style="color: #ABB2BF">                            </span><span style="color: #C678DD">:</span><span style="color: #ABB2BF"> [</span><span style="color: #D19A66">false</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">false</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">false</span><span style="color: #ABB2BF">],</span></div><div class='line'><span style="color: #ABB2BF">                    );</span></div><div class='line'><span style="color: #ABB2BF">                }</span><span style="color: #C678DD">}</span></div><div class='line'><span style="color: #ABB2BF">            &gt;</span></div><div class='line'><span style="color: #ABB2BF">                &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Text({ size, weight, tag, className, children, ...rest }: TextProps): JSX.Element&#10;import Text' >Text</data-lsp></span><span style="color: #ABB2BF">&gt;\u0412\u0441\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430&lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Text({ size, weight, tag, className, children, ...rest }: TextProps): JSX.Element&#10;import Text' >Text</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">            &lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Checkbox({ checked, onChange, disabled, error, children, ...rest }: CheckboxProps): JSX.Element&#10;import Checkbox' >Checkbox</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">            &lt;</span><span style="color: #E06C75"><data-lsp lsp='(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps&lt;React.HTMLAttributes&lt;HTMLDivElement>, HTMLDivElement>' >div</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #D19A66"><data-lsp lsp='(property) React.HTMLAttributes&lt;HTMLDivElement>.style?: React.CSSProperties | undefined' >style</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #ABB2BF">{ </span><span style="color: #E06C75"><data-lsp lsp='(property) StandardLonghandProperties&lt;string | number, string &amp; {}>.paddingLeft?: Property.PaddingLeft&lt;string | number> | undefined' >paddingLeft</data-lsp></span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">36</span><span style="color: #ABB2BF"> }</span><span style="color: #C678DD">}</span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                </span><span style="color: #C678DD">{</span><span style="color: #E5C07B"><data-lsp lsp='const states: boolean[]' >states</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF"><data-lsp lsp='(method) Array&lt;boolean>.map&lt;JSX.Element>(callbackfn: (value: boolean, index: number, array: boolean[]) => JSX.Element, thisArg?: any): JSX.Element[]' >map</data-lsp></span><span style="color: #ABB2BF">((</span><span style="color: #E06C75"><data-lsp lsp='(parameter) checkboxState: boolean' >checkboxState</data-lsp></span><span style="color: #ABB2BF">, </span><span style="color: #E06C75"><data-lsp lsp='(parameter) index: number' >index</data-lsp></span><span style="color: #ABB2BF">) </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> (</span></div><div class='line'><span style="color: #ABB2BF">                    &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Checkbox({ checked, onChange, disabled, error, children, ...rest }: CheckboxProps): JSX.Element&#10;import Checkbox' >Checkbox</data-lsp></span></div><div class='line'><span style="color: #ABB2BF">                        </span><span style="color: #D19A66"><data-lsp lsp='(property) CheckboxProps.checked: boolean | "mixed"' >checked</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #E06C75"><data-lsp lsp='(parameter) checkboxState: boolean' >checkboxState</data-lsp></span><span style="color: #C678DD">}</span></div><div class='line'><span style="color: #ABB2BF">                        </span><span style="color: #D19A66"><data-lsp lsp='(property) CheckboxProps.onChange: React.ChangeEventHandler&lt;HTMLInputElement>' >onChange</data-lsp></span><span style="color: #56B6C2">=</span><span style="color: #C678DD">{</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75"><data-lsp lsp='(parameter) evt: React.ChangeEvent&lt;HTMLInputElement>' >evt</data-lsp></span><span style="color: #ABB2BF">) </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> {</span></div><div class='line'><span style="color: #ABB2BF">                            </span><span style="color: #61AFEF"><data-lsp lsp='const setStates: (value: React.SetStateAction&lt;boolean[]>) => void' >setStates</data-lsp></span><span style="color: #ABB2BF">((</span><span style="color: #E06C75"><data-lsp lsp='(parameter) currentStates: boolean[]' >currentStates</data-lsp></span><span style="color: #ABB2BF">) </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> {</span></div><div class='line'><span style="color: #ABB2BF">                                </span><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B"><data-lsp lsp='const states: boolean[]' >states</data-lsp></span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> [...</span><span style="color: #E06C75"><data-lsp lsp='(parameter) currentStates: boolean[]' >currentStates</data-lsp></span><span style="color: #ABB2BF">];</span></div><div class='line'><span style="color: #ABB2BF">                                </span><span style="color: #E06C75"><data-lsp lsp='const states: boolean[]' >states</data-lsp></span><span style="color: #ABB2BF">[</span><span style="color: #E06C75"><data-lsp lsp='(parameter) index: number' >index</data-lsp></span><span style="color: #ABB2BF">] </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B"><data-lsp lsp='(parameter) evt: React.ChangeEvent&lt;HTMLInputElement>' >evt</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B"><data-lsp lsp='(property) React.ChangeEvent&lt;HTMLInputElement>.target: EventTarget &amp; HTMLInputElement' >target</data-lsp></span><span style="color: #ABB2BF">.</span><span style="color: #E06C75"><data-lsp lsp='(property) HTMLInputElement.checked: boolean' >checked</data-lsp></span><span style="color: #ABB2BF">;</span></div><div class='line'><span style="color: #ABB2BF">                                </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75"><data-lsp lsp='const states: boolean[]' >states</data-lsp></span><span style="color: #ABB2BF">;</span></div><div class='line'><span style="color: #ABB2BF">                            });</span></div><div class='line'><span style="color: #ABB2BF">                        }</span><span style="color: #C678DD">}</span></div><div class='line'><span style="color: #ABB2BF">                    &gt;</span></div><div class='line'><span style="color: #ABB2BF">                        &lt;</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Text({ size, weight, tag, className, children, ...rest }: TextProps): JSX.Element&#10;import Text' >Text</data-lsp></span><span style="color: #ABB2BF">&gt;</span><span style="color: #C678DD">{</span><span style="color: #E06C75"><data-lsp lsp='const labels: string[]' >labels</data-lsp></span><span style="color: #ABB2BF">[</span><span style="color: #E06C75"><data-lsp lsp='(parameter) index: number' >index</data-lsp></span><span style="color: #ABB2BF">]</span><span style="color: #C678DD">}</span><span style="color: #ABB2BF">&lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Text({ size, weight, tag, className, children, ...rest }: TextProps): JSX.Element&#10;import Text' >Text</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                    &lt;/</span><span style="color: #E5C07B"><data-lsp lsp='(alias) function Checkbox({ checked, onChange, disabled, error, children, ...rest }: CheckboxProps): JSX.Element&#10;import Checkbox' >Checkbox</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">                ))</span><span style="color: #C678DD">}</span></div><div class='line'><span style="color: #ABB2BF">            &lt;/</span><span style="color: #E06C75"><data-lsp lsp='(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps&lt;React.HTMLAttributes&lt;HTMLDivElement>, HTMLDivElement>' >div</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">        &lt;/</span><span style="color: #E06C75"><data-lsp lsp='(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps&lt;React.HTMLAttributes&lt;HTMLDivElement>, HTMLDivElement>' >div</data-lsp></span><span style="color: #ABB2BF">&gt;</span></div><div class='line'><span style="color: #ABB2BF">    );</span></div><div class='line'><span style="color: #ABB2BF">};</span></div></code></div></pre>`,preview:async()=>{const{Checkbox:c}=m,{Text:B}=u,C=["\u0411\u0443\u0442\u0430\u0434\u0438\u0435\u043D","\u0414\u0413\u041F","\u0428\u0424\u041B\u0423"];return()=>{const[n,d]=h.exports.useState([!1,!1,!1]);let p=!1;const i=n.filter(l=>l===!1);return i.length===0?p=!0:i.length!==n.length&&(p="mixed"),b(t.div,{children:[s(c,{checked:p,onChange:l=>{d(l.target.checked?[!0,!0,!0]:[!1,!1,!1])},children:s(B,{children:"\u0412\u0441\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"})}),s(t.div,{style:{paddingLeft:36},children:n.map((l,y)=>s(c,{checked:l,onChange:F=>{d(v=>{const A=[...v];return A[y]=F.target.checked,A})},children:s(B,{children:C[y]})}))})]})}}})}}function E(a,e){throw new Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}export{f as default};
