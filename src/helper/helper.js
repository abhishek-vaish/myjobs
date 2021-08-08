const BASE_URL = "https://jobs-api.squareboat.info/api/v1/";

export const signup = (user) => {
  return fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log("Something went wrong!!");
    });
};

export const signin = (user) => {
  return fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log("Something went wrong!!");
    });
};

export const getPostedJob = (id) => {
  return fetch(`${BASE_URL}/recruiters/jobs`, {
    method: "GET",
    headers: {
      Authorization: { id },
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch(console.log("Something went wrong!!"));
};

export const getResetToken = (email) => {
  return fetch(`${BASE_URL}/auth/resetpassword?email=${email}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log("Something went wrong!!"));
};

export const verfiyToken = (token) => {
  return fetch(`${BASE_URL}/auth/resetpassword/${token}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch(console.log("Something went wrong!!"));
};
