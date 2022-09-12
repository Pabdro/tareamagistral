import { isLoading, setUser } from "./authSlice";
import { logInWithEmailAndPassword } from "../../config/firebaseConfig";

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(isLoading());
        const loginResponse = await logInWithEmailAndPassword(email, password);
        console.log(loginResponse);
        const {user}=loginResponse;
        dispatch(setUser(user));
    };
}