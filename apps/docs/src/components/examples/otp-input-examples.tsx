"use client";

import { OTPInput } from "@geckoui/geckoui";
import { useState } from "react";

export function BasicOTPInputExample() {
  const [code, setCode] = useState("");

  return (
    <div className="max-w-sm">
      <OTPInput value={code} onChange={setCode} />
    </div>
  );
}

export function TwoFactorAuthExample() {
  const [code, setCode] = useState("");

  return (
    <div className="max-w-sm">
      <div className="mb-2 font-medium">Enter verification code</div>
      <OTPInput value={code} onChange={setCode} length={6} numberOnly />
    </div>
  );
}

export function SMSVerificationExample() {
  const [smsCode, setSmsCode] = useState("");

  return (
    <div>
      <div className="mb-2 text-sm text-gray-600">Enter the 4-digit code sent to your phone</div>
      <OTPInput className="max-w-[180px]" value={smsCode} onChange={setSmsCode} length={4} />
    </div>
  );
}

export function AlphanumericCodeExample() {
  const [activationCode, setActivationCode] = useState("");

  return (
    <div className="max-w-md">
      <div className="mb-2 font-medium">Activation Code</div>
      <OTPInput value={activationCode} onChange={setActivationCode} length={8} numberOnly={false} />
    </div>
  );
}

export function CustomLengthExample() {
  const [pin, setPin] = useState("");
  const [longCode, setLongCode] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="mb-2 text-sm font-medium">4-digit PIN</div>
        <OTPInput className="max-w-[180px]" value={pin} onChange={setPin} length={4} />
      </div>
      <div>
        <div className="mb-2 text-sm font-medium">8-digit code</div>
        <OTPInput value={longCode} onChange={setLongCode} length={8} />
      </div>
    </div>
  );
}

export function DisabledOTPExample() {
  return (
    <div className="max-w-sm">
      <OTPInput value="123456" onChange={() => {}} disabled />
    </div>
  );
}
