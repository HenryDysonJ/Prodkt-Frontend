import { SingleNavBars } from "../../HOC";
import Login from "./login";

const LoginParent = SingleNavBars(() => {
    return (
        <Login />
    )
});
export default LoginParent