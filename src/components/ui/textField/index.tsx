import * as S from "./style";
import {TextFieldProps} from "src/types/ui/textField/textField.type";

const TextField = ({label ,name, value, type = "text", placeholder, onChange, }: TextFieldProps) => {
    return (
        <S.InputWrap>
            <S.Label>{label}</S.Label>
            <S.Input name={name} value={value} type={type} placeholder={placeholder} onChange={onChange} />
        </S.InputWrap>
    )
}

export default TextField;