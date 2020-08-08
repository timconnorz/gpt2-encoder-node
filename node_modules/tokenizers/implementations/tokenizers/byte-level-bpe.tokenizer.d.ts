import { BaseTokenizer, Token } from "./base.tokenizer";
export interface ByteLevelBPETokenizerOptions {
    /**
     * @default false
     */
    addPrefixSpace?: boolean;
    /**
     * The prefix to attach to subword units that don't represent a beginning of word
     */
    continuingSubwordPrefix?: string;
    /**
     * @default false
     */
    lowercase?: boolean;
    /**
     * The BPE dropout to use. Must be an float between 0 and 1
     */
    dropout?: number;
    /**
     * The suffix to attach to subword units that represent an end of word
     */
    endOfWordSuffix?: string;
    mergesFile?: string;
    unicodeNormalizer?: string;
    /**
     * Whether to trim the whitespaces from the produced offsets
     * @default false
     */
    trimOffsets?: boolean;
    vocabFile?: string;
}
export interface ByteLevelBPETrainOptions {
    /**
     * @default 2
     */
    minFrequency?: number;
    /**
     * @default true
     */
    showProgress?: boolean;
    /**
     * @default []
     */
    specialTokens?: Token[];
    /**
     * @default 30000
     */
    vocabSize?: number;
}
declare type ByteLevelBPETokenizerConfig = ByteLevelBPETokenizerOptions & Required<Pick<ByteLevelBPETokenizerOptions, "addPrefixSpace">>;
/**
 * Represents a Byte-level BPE as introduced by OpenAI with their GPT-2 model
 */
export declare class ByteLevelBPETokenizer extends BaseTokenizer<ByteLevelBPETokenizerConfig> {
    private static readonly defaultOptions;
    private readonly defaultTrainOptions;
    private constructor();
    static fromOptions(options?: ByteLevelBPETokenizerOptions): Promise<ByteLevelBPETokenizer>;
    /**
     * Train the model using the given files
     *
     * @param files Files to use for training
     * @param [options] Training options
     */
    train(files: string[], options?: ByteLevelBPETrainOptions): Promise<void>;
}
export {};
