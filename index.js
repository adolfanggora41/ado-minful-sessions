const readlineSync = require('readline-sync');
const chalk = require('chalk');

const sessions = [
  {
    name: '5-minute Meditation',
    duration: '5 minutes',
    description: 'A quick session to help you refocus and re-energize.',
  },
  {
    name: 'Deep Breathing Exercise',
    duration: '3 minutes',
    description: 'Simple breathing exercises to reduce stress and anxiety.',
  },
  {
    name: 'Mindfulness Meditation',
    duration: '10 minutes',
    description: 'A longer session to enhance your mindfulness and presence.',
  }
];

function displaySessions() {
  console.log(chalk.yellow('Mindful Sessions:'));
  sessions.forEach((session, index) => {
    console.log(chalk.green(`${index + 1}. ${session.name} (${session.duration})`));
  });
}

function selectSession() {
  const sessionIndex = readlineSync.keyInSelect(sessions.map(session => `${session.name} (${session.duration})`), 'Choose a session:');
  if (sessionIndex >= 0) {
    console.log(chalk.cyan(`\nYou've selected: ${sessions[sessionIndex].name}\n`));
    console.log(chalk.white(`${sessions[sessionIndex].description}\n`));
    console.log(chalk.blue(`Enjoy your ${sessions[sessionIndex].duration} session.\n`));
  } else {
    console.log(chalk.red('Session selection cancelled.'));
  }
}

displaySessions();
selectSession();
