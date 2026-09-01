// Promises - Basic
const fetchData = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data fetched successfully");
    }, 2000);
});

fetchData.then((result) => {
    console.log(result);
});

// Promises with Resolve/Reject
const age = 17;
const checkEligibility = new Promise((resolve, reject) => {
    if (age >= 18) {
        resolve("Eligible");
    } else {
        reject("Not Eligible");
    }
});

checkEligibility
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// Promise Chaining
function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User logged in");
            resolve("User123");
        }, 1000);
    });
}

function getUserDetails(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Getting user details");
            resolve({
                id: user,
                name: "Pushpendra"
            });
        }, 1000);
    });
}

function getUserOrders(userDetails) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Getting user orders");
            resolve(["Order 1", "Order 2"]);
        }, 1000);
    });
}

loginUser()
    .then((user) => getUserDetails(user))
    .then((details) => getUserOrders(details))
    .then((orders) => {
        console.log("Orders:", orders);
    })
    .catch((error) => {
        console.log(error);
    });

// Promise.all()
const fetchUsers = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Users fetched");
    }, 1000);
});

const fetchProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Products fetched");
    }, 2000);
});

const fetchOrders = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Orders fetched");
    }, 3000);
});

Promise.all([fetchUsers, fetchProducts, fetchOrders])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
    });

// Convert Promise to Async/Await
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function displayData() {
    const result = await getData();
    console.log(result);
}

displayData();

// Async/Await with Error Handling
function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error: Unable to fetch data");
        }, 1000);
    });
}

async function getDataWithError() {
    try {
        const result = await fetchDataWithError();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getDataWithError();

// Sequential Execution with Async/Await
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data received");
        }, 1000);
    });
}

function getProfile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Profile data received");
        }, 1000);
    });
}

function getPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Posts data received");
        }, 1000);
    });
}

async function getAllData() {
    const user = await getUser();
    console.log(user);

    const profile = await getProfile();
    console.log(profile);

    const posts = await getPosts();
    console.log(posts);
}

getAllData();
