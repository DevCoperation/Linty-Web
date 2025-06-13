"use client";

import { useState } from 'react';
import Login from 'src/components/modal/login';

const LoginTest = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsModalOpen(true)}>로그인 열기</button>
            <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default LoginTest;