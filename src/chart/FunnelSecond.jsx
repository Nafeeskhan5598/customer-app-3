import React, { useEffect } from "react";
import D3Funnel from 'd3-funnel';
// import '../css/Funnel.css';

// import * as ReactDOM from "react-dom";


function FunnelSecond(props){
  useEffect(() => {
    const data = [
      { label: 'Inquiries', value: props.inquiryValue || 0 },
      { label: 'Applicants', value: props.applicantsValue || 0 },
      { label: 'Admits', value: props.admitsValue || 0 },
      { label: 'Deposits', value: props.depositsValue || 0 },
    ];

    console.log('Inside FunnelSecond useEffect:', data);
const options = {
    block: {
        dynamicHeight: true,
        minHeight: 20,
    },
    label: {
      fontFamily: 'Arial', // Set your desired font family
      fill: 'white', // Set your desired label color
      format: '{l}: {f}',
      fontSize: '12px',
    },
    tooltip: {
      enabled: true,
      format: '{l}: {f}',
    },
    curve: {
      enabled: true,
      height: 20,
      shade: -0.4,
    },

};

const containerId = `funnel-${props.id}`;
const container = document.getElementById(containerId);

if (container) {
  const chart = new D3Funnel(`#${containerId}`);
  chart.draw(data, options);

  return () => {
    chart.destroy();
  };
}
}, [props]);


return (
  <>
  <div id={`funnel-${props.id}`} style={{ height: "300px" }}></div>
</>
);
}

export default FunnelSecond;