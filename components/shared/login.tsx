import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa6";
import {signIn} from "next-auth/react";

const Login = () => {

    return (
        <div className={"w-full h-screen"}>
            <div className={"absolute inset-0"}>
                <Image
                    src={"https://t3.ftcdn.net/jpg/05/52/20/98/360_F_552209893_vXBU90Mj9zxsPV6xWHMG1giaKms7odKo.jpg"}
                    alt={"bg"}
                    fill
                />
            </div>
            <div
                className={"z-10 w-[550px] rounded-md bg-slate-900 opacity-90 h-[40vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4"}>
                <div className={"flex h-full items-center justify-center flex-col"}>
                    <h1 className={"text-3xl font-bold text-center"}>Login with ⤵</h1>
                    <Button
                        className={"mt-3 flex items-center gap-4 w-full h-[56px] bg-green-600 !text-white hover:bg-green-500"}>
                        <FcGoogle className={"w-7 h-7 bg-slate-900"}/>
                        Sign in with Google
                    </Button>
                    <Button
                        className={"mt-3 flex items-center gap-4 w-full h-[56px] bg-green-600 !text-white hover:bg-green-500"}
                        onClick={() => signIn("github")}
                    >
                        <FaGithub className={"w-7 h-7"}/>
                        Sign in with Github
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Login;