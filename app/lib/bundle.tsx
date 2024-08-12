import esbuild from 'esbuild';
import { join } from 'path';

export const make = async (basedir: string, entryPoint: string) => {
  try {
    const result = await esbuild.build({
      entryPoints: [join(basedir, entryPoint)],
      bundle: true,
      minify: true,
      format: 'esm',
      outfile: 'out.js',
      write: false, // Не записывать файл на диск, результат возвращается в виде строки
      platform: 'browser'
    });

    // Результат бандлинга будет содержать файлы в поле outputFiles
    const bundledCode = result.outputFiles[0].text;

    return bundledCode;
  } catch (error) {
    console.error('Error during bundling:', error);
    throw error;
  }
};
