/** Fills `{placeholder}` slots in a UI string. Dependency-free so client components can import it. */
export function formatCopy(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.split(`{${key}}`).join(value),
    template,
  );
}
