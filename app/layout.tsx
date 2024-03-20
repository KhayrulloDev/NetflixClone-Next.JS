import "./globals.css";

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Provider} from "@/provider";
import GlobalContext from "@/context";
import {ReactNode} from "react";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: "Netflix Clone ",
    description: "Netflix Clone with Next.js",
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Provider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            <GlobalContext>
                {children}
            </GlobalContext>
        </Provider>
        </body>
        </html>
    );
}
