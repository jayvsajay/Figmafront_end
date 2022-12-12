import { Magic } from "magic-sdk";

let magic = new Magic(process.env.REACT_APP_MAGIC_LINK);

export const loginUsers = async (email) => {    
    try {
        await magic.auth.loginWithEmailOTP({ email });
      } catch (error) {
        console.error(error);
      }
};

export const checkUserLoggedIn = async (setUser) => {
  try {
    const isLoggedIn = await magic.user.isLoggedIn();
    if (isLoggedIn) {
      const { email } = await magic.user.getMetadata();
      console.log(email);
      setUser(email);
      getToken();
      return (isLoggedIn)
    } else{
        console.log("User not logged In");
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const getToken = async () => {
  try {
    return await magic.user.getIdToken();
  } catch (err) {
    alert("Authenticate current session failed");
  }
};

export const logoutUser = async () => {
    try {
      await magic.user.logout();
    } catch (err) {
      alert("User logout failed");
    }
  };