import React, { useState } from 'react';
import Swal from 'sweetalert2';


// Function to evaluate the expression
function evaluateExpression(expression) {
  try {
    // eslint-disable-next-line no-new-func
    return new Function('return ' + expression)();
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: "Please enter a valid mathematical equation",
      icon: "error",
      confirmButtonText: "Okay",
    });
  }
}

// Calculator Component
function Calculator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // Function to handle number button clicks
  const handleNumberClick = (value) => {
    setInput((prevInput) => (prevInput === '0' ? value : prevInput + value));
  };

  // Function to handle operator button clicks
  const handleOperatorClick = (operator) => {
    if (input !== '') {
      setInput((prevInput) => prevInput + operator);
    }
  };

  // Function to handle equal button click
  const handleEqualClick = () => {
    try {
      const result = evaluateExpression(input);
      setOutput(parseFloat(result.toFixed(6)).toString());
    } catch (error) {
      setOutput('');
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid mathematical equation',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
  };

  // Function to handle clear button click
  const handleClearClick = () => {
    setInput('');
    setOutput('');
  };

  // Function to handle percentage button click
  const handlePercentageClick = () => {
    if (input !== '') {
      const result = parseFloat(evaluateExpression(input)) / 100;
      setOutput(parseFloat(result.toFixed(6).toString()));
      setInput('')
    }
  };

  return (
    <main className="wrapper">
      <div className="result-container">
        <div className="inputs">{input}</div>
        <div className="outputs">{output}</div>
      </div>

      <div className="buttons-container">
        <div className="buttons-container-1">
          <button className="function-button-1" id="clear" onClick={handleClearClick}>
            C
          </button>
          <button className="function-button-1" id="percentage" onClick={handlePercentageClick}>
            %
          </button>
          <button className="function-button" onClick={() => handleOperatorClick('/')}>
            /
          </button>
          <button className="function-button" onClick={() => handleOperatorClick('*')}>
            *
          </button>
        </div>
        <div className="buttons-container-1">
          <button className="num-button" onClick={() => handleNumberClick('7')}>
            7
          </button>
          <button className="num-button" onClick={() => handleNumberClick('8')}>
            8
          </button>
          <button className="num-button" onClick={() => handleNumberClick('9')}>
            9
          </button>
          <button className="function-button" onClick={() => handleOperatorClick('-')}>
            -
          </button>
        </div>
        <div className="buttons-container-1">
          <button className="num-button" onClick={() => handleNumberClick('4')}>
            4
          </button>
          <button className="num-button" onClick={() => handleNumberClick('5')}>
            5
          </button>
          <button className="num-button" onClick={() => handleNumberClick('6')}>
            6
          </button>
          <button className="function-button" onClick={() => handleOperatorClick('+')}>
            +
          </button>
        </div>
        <div className="buttons-container-2">
          <div className="buttons-container-2a">
            <div className="buttons-container-2ab">
              <button className="num-button" onClick={() => handleNumberClick('1')}>
                1
              </button>
              <button className="num-button" onClick={() => handleNumberClick('2')}>
                2
              </button>
              <button className="num-button" onClick={() => handleNumberClick('3')}>
                3
              </button>
            </div>
            <div className="buttons-container-2abc">
              <button className="num-button-zero num-button" onClick={() => handleNumberClick('0')}>
                0
              </button>
              <button className="num-button" onClick={() => handleNumberClick('.')}>
                .
              </button>
            </div>
          </div>
          <div className="buttons-container-2b">
            <button className="function-button-equals" id="equals" onClick={handleEqualClick}>
              =
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Calculator