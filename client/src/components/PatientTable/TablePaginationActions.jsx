import { Box, IconButton } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

export function TablePaginationActions(props) {
  const { count, page, rowsPerPage, onPageChange } = props;
  const lastEvaluatedKey = useSelector(state => state.patient.lastEvaluatedKey)
  const dispatch = useDispatch();

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    if(lastEvaluatedKey) {
      dispatch(fetchPatients(lastEvaluatedKey))
    }

    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
      <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
}