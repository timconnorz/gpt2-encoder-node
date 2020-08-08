import { BaseTokenizer, Token } from "./base.tokenizer";
export interface SentencePieceBPETokenizerOptions extends OptionsWithDefaults {
    dropout?: number;
    mergesFile?: string;
    vocabFile?: string;
}
interface OptionsWithDefaults {
    /**
     * @default true
     */
    addPrefixSpace?: boolean;
    /**
     * @default "▁"
     */
    replacement?: string;
    /**
     * @default "<unk>"
     */
    unkToken?: Token;
}
export interface SentencePieceBPETrainOptions {
    /**
     * @default []
     */
    initialAlphabet?: string[];
    /**
     * @default 1000
     */
    limitAlphabet?: number;
    /**
     * @default 2
     */
    minFrequency?: number;
    /**
     * @default true
     */
    showProgress?: boolean;
    /**
     * @default ["<unk>"]
     */
    specialTokens?: Token[];
    /**
     * @default 30000
     */
    vocabSize?: number;
}
declare type SentencePieceBPETokenizerConfig = SentencePieceBPETokenizerOptions & Required<OptionsWithDefaults>;
/**
 * Represents the BPE algorithm, with the pretokenization used by SentencePiece
 */
export declare class SentencePieceBPETokenizer extends BaseTokenizer<SentencePieceBPETokenizerConfig> {
    private static readonly defaultOptions;
    private readonly defaultTrainOptions;
    private constructor();
    static fromOptions(options?: SentencePieceBPETokenizerOptions): Promise<SentencePieceBPETokenizer>;
    /**
     * Train the model using the given files
     *
     * @param files Files to use for training
     * @param [options] Training options
     */
    train(files: string[], options?: SentencePieceBPETrainOptions): Promise<void>;
}
export {};
