import { BaseTokenizer, Token } from "./base.tokenizer";
export interface BertWordPieceOptions {
    /**
     * @default true
     */
    cleanText?: boolean;
    /**
     * @default "[CLS]"
     */
    clsToken?: Token;
    /**
     * @default true
     */
    handleChineseChars?: boolean;
    /**
     * @default true
     */
    lowercase?: boolean;
    /**
     * @default "[MASK]"
     */
    maskToken?: Token;
    /**
     * @default "[PAD]"
     */
    padToken?: Token;
    /**
     * @default "[SEP]"
     */
    sepToken?: Token;
    /**
     * @default true
     */
    stripAccents?: boolean;
    /**
     * @default "[UNK]"
     */
    unkToken?: Token;
    vocabFile?: string;
    /**
     * The prefix to attach to subword units that don't represent a beginning of word
     * @default "##"
     */
    wordpiecesPrefix?: string;
}
export interface BertWordPieceTrainOptions {
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
     * @default ["[PAD]", "[UNK]", "[CLS]", "[SEP]", "[MASK]"]
     */
    specialTokens?: Token[];
    /**
     * @default 30000
     */
    vocabSize?: number;
    /**
     * The prefix to attach to subword units that don't represent a beginning of word
     * @default "##"
     */
    wordpiecesPrefix?: string;
}
declare type BertTokenizerConfig = Required<Omit<BertWordPieceOptions, "vocabFile">> & {
    vocabFile?: string;
};
/**
 * Bert WordPiece Tokenizer
 */
export declare class BertWordPieceTokenizer extends BaseTokenizer<BertTokenizerConfig> {
    private static readonly defaultBertOptions;
    private readonly defaultTrainOptions;
    private constructor();
    /**
     * Instantiate and returns a new Bert WordPiece tokenizer
     * @param [options] Optional tokenizer options
     */
    static fromOptions(options?: BertWordPieceOptions): Promise<BertWordPieceTokenizer>;
    /**
     * Train the model using the given files
     *
     * @param files Files to use for training
     * @param [options] Training options
     */
    train(files: string[], options?: BertWordPieceTrainOptions): Promise<void>;
}
export {};
