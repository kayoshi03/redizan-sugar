import {useAppDispatch} from "@/hooks/redux.hooks.ts";
import {useEffect} from "react";
import {getQuests} from "@/libs/redux/slice/quest.slice.ts";

export const useGetQuests = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getQuests())
    }, [dispatch]);
}