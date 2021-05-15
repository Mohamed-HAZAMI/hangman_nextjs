import React , {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Notification({ showNotification }) {

  const [open, setOpen] = React.useState();


  useEffect(() => {
    setOpen( showNotification);
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
      setOpen(false);
  };

  return (
    <div >
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} style={{backgroundColor: "#4d69fa"}}>
        You have already entered this letter
        </Alert>
      </Snackbar>

    </div>
  );
}

