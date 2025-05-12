import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ValidateOtp from "./pages/ValidateOtp/ValidateOtp";
import TabForm from "./components/ui/TabForm/TabForm";
import Home from "./pages/Home";
import ChipsInput from "./pages/chipsInput/ChipsInput";
import Stepper from "./pages/stepper/Stepper";
import AutoComleteBar from "./pages/autocompleteSearchBar/AutoComleteBar";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path:"otp-input",
        element:<ValidateOtp/>
      },
      {
        path:"tabs-form",
        element:<TabForm />
      },
      {
        path:"chips-input",
        element:<ChipsInput />
      },
      {
        path:"stepper",
        element:<Stepper />
      },
      {
        path:"autocomplete-searchinput",
        element:<AutoComleteBar />
      }
    ]
  }
])

export default router;