/* eslint-disable @typescript-eslint/no-explicit-any -- temp */
import type { FilePickerFile } from "../../../types";
import BaseFilePickerHandler from "./BaseFilePickerHandler";

type Entry = FileSystemFileHandle | FileSystemDirectoryHandle;

class FileSystemFilePickerHandler extends BaseFilePickerHandler {
  async onDrop(items?: DataTransferItemList) {
    const entries = Array.from(items ?? []).map((item) => (item as any).getAsFileSystemHandle());

    const data: FilePickerFile[] = [];

    for await (const entry of entries) {
      await this.fileEntryToFiles(entry as Entry, data);
    }

    return data;
  }

  private fileEntryToFiles = async (entry: Entry, data: FilePickerFile[] = [], path = "") => {
    if (entry.kind === "file") {
      const file = (await entry.getFile()) as FilePickerFile;
      file.path = file.webkitRelativePath || (path ? `${path}/${file.name}` : "");

      return this.addFileIfValid(file, data);
    }

    if (entry.kind === "directory") {
      const entries = await (entry as any).entries();

      for await (const [, e] of entries) {
        await this.fileEntryToFiles(e as Entry, data, path ? `${path}/${entry.name}` : entry.name);
      }
    }

    return data;
  };
}

export default FileSystemFilePickerHandler;
