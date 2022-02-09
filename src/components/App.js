import '../stylesheets/App.css';
import { Component } from 'react';
import Button from './Button';
import Toggle from './Toggle';
import Student from './Student';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      students: [{
        name: 'Bob Ross',
        img: 'https://media.giphy.com/media/rYEAkYihZsyWs/giphy.gif'
      },
      {
        name: 'Mr. Rogers',
        img: 'https://media.giphy.com/media/x0npYExCGOZeo/giphy.gif'
      },
      {
        name: 'Carrie Fisher',
        img: 'https://media.giphy.com/media/CXU8axmXoPHUY/giphy.gif'
      }],
      showImage: false,
      pickedStudent: null
    }
  }

  pickRandomStudent = () => {
    this.setState(() => ({
      pickedStudent: this.state.students[Math.floor(Math.random() * this.state.students.length)]
    }));
  }

  clickToggle = () => {
    this.setState({showImage: !this.state.showImage})
  }

  render() {
    return (
      <div className="App">
        <Student showImage={this.state.showImage} student={this.state.pickedStudent} />
        <Button handleClick={this.pickRandomStudent} />
        <Toggle handleClick={this.clickToggle} />
      </div>
    );
  }
}

export default App;
