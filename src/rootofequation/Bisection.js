import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Navbar from '../Navbar';
import '../Nucal.css';
import { evaluate } from 'mathjs'; // Import mathjs for evaluating expressions
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Bisection() {
  const [fx, setFx] = useState('');
  const [error, setError] = useState('');
  const [xL, setXL] = useState('');
  const [xR, setXR] = useState('');
  const [result, setResult] = useState(null);  // To store the result
  const [tableData, setTableData] = useState([]); // To store table data

  const calculateBisection = () => {
    const err = parseFloat(error);  // Convert error to a number
    let xl = parseFloat(xL);  // Convert xL to a number
    let xr = parseFloat(xR);  // Convert xR to a number
    let arr = [];

    if (isNaN(err) || isNaN(xl) || isNaN(xr)) {
      setResult('Invalid input');
      return;
    }

    let xm;
    let fxl, fxr, fxm;

    const f = (x) => {
      try {
        // Evaluate f(x) for a given x
        return evaluate(fx, { x });
      } catch (err) {
        setResult('Invalid function');
        return NaN;
      }
    };

    // Bisection algorithm
    let iteration = 0;
    while (Math.abs(xr - xl) > err) {
      xm = (xl + xr) / 2;
      fxl = f(xl);
      fxr = f(xr);
      fxm = f(xm);

      if (fxm === 0) break;  // Found exact root

      if (fxr * fxm < 0) {
        xl = xm;
      } else {
        xr = xm;
      }

      iteration++;
      if (iteration > 100) { // Avoid infinite loop
        setResult('Too many iterations');
        return;
      }
      
      // Store iteration data in the array
      arr.push({ iteration, xl: xl.toFixed(6), xr: xr.toFixed(6), xm: xm.toFixed(6) });
    }

    setTableData(arr);  // Set table data
    setResult(`Root is: ${xm.toFixed(6)}`);  // Set result
  };

  return (
    <div>
      <Navbar />
      <div className="body">
        <h1>Bisection</h1>

        <p>
          <TextField
            label="f(x)"
            variant="outlined"
            value={fx}
            onChange={(e) => setFx(e.target.value)}
          />
        </p>

        <p>
          <TextField
            label="Error"
            variant="outlined"
            value={error}
            onChange={(e) => setError(e.target.value)}
          />
        </p>

        <p>
          <TextField
            label="xL"
            variant="outlined"
            value={xL}
            onChange={(e) => setXL(e.target.value)}
          />
        </p>

        <p>
          <TextField
            label="xR"
            variant="outlined"
            value={xR}
            onChange={(e) => setXR(e.target.value)}
          />
        </p>

        <Button variant="contained" color="primary" onClick={calculateBisection}>
          Calculate
        </Button>

        {/* Display the result */}
        {result && <p>{result}</p>}

        {/* Display the table if there's data */}
        {tableData.length > 0 && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="bisection table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Iteration</TableCell>
                  <TableCell align="center">xL</TableCell>
                  <TableCell align="center">xR</TableCell>
                  <TableCell align="center">xM</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.iteration}>
                    <TableCell align="center">{row.iteration}</TableCell>
                    <TableCell align="center">{row.xl}</TableCell>
                    <TableCell align="center">{row.xr}</TableCell>
                    <TableCell align="center">{row.xm}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
}

export default Bisection;
