import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    properties: null,
    property: null,
    asc:true
  },

  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },

    setProperties: (state, properties) => {
      state.properties = properties;
    },
    setProperty: (state, property) => {
      state.properties = property;
    },
    sortPropertiesByPrice: (state) => {
      state.properties.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.properties.reverse();
      }
      state.asc = !state.asc;
    },
  },
  actions: {
    register: async (context, payload) => {
      const { full_name, email, password } = payload;
      fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
          full_name: full_name,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },

    login: async (context, payload) => {
      const { email, password } = payload;

      const response = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const userData = await response.json();
      context.commit("setUser", userData[0]);
    },

    getProperties: async (context) => {
      fetch("http://localhost:3000/properties")
        .then((res) => res.json())
        .then((properties) => context.commit("setProperties", properties));
    },
    getProperty: async (context, id) => {
      fetch("http://localhost:3000/properties/" + id)
        .then((res) => res.json())
        .then((property) => context.commit("setProperty", property));
    },
    deleteProperty: async (context, id) => {
      fetch("http://localhost:3000/properties/" + id, {
        method: "DELETE",
      }).then(() => context.dispatch("getProperties"));
    },
    createProperty: async (context, property) => {
      fetch("http://localhost:3000/properties/", {
        method: "POST",
        body: JSON.stringify(property),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getProperties"));
    },
    updateProperty: async (context, property) => {
      fetch("http://localhost:3000/properties/" + property.id, {
        method: "PUT",
        body: JSON.stringify(property),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getProperties"));
    },
  },
  modules: {},
});
