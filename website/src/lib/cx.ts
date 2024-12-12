type ClassnameValue = string | null | undefined;

export function cx(...classes: ClassnameValue[]): string {
  return classes.filter(Boolean).join(' ');
}
