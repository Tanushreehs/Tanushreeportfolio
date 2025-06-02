import React from 'react'; 
// A simple card component with optional title and children content 
const Card = ({ title, children, style = {} }) => { 
return ( 
<div style={{ 
border: '1px solid #ccc', 
borderRadius: '8px', 
padding: '16px', 
margin: '16px 0', 
boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
...style 
}}> 
{title&&<h3>{title}</h3>} 
{children} 
</div> 
); 
}; 
export default Card;