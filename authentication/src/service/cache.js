Cache = require("cache");

auth_cache = new Cache(30 * 1000);


 const set_id = (id,email) => {
  auth_cache.put(id, email)
}

 const get_id = (id) => {
    return auth_cache.get(id);
}


module.exports = {
  set_id,
  get_id
}
