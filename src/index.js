import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const INFO = [
  {"name":"Master Bath Renovation","summary":"This is my new bathroom","cost":"$25,000","Room":"Master Bedroom","details":"Contractor is Bob's Renovations",
  "time":"4 weeks","type":"contractor","Status":"In Progress"},
  {"name":"Kitchen Renovation","summary":"This is my new kitchen","cost":"$60,000","Room":"Kitchen","details":"Contractor is Bob's Renovations",
  "time":"6 weeks","type":"contractor","Status":"In Progress"},
  {"name":"Replace Hall Toilet","summary":"Need new toilet for hall bathroom","cost":"$200","Room":"Hall Bathroom","details":"Used glacier bay toilet and did work myself",
  "time":"1 day","type":"DIY","Status":"Completed"},
  {"name":"Tree Removal","summary":"Need dead tree removed","cost":"$2,000","Room":"Exterior","details":"Contractor is Tree Removal Service",
  "time":"1 day","type":"contractor","Status":"Completed"},
  {"name":"Install Ceiling Fan","summary":"This is my new ceilign fan","cost":"$300","Room":"Family Room","details":"Install new ceiling fan I bought online",
  "time":"1 day","type":"DIY","Status":"Not Started"},
  {"name":"Gutter Replacement","summary":"House needs new gutters","cost":"$1,500","Room":"Exterior","details":"Contractor is Gutter Fix LLC",
  "time":"1 day","type":"contractor","Status":"Not Started"}
];

ReactDOM.render(
  <BrowserRouter>
    <App info={INFO}/>, 
  </BrowserRouter>,
document.getElementById('root'));