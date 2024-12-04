import fs from 'fs';
import path from 'path';

const BASE_FILES_DIR = 'static/files';

export interface Resource {
	title: string;
	summary: string;
	comment: string;
	subject: string;
	school: string;
	file_name: string;
	year: string;
}

export interface Subject {
	name: string;
	resources : Resource[];
}

export interface Level {
	name: string;
	subjects: Subject[];
}

export interface Database {
	levels: Level[];
}

const db: Database = { levels: [] };

const levels = fs.readdirSync(BASE_FILES_DIR, { withFileTypes: true });

levels.forEach((level) => {
	if (level.isDirectory()) {
		const levelObj: Level = { name: level.name, subjects: [] };
		const subjects = fs.readdirSync(path.join(BASE_FILES_DIR, level.name), { withFileTypes: true })

		subjects.forEach((subject) => {
			if (subject.isDirectory()) {
				const subjectObj: Subject = { name: subject.name, resources: [] };
				const items = fs.readdirSync(path.join(BASE_FILES_DIR, level.name, subject.name), { withFileTypes: true });

				items.forEach((item) => {
					if (path.extname(item.name) === '.json'){
						const fileData = fs.readFileSync(path.join(BASE_FILES_DIR, level.name, subject.name, item.name), 'utf8');
						const resource: Resource = JSON.parse(fileData);
						subjectObj.resources.push(resource);
					}
				});

				levelObj.subjects.push(subjectObj);
			}
		});

		db.levels.push(levelObj)
	}
});

fs.writeFile('src/lib/data.json', JSON.stringify(db), (err) => {
	if (err) throw err;
});
