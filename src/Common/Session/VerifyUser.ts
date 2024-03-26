import axios from "axios";
import {lookInSession} from "./Session";

export const verifyUser = async () => {
  let userSession = lookInSession("token");

  if (!userSession) return null;

  try {
    const res = await axios.post(
      "http://localhost:4000/api/v1/user/getuser",
      {},
      {
        headers: {
          authorization: `Bearer ${userSession}`,
        },
      }
    );

    if (res.data.success) {
      return res.data.user;
    } else {
      return null;
    }
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
