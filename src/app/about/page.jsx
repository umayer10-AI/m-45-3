import BooksCArt from '@/component/BooksCArt';
import ModalTask from '@/component/Modal';
import { createTask } from '@/lib/action';
import { auth } from '@/lib/auth';
import { getPost } from '@/lib/cart';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    console.log(session)
    const user = session?.user

    if(!user){
        redirect("/auth/signin")
    }

    const data = await getPost()

    return (
        <div className='max-w-[90%] mx-auto'>
            <h2 className='text-3xl font-bold text-center my-10'>About Page: {data.length}</h2>
            <div className='flex justify-center'>
                <ModalTask createTask={createTask}></ModalTask>
            </div>

            <div className='grid grid-cols-3'>
                {
                    data.map(v => <BooksCArt key={v.id} book={v}></BooksCArt>)
                }
            </div>
        </div>
    );
};

export default page;