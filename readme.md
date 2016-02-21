
1. 
2.
3.
4.
5.
6. "Write tests that test the retrieval of country data and your persistence mechanism."

That's is tricky.

How to test 3rd party API?






Integration tests to the rescue, in Angular it is done via Protractor: https://docs.angularjs.org/guide/e2e-testing

https://github.com/angular/protractor/blob/master/docs/protractor-setup.md


```Error: No selenium server jar found at the specified location (/usr/local/lib/node_modules/protractor/selenium/selenium-server-standalone-2.51.0.jar). Check that the version number is up to date.```

File found here: https://github.com/adamhooper/selenium-server-standalone-jar/blob/b566e860ca89cb78d1c9478474db357608271817/jar/selenium-server-standalone-2.51.0.jar

```Error: Could not find chromedriver at /usr/local/lib/node_modules/protractor/selenium/chromedriver```

http://chromedriver.storage.googleapis.com/index.html?path=2.21/

More errors!
```
protractor static/tests/protractor.conf.js
Starting selenium standalone server...
[launcher] Running 1 instances of WebDriver
[launcher] Process exited with error code 1
/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/async/nexttick.js:41
  goog.global.setTimeout(function() { throw exception; }, 0);
                                      ^

Error: Server terminated early with status 1
    at Error (native)
    at /usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/remote/index.js:206:18
    at promise.Promise.goog.defineClass.invokeCallback_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/../webdriver/promise.js:1337:14)
    at promise.ControlFlow.goog.defineClass.goog.defineClass.abort_.error.executeNext_.execute_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/../webdriver/promise.js:2776:14)
    at promise.ControlFlow.goog.defineClass.goog.defineClass.abort_.error.executeNext_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/../webdriver/promise.js:2758:21)
    at goog.async.run.processWorkQueue (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/async/run.js:124:15)
    at process._tickCallback (node.js:402:9)
```

These guys are suggesting updating Java: https://github.com/angular/protractor/issues/2638

This thread seems to confirm it: http://stackoverflow.com/questions/34201990/unsupported-major-minor-version-on-mac-os-x-el-capitan

```webdriver-manager start
seleniumProcess.pid: 24201
Exception in thread "main" java.lang.UnsupportedClassVersionError: org/openqa/grid/selenium/GridLauncher : Unsupported major.minor version 51.0
  at java.lang.ClassLoader.defineClass1(Native Method)
  at java.lang.ClassLoader.defineClassCond(ClassLoader.java:637)
  at java.lang.ClassLoader.defineClass(ClassLoader.java:621)
  at java.security.SecureClassLoader.defineClass(SecureClassLoader.java:141)
  at java.net.URLClassLoader.defineClass(URLClassLoader.java:283)
  at java.net.URLClassLoader.access$000(URLClassLoader.java:58)
  at java.net.URLClassLoader$1.run(URLClassLoader.java:197)
  at java.security.AccessController.doPrivileged(Native Method)
  at java.net.URLClassLoader.findClass(URLClassLoader.java:190)
  at java.lang.ClassLoader.loadClass(ClassLoader.java:306)
  at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:301)
  at java.lang.ClassLoader.loadClass(ClassLoader.java:247)
Selenium Standalone has exited with code 1```

(at this point I decided to try another approach - if something is complicated it is complicated for a reason - maybe there is a straightforward way...)