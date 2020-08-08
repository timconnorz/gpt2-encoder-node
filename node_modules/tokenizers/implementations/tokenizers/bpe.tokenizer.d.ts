import { BaseTokenizer, Token } from "./base.tokenizer";
export interface BPETokenizerOptions {
    /**
     * The BPE dropout to use. Must be an float between 0 and 1
     */
    dropout?: number;
    /**
     * @default false
     */
    lowercase?: boolean;
    mergesFile?: string;
    /**
     * @default "</w>"
     */
    suffix?: string;
    /**
     * The unknown token to be used by the model
     * @default "<unk>"
     */
    unkToken?: Token;
    vocabFile?: string;
}
export interface BPETokenizerTrainOptions {
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
     * @default "</w>"
     */
    suffix?: string;
    /**
     * @default 30000
     */
    vocabSize?: number;
}
declare type BPETokenizerConfig = BPETokenizerOptions & Required<Pick<BPETokenizerOptions, "unkToken" | "suffix">>;
/**
 * Original BPE Tokenizer.
 * Represents the BPE algorithm, as introduced by Rico Sennrich (https://arxiv.org/abs/1508.07909)
 */
export declare class BPETokenizer extends BaseTokenizer<BPETokenizerConfig> {
    private static readonly defaultBPEOptions;
    private readonly defaultTrainOptions;
    private constructor();
    /**
     * Instantiate and returns a new BPE tokenizer
     * @param [options] Optional tokenizer options
     */
    static fromOptions(options?: BPETokenizerOptions): Promise<BPETokenizer>;
    /**
     * Train the model using the given files
     *
     * @param files Files to use for training
     * @param [options] Training options
     */
    train(files: string[], options?: BPETokenizerTrainOptions): Promise<void>;
}
export {};
