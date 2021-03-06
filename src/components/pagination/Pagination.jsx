import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

/* Components Family Tree:

            => LoadingLinear
APP => Home => Cards => Card => CardDetail
            => Pagination
            => LoadingCircle
*/

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  },
  spanMargin: {
    fontSize: 18,
    marginTop: 5
  }
}));

export default function PaginationGrid(props) {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  const { currentPage, onNextPage, onPreviousPage, lastpageIndex } = props;

  return (
    <Grid container spacing={5} data-test="component-pagination">
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {currentPage > 1 && (
            <Grid item>
              <Button onClick={onPreviousPage} data-test="back-button">
                Back
              </Button>
            </Grid>
          )}

          <Grid item className={classes.spanMargin}>
            <span data-test="page-display">
              Page{" "}
              <span data-test="currentPageIndex-display">{currentPage}</span> of{" "}
              {lastpageIndex}
            </span>
          </Grid>

          {currentPage < lastpageIndex && (
            <Grid item>
              <Button onClick={onNextPage} data-test="next-button">
                Next
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
