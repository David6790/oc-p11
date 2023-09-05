import Cookies from "js-cookie";
import Routeur from "./routing/Routeur";
import { useProfileMutation } from "./API/Authentification/api";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./features/users/userSlice";
import { useEffect } from "react";
import { userLoggedIn } from "./features/users/userSlice";

function App() {
  const authToken = Cookies.get("authToken");
  const [profileMutation] = useProfileMutation();
  const dispatch = useDispatch();

  const user = useSelector(userLoggedIn);
  console.log(user);

  const relogAction = async () => {
    if (authToken) {
      const profile = await profileMutation(`Bearer ${authToken}`);
      dispatch(setUser(profile));
    }
  };

  useEffect(() => {
    relogAction();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Routeur />
    </>
  );
}

export default App;
