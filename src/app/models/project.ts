export class Project {
    key: string;
    branchPath: string;
    title: string;
    metadata: {
        codeSystemShortName: string;
    };

    constructor(key, title, branchPath) {
        this.key = key;
        this.title = title;
        this.branchPath = branchPath;
    }
}
