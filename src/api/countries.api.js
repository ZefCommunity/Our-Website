import axios from "axios";

export const countriesApi = axios.create({
  baseURL: "https://countriesnow.space/api/v0.1/countries",
  timeout: 1500,
});

countriesApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let message = "Unexpected Error";
    let status = null;
    let errors = null;

    if (error.response) {
      status = error.response.status;

      message =
        error.response.data?.message ||
        error.response.data?.error ||
        "An Error Occured";

      errors = error.response.data?.errors || null;

      if (status === 404) {
        message = "404 Not Found";
      }
    } else if (error.request) {
      message = "Can't connect to the server";
    } else {
      message = error.message || "Something went wrong, please try again later";
    }

    return Promise.reject({
      message,
      status,
      errors,
      originalError: error,
    });
  },
);
