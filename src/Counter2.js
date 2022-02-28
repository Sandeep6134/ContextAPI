import React, { useState } from 'react';
import { Context1 } from './context';
import Counter3 from './Counter3';

function Counter2() {

    // Convert this into Functional Component and check whether Context1.Consumer is working in Functional Component
    return (
      <Context1.Consumer>
        {(getValuesFromProvider) => {
          return (
            <>
              <h3> Counter 2 Component </h3>
              Initial Value : {getValuesFromProvider.initialValue} <br /> <br />
              <button onClick={getValuesFromProvider.handleIncrement}>
                {' '}
                Increment{' '}
              </button>{' '}
              &nbsp;
              <button onClick={getValuesFromProvider.handleDecrement}>
                {' '}
                Decrement{' '}
              </button>{' '}
              &nbsp;
              <button onClick={getValuesFromProvider.handleReset}>
                {' '}
                Reset{' '}
              </button>{' '}
              <Counter3 />
            </>
          );
        }}
      </Context1.Consumer>
    );
  }


export default Counter2;
