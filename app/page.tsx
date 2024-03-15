"use client"

import React from 'react';
import {Button} from "@/components/ui/button";
import {useGlobalContext} from "@/context";

const Page = () => {
    const {account} = useGlobalContext()

    console.log(account)

    return (
        <div>
            <Button>Click</Button>
        </div>
    );
}



export default Page;