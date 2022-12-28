import {capitalCase} from "change-case";
import * as fs from "fs";
import {NavbarConfig, NavbarGroup, NavbarItem} from "vuepress";

export function createNavbar(home?: boolean): NavbarConfig {
	const navbar: (NavbarItem | NavbarGroup)[] = [];
	const base = __dirname + "/docs";
	fs.readdirSync('docs', {withFileTypes: true}).forEach(path => {
		if(path.name === ".vuepress" && path.isDirectory())
			return;
		else if(path.isDirectory()) {
			const group: NavbarGroup = {
				text: capitalCase(path.name),
				children: []
			};
			fs.readdirSync(base + "/" + path.name, {withFileTypes: true, encoding: 'utf-8'}).forEach(child => {
				let name_ext = child.name.split(".");
				if(name_ext[1] && name_ext[1] === "md") {
					const name = name_ext[0];
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
			// group.children.sort();
			// ? if group has no children, don't add it
			if(group.children.length > 0)
				navbar.unshift(group);
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

	(navbar as NavbarItem[] | NavbarGroup[]).sort((a, b) => {
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

const navbar = createNavbar();

export default navbar;

function isNavbarGroup(item: any): item is NavbarGroup {
	return item.children !== undefined && item.text !== undefined;
}
