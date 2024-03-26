import {atom} from "recoil";

const UserAtom = atom({
  key: "UserAtom",
  default: {
    user: null,
    loading: true,
  },
});

export default UserAtom;
