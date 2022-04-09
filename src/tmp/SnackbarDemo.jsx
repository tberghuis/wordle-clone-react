import toast, { Toaster } from "react-hot-toast";

export default function SnackbarDemo() {
  const launchSnackbar = () => {
    console.log("launchSnackbar");
    toast("Here is your toast.");
  };

  return (
    <div>
      <button onClick={launchSnackbar}>launch snackbar</button>
      <Toaster />
    </div>
  );
}
