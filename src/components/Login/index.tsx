import React, { useState } from 'react'
import * as S from './style';
import { createPortal } from 'react-dom';


const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getModalRoot = () => {
    let modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.id = 'modal-root';
      document.body.appendChild(modalRoot);
    }
    return modalRoot;
  };

  return (
    <>
      <div>
         <button onClick={() => setIsModalOpen(true)}>open</button>
      </div>
      
      {isModalOpen && createPortal(
        <S.ModalBackdrop onClick={() => setIsModalOpen(false)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseBtnWrap onClick={() => setIsModalOpen(false)}>
                <img src="/images/Cancel.svg" alt="취소" />
            </S.CloseBtnWrap>
            <S.LogoWrap>
                <img src="/images/LogoBlack.svg" alt="로고" />
            </S.LogoWrap>
            <S.InputWrap>
                <div>
                    <span>Email</span>
                    <input placeholder='이메일을 입력해주세요'></input>
                </div>
                <div>
                    <span>Pw</span>
                    <input placeholder='비밀번호를 입력해주세요'></input>
                </div>
            </S.InputWrap>
            <S.Footer>
                <button>로그인</button>
                <div>
                    <div>비밀번호 찾기</div>
                    <div>|</div>
                    <div>회원가입</div>
                    
                </div>
                <div>
                    <hr />
                    <span>or</span>
                    <hr />
                </div>
                <button>
                    <img src='/images/Google.svg' alt="구글 아이콘" />
                    구글로 로그인하기
                </button>
            </S.Footer>
          </S.ModalContent>
        </S.ModalBackdrop>,
        getModalRoot()
      )}
    </>
  );
}

export default Login;