

function getLocation() {

  let error;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function success(position) {
    console.log("Location fetched..");
  }

  getLocation();