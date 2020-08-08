import { ByteLevelBPETokenizer } from 'tokenizers';

export async function getEncoded(str: string) {
    const tokenizer = await ByteLevelBPETokenizer.fromOptions({
        vocabFile: './data/gpt2_vocab_file.json',
        mergesFile: './data/gpt2_merges_file.txt',
    });
    const encoded = await tokenizer.encode(str);
    return encoded;
}
