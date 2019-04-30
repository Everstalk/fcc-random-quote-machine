import React, { Component } from "react";
import { random } from "lodash";
import "typeface-roboto";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import QuoteMachine from "./components/QuoteMachine";

const styles = {
  container: {
    alignItems: "center",
    display: "flex",
    height: "100vh"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    };
    this.assignQuoteIndex = this.assignQuoteIndex.bind(this);
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
  }
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/Everstalk/d580a959b82e164a3dc1315e01068c26/raw/ebfc66425185e941e7ccf343ac7e82c603f33c67/african_proverbs.json"
    )
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignQuoteIndex));
  }

  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.selectedQuoteIndex)
    ) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  assignQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
  }

  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length - 1);
  }

  render() {
    console.log(this.state.quotes);
    return (
      <Grid
        className={this.props.classes.container}
        id="quote-box"
        justify="center"
        container
      >
        <Grid xs={11} lg={8} item>
          {this.selectedQuote ? (
            <QuoteMachine
              selectedQuote={this.selectedQuote}
              assignQuoteIndex={this.assignQuoteIndex}
            />
          ) : null}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
