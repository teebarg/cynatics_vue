// import { Notification } from 'element-ui'
import { ErrorHandlerService } from "~/services/error-service";

export default function({ $axios, app, redirect, $auth }) {
  $axios.onError(error => {

    if (error && error.response && error.response.status === 401) {
      // if ($auth.loggedIn) {
      //   $auth.logout();
      // }
      redirect("/auth/login");
    } else {
      let errorHandler = new ErrorHandlerService();
      errorHandler.setError(error.response.data);
      error.response.data.message = errorHandler.message;
      errorHandler.message = "";

      app.$offLoader();
      app.$showSnackbar(
        error.response.data.message || "Please Contact Adminsitrator",
        "error"
      );
    }
  });
}
