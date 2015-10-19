# Chartbeat Front-end Engineering Exercise

This exercise is comprised of multiple parts, and should be done in order.


## 1.  Debug

We've provided `cbUtils.js` which handles all AJAX calls to the Chartbeat API.

However this JavaScript file has some problems in it that we want you to debug and fix.

Fix any style or functionality problems with `cbUtils.js`.


## 2.  Implement

We'd like to simulate the process of creating a product at Chartbeat.  The
following specifies a new product we'd like you to create, and the product
requirements.

Create a product called Minibeat that has the following requirements:

* Show the top ten visited pages for gizmodo.com, sorted by current visitor number.

* Use your corrected version of `cbUtils.js` from above to make API calls.  For full
API information refer to our [API Docs for live/toppages/](https://chartbeat.com/docs/api/explore/#endpoint=live/toppages/v3/).

* A button must exist that allows the user to pause or resume live-updating.

* Each page title in the list (found in the API via `page.title`) must be
preceded by its current visitor number (found via `page.stats.people`).

* The list must poll for updates every 5 seconds and update the DOM to reflect
the new data.

* When an item in the list is clicked, it must show a container with a list of its top referrers (found via `page.stats.toprefs`).

  * Each referrer must include its number of visitors (found via `topref.visitors`).

  * When showing the referrers container it must expand and collapse beneath the page item.

  * If someone clicks on a new page title it must collapse the currently visible referrers container, so that there is only one visible at a time.

  * Clicking on a page title should not change the state of the application (do not pause updating).

  * If updating is enabled and a referrer container is visible, the referrers should remain visible and update as well.


It must be formatted similar to the following wireframe:

<pre>
-----------------------------------------------------------
| Minibeat                          [pause/resume button] |
-----------------------------------------------------------
| ### Page 1                                              |
| ### Page 2                                              |
| ### Page 3                                              |
|   ----------------------------------------------------  |
|   | ### Referer 1                                    |  |
|   | ### Referer 2                                    |  |
|   | ### Referer 3                                    |  |
|   | ### Referer 4                                    |  |
|   | ### Referer 5                                    |  |
|   ----------------------------------------------------  |
| ### Page 4                                              |
| ### Page 5                                              |
| ### Page 6                                              |
| ### Page 7                                              |
| ### Page 8                                              |
| ### Page 9                                              |
| ### Page 10                                             |
-----------------------------------------------------------
</pre>


**Rules:**

 * Do not use jQuery or any other frameworks/languages (i.e. use pure JavaScript). We want to see your raw JavaScript knowledge.

 * You are the product designer for this application. Create a design that showcases your CSS knowledge (using only CSS, no preprocessors).

 * It should work in modern (HTML5) browsers. Focus on Chrome, Firefox, and Safari. IE compatibility is not required.


**What We're Looking For:**

 * Proper architecture of the application, such that it can scale if new features are desired.

 * The ability for this application to run non-stop (no memory leaks).


 **How to Submit:**

 * Do not publish this test or your solution publicly.

 * Please submit the files in a .zip via e-mail.


## Good Luck!
