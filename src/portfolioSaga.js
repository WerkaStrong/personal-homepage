import { fetchRepos, setRepos, setStatus } from "./portfolioSlice";
import { call, put, takeEvery, delay } from "redux-saga/effects";
import { getRepos } from "./getRepos";

function* fetchProjectsHandler() {
    try {
        yield delay(1500);
        const repos = yield call(getRepos, "WerkaStrong");
        yield put(setStatus("success"));
        yield put(setRepos(repos));
    } catch (error) {
        console.error("Saga error: ", error);
        yield put(setStatus("error"));
    }
}

export function* portfolioSaga() {
    yield takeEvery(fetchRepos.type, fetchProjectsHandler);
}
