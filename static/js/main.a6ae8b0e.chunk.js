(this["webpackJsonppomodoro-app"]=this["webpackJsonppomodoro-app"]||[]).push([[0],{43:function(e,t,o){e.exports=o(64)},48:function(e,t,o){},49:function(e,t,o){},59:function(e,t,o){},60:function(e,t,o){},61:function(e,t,o){},64:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(21),i=o.n(r),s=(o(48),o(97),o(93),o(65),o(90)),u=(o(96),o(92)),h=(o(94),o(95),o(24),o(6),o(16)),l=o(10),c=o(4),m=o(18),d=o(17);o(49);var g=function(e){var t=e.breakLength;return n.a.createElement("section",null,n.a.createElement("h4",null,"Break Length"),n.a.createElement("section",{className:"interval-container"},n.a.createElement("button",{className:"button1",onClick:function(){e.isPlay||t<=0||e.onBreakIntervalChange(t-1)}},"Down"),n.a.createElement("p",{className:"interval-length"},e.breakLength),n.a.createElement("button",{className:"button1",onClick:function(){e.isPlay||e.onBreakIntervalChange(t+1)}},"Up")))};var p=function(e){var t=e.sessionLength;return n.a.createElement("section",null,n.a.createElement("h4",null,"Session Length"),n.a.createElement("section",{className:"interval-container"},n.a.createElement("button",{className:"button1",onClick:function(){e.isPlay||t<=0||e.onSessionLengthChange(t-1)}},"Down"),n.a.createElement("p",{className:"interval-length"},e.sessionLength),n.a.createElement("button",{className:"button1",onClick:function(){e.isPlay||e.onSessionLengthChange(t+1)}},"Up")))},y=function(e){Object(m.a)(o,e);var t=Object(d.a)(o);function o(){var e;return Object(h.a)(this,o),(e=t.call(this)).onResetTimer=e.onResetTimer.bind(Object(c.a)(e)),e.playTimer=e.playTimer.bind(Object(c.a)(e)),e.stopTimer=e.stopTimer.bind(Object(c.a)(e)),e.decreaseTimer=e.decreaseTimer.bind(Object(c.a)(e)),e.state={isSession:!0,timerSecond:0,intervalId:0},e}return Object(l.a)(o,[{key:"onResetTimer",value:function(){this.stopTimer(),this.props.playStopTimer(!1),this.setState({timerSecond:0,isSession:!0}),this.props.onResetTimer()}},{key:"playTimer",value:function(){var e=setInterval(this.decreaseTimer,1e3);this.props.playStopTimer(!0),this.setState({intervalId:e})}},{key:"decreaseTimer",value:function(){switch(this.state.timerSecond){case 0:0===this.props.timerMinute&&(this.state.isSession?(this.setState({isSession:!1}),this.props.toggleInterval(this.state.isSession)):(this.setState({isSession:!0}),this.props.toggleInterval(this.state.isSession))),this.props.updateTimerMinute(),this.setState({timerSecond:59});break;default:this.setState((function(e){return{timerSecond:e.timerSecond-1}}))}}},{key:"stopTimer",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){return n.a.createElement("section",{className:"pomo-doro"},n.a.createElement("section",{className:"timer-container"},n.a.createElement("h4",null,!0===this.state.isSession?"Session":"Break"),n.a.createElement("span",{className:"timer"}," ",this.props.timerMinute," "),n.a.createElement("span",{className:"timer"}," : "),n.a.createElement("span",{className:"timer"},this.state.timerSecond<10?"0"+this.state.timerSecond:this.state.timerSecond)),n.a.createElement("section",{className:"timer-actions"},n.a.createElement("button",{className:"button1",onClick:this.playTimer},"Play"),n.a.createElement("button",{className:"button1",onClick:this.stopTimer},"Stop"),n.a.createElement("button",{className:"button1",onClick:this.onResetTimer},"Reset")))}}]),o}(n.a.Component),f=o(37),b=(o(50),[{quote:"Genius is one percent inspiration and ninety-nine percent perspiration.",author:"Thomas Edison"},{quote:"You can observe a lot just by watching.",author:"Yogi Berra"},{quote:"A house divided against itself cannot stand.",author:"Abraham Lincoln"},{quote:"Difficulties increase the nearer we get to the goal.",author:"Johann Wolfgang von Goethe"},{quote:"Fate is in your hands and no one elses",author:"Byron Pulsifer"},{quote:"Be the chief but never the lord.",author:"Lao Tzu"},{quote:"Nothing happens unless first we dream.",author:"Carl Sandburg"},{quote:"Well begun is half done.",author:"Aristotle"},{quote:"Life is a learning experience, only if you learn.",author:"Yogi Berra"},{quote:"Self-complacency is fatal to progress.",author:"Margaret Sangster"},{quote:"Peace comes from within. Do not seek it without.",author:"Buddha"},{quote:"What you give is what you get.",author:"Byron Pulsifer"},{quote:"We can only learn to love by loving.",author:"Iris Murdoch"},{quote:"Life is change. Growth is optional. Choose wisely.",author:"Karen Clark"},{quote:"You'll see it when you believe it.",author:"Wayne Dyer"},{quote:"Today is the tomorrow we worried about yesterday.",author:""},{quote:"It's easier to see the mistakes on someone else's paper.",author:""},{quote:"Every man dies. Not every man really lives.",author:""},{quote:"To lead people walk behind them.",author:"Lao Tzu"},{quote:"Having nothing, nothing can he lose.",author:"William Shakespeare"},{quote:"Trouble is only opportunity in work clothes.",author:"Henry J. Kaiser"},{quote:"A rolling stone gathers no moss.",author:"Publilius Syrus"},{quote:"Ideas are the beginning points of all fortunes.",author:"Napoleon Hill"},{quote:"Everything in life is luck.",author:"Donald Trump"},{quote:"Doing nothing is better than being busy doing nothing.",author:"Lao Tzu"},{quote:"Trust yourself. You know more than you think you do.",author:"Benjamin Spock"},{quote:"Study the past, if you would divine the future.",author:"Confucius"},{quote:"The day is already blessed, find peace within it.",author:""},{quote:"From error to error one discovers the entire truth.",author:"Sigmund Freud"},{quote:"Well done is better than well said.",author:"Benjamin Franklin"},{quote:"Bite off more than you can chew, then chew it.",author:"Ella Williams"},{quote:"Work out your own salvation. Do not depend on others.",author:"Buddha"},{quote:"One today is worth two tomorrows.",author:"Benjamin Franklin"},{quote:"Once you choose hope, anythings possible.",author:"Christopher Reeve"},{quote:"God always takes the simplest way.",author:"Albert Einstein"},{quote:"One fails forward toward success.",author:"Charles Kettering"},{quote:"From small beginnings come great things.",author:""},{quote:"Learning is a treasure that will follow its owner everywhere",author:"Chinese proverb"},{quote:"Be as you wish to seem.",author:"Socrates"},{quote:"The world is always in movement.",author:"V. Naipaul"},{quote:"Never mistake activity for achievement.",author:"John Wooden"},{quote:"What worries you masters you.",author:"Haddon Robinson"},{quote:"One faces the future with ones past.",author:"Pearl Buck"},{quote:"Goals are the fuel in the furnace of achievement.",author:"Brian Tracy"},{quote:"Who sows virtue reaps honour.",author:"Leonardo da Vinci"},{quote:"Be kind whenever possible. It is always possible.",author:"Dalai Lama"},{quote:"Talk doesn't cook rice.",author:"Chinese proverb"},{quote:"He is able who thinks he is able.",author:"Buddha"},{quote:"Be as you wish to seem.",author:"Socrates"},{quote:"A goal without a plan is just a wish.",author:"Larry Elder"},{quote:"To succeed, we must first believe that we can.",author:"Michael Korda"},{quote:"Learn from yesterday, live for today, hope for tomorrow.",author:"Albert Einstein"},{quote:"A weed is no more than a flower in disguise.",author:"James Lowell"},{quote:"Do, or do not. There is no try.",author:"Yoda"},{quote:"All serious daring starts from within.",author:"Harriet Beecher Stowe"},{quote:"The best teacher is experience learned from failures.",author:"Byron Pulsifer"},{quote:"Think how hard physics would be if particles could think.",author:"Murray Gell-Mann"},{quote:"Love is the flower you've got to let grow.",author:"John Lennon"},{quote:"Don't wait. The time will never be just right.",author:"Napoleon Hill"},{quote:"One fails forward toward success.",author:"Charles Kettering"},{quote:"Time is the wisest counsellor of all.",author:"Pericles"},{quote:"You give before you get.",author:"Napoleon Hill"},{quote:"Wisdom begins in wonder.",author:"Socrates"},{quote:"Without courage, wisdom bears no fruit.",author:"Baltasar Gracian"},{quote:"Change in all things is sweet.",author:"Aristotle"},{quote:"What you fear is that which requires action to overcome.",author:"Byron Pulsifer"},{quote:"The best teacher is experience learned from failures.",author:"Byron Pulsifer"},{quote:"When performance exceeds ambition, the overlap is called success.",author:"Cullen Hightower"},{quote:"When deeds speak, words are nothing.",author:"African proverb"},{quote:"Real magic in relationships means an absence of judgement of others.",author:"Wayne Dyer"},{quote:"When performance exceeds ambition, the overlap is called success.",author:"Cullen Hightower"},{quote:"I never think of the future. It comes soon enough.",author:"Albert Einstein"},{quote:"Skill to do comes of doing.",author:"Ralph Emerson"},{quote:"Wisdom is the supreme part of happiness.",author:"Sophocles"},{quote:"I believe that every person is born with talent.",author:"Maya Angelou"},{quote:"Important principles may, and must, be inflexible.",author:"Abraham Lincoln"},{quote:"The undertaking of a new action brings new strength.",author:"Richard Evans"},{quote:"I believe that every person is born with talent.",author:"Maya Angelou"},{quote:"The years teach much which the days never know.",author:"Ralph Emerson"},{quote:"Our distrust is very expensive.",author:"Ralph Emerson"},{quote:"All know the way; few actually walk it.",author:"Bodhidharma"},{quote:"Great talent finds happiness in execution.",author:"Johann Wolfgang von Goethe"},{quote:"Faith in oneself is the best and safest course.",author:"Michelangelo"},{quote:"Courage is going from failure to failure without losing enthusiasm.",author:"Winston Churchill"},{quote:"The two most powerful warriors are patience and time.",author:"Leo Tolstoy"},{quote:"Anticipate the difficult by managing the easy.",author:"Lao Tzu"},{quote:"Those who are free of resentful thoughts surely find peace.",author:"Buddha"},{quote:"Talk doesn't cook rice.",author:"Chinese proverb"},{quote:"A short saying often contains much wisdom.",author:"Sophocles"},{quote:"The day is already blessed, find peace within it.",author:""},{quote:"It takes both sunshine and rain to make a rainbow.",author:""},{quote:"A beautiful thing is never perfect.",author:""},{quote:"Only do what your heart tells you.",author:"Princess Diana"},{quote:"Life is movement-we breathe, we eat, we walk, we move!",author:"John Pierrakos"}]),v=o(36),w=o.n(v),q=function(e){Object(m.a)(o,e);var t=Object(d.a)(o);function o(){var e;return Object(h.a)(this,o),(e=t.call(this)).onBreakIntervalChange=e.onBreakIntervalChange.bind(Object(c.a)(e)),e.onSessionLengthChange=e.onSessionLengthChange.bind(Object(c.a)(e)),e.onReset=e.onReset.bind(Object(c.a)(e)),e.onUpdateTimerMinute=e.onUpdateTimerMinute.bind(Object(c.a)(e)),e.onToggleInterval=e.onToggleInterval.bind(Object(c.a)(e)),e.onPlayStopTimer=e.onPlayStopTimer.bind(Object(c.a)(e)),e.state={breakLength:5,sessionLength:25,timerMinute:25,isPlay:!1,quote:"",author:""},e}return Object(l.a)(o,[{key:"onBreakIntervalChange",value:function(e){this.setState({breakLength:e})}},{key:"onSessionLengthChange",value:function(e){this.setState({sessionLength:e,timerMinute:e})}},{key:"onReset",value:function(){this.setState({breakLength:5,sessionLength:25,timerMinute:25})}},{key:"onUpdateTimerMinute",value:function(){this.setState((function(e){return{timerMinute:e.timerMinute-1}}))}},{key:"onToggleInterval",value:function(e){e?this.setState({timerMinute:this.state.sessionLength}):this.setState({timerMinute:this.state.breakLength})}},{key:"onPlayStopTimer",value:function(e){this.setState({isPlay:e})}},{key:"componentDidMount",value:function(){this.getQuote()}},{key:"getQuote",value:function(){var e=Math.floor(Math.random()*b.length),t=b[e];this.setState({quote:t.quote,author:t.author})}},{key:"render",value:function(){return n.a.createElement("body1",{className:"body1"},n.a.createElement(s.a,{container:!0,className:"newbody"},n.a.createElement(s.a,{item:!0,xs:12,sm:8,md:8,className:"newbody1"},n.a.createElement("h2",null,"Pomodoro Timer"),n.a.createElement("section",{className:"interval-length-container"},n.a.createElement(g,{isPlay:this.state.isPlay,breakLength:this.state.breakLength,onBreakIntervalChange:this.onBreakIntervalChange}),n.a.createElement(p,{isPlay:this.state.isPlay,sessionLength:this.state.sessionLength,onSessionLengthChange:this.onSessionLengthChange})),n.a.createElement("section",{className:"timer-section"},n.a.createElement(y,{playStopTimer:this.onPlayStopTimer,timerMinute:this.state.timerMinute,onResetTimer:this.onReset,updateTimerMinute:this.onUpdateTimerMinute,toggleInterval:this.onToggleInterval}))),n.a.createElement(s.a,{item:!0,xs:!1,sm:4,md:4},n.a.createElement("div",{className:"calendar"},n.a.createElement(f.a,{onChange:this.onChange,value:this.state.date})),n.a.createElement("div",{className:"notequote fade-in"},n.a.createElement(w.a,{format:"HH:mm:ss",ticking:!0,timezone:" IND"}),n.a.createElement("hr",null),n.a.createElement("h5",{style:{textAlign:"left",margin:"0px",padding:"0px"}},this.state.quote),n.a.createElement("h6",{style:{textAlign:"right"}}," ",this.state.author," ")))))}}]),o}(n.a.Component);o(59),a.Component,o(60),a.Component,o(61),a.Component,Object(u.a)((function(e){return{root:{height:"100vh  "},image:{backgroundImage:"url(https://picsum.photos/1500)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundPosition:"center",backgroundSize:"cover"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},other:{backgroundColor:"rgb(36,2,11)"}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.a6ae8b0e.chunk.js.map