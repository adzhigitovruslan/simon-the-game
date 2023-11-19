(function(){"use strict";var e={5605:function(e,t,n){var i=n(7195),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"wrapper"},[t("h1",{staticClass:"title"},[e._v("Simon the game")]),t("GameLevels",{attrs:{playing:e.playing},on:{updateLevel:e.updateLevel}}),t("div",{staticClass:"container"},[e._l(e.colors,(function(n,i){return t("div",{key:i,class:["figure",n,{active:e.activeColor===n}],on:{click:function(t){return e.handleColorClick(n)}}})})),t("div",{staticClass:"display"},[t("button",{staticClass:"start-button",on:{click:function(t){"Play"===e.gameMode?e.startGame():e.stopGame()}}},[e._v(" "+e._s(e.gameMode)+" ")])])],2)],1)])},a=[],s=(n(560),function(){var e=this,t=e._self._c;return t("div",{staticClass:"radio-buttons"},[t("h2",[e._v("Уровень:")]),t("label",{class:["radio-button",{disable:e.playing}]},[t("input",{attrs:{type:"radio",name:"option",value:"легкий",disabled:e.playing,checked:""},on:{change:e.setLevel}}),t("div",{class:["radio-circle",{disable:e.playing}]}),t("span",{staticClass:"radio-label"},[e._v("легкий")])]),t("label",{class:["radio-button",{disable:e.playing}]},[t("input",{attrs:{type:"radio",name:"option",value:"средний",disabled:e.playing},on:{change:e.setLevel}}),t("div",{class:["radio-circle",{disable:e.playing}]}),t("span",{staticClass:"radio-label"},[e._v("средний")])]),t("label",{class:["radio-button",{disable:e.playing}]},[t("input",{attrs:{type:"radio",name:"option",value:"сложный",disabled:e.playing},on:{change:e.setLevel}}),t("div",{class:["radio-circle",{disable:e.playing}]}),t("span",{staticClass:"radio-label"},[e._v("сложный")])])])}),r=[],l={props:{playing:{type:Boolean}},methods:{setLevel(e){this.$emit("updateLevel",e.target.value)}}},c=l,u=n(1001),d=(0,u.Z)(c,s,r,!1,null,"777fc8ce",null),p=d.exports,h={name:"App",components:{GameLevels:p},data(){return{gameMode:"Play",colors:["red","green","blue","yellow"],canClick:!1,playing:!1,order:[],checkOrder:[],activeColor:null,difficulty:"легкий",ms:{"легкий":1500,"средний":1e3,"сложный":400},sounds:{green:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),red:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),yellow:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),blue:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),end:new Audio("https://res.cloudinary.com/dzsnl7ocm/video/upload/v1562085132/Computer_Error-SoundBible.com-1655839472.wav")}}},methods:{startGame(){"Play"===this.gameMode&&(this.gameMode="Stop",this.nextLevel(),this.playing=!0)},getRandomNumber(e){return Math.floor(Math.random()*e)},getRandomSequence(){let e=this.colors[this.getRandomNumber(this.colors.length)];this.order.push(e),this.checkOrder=[...this.order]},flash(e,t){return new Promise((n=>{this.activeColor=e,this.sounds[e].play(),setTimeout((()=>{this.activeColor=null,setTimeout((()=>{n()}),250)}),t)}))},async nextLevel(){this.getRandomSequence();const e=this.ms[this.difficulty];for(const t of this.order)await this.flash(t,e);this.canClick=!0},handleColorClick(e){if(!this.canClick)return;this.activeColor=e,setTimeout((()=>{this.activeColor=null}),250);let t=this.checkOrder.shift();t===e?(this.sounds[e].play(),0===this.checkOrder.length&&(this.canClick=!1,setTimeout((()=>{this.nextLevel()}),2e3))):(this.stopGame(),this.sounds["end"].play())},updateLevel(e){this.difficulty=e},stopGame(){this.canClick=!1,this.gameMode="Play",this.order=[],this.playing=!1}}},m=h,f=(0,u.Z)(m,o,a,!1,null,null,null),v=f.exports;i.ZP.config.productionTip=!1,i.ZP.config.devtools=!0,new i.ZP({render:e=>e(v)}).$mount("#app")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,a){if(!i){var s=1/0;for(u=0;u<e.length;u++){i=e[u][0],o=e[u][1],a=e[u][2];for(var r=!0,l=0;l<i.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(r=!1,a<s&&(s=a));if(r){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,a,s=i[0],r=i[1],l=i[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(l)var u=l(n)}for(t&&t(i);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},i=self["webpackChunksimon_the_game"]=self["webpackChunksimon_the_game"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5605)}));i=n.O(i)})();
//# sourceMappingURL=app.c4dc7cb3.js.map