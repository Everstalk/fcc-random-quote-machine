import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteMachine = ({ assignQuoteIndex, selectedQuote }) => (
  <Card>
    <CardContent>
      {selectedQuote ? (
        <Typography id="text">
          {selectedQuote.quote} -{" "}
          <span id="author">{selectedQuote.author}</span>
        </Typography>
      ) : null}
    </CardContent>
    <CardActions>
      <Button id="new-quote" size="small" onClick={assignQuoteIndex}>
        Next Quote
      </Button>
      <IconButton
        target="_blank"
        id="tweet-quote"
        href={encodeURI(`https://twitter.com/intent/tweet?text=${
          selectedQuote.quote
        }&hashtags=freecodecamp`)}
      >
        <FontAwesomeIcon icon={faTwitter} size="md">
          >
        </FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
);

export default QuoteMachine;
