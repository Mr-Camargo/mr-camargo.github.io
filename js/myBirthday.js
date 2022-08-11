const span = document.getElementById("ageNumber");

const dob = new Date("05/13/2008");

const month_diff = Date.now() - dob.getTime();

const age_dt = new Date(month_diff);

const year = age_dt.getUTCFullYear();

const age = Math.abs(year - 1970);

span.textContent = age