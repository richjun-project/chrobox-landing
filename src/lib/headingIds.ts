import type { Element, ElementContent, Root, RootContent } from 'hast';

/**
 * Heading anchor ids shared by the rendered article and its table of contents.
 * Unicode-aware on purpose: an ASCII-only `\w` filter turned every Korean,
 * Japanese, Arabic… heading into "" or "-", so non-Latin anchors collided.
 */
export function slugifyHeading(text: string): string {
  return text
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/** Returns a function that yields unique ids in document order. */
export function createHeadingSlugger() {
  const seen: Record<string, number> = {};

  return (text: string) => {
    const base = slugifyHeading(text) || 'section';
    const count = seen[base] ?? 0;
    seen[base] = count + 1;
    return count === 0 ? base : `${base}-${count}`;
  };
}

/** Plain text of a markdown heading line, with inline syntax removed. */
export function markdownHeadingText(raw: string): string {
  return raw
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .trim();
}

function textOf(node: ElementContent | RootContent): string {
  if (node.type === 'text') {
    return node.value;
  }

  if ('children' in node) {
    return (node.children as ElementContent[]).map(textOf).join('');
  }

  return '';
}

/** rehype plugin: assigns ids to h2/h3 with the same slugger the TOC uses. */
export function rehypeHeadingIds() {
  return (tree: Root) => {
    const nextId = createHeadingSlugger();

    const visit = (node: Root | Element) => {
      for (const child of node.children) {
        if (child.type !== 'element') {
          continue;
        }

        if (child.tagName === 'h2' || child.tagName === 'h3') {
          child.properties = { ...child.properties, id: nextId(textOf(child)) };
        }

        visit(child);
      }
    };

    visit(tree);
  };
}
