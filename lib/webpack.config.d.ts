export let mode: string;
export let entry: string;
export namespace output {
    let path: string;
    let filename: string;
    let libraryTarget: string;
}
export namespace module {
    let rules: {
        test: RegExp;
        exclude: RegExp;
        use: string;
    }[];
}
export namespace resolve {
    let extensions: string[];
}
//# sourceMappingURL=webpack.config.d.ts.map