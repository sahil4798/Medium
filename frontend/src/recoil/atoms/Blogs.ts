import axios from "axios";
import { atom, selector } from "recoil";
import { BACKEND_URL } from "../../config";

export const blogsAtom = atom({
  key: "blogsAtom",
  default: selector({
    key: "blogsAtomSlector",
    get: async () => {
      const res = await axios.get(`${BACKEND_URL}api/v1/blog/bulk`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return res.data.blogs;
    },
  }),
});
