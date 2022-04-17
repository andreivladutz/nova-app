import { TextFilterType } from "./types/notionApi";

class Filter {
  property: string;

  constructor(propertyName: string) {
    this.property = propertyName;
  }
}

class TextFilter extends Filter implements Partial<TextFilterType> {
  type: "rich_text";
  rich_text?: TextFilterType["rich_text"];

  contains(subtext: string) {
    this.rich_text = {
      contains: subtext,
    };

    return this as TextFilterType;
  }
}

export const filter = (property: string) => ({
  get text() {
    return new TextFilter(property);
  },
});
