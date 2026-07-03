import { FormatUploadFileNamePipe } from './format-upload-file-name-pipe';

describe('FormatUploadFileNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FormatUploadFileNamePipe();
    expect(pipe).toBeTruthy();
  });
});
