import { useState } from "react";
import { Box, Card } from "@mui/material";
import "./styles.css";

export default function App() {
  const [data, setData] = useState("");

  function getData(element) {
    setData(element.target.value);
  }
  return (
    <center>
      <Box width="300px">
        <Card>
          <div className="App">
            <h1>Hey TextBox</h1>
            <input
              name="input"
              type="text"
              placeholder="Enter the text here!"
              onChange={getData}
            />
            <br />
          </div>
        </Card>
      </Box>
      <br />
      <div>{data ? data : "Please enter the Data!"}</div>
    </center>
  );
}
