"use server"

import { revalidatePath } from "next/cache"
import { postTask } from "./cart"

export const createTask = async (formData) => {

    const data = Object.fromEntries(formData.entries())

    const res = await postTask(data)
    if(res.ok){
        revalidatePath('/about')
    }
    return res

}