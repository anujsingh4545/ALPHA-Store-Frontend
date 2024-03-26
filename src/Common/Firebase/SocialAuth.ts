import {GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "./Firebase";
import toast from "react-hot-toast";
import axios from "axios";
import {storeInSession} from "../Session/Session";
import {useNavigate} from "react-router-dom";

export const SocialAuth = async (platform: string, medium: String, setUser: any, navigate: any): Promise<void> => {
  if (platform) {
    let provider;

    if (platform == "google") {
      provider = new GoogleAuthProvider();
    } else if (platform == "github") {
      provider = new GithubAuthProvider();
    }
    await signInWithPopup(auth, provider!)
      .then(async (result) => {
        const user = result.user;

        if (user) {
          let Datasend;
          if (medium == "register") {
            Datasend = {
              name: user.displayName,
              email: user.email,
              loginMedium: platform,
            };
          } else if (medium == "login") {
            Datasend = {
              name: user.displayName,
              email: user.email,
              loginMedium: platform,
            };
          }

          await axios
            .post("http://localhost:4000/api/v1/user/authuser", Datasend)
            .then((result) => {
              setUser({
                user: result.data.user,
                loading: false,
              });
              storeInSession("token", result.data.token);
              navigate("/");

              toast.success(result.data.message);
            })
            .catch((e) => {
              toast.error("Some error Occured !");
            });
        }
      })
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          toast.error("An account with this email already exists using a different sign-in method.");
        } else {
          toast.error("Something went wrong, please try again!");
        }
      });
  }
};
