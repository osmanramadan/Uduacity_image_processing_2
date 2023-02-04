import sharp from 'sharp';

interface SHARPparam {
  source: string;
  target: string;
  width: number;
  height: number;
}

const sharpImage = async (param: SHARPparam): Promise<null | string> => {
  try {
    await sharp(param.source)
      .resize(param.width, param.height)
      .toFormat('jpeg')
      .toFile(param.target);

    return null;
  } catch {
    return 'there is an error in process image ';
  }
};

export default sharpImage;
