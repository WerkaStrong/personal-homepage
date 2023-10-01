import createSagaMiddleware from "redux-saga";
import portfolioSlice from "./portfolioSlice";
import { portfolioSaga } from "./portfolioSaga";
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/themeSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        portfolio: portfolioSlice,
        theme: themeSlice,
    },
    middleware: [sagaMiddleware],
});

console.log('Running portfolioSaga');
sagaMiddleware.run(portfolioSaga);

export default store;
