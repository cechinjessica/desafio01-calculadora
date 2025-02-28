import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Calculator, Row } from "./styles"; 
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleAddNumber = (number) => {
    if (number === '.' && currentNumber.includes('.')) return;

    setCurrentNumber(prev => 
      prev === '0' || operation === '=' ? number : prev + number
    );

    if (operation === '=') {
      setPreviousNumber(null);
      setOperation(null);
    }
  };

  const handleClear = () => {
    setCurrentNumber('0');
    setPreviousNumber(null);
    setOperation(null);
  };

  const calculateResult = () => {
    if (!operation || !previousNumber) return currentNumber;

    const num1 = Number(previousNumber);
    const num2 = Number(currentNumber);

    if (operation === '/' && num2 === 0) return "Erro"; // ⚠️ Tratamento de divisão por zero

    const operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      'X': (a, b) => a * b,
      '/': (a, b) => a / b,
    };

    return String(operations[operation](num1, num2));
  };

  const handleOperation = (op) => {
    if (op === '=') {
      const result = calculateResult();
      setCurrentNumber(result);
      setPreviousNumber(null);
      setOperation('=');
      return;
    }

    if (previousNumber) {
      const result = calculateResult();
      setPreviousNumber(result);
      setCurrentNumber('0');
    } else {
      setPreviousNumber(currentNumber);
      setCurrentNumber('0');
    }

    setOperation(op);
  };

  return (
    <Container>
      <Content>
        <Calculator>
        <Input value={currentNumber}/> {/* Exibe a operação ou resultado */}
        <Row>
          <Button label="C" onClick={handleClear} />
          <Button label="=" onClick={() => handleOperation('=')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="X" onClick={() => handleOperation('X')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={() => handleOperation('-')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={() => handleOperation('+')}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="00" onClick={() => handleAddNumber('00')}/>
          <Button label="/" onClick={() => handleOperation('/')}/>
        </Row>
        </Calculator>
      </Content>
    </Container>
  );
}

export default App;
