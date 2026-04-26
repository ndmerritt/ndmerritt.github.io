const poll = new Map();

function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }

  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }

  poll.set(option, new Set());
  updateDropdown();
  updateResults();
  return `Option "${option}" added to the poll.`;
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voters = poll.get(option);

  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId);
  updateResults();
  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
  let result = "Poll Results:\n";

  for (let [option, voters] of poll.entries()) {
    result += `${option}: ${voters.size} votes\n`;
  }

  return result.trim();
}





const optionInput = document.getElementById("option-input");
const addBtn = document.getElementById("add-option-btn");
const select = document.getElementById("option-select");
const voteBtn = document.getElementById("vote-btn");
const voterIdInput = document.getElementById("voter-id");

const message = document.getElementById("message");
const results = document.getElementById("results");

addBtn.addEventListener("click", () => {
  const msg = addOption(optionInput.value);
  message.textContent = msg;
  optionInput.value = "";
});

voteBtn.addEventListener("click", () => {
  const option = select.value;
  const voterId = voterIdInput.value;

  const msg = vote(option, voterId);
  message.textContent = msg;
  voterIdInput.value = "";
});

function updateDropdown() {
  select.innerHTML = `<option value="">Select option</option>`;

  for (let option of poll.keys()) {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    select.appendChild(opt);
  }
}

function updateResults() {
  results.textContent = displayResults();
}