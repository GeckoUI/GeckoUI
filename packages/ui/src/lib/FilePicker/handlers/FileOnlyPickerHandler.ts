import type { FilePickerFile } from "../../../types";
import BaseFilePickerHandler from "./BaseFilePickerHandler";

class FileOnlyPickerHandler extends BaseFilePickerHandler {
  async onDrop(items?: DataTransferItemList) {
    const files = Array.from(items ?? [])
      .map((item) => item.getAsFile())
      .filter((file) => Boolean(file)) as FilePickerFile[];

    const data: FilePickerFile[] = this.oldFiles;

    for (const file of files) {
      await this.addFileIfValid(file, data);
    }

    return data;
  }
}

export default FileOnlyPickerHandler;
