import { NumberFilterType, TextFilterType } from "../types/notionApi";

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

  equals(otherText: string) {
    this.rich_text = {
      equals: otherText,
    };

    return this as TextFilterType;
  }
}

class NumberFilter extends Filter implements Partial<NumberFilterType> {
  type: "number";
  number?: NumberFilterType["number"];

  equals(value: number) {
    this.number = {
      equals: value,
    };

    return this as NumberFilterType;
  }
}

export const filter = (property: string) => ({
  get text() {
    return new TextFilter(property);
  },
  get number() {
    return new NumberFilter(property);
  },
});
