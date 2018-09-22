import React, { Component } from "react";
import "./App.css";
import animal from "./animals.js";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import AnimalCard from "./components/AnimalCard";
console.log(animal);
class App extends Component {
  state = {
    message: "Click an image to begin!",
    topScore: 0,
    curScore: 0,
    animal,
    selected: [],
    unselectedAnimal: animal
  };

  componentDidMount() {
    console.log("component mounted, state is: ", this.state);
  }

  shuffleArray = array => {
    const newArray = [...array];
    console.log("shuffled", newArray);
    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    this.setState({ animal: newArray });
  };

  selectAnimal = animal => {
    if (!this.state.selected.includes(animal)) {
      this.setState({
        selected: this.state.selected.concat(animal),
        message: "You guessed correctly!",
        curScore: this.state.curScore + 1,
        // animal: animal,
        // unselectedAnimal: newAnimal
      });
    } else {
      this.setState({
        message: "You guessed incorrectly!",
        topScore:
          this.state.curScore > this.state.topScore
            ? this.state.curScore
            : this.state.topScore,
        curScore: 0,
        animal: animal,
        unselectedAnimal: animal
      });
    }
    console.log("selected animal is: ", animal, " state is: ", this.state);
    // const findAnimal = this.state.unselectedAnimal.find(
    //   item => item.animal === animal
    // );
    // console.log("findAnimal is: ", findAnimal);

    this.shuffleArray(this.state.animal);
  };

  render() {
    return (
      <Wrapper>
        <Nav
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
        <Title />
        {console.log(this.state)}
        {this.state.animal.map(animal => (
          <AnimalCard
            animal={animal.animal}
            image={animal.image}
            selectAnimal={this.selectAnimal}
            curScore={this.state.curScore}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
