const baseURL = "https://trihub-api-0d6dd53f4e6b.herokuapp.com/";
import { rest } from "msw";

export const handlers = [
  rest.get(`${baseURL} dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 1,
        username: "Martin",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 1,
        profile_image:
          "https://res.cloudinary.com/dpjdwg51y/image/upload/v1/media/images/IMG_0015_ok6wv0",
      })
    );
  }),
  rest.post(`${baseURL} dj-rest-auth/logout/`, (req, res, ctx)=> {
    return res(ctx.status(200));
  })
];
