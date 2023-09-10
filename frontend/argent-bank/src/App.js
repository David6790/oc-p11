import Cookies from "js-cookie";
import Routeur from "./routing/Routeur";
import { useGetProfileMutation } from "./API/Authentification/api";
import { useDispatch } from "react-redux";
import { setUser } from "./features/users/userSlice";
import { useEffect, useState } from "react";

function App() {
  const authToken = Cookies.get("authToken");

  const [getProfileMutation] = useGetProfileMutation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const relogAction = async () => {
    if (authToken) {
      setIsLoading(true);
      const profile = await getProfileMutation(`Bearer ${authToken}`);
      dispatch(setUser(profile));
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    relogAction();
    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return (
      <div className="loaderWait">
        <p>Chargement en cours ...</p>
      </div>
    );
  }

  return (
    <>
      <Routeur />
    </>
  );
}

export default App;
