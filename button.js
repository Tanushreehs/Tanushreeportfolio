import React from 'react'; 
// A functional component that accepts props for text and click behavior 
const Button = ({ label, onClick, type = "button", style = {} }) => { 
return ( 
// Button element with prop 
<button type={type} onClick={onClick} style={style}> 
{label} 
</button> 
); 
}; 
export default Button; // Exporting to use in other files