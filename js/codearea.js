/**
 * 
 * @param {*} text - Text to insert at the cursor position
 */
export function insertAtCursor(area, text) {
  // If it's a textarea/input with selectionStart/End, use the simple replacement
  if (typeof area.selectionStart === "number" && typeof area.selectionEnd === "number") {
    const startPos = area.selectionStart;
    const endPos = area.selectionEnd;

    area.value = area.value.substring(0, startPos) + text + area.value.substring(endPos);

    const cursorPos = startPos + text.length;
    area.selectionStart = area.selectionEnd = cursorPos;

    area.focus();
    return;
  }

  // Otherwise assume a contenteditable element: use Range/Selection APIs
  const sel = window.getSelection();
  if (!sel) return;

  // If selection is not in the provided area, move caret to the end
  let range = sel.getRangeAt(0);
  if (!area.contains(range.commonAncestorContainer)) {
    // place caret at end of area
    range = document.createRange();
    range.selectNodeContents(area);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  // Insert text at range
  const textNode = document.createTextNode(text);
  range.deleteContents();
  range.insertNode(textNode);

  // Move caret after inserted node
  range = document.createRange();
  range.setStartAfter(textNode);
  range.collapse(true);

  sel.removeAllRanges();
  sel.addRange(range);

  area.focus();
}