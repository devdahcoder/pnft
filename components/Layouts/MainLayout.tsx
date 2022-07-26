import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head';

type Props = {
    children?: ReactNode;
    title?: string;
};


const MainLayout = ({title = 'This is the default title', children}: Props) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <div className="">
                {children}
            </div>
        </div>
    )
}


export const getMainLayout = (page?: ReactElement, title?: string) => (
    <MainLayout title={title}>{page}</MainLayout>
);

export default MainLayout;
