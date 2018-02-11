# Client session timeout

This package was built for an offline-app, where the user should be forced to
log in again after having been inactive for a set time. This package has an
interval which runs every second and checks if the last interval-run was further
in the past than the defined expiry time. If this is true, the user is logged
out on this client. Since this technique does not run on the server, it also
keeps the user logged in if he's offline (without connection to the server) for
a longer time than the expiry time.

Since the automatism runs as `setInterval()` it can only check for cases where
the browser application is put to freeze. It covers e.g. if the user has the app
opened on his iPad and puts it into sleep but will not cover a computer where
the browser is running 24/7 until all tabs are closed or put into freeze e.g.
by switching to the stand-by mode.

## Initialize

After installing the plugin, you can initialize it by calling

```javascript
import { init } from "meteor/simonsimcity:client-session-timeout";

const options = {
  expiryTime: 3 * 60 * 60 * 1000 // 3 hours
};

init(options);
```

The `init()` method returns `true` if it succeeded.

## Options

* expiryTime (required): The expiry time in milliseconds. If the last time the interval was called is before `new Date() - expiryTime` the user will be logged out on this client.
* storageKey (optional): The string to use when saving the last interval-run in `localStorage`. Default: `simonsimcity.client-session-timeout.last-activity`
