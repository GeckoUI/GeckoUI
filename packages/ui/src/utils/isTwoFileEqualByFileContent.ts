import { fileToUInt8Array } from "./fileToUInt8Array";

export async function isTwoFileEqualByFileContent(file1: File, file2: File): Promise<boolean> {
  if (file1.size === 0 || file2.size === 0) return false;
  if (file1.size !== file2.size) return false;

  if (file1.size < 300) {
    return (
      (await fileToUInt8Array(file1)).toString() === (await fileToUInt8Array(file2)).toString()
    );
  }

  const start = await fileToUInt8Array(file1, 0, 100);
  const end = await fileToUInt8Array(file1, file1.size - 100, file1.size);
  const middle = await fileToUInt8Array(file1, file1.size / 2 - 50, file1.size / 2 + 50);

  const start2 = await fileToUInt8Array(file2, 0, 100);
  const end2 = await fileToUInt8Array(file2, file2.size - 100, file2.size);
  const middle2 = await fileToUInt8Array(file2, file2.size / 2 - 50, file2.size / 2 + 50);

  return (
    start.toString() === start2.toString() &&
    end.toString() === end2.toString() &&
    middle.toString() === middle2.toString()
  );
}
