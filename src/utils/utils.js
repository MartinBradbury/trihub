import { axiosReq } from "../api/axiosDefaults";

/* resource can be comments or posts etc reusable */
export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        /* Some method, checks to see if any of the returnded data matches an id from a previous post
        if a match is found, exisitng accumilator is desplayed, if not, then a new post is displayed at the end */
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};