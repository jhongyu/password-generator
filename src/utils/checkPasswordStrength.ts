import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core';
import type { OptionsType } from '@zxcvbn-ts/core';
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en';

const options: OptionsType = {
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnEnPackage.dictionary,
  },
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
  useLevenshteinDistance: true,
};
zxcvbnOptions.setOptions(options);

function checkPasswordStrength(password: string) {
  const result = zxcvbn(password);
  const score = result.score - 1;
  return score >= 0 ? score : 0;
}

export default checkPasswordStrength;
