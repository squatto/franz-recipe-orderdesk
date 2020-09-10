"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    let unread = 0;

    // change this to the folderId that you want to
    // show the order count for on the service icon badge
    // e.g. https://app.orderdesk.me/orders?folder=123456 = 123456
    const folderId = 123456;

    const countObject = document.getElementById(`folder_count_${folderId}`);

    if (countObject !== undefined) {
      let countText = countObject.innerText.replace(',', '');

      if (countText.substr(-2).toUpperCase() === 'K+') {
        countText = countText.substr(0, countText.length - 2) + '000';
      }

      unread = parseInt(countText, 10);
    }

    Franz.setBadge(parseInt(unread, 10));
  };

  Franz.loop(getMessages);
};
