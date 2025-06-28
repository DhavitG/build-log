import { useRef, useState } from "react";
import Button from "./Button";

function Otp() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const [disabled, setDisabled] = useState(true);
  return (
    <div className="flex justify-center">
      <SubOtpBox
        reference={ref1}
        onDone={() => {
          ref2.current.focus();
        }}
      />
      <SubOtpBox
        reference={ref2}
        onDone={() => {
          ref3.current.focus();
        }}
        onBack={() => {
          ref1.current.focus();
        }}
      />
      <SubOtpBox
        reference={ref3}
        onDone={() => {
          ref4.current.focus();
        }}
        onBack={() => {
          ref2.current.focus();
        }}
      />
      <SubOtpBox
        reference={ref4}
        onDone={() => {
          ref5.current.focus();
        }}
        onBack={() => {
          ref3.current.focus();
        }}
      />
      <SubOtpBox
        reference={ref5}
        onDone={() => {
          ref6.current.focus();
        }}
        onBack={() => {
          ref4.current.focus();
        }}
      />
      <SubOtpBox
        reference={ref6}
        onDone={() => {
          setDisabled(false);
        }}
        onBack={() => {
          ref5.current.focus();
        }}
      />

      <Button disabled={disabled}>Sign up!</Button>
    </div>
  );
}

function SubOtpBox({ reference, onDone, onBack }) {
  const [inputBoxVal, setInputBoxVal] = useState("");
  return (
    <div>
      <input
        value={inputBoxVal}
        ref={reference}
        maxLength={1}
        onKeyUp={(e) => {
          if (e.key === "Backspace") {
            onBack?.();
          }
        }}
        onChange={(e) => {
          const value = e.target.value;

          if (/^\d$/.test(value)) {
            setInputBoxVal(value);
            onDone?.();
          } else {
            e.target.value = "";
          }
        }}
        type="text"
        className="w-[40px] h-[50px] rounded-xl bg-blue-500 m-1 outline-none px-4 text-white"
      />
    </div>
  );
}

export default Otp;
