import React from "react";
import ReactDOM from "react-dom";
import StyleEditor from "./StyleEditor.js";
import ResumeEditor from "./ResumeEditor.js";
import "./style/reset.css";
import Prism from "prismjs";
import co from "co";

class ReactClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			style: "",
		};
		this.interval = 40;
		this.resumeEditorContent = `



# Skand Tandon


### Basic Information

* Personal info: Skand Tandon/Male
* School: BMS College Of Engineering
* Major: Electronics
* Location: Banglore,IN

### Contact

* Phone No: +91-9554578040
* Telegram: @professionalnoob
* Email: skand.tandon@gmail.com

### Skills

* HTML
* CSS
* Javascript
* C/C++
* Assembly
* SQL
* Python
* Bootstrap
* React
* Node.js
* Php


### Skill detail

> HTML / CSS / Bootstrap
>Building websites using HTML/CSS/Bootstrap
> C / C++
>Trafficing simulation/Socket(client-server communication)
> Javascript
>Made modules for address validation from USPS API;
>currency broker for Software Design
> Node.js
>Made my own discord bot using node,js
> React
>Building animated resume with React/Javascript/HTML
> Php
>Tesint server side scripting
> Python
>Digital image processing for different interpolation,histogram, image compression, filter etc.
> SQL
>Database management


### What do I think of Myself

* Eager to learn
* Love doing what I like without hestitation
* Movie lover

** Github: **https://github.com/skandtandon
** Markdown: https://skandtandon.github.io/**

> If u like it，Fork [PROJECT](https://github.com/skandtandon/)，BUILD YOUR OWN VERSION！`;

		this.styleEditorContent = [`/*
* o(≧v≦)o~~
*
* Hello, my name is Skand Tandon
* 
* I found some animated resume tutorials, it's pretty cool, so i decided to make one for myself
*/

/* Let's get started by adding elements 
    √(─皿─)√
*/
* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
/* change the background */
html {
  color: #2ECCFA; background: #399647;
}
/* lets add some more style to the text~~ */
.styleEditor {
  background-color: #303030;
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* As a programmer，gotta make your code look better 
   and easy to distinguish 
          o(∩_∩)o~ 
*/
.token.comment{ color: #857F6B; font-style: italic; }
.token.selector{ color: #FFFF00; }
.token.property{ color: #DC1A1A; }
.token.punctuation{ color: #2023c1; }
.token.function{ color: #f27a10; }

/* add some more 3D effect to make it look cool  
           →_→
*/
html{
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.styleEditor {
	margin-top: 50px;
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotate(-20deg) translateZ(-100px) ;
          transform: rotate(-20deg) translateZ(-100px) ;
}
/* Do you like!？ */

/* Ok, next, i gonna need to make an editor to save my resume information 
		 ╮(╯3╰)╭
*/
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: 1.5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
	-webkit-transform: rotate(20deg) translateZ(-100px) ;
          transform: rotate(20deg) translateZ(-100px) ;
}

/* Time to start putting stuff down */
`,
`
/* Am i missing something!?
 * Yep，it's formmated in Markdown, i need to adjust a bit
 * By using open source tool to convert to HTML, Here we go!!!
 *           3
 *           2
 *           1
 *         BINGO！
 */
`,
`
/* add some more HTML elements */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h1{
  display: block;
  width: 80px;
  margin: 0 auto;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
/* ︿(￣︶￣)︽(￣︶￣)︿飞.飞.飞. */
.resumeEditor h3{
	display: inline-block;
	margin: 0.5em 0;
}
.resumeEditor a{
	color: #000;
}
.resumeEditor ul{
	list-style: none;
}
/* Almost there o(≧v≦)o~~ */
.resumeEditor ul>li::before {
	content: "•";
	margin-left: 1em;
	margin-right: 0.5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
	overflow: scroll;
}
/*
* credit:  http://strml.net/
* Hope you like it
*/
`];
	}

	addToStyle(char) {
		this.setState({
			style: this.state.style + char,
		});
	}

	replaceStyle(style) {
		this.setState({
			style: style,
		});
	}

	replaceStyleEditorContent() {

	}

	showStyleEditorContent(n) {
		let lastContentLength = 0;
		if (n !== 0) {lastContentLength = this.state.style.length;}
		let style = this.styleEditorContent[n];
		let len = style.length;
		return new Promise((resolve, reject) => {
			let showStyle = function () {
				let currentLen = this.state.style.length - lastContentLength;
				if (currentLen < len) {
					let char = style.substring(currentLen, currentLen+1);
					this.refs.StyleEditor.addToContent(char);
					this.addToStyle(char);
					setTimeout(showStyle, this.interval);
				} else {
					resolve();
				}
			}.bind(this);
			showStyle();
		});
	}

	showResumeContent() {
		let content = this.resumeEditorContent;
		let len = content.length;
		return new Promise((resolve, reject) => {
			let showContent = function() {
				let currentLen = this.refs.ResumeEditor.getCurrentContentLength();
				if (currentLen < len) {
					let char = content.substring(currentLen, currentLen+1);
					this.refs.ResumeEditor.addToContent(char);
					setTimeout(showContent, this.interval);
				} else {
					resolve();
				}
			}.bind(this);
			showContent();
		});
	}

	setResumeMarkdown() {
		return new Promise((resolve, reject) => {
			setTimeout(this.refs.ResumeEditor.setIsMarkdown(true), this.interval);
			resolve();
		});
	}

	async startShow() {
		await this.showStyleEditorContent(0).then(function() {console.log('done! show Content 0')});
		await this.showResumeContent();
		await this.showStyleEditorContent(1).then(function() {console.log('done! show Content 1')});
		await this.setResumeMarkdown();
		await this.showStyleEditorContent(2).then(function() {console.log('done! show Content 2')});
	}

	componentDidMount() {
		this.startShow();
		console.log(111);
		// this.refs.StyleEditor.replaceContent(this.content[0]);
		// this.replaceStyle(this.content[0]);
		// this.refs.ResumeEditor.replaceContent("");
	}

	render() {
		return (
			<div>
				<StyleEditor ref="StyleEditor" />
				<ResumeEditor ref="ResumeEditor" />
				<style>{this.state.style}</style>
			</div>);
	}
}
ReactDOM.render(<ReactClass />, document.getElementById("content"));
