import Cookies from "js-cookie";
import Routeur from "./routing/Routeur";
import { useGetProfileMutation } from "./API/Authentification/api";
import { useDispatch } from "react-redux";
import { allowCookies, setUser } from "./features/users/userSlice";
import { useEffect, useState } from "react";
import UseCookies from "./Cookies/UseCookies";

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
      dispatch(allowCookies());
      setIsLoading(false);
    } else {
      setIsLoading(false);
      Cookies.remove("authorizeCookies");
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
      <UseCookies />
    </>
  );
}

export default App;
