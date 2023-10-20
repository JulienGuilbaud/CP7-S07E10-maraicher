import slugify from "slugify";

class Entity {
  slug;
  title;

  constructor(title) {
    this.title = title;
    this.slug = slugify(title, {
      lower: true,
    });
  }
}

export default Entity;
