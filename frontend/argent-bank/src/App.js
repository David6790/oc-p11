import Cookies from "js-cookie";
import Routeur from "./utils/Routeur";
import { useProfileMutation } from "./API/Authentification/api";
import { useDispatch } from "react-redux";
import { setUser } from "./features/users/userSlice";
import { useEffect } from "react";

function App() {
  const authToken = Cookies.get("authToken");
  const [profileMutation] = useProfileMutation();
  const dispatch = useDispatch();

  const relogAction = async () => {
    if (authToken) {
      try {
        const profile = await profileMutation(`Bearer ${authToken}`);
        dispatch(setUser(profile));
      } catch {}
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
