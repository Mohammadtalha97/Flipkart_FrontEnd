// eslint-disable-next-line import/no-anonymous-default-export
export default (query) => {
  if (query) {
    const queryString = query.split("?")[1]; //(1)
    if (queryString.length > 0) {
      const params = queryString.split("&"); //(2)
      const paramsObj = {};
      params.forEach((params) => {
        const keyValue = params.split("="); //(3)
        paramsObj[keyValue[0]] = keyValue[1];
      });
      return paramsObj;
    } else {
      return {};
    }
  }
};
/*
(1) 
    - localhost:3000/Apple?asfsfsdfsfsf,
    - so it will split by ? 
    - so [0] will be Apple
    - and [1] will be after ? so we want that that's why



(2)
    - now in querystring we have --> cid=5fdb1bc09344d14fcccf0dfe&type=store
    - we want 2 thing [cid, type] so both are split into params


(3)
    - params have 2 thing [cid=5fdb1bc09344d14fcccf0dfe, type=store]
    - we loop through them and extract key and value
    - keyValue hold ---> [cid, 5fdb1bc09344d14fcccf0dfe], [type, store]
*/
