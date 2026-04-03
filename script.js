// Job Application Tracker
// Created by Neelakanta Reddy

let jobListData = [];

// Add new job
function addJobApplication() {
  const company = document.getElementById("companyName").value;
  const role = document.getElementById("jobRole").value;
  const status = document.getElementById("jobStatus").value;

  if (company === "" || role === "") {
    alert("Please fill all fields");
    return;
  }

  const job = {
    company: company,
    role: role,
    status: status
  };

  jobListData.push(job);
  displayJobs();

  // Clear inputs
  document.getElementById("companyName").value = "";
  document.getElementById("jobRole").value = "";
}

// Display jobs
function displayJobs() {
  const list = document.getElementById("jobList");
  list.innerHTML = "";

  jobListData.forEach((job) => {
    const li = document.createElement("li");
    li.className = "job-card";

    li.innerHTML = `
      <strong>${job.company}</strong> - ${job.role} <br>
      Status: ${job.status}
    `;

    list.appendChild(li);
  });
}