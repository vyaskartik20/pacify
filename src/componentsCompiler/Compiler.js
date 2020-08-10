import React, { Component } from 'react';
import './Compiler.css'
import AceEditor from 'react-ace';
import Grid from '@material-ui/core/Grid';
import Text from 'react-text';
import axios from "axios";


import 'brace/mode/c_cpp'
// import 'acemodes'
import 'brace/theme/monokai'
import 'brace/theme/github'
import 'brace/theme/tomorrow'
import 'brace/theme/twilight'
import 'brace/theme/kuroir'
import 'brace/theme/xcode'
import 'brace/theme/textmate'
import 'brace/theme/solarized_dark'
import 'brace/theme/solarized_light'
import 'brace/theme/terminal'

const $ = window.$;
// xcode
// textmate
// solarized dark
// solarized light
// terminal
// monokai
// github
// tomorrow
// kuroir
// twilight

export default class Compiler extends Component {

  constructor(props){
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleRun = this.handleRun.bind(this);
    this.themeChange = this.themeChange.bind(this);
    this.languageChange = this.languageChange.bind(this);
    this.onCodeChange = this.onCodeChange.bind(this);
    
    this.state = {
      input: '',
      output:'',
      language: 'c_cpp',
      theme: 'monokai',
      sourceEditor:'',
      finalCode:''
    };
  }


//   componentDidMount() {
//     this.getTodos();
// }

// async getTodos() {
//     // With all properties
//     let body = {
//     userId: 1111,
//     title: "This is POST request with body",
//     completed: true
//     };
//     axios
//     .post("https://jsonplaceholder.typicode.com/todos", body)
//     .then(function(response) {
//         alert(response.data);
//     })
//     .catch(function(error) {
//         alert(error);
//     });
// }

// componentDidMount() {
//   this.getTodos();
// }

// async getTodos() {
//   // With all properties
//   var to = {
//     "LanguageChoice": "23",
//     "Program": "console.log('fdfdsf')",
//     "Input" : "",
//     "CompilerArgs": ""
// }
//   fetch("https://rextester.com/rundotnet/api", {
//     method: "POST",
//     body: to
//   })
//     .then(response => {
//       let json = response.json();
//       alert(json);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.blob();
//     })
//     .catch(error => {
//       alert(
//         "dieee",
//         error
//       );
//     });
// }



  handleRun(event) {

    // var editor = ace.edit("aceEditor");

    // var code = this.state.sourceEditor.getValue();

    alert(this.state.finalCode)

    

    // editor.setValue("new code here");
    
    
  //   var to = {
  //     "LanguageChoice": "23",
  //     "Program": "console.log('fdfdsf')",
  //     "Input" : "",
  //     "CompilerArgs": ""
  // }

  // fetch("https://rextester.com/rundotnet/api", {
  //   method: "POST",
  //   body: JSON.stringify(to)
  // })
  //   .then(response => {
  //     let json = response.json();
  //     alert(json);
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     return response.blob();
  //   })
  //   .catch(error => {
  //     alert(
  //       "dieee",
  //       error
  //     );
  //   });



    //  axios
    //       .post("https://rextester.com/rundotnet/api",to_compile)
    //       .then(function(response){
    //         alert(response.data);
    //       })
    //       .catch(function(error) {
    //         alert(error);
    //       });
          


      //     .done(function(data) {
      //     alert(JSON.stringify(data));
      // }).fail(function(data, err) {
      //     alert("fail " + JSON.stringify(data) + " " + JSON.stringify(err));
      //   });


        // let baseURL='https://rextester.com/rundotnet/api';
        // fetch( baseURL ,{ method: 'POST',headers:{  
        //   "Content-Type": "JSON/raw"
        //   } , body :to_compile} )
        // .then((resp) => resp.json())    
        // .then((respText) => {
    
        //     alert("success")
        //   // setT_attempted(JSON.parse(respText.attempted));
        //   // setT_unattempted(JSON.parse(respText.unattempted));
        //   // setT_wrong(JSON.parse(respText.wrong));
        //   // setT_score(JSON.parse(respText.score));
    
        //   // setOpen2(false);
        //   // setOpen(true);
    
        //   // alert('')
    
        // })
        // .catch((err) => {
        //   alert('Something went wrong. Kindly try again')
        //   // console.log();
        // })



    // alert('A name was submitted: ' + this.state.value);
    // event.preventDefault();
  }


  onCodeChange(newValue)
  {
    this.setState({
      finalCode: newValue
    });
    // alert(newValue)
  }



  handleInput(event) {
    this.setState({input: event.target.value});
  }

  themeChange(event) {
    this.setState({
      theme: event.target.value
    });
  }

  languageChange(event) {
    this.setState({
      language: event.target.value
    });
  }


  render() {
    return (
    <div className="encloser" >
      <div className="compiler-head" >
      {/* {this.state.language} */}
         Compiler
      </div>
    
      <div className="main-compiler-body" >
        <AceEditor id="aceEditor" className="editor"
          onChange= {this.onCodeChange}
          height="440px"
          width="70%"
          mode={this.state.language} 
          theme={this.state.theme}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true
          }}
          placeholder="Happy Coding :) "
        />
      </div>

      <div className="form-body" >

        <form onSubmit={this.handleRun}>

          <label>
            Select theme : 
            <select value={this.state.theme} onChange={this.themeChange}>
              <option value="monokai">Monokai</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="github">Github</option>
              <option value="twilight">Twilight</option>
              <option value="kuroir">Kuroir</option>
              <option value="xcode">Xcode</option>
              <option value="textmate">Textmate</option>
              <option value="terminal">Terminal</option>
              <option value="solarized_dark">Solarized Dark</option>
              <option value="solarized_light">Solarized Light</option>
            </select>
          </label>


          {/* <span ></span> */}

          <label className="gap1"  style={{textAlign:"right"}}>
            Select langauge : 
            <select value={this.state.language} onChange={this.languageChange}>
              <option value="c_cpp">C++</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>
          </label>

          <br></br>
          <br></br>

          <Grid container component="main">
            <Grid item xs={false} sm={5} md={6} >
              <label>
              <textarea className="output-area" placeholder="Enter Input here "  rows="8" cols="50" type="text" value={this.state.input} onChange={this.handleInput} />
              </label>
            </Grid>  
            <Grid item xs={false} sm={1} md={6}>
              <input className="run-btn" type="submit" value="RUN" />
            </Grid>
          </Grid>
        </form> 
      </div>  

        <h3>Output : </h3>
      <div className="output-box" >
        {/* <Text>
          {this.state.output}
        </Text> */}
        <textarea className="output-area"  rows="8" cols="50"  type="text" value={this.state.output} />
      </div>


    </div>    
    );
  }
}
