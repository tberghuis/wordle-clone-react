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

      <br />

      <button onClick={multilinetemplatetest}>multilinetemplatetest</button>
    </div>
  );
}

function multilinetemplatetest() {
  const validwords = `line1
line2
line3`.split("\n");

  // const validwords = lines.split("\n");

  console.log(`validwords 0 ${validwords[0]}`);
  console.log(`validwords 2 ${validwords[2]}`);
  console.log(`validwords 3 ${validwords[3]}`);
  console.log(`validwords 4 ${validwords[4]}`);
  console.log(`validwords 5 ${validwords[5]}`);
}
