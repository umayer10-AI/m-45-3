import { success } from "better-auth"
import tasks from "../data/data.json"

export const getPost = async () => {
    return tasks
}

export const postTask = async (newData) => {
    newData.id = tasks.length+1
    tasks.push(newData)
    console.log(newData,tasks.length)
    return {ok: true, messege: "Successfully"}
}