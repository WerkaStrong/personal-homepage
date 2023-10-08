import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, selectStatus } from "../../../portfolioSlice";
import { useEffect } from "react";
import { Loader } from "./States/Loader/index";
import { Error } from "./States/Error";
import { Success } from "./States/Success";

export const ProjectsTiles = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRepos());
    }, [dispatch]);

    const status = useSelector(selectStatus);
    switch (status) {
        case "loading":
            return <Loader />;
        case "success":
            return <Success />;
        case "error":
            return <Error />;
        default:
            return null;
    }
};
