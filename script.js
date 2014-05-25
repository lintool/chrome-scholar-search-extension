// Starting point:
// http://stackoverflow.com/questions/13783500/context-menus-in-chrome-extensions

function getProfile(info, tab) {
  console.log("Selection '" + info.selectionText + "' was clicked.");
  chrome.tabs.create({ 
    url: "http://scholar.google.com/citations?hl=en&view_op=search_authors&mauthors=" + info.selectionText,
  });
}

function getPaper(info, tab) {
  console.log("Selection '" + info.selectionText + "' was clicked.");
  chrome.tabs.create({ 
    url: "http://scholar.google.com/scholar?hl=en&q=" + info.selectionText,
  });
}

chrome.contextMenus.create({
  title: "Scholar Profile: %s", 
  contexts:["selection"], 
  onclick: getProfile,
});

chrome.contextMenus.create({
  title: "Scholar Paper: %s", 
  contexts:["selection"], 
  onclick: getPaper,
});
