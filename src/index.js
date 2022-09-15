import React from 'react';
import { createRoot }from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/


class QuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  
  render() {
    const colors = ['#7FB77E',
                '#B1D7B4',
                '#F7F6DC',
                '#FFC090'
               ];



  return (
    <div>
        <header><h1><em>Random Quote Machine</em></h1></header>
        <Quote />
        </div>
    
  );
  }
}

class Quote extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          quotes: [{"quote": "Be yourself; everyone else is already taken.",
          "author": "Oscar Wilde"},
                 {"quote": "Be the change that you wish to see in the world.",
          "author": "Mahatma Gandhi"},
                 {"quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
          "author": "Mahatma Gandhi"},
                 { "quote": "No one can make you feel inferior without your consent.",
          "author": "Eleanor Roosevelt"},
                 {"quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
          "author": "Martin Luther King"},
                 {"quote": "Injustice anywhere is a threat to justice everywhere.",
          "author": "Martin Luther King"},
                 {"quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
          "author": "Albert Einstein"},
                 ],
          randomIndex: 0,
        }
        this.randomQuote = this.randomQuote.bind(this);
        //this.handleQuote = this.handleQuote.bind(this);

    }

    randomQuote() {
        this.setState({
          quotes: this.state.quotes,
          randomIndex: Math.floor(Math.random() * this.state.quotes.length)
        })
    }

   

    render() {

      /*  const quotes = [{"quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde"},
               {"quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi"},
               {"quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi"},
               { "quote": "No one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt"},
               {"quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
        "author": "Martin Luther King"},
               {"quote": "Injustice anywhere is a threat to justice everywhere.",
        "author": "Martin Luther King"},
               {"quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        "author": "Albert Einstein"},
               ] */
        
        //let RNG = Math.floor(Math.random() * quotes.length);
        let currentQuote = this.state.quotes[this.state.randomIndex]['quote'];
        let currentAuthor = this.state.quotes[this.state.randomIndex]['author'];

        return (
            <div id="container">
                <blockquote id="quote"><em>{currentQuote}</em></blockquote>
                <cite id="author">- {currentAuthor}</cite>
                <div id="button" onClick={this.randomQuote}><button>New Quote</button></div>
            </div>
            
        )
    }
}

root.render(<QuoteGenerator/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
