import axios from "axios";
import { atom, selector } from "recoil";
import { BACKEND_URL } from "../../config";

export const blogAtom = atom({
  key: "blogAtom",
  default: selector({
    key: "blogSelctor",
    get: async () => {
      const res = await axios.get(`${BACKEND_URL}api/v1/blog/1`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      return res.data.blog;
    },
  }),
});

//// WAY-1
// interface BlogType {
//   id: number;
//   title: string;
//   content: string;
//   createdAt: Date;
//   author: {
//     name: string;
//   };
// }
// const Blog: BlogType = {
//   id: 1,
//   title: "abc",
//   content: "ABC",
//   createdAt: new Date(),
//   author: {
//     name: "JACK",
//   },
// };

// export const blogAtom = atom({ key: "blogAtom", default: { ...Blog } });

//// Selctor
// export const blogSelector = selector({
//   key: "blogSelector",
//   get: ({ get }) => {
//     const blog = get(blogAtom);
//     return { title: blog.title, content: blog.content };
//   },
// });

// *******how to acesss in required fie************
// const modifiedBlog = useRecoilValue(blogSelector);
// console.log(modifiedBlog);
