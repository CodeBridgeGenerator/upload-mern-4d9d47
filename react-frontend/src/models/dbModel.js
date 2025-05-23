import axios from "axios";

export const db = {
  state: {},
  reducers: {
    // handle state changes with pure functions
    update(state, newState) {
      return { ...state, ...newState };
    },
  },
  effects: (dispatch) => ({
    /////////////////////
    //// GET SCHEMA ////
    ////////////////////
    async getSchema(serviceName, reduxState) {
      return new Promise((resolve, reject) => {
        const feathersjwt = localStorage.getItem("feathers-jwt");
        axios
          .get(`${process.env.REACT_APP_SERVER_URL}/${serviceName}Schema`, {
            headers: {
              Authorization: `Bearer ${feathersjwt}`,
            },
          })
          .then((_schema) => resolve(_schema))
          .catch((error) => {
            console.debug("Failed to get schema", { error });
            dispatch.toast.alert({
              type: "error",
              title: `Get schema ${serviceName}`,
              message: error.message || "Failed to get schema",
            });
            reject(error);
          });
      });
    },
  }),
};
