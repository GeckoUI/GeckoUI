export async function fileToUInt8Array(file: File, start?: number, end?: number) {
  const chunk = file.slice(start ?? 0, end ?? file.size);
  const buffer = await chunk.arrayBuffer();
  return new Uint8Array(buffer);
}
