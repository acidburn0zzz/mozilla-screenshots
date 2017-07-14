/** For use inside an iframe onload function, throws an Error if iframe src is not blank.html

    Should be applied *inside* catcher.watchFunction
*/
this.assertIsBlankDocumentUrl = function assertIsBlankDocumentUrl(documentUrl) {
  if (documentUrl !== browser.extension.getURL("blank.html")) {
    let exc = new Error('iframe URL does not match expected blank.html');
    exc.foundURL = documentUrl;
    throw exc;
  }
}
null;
