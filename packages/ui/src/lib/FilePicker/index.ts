import {
  FileOnlyPickerHandler,
  FileSystemFilePickerHandler,
  WebkitFilePickerHandler
} from "./handlers";

const FilePicker = (() => {
  if (typeof window === "undefined" || typeof window.DataTransferItem === "undefined") {
    return FileOnlyPickerHandler;
  }

  if ("getAsFileSystemHandle" in DataTransferItem.prototype) {
    return FileSystemFilePickerHandler;
  }

  if ("webkitGetAsEntry" in DataTransferItem.prototype) {
    return WebkitFilePickerHandler;
  }

  return FileOnlyPickerHandler;
})();

export default FilePicker;
