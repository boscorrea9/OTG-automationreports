import React from 'react';

const TestDetails = ({ steps }) => {
  return (
    <div className='test-log'>
      {steps.map((step, index) => (
        <div 
          key={index} 
          className={`test-log-item ${step.status === 'passed' ? 'passed-step' : step.status === 'failed' ? 'failed-step' : 'skipped-step'}`}
        >
          {step.name} - {step.status}
          {step.textLogs.length > 0 && (
            <div>
              {step.textLogs.map((log, logIndex) => (
                <div key={logIndex}>{atob(log)}</div>
              ))}
            </div>
          )}
          {step.imageLogs.length > 0 && (
            <div>
              {step.imageLogs.map((log, logIndex) => (
                <div key={logIndex}>
                  <a href={`data:image/png;base64,${log}`} target="_blank" rel="noopener noreferrer">
                    <img src={`data:image/png;base64,${log}`} width={'50%'} alt={`log-${logIndex}`} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TestDetails;
