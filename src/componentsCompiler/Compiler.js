import React, { Component } from 'react';
import './Compiler.css'
import AceEditor from 'react-ace';
// import Grid from '@material-ui/core/Grid';
// import Text from 'react-text';
// import axios from "axios";
import Button from '@material-ui/core/Button';


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

// const $ = window.$;
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
      theme: 'terminal',
      sourceEditor:'',
      finalCode:'',
      languageCode: '7'

    };
  }
// python 5
// cpp7
// java 4

  handleRun(event) {
    
    // const ans='3';
    var todo = {
      "LanguageChoice": this.state.languageCode,
      "Program": this.state.finalCode ,
      "Input" : this.state.input,
      "CompilerArgs": "-o a.out source_file.cpp"
  };

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://rextester.com/rundotnet/api";
    (async () => {
      const rawResponse = await fetch(proxyurl + url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      });
      const content = await rawResponse.json();
    
      const ans= content.Result;

      this.setState({
        output:ans
      });

      console.log(content.Result);
    })();


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
    
    
    if(event.target.value === 'c_cpp' )
    {
      this.setState({
        language: event.target.value,
        languageCode : '7'
      });
    }
    else
    {
      this.setState({
        language: event.target.value,
        languageCode : '5'
      });
    }




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
          height="540px"
          width="85%"
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
      {/* onSubmit={this.handleRun} */}
        <form >
        <h4>
          <label>
            Select theme    &nbsp;&nbsp; 
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
            {/* </h4> */}
          </label>


          {/* <span ></span> */}

          <label className="gap1"  style={{textAlign:"right"}}>
            {/* <h5> */}
              Select langauge &nbsp;&nbsp;
            <select value={this.state.language} onChange={this.languageChange}>
              <option value="c_cpp">C++</option>
              <option value="python">Python</option>
              {/* <option value="java">Java</option> */}
            </select>
            {/* </h5>  */}
          </label>

          <Button  style={{width: '15%', height: '50px', color:'rgb(219, 191, 191)', backgroundColor:'rgba(0, 0, 0,0.95)',padding: '0px'}} onClick={this.handleRun} >
                {/* <h4> */}
                  Run
                {/* </h4> */}
          </Button>
          </h4>


          

          {/* <Grid container component="main"> */}
            {/* <Grid item xs={false} sm={5} md={6} > */}
              {/* <label> */}
              {/* <textarea className="output-area" placeholder="Enter Input here "  rows="8" cols="50" type="text" value={this.state.input} onChange={this.handleInput} /> */}
              {/* </label> */}
            {/* </Grid>   */}
            {/* <Grid item xs={false} sm={1} md={6}> */}
              {/* <input className="run-btn" type="submit" value="RUN" /> */}
              {/* <Button  style={{width: '100%',color:'rgb(219, 191, 191)', backgroundColor:'rgba(0, 0, 0,0.95)',padding: '0px'}} onClick={this.handleRun} >
                <h4>
                  Run
                </h4>
              </Button> */}
            {/* </Grid> */}
          {/* </Grid> */}
        </form> 
      </div>  

      <br></br>
          <br></br>
              
      <h3>Input : </h3>
        <div className="output-box" >     
        <textarea className="output-area" placeholder="Enter Input here "  rows="8" cols="100" type="text" value={this.state.input} onChange={this.handleInput} />
        </div>


      <h3> Output : </h3>
      <div className="output-box" >
        {/* <Text>
          {this.state.output}
        </Text> */}
        <textarea className="output-area"  rows="8" cols="100"  type="text" value={this.state.output} />
      </div>


    </div>    
    );
  }
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



// handleRun(event) {



 
    
    
//   var todo = {
//     "LanguageChoice": "7",
//     "Program": this.state.finalCode ,
//     "Input" : "",
//     "CompilerArgs": ""
// };

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://rextester.com/rundotnet/api";
// (async () => {
//   const rawResponse = await fetch(proxyurl + url, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(todo)
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// })();


// fetch("https://rextester.com/rundotnet/api", {
//     method: "POST",
//     body: JSON.stringify(todo)
//   })
//     .then(response => {
//       let json = response.json();
//       console.log(json);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.blob();
//     })
//     .catch(error => {
//       console.error(
//         "There has been a problem with your fetch operation:",
//         error
//       );
//     });



//   fetch('https://rextester.com/rundotnet/api', {

//   method: 'post',
//   headers: {
//     'Accept': 'application/json, text/plain, */*',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(todo)
// }).then(res=>res.json())
//   .then(res => console.log(res));

// var bodyFormData = new FormData();


// bodyFormData.set("LanguageChoice", "23");
// bodyFormData.set("Porgram", "console.log('fdfdsf')" );
// bodyFormData.set("Input", "");
// bodyFormData.set("CompilerArgs", "");

// console.log(bodyFormData)

// fetch("https://rextester.com/rundotnet/api", {
//   mode: 'no-cors',
//   method: "POST",
//   headers: {'Content-Type': 'application/json' },
//   data: todo
// })
// //   // .then(response => alert(JSON.stringify(response));)
//   .then(response => response.json()) 
//   .then(data => {console.log(data)})





    // let json = response.json();
    // alert(json);
    // var res = response.json();

    // var result = JSON.parse(res);
  // var result(JSON.parse(response.Result));

    // console.log(result)

    

    // var result=response.json()
    // console.log(result)
    // console.log(JSON.parse(response))
  //   console.log(response.json())
  //   // alert(res)
  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }
  //   // return response.blob();
  // })
  // .catch(error => {
  //   alert(
  //     "dieee",
  //     error
  //   );
  // });

// var todo = {
//       "LanguageChoice": "23",
//       "Program": "console.log('fdfdsf')",
//       "Input" : "",
//       "CompilerArgs": ""
//   }





// axios({
//     method: 'post',
//     url: 'myurl',
//     data: bodyFormData,
//     headers: {'Content-Type': 'multipart/form-data' }
//     })
//     .then(function (response) {
//         //handle success
//         console.log(response);
//     })
//     .catch(function (response) {
//         //handle error
//         console.log(response);
//     });




//   var request = require('request');

//   var program ={
//     "clientId":"db2f1a8f8b0c44fd0f4d7d1c5d18c2c8",
//     "clientSecret":"4761bb58ac16809953a08fc3fe655ad4a79f1557950d8686b204423652cacfa",
//     "script": " console.log('fdfdsf')",
//     "language":"nodejs",
//     "versionIndex":"3"
// };
//   request({
//       url: 'https://api.jdoodle.com/v1/execute',
//       method: "POST",
//       json: program
//   },
//   function (error, response, body) {
//       console.log('error:', error);
//       console.log('statusCode:', response && response.statusCode);
//       // console.log('body:', body);
//   });



  //  axios
  //       .post("https://rextester.com/rundotnet/api",to)
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
// }
