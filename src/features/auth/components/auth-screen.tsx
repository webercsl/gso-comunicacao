"use client";

import { useState } from "react";
import dynamic from 'next/dynamic';

import { SignInFlow } from "../types";

const SignInCard = dynamic(() => import('./sign-in-card').then(mod => mod.SignInCard), { ssr: false });
const SignUpCard = dynamic(() => import('./sign-up-card').then(mod => mod.SignUpCard), { ssr: false });

export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>("signIn");

    return (
        <div className="h-full flex items-center justify-center bg-[#5C3B58]">
            <div className="md:h-auto md:w-[420px]">
                {state === "signIn" ? <SignInCard setState={setState} /> : <SignUpCard setState={setState} />}
            </div>
        </div>
    )
}
