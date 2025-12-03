import type { FilePickerFile } from "../../../types";
import BaseFilePickerHandler from "./BaseFilePickerHandler";

type Entry = FileSystemFileEntry | FileSystemDirectoryEntry;

class WebkitFilePickerHandler extends BaseFilePickerHandler {
  async onDrop(items?: DataTransferItemList) {
    const fileSystemEntries = Array.from(items ?? []).map((item) => item.webkitGetAsEntry());

    const data: FilePickerFile[] = [];

    for await (const entry of fileSystemEntries) {
      await this.fileEntryToFiles(entry as Entry, data);
    }

    return data;
  }

  private fileEntryToFiles = async (entry: Entry, data: FilePickerFile[] = []) => {
    if (entry.isFile) {
      const file = (await new Promise<File>((resolve, reject) => {
        (entry as FileSystemFileEntry).file(resolve, reject);
      })) as FilePickerFile;

      file.path = file.webkitRelativePath || entry.fullPath || "";
      return this.addFileIfValid(file, data);
    }

    if (entry.isDirectory) {
      const reader = (entry as FileSystemDirectoryEntry).createReader();
      const entries = await new Promise<Entry[]>((resolve, reject) => {
        reader.readEntries(resolve as never, reject);
      });

      for (const e of entries) {
        await this.fileEntryToFiles(e, data);
      }
    }

    return data;
  };
}

export default WebkitFilePickerHandler;
