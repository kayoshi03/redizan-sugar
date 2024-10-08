import {useEffect} from "react";
import {useAppDispatch} from "@/hooks/redux.hooks.ts";
import {getPhoto} from "@/libs/redux/slice/photomain.slice.ts";

const useGetMainPhoto = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getPhoto())
    }, [dispatch]);
}

export default useGetMainPhoto