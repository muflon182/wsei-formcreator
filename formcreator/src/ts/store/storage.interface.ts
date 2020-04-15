export default interface DataStorage {
	saveDocument: (values: any) => string;
	loadDocument: (id: string) => any;
	getDocuments: () => string[];
};