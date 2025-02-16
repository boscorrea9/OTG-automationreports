import React from 'react';

function Report({ data }) {
  return (
    <div>
      <h2>Report</h2>
      {data.map((feature, index) => (
        <div key={index}>
          <h3>{index} {feature.name}</h3>
          {feature.elements.map((scenario, idx) => (
            <div key={idx}>
              <h4>{idx} {scenario.name}</h4>
              <ul>
                {scenario.steps.map((step, stepIdx) => (
                  <li key={stepIdx}>
                    {step.keyword} {step.name} - {step.result.status}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Report;
