import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";

class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  handleIncr = (e) => {
    const name = e.target.name;
    this.setState((prev) => ({
      [name]: prev[name] + 1,
    }));
  };
  getTotal = () => this.state.good + this.state.neutral + this.state.bad;
  getPositiveFeedback = () => {
    return this.getTotal() ? (this.state.good / this.getTotal()) * 100 : 0;
  };
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions handleIncr={this.handleIncr} />
        </Section>
        <Section title="Statistics">
          {this.getTotal() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.getTotal()}
              positive={this.getPositiveFeedback().toFixed(2)}
            />
          ) : (
            <p>No feedback</p>
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
