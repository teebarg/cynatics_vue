// import { Notification } from 'element-ui'
import { ErrorHandlerService } from "~/services/error-service";

export default function({ $axios, app, redirect, $auth }) {
  $axios.onError(error => {
    // let errorHandler = new ErrorHandlerService();
    // errorHandler.setError(error.response.data);
    // error.response.data.message = errorHandler.message;
    // errorHandler.message = "";

    // console.log(error.response);

    // app.$offLoader();
    // app.$showSnackbar(
    //   error.response.data.message || "Please Contact Adminsitrator",
    //   "error"
    // );

    if (error.response.status === 401) {
      // if ($auth.loggedIn) {
      //   $auth.logout();
      // }
      redirect("/auth/login");
    } else {
      let errorHandler = new ErrorHandlerService();
      errorHandler.setError(error.response.data);
      error.response.data.message = errorHandler.message;
      errorHandler.message = "";

      console.log(error.response);

      app.$offLoader();
      app.$showSnackbar(
        error.response.data.message || "Please Contact Adminsitrator",
        "error"
      );
    }
    // if (error.response.status === 500) {
    //   console.log('....................................')
    // }
  });
}
