import type { OTPInputProps } from "../../OTPInput";
import type { RHFBaseProps } from "../RHF.types";

export interface RHFOTPInputProps extends RHFBaseProps, Omit<OTPInputProps, "value" | "onChange"> {}
