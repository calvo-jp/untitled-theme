const fs = require("fs/promises");
const path = require("path");
const svg64 = require("svg64").default;
const svgson = require("svgson");
const prettier = require("prettier");

const work_dir = process.cwd();
const assets_dir = path.join(work_dir, "assets/icons");
const output_dir = path.join(work_dir, "src/components/icons");

/**
 * @type {BufferEncoding}
 */
const encoding = "utf-8";

async function generate_react_icons() {
  const locations = await get_asset_locations();

  const import_paths = await Promise.all(
    locations.map(async (location) => {
      const component = await to_react_component(location);

      const destination = path.join(output_dir, `${component.name}.tsx`);

      await fs.writeFile(destination, await format_ts(component.content), {
        encoding,
      });

      return `./${component.name}`;
    })
  );

  await create_barrel_file(import_paths);
}

/**
 * @param {string[]} import_paths
 */
async function create_barrel_file(import_paths) {
  const location = path.join(output_dir, "index.ts");
  const content = import_paths
    .map((path) => `export * from '${path}';`)
    .join("\n");

  await fs.writeFile(location, await format_ts(content), { encoding });
}

/**
 * @param {string} location
 */
async function to_react_component(location) {
  const content = await fs.readFile(location, { encoding });

  const $0 = "REACT_REF";
  const $1 = "REACT_SPREAD_PROPS";

  const node = await svgson.parse(content, {
    camelcase: true,
    transformNode(node) {
      if (node.name === "svg") {
        node.attributes[$0] = "";
        node.attributes[$1] = "";

        delete node.attributes.width;
        delete node.attributes.height;
      }

      return node;
    },
  });

  const react_svg = svgson.stringify(node, {
    selfClose: true,
    transformAttr(key, value, esc) {
      if (key === $0) {
        return "ref={ref}";
      }

      if (key === $1) {
        return "{...props}";
      }

      if (key === "stroke") {
        return 'stroke="currentColor"';
      }

      if (key === "strokeWidth") {
        return 'strokeWidth="1.66667"';
      }

      return `${key}="${esc(value)}"`;
    },
  });

  const name = path.parse(location).name;
  const jsdoc_preview = svg64(content);
  const component_name = `${dash_to_pascal(name)}Icon`;
  const react_component = to_react_template(
    component_name,
    react_svg,
    jsdoc_preview
  );

  return {
    name: component_name,
    content: react_component,
  };
}

/**
 * @param {string} name
 * @param {string} content
 * @param {string} preview jsdoc preview
 */
function to_react_template(name, content, preview) {
  return `
    import * as React from 'react';

    /**
     * 
     * ![img](${preview})
     * 
     */
		export const ${name} = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
			return ${content};
		});

		${name}.displayName = '${name}'
	`;
}

async function get_asset_locations() {
  const filenames = await fs.readdir(assets_dir, { encoding });

  return filenames.map((fileName) => path.join(assets_dir, fileName));
}

/**
 * @param {string} content
 */
async function format_ts(content) {
  return await prettier.format(content, {
    ...(await prettier.resolveConfig(path.join(work_dir, ".prettierrc"))),
    parser: "typescript",
  });
}

/**
 * @param {string} subject
 */
function dash_to_pascal(subject) {
  return subject
    .split(/-/g)
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join("");
}

generate_react_icons();
