import React from 'react';
import TestDetails from './TestDetails';
import Tooltip from './Tooltip/Tooltip';

const TestTable = ({ testNames, expandedTests, toggleExpand, isFileUploaded }) => {
    return (
        <div className='testname'>
            {isFileUploaded && (
                <div className='thead'>
                    <div className='tr row-head'>
                        <div className='th arrow-td-width'></div>
                        <div className='name-th'>Test Name</div>
                        <div className='table-status-header'>Status</div>
                    </div>
                    {/* <div className='tdrule'></div> */}
                </div>
            )}

            <div className='tbody'>
                {testNames.map((test) => (
                    <React.Fragment key={test.id}>
                        <div className='tr row' onClick={() => toggleExpand(test.id)}>
                            <div className='arrow-td-width'>
                                <Tooltip text="Click to expand">
                                    <span className='click box-accordion'>
                                        <span className={expandedTests[test.id] ? 'rotated triangle' : 'triangle'}>
                                        </span>
                                    </span>
                                </Tooltip>
                            </div>
                            <div className='desc-td'>{test.name}</div>
                            <div className='table-position-status statusTd'>
                                {test.status === 'Passed'
                                    ? <img src='gt.png' alt="Passed" width={'28px'} />
                                    : test.status === 'Failed' ? <img src='red-cross.png' alt="Failed" width={'20px'} /> : test.status}
                            </div>
                        </div>
                        {expandedTests[test.id] && (
                            <div key={`${test.id}-details`} className='attached-cell tr wrap-text'>
                                <div className='td' colSpan="3">
                                    <TestDetails steps={test.steps} />
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default TestTable;
