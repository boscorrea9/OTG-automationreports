import React, { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import TestTable from './components/TestTable';
import PixelCar from './components/pixelCar/pixelCar';

function App() {

  const [testNames, setTestNames] = useState([]);
  const [expandedTests, setExpandedTests] = useState({});
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [showHello, setShowHello] = useState(false);

  const handleFileUpload = (data) => {
    const names = data.flatMap((feature) =>
      feature.elements.map((scenario) => {
        const status = scenario.steps.some(step => step.result.status !== 'passed') ? 'Failed' : 'Passed';
        const stepNames = scenario.steps
          .filter(step => step.name)
          .map(step => {
            const textLogs = step.embeddings
              ?.filter(embedding => embedding.mime_type === "text/x.cucumber.log+plain")
              .map(embedding => embedding.data) || [];
            const imageLogs = step.embeddings
              ?.filter(embedding => embedding.mime_type === "image/png")
              .map(embedding => embedding.data) || [];
            return { name: step.name, status: step.result.status, textLogs: textLogs, imageLogs: imageLogs };
          });
        return {
          id: scenario.id,
          name: scenario.name,
          status: status,
          steps: stepNames
        };
      })
    ).sort((a, b) => a.status === 'Failed' ? -1 : 1);
    setTestNames(names);
    setIsFileUploaded(true);
  };

  const toggleExpand = (id) => {
    setExpandedTests(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const handleMouseOver = () => {
    setShowHello(true);
  };

  const handleMouseOut = () => {
    setShowHello(false);
  };

  return (
    <>
      <h1 className='header navHead'>
        <img src='pg-logo.png' alt='Guru99' className='logo' />
        <span className='text-shadow'>
          Guru Dashboard
        </span>
        <span className='OntheGoContainer' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <span>
            <span className={showHello ? 'O' : ''}>
              O{showHello && (<span>n</span>)}
            </span>
            <span className='T'>
              T{showHello && (<span>he</span>)}
            </span>
            <span className={showHello ? 'G' : ''}>
              G{showHello && (<span>o</span>)}
            </span>
          </span>
        </span>

        <div className={showHello ? 'show-car' : 'hide-car'}>
          <PixelCar />
        </div>

      </h1>
      <div className={`App ${isFileUploaded ? 'file-uploaded' : ''}`}>
        {!isFileUploaded && <FileUpload onFileUpload={handleFileUpload} />}
        {!isFileUploaded &&
          <>
            <br />
            <div className='upload-instructions'>Upload a cucumber-report.json file to view test results</div>
          </>
        }
        <TestTable testNames={testNames} expandedTests={expandedTests} toggleExpand={toggleExpand} isFileUploaded={isFileUploaded} />

      </div>

    </>
  );
}

export default App;
