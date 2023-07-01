import { useState } from "react";
import Heading from "../../../../../ui/heading";
import Input from "../../../../../ui/Input";
import { useForm } from "react-hook-form";
import Button from "../../../../../ui/button";
import { useFPCheckout } from "fountainpay-react";
import "./PaymentPopup.scss";
import { useNavigate } from "react-router-dom";

interface IPopupProps {
  setPopup?: any;
  amount: any;
}

const PaymentPopup = (props: IPopupProps) => {
  const { setPopup, amount } = props;
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [lastName, setLastName] = useState("");
  const [otherName, setOtherName] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [isError, setIsError] = useState(false);

  const { handleSubmit } = useForm();

  const navigate = useNavigate();

  const refresh = () => {
    window.location.reload();
  };

  const config = {
    publicKey: "FP-PUBK-6305987402771685627071469",
    tnxRef: `${Date.now()}`,
    amount: amount,
    narration: "Purchased from Alemax",
    currency: "NGN",
    channels: ["card", "qrcode", "directDebit"],
    customer: {
      email: email,
      phoneNo: phoneNo,
      lastName: lastName,
      otherName: otherName,
    },
    metadata: {
      container: "",
      isModal: true,
      minimized: false,
      theme: { disableDarkMode: false, mode: "light" },
    },
    close: function (error: any) {
      alert(error);
    },
  };

  const checkout = useFPCheckout(config);

  const onSubmit = () => {
    checkout({
      callback: (resp) => {
        if (resp.status === true) {
          setSuccessful(true);
          localStorage.removeItem("cartItems");
        } else {
          setIsError(true);
        }
      },
      close: () => {},
    });
  };

  return (
    <>
      <div className="popup">
        <div className="popup-container">
          {/* <p
            style={{ cursor: "pointer" }}
            className="close"
            onClick={() => setPopup(false)}
          >
            Close
          </p> */}
          <Heading
            className="popup-header"
            title="Enter your details"
            subTitle="Complete the form below to start making payment"
          />
          <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Enter First Name"
              label="First Name"
              value={otherName}
              onChange={setOtherName}
              name="otherName"
              required
            />
            <Input
              placeholder="Enter Last Name"
              label="Last Name"
              value={lastName}
              onChange={setLastName}
              name="lastName"
              required
            />
            <Input
              placeholder="Enter Email Address"
              label="Email Address"
              value={email}
              onChange={setEmail}
              name="email"
              required
            />
            <Input
              placeholder="Enter Phone Number"
              label="Phone Number"
              value={phoneNo}
              onChange={setPhoneNo}
              name="phoneNo"
              type="tel"
              required
            />
            <Button className="add-button" text="Proceed" />
            <Button
              className="add-button cancel"
              text="Cancel"
              invertStyle
              onClick={() => setPopup(false)}
            />
          </form>
        </div>
      </div>
      {successful && (
        <div className="popup">
          <div className="popup-container">
            <Heading
              className="popup-header"
              title="Payment Successfully made"
              subTitle="This payment was made successfully"
            />
            <Button
              className="add-button"
              text="Done"
              onClick={() => {
                navigate("/");
                refresh;
              }}
            />
          </div>
        </div>
      )}
      {isError && (
        <div className="popup">
          <div className="popup-container">
            <Heading
              className="popup-header"
              title="Error making payment"
              subTitle="There is an error making this payment"
            />
            <Button
              className="add-button"
              text="Go to Checkout"
              onClick={refresh}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentPopup;
