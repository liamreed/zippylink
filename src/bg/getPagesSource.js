// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.outerHTML;
            break;
        case Node.TEXT_NODE:
            html += node.nodeValue;
            break;
        case Node.CDATA_SECTION_NODE:
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;
        case Node.COMMENT_NODE:
            html += '<!--' + node.nodeValue + '-->';
            break;
        case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        }
        node = node.nextSibling;
    }
    re = /http:\/\/www(.*).zippyshare.com\/v\/(.*?).*?(file.html)/gi
    var zippyLink = html.match(re) + '';
    var linkArray = zippyLink.split(',')
    console.log(linkArray);
    var ID = checkIfArrayIsUnique(linkArray);
    if (this.ID = false) {
        return linkArray[0];
    }
    else {
        return linkArray[1];
    };
}

function checkIfArrayIsUnique(myArray) 
{
    for (var i = 0; i < myArray.length; i++) 
    {
        if (myArray.indexOf(myArray[i]) !== myArray.lastIndexOf(myArray[i])) { 
            return true; 
        } 
    } 
    return false;   // this means not unique
}

chrome.extension.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});