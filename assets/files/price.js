let startingLocation = document.getElementById("startingLocation");
let destinationLocation = document.getElementById("destinationLocation");

let fares = {
  "Maruti Ertiga": [
    {
      from: "Indore",
      to: "Diwas",
      fare: 500,
    },
    {
      from: "Indore",
      to: "Astra",
      fare: 520,
    },
    {
      from: "Indore",
      to: "Bhopal",
      fare: 530,
    },
    {
      from: "Indore",
      to: "Sehore",
      fare: 550,
    },
    {
      from: "Indore",
      to: "VITB College",
      fare: 580,
    },
    {
      from: "Diwas",
      to: "Indore",
      fare: 510,
    },
    {
      from: "Diwas",
      to: "Astra",
      fare: 510,
    },
    {
      from: "Diwas",
      to: "Bhopal",
      fare: 540,
    },
    {
      from: "Diwas",
      to: "Sehore",
      fare: 560,
    },
    {
      from: "Diwas",
      to: "VITB College",
      fare: 590,
    },
    {
      from: "Astra",
      to: "Indore",
      fare: 520,
    },
    {
      from: "Astra",
      to: "Diwas",
      fare: 510,
    },
    {
      from: "Astra",
      to: "Bhopal",
      fare: 525,
    },
    {
      from: "Astra",
      to: "Sehore",
      fare: 545,
    },
    {
      from: "Astra",
      to: "VITB College",
      fare: 575,
    },
    {
      from: "Bhopal",
      to: "Indore",
      fare: 530,
    },
    {
      from: "Bhopal",
      to: "Diwas",
      fare: 540,
    },
    {
      from: "Bhopal",
      to: "Astra",
      fare: 525,
    },
    {
      from: "Bhopal",
      to: "Sehore",
      fare: 535,
    },
    {
      from: "Bhopal",
      to: "VITB College",
      fare: 565,
    },
    {
      from: "Sehore",
      to: "Indore",
      fare: 550,
    },
    {
      from: "Sehore",
      to: "Diwas",
      fare: 560,
    },
    {
      from: "Sehore",
      to: "Astra",
      fare: 545,
    },
    {
      from: "Sehore",
      to: "Bhopal",
      fare: 535,
    },
    {
      from: "Sehore",
      to: "VITB College",
      fare: 570,
    },
    {
      from: "VITB College",
      to: "Indore",
      fare: 580,
    },
    {
      from: "VITB College",
      to: "Diwas",
      fare: 590,
    },
    {
      from: "VITB College",
      to: "Astra",
      fare: 575,
    },
    {
      from: "VITB College",
      to: "Bhopal",
      fare: 565,
    },
    {
      from: "VITB College",
      to: "Sehore",
      fare: 570,
    },
  ],
  "Maruti Suzuki Alto 800": [
    {
      from: "Indore",
      to: "Diwas",
      fare: 980,
    },
    {
      from: "Indore",
      to: "Astra",
      fare: 1020,
    },
    {
      from: "Indore",
      to: "Bhopal",
      fare: 1050,
    },
    {
      from: "Indore",
      to: "Sehore",
      fare: 990,
    },
    {
      from: "Indore",
      to: "VITB College",
      fare: 1010,
    },
    {
      from: "Diwas",
      to: "Indore",
      fare: 1020,
    },
    {
      from: "Diwas",
      to: "Astra",
      fare: 1000,
    },
    {
      from: "Diwas",
      to: "Bhopal",
      fare: 990,
    },
    {
      from: "Diwas",
      to: "Sehore",
      fare: 1050,
    },
    {
      from: "Diwas",
      to: "VITB College",
      fare: 1030,
    },
    {
      from: "Astra",
      to: "Indore",
      fare: 1010,
    },
    {
      from: "Astra",
      to: "Diwas",
      fare: 980,
    },
    {
      from: "Astra",
      to: "Bhopal",
      fare: 1005,
    },
    {
      from: "Astra",
      to: "Sehore",
      fare: 990,
    },
    {
      from: "Astra",
      to: "VITB College",
      fare: 1025,
    },
    {
      from: "Bhopal",
      to: "Indore",
      fare: 1040,
    },
    {
      from: "Bhopal",
      to: "Diwas",
      fare: 990,
    },
    {
      from: "Bhopal",
      to: "Astra",
      fare: 1015,
    },
    {
      from: "Bhopal",
      to: "Sehore",
      fare: 980,
    },
    {
      from: "Bhopal",
      to: "VITB College",
      fare: 1035,
    },
    {
      from: "Sehore",
      to: "Indore",
      fare: 990,
    },
    {
      from: "Sehore",
      to: "Diwas",
      fare: 1050,
    },
    {
      from: "Sehore",
      to: "Astra",
      fare: 1020,
    },
    {
      from: "Sehore",
      to: "Bhopal",
      fare: 980,
    },
    {
      from: "Sehore",
      to: "VITB College",
      fare: 1015,
    },
    {
      from: "VITB College",
      to: "Indore",
      fare: 1010,
    },
    {
      from: "VITB College",
      to: "Diwas",
      fare: 1030,
    },
    {
      from: "VITB College",
      to: "Astra",
      fare: 1025,
    },
    {
      from: "VITB College",
      to: "Bhopal",
      fare: 1035,
    },
    {
      from: "VITB College",
      to: "Sehore",
      fare: 1000,
    },
  ],
  "Auto Rickshaw": [
    {
      from: "Indore",
      to: "Diwas",
      fare: 380,
    },
    {
      from: "Indore",
      to: "Astra",
      fare: 410,
    },
    {
      from: "Indore",
      to: "Bhopal",
      fare: 420,
    },
    {
      from: "Indore",
      to: "Sehore",
      fare: 390,
    },
    {
      from: "Indore",
      to: "VITB College",
      fare: 400,
    },
    {
      from: "Diwas",
      to: "Indore",
      fare: 400,
    },
    {
      from: "Diwas",
      to: "Astra",
      fare: 390,
    },
    {
      from: "Diwas",
      to: "Bhopal",
      fare: 410,
    },
    {
      from: "Diwas",
      to: "Sehore",
      fare: 420,
    },
    {
      from: "Diwas",
      to: "VITB College",
      fare: 395,
    },
    {
      from: "Astra",
      to: "Indore",
      fare: 410,
    },
    {
      from: "Astra",
      to: "Diwas",
      fare: 400,
    },
    {
      from: "Astra",
      to: "Bhopal",
      fare: 405,
    },
    {
      from: "Astra",
      to: "Sehore",
      fare: 395,
    },
    {
      from: "Astra",
      to: "VITB College",
      fare: 415,
    },
    {
      from: "Bhopal",
      to: "Indore",
      fare: 420,
    },
    {
      from: "Bhopal",
      to: "Diwas",
      fare: 410,
    },
    {
      from: "Bhopal",
      to: "Astra",
      fare: 400,
    },
    {
      from: "Bhopal",
      to: "Sehore",
      fare: 395,
    },
    {
      from: "Bhopal",
      to: "VITB College",
      fare: 415,
    },
    {
      from: "Sehore",
      to: "Indore",
      fare: 390,
    },
    {
      from: "Sehore",
      to: "Diwas",
      fare: 420,
    },
    {
      from: "Sehore",
      to: "Astra",
      fare: 395,
    },
    {
      from: "Sehore",
      to: "Bhopal",
      fare: 400,
    },
    {
      from: "Sehore",
      to: "VITB College",
      fare: 405,
    },
    {
      from: "VITB College",
      to: "Indore",
      fare: 400,
    },
    {
      from: "VITB College",
      to: "Diwas",
      fare: 395,
    },
    {
      from: "VITB College",
      to: "Astra",
      fare: 415,
    },
    {
      from: "VITB College",
      to: "Bhopal",
      fare: 410,
    },
    {
      from: "VITB College",
      to: "Sehore",
      fare: 400,
    },
  ],
  "Maruti Suzuki Eeco": [
    {
      from: "Indore",
      to: "Diwas",
      fare: 780,
    },
    {
      from: "Indore",
      to: "Astra",
      fare: 820,
    },
    {
      from: "Indore",
      to: "Bhopal",
      fare: 840,
    },
    {
      from: "Indore",
      to: "Sehore",
      fare: 790,
    },
    {
      from: "Indore",
      to: "VITB College",
      fare: 800,
    },
    {
      from: "Diwas",
      to: "Indore",
      fare: 800,
    },
    {
      from: "Diwas",
      to: "Astra",
      fare: 790,
    },
    {
      from: "Diwas",
      to: "Bhopal",
      fare: 810,
    },
    {
      from: "Diwas",
      to: "Sehore",
      fare: 820,
    },
    {
      from: "Diwas",
      to: "VITB College",
      fare: 795,
    },
    {
      from: "Astra",
      to: "Indore",
      fare: 820,
    },
    {
      from: "Astra",
      to: "Diwas",
      fare: 800,
    },
    {
      from: "Astra",
      to: "Bhopal",
      fare: 805,
    },
    {
      from: "Astra",
      to: "Sehore",
      fare: 795,
    },
    {
      from: "Astra",
      to: "VITB College",
      fare: 815,
    },
    {
      from: "Bhopal",
      to: "Indore",
      fare: 840,
    },
    {
      from: "Bhopal",
      to: "Diwas",
      fare: 810,
    },
    {
      from: "Bhopal",
      to: "Astra",
      fare: 805,
    },
    {
      from: "Bhopal",
      to: "Sehore",
      fare: 790,
    },
    {
      from: "Bhopal",
      to: "VITB College",
      fare: 825,
    },
    {
      from: "Sehore",
      to: "Indore",
      fare: 790,
    },
    {
      from: "Sehore",
      to: "Diwas",
      fare: 820,
    },
    {
      from: "Sehore",
      to: "Astra",
      fare: 795,
    },
    {
      from: "Sehore",
      to: "Bhopal",
      fare: 790,
    },
    {
      from: "Sehore",
      to: "VITB College",
      fare: 800,
    },
    {
      from: "VITB College",
      to: "Indore",
      fare: 800,
    },
    {
      from: "VITB College",
      to: "Diwas",
      fare: 795,
    },
    {
      from: "VITB College",
      to: "Astra",
      fare: 815,
    },
    {
      from: "VITB College",
      to: "Bhopal",
      fare: 825,
    },
    {
      from: "VITB College",
      to: "Sehore",
      fare: 800,
    },
  ],
  "Maruti Suzuki Omni": [
    {
      from: "Indore",
      to: "Diwas",
      fare: 1450,
    },
    {
      from: "Indore",
      to: "Astra",
      fare: 1480,
    },
    {
      from: "Indore",
      to: "Bhopal",
      fare: 1500,
    },
    {
      from: "Indore",
      to: "Sehore",
      fare: 1460,
    },
    {
      from: "Indore",
      to: "VITB College",
      fare: 1470,
    },
    {
      from: "Diwas",
      to: "Indore",
      fare: 1470,
    },
    {
      from: "Diwas",
      to: "Astra",
      fare: 1460,
    },
    {
      from: "Diwas",
      to: "Bhopal",
      fare: 1480,
    },
    {
      from: "Diwas",
      to: "Sehore",
      fare: 1500,
    },
    {
      from: "Diwas",
      to: "VITB College",
      fare: 1490,
    },
    {
      from: "Astra",
      to: "Indore",
      fare: 1480,
    },
    {
      from: "Astra",
      to: "Diwas",
      fare: 1470,
    },
    {
      from: "Astra",
      to: "Bhopal",
      fare: 1465,
    },
    {
      from: "Astra",
      to: "Sehore",
      fare: 1460,
    },
    {
      from: "Astra",
      to: "VITB College",
      fare: 1495,
    },
    {
      from: "Bhopal",
      to: "Indore",
      fare: 1500,
    },
    {
      from: "Bhopal",
      to: "Diwas",
      fare: 1480,
    },
    {
      from: "Bhopal",
      to: "Astra",
      fare: 1465,
    },
    {
      from: "Bhopal",
      to: "Sehore",
      fare: 1450,
    },
    {
      from: "Bhopal",
      to: "VITB College",
      fare: 1475,
    },
    {
      from: "Sehore",
      to: "Indore",
      fare: 1460,
    },
    {
      from: "Sehore",
      to: "Diwas",
      fare: 1500,
    },
    {
      from: "Sehore",
      to: "Astra",
      fare: 1490,
    },
    {
      from: "Sehore",
      to: "Bhopal",
      fare: 1450,
    },
    {
      from: "Sehore",
      to: "VITB College",
      fare: 1470,
    },
    {
      from: "VITB College",
      to: "Indore",
      fare: 1470,
    },
    {
      from: "VITB College",
      to: "Diwas",
      fare: 1490,
    },
    {
      from: "VITB College",
      to: "Astra",
      fare: 1495,
    },
    {
      from: "VITB College",
      to: "Bhopal",
      fare: 1475,
    },
    {
      from: "VITB College",
      to: "Sehore",
      fare: 1470,
    },
  ],
};

function calculateFare() {
  let startingPoint = document.getElementById("startingPoint").value.trim();
  let destination = document.getElementById("destination").value.trim();
  if (
    !["VITB College", "Bhopal", "Indore", "Astra", "Diwas", "Sehore"].includes(
      startingPoint
    ) ||
    !["VITB College", "Bhopal", "Indore", "Astra", "Diwas", "Sehore"].includes(
      destination
    ) ||
    startingPoint === destination
  ) {
    console.log("Select Given Address");
    return 0;
  }
  document.getElementById("fareResult").classList.remove("hidden");
  let vehicleTypes = document.querySelectorAll(".vehicle-name");
  startingLocation.textContent = startingPoint;
  destinationLocation.textContent = destination;
  vehicleTypes.forEach((vehicleElement, iteration) => {
    let vehicle = vehicleElement.textContent.trim();
    // Check if the vehicle type is valid
    if (!fares[vehicle]) {
      console.log(`Invalid vehicle type: ${vehicle}`);
      return;
    }
    // Find the fare for the selected starting point and destination
    let fareDetails = fares[vehicle].find(
      (route) => route.from === startingPoint && route.to === destination
    );

    // Check if the route exists
    if (!fareDetails) {
      console.log(
        `No route found for ${vehicle} from ${startingPoint} to ${destination}`
      );
      return;
    }

    // Display the fare
    console.log(fareDetails.fare);
    switch (iteration) {
      case 0:
        document.getElementById("ertiga-fare").textContent = fareDetails.fare;
        break;
      case 1:
        document.getElementById("alto-fare").textContent = fareDetails.fare;
        break;
      case 2:
        document.getElementById("auto-fare").textContent = fareDetails.fare;
        break;
      case 3:
        document.getElementById("eeco-fare").textContent = fareDetails.fare;
        break;
      case 4:
        document.getElementById("omni-fare").textContent = fareDetails.fare;
        break;
    }
  });
}
