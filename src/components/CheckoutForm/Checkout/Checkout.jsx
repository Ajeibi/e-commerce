import React, { useState, useEffect } from "react";
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { commerce } from "../../../lib/commerce";
import { Link } from "react-router-dom";

const steps = ["Shipping address", "Payment details"];

function Checkout({ cart, order, onCaptureCheckout, error }) {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const classes = useStyles();
  // const history = useHistory();

  useEffect(() => {
    if (cart) {
      const generateToken = async () => {
        try {
            const token = await commerce.checkout.generateToken(cart.id, { type: "cart" });

          setCheckoutToken(token);
        } catch (error) {
          // Handle error here
          // history.pushState('/');
          console.log(error);
        }
      };

      generateToken();
    }
  }, [cart]);

  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const backStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const next = (data) => {
    setShippingData(data);

    nextStep();
  };

  
  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true)
    }, 3000);
  }

  let Confirmation = () => order.customer ? (
    <>
          <div>
            <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
            <Divider className={classes.divider} />
            <div>
              <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
          </div>
    </>
  ) : isFinished ? (
    <>
    <div>
      <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
      <Divider className={classes.divider} />
      <div>
        <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
    </div>
</>
  ) : (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  )

  if (checkoutToken === null) {
    <>
      <Typography variant="h5">Error: {error}</Typography>
      <br />
      <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
    </>
  };

  return (
    <>
    <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === 0 ? (
            <AddressForm checkoutToken={checkoutToken} next={next} />
          ) : (
            <PaymentForm
              shippingData={shippingData}
              checkoutToken={checkoutToken}
              nextStep={nextStep}
              backStep={backStep}
              setIsFinished={setIsFinished}
              onCaptureCheckout={onCaptureCheckout}
              timeout={timeout}
            />
          )}
        </Paper>
      </main>
      {activeStep === steps.length && isFinished && <Confirmation />}
    </>
  );
}

export default Checkout;