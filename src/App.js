import React, {useState} from "react";

let randomNumber = Math.round(Math.random() * 10);

const GuessTheNumber = () => {
  var guesses = [];
  const [result, setResult] = useState(0);
  const [value, setValue] = useState('');
  const onChange = e => setValue(e.target.value);

  const onClick = () => {
    // check users guess against randonNumber
    var userGuess = value;
    guesses.push(userGuess);
    console.log(value, userGuess, randomNumber);
    if (parseInt(userGuess) === randomNumber) {
      setResult(<p className="alert alert-success">Correct!</p>);
      randomNumber = Math.round(Math.random() * 10);
    }
    else if (userGuess > randomNumber) {
      setResult(<p className="alert alert-warning">Too high, guess again</p>);
    }
    else if (userGuess < randomNumber && userGuess !== "") {
      setResult(<p className="alert alert-warning">Too low, guess again</p>);
    }
    else {
      setResult(<p>What happened?</p>);
    }
  };

  return (
    <>
      <h2>Guess The Number game</h2>
      <p className="lead">Guess a number between 1 and 10.</p>
      <input value={value} type="number" onChange={onChange}/>
      <button type="submit" onClick={onClick}>
        GUESS
      </button>
      <br />
      <br />
      {result}
      {guesses}
    </>
  );
};

export default GuessTheNumber;
