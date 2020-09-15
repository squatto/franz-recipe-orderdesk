# Order Desk for Franz/Ferdi

This is an unofficial Franz/Ferdi recipe for [Order Desk](https://www.orderdesk.com/).

[GitHub repo](https://github.com/squatto/franz-recipe-orderdesk)

## Service Icon Badge

The badge on the service icon will show the number of open orders in a certain folder.
Change the value of the `folderId` variable in `webview.js` to the ID of the Order Desk folder
that you want to show the open order count for.

You can easily get this by clicking the folder in the nav menu and then looking at the page URL.

e.g. `https://app.orderdesk.me/orders?folder=123456` is `folderId 123456`

## Automatic Page Reloading

Order Desk doesn't automatically update the UI to reflect changes in the open order count,
so the page has to be reloaded to get the new count. By default this happens every 120 seconds
by automatically clicking the "Dashboard" link in the nav menu.

If you want to change how this works (or disable it entirely) you can change it in `webview.js`:

* Change the `callReloadCallbackAfter` variable to `-1` to disable automatic reloading
* Change the `callReloadCallbackAfter` variable to the number of seconds between automatic reloads
* Change the `reloadCallback` function to do whatever you want

## Installation

Follow the instructions [here](https://blog.jakelee.co.uk/super-simple-guide-to-adding-a-new-ferdi-service-recipe/)
and put the files in this repo in `/recipes/dev/orderdesk/`

## Changelog

* **Version 1.1.0 - 09/15/2020**
  * Add automatic reloading
* **Version 1.0.0 - 09/10/2020**
  * Initial release

### How to create your own Franz recipes

* [Read the documentation](https://github.com/meetfranz/plugins)
