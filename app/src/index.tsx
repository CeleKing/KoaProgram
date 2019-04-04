import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from './components/Hello' 

main();  
function main() {  
    const app = document.createElement('div');    
    document.body.appendChild(app);  
    ReactDOM.render(<Hello compiler="TypeScript" framework="React" />, app); 
}