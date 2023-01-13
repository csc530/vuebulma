import Case from "case";
import * as fs from "fs";
import * as Path from "path";
import {resolve} from "path";
import {NavbarConfig, NavbarGroup, NavbarItem, NavLink} from "vuepress";

const sep = Path.sep;

/**
 * Creates a navbar item from a directory entry for vuepress markdown file
 * @returns {NavbarItem} - The navbar item
 * @param filePath - The path to the markdown file
 * @param isGroup - Whether the navbar item is in a group
 */
function createNavItem(filePath: string, isGroup?: boolean): NavbarItem {
	const name = Case.sentence(filePath.split(sep).pop().slice(0, -3));

	const item: NavbarItem = {
		text: name,
		link: filePath.slice(0, -3) + ".html"
	}
	if(name === "Index" && isGroup)
		item.text = "Overview";
	else if(name === "Index")
		item.text = 'Home';
	return item;
}

function sortNav(navbar: NavbarConfig): NavbarConfig {
	return navbar.sort((a, b) => {
		const aVal = typeof a === "string" ? a : a.text;
		const bVal = typeof b === "string" ? b : b.text;
		if(aVal === "Home" || aVal === "Overview")
			return -1;
		else if(bVal === "Home" || bVal === "Overview")
			return 1;
		else if(isNavbarGroup(a) && isNavbarGroup(b)) {
			sortNavbarGroup(a);
			sortNavbarGroup(b);
			return a.text.localeCompare(b.text);
		}
		else if(isNavbarGroup(a)) {
			sortNavbarGroup(a);
			return 1;
		}
		else if(isNavbarGroup(b)) {
			sortNavbarGroup(b);
			return -1;
		}
		else
			return aVal.localeCompare(bVal);
	});
}

function sortNavbarGroup(group: NavbarGroup) {
	(group.children as NavbarItem[]).sort((a, b) => {
		if(a.text === "Home" || a.text === "Overview")
			return -1;
		else if(b.text === "Home" || b.text === "Overview")
			return 1;
		else
			return a.text.localeCompare(b.text)
	});
	for(var i = 1; i < arguments.length; i++)
		if(isNavbarGroup(arguments[i]))
			sortNavbarGroup(arguments[i]);
}

function cleanNavbar(navbar: NavbarConfig, home: boolean): NavbarConfig {
	const clean = (item: string | NavLink | NavbarGroup): boolean => {
		if(typeof item === "string")
			return item && item !== "";
		else if(isNavbarGroup(item)) {
			item.children = cleanNavbar(item.children, home);
			return item.children.length > 0;
		}
		else if(isNavbarItem(item))
			return item && item.text && item.text !== '';
		else
			return !!item
	};
	const cleaned = navbar.filter(x => x)
	                      .filter(item => {
		                      if(typeof item === "string")
			                      return item && item !== "";
		                      if(isNavbarGroup(item)) {
			                      item.children = item.children.filter(clean);
			                      return item.children.length > 0;
		                      }
		                      else
			                      return item.link !== undefined;
	                      });
	//remove bulma prefix from text of clean navbar items and subitems
	const removeBulmaPrefix = (item: string | NavLink | NavbarGroup) => {
		if(typeof item === "string")
			return Case.sentence(item.replace(/^Bulma/, ""));
		else if(isNavbarGroup(item)) {
			item.text = Case.sentence(item.text.replace(/^Bulma/, ""));
			item.children = item.children.map(removeBulmaPrefix);
			return item;
		}
		else if(isNavbarItem(item)) {
			item.text = Case.sentence(item.text.replace(/^Bulma/, ""));
			return item;
		}
		else
			return item;
	}
	return cleaned.map(removeBulmaPrefix).filter(x => home ? x : x.text !== "Home");
}

export function createNavbar(home?: boolean, docsPath?: string) {
	const navbar: (NavbarItem | NavbarGroup)[] = [];
	docsPath = resolve(docsPath || './docs');

	fs.readdirSync(docsPath, {withFileTypes: true}).forEach(path => {
		if(path.isDirectory()) {
			const group = {
				text: Case.sentence(path.name),
				children: []
			};
			group.children = fs.readdirSync(resolve(docsPath, path.name), {withFileTypes: true}).map(child => {
				if(child.isFile() && child.name.toLowerCase().endsWith("md"))
					return createNavItem(path.name + sep + child.name, true);
				else if(child.isDirectory())
					return {
						text: Case.sentence(child.name),
						children: fs.readdirSync(resolve(docsPath, path.name, child.name), {withFileTypes: true}).map(grandchild => {
							if(grandchild.isFile() && grandchild.name.toLowerCase().endsWith("md"))
								return createNavItem(path.name + sep + child.name + sep + grandchild.name, true);
						})
					};
			});
			navbar.push(group);
		}
		else if(path.isFile() && path.name.toLowerCase().endsWith("md"))
			navbar.push(createNavItem(path.name));
	});

	return cleanNavbar(sortNav(navbar), home);
}


function isNavbarItem(item: any): item is NavbarItem {
	return item && item.text !== undefined && item.link !== undefined;
}

function isNavbarGroup(item: any): item is NavbarGroup {
	return item && item.children && item.text;
}