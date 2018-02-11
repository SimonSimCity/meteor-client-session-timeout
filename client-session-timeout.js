export const init = ({ expiryTime, storageKey }) => {
  const key = storageKey || 'simonsimcity.client-session-timeout.last-activity';
  if (!expiryTime) {
    return false
  }

  let intervalId;

  Accounts.onLogin(() => {
    if (!Meteor._localStorage.getItem(key)) {
      Meteor._localStorage.setItem(key, (new Date()).toString());
    }

    intervalId = setInterval(() => {
      const lastActivity = new Date(Meteor._localStorage.getItem(key));

      if (expiryTime > (new Date() - lastActivity)) {
        Meteor._localStorage.setItem(key, (new Date()).toString());
      } else {
        Accounts.makeClientLoggedOut();
      }
    }, 1000);
  });

  Accounts.onLogout(() => {
    Meteor._localStorage.removeItem(key);

    clearInterval(intervalId);
  });

  return true;
}
