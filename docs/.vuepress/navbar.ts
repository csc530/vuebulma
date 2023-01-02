import {capitalCase} from "change-case";
import * as fs from "fs";
import {resolve} from "path";
import {NavbarConfig, NavbarGroup, NavbarItem} from "vuepress";

export function createNavbar(home?: boolean, docsPath?: fs.PathLike): NavbarConfig {
	const navbar: (NavbarItem | NavbarGroup)[] = [];
	if(!docsPath)
		docsPath = resolve('docs');
	//append / to path if not present
	if(docsPath.toString().substring(-1) !== '/')
		docsPath = docsPath + '/';
	fs.readdirSync(docsPath, {withFileTypes: true}).forEach(path => {
		if(path.name === ".vuepress" && path.isDirectory())
			return;
		else if(path.isDirectory()) {
			const group: NavbarGroup = {
				text: capitalCase(path.name),
				children: []
			};

			fs.readdirSync(docsPath + "/" + path.name, {withFileTypes: true, encoding: 'utf-8'}).forEach(child => {
				let name_extension = child.name.split(".");
				if(name_extension[1] && name_extension[1] === "md") {
					const name = name_extension[0];
					const item: NavbarItem = {
						text: name === 'index' ? `Overview` : capitalCase(name.replace('Bulma', '')),
						link: `/${path.name}/${name}.html`
					};
					if(name === 'index')
						group.children.unshift(item);
					else
						group.children.push(item);
				}
			});

			if(group.children.length > 0) {
				navbar.unshift(group);
				(group.children as NavbarItem[]).sort((a, b) => {
					if(a.text === "Home" || a.text === "Overview")
						return -1;
					else if(b.text === "Home" || b.text === "Overview")
						return 1;
					else return a.text.localeCompare(b.text)
				});
			}
		}
		else if(path.isFile() && path.name.endsWith(".md")) {
			const name = path.name.replace("_", " ").replace("-", " ").slice(0, -3);
			if(name === "index")
				navbar.unshift({
					text: 'Home',
					link: "/" + path.name.replace(".md", ".html")
				});
			else
				navbar.push({
					text: capitalCase(name),
					link: "/" + path.name.replace(".md", ".html")
				});
		}
	});

	(navbar as (NavbarItem | NavbarGroup)[]).sort((a, b) => {
		if(a.text === "Home" || a.text === "Overview")
			return -1;
		else if(b.text === "Home" || b.text === "Overview")
			return 1;
		else if(isNavbarGroup(a) && isNavbarGroup(b))
			return a.text.localeCompare(b.text);
		else if(isNavbarGroup(a))
			return 1;
		else if(isNavbarGroup(b))
			return -1;
		else
			return a.text.localeCompare(b.text);
	});

	if(home === false || home === undefined)
		navbar.shift();

	return navbar;
}

function isNavbarGroup(item: any): item is NavbarGroup {
	return item.children !== undefined && item.text !== undefined;
}

createNavbar(true, '../');