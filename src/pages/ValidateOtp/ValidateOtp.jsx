import React, { useEffect, useRef, useState } from "react";

const ValidateOtp = ({
  otpDigitlength = 4,
  onComplete = (otp) => console.log("Submit this OTP:", otp),
  autoFocus = true,
}) => {
  const refArr = useRef([]);
  const [inputArr, setInputArr] = useState(new Array(otpDigitlength).fill(""));
  const [error, setError] = useState("");

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;

    const newValue = value.trim();
    const newArr = [...inputArr];

    newArr[index] = newValue.slice(-1);

    setInputArr(newArr);
    setError("");
    if (newValue && index < otpDigitlength - 1) {
      refArr.current[index + 1]?.focus();
    }
  };

  const handleOnKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value) {
      refArr.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < otpDigitlength - 1) {
      refArr.current[index + 1]?.focus();
    } else if (e.key === "ArrowLeft") {
      refArr.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("Text").trim();
    if (isNaN(pastedData)) return;

    const arr = pastedData.slice(0, otpDigitlength).split("");
    const newInputArr = [...inputArr];

    arr.forEach((char, i) => {
      newInputArr[i] = char;
      if (refArr.current[i]) {
        refArr.current[i].value = char;
      }
    });

    setInputArr(newInputArr);

    const lastFilledIndex =
      arr.length >= otpDigitlength ? otpDigitlength - 1 : arr.length;
    refArr.current[lastFilledIndex]?.focus();
  };

  useEffect(() => {
    if (autoFocus) {
      refArr.current[0]?.focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    if (inputArr.every((digit) => digit !== "")) {
      const otp = inputArr.join("");
      onComplete?.(otp);
    }
  }, [inputArr]);

  
  return (
    <div className=" flex flex-col items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        Validate OTP
      </h1>
      <div
        className="flex gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md"
        role="group"
        aria-label="OTP input fields"
      >
        {inputArr.map((input, index) => (
          <input
            onPaste={handlePaste}
            ref={(input) => (refArr.current[index] = input)}
            key={index}
            aria-label={`OTP Digit ${index + 1}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={inputArr[index]}
            onChange={(e) => handleOnChange(e.target.value, index)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
            className="w-14 h-14 text-center text-2xl font-semibold rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        ))}
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>
      )}

      {inputArr.every((value) => value !== "") && (
        <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
          onClick={() => {
            setInputArr(new Array(otpDigitlength).fill(""));
            refArr.current[0]?.focus();
          }}
        >
          Clear OTP
        </button>
      )}
    </div>
  );
};

export default ValidateOtp;
