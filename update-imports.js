#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively find all TypeScript files
function findTsFiles(dir) {
	const files = [];
	const entries = fs.readdirSync(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			files.push(...findTsFiles(fullPath));
		} else if (entry.name.endsWith('.ts') && !entry.name.endsWith('.d.ts')) {
			files.push(fullPath);
		}
	}

	return files;
}

// Function to update import statements in a file
function updateImports(filePath) {
	let content = fs.readFileSync(filePath, 'utf8');
	let updated = false;

	// Fix the special case for Helpers.js
	const helpersRegex = /from\s+['"](\.[^'"]*\/Helpers)\.js['"];/g;
	content = content.replace(helpersRegex, (match, importPath) => {
		updated = true;
		return `from '${importPath}/index.js';`;
	});

	// Match relative imports without file extensions
	const importRegex = /from\s+['"](\.[^'"]*?)['"];/g;
	const updatedContent = content.replace(importRegex, (match, importPath) => {
		// Skip if it already has an extension
		if (importPath.endsWith('.js')) {
			return match;
		}

		updated = true;
		return `from '${importPath}.js';`;
	});

	if (updated) {
		fs.writeFileSync(filePath, updatedContent);
		console.log(`Updated imports in ${filePath}`);
	}
}

// Main function
function main() {
	const srcDir = path.join(__dirname, 'src');
	const tsFiles = findTsFiles(srcDir);

	for (const file of tsFiles) {
		updateImports(file);
	}

	console.log('Import statements updated successfully!');
}

main();
