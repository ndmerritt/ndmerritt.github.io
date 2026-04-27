const poll = new Map([
  ["🟢 Green Gecko", new Set()],
  ["🟤 Brown Gecko", new Set()]
]);

function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }

  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }

  poll.set(option, new Set());
  // eslint-disable-next-line no-use-before-define
  updateDropdown();
  // eslint-disable-next-line no-use-before-define
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
  // eslint-disable-next-line no-use-before-define
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

const select = document.getElementById("option-select");
const message = document.getElementById("message");
const results = document.getElementById("results");

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

document.getElementById("vote-btn").addEventListener("click", () => {
  const option = select.value;
  const voterId = document.getElementById("voter-id").value;

  const msg = vote(option, voterId);
  message.textContent = msg;
});

document.getElementById("add-option-btn").addEventListener("click", () => {
  const input = document.getElementById("option-input");
  const msg = addOption(input.value);
  message.textContent = msg;
  input.value = "";
});

updateDropdown();
updateResults();