const doChores = async () => {
    const getReward = new Promise((resolve, reject) => {
      let gotReward = true;
      if (gotReward) {
        resolve("received reward");
      } else {
        reject(":( no rewards");
      }
    });
  
    const removeGarbage = new Promise((resolve, reject) => {
      let removeGarbage = true;
      if (removeGarbage) {
        resolve("garbage removed");
      } else {
        reject("garbage not removed");
      }
    });
    const willCleanTheRoom = new Promise((resolve, reject) => {
      let roomIsClean = true;
      if (roomIsClean) {
        resolve("room is clean");
      } else {
        reject("room is still dirty");
      }
    });
  
    try {
      let isRoomClean = await willCleanTheRoom;
      console.log(isRoomClean);
    } catch (err) {
      console.log(err);
      return;
    } finally {
      console.log("called no matter what");
    }
    try {
      let isGarbageRemoved = await removeGarbage;
      console.log(isGarbageRemoved);
    } catch (err) {
      console.log(err);
      return;
    }
  
    try {
      let haveGottenReward = await getReward;
      console.log(haveGottenReward);
    } catch (err) {
      console.log(err);
      return;
    }
  
    console.log("All chores done!");
  };
  
  console.log("before async");
  doChores();
  console.log("after async");
  

// FETCH API

  const apiCall = async () => {
    try {
      const response = await fetch("https://api.github.com/users/techsithgit");
      return await response.json();
    } catch (error) {
      return error;
    }
  };

apiCall().then(response => console.log(response));
  
