"use client";

import React, {useState} from 'react';
import * as S from './style';
import Portal from 'src/libs/portal';
import {ModalProps} from 'src/types/ui/modal/modal.type';
import Google from "src/components/ui/icons/Google";
import Cancel from "src/components/ui/icons/Cancel";
import TextField from "src/components/ui/textField";
import Logo from "src/components/ui/icons/logo";
import Button from "src/components/ui/button";

const Login = ({isOpen, onClose}: ModalProps) => {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    // 이 코드는 나중에 훅으로 옮기기
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLogin((prev) => ({...prev, [name]: value}));
    };

    if (!isOpen) return null;

    return (
        <Portal>
            <S.ModalBackgroud onClick={onClose}>
                <S.ModalContent onClick={(e) => e.stopPropagation()}>
                    <S.CloseWrap>
                        <Cancel onClick={onClose}/>
                    </S.CloseWrap>
                    <S.LogoWrap>

                        <Logo/>
                    </S.LogoWrap>
                    <S.InputWrap>
                        <TextField label="Email" name="email" value={login.email} placeholder="이메일을 입력해주세요."
                                   onChange={handleChange}/>
                        <TextField label="Pw" name="password" value={login.password} placeholder="비밀번호를 입력해주세요."
                                   onChange={handleChange}/>
                    </S.InputWrap>
                    <S.ButtonWrap>
                        <Button text="로그인" color="primary"/>
                        <S.Routing>
                            <S.RoutingSpan>비밀번호 찾기</S.RoutingSpan>
                            <S.RoutingSpan>|</S.RoutingSpan>
                            <S.RoutingSpan>회원가입</S.RoutingSpan>
                        </S.Routing>
                        <Button text="구글로 로그인하기" color="white" iconPosition="left" icon={<Google />} />
                    </S.ButtonWrap>
                </S.ModalContent>
            </S.ModalBackgroud>
        </Portal>
    );
};

export default Login;