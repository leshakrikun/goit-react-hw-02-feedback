import React from 'react';

import FeedbackOptions from '../src/components/FeedbackOptions/feedbackOptions'
import Statistics from '../src/components/Statistics/statistics';
import Section from './components/Section/section';

  export default class App extends React.Component {
     state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
    quantity = e => {
        this.setState((state) => {
               return {
                [e.target.textContent]: state[e.target.textContent] + 1   
            }
        })
    }
 render() {
      return (
        <>
        <Section title = "Please leave feedback">
          <FeedbackOptions quantity = {this.quantity}/>
        </Section>
        <Section title = "Statistics">   
        <Statistics stats = {this.state}/>
        </Section>
        </>
    )
      }
  }
 