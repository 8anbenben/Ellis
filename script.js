let reaction = "";

function setReactionText() {
  const reactionElement = document.getElementById('reaction-text');
  reactionElement.textContent = reaction;

  reactionElement.classList.remove('success', 'warning');

  if (reaction.includes('Happy birthday') || reaction.includes('I was sure it was') || reaction.includes('it is your birthday')) {
    reactionElement.classList.add('success');
  } else if (reaction.includes('Dang') || reaction.includes('Is it, though') || reaction.includes('Oh dang it') || reaction.includes('Dang it') || reaction.includes('wrong')) {
    reactionElement.classList.add('warning');
  }
}

function updateCurrentDate() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB');
  document.getElementById('current-date').textContent = formattedDate;
}

function isTodayBirthday() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  return `${dd}/${mm}/${yyyy}` === `18/10/${yyyy}`;
}

function getBirthdayGuessReaction() {
  const birthdayReactions = [
    "I know it's your birthday.",
    "It's gotta be today, right? It's your birthday.",
    "How about now? Is it your birthday?",
    "Finally, I'm going to be correct. It's your birthday.",
    "Is it your birthday? I think it is."
  ];

  return birthdayReactions[Math.floor(Math.random() * birthdayReactions.length)];
}

function onYesButtonClick() {
  if (isTodayBirthday()) {
    reaction = "Dang, I was wrong again! 😤";
  } else {
    reaction = "Is it, though? 😅";
  }
  setReactionText();
}

function onNoButtonClick() {
  if (isTodayBirthday()) {
    reaction = "Aww, I was sure it was! 😭";
  } else {
    const wrongNoReactions = [
      "Oh dang it.",
      "Dang it.",
      "Ugh, not this time.",
      "Argh, wrong again.",
      "Nope, still wrong."
    ];
    reaction = wrongNoReactions[Math.floor(Math.random() * wrongNoReactions.length)];
  }
  setReactionText();
}

function guessBirthday() {
  if (isTodayBirthday()) {
    reaction = "Nope, not your birthday today. 😜";
  } else {
    reaction = getBirthdayGuessReaction();
  }
  setReactionText();
}

updateCurrentDate();
guessBirthday();