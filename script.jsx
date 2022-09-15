const root = ReactDOM.createRoot(document.getElementById('root'));



class quoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  
  render() {
    const colors = ['#7FB77E',
                '#B1D7B4',
                '#F7F6DC',
                '#FFC090'
               ];

const quotes = [{"quote": "Be yourself; everyone else is already taken.",
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
               ]

  return (null);
  }
}

class quote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quote: ''
        }
    }
    

    render() {

    }
}