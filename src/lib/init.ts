import fs from 'fs';
import path from 'path';

export interface Resource {
	title: string;
	summary: string;
	comment: string;
	subject: string;
	grade: string;
	school: string;
	file_name: string;
	year: string;
}

export interface Database {
	subjects: string[];
	resources: Resource[];
}

const db: Database = { subjects: [], resources: [] };

function importFiles(directoryPath: string) {
	const items = fs.readdirSync(directoryPath, { withFileTypes: true });

	items.forEach((item) => {
		const fullPath = path.join(directoryPath, item.name);
		if (item.isDirectory()) {
			importFiles(fullPath);
		} else if (path.extname(item.name) === '.json') {
			const fileData = fs.readFileSync(fullPath, 'utf8');
			const resource: Resource = JSON.parse(fileData);

			if (!db.subjects.includes(resource.subject)) {
				db.subjects.push(resource.subject);
			}

			db.resources.push(resource);
		}
	});
}

importFiles('static/files');

fs.writeFile('src/lib/data.json', JSON.stringify(db), (err) => {
	if (err) throw err;
});
