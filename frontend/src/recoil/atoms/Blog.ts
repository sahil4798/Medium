import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";
import { BACKEND_URL } from "../../config";

// export const blogAtomFamily = atomFamily({
//   key: "blogAtomFamily",
//   default: (id: number) => {
//     const res = await axios.get(`${BACKEND_URL}api/v1/blog/${id.toString()}`, {
//       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//     });
//     return res.data.blog;
//     // return {
//     //   id: 1,
//     //   title: "abc",
//     //   content: "ABC",
//     //   createdAt: new Date(),
//     //   author: {
//     //     name: "JACK",
//     //   },
//     // };
//   },
// });

export const blogAtomFamily = atomFamily({
  key: "blogAtomFamily",
  default: selectorFamily({
    key: "blogAtomFamilySelector",
    get: function (id: string) {
      return async () => {
        console.log("Checkpoint-*");
        const res = await axios.get(`${BACKEND_URL}api/v1/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        return res.data.blog;
      };
    },
  }),
});

// export const blogAtomFamily = selectorFamily({
//   key: "blogSelector",
//   get: (id: string) => async () => {
//     try {
//       const response = await axios.get(`${BACKEND_URL}api/v1/blog/${id}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       return response.data.blog;
//     } catch (error) {
//       console.error("Error fetching blog:", error);
//       throw error;
//     }
//   },
// });
