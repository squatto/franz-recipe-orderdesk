"use strict";

module.exports = Franz => {
  // number of seconds between calling the reload callback
  // change this to -1 (or any number less than 0) to prevent the callback from ever running
  let callReloadCallbackAfter = 120;

  // change this to do whatever you want to run after the number of seconds have passed
  // by default it clicks the "Dashboard" link in the nav menu
  // to trigger a page reload so that the order total is updated on the service badge
  // (Order Desk doesn't update the UI automatically so you have to reload the page)
  const reloadCallback = () => {
    try {
      document.querySelector('#sidebar-menu > li > a').click();
    } catch (e) {
      // no biggie...
    }
  };

  const getMessages = function getMessages() {
    let unread = 0;

    // change this to the folderId that you want to
    // show the order count for on the service icon badge
    // e.g. https://app.orderdesk.me/orders?folder=123456 = 123456
    const folderId = 123456;

    const countObject = document.getElementById(`folder_count_${folderId}`)
      || document.getElementById(`folder_count_${folderId}_10K`);

    if (countObject !== undefined) {
      let countText = countObject.innerText.replace(',', '');

      if (countText.substr(-2).toUpperCase() === 'K+') {
        // if the folder shows "10K+" orders then the actual total is in the "title" attribute
        countText = countObject.getAttribute('title').replace(',', '');
      }

      unread = parseInt(countText, 10);
    }

    Franz.setBadge(parseInt(unread, 10));

    // should we call the reload callback?
    if (callReloadCallbackAfter > 0) {
      callReloadCallbackAfter -= 2; // Franz.loop() happens every 2 seconds

      if (! (callReloadCallbackAfter % 15)) {
        console.log(`Running the reload callback in ${callReloadCallbackAfter} seconds...`);
      }

      if (callReloadCallbackAfter <= 0) {
        console.log('Running the reload callback');
        reloadCallback();
      }
    }
  };

  Franz.loop(getMessages);
};
