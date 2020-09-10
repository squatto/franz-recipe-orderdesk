"use strict";

module.exports = Franz => {
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
  };

  Franz.loop(getMessages);
};
