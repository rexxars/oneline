type JSTag = (literals: TemplateStringsArray, ...placeholders: any[]) => string;

interface TemplateTag {
  (str: string): string;
  (tag: JSTag): TemplateTag;
  (literals: TemplateStringsArray, ...placeholders: any[]): string;
}

export = TemplateTag
