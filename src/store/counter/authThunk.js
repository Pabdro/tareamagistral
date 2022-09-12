import { isLoading, setUser } from "./authSlice";
import { logInWithEmailAndPassword } from "../../config/firebaseConfig";
const user={
    name: 'Paul',
    lastName: 'Landaeta',
    password: 'password123'
}
export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(isLoading());
        const loginResponse = await logInWithEmailAndPassword(email, password);
        console.log(loginResponse);
        const {user}=loginResponse;
        dispatch(setUser(user));
        // dispatch(setUser(userData));
    };
}