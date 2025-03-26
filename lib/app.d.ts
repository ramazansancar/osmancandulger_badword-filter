export interface ValidationOptions {
    language: string;
    swear?: boolean;
    negative?: boolean;
    political?: boolean;
    religion?: boolean;
}
/**
 * @description Check given string to validate
 * @param {data}: string : text to validate
 * @param {options}: ValidationOptions : ValidationOptions option to fetch related word lists
 */
export declare const checkIsValid: (data: string, options: ValidationOptions) => boolean;
/**
 * @description Replace bad word with given mask string
 * @param {data}: string : text to validate
 * @param {replacer}: string : mask string to replace it
 * @param {options}: ValidationOptions : ValidationOptions option to fetch related word lists
 */
export declare const replaceWordWith: (data: string, replacer: string, options: ValidationOptions) => string;
//# sourceMappingURL=app.d.ts.map