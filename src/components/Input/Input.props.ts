import { InputHTMLAttributes } from "react";

export default interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isValid?: boolean;
}