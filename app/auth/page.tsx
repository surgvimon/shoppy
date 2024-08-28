import { FormSignin, FormLogin } from '@/components/form';
import { Tabs } from '@/components/ui/tabs';
import React from 'react'

const AuthPage = () => {
    const tabData = [
        {
          label: 'Sign in',
          content:<FormLogin/>,
        },
        {
          label: 'Sign up',
          content:<FormSignin/>,
        },
    ];
    return (
        <div className="max-w-[760px] min-h-[350px] mx-auto flex flex-1 flex-nowrap [&>*]:w-full ">
            <Tabs  isFitted variant='enclosed' data={tabData} className={``} defaultIndex={1} />
        </div>            
    )
}

export default AuthPage;