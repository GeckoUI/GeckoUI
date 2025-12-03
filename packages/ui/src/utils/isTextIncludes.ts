/**
 * Check if a string includes in another string
 * using case-insensitive and whitespace-insensitive comparison
 * */
function isTextIncludes(baseString: string = "", searchString: string) {
  return baseString
    .toString()
    .toLowerCase()
    .replaceAll(/\s/g, "")
    .includes(searchString.toString().toLowerCase().replaceAll(/\s/g, ""));
}

export default isTextIncludes;
